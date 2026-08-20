/* =========================
   EKRANLAR VE BUTONLAR
========================= */

const acilisEkrani = document.getElementById("acilisEkrani");
const anaMenu = document.getElementById("anaMenu");

const devamButonu = document.getElementById("devamButonu");
const baslaButonu = document.getElementById("baslaButonu");
const nasilOynanirButonu = document.getElementById("nasilOynanirButonu");


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
   SES EFEKTLERİ
========================= */

const butonTik = new Audio("sounds/buton-tik.mp3");
butonTik.volume = 0.65;


/* Her basışta sesi baştan oynat */
function butonSesiCal() {
  butonTik.currentTime = 0;

  butonTik.play().catch((hata) => {
    console.log("Buton sesi çalınamadı:", hata);
  });
}


/* =========================
   DEVAM ETMEK İÇİN DOKUN
========================= */

devamButonu.addEventListener("click", () => {

  butonSesiCal();

  acilisEkrani.classList.remove("aktif");
  anaMenu.classList.add("aktif");

  anaMenuMuzik.currentTime = 0;

  anaMenuMuzik.play().catch((hata) => {
    console.log("Ana menü müziği başlatılamadı:", hata);
  });

});


/* =========================
   BAŞLA
========================= */

baslaButonu.addEventListener("click", () => {

  butonSesiCal();

  anaMenuMuzik.pause();
  anaMenuMuzik.currentTime = 0;

  oyunMuzik.currentTime = 0;

  oyunMuzik.play().catch((hata) => {
    console.log("Oyun müziği başlatılamadı:", hata);
  });

  console.log("Oyun başlatıldı!");

});


/* =========================
   NASIL OYNANIR
========================= */

nasilOynanirButonu.addEventListener("click", () => {

  butonSesiCal();

  console.log("Nasıl Oynanır butonuna basıldı!");

});
