window.onload = function() {
  fetch('https://api.allorigins.win/raw?url=https://pastebin.com/raw/u0CTsF2d?' + Date.now())
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text();
    })
    .then(responseText => {
      var jsonStartIndex = responseText.indexOf('{');
      var jsonEndIndex = responseText.lastIndexOf('}');
      var jsonResponse = responseText.substring(jsonStartIndex, jsonEndIndex + 1);

      var responseJson = JSON.parse(jsonResponse);

      var now = new Date();
      var onejan = new Date(now.getFullYear(), 0, 1);
      var weekNumber = Math.ceil((((now - onejan) / 1000 / 60 / 60 / 24) + onejan.getDay() + 1) / 7);

      var message;
      if (weekNumber % 2 === 0) {
        message = responseJson.evenWeekMessage;
      } else {
        message = responseJson.oddWeekMessage;
      }

      document.getElementById('weekNumber').innerHTML = message;
    })
    .catch(error => console.error('Error fetching messages:', error.message));
};
