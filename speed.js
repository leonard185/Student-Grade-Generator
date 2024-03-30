document.getElementById('speedForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var speed = parseInt(document.getElementById('speed').value);
    var demeritPoints = 0;
    
    if (speed < 70) {
      document.getElementById('result').innerHTML = 'Points: 0 (OK)';
    } else {
      demeritPoints = Math.floor((speed - 70) / 5);
      if (demeritPoints > 12) {
        document.getElementById('result').innerHTML = 'License suspended';
      } else {
        document.getElementById('result').innerHTML = 'Points: ' + demeritPoints;
      }
    }
  });