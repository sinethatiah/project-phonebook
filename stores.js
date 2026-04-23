// Get all businesses from localStorage and filter by type
function getBusinessesByType(type) {
  const all = JSON.parse(localStorage.getItem("businesses")) || [];
  return all.filter((b) => b.type === type);
}
 
// Create a single business card
function createCard(business) {
  const card = document.createElement("div");
  card.className =
    "bg-white rounded-2xl shadow-md p-5 flex flex-col gap-3 border border-[#d0dff0]";
 
  card.innerHTML = `
    <div class="flex justify-between items-start">
      <div>
        <h2 class="text-lg font-extrabold text-[#1a2a3a]">${business.businessName}</h2>
        <p class="text-xs text-[#7a99bb] font-semibold uppercase tracking-wide">Store</p>
      </div>
      <button onclick="toggleFavourite(${business.id}, this)" 
        class="text-[#7a99bb] hover:text-red-400 transition">
        <span class="material-symbols-outlined">favorite</span>
      </button>
    </div>

    <p class="text-sm text-[#4a6a8a]">${business.description || "No description provided."}</p>

    <div class="flex items-center justify-between mt-auto pt-3 border-t border-[#e8f0f8]">
      <span class="text-sm text-[#4a6a8a] font-medium">${business.number}</span>
      <a href="tel:${business.number}"
        class="flex items-center gap-1 bg-[#6699CC] hover:bg-[#5577AA] text-white text-sm font-bold px-4 py-2 rounded-xl transition-all active:scale-95">
        <span class="material-symbols-outlined text-base">call</span>
        Call
      </a>
    </div>
  `;
 
  return card;
}
 
// display all store cards
function displayStores() {
  const container = document.getElementById("stores-container");
  const stores = getBusinessesByType("store");
 
  if (stores.length === 0) {
    container.innerHTML = `<p class="text-[#7a99bb] text-center col-span-full">No stores listed yet.</p>`;
    return;
  }
 
  stores.forEach((store) => {
    container.appendChild(createCard(store));
  });
}
 
displayStores();

function toggleFavourite(id, btn) {
  const all = JSON.parse(localStorage.getItem('businesses')) || [];
  const business = all.find(b => b.id === id);
  let favourites = JSON.parse(localStorage.getItem('favourites')) || [];
  const already = favourites.find(f => f.id === id);

  if (already) {
    favourites = favourites.filter(f => f.id !== id);
    btn.classList.remove('text-red-400');
    btn.classList.add('text-[#7a99bb]');
  } else {
    favourites.push(business);
    btn.classList.remove('text-[#7a99bb]');
    btn.classList.add('text-red-400');
  }

  localStorage.setItem('favourites', JSON.stringify(favourites));
}