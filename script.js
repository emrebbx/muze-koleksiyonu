const acilisEkrani = document.getElementById("acilisEkrani");
const anaMenu = document.getElementById("anaMenu");

const devamButonu = document.getElementById("devamButonu");
const baslaButonu = document.getElementById("baslaButonu");

/* =========================
   MÜZİKLER
========================= */

const anaMenuMuzik = new Audio("sounds/ana-menu-muzik.mp3");
const oyunMuzik = new Audio("sounds/oyun-muzik.mp3");

anaMenuMuzik.loop = true;
oyunMuzik.loop = true;

anaMenuMuzik.volume = 0.35;
oyunMuzik.volume = 0.35;

/* =========================
   AÇILIŞ → ANA MENÜ
========================= */

devamButonu.addEventListener("click", () => {

  acilisEkrani.classList.remove("aktif");
  anaMenu.classList.add("aktif");

  anaMenuMuzik.currentTime = 0;

  anaMenuMuzik.play().catch((hata) => {
    console.log("Ana menü müziği başlatılamadı:", hata);
  });

});

/* =========================
   BAŞLA → OYUN MÜZİĞİ
========================= */

baslaButonu.addEventListener("click", () => {

  anaMenuMuzik.pause();
  anaMenuMuzik.currentTime = 0;

  oyunMuzik.currentTime = 0;

  oyunMuzik.play().catch((hata) => {
    console.log("Oyun müziği başlatılamadı:", hata);
  });

  console.log("Oyun başlatıldı!");

});
