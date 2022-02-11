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
    if ($('.morpher-script').length > 0) {
        App.config.debug && console.log('Scripts are already injected.');
        return false;
    }

    $.ajax({
        url: chrome.extension.getURL('js/bootstrap.min.js'),
        success: function(data) {
            var scriptTag = document.createElement('script');
            scriptTag.innerHTML = data;
            scriptTag.id = 'bs_script';
            scriptTag.classList.add('morpher-script');
            document.body.appendChild(scriptTag);
        },
    });
    $.ajax({
        url: chrome.extension.getURL('js/handlebars.min.js'),
        success: function(data) {
            var scriptTag = document.createElement('script');
            scriptTag.innerHTML = data;
            scriptTag.id = 'hb_script';
            scriptTag.classList.add('morpher-script');
            document.body.appendChild(scriptTag);

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

function showPopup(content) {
    if ('' === content.replace('<br/>', '').trim()) {
        return false;
    }

    if ($('.morpher-popup').length > 0) {
        App.config.debug && console.log('Rejected. Popup already exists.');
        return false;
    }

    var $el = $('.' + waitResponseClass);
    $el.parent().addClass('twbs');

    $el.popover({
        title: handlebarsHelper.stressedString(content).replace('<br/>', '&nbsp;&nbsp;'),
        container: 'body',
        html: true,
        placement: 'bottom',
        trigger: 'manual',
        template: '<div class="popover morpher-popup" role="tooltip"><div class="arrow"></div><div class="popover-header"></div></div>',
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
        $(this).popover('dispose');
        deleteJs();
    });

    $(document).on('mousedown', function(e) {
        var container = $('.morpher-popup.popover');

        if (!container.is(e.target) && container.has(e.target).length === 0) {
            App.debug && console.log('hide by outer click');
            $el.parent().removeClass('twbs');
            $el.popover('hide');
        }
    });
}

function handle(selectedText) {
    if (selectedText === '') {
        return false;
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

    var wrapper = '<span class="' + waitResponseClass + '"></span>';
    var highlightDiv = $(wrapper)[0];

    try {
        range.surroundContents(highlightDiv);
    } catch (exception) {
        $(range.endContainer).before(wrapper);
    }

    loadPopupContent({
        context: context,
        index: context.indexOf(selectedText),
        word: selectedText,
    }, loadPopupContentCallback);
}

function getSelectedText() {
    var selection = window.getSelection && window.getSelection().toString();
    selection = selection.trim();

    return selection;
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

        if ($('.morpher-popup.popover #declensionTables').length > 0) {
            App.config.debug &&
            console.log('Rejected. Declension tables already exists.');
            return false;
        }
        $('.morpher-popup.popover').append(compiled(data));

        if (response.word) {
            highlightLemma(response.word);
        }

        initializeAdditionPopup(response.word, data);
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
    var cleanLemma = lemma.replace(/\u0301/mg, '').replace(/ё/gi, 'е').toLowerCase();

    $('.morpher-popup tbody .value').
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
    text = text.replace(/\u0301/mg, '').replace(/ё/gi, 'е');

    var $cells = $container.find('.value');

    for (var i = 0; i < $cells.length; i++) {
        var $cell = $($cells[i]);
        var cellText = $cell.text().replace(/ё/gi, 'е');

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

function initializeAdditionPopup(lemma, data) {

    var $el = $('#declensionTables');

    var options = {
        container: '.morpher-popup #declensionTables',
        html: true,
        content: 'Loading...',
        trigger: 'manual',
        offset: 150,
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

    var $cell = findCellByText(lemma, $('.participle-tables'));
    if (
        $cell && data.variants[0] !== undefined
        && data.variants[0].type === 'Verb'
    ) {
        var content = $cell.closest('table').prop('outerHTML');

        $el.popover('show');
        $el.find('.popover-body').html(content);
    }
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
    var $body = $('body');
    var altKey = false;

    $body.on('keydown', function(e) {
        if (e.keyCode === 18) {
            App.config.debug && console.log('Pressed Alt.');
            altKey = true;
        }
    });

    $body.on('keyup', function(e) {
        if (e.keyCode === 18) {
            App.config.debug && console.log('Not pressed Alt.');
            altKey = false;
        }
    });

    $body.on('selectstart', function() {
        $body.off('mouseup', onMouseUp);
        $body.on('mouseup', onMouseUp);
    });

    $body.on('select', onMouseUp);

    function onMouseUp(e) {
        if (e.altKey || altKey) {
            var selectedText = getSelectedText();

            if (selectedText.split(' ').length > App.config.maxPhraseLength) {
                App.config.debug && console.log('Rejected! Too many words.');
                return;
            }

            handle(selectedText);
            $body.off('mouseup', onMouseUp);
        }
    }
});

/* Add CSS files */
injectCSS();
