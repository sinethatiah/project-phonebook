// log in if user is found in local storage
document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const emailCon = document.getElementById(`emailConfirm`)
  const passwordCon = document.getElementById(`passwordConfirm`)

  const businesses = JSON.parse(localStorage.getItem('businesses')) || [];
  const business = businesses.find(b => b.email === email);

  if (!business) {
  emailCon.textContent = 'No account found with that email.';
  emailCon.style.fontSize = "12px";
  emailCon.style.color = `red`;
    return;
  }

  if (password !== business.password) {
   passwordCon.textContent = 'Incorrect password.';
 passwordCon.style.fontSize = "12px";
  passwordCon.style.color = `red`;
    return;
  }

  localStorage.setItem('loggedInBusiness', JSON.stringify(business));
  window.location.href = 'account.html';
});