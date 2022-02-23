var anchorClass = 'anchor-russiangram' + chrome.runtime.id;
var anchorSelector = '.' + anchorClass;
var uniqClass = 'russiangram-' + chrome.runtime.id;
var uniqSelector = '.' + uniqClass;
var waitClass = 'wait-' + chrome.runtime.id;
var waitSelector = '.' + waitClass;

var container = document.createElement('div');
container.classList.add(uniqClass);
document.querySelector('body').appendChild(container);

var loadPopupContentRequest = null;
var loadDeclensionTableRequest = null;

function injectStyles() {
    injectCSSFile('css/common.css', false);
    injectCSSFile('css/bootstrap.css', false);
    injectCSSFile('css/popover.css', false);
    injectCSSFile('css/spinner.css', false);
    injectCSSFile('css/accordion.css', false);
    injectCSSFile('css/tables.css', false);
}

function injectCSSFile(path, async) {
    $.ajax({
        url: chrome.extension.getURL(path),
        async: async,
        success: function(data) {
            var styleNode = document.createElement('style');
            styleNode.type = 'text/css';
            styleNode.textContent = data.replace(/russiangram/gi, uniqClass);
            styleNode.classList.add('russiangram-style');
            document.querySelector('body').appendChild(styleNode);
        },
    });
}

function injectJs() {
    if ($('.russiangram-script').length > 0) {
        App.config.debug && console.log('Scripts are already injected.');
        return false;
    }

    $.ajax({
        url: chrome.extension.getURL('js/jquery.min.js'),
        async: false,
        success: function(data) {
            var scriptTag = document.createElement('script');
            scriptTag.innerHTML = data;
            scriptTag.id = 'jq_script';
            scriptTag.classList.add('russiangram-script');
            document.querySelector('body').appendChild(scriptTag);
        },
    });

    $.ajax({
        url: chrome.extension.getURL('js/bootstrap.min.js'),
        async: false,
        success: function(data) {
            var scriptTag = document.createElement('script');
            scriptTag.innerHTML = data;
            scriptTag.id = 'bs_script';
            scriptTag.classList.add('russiangram-script');
            document.querySelector(uniqSelector).appendChild(scriptTag);
        },
    });

    $.ajax({
        url: chrome.extension.getURL('js/handlebars.min.js'),
        async: false,
        success: function(data) {
            var scriptTag = document.createElement('script');
            scriptTag.innerHTML = data;
            scriptTag.id = 'hb_script';
            scriptTag.classList.add('russiangram-script');
            document.querySelector(uniqSelector).appendChild(scriptTag);

            Handlebars.registerHelper('upper', handlebarsHelper.upper);
            Handlebars.registerHelper('lower', handlebarsHelper.lower);
            Handlebars.registerHelper('stressed', handlebarsHelper.stressedString);
            Handlebars.registerHelper('join', handlebarsHelper.join);
            Handlebars.registerHelper('first', handlebarsHelper.first);
            Handlebars.registerHelper('chain', handlebarsHelper.chain);
            Handlebars.registerHelper('compare', handlebarsHelper.compare);
        },
    });
}

