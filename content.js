chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request == "populate") {
    const options = document.querySelectorAll("#workingForm > div.panel.panel-default > div.panel-body > div.panel.panel-default > div.panel-body > div");
    let validOptions = [];
    const blackList = [
      "activitat24446",
      "activitat24447",
      "activitat24452",
      "activitat24453",
      "activitat24454",
      "activitat24455",
      "activitat24457",
      "activitat24459",
      "activitat24460",
      "activitat24461",
      "activitat24462",
      "activitat24466",
      "activitat24467",
      "activitat24468",
      "activitat24469",
      "activitat200557",
      "activitat200558",
      "activitat200559",
      "activitat200561",
      "activitat200562",
      "activitat200566",
    ];

    // Filter options with hours (they have a distinct id) and not in blacklist
    options.forEach(option => {
      if (option.hasAttribute('id') && option.getAttribute('id').match(/activitat\d{5}/)) {
        if (blackList.indexOf(option.getAttribute('id')) === -1) {
          validOptions.push(option.querySelector('.form-control'));
        }
      }
    });

    populateOptions(validOptions);

  }
});

function populateOptions(options) {

  if (options.length == 0) {
    return;
  }

  const hoursToPopulate = 5;
  const maxHoursPerOption = 1;
  let hoursPopulated = 0;

  while (hoursPopulated < hoursToPopulate) {
    const option = pickOne(options);

    if (option !== null && option.value == 0) {
      const randomHour = Math.floor(Math.random() * option.options.length);
      const chosenHourAmmount = parseFloat(option.item(randomHour).value);
      if (chosenHourAmmount <= maxHoursPerOption && chosenHourAmmount + hoursPopulated <= hoursToPopulate) {
        option.selectedIndex = randomHour;
        hoursPopulated += chosenHourAmmount;
      }
    }
  }
}

function pickOne(array) {
  return array[Math.floor(Math.random() * array.length)];
}