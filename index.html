<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Device Week</title>
  <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
  <h1>Device Week</h1>
  <div id="week">
    <p id="weekNumber"></p>
  </div>
  <script>
    window.onload = function() {
      fetch('backend.php')
        .then(response => response.json())
        .then(data => {
          var messages = data;

          var now = new Date();
          var onejan = new Date(now.getFullYear(), 0, 1);
          var weekNumber = Math.ceil((((now - onejan) / 1000 / 60 / 60 / 24) + onejan.getDay() + 1) / 7);

          var message = (weekNumber % 2 === 0) ? messages.evenWeekMessage : messages.oddWeekMessage;

          document.getElementById('weekNumber').innerHTML = message;
        })
        .catch(error => {
          console.log('Error fetching the messages:', error);
        });
    };
  </script>
</body>
</html>
