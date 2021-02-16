/* Process incoming messages */
function messageHandler(msg, sender, responseCallback) {
    console.log(msg)
    if (!msg.type) {
        return
    }

    switch (msg.type) {
        case 'load-popup-content':
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
            break
    }
    return true
}

/* Events */
chrome.runtime.onMessage.addListener(messageHandler)
chrome.runtime.onInstalled.addListener(function (details) {
    if (details.reason == "update") {
        alert("Hi,\n\nWe've fixed double-clicking a word while holding down the Alt key. Enjoy our free plug-in.\n\nThe RussianGram.com team");
    }
})