/* =========================
   EKRANLAR VE BUTONLAR
========================= */

const acilisEkrani =
  document.getElementById("acilisEkrani");

const anaMenu =
  document.getElementById("anaMenu");

const oynanisEkrani =
  document.getElementById("oynanisEkrani");


const devamButonu =
  document.getElementById("devamButonu");

const baslaButonu =
  document.getElementById("baslaButonu");

const nasilOynanirButonu =
  document.getElementById("nasilOynanirButonu");


/* =========================
   SANATÇI SEÇİM ELEMANLARI
========================= */

const karistirmaDestesi =
  document.getElementById("karistirmaDestesi");

const kapaliKartSirasi =
  document.getElementById("kapaliKartSirasi");


/* =========================
   12 SANATÇI
========================= */

const sanatcilar = [

  {
    id: "vermeer",
    dosya: "images/vermeer.png"
  },

  {
    id: "van-gogh",
    dosya: "images/van-gogh.png"
  },

  {
    id: "velazquez",
    dosya: "images/velazquez.png"
  },

  {
    id: "monet",
    dosya: "images/monet.png"
  },

  {
    id: "leonardo",
    dosya: "images/leonardo.png"
  },

  {
    id: "munch",
    dosya: "images/munch.png"
  },

  {
    id: "rembrandt",
    dosya: "images/rembrandt.png"
  },

  {
    id: "osman-hamdi",
    dosya: "images/osman-hamdi.png"
  },

  {
    id: "cezanne",
    dosya: "images/cezanne.png"
  },

  {
    id: "mondrian",
    dosya: "images/mondrian.png"
  },

  {
    id: "durer",
    dosya: "images/durer.png"
  },

  {
    id: "millet",
    dosya: "images/millet.png"
  }

];


/* =========================
   SES SEVİYELERİ
========================= */

const MUZIK_SESI = 0.22;
const BUTON_SESI = 0.65;


/* =========================
   MÜZİKLER
========================= */

const anaMenuMuzik =
  new Audio("sounds/ana-menu-muzik.mp3");

const oyunMuzik =
  new Audio("sounds/oyun-muzik.mp3");


anaMenuMuzik.loop = true;
oyunMuzik.loop = true;

anaMenuMuzik.volume = 0;
oyunMuzik.volume = 0;


/* =========================
   BUTON SESİ
========================= */

const butonTik =
  new Audio("sounds/buton-tik.mp3");

butonTik.volume = BUTON_SESI;


function butonSesiCal() {

  butonTik.currentTime = 0;

  butonTik.play().catch((hata) => {

    console.log(
      "Buton sesi çalınamadı:",
      hata
    );

  });

}


/* =========================
   RANDOM KARIŞTIRMA
   Fisher-Yates
========================= */

function karistir(dizi) {

  const yeniDizi = [...dizi];

  for (
    let i = yeniDizi.length - 1;
    i > 0;
    i--
  ) {

    const j =
      Math.floor(
        Math.random() * (i + 1)
      );

    [
      yeniDizi[i],
      yeniDizi[j]
    ] = [
      yeniDizi[j],
      yeniDizi[i]
    ];

  }

  return yeniDizi;
}


/* =========================
   MÜZİĞİ YAVAŞÇA AÇ
========================= */

function muzikAc(
  muzik,
  hedefSes = MUZIK_SESI,
  sure = 1500
) {

  const baslangicZamani =
    performance.now();

  const baslangicSes =
    muzik.volume;


  function animasyon(zaman) {

    const ilerleme =
      Math.min(
        (zaman - baslangicZamani) / sure,
        1
      );

    muzik.volume =
      baslangicSes +
      (hedefSes - baslangicSes) *
      ilerleme;


    if (ilerleme < 1) {

      requestAnimationFrame(
        animasyon
      );

    }

  }


  requestAnimationFrame(
    animasyon
  );

}


/* =========================
   MÜZİĞİ YAVAŞÇA KAPAT
========================= */

function muzikKapat(
  muzik,
  sure = 1000
) {

  const baslangicZamani =
    performance.now();

  const baslangicSes =
    muzik.volume;


  return new Promise((resolve) => {

    function animasyon(zaman) {

      const ilerleme =
        Math.min(
          (zaman - baslangicZamani) / sure,
          1
        );


      muzik.volume =
        baslangicSes *
        (1 - ilerleme);


      if (ilerleme < 1) {

        requestAnimationFrame(
          animasyon
        );

      }

      else {

        muzik.pause();

        muzik.currentTime = 0;

        muzik.volume = 0;

        resolve();

      }

    }


    requestAnimationFrame(
      animasyon
    );

  });

}


/* =========================
   12 KARTI KARIŞTIR
========================= */

