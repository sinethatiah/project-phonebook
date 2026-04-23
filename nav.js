const loggedIn = JSON.parse(localStorage.getItem('loggedInBusiness'));

if (loggedIn) {
  document.getElementById('auth-btn').innerHTML = `
    <div class="relative" id="accountDropdown">
      <button onclick="toggleDropdown()" class="flex items-center gap-2 bg-white text-[#5577AA] px-5 py-2.5 rounded-full font-extrabold text-sm hover:bg-[#dceeff] transition-all">
        <span class="material-symbols-outlined text-lg">account_circle</span>
        My Account
        <span class="material-symbols-outlined text-base">expand_more</span>
      </button>
      <div id="dropdownMenu" class="hidden absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-lg border border-[#d0dff0] overflow-hidden z-50">
        <a href="account.html" class="flex items-center gap-2 px-4 py-3 text-sm text-[#4a6a8a] font-semibold hover:bg-[#f4f9ff] transition">
          <span class="material-symbols-outlined text-base">manage_accounts</span>
          My Account
        </a>
        <hr class="border-[#d0dff0]"/>
        <button onclick="logout()" class="w-full flex items-center gap-2 px-4 py-3 text-sm text-red-400 font-semibold hover:bg-red-50 transition">
          <span class="material-symbols-outlined text-base">logout</span>
          Logout
        </button>
      </div>
    </div>
  `;
}

function logout() {
  localStorage.removeItem('loggedInBusiness');
  window.location.href = 'index.html';
}

function toggleDropdown() {
  document.getElementById('dropdownMenu').classList.toggle('hidden');
}

document.addEventListener('click', function(e) {
  const dropdown = document.getElementById('accountDropdown');
  if (dropdown && !dropdown.contains(e.target)) {
    document.getElementById('dropdownMenu').classList.add('hidden');
  }
});