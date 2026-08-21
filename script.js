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
   YENİ SANATÇI YUVALARI
========================= */

const oyuncu1SanatciYuvalari =
  Array.from(
    document.querySelectorAll(
      "#oyuncu1SanatciYuvalari .yeniSanatciYuva"
    )
  );

const oyuncu2SanatciYuvalari =
  Array.from(
    document.querySelectorAll(
      "#oyuncu2SanatciYuvalari .yeniSanatciYuva"
    )
  );


/* =========================
   12 SANATÇI
========================= */

const sanatcilar = [
  { id: "vermeer", dosya: "images/vermeer.png" },
  { id: "van-gogh", dosya: "images/van-gogh.png" },
  { id: "velazquez", dosya: "images/velazquez.png" },
  { id: "monet", dosya: "images/monet.png" },
  { id: "leonardo", dosya: "images/leonardo.png" },
  { id: "munch", dosya: "images/munch.png" },
  { id: "rembrandt", dosya: "images/rembrandt.png" },
  { id: "osman-hamdi", dosya: "images/osman-hamdi.png" },
  { id: "cezanne", dosya: "images/cezanne.png" },
  { id: "mondrian", dosya: "images/mondrian.png" },
  { id: "durer", dosya: "images/durer.png" },
  { id: "millet", dosya: "images/millet.png" }
];


/* =========================
   OYUN DURUMU
========================= */

let aktifOyuncu = 1;

let oyuncu1Secimleri = [];
let oyuncu2Secimleri = [];

let secimKilidi = false;

let onizlemeAcik = false;


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
   MÜZİĞİ AÇ
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
   MÜZİĞİ KAPAT
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
   SEÇİM YAZISI
========================= */

function secimYazisiniOlustur() {
  let yazi =
    document.getElementById("secimYazisi");

  if (!yazi) {
    yazi =
      document.createElement("div");

    yazi.id =
      "secimYazisi";

    oynanisEkrani.appendChild(
      yazi
    );
  }

  return yazi;
}


function secimYazisiGoster(metin) {
  const yazi =
    secimYazisiniOlustur();

  yazi.textContent =
    metin;

  gsap.killTweensOf(yazi);

  gsap.fromTo(
    yazi,
    {
      opacity: 0,
      scale: 0.85,
      y: -10
    },
    {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 0.4,
      ease: "back.out(1.7)"
    }
  );
}


/* =========================
   GSAP DESTE SHUFFLE
========================= */

function gsapDesteKaristir(
  desteKartlari
) {
  return new Promise((resolve) => {
    const solDeste =
      desteKartlari.slice(0, 6);

    const sagDeste =
      desteKartlari.slice(6, 12);

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

    tl.to(
      desteKartlari,
      {
        y: "-=20",
        duration: 0.25,
        stagger: 0.01
      }
    );

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
        "riffle+=" +
        (i * 0.055)
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
        "riffle+=" +
        (i * 0.055 + 0.028)
      );
    }

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
  });
}


/* =========================
   KARTLARI KARIŞTIR
========================= */

async function sanatciKartlariniKaristir() {
  aktifOyuncu = 1;

  oyuncu1Secimleri = [];
  oyuncu2Secimleri = [];

  secimKilidi = false;

  const karisikSanatcilar =
    karistir(sanatcilar);

  window.karisikSanatcilar =
    karisikSanatcilar;

  karistirmaDestesi.innerHTML =
    "";

  kapaliKartSirasi.innerHTML =
    "";

  kapaliKartSirasi.classList.remove(
    "goster"
  );

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

  await gsapDesteKaristir(
    desteKartlari
  );

  karistirmaDestesi.innerHTML =
    "";

  onIkiKartiDiz(
    karisikSanatcilar
  );
}


/* =========================
   12 KARTI DİZ
========================= */

function onIkiKartiDiz(
  karisikSanatcilar
) {
  kapaliKartSirasi.innerHTML =
    "";

  karisikSanatcilar.forEach(
    (sanatci, index) => {
      const slot =
        document.createElement("div");

      slot.className =
        "kapaliKartSlotu";

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

      kart.dataset.secildi =
        "hayir";

      kart.addEventListener(
        "click",
        () => {
          sanatciKartiSec(
            kart,
            sanatci
          );
        }
      );

      slot.appendChild(kart);
      kapaliKartSirasi.appendChild(slot);
    }
  );

  requestAnimationFrame(() => {
    kapaliKartSirasi.classList.add(
      "goster"
    );
  });

  setTimeout(() => {
    secimYazisiGoster(
      "1. OYUNCU — 3 SANATÇI SEÇ"
    );
  }, 500);
}


