// log in iff user is found in local storage
document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const businesses = JSON.parse(localStorage.getItem('businesses')) || [];
  const business = businesses.find(b => b.email === email);

  if (!business) {
    alert('No account found with that email.');
    return;
  }

  if (password !== business.password) {
    alert('Incorrect password.');
    return;
  }

  localStorage.setItem('loggedInBusiness', JSON.stringify(business));
  window.location.href = 'account.html';
});