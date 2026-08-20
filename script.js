const acilisEkrani = document.getElementById("acilisEkrani");
const anaMenu = document.getElementById("anaMenu");
const devamButonu = document.getElementById("devamButonu");

devamButonu.addEventListener("click", () => {

  acilisEkrani.classList.remove("aktif");
  anaMenu.classList.add("aktif");

});