var handlebarsHelper = {
    stressedString: function(str) {
        return str.replace(
            /((.)(\u0301))/mg,
            '<span class="stressed">$2</span>'
        );
    },
    compare: function(lvalue, operator, rvalue, options) {

        if (arguments.length < 3) {
            throw new Error(
                'Handlebars Helper \'compare\' needs 2 parameters');
        }

        if (options === undefined) {
            options = rvalue;
            rvalue = operator;
            operator = '===';
        }

        var operators = {
            '==': function(l, r) {
                return l == r;
            },
            '===': function(l, r) {
                return l === r;
            },
            '!=': function(l, r) {
                return l != r;
            },
            '!==': function(l, r) {
                return l !== r;
            },
            '<': function(l, r) {
                return l < r;
            },
            '>': function(l, r) {
                return l > r;
            },
            '<=': function(l, r) {
                return l <= r;
            },
            '>=': function(l, r) {
                return l >= r;
            },
            'typeof': function(l, r) {
                return typeof l == r;
            },
        };

        if (!operators[operator]) {
            throw new Error(
                'Handlebars Helper \'compare\' doesn\'t know the operator ' +
                operator);
        }

        var result = operators[operator](lvalue, rvalue);

        if (result) {
            return options.fn(this);
        } else {
            return options.inverse(this);
        }
    },
    chain: function() {
        var helpers = [];
        var args = Array.prototype.slice.call(arguments);
        var argsLength = args.length;
        var i;
        var arg;

        for (i = 0, arg = args[i]; i < argsLength; arg = args[++i]) {
            if (Handlebars.helpers[arg]) {
                helpers.push(Handlebars.helpers[arg]);
            } else {
                args = args.slice(i);
                break;
            }
        }

        while (helpers.length) {
            args = [helpers.pop().apply(Handlebars.helpers, args)];
        }

        return args.shift();
    },
    first: function(array) {
        return array[0];
    },
    join: function(array) {
        return '<div class="value-group"><div class="value">' +
            array.join('</div><div class="value">') + '</div></div>';
    },
    lower: function(aString) {
        return aString.toLowerCase();
    },
    upper: function upper(aString) {
        return aString.toUpperCase();
    },
};

function deleteJs() {
    $('#bs_script').remove();
    $('#hb_script').remove();
}

function initializePopup() {
    if ($(uniqSelector + ' .popover').length > 0) {
        App.config.debug && console.log('Rejected. Popup already exists.');
        return false;
    }

    var $el = $(anchorSelector);

    $el.popover({
        title: '<div class="spinner-container"><div class="dot-carousel"></div></div>',
        content: '<div class="spinner-container"><div class="dot-carousel"></div></div>',
        container: uniqSelector,
        html: true,
        placement: 'bottom',
        trigger: 'manual',
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><div class="popover-header"></div><div class="popover-body"></div></div>',
    });

    $el.on('shown.bs.popover', function() {
        $(document).one('keyup', function(event) {
            if (event.which === 27) {
                App.debug && console.log('hide by \'Esc\'');
                $el.popover('hide');
            }
        });
    });

    $el.on('hidden.bs.popover', function() {
        App.debug && console.log('hidden.bs.popover');

        var $anchor = $(anchorSelector);
        $anchor.replaceWith($anchor.html());

        $(this).popover('dispose');
        deleteJs();
    });

    $(document).on('mousedown', function(e) {
        var container = $(uniqSelector + ' .popover');

        if (!container.is(e.target) && container.has(e.target).length === 0) {
            App.debug && console.log('hide by outer click');
            $el.popover('hide');
        }
    });
}

function initializeAdditionPopup(lemma, data) {
    var $el = $(uniqSelector + ' #declensionTables');

    var options = {
        container: uniqSelector + ' #declensionTables',
        html: true,
        content: 'Loading...',
        trigger: 'manual',
        template: '<div class="popover child-popover" role="tooltip">' +
            '<div class="arrow"></div>' +
            '<div class="popover-header"></div>' +
            '<div class="popover-body"></div></div>',
        popperConfig: {
            placement: 'right-end',
        },
    };

    $el.popover(options);

    $('[data-toggle="addition-popup"]').on('click', function(event) {
        event.preventDefault();

        console.log('click', $(this).attr('href'));
        $el.popover('show');

        var selector = $(this).attr('href');
        var content = $(selector).prop('outerHTML');
        $el.find('.popover-body').html(content);
    });

    $el.on('click', function(e) {
        var $target = $(e.target);

        var isToggle = $target.attr('data-toggle') === 'addition-popup';
        var isChildOfToggle = $target.closest(
            '[data-toggle="addition-popup"]').length > 0;

        var isPopup = $target.hasClass('child-popover');
        var isChildOfPopup = $target.closest('.child-popover').length > 0;

        if (!isToggle && !isChildOfToggle && !isPopup && !isChildOfPopup) {
            $el.popover('hide');
        }
    });

    var $cell = findCellByText(lemma, $(uniqSelector + ' .participle-tables'));
    if (
        $cell && data.variants[0] !== undefined
        && data.variants[0].type === 'Verb'
    ) {
        var content = $cell.closest('table').prop('outerHTML');

        $el.popover('show');
        $el.find('.popover-body').html(content);
    }
}

