chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request == "populate") {
    console.log("populated!");
  }
});
