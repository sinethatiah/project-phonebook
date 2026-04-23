// Add new object upon submission
class Business {
  constructor(name, email, number, type, password , businessName) {
    this.name = name;
    this.email = email;
    this.number = number;
    this.type = type;
    this.password = password;
    this.businessName = businessName;
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
    document.getElementById('password').value,
    document.getElementById(`bizName`).value
  );
  biz.save();
  window.location.href = 'account.html';
});