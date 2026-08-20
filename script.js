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
   FISHER-YATES
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

      } else {

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
   GSAP GERÇEK DESTE SHUFFLE
========================= */

function gsapDesteKaristir(
  desteKartlari
) {

  return new Promise((resolve) => {

    const solDeste =
      desteKartlari.slice(0, 6);

    const sagDeste =
      desteKartlari.slice(6, 12);


    /*
      Başlangıç:
      kartlar tek düzgün deste halinde.
    */

    desteKartlari.forEach(
      (kart, index) => {

        gsap.set(kart, {
          x: index * 1.2,
          y: index * -0.35,
          rotation: 0,
          scale: 1,
          transformOrigin: "50% 100%",
          zIndex: index
        });

      }
    );


    const tl =
      gsap.timeline({
        defaults: {
          ease: "power2.inOut"
        },
        onComplete: resolve
      });


    /*
      1 — Deste biraz yukarı kalkar.
    */

    tl.to(
      desteKartlari,
      {
        y: "-=20",
        duration: 0.25,
        stagger: 0.01
      }
    );


    /*
      2 — 6 + 6 iki ayrı deste olur.
    */

    tl.to(
      solDeste,
      {
        x: (index) =>
          -145 + index * 2,

        y: (index) =>
          -10 - index * 0.5,

        rotation: -5,

        duration: 0.45,

        stagger: 0.025
      }
    );


    tl.to(
      sagDeste,
      {
        x: (index) =>
          145 + index * 2,

        y: (index) =>
          -10 - index * 0.5,

        rotation: 5,

        duration: 0.45,

        stagger: 0.025
      },
      "<"
    );


    /*
      3 — İki deste içe doğru eğilir.
      Riffle öncesi hazırlık.
    */

    tl.to(
      solDeste,
      {
        x: (index) =>
          -72 + index * 1.5,

        y: (index) =>
          8 - index * 0.5,

        rotation: -8,

        scaleY: 0.96,

        duration: 0.35
      }
    );


    tl.to(
      sagDeste,
      {
        x: (index) =>
          72 + index * 1.5,

        y: (index) =>
          8 - index * 0.5,

        rotation: 8,

        scaleY: 0.96,

        duration: 0.35
      },
      "<"
    );


    /*
      4 — Kartlar sırayla iç içe geçer.
    */

    for (let i = 0; i < 6; i++) {

      const solKart =
        solDeste[i];

      const sagKart =
        sagDeste[i];

      tl.to(
        solKart,
        {
          x: -6 + i * 2,
          y: -i * 0.8,
          rotation: -1.5,
          duration: 0.18,
          ease: "power1.out"
        },
        "riffle+=" + (i * 0.055)
      );


      tl.to(
        sagKart,
        {
          x: 6 - i * 2,
          y: -i * 0.8,
          rotation: 1.5,
          duration: 0.18,
          ease: "power1.out"
        },
        "riffle+=" + (i * 0.055 + 0.028)
      );

    }


    /*
      5 — İç içe geçen kartlar
      tamamen tek deste olur.
    */

    tl.to(
      desteKartlari,
      {
        x: (index) =>
          index * 0.9,

        y: (index) =>
          index * -0.28,

        rotation: 0,

        scaleY: 1,

        duration: 0.4,

        stagger: 0.012,

        ease: "back.out(1.25)"
      },
      ">"
    );


    /*
      6 — Deste masaya hafif oturur.
    */

    tl.to(
      desteKartlari,
      {
        y: (index) =>
          index * -0.28 + 4,

        duration: 0.12,

        ease: "power2.in"
      }
    );


    tl.to(
      desteKartlari,
      {
        y: (index) =>
          index * -0.28,

        duration: 0.14,

        ease: "power2.out"
      }
    );

  });
}


/* =========================
   12 SANATÇI KARTINI
   HAZIRLA VE KARIŞTIR
========================= */

async function sanatciKartlariniKaristir() {

  /*
    Sanatçıların gerçek sırası
    her yeni oyunda random.
  */

  const karisikSanatcilar =
    karistir(sanatcilar);

  window.karisikSanatcilar =
    karisikSanatcilar;


  karistirmaDestesi.innerHTML = "";

  kapaliKartSirasi.innerHTML = "";

  kapaliKartSirasi.classList.remove(
    "goster"
  );


  /*
    Ortada kapalı deste oluştur.
  */

  karisikSanatcilar.forEach(
    (sanatci, index) => {

      const kart =
        document.createElement("img");

      kart.src =
        "images/kart-arkasi.png";

      kart.className =
        "karistirmaKarti";

      kart.dataset.sanatci =
        sanatci.id;

      kart.style.zIndex =
        index;

      karistirmaDestesi.appendChild(
        kart
      );

    }
  );


  const desteKartlari =
    Array.from(
      karistirmaDestesi.querySelectorAll(
        ".karistirmaKarti"
      )
    );


  /*
    GSAP ile gerçek deste karıştırma.
  */

  await gsapDesteKaristir(
    desteKartlari
  );


  /*
    Shuffle tamamlanınca
    ortadaki deste kaldırılır.
  */

  karistirmaDestesi.innerHTML = "";


  /*
    12 kapalı kart
    soldan sağa dizilir.
  */

  onIkiKartiDiz(
    karisikSanatcilar
  );
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
      Oyun müziğini sessiz başlat.
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
      GSAP shuffle başlasın.
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
