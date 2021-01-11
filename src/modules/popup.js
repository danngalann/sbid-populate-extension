document.addEventListener("DOMContentLoaded", () => {
  document.getElementById('populateBtn').addEventListener('click', e => {
    chrome.tabs.query({ currentWindow: true, active: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, "populate", handleEmail);
    });
  })
})
