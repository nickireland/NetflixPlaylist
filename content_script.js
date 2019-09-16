chrome.runtime.onMessage.addListener( (message, sender, cb) => {
    alert(message.magic_word);
    cb(document.querySelector("episodeTitle").innerText);
});

//alert(document.querySelector("h1").innerText);
//alert("test 2");