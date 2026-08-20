/* =========================
   EKRANLAR VE BUTONLAR
========================= */

const acilisEkrani = document.getElementById("acilisEkrani");
const anaMenu = document.getElementById("anaMenu");

const devamButonu = document.getElementById("devamButonu");
const baslaButonu = document.getElementById("baslaButonu");
const nasilOynanirButonu = document.getElementById("nasilOynanirButonu");


/* =========================
   SES SEVİYELERİ
========================= */

/* Müziklerin ulaşacağı maksimum ses */
const MUZIK_SESI = 0.22;

/* Buton sesi */
const BUTON_SESI = 0.65;


/* =========================
   MÜZİKLER
========================= */

const anaMenuMuzik = new Audio("sounds/ana-menu-muzik.mp3");
const oyunMuzik = new Audio("sounds/oyun-muzik.mp3");

anaMenuMuzik.loop = true;
oyunMuzik.loop = true;

/* Başlangıçta sessiz */
anaMenuMuzik.volume = 0;
oyunMuzik.volume = 0;


/* =========================
   BUTON SESİ
========================= */

const butonTik = new Audio("sounds/buton-tik.mp3");
butonTik.volume = BUTON_SESI;

function butonSesiCal() {
  butonTik.currentTime = 0;

  butonTik.play().catch((hata) => {
    console.log("Buton sesi çalınamadı:", hata);
  });
}


/* =========================
   MÜZİĞİ YAVAŞÇA AÇ
========================= */

function muzikAc(muzik, hedefSes = MUZIK_SESI, sure = 1500) {

  const baslangicZamani = performance.now();
  const baslangicSes = muzik.volume;

  function animasyon(zaman) {

    const ilerleme = Math.min(
      (zaman - baslangicZamani) / sure,
      1
    );

    muzik.volume =
      baslangicSes +
      (hedefSes - baslangicSes) * ilerleme;

    if (ilerleme < 1) {
      requestAnimationFrame(animasyon);
    }
  }

  requestAnimationFrame(animasyon);
}


/* =========================
   MÜZİĞİ YAVAŞÇA KAPAT
========================= */

function muzikKapat(muzik, sure = 1000) {

  const baslangicZamani = performance.now();
  const baslangicSes = muzik.volume;

  return new Promise((resolve) => {

    function animasyon(zaman) {

      const ilerleme = Math.min(
        (zaman - baslangicZamani) / sure,
        1
      );

      muzik.volume =
        baslangicSes * (1 - ilerleme);

      if (ilerleme < 1) {

        requestAnimationFrame(animasyon);

      } else {

        muzik.pause();
        muzik.currentTime = 0;
        muzik.volume = 0;

        resolve();
      }
    }

    requestAnimationFrame(animasyon);
  });
}


/* =========================
   DEVAM ETMEK İÇİN DOKUN
========================= */

devamButonu.addEventListener("click", () => {

  butonSesiCal();

  /* Ana menüye geç */
  acilisEkrani.classList.remove("aktif");
  anaMenu.classList.add("aktif");

  /* Menü müziğini sessiz başlat */
  anaMenuMuzik.currentTime = 0;
  anaMenuMuzik.volume = 0;

  anaMenuMuzik.play()
    .then(() => {

      /* Yavaşça aç */
      muzikAc(
        anaMenuMuzik,
        MUZIK_SESI,
        1500
      );

    })
    .catch((hata) => {

      console.log(
        "Ana menü müziği başlatılamadı:",
        hata
      );

    });

});


/* =========================
   BAŞLA
========================= */

baslaButonu.addEventListener("click", async () => {

  butonSesiCal();

  /*
    Oyun müziğini kullanıcı tıklaması sırasında
    sessiz şekilde başlatıyoruz.
    Böylece mobil tarayıcıların ses engeline
    takılmıyoruz.
  */

  oyunMuzik.currentTime = 0;
  oyunMuzik.volume = 0;

  oyunMuzik.play().catch((hata) => {

    console.log(
      "Oyun müziği başlatılamadı:",
      hata
    );

  });


  /* Menü müziğini yavaşça kapat */
  await muzikKapat(
    anaMenuMuzik,
    1000
  );


  /*
    BURADA DAHA SONRA
    OYUN EKRANINA GEÇİŞ YAPACAĞIZ
  */

  console.log("Oyun ekranına geçiliyor!");


  /* Oyun müziğini yavaşça aç */
  muzikAc(
    oyunMuzik,
    MUZIK_SESI,
    1500
  );

});


/* =========================
   NASIL OYNANIR
========================= */

nasilOynanirButonu.addEventListener("click", () => {

  butonSesiCal();

  console.log(
    "Nasıl Oynanır butonuna basıldı!"
  );

});
