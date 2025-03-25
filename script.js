// Get form element
const form = document.getElementById('myForm');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  // Get form values
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;

  // Create alert message
  const message = `First Name: ${firstName} Last Name: ${lastName} Phone Number: ${phone} Email ID: ${email}`;

  // Show alert
  alert(message);
  
  // Optional: Reset form after submission
  form.reset();
});
