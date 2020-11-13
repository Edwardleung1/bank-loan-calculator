// Listen for submit
document.getElementById('loan-form').addEventListener('submit', calculateResults);

// Calculate Results
function calculateResults(e) {
  // UI Variables
  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');
  const monthlyPayment = document.getElementById('monthly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');
  
  // Amount value in float
  const principal = parseFloat(amount.value);

  // Calculate interest
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;

  // Calculate payment
  const calculatePayments = parseFloat(years.value) * 12;

  // Calculate monthly payment
  const x = Math.pow(1 + calculatedInterest, calculatePayments);
  const monthly = (principal*x*calculatedInterest) / (x-1);

  // Check if monthly value isFinite number
  if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatePayments).toFixed(2);
    totalInterest.value = ((monthly * calculatePayments) - principal).toFixed(2);
  } 
  else {
    showError('Please check your numbers');
  }



  e.preventDefault();
}

// Show error function
function showError(error) {
  // Create a div
  const errorDiv = document.createElement('div');

  // Get elements
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');

  // Add class
  errorDiv.className = 'alert alert-danger';

  // Create text node and append to div
  errorDiv.appendChild(document.createTextNode(error));

  // Insert error above heading
  card.insertBefore(errorDiv, heading);
}