function sanatciKartlariniKaristir() {

  const karisikSanatcilar =
    karistir(sanatcilar);


  /*
    Bir sonraki seçim aşamasında
    bu sırayı kullanacağız.
  */

  window.karisikSanatcilar =
    karisikSanatcilar;


  karistirmaDestesi.innerHTML = "";
  kapaliKartSirasi.innerHTML = "";

  kapaliKartSirasi.classList.remove(
    "goster"
  );


  /* =========================
     ORTADA 12 KARTLIK DESTE
  ========================= */

  karisikSanatcilar.forEach(
    (sanatci, index) => {

      const kart =
        document.createElement("img");


      kart.src =
        "images/kart-arkasi.png";

      kart.className =
        "karistirmaKarti";


      const rastgeleAci =
        Math.random() * 30 - 15;

      const rastgeleX =
        Math.random() * 50 - 25;

      const rastgeleY =
        Math.random() * 30 - 15;


      kart.style.transform = `
        translate(
          ${rastgeleX}px,
          ${rastgeleY}px
        )
        rotate(${rastgeleAci}deg)
      `;


      kart.style.zIndex =
        index;


      karistirmaDestesi.appendChild(
        kart
      );

    }
  );


  /* =========================
     KARIŞTIRMA HAREKETİ
  ========================= */

  const desteKartlari =
    document.querySelectorAll(
      ".karistirmaKarti"
    );


  let tur = 0;


  const karistirmaAnimasyonu =
    setInterval(() => {

      desteKartlari.forEach(
        (kart, index) => {

          const x =
            Math.random() * 160 - 80;

          const y =
            Math.random() * 70 - 35;

          const aci =
            Math.random() * 50 - 25;


          kart.style.transition =
            "transform 0.18s ease";


          kart.style.transform = `
            translate(
              ${x}px,
              ${y}px
            )
            rotate(${aci}deg)
          `;

        }
      );


      tur++;


      if (tur >= 6) {

        clearInterval(
          karistirmaAnimasyonu
        );


        /* Kartları yeniden ortaya topla */

        desteKartlari.forEach(
          (kart, index) => {

            kart.style.transform =
              `
              translate(
                ${index * 1.5}px,
                ${index * -0.5}px
              )
              rotate(0deg)
              `;

          }
        );


        /*
          Biraz bekle,
          sonra 12 kapalı kartı diz.
        */

        setTimeout(() => {

          karistirmaDestesi.innerHTML =
            "";

          onIkiKartiDiz(
            karisikSanatcilar
          );

        }, 450);

      }

    }, 190);

}


/* =========================
   12 KARTI YAN YANA DİZ
========================= */

function onIkiKartiDiz(
  karisikSanatcilar
) {

  kapaliKartSirasi.innerHTML = "";


  karisikSanatcilar.forEach(
    (sanatci, index) => {

      const kart =
        document.createElement("img");


      kart.src =
        "images/kart-arkasi.png";

      kart.className =
        "kapaliSanatciKarti";


      /*
        Kartın kim olduğunu oyuncu görmüyor.
        Ama JavaScript biliyor.
      */

      kart.dataset.sanatci =
        sanatci.id;

      kart.dataset.dosya =
        sanatci.dosya;

      kart.dataset.sira =
        index;


      kapaliKartSirasi.appendChild(
        kart
      );

    }
  );


  requestAnimationFrame(() => {

    kapaliKartSirasi.classList.add(
      "goster"
    );

  });

}


/* =========================
   DEVAM ETMEK İÇİN DOKUN
========================= */

devamButonu.addEventListener(
  "click",
  () => {

    butonSesiCal();


    acilisEkrani.classList.remove(
      "aktif"
    );

    anaMenu.classList.add(
      "aktif"
    );


    anaMenuMuzik.currentTime = 0;
    anaMenuMuzik.volume = 0;


    anaMenuMuzik
      .play()

      .then(() => {

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

  }
);


/* =========================
   BAŞLA
========================= */

baslaButonu.addEventListener(
  "click",
  async () => {

    butonSesiCal();


    /*
      Oyun müziğini kullanıcı tıklaması
      sırasında sessizce başlat.
    */

    oyunMuzik.currentTime = 0;
    oyunMuzik.volume = 0;


    oyunMuzik
      .play()

      .catch((hata) => {

        console.log(
          "Oyun müziği başlatılamadı:",
          hata
        );

      });


    /*
      Menü müziğini yavaşça kapat.
    */

    await muzikKapat(
      anaMenuMuzik,
      1000
    );


    /*
      Oyun ekranına geç.
    */

    anaMenu.classList.remove(
      "aktif"
    );

    oynanisEkrani.classList.add(
      "aktif"
    );


    /*
      Oyun müziğini yükselt.
    */

    muzikAc(
      oyunMuzik,
      MUZIK_SESI,
      1500
    );


    /*
      12 sanatçı kartını
      her yeni başlangıçta random karıştır.
    */

    setTimeout(() => {

      sanatciKartlariniKaristir();

    }, 400);

  }
);


/* =========================
   NASIL OYNANIR
========================= */

nasilOynanirButonu.addEventListener(
  "click",
  () => {

    butonSesiCal();

    console.log(
      "Nasıl Oynanır butonuna basıldı!"
    );

  }
);
