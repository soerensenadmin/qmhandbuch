// Beispiel in deiner script.js
function checkPassword() {
  const pw = document.getElementById("password").value;
  if (pw === "ry4") {
    sessionStorage.setItem("auth", "true"); // merkt sich das Login
    window.location.href = "info.html";     // weiterleiten
  } else {
    document.getElementById("error-msg").textContent = "Falsches Passwort!";
  }
}
