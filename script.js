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
   BEKLEME
========================= */

function bekle(ms) {

  return new Promise((resolve) => {
    setTimeout(resolve, ms);
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
      requestAnimationFrame(animasyon);
    }
  }

  requestAnimationFrame(animasyon);
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

    requestAnimationFrame(animasyon);
  });
}


/* =========================
   KARTLARI KONUMLANDIR
========================= */

function kartlariKonumlandir(
  kartlar,
  konumFonksiyonu,
  sure = 300
) {

  kartlar.forEach(
    (kart, index) => {

      const konum =
        konumFonksiyonu(index);

      kart.style.transition =
        `transform ${sure}ms cubic-bezier(
          0.22,
          0.61,
          0.36,
          1
        )`;

      kart.style.transform = `
        translate(
          ${konum.x}px,
          ${konum.y}px
        )
        rotate(${konum.aci}deg)
      `;

      if (konum.z !== undefined) {
        kart.style.zIndex = konum.z;
      }
    }
  );

}


/* =========================
   MASA ÜSTÜ SHUFFLE
========================= */

async function masaUstuShuffle(
  desteKartlari
) {

  /*
    1 — Başlangıçta kartlar
    hafif dağınık bir deste.
  */

  kartlariKonumlandir(
    desteKartlari,
    (index) => ({
      x: index * 1.2,
      y: index * -0.35,
      aci: (index - 5.5) * 0.25,
      z: index
    }),
    250
  );

  await bekle(350);


  /*
    2 — Deste iki yana açılır.
    İlk 6 sola,
    diğer 6 sağa.
  */

  kartlariKonumlandir(
    desteKartlari,
    (index) => {

      const solGrup =
        index < 6;

      const grupIndex =
        solGrup
          ? index
          : index - 6;

      return {
        x:
          solGrup
            ? -105 - grupIndex * 4
            : 105 + grupIndex * 4,

        y:
          grupIndex * 2,

        aci:
          solGrup
            ? -5 - grupIndex * 0.5
            : 5 + grupIndex * 0.5,

        z: index
      };
    },
    320
  );

  await bekle(380);


  /*
    3 — İki grup birbirinin
    üzerinden kayarak merkeze gelir.
  */

  kartlariKonumlandir(
    desteKartlari,
    (index) => {

      const solGrup =
        index < 6;

      const grupIndex =
        solGrup
          ? index
          : index - 6;

      return {
        x:
          solGrup
            ? -25 + grupIndex * 8
            : 25 - grupIndex * 8,

        y:
          grupIndex * -1.5,

        aci:
          solGrup
            ? -2
            : 2,

        z:
          solGrup
            ? index * 2
            : index * 2 + 1
      };
    },
    300
  );

  await bekle(350);


  /*
    4 — Kartlar tekrar
    iki yana kayar.
    Bu sefer daha kısa.
  */

  kartlariKonumlandir(
    desteKartlari,
    (index) => {

      const solGrup =
        index % 2 === 0;

      const grupIndex =
        Math.floor(index / 2);

      return {
        x:
          solGrup
            ? -70 - grupIndex * 3
            : 70 + grupIndex * 3,

        y:
          grupIndex * 1.5,

        aci:
          solGrup
            ? -4
            : 4,

        z: index
      };
    },
    280
  );

  await bekle(330);


  /*
    5 — Yeniden iç içe geçer.
  */

  kartlariKonumlandir(
    desteKartlari,
    (index) => {

      const solGrup =
        index % 2 === 0;

      const grupIndex =
        Math.floor(index / 2);

      return {
        x:
          solGrup
            ? -18 + grupIndex * 5
            : 18 - grupIndex * 5,

        y:
          -grupIndex,

        aci:
          solGrup
            ? -1.5
            : 1.5,

        z:
          solGrup
            ? index
            : index + 1
      };
    },
    270
  );

  await bekle(320);


  /*
    6 — Hepsi düzgün şekilde
    tek deste olur.
  */

  kartlariKonumlandir(
    desteKartlari,
    (index) => ({
      x: index * 1.1,
      y: index * -0.35,
      aci: 0,
      z: index
    }),
    350
  );

  await bekle(500);
}


/* =========================
   12 SANATÇI KARTINI
   HAZIRLA VE KARIŞTIR
========================= */

async function sanatciKartlariniKaristir() {

  /*
    Sanatçıların gerçek sırası
    burada random oluyor.
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
    Ortadaki kapalı desteyi oluştur.
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

      kart.style.transform = `
        translate(
          ${index * 1.2}px,
          ${index * -0.35}px
        )
      `;

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
    Masa üstü karıştırma animasyonu.
  */

  await masaUstuShuffle(
    desteKartlari
  );


  /*
    Deste kaybolur.
  */

  karistirmaDestesi.innerHTML = "";


  /*
    12 kart kapalı şekilde
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


      /*
        Oyuncu sanatçıyı görmüyor,
        fakat sistem kartın kim
        olduğunu biliyor.
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
      Oyun müziğini sessizce başlat.
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
      Menü müziğini azalt.
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
      Kart karıştırmayı başlat.
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
