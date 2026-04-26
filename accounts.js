function toggleJobForm() {
  document.getElementById('job-form').classList.toggle('hidden');
}

function postJob() {
  const title = document.getElementById('job-title').value.trim();
  const desc = document.getElementById('job-desc').value.trim();
  const contact = document.getElementById('job-contact').value.trim();

  if (!title || !desc || !contact) {
    alert('Please fill in all fields.');
    return;
  }

  const job = {
    id: Date.now(),
    businessName: loggedIn.businessName,
    businessId: loggedIn.id,
    title,
    desc,
    contact
  };

  const jobs = JSON.parse(localStorage.getItem('jobs')) || [];
  jobs.push(job);
  localStorage.setItem('jobs', JSON.stringify(jobs));

  // Clear form and hide it
  document.getElementById('job-title').value = '';
  document.getElementById('job-desc').value = '';
  document.getElementById('job-contact').value = '';
  document.getElementById('job-form').classList.add('hidden');

  renderJobs();
}

function renderJobs() {
  const jobs = JSON.parse(localStorage.getItem('jobs')) || [];
  const myJobs = jobs.filter(j => j.businessId === loggedIn.id);
  const list = document.getElementById('jobs-list');
  const noMsg = document.getElementById('no-jobs-msg');

  list.innerHTML = '';

  if (myJobs.length === 0) {
    noMsg.classList.remove('hidden');
    return;
  }

  noMsg.classList.add('hidden');
  myJobs.forEach(job => {
    list.innerHTML += `
      <div class="bg-[#f4f9ff] rounded-xl p-4 border border-[#d0dff0] flex flex-col gap-2">
        <div class="flex justify-between items-start">
          <h3 class="font-extrabold text-[#1a2a3a] text-sm">${job.title}</h3>
          <button onclick="deleteJob(${job.id})" class="text-red-400 hover:text-red-600 transition">
            <span class="material-symbols-outlined text-base">delete</span>
          </button>
        </div>
        <p class="text-xs text-[#4a6a8a]">${job.desc}</p>
        <p class="text-xs text-[#7a99bb] font-semibold">Apply: ${job.contact}</p>
      </div>
    `;
  });
}

function deleteJob(id) {
  let jobs = JSON.parse(localStorage.getItem('jobs')) || [];
  jobs = jobs.filter(j => j.id !== id);
  localStorage.setItem('jobs', JSON.stringify(jobs));
  renderJobs();
}

// Load jobs on page load
if (loggedIn) renderJobs();