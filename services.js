// Get all businesses from localStorage and filter by type
function getBusinessesByType(type) {
  const all = JSON.parse(localStorage.getItem("businesses")) || [];
  return all.filter((b) => b.type === type);
}
 
// Create a new card from newly added businesses
function createCard(business) {
  const card = document.createElement("div");
  card.className =
    "bg-white rounded-2xl shadow-md p-5 flex flex-col gap-3 border border-[#d0dff0]";
 
  card.innerHTML = `
    <div class="flex justify-between items-start">
      <div>
        <h2 class="text-lg font-extrabold text-[#1a2a3a]">${business.name}</h2>
        <p class="text-xs text-[#7a99bb] font-semibold uppercase tracking-wide">Service Provider</p>
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
 
// display all service provider cards
function displayServices() {
  const container = document.getElementById("services-container");
  const services = getBusinessesByType("service");
 
  if (services.length === 0) {
    container.innerHTML = `<p class="text-[#7a99bb] text-center col-span-full">No service providers listed yet.</p>`;
    return;
  }
 
  services.forEach((service) => {
    container.appendChild(createCard(service));
  });
}
 
displayServices();