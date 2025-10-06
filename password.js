const password = "hallohallo1010"; // dein Passwort hier
const userInput = prompt("Password:");

if (userInput !== password) {
  document.body.innerHTML = "<h2 style='text-align:center;margin-top:50px;'>Zugriff verweigert 🚫</h2>";
  throw new Error("Zugriff verweigert");
}