function handle() {
    var selectedText = getSelectedText();
    if (selectedText === '') {
        return false;
    }

    if (selectedText.split(' ').length > App.config.maxPhraseLength) {
        App.config.debug && console.log('Rejected! Too many words.');
        return;
    }

    var range = window.getSelection().getRangeAt(0);
    //injecting bootstrap on demand to avoid conflict with websites
    injectJs();
    var beforeWordRange = document.createRange();
    beforeWordRange.setStartBefore(document.body.firstChild);
    beforeWordRange.setEnd(range.startContainer, range.startOffset);

    var beforeText = beforeWordRange.toString();
    var afterWordRange = document.createRange();
    afterWordRange.setStart(
        range.startContainer,
        range.endOffset > range.startContainer.length
            ? range.startContainer.length
            : range.endOffset
    );
    afterWordRange.setEndAfter(document.body.lastChild);

    var afterText = afterWordRange.toString();

    beforeText = beforeText.substr(-1 * App.config.parsePhrase.left,
        App.config.parsePhrase.left);
    var context = beforeText
        + selectedText + ' '
        + afterText.substr(0, App.config.parsePhrase.right);
    var index = beforeText.length;

    App.config.debug && console.log('context: ' + context);
    App.config.debug && console.log('index: ' + index);

    var wrapper = '<span class="' + waitClass + ' ' + anchorClass + '"></span>';
    var highlightDiv = $(wrapper)[0];

    try {
        range.surroundContents(highlightDiv);
    } catch (exception) {
        $(range.endContainer).before(wrapper);
    }

    initializePopup();

    setTimeout(function() {
        showPopup();
    }, 500);

    var msg = {
        context: context,
        index: context.indexOf(selectedText),
        word: selectedText,
    };

    loadPopupContent(msg, loadedPopupContentCallback);
    loadDeclensionTable(msg, loadedDeclensionTableCallback);
}

function loadPopupContent(msg, callBack) {
    if (null !== loadPopupContentRequest) {
        loadPopupContentRequest.abort();
    }

    loadPopupContentRequest = $.ajax({
        url: App.config.getPopupInfo.url,
        data: {
            context: msg.context,
            index: msg.index,
        },
        method: 'POST',
        timeout: App.config.getPopupInfo.timeout,
        success: function(data) {
            callBack({content: data}, msg);
        },
        error: function(request, errorTextStatus) {
            if (errorTextStatus === 'abort') {
                return;
            }

            callBack({
                err: 'Could not reach russiangram.com',
            });
        },
    });
}

function loadDeclensionTable(msg, callBack) {
    if (null !== loadDeclensionTableRequest) {
        loadDeclensionTableRequest.abort();
    }

    loadDeclensionTableRequest = $.ajax({
        url: App.config.declensionTable.url,
        data: {
            word: msg.word,
        },
        method: 'GET',
        timeout: App.config.getPopupInfo.timeout,
        success: function(data) {
            callBack({
                content: data,
                word: msg.word,
                lemma: msg.lemma,
            });
        },
        error: function(request, errorTextStatus) {
            if (errorTextStatus === 'abort') {
                return;
            }

            callBack({
                err: 'Could not reach russiangram.com',
            });
        },
    });
}

function loadedPopupContentCallback(response, msg) {
    showPopup();

    var $popupHeaderInner = $(uniqSelector + ' .popover-header .spinner-container');
    var $popupHeader = $popupHeaderInner.parent();

    if (response.err) {
        $popupHeader.fadeOut(0, function() {
            $popupHeader.html(response.err).hide();
            $popupHeader.fadeIn(500);
        });
        return;
    }

    var title = handlebarsHelper.stressedString(response.content).replace('<br/>', '&nbsp;&nbsp;');

    $popupHeader.fadeOut(0, function() {
        $popupHeader.html(title).hide();
        $popupHeader.fadeIn(500);
    });

    msg.lemma = response.content.split('<br/>')[0];
}

