window.onload = function() {
  fetch('https://gist.githubusercontent.com/gfgfgsffdg/bf31eb6287541436b5fd26d91fa6014a/raw/aaf11be123d0ab296b7a5989dccb0c05b5e78a82/messages.json')
    .then(response => response.json())
    .then(messages => {
      var now = new Date();
      var onejan = new Date(now.getFullYear(), 0, 1);
      var weekNumber = Math.ceil((((now - onejan) / 1000 / 60 / 60 / 24) + onejan.getDay() + 1) / 7);

      var message = messages[weekNumber % 2];

      document.getElementById('weekNumber').innerHTML = message;
    })
    .catch(error => console.error('Error fetching messages:', error));
};
