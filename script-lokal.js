// Lokal JSON-fil 
const jokesURL = "jokes.json";

// Når HTML er ferdig lastet
document.addEventListener("DOMContentLoaded", () => {
  const jokesContainer = document.getElementById("jokes-container");
  const showFirstBtn = document.getElementById("show-first");
  const showAllBtn = document.getElementById("show-all");
  const showRandomBtn = document.getElementById("show-random");

  let jokes = [];

  // Hent vitser fra lokal JSON-fil
  fetch(jokesURL)
    .then(response => response.json())
    .then(data => {
      jokes = data.jokes;
    })
    .catch(error => {
      jokesContainer.innerHTML = "<p>Kunne ikke laste lokal vitsefil.</p>";
      console.error("Feil:", error);
    });

  function showJokeOne() {
    const joke = jokes.find(j => j.id === "1");
    if (joke) {
      jokesContainer.innerHTML = `<p>${joke.joke}</p>`;
    }
  }

  function showAllJokes() {
    jokesContainer.innerHTML = "";
    jokes.forEach(joke => {
      const p = document.createElement("p");
      p.textContent = joke.joke;
      jokesContainer.appendChild(p);
    });
  }

  function showRandomJoke() {
    const random = jokes[Math.floor(Math.random() * jokes.length)];
    jokesContainer.innerHTML = `<p>${random.joke}</p>`;
  }

  showFirstBtn.addEventListener("click", showJokeOne);
  showAllBtn.addEventListener("click", showAllJokes);
  showRandomBtn.addEventListener("click", showRandomJoke);
});
