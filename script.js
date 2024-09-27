const adminPassword = "YourSecretPassword"; // Set your admin password

let isAdmin = localStorage.getItem("isAdmin") === "true";
let isMember = localStorage.getItem("isMember") === "true";

document.addEventListener("DOMContentLoaded", function() {
  // Show the modal for login choice
  document.getElementById("loginModal").style.display = "block";

  // Check the user type and hide/show relevant sections
  if (isAdmin) {
    document.getElementById("admin-section").style.display = "block";
    document.getElementById("loginModal").style.display = "none";
    document.querySelector("main").style.display = "block";
    playBackgroundMusic(); // Play music for admin
  } else if (isMember) {
    document.getElementById("loginModal").style.display = "none";
    document.querySelector("main").style.display = "block";
    playBackgroundMusic(); // Play music for member
  }

  // Handle Admin Login Button click
  document.getElementById("loginAsAdminBtn").addEventListener("click", function() {
    document.getElementById("admin-login-section").style.display = "block";
    document.getElementById("loginModal").style.display = "none";
  });

  // Handle Member Login Button click
  document.getElementById("loginAsMemberBtn").addEventListener("click", function() {
    isMember = true;
    localStorage.setItem("isMember", "true");
    document.getElementById("loginModal").style.display = "none";
    document.querySelector("main").style.display = "block";
    playBackgroundMusic(); // Play music for member
  });

  // Handle Admin Login Form submission
  document.getElementById("adminLoginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const enteredPassword = document.getElementById("adminPassword").value;

    if (enteredPassword === adminPassword) {
      isAdmin = true;
      localStorage.setItem("isAdmin", "true");
      document.getElementById("admin-section").style.display = "block";
      document.getElementById("admin-login-section").style.display = "none";
      document.querySelector("main").style.display = "block";
      playBackgroundMusic(); // Play music for admin
    } else {
      alert("Incorrect password!");
    }
  });

  // Handle Anime Form submission
  document.getElementById("animeForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const title = document.getElementById("animeTitle").value;
    const genre = document.getElementById("animeGenre").value;
    const imageUrl = document.getElementById("animeImage").value;

    const animeList = document.getElementById("anime-list");
    const animeItem = document.createElement("div");
    animeItem.innerHTML = `
      <h4>${title}</h4>
      <p>Genre: ${genre}</p>
      <img src="${imageUrl}" alt="${title}" style="width:100px; height:auto;">
      <button class="deleteBtn">Delete</button>
    `;
    animeList.appendChild(animeItem);

    // Clear the form fields
    document.getElementById("animeTitle").value = "";
    document.getElementById("animeGenre").value = "";
    document.getElementById("animeImage").value = "";

    // Add delete functionality
    const deleteBtn = animeItem.querySelector(".deleteBtn");
    deleteBtn.addEventListener("click", function() {
      animeList.removeChild(animeItem);
    });
  });
});

// Function to play background music
function playBackgroundMusic() {
  const audio = document.getElementById("backgroundMusic");
  audio.play();
}
