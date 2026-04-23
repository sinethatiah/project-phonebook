function createCard(business) {
  const card = document.createElement('div');
  card.className = 'bg-white rounded-2xl shadow-md p-4 sm:p-5 flex flex-col gap-3 border border-[#d0dff0] w-full';

  card.innerHTML = `
    <div class="flex justify-between items-start">
      <div>
        <h2 class="text-lg font-extrabold text-[#1a2a3a]">${business.name}</h2>
        <p class="text-xs text-[#7a99bb] font-semibold uppercase tracking-wide">${business.type === 'store' ? '🏪 Store' : '🔧 Service Provider'}</p>
      </div>
      <button onclick="removeFavourite(${business.id}, this)" class="text-red-400 hover:text-red-600 transition">
        <span class="material-symbols-outlined">favorite</span>
      </button>
    </div>

    <p class="text-sm text-[#4a6a8a]">${business.description || 'No description provided.'}</p>

    <div class="flex items-center justify-between mt-auto pt-3 border-t border-[#e8f0f8]">
      <span class="text-sm text-[#4a6a8a] font-medium">${business.number}</span>
      <a href="tel:${business.number}"
        class="flex items-center gap-1 bg-[#6699CC] hover:bg-[#5577AA] text-white text-sm font-bold px-3 py-2 rounded-xl transition-all active:scale-95">
        <span class="material-symbols-outlined text-base">call</span>
        <span class="hidden sm:inline">Call</span>
      </a>
    </div>
  `;

  return card;
}

function removeFavourite(id, btn) {
  let favourites = JSON.parse(localStorage.getItem('favourites')) || [];
  favourites = favourites.filter(f => f.id !== id);
  localStorage.setItem('favourites', JSON.stringify(favourites));

  // Remove card from DOM
  btn.closest('.bg-white').remove();

  // Show empty message if none left
  const container = document.getElementById('favourites-container');
  if (container.children.length === 0) {
    container.innerHTML = `<p class="text-[#7a99bb] text-center col-span-full">No favourites yet.</p>`;
  }
}

function displayFavourites() {
  const container = document.getElementById('favourites-container');
  const favourites = JSON.parse(localStorage.getItem('favourites')) || [];

  if (favourites.length === 0) {
    container.innerHTML = `<p class="text-[#7a99bb] text-center col-span-full">No favourites yet.</p>`;
    return;
  }

  favourites.forEach((business) => {
    container.appendChild(createCard(business));
  });
}

displayFavourites();