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


chrome.contextMenus.onClicked.addListener(function(){
    alert('anything');
    //console.log('click');
    //alert(document.getElementById('episodeArt').getElementsByTagName('a')[0].href);
    alert(document.getElementById('episodeArt')); //this is returning null and is the problem
    //i don't think this is occuring on the right page.....
   //document.querySelector("episodeTitle").innerText;
})