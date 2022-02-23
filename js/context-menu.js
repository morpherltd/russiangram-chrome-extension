chrome.contextMenus.create({
    'id': 'lookUp',
    'title': 'Look up in RussianGram',
    'contexts': ['selection'],
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
});
