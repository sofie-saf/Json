// URL til JSON-data
const jokesURL = "https://terjetheteacher.github.io/some-jokes/jokes.json";

// Når siden er lastet inn
document.addEventListener("DOMContentLoaded", () => {
  // Referanser til HTML-elementer
  const jokesContainer = document.getElementById("jokes-container");
  const showFirstBtn = document.getElementById("show-first");
  const showAllBtn = document.getElementById("show-all");
  const showRandomBtn = document.getElementById("show-random");
  const showFavoritesBtn = document.getElementById("show-favorites"); // 👉 Ny knapp

  let jokes = []; // Her lagres vitsene når vi henter dem

  // 1. Les JSON-filen fra URL
  fetch(jokesURL)
    .then(response => response.json())
    .then(data => {
      // Her henter vi bare "jokes"-listen fra hele objektet
      jokes = data.jokes;
    })
    .catch(error => {
      jokesContainer.innerHTML = "<p>Kunne ikke laste vitser.</p>";
      console.error("Feil ved henting:", error);
    });

  // 2. Vis vits nr. 1 (med id = "1")
  function showJokeOne() {
    const joke = jokes.find(j => j.id === "1");
    if (joke) {
      jokesContainer.innerHTML = `<p>${joke.joke}</p>`;
    }
  }

  // 3. Vis alle vitser
  function showAllJokes() {
    jokesContainer.innerHTML = "";
    jokes.forEach(joke => {
      const p = document.createElement("p");
      p.textContent = joke.joke;

      // 👉 Favorittknapp for hver vits
      const favBtn = document.createElement("button");
      favBtn.textContent = "❤️ Legg til favoritt";
      favBtn.addEventListener("click", () => addToFavorites(joke));

      p.appendChild(document.createElement("br"));
      p.appendChild(favBtn);
      jokesContainer.appendChild(p);
    });
  }

  // 4. Vis en tilfeldig vits
  function showRandomJoke() {
    const random = jokes[Math.floor(Math.random() * jokes.length)];
    jokesContainer.innerHTML = "";

    const p = document.createElement("p");
    p.textContent = random.joke;

    const favBtn = document.createElement("button");
    favBtn.textContent = "❤️ Legg til favoritt";
    favBtn.addEventListener("click", () => addToFavorites(random));

    p.appendChild(document.createElement("br"));
    p.appendChild(favBtn);
    jokesContainer.appendChild(p);
  }

  // ⭐ 5. Vis favorittvitser
  function showFavorites() {
    jokesContainer.innerHTML = "";

    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    if (favorites.length === 0) {
      jokesContainer.innerHTML = "<p>Du har ingen favoritter ennå ⭐</p>";
      return;
    }

    favorites.forEach(joke => {
      const p = document.createElement("p");
      p.textContent = joke.joke;
      jokesContainer.appendChild(p);
    });
  }

  // ❤️ 6. Legg til i favoritter
  function addToFavorites(joke) {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const alreadyFavorited = favorites.some(fav => fav.id === joke.id);

    if (!alreadyFavorited) {
      favorites.push(joke);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      alert("🎉 Lagt til som favoritt!");
    } else {
      alert("Denne vitsen er allerede en favoritt!");
    }
  }

  // 7. Koble knappene til funksjonene
  showFirstBtn.addEventListener("click", showJokeOne);
  showAllBtn.addEventListener("click", showAllJokes);
  showRandomBtn.addEventListener("click", showRandomJoke);
  showFavoritesBtn.addEventListener("click", showFavorites); // 👉 Ny funksjon
});
