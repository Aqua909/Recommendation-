document.getElementById("animeForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const title = document.getElementById("animeTitle").value;
  const description = document.getElementById("animeDescription").value;

  // Create new anime card
  const animeList = document.getElementById("anime-list");
  const animeCard = document.createElement("div");
  animeCard.classList.add("anime-card");

  const animeTitle = document.createElement("h3");
  animeTitle.textContent = title;

  const animeDesc = document.createElement("p");
  animeDesc.textContent = description;

  animeCard.appendChild(animeTitle);
  animeCard.appendChild(animeDesc);
  animeList.appendChild(animeCard);

  // Clear form inputs
  document.getElementById("animeTitle").value = '';
  document.getElementById("animeDescription").value = '';
});
