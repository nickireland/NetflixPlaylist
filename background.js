//attempt 1: didn't work
/*chrome.contextMenus.create({
    "id": "addToPlaylist",
    "title": "AddToPlaylist",
    "contexts": ['video'] 
});*/

//iteration 2: works
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
            documentUrlPatterns: ["http://www.netflix.com/*","https://www.netflix.com/*", "*://www.netflix.com/*"] //can't figure out which one of these makes it work so keeping all three. 
        });
    })
}, {
    url: [{"hostContains": "netflix.com"}]
});

javascript:void(document.oncontextmenu=null);


chrome.contextMenus.onClicked.addListener(function(){
    document.querySelector("episodeTitle").innerText;
})