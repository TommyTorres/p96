function addUser() {
  // Obtiene los nombres de los jugadores de los campos de entrada
  const player1Name = document.getElementById("player1_name_input").value;
  const player2Name = document.getElementById("player2_name_input").value;

  // Guarda los nombres de los jugadores en el almacenamiento local
  localStorage.setItem("player1Name", player1Name);
  localStorage.setItem("player2Name", player2Name);

  // Redirecciona a la página del juego
  window.location = "game_page.html";
}
