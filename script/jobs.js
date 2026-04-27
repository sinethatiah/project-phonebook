// function to display jobs added which have been stored in local storage
function createJobCard(job) {
  const card = document.createElement('div');
  card.className = 'bg-white rounded-2xl shadow-md p-5 flex flex-col gap-3 border border-[#d0dff0] w-full';

  card.innerHTML = `
    <div class="flex justify-between items-start">
      <div>
        <h2 class="text-lg font-extrabold text-[#1a2a3a]">${job.title}</h2>
        <p class="text-xs text-[#7a99bb] font-semibold uppercase tracking-wide">${job.businessName}</p>
      </div>
      <span class="material-symbols-outlined text-[#6699CC]">business_center</span>
    </div>

    <p class="text-sm text-[#4a6a8a]">${job.desc}</p>

    <div class="flex items-center justify-between mt-auto pt-3 border-t border-[#e8f0f8]">
      <span class="text-sm text-[#4a6a8a] font-medium">${job.contact}</span>
      <a href="tel:${job.contact}"
        class="flex items-center gap-1 bg-[#6699CC] hover:bg-[#5577AA] text-white text-sm font-bold px-3 py-2 rounded-xl transition-all active:scale-95">
        <span class="material-symbols-outlined text-base">call</span>
        <span class="hidden sm:inline">Apply</span>
      </a>
    </div>
  `;

  return card;
}

function renderJobs() {
  const container = document.getElementById('jobs-container');
  const jobs = JSON.parse(localStorage.getItem('jobs')) || [];

  if (jobs.length === 0) {
    container.innerHTML = `<p class="text-[#7a99bb] text-center col-span-full">No job listings yet.</p>`;
    return;
  }

  jobs.forEach(job => {
    container.appendChild(createJobCard(job));
  });
}

renderJobs();