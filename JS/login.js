document.addEventListener('DOMContentLoaded', function () {
  const loginForm = document.getElementById('login-form');
  const errorMessage = document.getElementById('error-message');

  loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Add your authentication logic here
    if (username === 'wasotadmin' && password === 'wasot123') {
      // Successful login, redirect to main page
      window.location.href = '../home.html';
    } else {
      errorMessage.textContent =
        'Invalid username or password. Please try again.';
    }
  });
});
