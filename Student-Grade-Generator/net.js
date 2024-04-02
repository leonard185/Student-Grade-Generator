document.getElementById('salaryForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var basicSalary = parseFloat(document.getElementById('basicSalary').value);
    var benefits = parseFloat(document.getElementById('benefits').value);
    
    var grossSalary = basicSalary + benefits;
    
    var payee = calculatePayee(grossSalary);
    var NHIFDeductions = calculateNHIFDeductions(grossSalary);
    var NSSFDeductions = calculateNSSFDeductions(basicSalary);
    
    var netSalary = grossSalary - payee - NHIFDeductions - NSSFDeductions;
    
    var result = 'Gross Salary: ' + grossSalary.toFixed(2) + ' Ksh<br>' +
                 'Payee (Tax): ' + payee.toFixed(2) + ' Ksh<br>' +
                 'NHIF Deductions: ' + NHIFDeductions.toFixed(2) + ' Ksh<br>' +
                 'NSSF Deductions: ' + NSSFDeductions.toFixed(2) + ' Ksh<br>' +
                 'Net Salary: ' + netSalary.toFixed(2) + ' Ksh';
    
    document.getElementById('result').innerHTML = result;
  });
  
  function calculatePayee(grossSalary) {
  
   // Perform tax calculation based on gross salary, you can replace this with your country's tax calculation formula
    // For demonstration purposes, let's assume a flat tax rate of 20%
    return grossSalary * 0.20;
  }
  
  function calculateNHIFDeductions(grossSalary) {
    // Perform NHIF deductions calculation based on gross salary
    // You can replace this with your country's NHIF calculation formula
    // For demonstration purposes, let's assume a fixed NHIF rate of 500 Ksh
    return 3000;
  }
  
  function calculateNSSFDeductions(basicSalary) {
    // Perform NSSF deductions calculation based on basic salary
    // You can replace this with your country's NSSF calculation formula
    // For demonstration purposes, let's assume a fixed NSSF rate of 200 Ksh
    return 1000;
  }