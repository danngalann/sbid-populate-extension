chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request == "populate") {
    const options = document.querySelectorAll("#workingForm > div.panel.panel-default > div.panel-body > div.panel.panel-default > div.panel-body > div");
    const blackList = [];
    
    options.forEach(element => {
      console.log(element);
    });
  }
});
