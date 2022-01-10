var waitResponseClass=chrome.runtime.id+'-wait-response'

function injectCSS() {
    $.ajax({
        url: chrome.extension.getURL('css/twbs.min.css'),
        success: function (data) {
            var css = data.replace(/\.\.\/fonts/g, chrome.extension.getURL('fonts'))
            var styleNode = document.createElement("style");
            styleNode.type = "text/css";
            styleNode.textContent = css;
            document.head.appendChild(styleNode);
        }
    });
    $.ajax({
        url: chrome.extension.getURL('css/font-awesome.min.css'),
        success: function (data) {
            var faCSS = data.replace(/\.\.\/fonts/g, chrome.extension.getURL('fonts'))
            var styleNode = document.createElement("style");
            styleNode.type = "text/css";
            styleNode.textContent = faCSS;
            document.head.appendChild(styleNode);
        }
    });
}
function injectJs(){
    $.ajax({
        url: chrome.extension.getURL('js/bootstrap.min.js'),
        success: function (data) {
            let scriptTag=document.createElement("script")
            scriptTag.innerHTML=data
            scriptTag.id="bs_script"
            document.body.appendChild(scriptTag);
        }
    });
}

function getPopupInfo(word, context, getPopupInfoCallback) {
    var msg = {
        context: context,
        index: context.indexOf(word)
    }

    loadPopupContent(msg, getPopupInfoCallback);
}

function showPopup(content,selectedword) {
    var $el = $('.'+waitResponseClass)
    $el.parent().addClass('twbs')
    
    $el.popover({
        content: content,
        title: selectedword,
        container:"body",
        html:true,
        placement: 'bottom',
        trigger: 'manual',
        template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
    })
    $el.on('shown.bs.popover', function () {
        $(document).one('click', function (event) {
            $el.popover('hide')
        })
        $(document).one('keyup', function (event) {
            if(event.which===27) {
                $el.popover('hide')
            }
        })
    })
    $el.on('hidden.bs.popover', function () {
        $(this).popover('dispose')
        $("#bs_script").remove()
    })

    $el.popover('show')

    $('.'+waitResponseClass).removeClass(waitResponseClass)
}

function onDoubleClick(e) {
    var word = window.getSelection && window.getSelection().toString()
    word = word.trim()
    App.config.debug && console.log('word: ' + word)

    if (word !== '') {
        var range = window.getSelection().getRangeAt(0)
        //injecting bootstrap on demand to avoid conflict with websites
        injectJs()
        var beforeWordRange = document.createRange()
        beforeWordRange.setStartBefore(document.body.firstChild)
        beforeWordRange.setEnd(range.startContainer, range.startOffset)

        var beforeText = beforeWordRange.toString()
        var afterWordRange = document.createRange()
        afterWordRange.setStart(range.startContainer, range.endOffset)
        afterWordRange.setEndAfter(document.body.lastChild);

        var afterText = afterWordRange.toString()

        beforeText = beforeText.substr(-1 * App.config.parsePhrase.left, App.config.parsePhrase.left)
        var context = beforeText
            + word + ' '
            + afterText.substr(0, App.config.parsePhrase.right)
        var index = beforeText.length

        App.config.debug && console.log('context: ' + context)
        App.config.debug && console.log('index: ' + index)

        var highlightDiv = $('<span class="'+waitResponseClass+'"></span>')[0];
        range.surroundContents(highlightDiv);

        getPopupInfo(word, context, function (response) {

            if (response.err) {
                showPopup('<div class="text-danger">'+response.err+'</div>',word)
                return
            }
            showPopup(response.content,word)
        })
    }
}

function loadPopupContent(msg, responseCallback) {
    $.ajax({
        url: App.config.getPopupInfo.url,
        data: {
            context: msg.context,
            index: msg.index
        },
        method: 'POST',
        timeout: App.config.getPopupInfo.timeout,
        success: function (data) {
            responseCallback({content: data})
        },
        error: function () {
            responseCallback({err: 'Could not reach russiangram.com'})
        }
    })
}

$(document).ready(function () {
    $('body').dblclick(function (e) {
        if (e.altKey) {
            onDoubleClick(e);
        }
    })
})

/* Add CSS files */
injectCSS()
