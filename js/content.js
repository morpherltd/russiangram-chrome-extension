var waitResponseClass = chrome.runtime.id + '-wait-response';

function injectCSS() {
    $.ajax({
        url: chrome.extension.getURL('css/twbs.min.css'),
        success: function(data) {
            var css = data.replace(/\.\.\/fonts/g,
                chrome.extension.getURL('fonts'));
            var styleNode = document.createElement('style');
            styleNode.type = 'text/css';
            styleNode.textContent = css;
            document.head.appendChild(styleNode);
        },
    });
    $.ajax({
        url: chrome.extension.getURL('css/font-awesome.min.css'),
        success: function(data) {
            var faCSS = data.replace(/\.\.\/fonts/g,
                chrome.extension.getURL('fonts'));
            var styleNode = document.createElement('style');
            styleNode.type = 'text/css';
            styleNode.textContent = faCSS;
            document.head.appendChild(styleNode);
        },
    });
    $.ajax({
        url: chrome.extension.getURL('css/tables.css'),
        success: function(data) {
            var faCSS = data.replace(/\.\.\/fonts/g,
                chrome.extension.getURL('fonts'));
            var styleNode = document.createElement('style');
            styleNode.type = 'text/css';
            styleNode.textContent = faCSS;
            document.head.appendChild(styleNode);
        },
    });
}

function injectJs() {
    $.ajax({
        url: chrome.extension.getURL('js/bootstrap.min.js'),
        success: function(data) {
            var scriptTag = document.createElement('script');
            scriptTag.innerHTML = data;
            scriptTag.id = 'bs_script';
            document.body.appendChild(scriptTag);
        },
    });
    $.ajax({
        url: chrome.extension.getURL('js/handlebars.min.js'),
        success: function(data) {
            var scriptTag = document.createElement('script');
            scriptTag.innerHTML = data;
            scriptTag.id = 'hb_script';
            document.body.appendChild(scriptTag);

            Handlebars.registerHelper('upper', function(aString) {
                return aString.toUpperCase();
            });

            Handlebars.registerHelper('lower', function(aString) {
                return aString.toLowerCase();
            });

            Handlebars.registerHelper('stressed', stressedString);

            Handlebars.registerHelper('join', function(array) {
                return '<div class="cell__value">' +
                    array.join('</div><div class="cell__value">') + '</div>';
            });

            Handlebars.registerHelper('first', function(array) {
                return array[0];
            });

            Handlebars.registerHelper('chain', function() {
                var helpers = [];
                var args = Array.prototype.slice.call(arguments);
                var argsLength = args.length;
                var index;
                var arg;

                for (index = 0, arg = args[index];
                    index < argsLength;
                    arg = args[++index]) {
                    if (Handlebars.helpers[arg]) {
                        helpers.push(Handlebars.helpers[arg]);
                    } else {
                        args = args.slice(index);
                        break;
                    }
                }

                while (helpers.length) {
                    args = [helpers.pop().apply(Handlebars.helpers, args)];
                }

                return args.shift();
            });

            Handlebars.registerHelper('compare',
                function(lvalue, operator, rvalue, options) {

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

                }
            );
        },
    });
}

function stressedString(str) {
    return str.replace(
        /((.)(\u0301))/mg,
        '<span class="stressed">$2</span>'
    );
}

function showPopup(content, selectedWord) {
    var $el = $('.' + waitResponseClass);
    $el.parent().addClass('twbs');

    $el.popover({
        title: stressedString(content).replace('<br/>', '&nbsp;&nbsp;'),
        container: 'body',
        html: true,
        placement: 'bottom',
        trigger: 'manual',
        template: '<div class="popover morpher-popup" role="tooltip"><div class="arrow"></div><div class="popover-header"></div></div>',
    });
    $el.on('shown.bs.popover', function() {
        $(document).one('keyup', function(event) {
            if (event.which === 27) {
                $el.popover('hide');
            }
        });
    });
    $el.on('hidden.bs.popover', function() {
        $(this).popover('dispose');
        $('#bs_script').remove();
    });

    $(document).on('click', function(e) {
        var container = $('.morpher-popup.popover');

        if (!container.is(e.target) && container.has(e.target).length === 0) {
            $el.popover('hide');
        }
    });
}

function onDoubleClick() {
    var word = window.getSelection && window.getSelection().toString();
    word = word.trim();
    App.config.debug && console.log('word: ' + word);

    if (word !== '') {
        var range = window.getSelection().getRangeAt(0);
        //injecting bootstrap on demand to avoid conflict with websites
        injectJs();
        var beforeWordRange = document.createRange();
        beforeWordRange.setStartBefore(document.body.firstChild);
        beforeWordRange.setEnd(range.startContainer, range.startOffset);

        var beforeText = beforeWordRange.toString();
        var afterWordRange = document.createRange();
        afterWordRange.setStart(range.startContainer, range.endOffset);
        afterWordRange.setEndAfter(document.body.lastChild);

        var afterText = afterWordRange.toString();

        beforeText = beforeText.substr(-1 * App.config.parsePhrase.left,
            App.config.parsePhrase.left);
        var context = beforeText
            + word + ' '
            + afterText.substr(0, App.config.parsePhrase.right);
        var index = beforeText.length;

        App.config.debug && console.log('context: ' + context);
        App.config.debug && console.log('index: ' + index);

        var highlightDiv = $(
            '<span class="' + waitResponseClass + '"></span>')[0];
        range.surroundContents(highlightDiv);

        loadPopupContent({
            context: context,
            index: context.indexOf(word),
            word: word,
        }, loadPopupContentCallback);
    }
}

function loadPopupContentCallback(response, msg) {
    if (response.err) {
        showPopup(
            '<div class="popover-body"><div class="text-danger">' +
            response.err + '</div></div>',
            msg.word,
        );
        return;
    }
    showPopup(response.content, msg.word);

    msg.lemma = response.content.split('<br/>')[0];

    loadDeclensionTable(msg, loadDeclensionTableCallback);
}

function loadDeclensionTableCallback(response) {
    if (response.err) {
        $('.morpher-popup.popover').append(
            '<div class="popover-body"><div class="text-danger">' +
            response.err + '</div></div>'
        );
        return;
    }

    $('.' + waitResponseClass).popover('show').removeClass(waitResponseClass);

    if (response.content.length > 0) {
        var data = repackResponseData(response);

        var tpl = loadTemplate();
        var compiled = Handlebars.compile(tpl);

        $('.morpher-popup.popover').append(compiled(data));

        if (response.word) {
            highlightLemma(response.word.replace(/\u0301/mg, ''));
        }
    }
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
    $('.morpher-popup .table__body .cell__value').
        each(function(index, element) {
            var $el = $(element);

            App.config.debug && console.log($el.text() + ' ? ' + lemma);

            if ($el.text() === lemma) {
                $el.addClass('cell__value_highlighted');
            }
        });
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

function loadPopupContent(msg, callBack) {
    $.ajax({
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
        error: function() {
            callBack({
                err: 'Could not reach russiangram.com',
            });
        },
    });
}

function loadDeclensionTable(msg, callBack) {
    $.ajax({
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
        error: function() {
            callBack({
                err: 'Could not reach morpher.ru',
            });
        },
    });
}

$(document).on('ready', function() {
    $('body').on('dblclick', function(e) {
        if (e.altKey) {
            onDoubleClick(e);
        }
    });
});

/* Add CSS files */
injectCSS();
