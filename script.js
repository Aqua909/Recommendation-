const adminPassword = "itzarataka"; // Replace with your desired admin password

// Check if user is already logged in (stored in localStorage)
let isAdmin = localStorage.getItem("isAdmin") === "true";
let isMember = localStorage.getItem("isMember") === "true";

// Handle page load: Show relevant sections based on login state
document.addEventListener("DOMContentLoaded", function() {
  if (isAdmin) {
    document.getElementById("admin-section").style.display = "block";
    document.getElementById("login-choice").style.display = "none";
    document.getElementById("admin-login-section").style.display = "none";
  } else if (isMember) {
    document.getElementById("login-choice").style.display = "none";
    document.getElementById("admin-login-section").style.display = "none";
  } else {
    document.getElementById("login-choice").style.display = "block";
  }

  // Load saved anime recommendations from localStorage
  const savedAnimes = JSON.parse(localStorage.getItem("animeList")) || [];
  savedAnimes.forEach(function(anime) {
    addAnimeToList(anime.title, anime.genre, anime.image, isAdmin);
  });
});

// Handle "Login as Admin" button click
document.getElementById("loginAsAdminBtn").addEventListener("click", function() {
  document.getElementById("admin-login-section").style.display = "block";
  document.getElementById("login-choice").style.display = "none";
});

// Handle "Login as Member" button click
document.getElementById("loginAsMemberBtn").addEventListener("click", function() {
  isMember = true;
  localStorage.setItem("isMember", "true");
  document.getElementById("login-choice").style.display = "none";
  document.getElementById("admin-login-section").style.display = "none";
});

// Handle admin login form submission
document.getElementById("adminLoginForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const enteredPassword = document.getElementById("adminPassword").value;

  if (enteredPassword === adminPassword) {
    isAdmin = true;
    localStorage.setItem("isAdmin", "true");
    document.getElementById("admin-section").style.display = "block";
    document.getElementById("admin-login-section").style.display = "none";
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

  // Only admins can see the delete button
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
