 $(function () {
        function loadCountries(name) {
          $.ajax({
            url: `https://restcountries.com/v3.1/all?fields=${name}`,
            method: "GET",
            success: function (data) {
              data.sort((a, b) => a.name.common.localeCompare(b.name.common));

              data.forEach(function (country) {
                $("#country-selector").append(
                  `<a class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 cursor-pointer country-option" data-code="${country}">${country.name.common}</a>`,
                );
              });
            },
          });
        }

        loadCountries(name);
      });

      $("#dropdownBtn").on("click", function () {
        $("#country-selector").toggleClass("hidden");
      });