/* =========================
   SANATÇI KARTINI SEÇ
========================= */

function sanatciKartiSec(
  kart,
  sanatci
) {
  if (secimKilidi) return;

  if (
    kart.dataset.secildi === "evet"
  ) {
    return;
  }

  secimKilidi = true;

  kart.dataset.secildi =
    "evet";

  gsap.to(
    kart,
    {
      scaleX: 0,
      duration: 0.2,
      ease: "power2.in",

      onComplete: () => {
        kart.src =
          sanatci.dosya;

        gsap.to(
          kart,
          {
            scaleX: 1,
            duration: 0.22,
            ease: "back.out(1.5)",

            onComplete: () => {
              setTimeout(() => {
                kartiYuvayaGonder(
                  kart,
                  sanatci
                );
              }, 300);
            }
          }
        );
      }
    }
  );
}


/* =========================
   KARTI YUVAYA GÖNDER
========================= */

function kartiYuvayaGonder(
  kart,
  sanatci
) {
  let hedefYuva;
  let hedefIndex;

  if (aktifOyuncu === 1) {
    hedefIndex =
      oyuncu1Secimleri.length;

    hedefYuva =
      oyuncu1SanatciYuvalari[
        hedefIndex
      ];
  } else {
    hedefIndex =
      oyuncu2Secimleri.length;

    hedefYuva =
      oyuncu2SanatciYuvalari[
        hedefIndex
      ];
  }

  if (!hedefYuva) {
    secimKilidi = false;
    return;
  }

  const kartRect =
    kart.getBoundingClientRect();

  const yuvaRect =
    hedefYuva.getBoundingClientRect();


  /* =========================
     UÇAN KART
  ========================= */

  const ucanKart =
    document.createElement("img");

  ucanKart.src =
    sanatci.dosya;

  ucanKart.className =
    "ucanSanatciKarti";

  Object.assign(
    ucanKart.style,
    {
      position: "fixed",

      left:
        kartRect.left + "px",

      top:
        kartRect.top + "px",

      width:
        kartRect.width + "px",

      height:
        kartRect.height + "px",

      zIndex: 9999,

      pointerEvents: "none",

      opacity: "1"
    }
  );

  document.body.appendChild(
    ucanKart
  );

  kart.style.visibility =
    "hidden";

  gsap.to(
    ucanKart,
    {
      left:
        yuvaRect.left,

      top:
        yuvaRect.top,

      width:
        yuvaRect.width,

      height:
        yuvaRect.height,

      rotation: 0,

      opacity: 1,

      duration: 0.65,

      ease:
        "power3.inOut",

      onComplete: () => {

        const yerlesenKart =
          document.createElement("img");

        yerlesenKart.src =
          sanatci.dosya;

        yerlesenKart.className =
          "yerlesenSanatciKarti";

        Object.assign(
          yerlesenKart.style,
          {
            position: "fixed",

            left:
              yuvaRect.left + "px",

            top:
              yuvaRect.top + "px",

            width:
              yuvaRect.width + "px",

            height:
              yuvaRect.height + "px",

            zIndex: 5,

            opacity: "1",

            pointerEvents: "auto",

            cursor: "pointer",

            objectFit: "fill",

            userSelect: "none",

            WebkitUserDrag:
              "none"
          }
        );

        yerlesenKart.addEventListener(
          "click",
          (event) => {
            event.stopPropagation();

            kartOnizlemeAc(
              yerlesenKart
            );
          }
        );

        document.body.appendChild(
          yerlesenKart
        );

        ucanKart.remove();

        const slot =
          kart.parentElement;

        kart.remove();

        if (slot) {
          slot.classList.add("bos");
        }

        if (
          aktifOyuncu === 1
        ) {
          oyuncu1Secimleri.push(
            sanatci
          );
        } else {
          oyuncu2Secimleri.push(
            sanatci
          );
        }

        secimKilidi = false;

        secimDurumunuKontrolEt();
      }
    }
  );
}


/* =========================
   KART ÖNİZLEME
========================= */

