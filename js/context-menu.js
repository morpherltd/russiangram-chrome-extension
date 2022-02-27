chrome.contextMenus.create({
    'id': 'lookUp',
    'title': 'Look up in RussianGram (Alt-DblClick)',
    'contexts': ['selection'],
});

chrome.contextMenus.create({
    'id': 'stress-mark-page',
    'title': 'Add stress marks to this page',
    'contexts': ['page'],
});

chrome.contextMenus.onClicked.addListener(function(clickData) {
    if (clickData.menuItemId === 'lookUp' && clickData.selectionText) {
        chrome.tabs.query({
            active: true,
            currentWindow: true,
        }, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {
                action: 'lookUp',
            });
        });
    }
    if (clickData.menuItemId === 'stress-mark-page') {
        chrome.tabs.query({
            active: true,
            currentWindow: true,
        }, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {
                msg: 'stress-mark-whole-page',
            });
        });
    }
});
