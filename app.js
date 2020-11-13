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

  e.preventDefault();
}