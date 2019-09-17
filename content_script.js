chrome.runtime.onMessage.addListener( (message, sender, cb) => {
    console.log('click2');
    alert('contecnt script hit');
    cb(alert(document.getElementById('episodeArt video-artwork').getElementsByTagName('a')[0].href));
});

//alert(document.querySelector("h1").innerText);
//alert("test 2");