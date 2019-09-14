/*chrome.contextMenus.create({
    "id": "addToPlaylist",
    "title": "AddToPlaylist",
    "contexts": ['video'] 
});*/

/*chrome.webNavigation.onCompleted.addListener(function(details){
    chrome.tabs.executeScript(details.tabId, {
        file: "content_script.js"
    });
}, {
    url: [{"hostContains": "netflix.com"}]
});*/

chrome.webNavigation.onCompleted.addListener(function(details){
    chrome.tabs.executeScript(details.tabId,{
        file: "content_script.js"
    }, () => {
        chrome.contextMenus.create({
            id: String(details.tabId),
            title: "Test Response",
            documentUrlPatterns: ["*://*/*" ] //note: putting netflix here instead of all urls doesn't seem to work. Why?
        });
    })
}, {
    url: [{"hostContains": "netflix.com"}]
});