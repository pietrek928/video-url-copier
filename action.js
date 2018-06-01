function proc_vid(e) {
    var getting = browser.storage.local.get("cp_prefix");
    getting.then(item => {
        if (!e.offsetHeight) return; // check visible
        var cp_prefix = item.cp_prefix || 'mplayer -fs';
        console.log(item.cp_prefix);

        var url = e.currentSrc;
        if (!url) return;

        e.removeAttribute('currentSrc'); // clear video
        e.removeAttribute('src');
        e.load();

        var input = document.createElement('INPUT');
        input.setAttribute("type", "text"); 
        input.value = cp_prefix + ' ' + url;
        input.offsetHeight = e.offsetHeight;
        input.offsetWidth = e.offsetWidth;
        input.style.position = 'absolute';
        input.style.zIndex = 2;
        input.classList.add('vid-copy-url');
        document.body.appendChild(input);
        console.log(input.offsetHeight);

        input.select();
        document.execCommand("copy");
    },
        e => console.error(e)
    );
}

function clear_inputs() {
    Array.from(
        document.getElementsByClassName('vid-copy-url')
    ).forEach(
        e => e.remove()
    );
}

//clear_inputs();
Array.from(document.getElementsByTagName("video")).forEach(proc_vid);

