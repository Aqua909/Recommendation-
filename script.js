const adminPassword = "YourSecretPassword"; // Replace with your desired password

// Check if admin is already logged in (persist login state using localStorage)
let isAdmin = localStorage.getItem("isAdmin") === "true";

// Show/hide the admin section based on login state
document.addEventListener("DOMContentLoaded", function() {
  if (isAdmin) {
    document.getElementById("admin-section").style.display = "block";
    document.getElementById("login-section").style.display = "none";
  } else {
    document.getElementById("admin-section").style.display = "none";
    document.getElementById("login-section").style.display = "block";
  }

  // Load saved anime recommendations from localStorage
  const savedAnimes = JSON.parse(localStorage.getItem("animeList")) || [];
  savedAnimes.forEach(function(anime) {
    addAnimeToList(anime.title, anime.genre, anime.image, isAdmin);
  });
});

// Handle admin login
document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const enteredPassword = document.getElementById("adminPassword").value;

  if (enteredPassword === adminPassword) {
    isAdmin = true;
    localStorage.setItem("isAdmin", "true");
    document.getElementById("admin-section").style.display = "block";
    document.getElementById("login-section").style.display = "none";
  } else {
    alert("Incorrect password!");
  }
});

// Handle anime recommendation form submission (only for admin)
document.getElementById("animeForm").addEventListener("submit", function(event) {
  event.preventDefault();

  if (!isAdmin) return; // Only allow submission if the user is admin

  const title = document.getElementById("animeTitle").value;
  const genre = document.getElementById("animeGenre").value;
  const image = document.getElementById("animeImage").value;

  // Add new anime to the list
  addAnimeToList(title, genre, image, true);

  // Save the new anime recommendation to localStorage
  const savedAnimes = JSON.parse(localStorage.getItem("animeList")) || [];
  savedAnimes.push({ title: title, genre: genre, image: image });
  localStorage.setItem("animeList", JSON.stringify(savedAnimes));

  // Clear form inputs
  document.getElementById("animeTitle").value = '';
  document.getElementById("animeGenre").value = '';
  document.getElementById("animeImage").value = '';
});

// Function to add anime to the DOM
function addAnimeToList(title, genre, image, isAdmin) {
  const animeList = document.getElementById("anime-list");
  const animeCard = document.createElement("div");
  animeCard.classList.add("anime-card");

  const animeTitle = document.createElement("h3");
  animeTitle.textContent = title;

  const animeGenre = document.createElement("p");
  animeGenre.textContent = `Genre: ${genre}`;
  animeGenre.classList.add("genre");

  const animeImage = document.createElement("img");
  animeImage.src = image;

  animeCard.appendChild(animeImage);
  animeCard.appendChild(animeTitle);
  animeCard.appendChild(animeGenre);

  if (isAdmin) {
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-btn");
    deleteButton.onclick = function() {
      // Remove from DOM
      animeCard.remove();

      // Remove from localStorage
      const savedAnimes = JSON.parse(localStorage.getItem("animeList"));
      const updatedAnimes = savedAnimes.filter(anime => anime.title !== title);
      localStorage.setItem("animeList", JSON.stringify(updatedAnimes));
    };

    animeCard.appendChild(deleteButton);
  }

  animeList.appendChild(animeCard);
}
