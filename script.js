const adminPassword = "itzarataka"; // Set your admin password

let isAdmin = localStorage.getItem("isAdmin") === "true";
let isMember = localStorage.getItem("isMember") === "true";

document.addEventListener("DOMContentLoaded", function() {
  if (isAdmin) {
    document.getElementById("admin-section").style.display = "block";
    document.getElementById("login-choice").style.display = "none";
  } else if (isMember) {
    document.getElementById("login-choice").style.display = "none";
  }

  document.getElementById("loginAsAdminBtn").addEventListener("click", function() {
    document.getElementById("admin-login-section").style.display = "block";
    document.getElementById("login-choice").style.display = "none";
  });

  document.getElementById("loginAsMemberBtn").addEventListener("click", function() {
    isMember = true;
    localStorage.setItem("isMember", "true");
    document.getElementById("login-choice").style.display = "none";
  });

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
});
