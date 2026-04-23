//  $(function () {
//         function loadCountries(name) {
//           $.ajax({
//             url: `https://restcountries.com/v3.1/all?fields=${name}`,
//             method: "GET",
//             success: function (data) {
//               data.sort((a, b) => a.name.common.localeCompare(b.name.common));

//               data.forEach(function (country) {
//                 $("#country-selector").append(
//                   `<a class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 cursor-pointer country-option" data-code="${country}">${country.name.common}</a>`,
//                 );
//               });
//             },
//           });
//         }

//         loadCountries(name);
//       });

//       $("#dropdownBtn").on("click", function () {
//         $("#country-selector").toggleClass("hidden");
//       });
$(function () {

  function loadCountries(name) {
    $.ajax({
      url: 'https://restcountries.com/v3.1/all?fields=name,cca2',
      method: 'GET',
      success: function (data) {
        data.sort((a, b) => a.name.common.localeCompare(b.name.common));

        data.forEach(function (country) {
          $('#country-selector').append(
            `<a class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 cursor-pointer country-option" data-code="${country.cca2}">${country.name.common}</a>`
          );
        });
      }
    });
  }

  $('#dropdownBtn').on('click', function () {
    $('#country-selector').toggleClass('hidden');
  });

  $(document).on('click', '.country-option', function () {
    const code = $(this).data('code');
    const name = $(this).text();

    $('#dropdownBtn').text(name);
    $('#country-selector').addClass('hidden');

    $.ajax({
  url: `https://corsproxy.io/?https://emergencynumberapi.com/api/country/${code}`,
  method: 'GET',
  success: function (data) {
    const d = data.data;
  $('#emergency-result').html(`
  <div class="mt-6">
    <h3 class="font-extrabold text-[#1a2a3a] text-lg mb-4">${name} — Emergency Contacts</h3>
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">

      <div class="bg-white rounded-2xl p-5 flex flex-col gap-3 shadow-sm border border-[#d0dff0]">
        <div class="flex justify-between items-start">
          <div>
            <h4 class="font-extrabold text-[#1a2a3a]">Police</h4>
            <p class="text-xs text-[#7a99bb] font-semibold uppercase tracking-wide">Law Enforcement</p>
          </div>
          <span class="material-symbols-outlined text-3xl text-[#5577AA]">local_police</span>
        </div>
        <p class="text-sm text-[#4a6a8a] font-medium">${d.police.all[0] || 'N/A'}</p>
        <a href="tel:${d.police.all[0]}" class="flex items-center gap-1 bg-[#6699CC] hover:bg-[#5577AA] text-white text-sm font-bold px-4 py-2 rounded-xl transition-all active:scale-95 mt-auto w-fit">
          <span class="material-symbols-outlined text-base">call</span>
          Call
        </a>
      </div>

      <div class="bg-white rounded-2xl p-5 flex flex-col gap-3 shadow-sm border border-[#d0dff0]">
        <div class="flex justify-between items-start">
          <div>
            <h4 class="font-extrabold text-[#1a2a3a]">Ambulance</h4>
            <p class="text-xs text-[#7a99bb] font-semibold uppercase tracking-wide">Medical</p>
          </div>
          <span class="material-symbols-outlined text-3xl text-[#5577AA]">ambulance</span>
        </div>
        <p class="text-sm text-[#4a6a8a] font-medium">${d.ambulance.all[0] || 'N/A'}</p>
        <a href="tel:${d.ambulance.all[0]}" class="flex items-center gap-1 bg-[#6699CC] hover:bg-[#5577AA] text-white text-sm font-bold px-4 py-2 rounded-xl transition-all active:scale-95 mt-auto w-fit">
          <span class="material-symbols-outlined text-base">call</span>
          Call
        </a>
      </div>

      <div class="bg-white rounded-2xl p-5 flex flex-col gap-3 shadow-sm border border-[#d0dff0]">
        <div class="flex justify-between items-start">
          <div>
            <h4 class="font-extrabold text-[#1a2a3a]">Fire</h4>
            <p class="text-xs text-[#7a99bb] font-semibold uppercase tracking-wide">Fire Department</p>
          </div>
          <span class="material-symbols-outlined text-3xl text-[#5577AA]">local_fire_department</span>
        </div>
        <p class="text-sm text-[#4a6a8a] font-medium">${d.fire.all[0] || 'N/A'}</p>
        <a href="tel:${d.fire.all[0]}" class="flex items-center gap-1 bg-[#6699CC] hover:bg-[#5577AA] text-white text-sm font-bold px-4 py-2 rounded-xl transition-all active:scale-95 mt-auto w-fit">
          <span class="material-symbols-outlined text-base">call</span>
          Call
        </a>
      </div>

    </div>
  </div>
`);
  },
  error: function () {
    $('#emergency-result').html(`<p class="text-red-400 text-sm mt-4">Could not fetch numbers for this country.</p>`);
  }
});
  });

  loadCountries(name);

});