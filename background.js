/*chrome.contextMenus.create({
    "id": "addToPlaylist",
    "title": "AddToPlaylist",
    "contexts": ['video'] 
});*/
chrome.webNavigation.onCompleted.addListener(function(details){
    chrome.tabs.executeScript(details.tabId, {
        file: "content_script.js"
    });
}, {
    url: [{"hostContains": "netflix.com"}]
});