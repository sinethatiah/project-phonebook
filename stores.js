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