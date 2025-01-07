chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: 'lookUp',
    title: 'Look up in RussianGram (Alt-DblClick)',
    contexts: ['selection'],
  })

  chrome.contextMenus.create({
    id: 'stress-mark-page',
    title: 'Add stress marks to this page',
    contexts: ['page'],
  })
})

chrome.contextMenus.onClicked.addListener((clickData, tab) => {
  if (clickData.menuItemId === 'lookUp' && clickData.selectionText) {
    chrome.tabs.sendMessage(tab.id, {
      action: 'lookUp',
    })
  }
  if (clickData.menuItemId === 'stress-mark-page') {
    chrome.tabs.sendMessage(tab.id, {
      msg: 'stress-mark-whole-page',
    })
  }
})
