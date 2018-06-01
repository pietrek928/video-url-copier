/*
Just draw a border round the document.body.
*/
function vid_copy() {
    browser.tabs.executeScript(null, {
         allFrames: true,
         file: '/action.js'
    });
}

browser.browserAction.onClicked.addListener(() => {
    vid_copy(); 
});

browser.commands.onCommand.addListener(cmd => {
    if (cmd == 'vid-copy') {
        vid_copy();
    }
});

