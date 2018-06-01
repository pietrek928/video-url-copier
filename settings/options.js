function saveOptions(e) {
  e.preventDefault();
  browser.storage.local.set({
    cp_prefix: document.querySelector("#cp_prefix").value
  });
}

function restoreOptions() {

  function setCurrentChoice(result) {
    document.querySelector("#cp_prefix").value = result.cp_prefix || 'mplayer -fs';
  }

  function onError(error) {
    console.log(`Error: ${error}`);
  }

  var getting = browser.storage.local.get("cp_prefix");
  getting.then(setCurrentChoice, onError);
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);

