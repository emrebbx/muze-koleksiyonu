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
   KARTLARI HAREKET ETTİR
========================= */

function kartlariHareketEttir(
  kartlar,
  konumFonksiyonu,
  sure = 350
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

      kart.style.zIndex =
        konum.z ?? index;
    }
  );
}


/* =========================
   GERÇEK DESTE KARIŞTIRMA
   İKİYE AYIR → İÇ İÇE GEÇİR
========================= */

async function gercekDesteKaristir(
  desteKartlari
) {

  /*
    1 — Kartlar düzgün tek deste.
  */

  kartlariHareketEttir(
    desteKartlari,
    (index) => ({
      x: index * 1.2,
      y: index * -0.35,
      aci: 0,
      z: index
    }),
    250
  );

  await bekle(350);


  /*
    2 — Deste iki eşit gruba ayrılır.
  */

  kartlariHareketEttir(
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
            ? -120 + grupIndex * 2
            : 120 + grupIndex * 2,

        y:
          grupIndex * -0.4,

        aci:
          solGrup
            ? -3
            : 3,

        z: index
      };
    },
    420
  );

  await bekle(500);


  /*
    3 — İki grup biraz daha birbirine yaklaşır.
  */

  kartlariHareketEttir(
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
            ? -55 + grupIndex * 1.5
            : 55 + grupIndex * 1.5,

        y:
          grupIndex * -0.4,

        aci:
          solGrup
            ? -2
            : 2,

        z: index
      };
    },
    350
  );

  await bekle(420);


  /*
    4 — Kartlar sırayla iç içe geçer.
    Sol 1, sağ 1, sol 2, sağ 2...
  */

  const yeniZSirasi = [];

  for (let i = 0; i < 6; i++) {
    yeniZSirasi.push(i);
    yeniZSirasi.push(i + 6);
  }


  kartlariHareketEttir(
    desteKartlari,
    (index) => {

      const solGrup =
        index < 6;

      const grupIndex =
        solGrup
          ? index
          : index - 6;

      const yeniZ =
        yeniZSirasi.indexOf(index);

      return {
        x:
          solGrup
            ? -12 + grupIndex * 2.5
            : 12 - grupIndex * 2.5,

        y:
          grupIndex * -0.6,

        aci:
          solGrup
            ? -1.2
            : 1.2,

        z: yeniZ
      };
    },
    420
  );

  await bekle(500);


  /*
    5 — İki yarım deste tam olarak birleşir.
  */

  kartlariHareketEttir(
    desteKartlari,
    (index) => {

      const yeniZ =
        yeniZSirasi.indexOf(index);

      return {
        x:
          yeniZ * 1.15,

        y:
          yeniZ * -0.35,

        aci: 0,

        z: yeniZ
      };
    },
    380
  );

  await bekle(450);


  /*
    6 — Bir kez daha hafifçe sıkıştır.
  */

  kartlariHareketEttir(
    desteKartlari,
    (index) => {

      const yeniZ =
        yeniZSirasi.indexOf(index);

      return {
        x:
          yeniZ * 0.8,

        y:
          yeniZ * -0.25,

        aci: 0,

        z: yeniZ
      };
    },
    220
  );

  await bekle(350);
}


/* =========================
   12 SANATÇI KARTINI
   HAZIRLA VE KARIŞTIR
========================= */

async function sanatciKartlariniKaristir() {

  /*
    Gerçek kartların sırası
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
    12 kapalı karttan deste oluştur.
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
    Gerçek deste karıştırma animasyonu.
  */

  await gercekDesteKaristir(
    desteKartlari
  );


  /*
    Ortadaki deste kaldırılır.
  */

  karistirmaDestesi.innerHTML = "";


  /*
    12 kapalı kart soldan sağa dizilir.
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
        Oyuncu sanatçıyı görmez,
        JS hangi kart olduğunu bilir.
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
