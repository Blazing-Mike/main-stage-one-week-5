document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("search");
  const suggestionsList = document.getElementById("suggestions");

  let countries = [];

  // Fetch country data from the API
  fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((data) => {
      countries = data.map((country) => country.name.common);
    })
    .catch((error) => console.error("Error fetching countries:", error));

  const debounce = (callback, wait) => {
    let timeoutId = null;
    return (...args) => {
      window.clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => {
        callback.apply(null, args);
      }, wait);
    };
  };

  const debouncedSearch = debounce((query) => {
    console.log(query);
    const suggestions = countries.filter((country) =>
      country.toLowerCase().includes(query)
    );

    displaySuggestions(suggestions, query);
  }, 300);

  // Filter and display suggestions
  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    debouncedSearch(query);
    if (query.length > 0) {
      suggestionsList.style.padding = "10px";
    }
    if (query.length === 0) {
      suggestionsList.style.padding = "0px";
    }
    if (query.length < 0 && searchInput === document.activeElement) {
      suggestionsList.style.padding = "10px";
    }
  });

  // Display suggestions in the suggestions list
  function displaySuggestions(suggestions, query) {
    suggestionsList.innerHTML = "";
    if (suggestions.length > 0) {
      suggestions.forEach((suggestion) => {
        const li = document.createElement("li");
        li.textContent = suggestion;
        li.addEventListener("click", () => {
          searchInput.value = suggestion;
          suggestionsList.innerHTML = "";
        });
        suggestionsList.appendChild(li);
      });
    } else if (query.length > 0) {
      const li = document.createElement("li");
      li.textContent = "Country not found: Please search other country";
      li.classList.add("not-found");
      suggestionsList.appendChild(li);
    }
  }

  // Close suggestions when clicking outside
  document.addEventListener("click", (event) => {
    if (!event.target.closest(".container")) {
      suggestionsList.innerHTML = "";
    }
  });
});