function loadedDeclensionTableCallback(response) {
    showPopup();

    var $popupBodyInner = $(uniqSelector + ' .popover-body .spinner-container');
    var $popupBody = $popupBodyInner.parent();

    if (response.err) {
        $popupBody.fadeOut(0, function() {
            $popupBody.html('<div class="text-danger">' + response.err + '</div>').hide();
            $popupBody.fadeIn(500);
        });
        return;
    }

    if (response.content.length > 0) {
        var data = repackResponseData(response);

        var tpl = loadTemplate();
        var compiled = Handlebars.compile(tpl);

        if ($(uniqSelector + '.popover #declensionTables').length > 0) {
            App.config.debug && console.log('Rejected. Declension tables already exists.');
            return false;
        }

        $popupBody.fadeOut(0, function() {
            $popupBody.html((compiled(data))).hide();
            $popupBody.fadeIn(500);
        });

        if (response.word) {
            highlightLemma(response.word);
        }

        initializeAdditionPopup(response.word, data);
    } else {
        $popupBody.animate({
            opacity: 0,
        }, {
            queue: true,
            duration: 500,
        }).animate({
            width: 0,
            height: 0,
            padding: 0,
        }, {
            queue: true,
            duration: 250,
            done: $popupBody.html(),
        });
    }
}

function showPopup() {
    $(waitSelector).popover('show').removeClass(waitClass);
    $(anchorClass).popover('update');
}

function getSelectedText() {
    var selection = window.getSelection && window.getSelection().toString();
    selection = selection.trim();

    return selection;
}

function repackResponseData(response) {
    var data = {
        variants: [],
    };

    for (var i = 0; i < response.content.length; i++) {
        var element = response.content[i];

        var variant = element.value;
        variant.type = element.type;

        data.variants.push(variant);
    }

    return data;
}

function highlightLemma(lemma) {
    var cleanLemma = lemma.replace(/\u0301/mg, '').replace(/ё/gi, 'е').toLowerCase();

    $(uniqSelector + ' tbody .value').
        each(function(index, element) {
            var $el = $(element);
            var text = $el.text();
            var cleanText = text.replace(/ё/gi, 'е').toLowerCase();

            if (cleanText === cleanLemma) {
                if (lemma.match(/ё/gi) && !text.match(/ё/gi)) {
                    return false;
                }

                $el.addClass('highlighted');
            }
        });
}

function findCellByText(text, $container) {
    text = text.replace(/\u0301/mg, '').replace(/ё/gi, 'е').toLowerCase();

    var $cells = $container.find('.value');

    for (var i = 0; i < $cells.length; i++) {
        var $cell = $($cells[i]);
        var cellText = $cell.text().replace(/ё/gi, 'е').toLowerCase();

        if (cellText === text) {
            return $cell;
        }
    }

    return null;
}

function loadTemplate() {
    return $.ajax({
        type: 'GET',
        url: chrome.extension.getURL(
            '/html/tables.hbs'
        ),
        async: false,
    }).responseText;
}

$(document).on('ready', function() {
    var ALT_KEY = 'Alt';

    var $body = $('body');
    var isPressedAlt = false;

    $(window).on('blur', function() {
        App.config.debug && console.log('Reset Alt.');
        isPressedAlt = false;
    });

    $body.on('keydown', function(e) {
        if (e.key === ALT_KEY) {
            App.config.debug && console.log('Pressed Alt.');
            isPressedAlt = true;
        }
    });

    $body.on('keyup', function(e) {
        if (e.key === ALT_KEY) {
            App.config.debug && console.log('Not pressed Alt.');
            isPressedAlt = false;
        }
    });

    $body.on('selectstart', function() {
        $body.off('mouseup', onMouseUp);
        $body.on('mouseup', onMouseUp);
    });

    $body.on('select', onMouseUp);

    function onMouseUp(e) {
        if (e.altKey || isPressedAlt) {
            $body.off('mouseup', onMouseUp);
            handle();
        }
    }

    chrome.extension.onMessage.addListener(function(msg, sender, sendResponse) {
        if (msg.action === 'lookUp') {
            handle();
            sendResponse('accepted');
        }
    });
});

/* Add CSS files */
injectStyles();
