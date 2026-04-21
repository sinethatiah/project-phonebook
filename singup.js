class Business {
  constructor(name, email, number, type, password) {
    this.name = name;
    this.email = email;
    this.number = number;
    this.type = type;
    this.password = password;
  }

  save() {
    const businesses = JSON.parse(localStorage.getItem("businesses")) || [];
    businesses.push(this);
    localStorage.setItem("businesses", JSON.stringify(businesses));
  }
}

document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault();
  const biz = new Business(
    document.getElementById('name').value,
    document.getElementById('email').value,
    document.getElementById('number').value,
    document.getElementById('accountType').value,
    document.getElementById('password').value
  );
  biz.save();
  window.location.href = 'main.html';
});