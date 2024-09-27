* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
  color: #333;
  text-align: center;
}

header {
  background-color: #ff4757;
  color: white;
  padding: 20px 0;
}

h1 {
  font-size: 3rem;
}

h2 {
  font-size: 1.5rem;
}

main {
  padding: 20px;
}

#anime-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
}

.anime-card {
  background-color: white;
  width: 300px;
  padding: 15px;
  margin: 15px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.anime-card img {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
}

.anime-card h3 {
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.anime-card p {
  font-size: 1rem;
}

.anime-card .genre {
  font-style: italic;
  color: #777;
}

#add-anime {
  margin-top: 40px;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

input, textarea {
  width: 80%;
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
  border: 1px solid #ddd;
}

button {
  padding: 10px 20px;
  background-color: #ff4757;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #e84118;
}

footer {
  margin-top: 40px;
  padding: 20px;
  background-color: #ff4757;
  color: white;
}

.delete-btn {
  background-color: red;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px;
  margin-top: 10px;
  cursor: pointer;
}

.delete-btn:hover {
  background-color: darkred;
}
