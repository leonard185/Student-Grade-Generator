document.getElementById('gradeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var marks = parseFloat(document.getElementById('marks').value);
    var grade = '';
    
    if (marks >= 80) {
      grade = 'A';
    } else if (marks >= 60 && marks <= 79) {
      grade = 'B';
    } else if (marks >= 50 && marks <= 59) {
      grade = 'C';
    } else if (marks >= 40 && marks <= 49) {
      grade = 'D';
    } else {
      grade = 'E';
    }
    
    document.getElementById('result').innerHTML = 'Grade: ' + grade;
  });