function kartOnizlemeAc(
  kaynakKart
) {
  if (onizlemeAcik) return;

  onizlemeAcik = true;

  butonSesiCal();

  const kaynakRect =
    kaynakKart.getBoundingClientRect();

  const katman =
    document.createElement("div");

  katman.id =
    "kartOnizlemeKatmani";

  document.body.appendChild(
    katman
  );

  const onizlemeKart =
    document.createElement("img");

  onizlemeKart.id =
    "kartOnizlemeKart";

  onizlemeKart.src =
    kaynakKart.src;

  Object.assign(
    onizlemeKart.style,
    {
      position: "fixed",

      left:
        kaynakRect.left +
        "px",

      top:
        kaynakRect.top +
        "px",

      width:
        kaynakRect.width +
        "px",

      height:
        kaynakRect.height +
        "px",

      zIndex: 10001,

      opacity: "1",

      cursor: "pointer",

      userSelect: "none",

      WebkitUserDrag:
        "none"
    }
  );

  document.body.appendChild(
    onizlemeKart
  );

  kaynakKart.style.opacity =
    "0";

  const kartOrani =
    kaynakRect.width /
    kaynakRect.height;

  let hedefYukseklik =
    window.innerHeight * 0.82;

  let hedefGenislik =
    hedefYukseklik *
    kartOrani;

  const maksimumGenislik =
    window.innerWidth * 0.42;

  if (
    hedefGenislik >
    maksimumGenislik
  ) {
    hedefGenislik =
      maksimumGenislik;

    hedefYukseklik =
      hedefGenislik /
      kartOrani;
  }

  const hedefLeft =
    (
      window.innerWidth -
      hedefGenislik
    ) / 2;

  const hedefTop =
    (
      window.innerHeight -
      hedefYukseklik
    ) / 2;

  gsap.fromTo(
    katman,
    {
      opacity: 0
    },
    {
      opacity: 1,
      duration: 0.3
    }
  );

  gsap.to(
    onizlemeKart,
    {
      left:
        hedefLeft,

      top:
        hedefTop,

      width:
        hedefGenislik,

      height:
        hedefYukseklik,

      rotation: 0,

      duration: 0.55,

      ease:
        "back.out(1.25)"
    }
  );

  function onizlemeyiKapat() {
    if (!onizlemeAcik) {
      return;
    }

    onizlemeAcik = false;

    butonSesiCal();

    const guncelKaynakRect =
      kaynakKart.getBoundingClientRect();

    gsap.to(
      katman,
      {
        opacity: 0,
        duration: 0.25
      }
    );

    gsap.to(
      onizlemeKart,
      {
        left:
          guncelKaynakRect.left,

        top:
          guncelKaynakRect.top,

        width:
          guncelKaynakRect.width,

        height:
          guncelKaynakRect.height,

        duration: 0.45,

        ease:
          "power3.inOut",

        onComplete: () => {
          kaynakKart.style.opacity =
            "1";

          onizlemeKart.remove();

          katman.remove();
        }
      }
    );
  }

  onizlemeKart.addEventListener(
    "click",
    (event) => {
      event.stopPropagation();

      onizlemeyiKapat();
    }
  );

  katman.addEventListener(
    "click",
    () => {
      onizlemeyiKapat();
    }
  );
}


/* =========================
   SEÇİM DURUMU
========================= */

function secimDurumunuKontrolEt() {
  if (
    aktifOyuncu === 1 &&
    oyuncu1Secimleri.length === 3
  ) {
    aktifOyuncu = 2;

    secimYazisiGoster(
      "2. OYUNCU — 3 SANATÇI SEÇ"
    );

    return;
  }

  if (
    aktifOyuncu === 2 &&
    oyuncu2Secimleri.length === 3
  ) {
    secimKilidi = true;

    secimYazisiGoster(
      "SANATÇILAR SEÇİLDİ"
    );

    const kalanKartlar =
      document.querySelectorAll(
        ".kapaliSanatciKarti"
      );

    gsap.to(
      kalanKartlar,
      {
        opacity: 0,

        y: 40,

        scale: 0.85,

        duration: 0.5,

        stagger: 0.05,

        ease: "power2.in",

        onComplete: () => {
          kapaliKartSirasi.innerHTML =
            "";

          kapaliKartSirasi.classList.remove(
            "goster"
          );
        }
      }
    );
  }
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

    anaMenuMuzik.currentTime =
      0;

    anaMenuMuzik.volume =
      0;

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

    oyunMuzik.currentTime =
      0;

    oyunMuzik.volume =
      0;

    oyunMuzik
      .play()

      .catch((hata) => {
        console.log(
          "Oyun müziği başlatılamadı:",
          hata
        );
      });

    await muzikKapat(
      anaMenuMuzik,
      1000
    );

    anaMenu.classList.remove(
      "aktif"
    );

    oynanisEkrani.classList.add(
      "aktif"
    );

    muzikAc(
      oyunMuzik,
      MUZIK_SESI,
      1500
    );

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
