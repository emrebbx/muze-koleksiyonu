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

const yuklemeYuzdesi =
  document.getElementById("yuklemeYuzdesi");


/* =========================
   SANATÇI SEÇİM ELEMANLARI
========================= */

const karistirmaDestesi =
  document.getElementById("karistirmaDestesi");

const kapaliKartSirasi =
  document.getElementById("kapaliKartSirasi");

const artanSanatciYuvasi =
  document.getElementById("artanSanatciYuvasi");


/* =========================
   ÖZEL KART ELEMANLARI
========================= */

const artanOzelYuvasi =
  document.getElementById("artanOzelYuvasi");

const ozelKartSecimAlani =
  document.getElementById("ozelKartSecimAlani");

const ozelKartSayac =
  document.getElementById("ozelKartSayac");

const dedektifSecimAlani =
  document.getElementById("dedektifSecimAlani");

const ozelKartSecimSirasi =
  document.getElementById("ozelKartSecimSirasi");


/* =========================
   ORTAK DESTE
========================= */

const ortakDesteYuvasi =
  document.getElementById("ortakDesteYuvasi");


/* =========================
   SANATÇI YUVALARI
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


/* =====================================================
   36 ESER KARTI
===================================================== */

const eserKartlari = [

  /* CEZANNE */

  {
    id: "cezanne-eser1",
    tip: "eser",
    sanatci: "cezanne",
    eserSirasi: 1,
    dosya: "images/cezanne-eser1-kagit-oynayanlar.png"
  },

  {
    id: "cezanne-eser2",
    tip: "eser",
    sanatci: "cezanne",
    eserSirasi: 2,
    dosya: "images/cezanne-eser2-sainte-victorie-dagi.png"
  },

  {
    id: "cezanne-eser3",
    tip: "eser",
    sanatci: "cezanne",
    eserSirasi: 3,
    dosya: "images/cezanne-eser3-elmali-naturmort.png"
  },


  /* DURER */

  {
    id: "durer-eser1",
    tip: "eser",
    sanatci: "durer",
    eserSirasi: 1,
    dosya: "images/durer-eser1-genc-tavsan.png"
  },

  {
    id: "durer-eser2",
    tip: "eser",
    sanatci: "durer",
    eserSirasi: 2,
    dosya: "images/durer-eser2-gergedan.png"
  },

  {
    id: "durer-eser3",
    tip: "eser",
    sanatci: "durer",
    eserSirasi: 3,
    dosya: "images/durer-eser3-buyuk-cimen-parcasi.png"
  },


  /* LEONARDO */

  {
    id: "leonardo-eser1",
    tip: "eser",
    sanatci: "leonardo",
    eserSirasi: 1,
    dosya: "images/leonardo-eser1-mona-lisa.png"
  },

  {
    id: "leonardo-eser2",
    tip: "eser",
    sanatci: "leonardo",
    eserSirasi: 2,
    dosya: "images/leonardo-eser2-son-aksam-yemegi.png"
  },

  {
    id: "leonardo-eser3",
    tip: "eser",
    sanatci: "leonardo",
    eserSirasi: 3,
    dosya: "images/leonardo-eser3-erminli-kadin.png"
  },


  /* MILLET */

  {
    id: "millet-eser1",
    tip: "eser",
    sanatci: "millet",
    eserSirasi: 1,
    dosya: "images/millet-eser1-basak-toplayanlar.png"
  },

  {
    id: "millet-eser2",
    tip: "eser",
    sanatci: "millet",
    eserSirasi: 2,
    dosya: "images/millet-eser2-angelus.png"
  },

  {
    id: "millet-eser3",
    tip: "eser",
    sanatci: "millet",
    eserSirasi: 3,
    dosya: "images/millet-eser3-ekici.png"
  },


  /* MONDRIAN */

  {
    id: "mondrian-eser1",
    tip: "eser",
    sanatci: "mondrian",
    eserSirasi: 1,
    dosya: "images/mondrian-eser1-kirmizi-sari-mavi.png"
  },

  {
    id: "mondrian-eser2",
    tip: "eser",
    sanatci: "mondrian",
    eserSirasi: 2,
    dosya: "images/mondrian-eser2-new-york-city.png"
  },

  {
    id: "mondrian-eser3",
    tip: "eser",
    sanatci: "mondrian",
    eserSirasi: 3,
    dosya: "images/mondrian-eser3-broadway.png"
  },


  /* MONET */

  {
    id: "monet-eser1",
    tip: "eser",
    sanatci: "monet",
    eserSirasi: 1,
    dosya: "images/monet-eser1-izlenim.png"
  },

  {
    id: "monet-eser2",
    tip: "eser",
    sanatci: "monet",
    eserSirasi: 2,
    dosya: "images/monet-eser2-niluferler.png"
  },

  {
    id: "monet-eser3",
    tip: "eser",
    sanatci: "monet",
    eserSirasi: 3,
    dosya: "images/monet-eser3-parlamento-binasi.png"
  },


  /* MUNCH */

  {
    id: "munch-eser1",
    tip: "eser",
    sanatci: "munch",
    eserSirasi: 1,
    dosya: "images/munch-eser1-ciglik.png"
  },

  {
    id: "munch-eser2",
    tip: "eser",
    sanatci: "munch",
    eserSirasi: 2,
    dosya: "images/munch-eser2-hasta-cocuk.png"
  },

  {
    id: "munch-eser3",
    tip: "eser",
    sanatci: "munch",
    eserSirasi: 3,
    dosya: "images/munch-eser3-kaygi.png"
  },


  /* OSMAN HAMDİ */

  {
    id: "osman-hamdi-eser1",
    tip: "eser",
    sanatci: "osman-hamdi",
    eserSirasi: 1,
    dosya: "images/osman-hamdi-eser1-kaplumbaga-terbiyecisi.png"
  },

  {
    id: "osman-hamdi-eser2",
    tip: "eser",
    sanatci: "osman-hamdi",
    eserSirasi: 2,
    dosya: "images/osman-hamdi-eser2-silah-taciri.png"
  },

  {
    id: "osman-hamdi-eser3",
    tip: "eser",
    sanatci: "osman-hamdi",
    eserSirasi: 3,
    dosya: "images/osman-hamdi-eser3-iki-muzisyen-kiz.png"
  },


  /* REMBRANDT */

  {
    id: "rembrandt-eser1",
    tip: "eser",
    sanatci: "rembrandt",
    eserSirasi: 1,
    dosya: "images/rembrandt-eser1-gece-devriyesi.png"
  },

  {
    id: "rembrandt-eser2",
    tip: "eser",
    sanatci: "rembrandt",
    eserSirasi: 2,
    dosya: "images/rembrandt-eser2-belsazzarin-ziyafeti.png"
  },

  {
    id: "rembrandt-eser3",
    tip: "eser",
    sanatci: "rembrandt",
    eserSirasi: 3,
    dosya: "images/rembrandt-eser3-celile-denizindeki-firtina.png"
  },


  /* VAN GOGH */

  {
    id: "van-gogh-eser1",
    tip: "eser",
    sanatci: "van-gogh",
    eserSirasi: 1,
    dosya: "images/van-gogh-eser1-yildizli-gece.png"
  },

  {
    id: "van-gogh-eser2",
    tip: "eser",
    sanatci: "van-gogh",
    eserSirasi: 2,
    dosya: "images/van-gogh-eser2-aycicekleri.png"
  },

  {
    id: "van-gogh-eser3",
    tip: "eser",
    sanatci: "van-gogh",
    eserSirasi: 3,
    dosya: "images/van-gogh-eser3-yatak-odasi.png"
  },


  /* VELAZQUEZ */

  {
    id: "velazquez-eser1",
    tip: "eser",
    sanatci: "velazquez",
    eserSirasi: 1,
    dosya: "images/velazquez-eser1-nedimeler.png"
  },

  {
    id: "velazquez-eser2",
    tip: "eser",
    sanatci: "velazquez",
    eserSirasi: 2,
    dosya: "images/velazquez-eser2-bredanin-teslimi.png"
  },

  {
    id: "velazquez-eser3",
    tip: "eser",
    sanatci: "velazquez",
    eserSirasi: 3,
    dosya: "images/velazquez-eser3-infanta-margarita.png"
  },


  /* VERMEER */

  {
    id: "vermeer-eser1",
    tip: "eser",
    sanatci: "vermeer",
    eserSirasi: 1,
    dosya: "images/vermeer-eser1-inci-kupeli-kiz.png"
  },

  {
    id: "vermeer-eser2",
    tip: "eser",
    sanatci: "vermeer",
    eserSirasi: 2,
    dosya: "images/vermeer-eser2-sut-doken-kadin.png"
  },

  {
    id: "vermeer-eser3",
    tip: "eser",
    sanatci: "vermeer",
    eserSirasi: 3,
    dosya: "images/vermeer-eser3-resim-sanati.png"
  }
];


/* =========================
   20 ÖZEL KART
========================= */

const ozelKartlar = [
  { id: "acik-artirma", tip: "ozel", dosya: "images/acik-artirma.png" },
  { id: "arkeolojik-kazi", tip: "ozel", dosya: "images/arkeolojik-kazi.png" },
  { id: "arti-iki-kart", tip: "ozel", dosya: "images/arti-iki-kart.png" },
  { id: "dedektif-sorusturmasi", tip: "ozel", dosya: "images/dedektif-sorusturmasi.png" },
  { id: "depo-kilidi", tip: "ozel", dosya: "images/depo-kilidi.png" },
  { id: "dunya-takimi", tip: "ozel", dosya: "images/dunya-takimi.png" },
  { id: "eser-calindi", tip: "ozel", dosya: "images/eser-calindi.png" },
  { id: "eser-sahteydi", tip: "ozel", dosya: "images/eser-sahteydi.png" },
  { id: "fransa-takimi", tip: "ozel", dosya: "images/fransa-takimi.png" },
  { id: "gece-nobeti", tip: "ozel", dosya: "images/gece-nobeti.png" },
  { id: "gizli-sandik", tip: "ozel", dosya: "images/gizli-sandik.png" },
  { id: "hollanda-takimi", tip: "ozel", dosya: "images/hollanda-takimi.png" },
  { id: "klasikler-takimi", tip: "ozel", dosya: "images/klasikler-takimi.png" },
  { id: "muze-guvenligi", tip: "ozel", dosya: "images/muze-guvenligi.png" },
  { id: "muze-muduru", tip: "ozel", dosya: "images/muze-muduru.png" },
  { id: "muzede-deprem", tip: "ozel", dosya: "images/muzede-deprem.png" },
  { id: "muzede-kaza", tip: "ozel", dosya: "images/muzede-kaza.png" },
  { id: "ozel-kart-takasi", tip: "ozel", dosya: "images/ozel-kart-takasi.png" },
  { id: "restorasyon", tip: "ozel", dosya: "images/restorasyon.png" },
  { id: "yeni-sergi", tip: "ozel", dosya: "images/yeni-sergi.png" }
];


/* =====================================================
   OYUN DURUMU
===================================================== */

let aktifOyuncu = 1;

let oyuncu1Secimleri = [];
let oyuncu2Secimleri = [];

let secimKilidi = false;

let onizlemeAcik = false;

let secilenOzelKartlar = [];
let artanOzelKartlar = [];

let ozelKartSecimKilidi = false;

let oyunHazir = false;


/* ORTAK DESTE */

let ortakDeste = [];

let ortakDesteHazir = false;


/* OYUN AŞAMASI */

let oyunAsamasi =
  "hazirlik";


/* BAŞLANGIÇ ZARI */

let oyuncu1ZarSonucu = null;
let oyuncu2ZarSonucu = null;

let zarSirasi = 1;
let zarAtisKilidi = false;


/* =====================================================
   KART ÇEKME / DEPO DURUMU
===================================================== */

let kartCekmeKilidi = false;

let oyuncu1DepoKartlari = [];
let oyuncu2DepoKartlari = [];

let bekleyenOzelKart = null;

let copDeste = [];

let oyuncu1OzelKartlari = [];
let oyuncu2OzelKartlari = [];

let ekstraKartCekmeSayisi = 0;


/* =========================
   SES
========================= */

const MUZIK_SESI = 0.22;
const BUTON_SESI = 0.65;

const anaMenuMuzik =
  new Audio("sounds/ana-menu-muzik.mp3");

const oyunMuzik =
  new Audio("sounds/oyun-muzik.mp3");

const butonTik =
  new Audio("sounds/buton-tik.mp3");

anaMenuMuzik.loop = true;
oyunMuzik.loop = true;

anaMenuMuzik.volume = 0;
oyunMuzik.volume = 0;

butonTik.volume = BUTON_SESI;

anaMenuMuzik.preload = "auto";
oyunMuzik.preload = "auto";
butonTik.preload = "auto";
/* =====================================================
   AÇILIŞ PRELOAD DOSYALARI
===================================================== */

const yuklenecekGorseller = [

  "images/eu-games-logo.png",
  "images/devam-etmek-icin-dokun.png",

  "images/ana-menu-arkaplan.png",
  "images/muze-koleksiyonu-logo.png",
  "images/basla.png",
  "images/nasil-oynanir.png",

  "images/oyun-arkaplan.png",

  "images/sanatci-1.png",
  "images/sanatci-2.png",
  "images/sanatci-3.png",

  "images/eser-bir.png",
  "images/eser-iki.png",
  "images/eser-uc.png",

  "images/artan-ozel-yuva.png",
  "images/artan-sanatci-yuva.png",

  "images/cop-yuva.png",
  "images/ortak-deste-yuva.png",

  "images/ozel-kart-secim.png",

  "images/kart-arkasi.png",

  ...sanatcilar.map(
    (sanatci) =>
      sanatci.dosya
  ),

  ...eserKartlari.map(
    (kart) =>
      kart.dosya
  ),

  ...ozelKartlar.map(
    (kart) =>
      kart.dosya
  )
];


const benzersizGorseller =
  [...new Set(yuklenecekGorseller)];


/* =========================
   BUTON SESİ
========================= */

function butonSesiCal() {

  butonTik.currentTime = 0;

  butonTik
    .play()
    .catch((hata) => {

      console.log(
        "Buton sesi çalınamadı:",
        hata
      );

    });
}


/* =========================
   TEK GÖRSELİ PRELOAD ET
========================= */

function gorselYukle(
  dosya
) {

  return new Promise(
    (resolve) => {

      const resim =
        new Image();

      let tamamlandi =
        false;


      function bitir() {

        if (tamamlandi) {
          return;
        }

        tamamlandi = true;

        resolve();
      }


      resim.onload =
        bitir;


      resim.onerror =
        () => {

          console.warn(
            "Görsel yüklenemedi:",
            dosya
          );

          bitir();
        };


      resim.src =
        dosya;


      if (
        resim.complete
      ) {

        bitir();

      }

    }
  );
}


/* =========================
   TEK SESİ PRELOAD ET
========================= */

function sesYukle(
  ses,
  isim
) {

  return new Promise(
    (resolve) => {

      let tamamlandi =
        false;


      function bitir() {

        if (tamamlandi) {
          return;
        }

        tamamlandi = true;

        ses.removeEventListener(
          "canplaythrough",
          bitir
        );

        ses.removeEventListener(
          "canplay",
          bitir
        );

        resolve();
      }


      if (
        ses.readyState >= 3
      ) {

        bitir();

        return;
      }


      ses.addEventListener(
        "canplaythrough",
        bitir,
        {
          once: true
        }
      );


      ses.addEventListener(
        "canplay",
        bitir,
        {
          once: true
        }
      );


      ses.addEventListener(
        "error",
        () => {

          console.warn(
            "Ses yüklenemedi:",
            isim
          );

          bitir();

        },
        {
          once: true
        }
      );


      ses.load();


      setTimeout(
        () => {

          bitir();

        },
        10000
      );

    }
  );
}


/* =========================
   WINDOW LOAD BEKLE
========================= */

function tarayiciTamYuklendiMi() {

  if (
    document.readyState ===
    "complete"
  ) {

    return Promise.resolve();

  }


  return new Promise(
    (resolve) => {

      window.addEventListener(
        "load",
        resolve,
        {
          once: true
        }
      );

    }
  );
}


/* =========================
   OYUN DOSYALARINI PRELOAD ET
========================= */

async function oyunuOncedenYukle() {

  oyunHazir = false;

  devamButonu
    .classList
    .remove("hazir");

  yuklemeYuzdesi.textContent =
    "0%";


  const sesler = [

    {
      ses: anaMenuMuzik,
      isim: "ana-menu-muzik.mp3"
    },

    {
      ses: oyunMuzik,
      isim: "oyun-muzik.mp3"
    },

    {
      ses: butonTik,
      isim: "buton-tik.mp3"
    }

  ];


  const toplamDosya =
    benzersizGorseller.length +
    sesler.length;


  let yuklenenDosya = 0;


  function ilerlemeGuncelle() {

    yuklenenDosya++;


    const yuzde =
      Math.min(
        99,
        Math.floor(
          (
            yuklenenDosya /
            toplamDosya
          ) *
          100
        )
      );


    yuklemeYuzdesi.textContent =
      `${yuzde}%`;
  }


  const gorselIsleri =
    benzersizGorseller.map(
      async (dosya) => {

        await gorselYukle(
          dosya
        );

        ilerlemeGuncelle();

      }
    );


  const sesIsleri =
    sesler.map(
      async (sesBilgisi) => {

        await sesYukle(
          sesBilgisi.ses,
          sesBilgisi.isim
        );

        ilerlemeGuncelle();

      }
    );


  await Promise.all(
    [
      ...gorselIsleri,
      ...sesIsleri
    ]
  );


  await tarayiciTamYuklendiMi();


  yuklemeYuzdesi.textContent =
    "100%";


  oyunHazir = true;


  setTimeout(
    () => {

      yuklemeYuzdesi.style.opacity =
        "0";


      setTimeout(
        () => {

          yuklemeYuzdesi.style.visibility =
            "hidden";


          devamButonu
            .classList
            .add(
              "hazir"
            );

        },
        300
      );

    },
    450
  );
}


/* =========================
   RANDOM KARIŞTIRMA
========================= */

function karistir(dizi) {

  const yeniDizi =
    [...dizi];


  for (
    let i =
      yeniDizi.length - 1;

    i > 0;

    i--
  ) {

    const j =
      Math.floor(
        Math.random() *
        (i + 1)
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
        (
          zaman -
          baslangicZamani
        ) / sure,
        1
      );


    muzik.volume =
      baslangicSes +
      (
        hedefSes -
        baslangicSes
      ) *
      ilerleme;


    if (
      ilerleme < 1
    ) {

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


  return new Promise(
    (resolve) => {

      function animasyon(zaman) {

        const ilerleme =
          Math.min(
            (
              zaman -
              baslangicZamani
            ) / sure,
            1
          );


        muzik.volume =
          baslangicSes *
          (1 - ilerleme);


        if (
          ilerleme < 1
        ) {

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

    }
  );
}


/* =====================================================
   SEÇİM YAZISI
===================================================== */

function secimYazisiniOlustur() {

  let yazi =
    document.getElementById(
      "secimYazisi"
    );


  if (!yazi) {

    yazi =
      document.createElement(
        "div"
      );

    yazi.id =
      "secimYazisi";


    oynanisEkrani
      .appendChild(
        yazi
      );

  }


  return yazi;
}


function secimYazisiGoster(
  metin
) {

  const yazi =
    secimYazisiniOlustur();


  yazi.textContent =
    metin;


  gsap.killTweensOf(
    yazi
  );


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

      ease:
        "back.out(1.7)"
    }
  );
}


function secimYazisiniGizle() {

  const yazi =
    document.getElementById(
      "secimYazisi"
    );


  if (!yazi) {
    return;
  }


  gsap.to(
    yazi,
    {
      opacity: 0,
      duration: 0.3
    }
  );
}


/* =====================================================
   GSAP DESTE SHUFFLE
===================================================== */

function gsapDesteKaristir(
  desteKartlari
) {

  return new Promise(
    (resolve) => {

      const solDeste =
        desteKartlari.slice(
          0,
          6
        );


      const sagDeste =
        desteKartlari.slice(
          6,
          12
        );


      desteKartlari.forEach(
        (kart, index) => {

          gsap.set(
            kart,
            {
              x: index * 1.2,
              y: index * -0.35,
              rotation: 0,
              scale: 1,
              transformOrigin: "50% 100%",
              zIndex: index
            }
          );

        }
      );


      const tl =
        gsap.timeline(
          {
            defaults:
              {
                ease:
                  "power2.inOut"
              },

            onComplete:
              resolve
          }
        );


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
          x:
            (index) =>
              -145 +
              index * 2,

          y:
            (index) =>
              -10 -
              index * 0.5,

          rotation: -5,
          duration: 0.45,
          stagger: 0.025
        }
      );


      tl.to(
        sagDeste,
        {
          x:
            (index) =>
              145 +
              index * 2,

          y:
            (index) =>
              -10 -
              index * 0.5,

          rotation: 5,
          duration: 0.45,
          stagger: 0.025
        },
        "<"
      );


      for (
        let i = 0;
        i < 6;
        i++
      ) {

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
          (
            i *
            0.055
          )
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
          (
            i *
            0.055 +
            0.028
          )
        );

      }


      tl.to(
        desteKartlari,
        {
          x:
            (index) =>
              index *
              0.9,

          y:
            (index) =>
              index *
              -0.28,

          rotation: 0,
          scaleY: 1,
          duration: 0.4,
          stagger: 0.012,
          ease: "back.out(1.25)"
        },
        ">"
      );

    }
  );
}


/* =====================================================
   SANATÇI KARTLARINI KARIŞTIR
===================================================== */

async function sanatciKartlariniKaristir() {

  oyunAsamasi =
    "sanatci-secimi";

  aktifOyuncu = 1;

  oyuncu1Secimleri = [];
  oyuncu2Secimleri = [];

  secimKilidi = false;


  document
    .querySelectorAll(
      ".artanSanatciKarti"
    )
    .forEach(
      (kart) =>
        kart.remove()
    );


  const karisikSanatcilar =
    karistir(
      sanatcilar
    );


  window.karisikSanatcilar =
    karisikSanatcilar;


  karistirmaDestesi.innerHTML =
    "";

  kapaliKartSirasi.innerHTML =
    "";


  kapaliKartSirasi
    .classList
    .remove(
      "goster"
    );


  karisikSanatcilar.forEach(
    (sanatci, index) => {

      const kart =
        document.createElement(
          "img"
        );


      kart.src =
        "images/kart-arkasi.png";

      kart.className =
        "karistirmaKarti";

      kart.dataset.sanatci =
        sanatci.id;

      kart.style.zIndex =
        index;


      karistirmaDestesi
        .appendChild(
          kart
        );

    }
  );


  const desteKartlari =
    Array.from(
      karistirmaDestesi
        .querySelectorAll(
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
   12 SANATÇI KARTINI DİZ
========================= */

function onIkiKartiDiz(
  karisikSanatcilar
) {

  kapaliKartSirasi.innerHTML =
    "";


  karisikSanatcilar.forEach(
    (sanatci, index) => {

      const slot =
        document.createElement(
          "div"
        );


      slot.className =
        "kapaliKartSlotu";


      const kart =
        document.createElement(
          "img"
        );


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


      slot.appendChild(
        kart
      );


      kapaliKartSirasi
        .appendChild(
          slot
        );

    }
  );


  requestAnimationFrame(
    () => {

      kapaliKartSirasi
        .classList
        .add(
          "goster"
        );

    }
  );


  setTimeout(
    () => {

      secimYazisiGoster(
        "1. OYUNCU — 3 SANATÇI SEÇ"
      );

    },
    500
  );
}


/* =========================
   SANATÇI KARTINI SEÇ
========================= */

function sanatciKartiSec(
  kart,
  sanatci
) {

  if (secimKilidi) {
    return;
  }


  if (
    kart.dataset.secildi ===
    "evet"
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

      onComplete:
        () => {

          kart.src =
            sanatci.dosya;


          gsap.to(
            kart,
            {
              scaleX: 1,
              duration: 0.22,
              ease: "back.out(1.5)",

              onComplete:
                () => {

                  setTimeout(
                    () => {

                      kartiYuvayaGonder(
                        kart,
                        sanatci
                      );

                    },
                    300
                  );

                }
            }
          );

        }
    }
  );
}


/* =========================
   SANATÇI KARTINI YUVAYA GÖNDER
========================= */

function kartiYuvayaGonder(
  kart,
  sanatci
) {

  let hedefYuva;
  let hedefIndex;


  if (
    aktifOyuncu === 1
  ) {

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


  const ucanKart =
    document.createElement(
      "img"
    );


  ucanKart.src =
    sanatci.dosya;


  ucanKart.className =
    "ucanSanatciKarti";


  Object.assign(
    ucanKart.style,
    {
      position: "fixed",
      left: kartRect.left + "px",
      top: kartRect.top + "px",
      width: kartRect.width + "px",
      height: kartRect.height + "px",
      zIndex: 9999,

      /* UÇAN KART TIKLAMAYI ENGELLEMESİN */
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
      left: yuvaRect.left,
      top: yuvaRect.top,
      width: yuvaRect.width,
      height: yuvaRect.height,
      rotation: 0,
      opacity: 1,
      duration: 0.65,
      ease: "power3.inOut",

      onComplete:
        () => {

          const sahneRect =
            oynanisEkrani
              .getBoundingClientRect();


          const yerlesenKart =
            document.createElement(
              "img"
            );


          yerlesenKart.src =
            sanatci.dosya;


          yerlesenKart.className =
            "yerlesenSanatciKarti";


          Object.assign(
            yerlesenKart.style,
            {
              position: "absolute",

              left:
                (
                  yuvaRect.left -
                  sahneRect.left
                ) +
                "px",

              top:
                (
                  yuvaRect.top -
                  sahneRect.top
                ) +
                "px",

              width:
                yuvaRect.width +
                "px",

              height:
                yuvaRect.height +
                "px",

              zIndex: 5,
              opacity: "1",

              /*
                YERLEŞMİŞ SANATÇI KARTI
                ÖNİZLEME İÇİN TIKLANABİLİR.
              */
              pointerEvents: "auto",

              cursor: "pointer",
              objectFit: "fill",
              userSelect: "none",
              WebkitUserDrag: "none"
            }
          );


          yerlesenKart
            .addEventListener(
              "click",
              (event) => {

                event.stopPropagation();


                kartOnizlemeAc(
                  yerlesenKart
                );

              }
            );


          oynanisEkrani
            .appendChild(
              yerlesenKart
            );


          ucanKart.remove();


          /*
            ÖNEMLİ:
            SADECE KART SİLİNİYOR.

            SLOT SİLİNMİYOR.
            BÖYLECE 12 KARTLIK BAŞLANGIÇ
            DİZİLİMİNDEKİ BOŞLUK KORUNUYOR
            VE DİĞER KARTLAR KAYMIYOR.
          */

          const slot =
            kart.parentElement;


          kart.remove();


          if (slot) {

            slot.classList.add(
              "bos"
            );

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


/* =====================================================
   KALAN 6 SANATÇIYI ARTAN YUVAYA GÖNDER
===================================================== */

function kalanSanatcilariArtanYuvayaGonder() {

  return new Promise(
    (resolve) => {

      const kalanKartlar =
        Array.from(
          document.querySelectorAll(
            ".kapaliSanatciKarti"
          )
        );


      if (
        kalanKartlar.length === 0 ||
        !artanSanatciYuvasi
      ) {

        resolve();

        return;

      }


      const sahneRect =
        oynanisEkrani
          .getBoundingClientRect();


      const yuvaRect =
        artanSanatciYuvasi
          .getBoundingClientRect();


      const yuvaLeft =
        yuvaRect.left -
        sahneRect.left;


      const yuvaTop =
        yuvaRect.top -
        sahneRect.top;


      let tamamlananKartSayisi =
        0;


      kalanKartlar.forEach(
        (kart, index) => {

          const kartRect =
            kart
              .getBoundingClientRect();


          const kartLeft =
            kartRect.left -
            sahneRect.left;


          const kartTop =
            kartRect.top -
            sahneRect.top;


          const ucanKart =
            document.createElement(
              "img"
            );


          ucanKart.src =
            "images/kart-arkasi.png";


          ucanKart.className =
            "artanSanatciUcanKart";


          Object.assign(
            ucanKart.style,
            {
              position: "absolute",
              left: kartLeft + "px",
              top: kartTop + "px",
              width: kartRect.width + "px",
              height: kartRect.height + "px",
              zIndex: 9000 + index,

              /* SADECE ANİMASYON GÖRSELİ */
              pointerEvents: "none",

              userSelect: "none",
              WebkitUserDrag: "none",
              objectFit: "fill"
            }
          );


          oynanisEkrani
            .appendChild(
              ucanKart
            );


          kart.style.visibility =
            "hidden";


          const desteKaymaX =
            index * 0.8;


          const desteKaymaY =
            index * -0.6;


          gsap.to(
            ucanKart,
            {
              left:
                yuvaLeft +
                desteKaymaX,

              top:
                yuvaTop +
                desteKaymaY,

              width:
                yuvaRect.width,

              height:
                yuvaRect.height,

              rotation:
                (
                  index -
                  2.5
                ) *
                0.35,

              duration: 0.7,
              delay: index * 0.10,
              ease: "power3.inOut",

              onComplete:
                () => {

                  const artanKart =
                    document.createElement(
                      "img"
                    );


                  artanKart.src =
                    "images/kart-arkasi.png";


                  artanKart.className =
                    "artanSanatciKarti";


                  Object.assign(
                    artanKart.style,
                    {
                      position: "absolute",

                      left:
                        (
                          yuvaLeft +
                          desteKaymaX
                        ) +
                        "px",

                      top:
                        (
                          yuvaTop +
                          desteKaymaY
                        ) +
                        "px",

                      width:
                        yuvaRect.width +
                        "px",

                      height:
                        yuvaRect.height +
                        "px",

                      zIndex: 20 + index,

                      /*
                        ARTAN SANATÇI DESTESİ
                        OYUN TIKLAMALARINI ENGELLEMESİN.
                      */
                      pointerEvents: "none",

                      userSelect: "none",
                      WebkitUserDrag: "none",
                      objectFit: "fill",

                      transform:
                        `rotate(${(
                          index -
                          2.5
                        ) * 0.35}deg)`
                    }
                  );


                  oynanisEkrani
                    .appendChild(
                      artanKart
                    );


                  ucanKart.remove();


                  tamamlananKartSayisi++;


                  if (
                    tamamlananKartSayisi ===
                    kalanKartlar.length
                  ) {

                    kapaliKartSirasi.innerHTML =
                      "";


                    kapaliKartSirasi
                      .classList
                      .remove(
                        "goster"
                      );


                    resolve();

                  }

                }
            }
          );

        }
      );

    }
  );
}
/* =====================================================
   ÖZEL KART SEÇİMİNİ BAŞLAT
===================================================== */

function ozelKartSeciminiBaslat() {

  oyunAsamasi =
    "ozel-kart-secimi";


  secilenOzelKartlar = [];

  artanOzelKartlar = [];

  ozelKartSecimKilidi =
    false;


  window.secilenOzelKartlar =
    secilenOzelKartlar;


  window.artanOzelKartlar =
    artanOzelKartlar;


  document
    .querySelectorAll(
      ".artanOzelKarti"
    )
    .forEach(
      (kart) =>
        kart.remove()
    );


  dedektifSecimAlani.innerHTML =
    "";


  ozelKartSecimSirasi.innerHTML =
    "";


  ozelKartSayac.textContent =
    "SEÇİLEN ÖZEL KART: 0 / 12";


  ozelKartSecimAlani
    .classList
    .add(
      "aktif"
    );


  const dedektif =
    ozelKartlar.find(
      (kart) =>
        kart.id ===
        "dedektif-sorusturmasi"
    );


  const kart =
    document.createElement(
      "img"
    );


  kart.id =
    "dedektifZorunluKart";


  kart.src =
    dedektif.dosya;


  kart.alt =
    "Dedektif Soruşturması";


  dedektifSecimAlani
    .appendChild(
      kart
    );


  gsap.fromTo(
    kart,
    {
      opacity: 0,
      scale: 0.75,
      y: 30
    },
    {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 0.5,
      ease: "back.out(1.5)"
    }
  );


  kart.addEventListener(
    "click",
    () => {

      dedektifKartiniSec(
        kart,
        dedektif
      );

    }
  );
}


/* =========================
   DEDEKTİF ZORUNLU SEÇİM
========================= */

function dedektifKartiniSec(
  kart,
  dedektif
) {

  if (
    ozelKartSecimKilidi
  ) {
    return;
  }


  ozelKartSecimKilidi =
    true;


  butonSesiCal();


  secilenOzelKartlar.push(
    dedektif
  );


  window.secilenOzelKartlar =
    secilenOzelKartlar;


  ozelKartSayac.textContent =
    "SEÇİLEN ÖZEL KART: 1 / 12";


  gsap.to(
    kart,
    {
      scale: 0.75,
      opacity: 0,
      y: -25,
      duration: 0.35,
      ease: "power2.in",

      onComplete:
        () => {

          kart.remove();


          digerOzelKartlariDiz();


          ozelKartSecimKilidi =
            false;

        }
    }
  );
}


/* =========================
   KALAN 19 ÖZEL KARTI DİZ
========================= */

function digerOzelKartlariDiz() {

  ozelKartSecimSirasi.innerHTML =
    "";


  const digerKartlar =
    karistir(
      ozelKartlar.filter(
        (kart) =>
          kart.id !==
          "dedektif-sorusturmasi"
      )
    );


  digerKartlar.forEach(
    (ozelKart, index) => {

      const slot =
        document.createElement(
          "div"
        );


      slot.className =
        "ozelKartSlotu";


      const kart =
        document.createElement(
          "img"
        );


      kart.src =
        "images/kart-arkasi.png";


      kart.className =
        "kapaliOzelKart";


      kart.dataset.id =
        ozelKart.id;


      kart.dataset.dosya =
        ozelKart.dosya;


      kart.dataset.secildi =
        "hayir";


      kart.dataset.sira =
        index;


      kart.addEventListener(
        "click",
        () => {

          kapaliOzelKartSec(
            kart,
            ozelKart
          );

        }
      );


      slot.appendChild(
        kart
      );


      ozelKartSecimSirasi
        .appendChild(
          slot
        );

    }
  );


  gsap.fromTo(
    ".kapaliOzelKart",
    {
      opacity: 0,
      y: 30,
      scale: 0.9
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.4,
      stagger: 0.035,
      ease: "power2.out"
    }
  );
}


/* =========================
   KAPALI ÖZEL KART SEÇ
========================= */

function kapaliOzelKartSec(
  kart,
  ozelKart
) {

  if (
    ozelKartSecimKilidi
  ) {
    return;
  }


  if (
    kart.dataset.secildi ===
    "evet"
  ) {
    return;
  }


  if (
    secilenOzelKartlar.length >=
    12
  ) {
    return;
  }


  kart.dataset.secildi =
    "evet";


  butonSesiCal();


  secilenOzelKartlar.push(
    ozelKart
  );


  window.secilenOzelKartlar =
    secilenOzelKartlar;


  ozelKartSayac.textContent =
    `SEÇİLEN ÖZEL KART: ${secilenOzelKartlar.length} / 12`;


  gsap.to(
    kart,
    {
      opacity: 0,
      scale: 0.72,
      y: -15,
      duration: 0.25,
      ease: "power2.in",

      onComplete:
        () => {

          kart.remove();

        }
    }
  );


  if (
    secilenOzelKartlar.length ===
    12
  ) {

    ozelKartSecimKilidi =
      true;


    setTimeout(
      () => {

        artanOzelKartlariYuvayaGonder();

      },
      450
    );

  }
}


/* =====================================================
   KALAN ÖZEL KARTLARI ARTAN YUVAYA GÖNDER
===================================================== */

function artanOzelKartlariYuvayaGonder() {

  const kalanKartlar =
    Array.from(
      document.querySelectorAll(
        ".kapaliOzelKart"
      )
    );


  artanOzelKartlar =
    kalanKartlar.map(
      (kart) => (
        {
          id: kart.dataset.id,
          tip: "ozel",
          dosya: kart.dataset.dosya
        }
      )
    );


  window.artanOzelKartlar =
    artanOzelKartlar;


  if (
    kalanKartlar.length === 0 ||
    !artanOzelYuvasi
  ) {

    ozelKartSeciminiBitir();

    return;
  }


  const yuvaRect =
    artanOzelYuvasi
      .getBoundingClientRect();


  let tamamlanan = 0;


  kalanKartlar.forEach(
    (kart, index) => {

      const kartRect =
        kart
          .getBoundingClientRect();


      const ucanKart =
        document.createElement(
          "img"
        );


      ucanKart.src =
        "images/kart-arkasi.png";


      ucanKart.className =
        "artanOzelUcanKart";


      Object.assign(
        ucanKart.style,
        {
          position: "fixed",
          left: kartRect.left + "px",
          top: kartRect.top + "px",
          width: kartRect.width + "px",
          height: kartRect.height + "px",
          zIndex: 9100 + index,

          /* SADECE ANİMASYON GÖRSELİ */
          pointerEvents: "none"
        }
      );


      document.body.appendChild(
        ucanKart
      );


      kart.style.visibility =
        "hidden";


      const desteKaymaX =
        index * 0.7;


      const desteKaymaY =
        index * -0.55;


      gsap.to(
        ucanKart,
        {
          left:
            yuvaRect.left +
            desteKaymaX,

          top:
            yuvaRect.top +
            desteKaymaY,

          width:
            yuvaRect.width,

          height:
            yuvaRect.height,

          rotation:
            (
              index -
              3.5
            ) *
            0.28,

          duration: 0.72,

          delay:
            index *
            0.08,

          ease:
            "power3.inOut",

          onComplete:
            () => {

              const artanKart =
                document.createElement(
                  "img"
                );


              artanKart.src =
                "images/kart-arkasi.png";


              artanKart.className =
                "artanOzelKarti";


              Object.assign(
                artanKart.style,
                {
                  position: "fixed",

                  left:
                    (
                      yuvaRect.left +
                      desteKaymaX
                    ) +
                    "px",

                  top:
                    (
                      yuvaRect.top +
                      desteKaymaY
                    ) +
                    "px",

                  width:
                    yuvaRect.width +
                    "px",

                  height:
                    yuvaRect.height +
                    "px",

                  zIndex:
                    3 +
                    index,

                  objectFit:
                    "fill",

                  /*
                    ARTAN ÖZEL KART DESTESİ
                    TIKLAMALARI ENGELLEMESİN.
                  */
                  pointerEvents:
                    "none",

                  transform:
                    `rotate(${(
                      index -
                      3.5
                    ) * 0.28}deg)`
                }
              );


              document.body.appendChild(
                artanKart
              );


              ucanKart.remove();


              tamamlanan++;


              if (
                tamamlanan ===
                kalanKartlar.length
              ) {

                ozelKartSeciminiBitir();

              }

            }
        }
      );

    }
  );
}


/* =====================================================
   ÖZEL KART SEÇİMİNİ BİTİR
===================================================== */

function ozelKartSeciminiBitir() {

  ozelKartSecimSirasi.innerHTML =
    "";


  ozelKartSayac.textContent =
    "SEÇİLEN ÖZEL KART: 12 / 12";


  console.log(
    "Seçilen 12 özel kart:",
    secilenOzelKartlar
  );


  console.log(
    "Artan özel kartlar:",
    artanOzelKartlar
  );


  setTimeout(
    () => {

      ozelKartSecimAlani
        .classList
        .remove(
          "aktif"
        );


      setTimeout(
        () => {

          ortakDesteyiHazirla();

        },
        500
      );

    },
    800
  );
}


/* =====================================================
   48 KARTLIK ORTAK DESTEYİ HAZIRLA
===================================================== */

function ortakDesteyiHazirla() {

  oyunAsamasi =
    "ortak-deste-hazirlaniyor";


  ortakDesteHazir =
    false;


  document
    .querySelectorAll(
      ".ortakDesteGorselKarti"
    )
    .forEach(
      (kart) =>
        kart.remove()
    );


  const eserler =
    eserKartlari.map(
      (kart) => (
        {
          ...kart
        }
      )
    );


  const secilenOzeller =
    secilenOzelKartlar.map(
      (kart) => (
        {
          ...kart,
          tip: "ozel"
        }
      )
    );


  ortakDeste =
    karistir(
      [
        ...eserler,
        ...secilenOzeller
      ]
    );


  window.ortakDeste =
    ortakDeste;


  console.log(
    "ORTAK DESTE OLUŞTU:",
    ortakDeste
  );


  console.log(
    "ORTAK DESTE KART SAYISI:",
    ortakDeste.length
  );


  if (
    ortakDeste.length !==
    48
  ) {

    console.error(
      "ORTAK DESTE 48 KART OLMADI!",
      ortakDeste.length
    );

  }


  ortakDesteAnimasyonunuBaslat();
}


/* =====================================================
   ORTAK DESTE GÖRSELİNİ OLUŞTUR
===================================================== */

function ortakDesteAnimasyonunuBaslat() {

  if (
    !ortakDesteYuvasi
  ) {

    console.error(
      "Ortak deste yuvası bulunamadı."
    );

    return;
  }


  secimYazisiGoster(
    "ORTAK DESTE HAZIRLANIYOR"
  );


  const gorselKartSayisi =
    10;


  const yuvaRect =
    ortakDesteYuvasi
      .getBoundingClientRect();


  const merkezX =
    window.innerWidth / 2 -
    yuvaRect.width / 2;


  const merkezY =
    window.innerHeight / 2 -
    yuvaRect.height / 2;


  let tamamlanan =
    0;


  for (
    let i = 0;
    i < gorselKartSayisi;
    i++
  ) {

    const kart =
      document.createElement(
        "img"
      );


    kart.src =
      "images/kart-arkasi.png";


    kart.className =
      "ortakDesteGorselKarti";


    Object.assign(
      kart.style,
      {
        position: "fixed",

        left:
          (
            merkezX +
            i * 1.2
          ) +
          "px",

        top:
          (
            merkezY -
            i * 0.8
          ) +
          "px",

        width:
          yuvaRect.width +
          "px",

        height:
          yuvaRect.height +
          "px",

        zIndex:
          9300 +
          i,

        objectFit:
          "fill",

        /* HAZIRLANIRKEN TIKLANMASIN */
        pointerEvents:
          "none",

        userSelect:
          "none",

        WebkitUserDrag:
          "none",

        filter:
          "drop-shadow(0 7px 6px rgba(0,0,0,0.45))"
      }
    );


    document.body.appendChild(
      kart
    );


    gsap.fromTo(
      kart,
      {
        opacity: 0,
        scale: 0.75,

        rotation:
          -12 +
          Math.random() *
          24
      },
      {
        opacity: 1,
        scale: 1,

        rotation:
          (
            i -
            gorselKartSayisi / 2
          ) *
          0.3,

        duration: 0.35,

        delay:
          i *
          0.04,

        ease:
          "back.out(1.4)"
      }
    );

  }


  const kartlar =
    Array.from(
      document.querySelectorAll(
        ".ortakDesteGorselKarti"
      )
    );


  setTimeout(
    () => {

      kartlar.forEach(
        (kart, index) => {

          gsap.to(
            kart,
            {
              x:
                (
                  index %
                  2 ===
                  0
                )
                  ? -35
                  : 35,

              rotation:
                (
                  index %
                  2 ===
                  0
                )
                  ? -5
                  : 5,

              duration:
                0.28,

              delay:
                index *
                0.025,

              yoyo:
                true,

              repeat:
                1,

              ease:
                "power2.inOut"
            }
          );

        }
      );

    },
    500
  );


  setTimeout(
    () => {

      kartlar.forEach(
        (kart, index) => {

          gsap.to(
            kart,
            {
              left:
                yuvaRect.left +
                index *
                0.6,

              top:
                yuvaRect.top -
                index *
                0.45,

              width:
                yuvaRect.width,

              height:
                yuvaRect.height,

              x: 0,

              rotation:
                (
                  index -
                  4.5
                ) *
                0.18,

              duration:
                0.75,

              delay:
                index *
                0.035,

              ease:
                "power3.inOut",

              onComplete:
                () => {

                  tamamlanan++;


                  if (
                    tamamlanan ===
                    kartlar.length
                  ) {

                    ortakDesteHazir =
                      true;


                    oyunAsamasi =
                      "baslangic-zari";


                    secimYazisiniGizle();


                    console.log(
                      "48 kartlık ortak deste hazır."
                    );


                    setTimeout(
                      () => {

                        baslangicZarSisteminiBaslat();

                      },
                      500
                    );

                  }

                }
            }
          );

        }
      );

    },
    1200
  );
}
/* =====================================================
   ZAR STİLLERİNİ JS İÇİNDEN EKLE
===================================================== */

function zarStilleriniEkle() {

  if (
    document.getElementById(
      "zarSistemiStilleri"
    )
  ) {
    return;
  }


  const stil =
    document.createElement(
      "style"
    );


  stil.id =
    "zarSistemiStilleri";


  stil.textContent = `

    #baslangicZarKatmani {
      position: fixed;
      inset: 0;

      width: 100vw;
      height: 100vh;

      z-index: 50000;

      display: flex;
      align-items: center;
      justify-content: center;

      background: rgba(0, 0, 0, 0.60);

      backdrop-filter: blur(3px);
      -webkit-backdrop-filter: blur(3px);

      isolation: isolate;
    }


    #baslangicZarKutusu {
      position: relative;

      width: min(58%, 1050px);

      padding: 3.2% 4%;

      background:
        linear-gradient(
          180deg,
          rgba(244, 227, 187, 0.98),
          rgba(218, 188, 126, 0.98)
        );

      border: 4px solid #8a621e;

      border-radius: 24px;

      box-shadow:
        0 20px 60px
        rgba(0, 0, 0, 0.55);

      font-family:
        Georgia,
        "Times New Roman",
        serif;

      text-align: center;

      color: #5b3d11;

      z-index: 1;
    }


    #zarBaslik {
      font-size:
        clamp(
          22px,
          2.2vw,
          44px
        );

      font-weight: bold;

      margin-bottom: 3%;

      letter-spacing: 1px;
    }


    #zarAciklama {
      font-size:
        clamp(
          14px,
          1.25vw,
          24px
        );

      font-weight: bold;

      margin-bottom: 4%;
    }


    #zarOyuncular {
      display: flex;

      gap: 5%;

      justify-content: center;
      align-items: stretch;
    }


    .zarOyuncuPaneli {
      flex: 1;

      padding: 4%;

      background:
        rgba(255, 250, 235, 0.72);

      border:
        2px solid
        rgba(122, 90, 22, 0.55);

      border-radius: 18px;

      transition:
        transform 0.25s ease,
        opacity 0.25s ease,
        filter 0.25s ease;
    }


    .zarOyuncuPaneli.pasif {
      opacity: 0.50;

      filter:
        grayscale(0.35);
    }


    .zarOyuncuPaneli.aktif {
      transform:
        scale(1.04);

      box-shadow:
        0 8px 24px
        rgba(0, 0, 0, 0.20);
    }


    .zarOyuncuAdi {
      font-size:
        clamp(
          15px,
          1.35vw,
          26px
        );

      font-weight: bold;

      margin-bottom: 8%;
    }


    .zarGorseli {
      width:
        clamp(
          70px,
          8vw,
          145px
        );

      height:
        clamp(
          70px,
          8vw,
          145px
        );

      margin:
        0 auto 8%;

      display: flex;

      align-items: center;
      justify-content: center;

      background: #fff7dc;

      border:
        4px solid #9d742b;

      border-radius: 20%;

      box-shadow:
        0 8px 18px
        rgba(0, 0, 0, 0.30);

      font-size:
        clamp(
          55px,
          7vw,
          125px
        );

      line-height: 1;

      user-select: none;
    }


    .zarAtButonu {
      padding:
        12px 24px;

      border: none;

      border-radius: 12px;

      background:
        #6b4916;

      color: #fff4d4;

      font-family:
        Georgia,
        "Times New Roman",
        serif;

      font-size:
        clamp(
          13px,
          1vw,
          20px
        );

      font-weight: bold;

      cursor: pointer;

      touch-action:
        manipulation;

      -webkit-tap-highlight-color:
        transparent;

      user-select: none;

      transition:
        transform 0.12s ease,
        filter 0.12s ease,
        opacity 0.2s ease;
    }


    .zarAtButonu:active {
      transform:
        scale(0.94)
        translateY(3px);

      filter:
        brightness(0.82);
    }


    .zarAtButonu:disabled {
      opacity: 0.35;

      cursor: default;
    }


    .zarSonucMetni {
      min-height: 1.4em;

      margin-top: 6%;

      font-size:
        clamp(
          14px,
          1.1vw,
          22px
        );

      font-weight: bold;
    }


    #zarGenelSonuc {
      min-height: 1.5em;

      margin-top: 4%;

      font-size:
        clamp(
          17px,
          1.5vw,
          30px
        );

      font-weight: bold;
    }


    @media (max-aspect-ratio: 4 / 3) {

      #baslangicZarKutusu {
        width: 66%;
      }

    }

  `;


  document.head.appendChild(
    stil
  );
}


/* =====================================================
   BAŞLANGIÇ ZAR SİSTEMİNİ BAŞLAT
===================================================== */

function baslangicZarSisteminiBaslat() {

  oyunAsamasi =
    "baslangic-zari";


  oyuncu1ZarSonucu =
    null;

  oyuncu2ZarSonucu =
    null;

  zarSirasi =
    1;

  zarAtisKilidi =
    false;


  zarStilleriniEkle();


  const eskiKatman =
    document.getElementById(
      "baslangicZarKatmani"
    );


  if (eskiKatman) {
    eskiKatman.remove();
  }


  const katman =
    document.createElement(
      "div"
    );


  katman.id =
    "baslangicZarKatmani";


  katman.innerHTML = `

    <div id="baslangicZarKutusu">

      <div id="zarBaslik">
        BAŞLANGIÇ ZARI
      </div>

      <div id="zarAciklama">
        En yüksek zarı atan oyuncu oyuna başlayacak.
      </div>

      <div id="zarOyuncular">

        <div
          id="zarOyuncu1Panel"
          class="zarOyuncuPaneli aktif"
        >

          <div class="zarOyuncuAdi">
            1. OYUNCU
          </div>

          <div
            id="zarGorsel1"
            class="zarGorseli"
          >
            ⚀
          </div>

          <button
            id="zarAtButonu1"
            class="zarAtButonu"
          >
            ZAR AT
          </button>

          <div
            id="zarSonuc1"
            class="zarSonucMetni"
          ></div>

        </div>


        <div
          id="zarOyuncu2Panel"
          class="zarOyuncuPaneli pasif"
        >

          <div class="zarOyuncuAdi">
            2. OYUNCU
          </div>

          <div
            id="zarGorsel2"
            class="zarGorseli"
          >
            ⚀
          </div>

          <button
            id="zarAtButonu2"
            class="zarAtButonu"
            disabled
          >
            ZAR AT
          </button>

          <div
            id="zarSonuc2"
            class="zarSonucMetni"
          ></div>

        </div>

      </div>

      <div id="zarGenelSonuc"></div>

    </div>

  `;


  document.body.appendChild(
    katman
  );


  const buton1 =
    document.getElementById(
      "zarAtButonu1"
    );


  const buton2 =
    document.getElementById(
      "zarAtButonu2"
    );


  buton1.addEventListener(
    "click",
    () => {

      baslangicZariAt(
        1
      );

    }
  );


  buton2.addEventListener(
    "click",
    () => {

      baslangicZariAt(
        2
      );

    }
  );


  gsap.fromTo(
    katman,
    {
      opacity: 0
    },
    {
      opacity: 1,
      duration: 0.35
    }
  );


  gsap.fromTo(
    "#baslangicZarKutusu",
    {
      scale: 0.82,
      y: 35
    },
    {
      scale: 1,
      y: 0,
      duration: 0.5,
      ease: "back.out(1.5)"
    }
  );
}


/* =====================================================
   ZAR AT
===================================================== */

function baslangicZariAt(
  oyuncu
) {

  if (
    zarAtisKilidi
  ) {
    return;
  }


  if (
    oyuncu !==
    zarSirasi
  ) {
    return;
  }


  zarAtisKilidi =
    true;


  butonSesiCal();


  const zarGorseli =
    document.getElementById(
      `zarGorsel${oyuncu}`
    );


  const buton =
    document.getElementById(
      `zarAtButonu${oyuncu}`
    );


  const sonucMetni =
    document.getElementById(
      `zarSonuc${oyuncu}`
    );


  buton.disabled =
    true;


  sonucMetni.textContent =
    "Atılıyor...";


  const zarSembolleri = [
    "⚀",
    "⚁",
    "⚂",
    "⚃",
    "⚄",
    "⚅"
  ];


  let sayac = 0;


  const hizliDegisim =
    setInterval(
      () => {

        const rastgele =
          Math.floor(
            Math.random() *
            6
          );


        zarGorseli.textContent =
          zarSembolleri[
            rastgele
          ];


        sayac++;


        gsap.fromTo(
          zarGorseli,
          {
            rotation: -18,
            scale: 0.90,
            y: -6
          },
          {
            rotation: 18,
            scale: 1.06,
            y: 0,

            duration: 0.10,

            ease:
              "power1.inOut"
          }
        );


        if (
          sayac >=
          14
        ) {

          clearInterval(
            hizliDegisim
          );


          zarAtisiniBitir(
            oyuncu,
            zarGorseli,
            sonucMetni,
            zarSembolleri
          );

        }

      },
      80
    );
}


/* =====================================================
   ZAR ATIŞINI BİTİR
===================================================== */

function zarAtisiniBitir(
  oyuncu,
  zarGorseli,
  sonucMetni,
  zarSembolleri
) {

  const sonuc =
    Math.floor(
      Math.random() *
      6
    ) +
    1;


  zarGorseli.textContent =
    zarSembolleri[
      sonuc - 1
    ];


  sonucMetni.textContent =
    `${sonuc} GELDİ`;


  gsap.fromTo(
    zarGorseli,
    {
      scale: 1.35,
      rotation: -25,
      y: -25
    },
    {
      scale: 1,
      rotation: 0,
      y: 0,

      duration: 0.55,

      ease:
        "bounce.out"
    }
  );


  if (
    oyuncu === 1
  ) {

    oyuncu1ZarSonucu =
      sonuc;


    zarSirasi =
      2;


    const panel1 =
      document.getElementById(
        "zarOyuncu1Panel"
      );


    const panel2 =
      document.getElementById(
        "zarOyuncu2Panel"
      );


    panel1
      .classList
      .remove(
        "aktif"
      );


    panel1
      .classList
      .add(
        "pasif"
      );


    panel2
      .classList
      .remove(
        "pasif"
      );


    panel2
      .classList
      .add(
        "aktif"
      );


    const buton2 =
      document.getElementById(
        "zarAtButonu2"
      );


    buton2.disabled =
      false;


    zarAtisKilidi =
      false;


    return;
  }


  oyuncu2ZarSonucu =
    sonuc;


  zarAtisKilidi =
    false;


  baslangicZarlariniKarsilastir();
}


/* =====================================================
   ZAR SONUÇLARINI KARŞILAŞTIR
===================================================== */

function baslangicZarlariniKarsilastir() {

  const sonucYazisi =
    document.getElementById(
      "zarGenelSonuc"
    );


  if (
    oyuncu1ZarSonucu ===
    oyuncu2ZarSonucu
  ) {

    sonucYazisi.textContent =
      `EŞİTLİK! ${oyuncu1ZarSonucu} - ${oyuncu2ZarSonucu} — TEKRAR ATILIYOR`;


    setTimeout(
      () => {

        baslangicZarlariniSifirla();

      },
      1400
    );


    return;
  }


  aktifOyuncu =
    oyuncu1ZarSonucu >
    oyuncu2ZarSonucu
      ? 1
      : 2;


  sonucYazisi.textContent =
    `${aktifOyuncu}. OYUNCU BAŞLIYOR!`;


  oyunAsamasi =
    "kart-cekme";


  console.log(
    "İlk başlayan oyuncu:",
    aktifOyuncu
  );


  setTimeout(
    () => {

      baslangicZarEkraniniKapat();

    },
    1500
  );
}


/* =====================================================
   EŞİTLİKTE ZARLARI SIFIRLA
===================================================== */

function baslangicZarlariniSifirla() {

  oyuncu1ZarSonucu =
    null;

  oyuncu2ZarSonucu =
    null;

  zarSirasi =
    1;

  zarAtisKilidi =
    false;


  const zar1 =
    document.getElementById(
      "zarGorsel1"
    );


  const zar2 =
    document.getElementById(
      "zarGorsel2"
    );


  const sonuc1 =
    document.getElementById(
      "zarSonuc1"
    );


  const sonuc2 =
    document.getElementById(
      "zarSonuc2"
    );


  const genel =
    document.getElementById(
      "zarGenelSonuc"
    );


  const buton1 =
    document.getElementById(
      "zarAtButonu1"
    );


  const buton2 =
    document.getElementById(
      "zarAtButonu2"
    );


  const panel1 =
    document.getElementById(
      "zarOyuncu1Panel"
    );


  const panel2 =
    document.getElementById(
      "zarOyuncu2Panel"
    );


  zar1.textContent =
    "⚀";


  zar2.textContent =
    "⚀";


  sonuc1.textContent =
    "";


  sonuc2.textContent =
    "";


  genel.textContent =
    "";


  buton1.disabled =
    false;


  buton2.disabled =
    true;


  panel1
    .classList
    .remove(
      "pasif"
    );


  panel1
    .classList
    .add(
      "aktif"
    );


  panel2
    .classList
    .remove(
      "aktif"
    );


  panel2
    .classList
    .add(
      "pasif"
    );
}


/* =====================================================
   BAŞLANGIÇ ZAR EKRANINI KAPAT
===================================================== */

function baslangicZarEkraniniKapat() {

  const katman =
    document.getElementById(
      "baslangicZarKatmani"
    );


  if (!katman) {

    kartCekmeAsamasiniBaslat();

    return;
  }


  gsap.to(
    katman,
    {
      opacity: 0,
      duration: 0.35,

      onComplete:
        () => {

          katman.remove();


          kartCekmeAsamasiniBaslat();

        }
    }
  );
}


/* =====================================================
   KART ÇEKME AŞAMASINA GEÇ
===================================================== */

function kartCekmeAsamasiniBaslat() {

  oyunAsamasi =
    "kart-cekme";


  kartCekmeKilidi =
    false;


  secimYazisiGoster(
    `${aktifOyuncu}. OYUNCU — ORTAK DESTEDEN KART ÇEK`
  );


  const desteGorselleri =
    Array.from(
      document.querySelectorAll(
        ".ortakDesteGorselKarti"
      )
    );


  desteGorselleri.forEach(
    (kart) => {

      kart.style.pointerEvents =
        "none";


      kart.style.cursor =
        "default";


      kart.onclick =
        null;

    }
  );


  const ustKart =
    desteGorselleri[
      desteGorselleri.length - 1
    ];


  if (
    !ustKart ||
    ortakDeste.length === 0
  ) {

    secimYazisiGoster(
      "ORTAK DESTE BİTTİ"
    );

    return;
  }


  ustKart.style.pointerEvents =
    "auto";


  ustKart.style.cursor =
    "pointer";


  ustKart.onclick =
    () => {

      ortakDestedenKartCek();

    };


  console.log(
    "Kart çekme aşaması başladı."
  );


  console.log(
    "Aktif oyuncu:",
    aktifOyuncu
  );


  console.log(
    "Ortak destede kalan kart:",
    ortakDeste.length
  );
}


/* =====================================================
   ORTAK DESTEDEN KART ÇEK
===================================================== */

function ortakDestedenKartCek() {

  if (
    oyunAsamasi !==
    "kart-cekme"
  ) {
    return;
  }


  if (
    kartCekmeKilidi
  ) {
    return;
  }


  if (
    ortakDeste.length === 0
  ) {

    secimYazisiGoster(
      "ORTAK DESTE BİTTİ"
    );

    return;
  }


  kartCekmeKilidi =
    true;


  butonSesiCal();


  document
    .querySelectorAll(
      ".ortakDesteGorselKarti"
    )
    .forEach(
      (kart) => {

        kart.style.pointerEvents =
          "none";

      }
    );


  const cekilenKart =
    ortakDeste.pop();


  window.ortakDeste =
    ortakDeste;


  console.log(
    "ÇEKİLEN KART:",
    cekilenKart
  );


  console.log(
    "DESTEKTE KALAN:",
    ortakDeste.length
  );


  cekilenKartiBuyukGoster(
    cekilenKart
  );
}


/* =====================================================
   ÇEKİLEN KARTI BÜYÜK GÖSTER
===================================================== */

function cekilenKartiBuyukGoster(
  kartBilgisi
) {

  const desteKartlari =
    Array.from(
      document.querySelectorAll(
        ".ortakDesteGorselKarti"
      )
    );


  const kaynakKart =
    desteKartlari[
      desteKartlari.length - 1
    ];


  const kaynakRect =
    kaynakKart

      ? kaynakKart
          .getBoundingClientRect()

      : ortakDesteYuvasi
          .getBoundingClientRect();


  const katman =
    document.createElement(
      "div"
    );


  katman.className =
    "cekilenKartKatmani";


  Object.assign(
    katman.style,
    {
      position:
        "fixed",

      inset:
        "0",

      width:
        "100vw",

      height:
        "100vh",

      background:
        "rgba(0, 0, 0, 0.68)",

      backdropFilter:
        "blur(2px)",

      WebkitBackdropFilter:
        "blur(2px)",

      zIndex:
        "60000",

      pointerEvents:
        "none"
    }
  );


  document.body.appendChild(
    katman
  );


  const kart =
    document.createElement(
      "img"
    );


  kart.className =
    "cekilenBuyukKart";


  kart.src =
    kartBilgisi.dosya;


  Object.assign(
    kart.style,
    {
      position:
        "fixed",

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

      objectFit:
        "fill",

      zIndex:
        "60001",

      pointerEvents:
        "none",

      userSelect:
        "none",

      WebkitUserDrag:
        "none",

      filter:
        "drop-shadow(0 25px 30px rgba(0,0,0,0.75))"
    }
  );


  document.body.appendChild(
    kart
  );


  const kartOrani =
    kaynakRect.width /
    kaynakRect.height;


  let hedefYukseklik =
    window.innerHeight *
    0.72;


  let hedefGenislik =
    hedefYukseklik *
    kartOrani;


  const maksimumGenislik =
    window.innerWidth *
    0.34;


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
    ) /
    2;


  const hedefTop =
    (
      window.innerHeight -
      hedefYukseklik
    ) /
    2;


  gsap.fromTo(
    katman,
    {
      opacity: 0
    },
    {
      opacity: 1,
      duration: 0.25
    }
  );


  gsap.to(
    kart,
    {
      left:
        hedefLeft,

      top:
        hedefTop,

      width:
        hedefGenislik,

      height:
        hedefYukseklik,

      rotation:
        0,

      duration:
        0.60,

      ease:
        "back.out(1.25)",

      onComplete:
        () => {

          setTimeout(
            () => {

              if (
                kartBilgisi.tip ===
                "eser"
              ) {

                cekilenEseriYonet(
                  kartBilgisi,
                  kart,
                  katman
                );

                return;
              }


              /*
                ÖZEL KARTSA
                PARÇA 5'TEKİ KARAR
                SİSTEMİNE GİDİYOR.
              */

              bekleyenOzelKart =
                kartBilgisi;


              secimYazisiGoster(
                "ÖZEL KART ÇEKİLDİ"
              );


              ozelKartKararlariniGoster(
                kartBilgisi,
                kart,
                katman
              );

            },
            850
          );

        }
    }
  );
}


/* =====================================================
   ÇEKİLEN ESERİ SINIFLANDIR
===================================================== */

function cekilenEseriYonet(
  kartBilgisi,
  kartElementi,
  katman
) {

  const kendiSanatcilari =
    aktifOyuncu === 1
      ? oyuncu1Secimleri
      : oyuncu2Secimleri;


  const rakipSanatcilari =
    aktifOyuncu === 1
      ? oyuncu2Secimleri
      : oyuncu1Secimleri;


  const kendiSanatciIndex =
    kendiSanatcilari
      .findIndex(
        (sanatci) =>
          sanatci.id ===
          kartBilgisi.sanatci
      );


  const rakipSanatciIndex =
    rakipSanatcilari
      .findIndex(
        (sanatci) =>
          sanatci.id ===
          kartBilgisi.sanatci
      );


  /* ===============================
     KENDİ SANATÇISININ ESERİ
  =============================== */

  if (
    kendiSanatciIndex !==
    -1
  ) {

    const sanatciSirasi =
      kendiSanatciIndex +
      1;


    const eserSirasi =
      kartBilgisi.eserSirasi;


    const hedefSelector =
      aktifOyuncu === 1

        ? `.altS${sanatciSirasi}E${eserSirasi}`

        : `.ustS${sanatciSirasi}E${eserSirasi}`;


    const hedefYuva =
      document.querySelector(
        hedefSelector
      );


    if (!hedefYuva) {

      console.error(
        "Eser yuvası bulunamadı:",
        hedefSelector
      );


      eseriCopeGonder(
        kartBilgisi,
        kartElementi,
        katman
      );


      return;
    }


    console.log(
      "KENDİ ESERİ →",
      hedefSelector
    );


    eseriKoleksiyonaGonder(
      kartBilgisi,
      kartElementi,
      katman,
      hedefYuva
    );


    return;
  }


  /* ===============================
     RAKİBİN SANATÇISININ ESERİ
  =============================== */

  if (
    rakipSanatciIndex !==
    -1
  ) {

    console.log(
      "RAKİBİN ESERİ → DEPO KONTROLÜ"
    );


    rakipEseriniDepoyaGonder(
      kartBilgisi,
      kartElementi,
      katman
    );


    return;
  }


  /* ===============================
     HİÇBİR OYUNCUDA YOK
  =============================== */

  console.log(
    "SEÇİLMEYEN SANATÇININ ESERİ → ÇÖP"
  );


  eseriCopeGonder(
    kartBilgisi,
    kartElementi,
    katman
  );
}


/* =====================================================
   KENDİ ESERİNİ DOĞRU YUVAYA GÖNDER
===================================================== */

function eseriKoleksiyonaGonder(
  kartBilgisi,
  kartElementi,
  katman,
  hedefYuva
) {

  const hedefRect =
    hedefYuva
      .getBoundingClientRect();


  gsap.to(
    katman,
    {
      opacity: 0,
      duration: 0.25
    }
  );


  gsap.to(
    kartElementi,
    {
      left:
        hedefRect.left,

      top:
        hedefRect.top,

      width:
        hedefRect.width,

      height:
        hedefRect.height,

      rotation:
        0,

      duration:
        0.70,

      ease:
        "power3.inOut",

      onComplete:
        () => {

          const sahneRect =
            oynanisEkrani
              .getBoundingClientRect();


          const yerlesenKart =
            document.createElement(
              "img"
            );


          yerlesenKart.src =
            kartBilgisi.dosya;


          yerlesenKart.className =
            "yerlesenEserKarti";


          yerlesenKart.dataset.id =
            kartBilgisi.id;


          yerlesenKart.dataset.sanatci =
            kartBilgisi.sanatci;


          yerlesenKart.dataset.eserSirasi =
            kartBilgisi.eserSirasi;


          yerlesenKart.dataset.gercekDosya =
            kartBilgisi.dosya;


          Object.assign(
            yerlesenKart.style,
            {
              position:
                "absolute",

              left:
                (
                  hedefRect.left -
                  sahneRect.left
                ) +
                "px",

              top:
                (
                  hedefRect.top -
                  sahneRect.top
                ) +
                "px",

              width:
                hedefRect.width +
                "px",

              height:
                hedefRect.height +
                "px",

              zIndex:
                "8",

              objectFit:
                "fill",

              cursor:
                "pointer",

              pointerEvents:
                "auto",

              userSelect:
                "none",

              WebkitUserDrag:
                "none",

              filter:
                "drop-shadow(0 6px 6px rgba(0,0,0,0.45))"
            }
          );


          yerlesenKart
            .addEventListener(
              "click",
              (event) => {

                event.stopPropagation();


                kartOnizlemeAc(
                  yerlesenKart,
                  kartBilgisi.dosya
                );

              }
            );


          oynanisEkrani
            .appendChild(
              yerlesenKart
            );


          kartElementi.remove();

          katman.remove();


          turuBitir();

        }
    }
  );
}


/* =====================================================
   RAKİP ESERİNİ DEPOYA GÖNDER
===================================================== */

function rakipEseriniDepoyaGonder(
  kartBilgisi,
  kartElementi,
  katman
) {

  const depoKartlari =
    aktifOyuncu === 1
      ? oyuncu1DepoKartlari
      : oyuncu2DepoKartlari;


  /*
    DEPO 2 KART DOLUYSA
    YENİ GELEN ESER ÇÖPE GİDER.
  */

  if (
    depoKartlari.length >=
    2
  ) {

    console.log(
      "DEPO DOLU → YENİ ESER ÇÖPE"
    );


    eseriCopeGonder(
      kartBilgisi,
      kartElementi,
      katman
    );


    return;
  }


  let hedefYuva;


  if (
    aktifOyuncu === 1
  ) {

    hedefYuva =
      depoKartlari.length === 0

        ? document.getElementById(
            "altDepoBir"
          )

        : document.getElementById(
            "altDepoIki"
          );

  } else {

    hedefYuva =
      depoKartlari.length === 0

        ? document.getElementById(
            "ustDepoBir"
          )

        : document.getElementById(
            "ustDepoIki"
          );

  }


  if (!hedefYuva) {

    eseriCopeGonder(
      kartBilgisi,
      kartElementi,
      katman
    );


    return;
  }


  depoKartlari.push(
    kartBilgisi
  );


  const hedefRect =
    hedefYuva
      .getBoundingClientRect();


  gsap.to(
    katman,
    {
      opacity: 0,
      duration: 0.25
    }
  );


  gsap.to(
    kartElementi,
    {
      left:
        hedefRect.left,

      top:
        hedefRect.top,

      width:
        hedefRect.width,

      height:
        hedefRect.height,

      rotation:
        0,

      duration:
        0.70,

      ease:
        "power3.inOut",

      onComplete:
        () => {

          const sahneRect =
            oynanisEkrani
              .getBoundingClientRect();


          const depoKarti =
            document.createElement(
              "img"
            );


          /*
            DEPO MASADA KAPALI GÖRÜNÜR.
            TIKLANINCA GERÇEK KART
            BÜYÜK ÖNİZLEMEDE AÇILIR.
          */

          depoKarti.src =
            "images/kart-arkasi.png";


          depoKarti.className =
            "depodakiEserKarti";


          depoKarti.dataset.id =
            kartBilgisi.id;


          depoKarti.dataset.gercekDosya =
            kartBilgisi.dosya;


          Object.assign(
            depoKarti.style,
            {
              position:
                "absolute",

              left:
                (
                  hedefRect.left -
                  sahneRect.left
                ) +
                "px",

              top:
                (
                  hedefRect.top -
                  sahneRect.top
                ) +
                "px",

              width:
                hedefRect.width +
                "px",

              height:
                hedefRect.height +
                "px",

              zIndex:
                "8",

              objectFit:
                "fill",

              /*
                ÖNEMLİ:
                DEPODAKİ KARTA TIKLAYABİLELİM.
              */
              pointerEvents:
                "auto",

              cursor:
                "pointer",

              touchAction:
                "manipulation",

              userSelect:
                "none",

              WebkitUserDrag:
                "none",

              filter:
                "drop-shadow(0 6px 6px rgba(0,0,0,0.45))"
            }
          );


          depoKarti.addEventListener(
            "click",
            (event) => {

              event.stopPropagation();


              kartOnizlemeAc(
                depoKarti,
                kartBilgisi.dosya
              );

            }
          );


          oynanisEkrani
            .appendChild(
              depoKarti
            );


          kartElementi.remove();

          katman.remove();


          turuBitir();

        }
    }
  );
}


/* =====================================================
   ESERİ ÇÖPE GÖNDER
===================================================== */

function eseriCopeGonder(
  kartBilgisi,
  kartElementi,
  katman
) {

  const copYuvasi =
    document.getElementById(
      "copYuvasi"
    );


  if (!copYuvasi) {

    kartElementi.remove();

    katman.remove();


    turuBitir();


    return;
  }


  const hedefRect =
    copYuvasi
      .getBoundingClientRect();


  const sahneRect =
    oynanisEkrani
      .getBoundingClientRect();


  /*
    ÇÖPLÜK GERÇEK SIRASI.

    İLK ATILAN ALTA,
    SON ATILAN EN ÜSTE.
  */

  copDeste.push(
    kartBilgisi
  );


  window.copDeste =
    copDeste;


  const copIndex =
    copDeste.length -
    1;


  const kaymaX =
    copIndex *
    0.45;


  const kaymaY =
    copIndex *
    -0.35;


  gsap.to(
    katman,
    {
      opacity: 0,
      duration: 0.25
    }
  );


  gsap.to(
    kartElementi,
    {
      left:
        hedefRect.left +
        kaymaX,

      top:
        hedefRect.top +
        kaymaY,

      width:
        hedefRect.width,

      height:
        hedefRect.height,

      rotation:
        (
          copIndex %
          5 -
          2
        ) *
        0.35,

      opacity:
        1,

      duration:
        0.65,

      ease:
        "power3.inOut",

      onComplete:
        () => {

          const copKarti =
            document.createElement(
              "img"
            );


          /*
            ÇÖPLÜKTE ÖN YÜZÜ AÇIK.
          */

          copKarti.src =
            kartBilgisi.dosya;


          copKarti.className =
            "coptekiKart";


          copKarti.dataset.id =
            kartBilgisi.id;


          copKarti.dataset.tip =
            kartBilgisi.tip;


          copKarti.dataset.gercekDosya =
            kartBilgisi.dosya;


          Object.assign(
            copKarti.style,
            {
              position:
                "absolute",

              left:
                (
                  hedefRect.left -
                  sahneRect.left +
                  kaymaX
                ) +
                "px",

              top:
                (
                  hedefRect.top -
                  sahneRect.top +
                  kaymaY
                ) +
                "px",

              width:
                hedefRect.width +
                "px",

              height:
                hedefRect.height +
                "px",

              /*
                SON ATILAN KART
                EN ÜSTTE OLUR.
              */
              zIndex:
                40 +
                copIndex,

              objectFit:
                "fill",

              pointerEvents:
                "auto",

              cursor:
                "pointer",

              touchAction:
                "manipulation",

              userSelect:
                "none",

              WebkitUserDrag:
                "none",

              transform:
                `rotate(${(
                  copIndex %
                  5 -
                  2
                ) * 0.35}deg)`,

              filter:
                "drop-shadow(0 5px 5px rgba(0,0,0,0.42))"
            }
          );


          copKarti.addEventListener(
            "click",
            (event) => {

              event.stopPropagation();


              kartOnizlemeAc(
                copKarti,
                kartBilgisi.dosya
              );

            }
          );


          oynanisEkrani
            .appendChild(
              copKarti
            );


          kartElementi.remove();

          katman.remove();


          console.log(
            "ÇÖPLÜK:",
            copDeste
          );


          turuBitir();

        }
    }
  );
}
/* =====================================================
   ÖZEL KART KARAR EKRANI
===================================================== */

function ozelKartKararlariniGoster(
  kartBilgisi,
  kartElementi,
  katman
) {

  const eskiButonlar =
    document.getElementById(
      "ozelKartKararButonlari"
    );


  if (eskiButonlar) {

    eskiButonlar.remove();

  }


  const kutu =
    document.createElement(
      "div"
    );


  kutu.id =
    "ozelKartKararButonlari";


  Object.assign(
    kutu.style,
    {
      position: "fixed",

      left: "50%",

      bottom: "5%",

      transform:
        "translateX(-50%)",

      display: "flex",

      gap: "14px",

      justifyContent:
        "center",

      alignItems:
        "center",

      flexWrap:
        "wrap",

      zIndex:
        "60010",

      pointerEvents:
        "auto"
    }
  );


  document.body.appendChild(
    kutu
  );


  function butonOlustur(
    metin
  ) {

    const buton =
      document.createElement(
        "button"
      );


    buton.textContent =
      metin;


    Object.assign(
      buton.style,
      {
        padding:
          "14px 24px",

        border:
          "2px solid #c7a15a",

        borderRadius:
          "12px",

        background:
          "#3a2512",

        color:
          "#f5e7c4",

        fontFamily:
          'Georgia, "Times New Roman", serif',

        fontSize:
          "clamp(13px, 1.05vw, 20px)",

        fontWeight:
          "bold",

        cursor:
          "pointer",

        touchAction:
          "manipulation",

        WebkitTapHighlightColor:
          "transparent",

        userSelect:
          "none",

        boxShadow:
          "0 6px 15px rgba(0,0,0,0.4)"
      }
    );


    kutu.appendChild(
      buton
    );


    return buton;
  }


  const kullanButonu =
    butonOlustur(
      "KULLAN"
    );


  const yuvayaKoyButonu =
    butonOlustur(
      "ÖZEL KART YUVANA KOY"
    );


  const copeAtButonu =
    butonOlustur(
      "ÇÖPE AT"
    );


  const oyuncuOzelKartlari =
    aktifOyuncu === 1
      ? oyuncu1OzelKartlari
      : oyuncu2OzelKartlari;


  /*
    ÖZEL KART ALANINDA
    EN FAZLA 2 KART TUTULABİLİR.
  */

  if (
    oyuncuOzelKartlari.length >=
    2
  ) {

    yuvayaKoyButonu.disabled =
      true;


    yuvayaKoyButonu.style.opacity =
      "0.35";


    yuvayaKoyButonu.style.cursor =
      "default";

  }


  kullanButonu.addEventListener(
    "click",
    () => {

      butonSesiCal();


      kutu.remove();


      ozelKartiKullan(
        kartBilgisi,
        kartElementi,
        katman
      );

    }
  );


  yuvayaKoyButonu.addEventListener(
    "click",
    () => {

      if (
        yuvayaKoyButonu.disabled
      ) {

        return;

      }


      butonSesiCal();


      kutu.remove();


      ozelKartiYuvayaGonder(
        kartBilgisi,
        kartElementi,
        katman
      );

    }
  );


  copeAtButonu.addEventListener(
    "click",
    () => {

      butonSesiCal();


      kutu.remove();


      ozelKartiCopeGonder(
        kartBilgisi,
        kartElementi,
        katman,
        true
      );

    }
  );
}


/* =====================================================
   ÖZEL KARTI KULLAN
===================================================== */

function ozelKartiKullan(
  kartBilgisi,
  kartElementi,
  katman
) {

  /*
    ŞİMDİLİK AKTİF OLARAK
    +2 KART ÇEK KODLANDI.

    DİĞER ÖZEL KARTLARI
    TEK TEK BURAYA EKLEYECEĞİZ.
  */


  if (
    kartBilgisi.id ===
    "arti-iki-kart"
  ) {

    /*
      += KULLANIYORUZ.

      İLERİDE +2 ETKİSİ ÜST ÜSTE
      GELİRSE KAYBOLMASIN.
    */

    ekstraKartCekmeSayisi +=
      2;


    secimYazisiGoster(
      `${aktifOyuncu}. OYUNCU — 2 EKSTRA KART ÇEK`
    );


    /*
      KULLANILAN +2 KARTI
      ÖN YÜZÜ AÇIK ÇÖPLÜĞE GİDER.

      FAKAT TUR BİTMEZ.
    */

    ozelKartiCopeGonder(
      kartBilgisi,
      kartElementi,
      katman,
      false,
      () => {

        kartCekmeKilidi =
          false;


        kartCekmeAsamasiniBaslat();

      }
    );


    return;
  }


  /*
    HENÜZ ETKİSİ YAZILMAYAN
    ÖZEL KARTLAR İÇİN ŞİMDİLİK:

    KULLAN'A BASILIRSA
    KART ÇÖPE GİDER VE TUR BİTER.

    SONRA BUNLARI TEK TEK
    GERÇEK ETKİLERİYLE DEĞİŞTİRECEĞİZ.
  */

  console.log(
    "Henüz özel etkisi kodlanmadı:",
    kartBilgisi.id
  );


  ozelKartiCopeGonder(
    kartBilgisi,
    kartElementi,
    katman,
    true
  );
}


/* =====================================================
   ÖZEL KARTI YUVAYA GÖNDER
===================================================== */

function ozelKartiYuvayaGonder(
  kartBilgisi,
  kartElementi,
  katman
) {

  const oyuncuOzelKartlari =
    aktifOyuncu === 1
      ? oyuncu1OzelKartlari
      : oyuncu2OzelKartlari;


  if (
    oyuncuOzelKartlari.length >=
    2
  ) {

    secimYazisiGoster(
      "ÖZEL KART YUVAN DOLU"
    );


    ozelKartKararlariniGoster(
      kartBilgisi,
      kartElementi,
      katman
    );


    return;
  }


  let hedefYuva;


  /*
    1. OYUNCU =
    ALT TARAF

    2. OYUNCU =
    ÜST TARAF
  */

  if (
    aktifOyuncu === 1
  ) {

    hedefYuva =
      oyuncuOzelKartlari.length ===
      0

        ? document.getElementById(
            "altOzelKartBir"
          )

        : document.getElementById(
            "altOzelKartIki"
          );

  } else {

    hedefYuva =
      oyuncuOzelKartlari.length ===
      0

        ? document.getElementById(
            "ustOzelKartBir"
          )

        : document.getElementById(
            "ustOzelKartIki"
          );

  }


  /*
    HTML'DE YUVA BULUNAMAZSA
    KARTIN KAYBOLMAMASI İÇİN
    ÇÖPLÜĞE GÖNDERİYORUZ.
  */

  if (!hedefYuva) {

    console.error(
      "Özel kart yuvası bulunamadı."
    );


    ozelKartiCopeGonder(
      kartBilgisi,
      kartElementi,
      katman,
      true
    );


    return;
  }


  oyuncuOzelKartlari.push(
    kartBilgisi
  );


  const hedefRect =
    hedefYuva
      .getBoundingClientRect();


  gsap.to(
    katman,
    {
      opacity: 0,

      duration: 0.25
    }
  );


  gsap.to(
    kartElementi,
    {
      left:
        hedefRect.left,

      top:
        hedefRect.top,

      width:
        hedefRect.width,

      height:
        hedefRect.height,

      rotation:
        0,

      duration:
        0.70,

      ease:
        "power3.inOut",

      onComplete:
        () => {

          const sahneRect =
            oynanisEkrani
              .getBoundingClientRect();


          const kapaliKart =
            document.createElement(
              "img"
            );


          /*
            MASADA ÖZEL KART
            KAPALI DURACAK.
          */

          kapaliKart.src =
            "images/kart-arkasi.png";


          kapaliKart.className =
            "oyuncuOzelKartKarti";


          kapaliKart.dataset.id =
            kartBilgisi.id;


          /*
            GERÇEK DOSYAYI SAKLIYORUZ.

            BÖYLECE KARTA TIKLAYINCA
            ÖN YÜZÜNÜ GÖREBİLECEĞİZ.
          */

          kapaliKart.dataset.gercekDosya =
            kartBilgisi.dosya;


          Object.assign(
            kapaliKart.style,
            {
              position:
                "absolute",

              left:
                (
                  hedefRect.left -
                  sahneRect.left
                ) +
                "px",

              top:
                (
                  hedefRect.top -
                  sahneRect.top
                ) +
                "px",

              width:
                hedefRect.width +
                "px",

              height:
                hedefRect.height +
                "px",

              zIndex:
                "9",

              objectFit:
                "fill",

              cursor:
                "pointer",

              pointerEvents:
                "auto",

              touchAction:
                "manipulation",

              userSelect:
                "none",

              WebkitUserDrag:
                "none",

              filter:
                "drop-shadow(0 6px 6px rgba(0,0,0,0.45))"
            }
          );


          /*
            KAPALI ÖZEL KARTA
            TIKLAYINCA ÖN YÜZÜ
            BÜYÜK GÖSTER.
          */

          kapaliKart.addEventListener(
            "click",
            (event) => {

              event.stopPropagation();


              kartOnizlemeAc(
                kapaliKart,
                kartBilgisi.dosya
              );

            }
          );


          oynanisEkrani
            .appendChild(
              kapaliKart
            );


          kartElementi.remove();

          katman.remove();


          bekleyenOzelKart =
            null;


          turuBitir();

        }
    }
  );
}


/* =====================================================
   ÖZEL KARTI ÇÖPE GÖNDER
===================================================== */

function ozelKartiCopeGonder(
  kartBilgisi,
  kartElementi,
  katman,
  turBitsin = true,
  tamamlaninca = null
) {

  const copYuvasi =
    document.getElementById(
      "copYuvasi"
    );


  /*
    ÇÖP YUVASI BULUNAMAZSA
    YİNE DE OYUN KİLİTLENMESİN.
  */

  if (!copYuvasi) {

    kartElementi.remove();

    katman.remove();


    bekleyenOzelKart =
      null;


    if (tamamlaninca) {

      tamamlaninca();

      return;
    }


    if (turBitsin) {

      turuBitir();

    }


    return;
  }


  const hedefRect =
    copYuvasi
      .getBoundingClientRect();


  const sahneRect =
    oynanisEkrani
      .getBoundingClientRect();


  /*
    ESER VE ÖZEL KARTLAR
    AYNI ÇÖPLÜK DİZİSİNDE.

    BÖYLECE GERÇEK ATILMA
    SIRASI KORUNUYOR.
  */

  copDeste.push(
    kartBilgisi
  );


  window.copDeste =
    copDeste;


  const copIndex =
    copDeste.length -
    1;


  const kaymaX =
    copIndex *
    0.45;


  const kaymaY =
    copIndex *
    -0.35;


  gsap.to(
    katman,
    {
      opacity: 0,

      duration: 0.25
    }
  );


  gsap.to(
    kartElementi,
    {
      left:
        hedefRect.left +
        kaymaX,

      top:
        hedefRect.top +
        kaymaY,

      width:
        hedefRect.width,

      height:
        hedefRect.height,

      rotation:
        (
          copIndex %
          5 -
          2
        ) *
        0.35,

      opacity:
        1,

      duration:
        0.65,

      ease:
        "power3.inOut",

      onComplete:
        () => {

          const copKarti =
            document.createElement(
              "img"
            );


          /*
            ÇÖPLÜKTE ÖZEL KART
            ÖN YÜZÜ AÇIK.
          */

          copKarti.src =
            kartBilgisi.dosya;


          copKarti.className =
            "coptekiKart";


          copKarti.dataset.id =
            kartBilgisi.id;


          copKarti.dataset.tip =
            "ozel";


          copKarti.dataset.gercekDosya =
            kartBilgisi.dosya;


          Object.assign(
            copKarti.style,
            {
              position:
                "absolute",

              left:
                (
                  hedefRect.left -
                  sahneRect.left +
                  kaymaX
                ) +
                "px",

              top:
                (
                  hedefRect.top -
                  sahneRect.top +
                  kaymaY
                ) +
                "px",

              width:
                hedefRect.width +
                "px",

              height:
                hedefRect.height +
                "px",

              zIndex:
                40 +
                copIndex,

              objectFit:
                "fill",

              cursor:
                "pointer",

              pointerEvents:
                "auto",

              touchAction:
                "manipulation",

              userSelect:
                "none",

              WebkitUserDrag:
                "none",

              transform:
                `rotate(${(
                  copIndex %
                  5 -
                  2
                ) * 0.35}deg)`,

              filter:
                "drop-shadow(0 5px 5px rgba(0,0,0,0.42))"
            }
          );


          copKarti.addEventListener(
            "click",
            (event) => {

              event.stopPropagation();


              kartOnizlemeAc(
                copKarti,
                kartBilgisi.dosya
              );

            }
          );


          oynanisEkrani
            .appendChild(
              copKarti
            );


          kartElementi.remove();

          katman.remove();


          bekleyenOzelKart =
            null;


          console.log(
            "ÇÖPLÜK:",
            copDeste
          );


          if (tamamlaninca) {

            tamamlaninca();

            return;
          }


          if (turBitsin) {

            turuBitir();

          }

        }
    }
  );
}


/* =====================================================
   TURU BİTİR / SIRAYI DEĞİŞTİR
===================================================== */

function turuBitir() {

  kartCekmeKilidi =
    true;


  setTimeout(
    () => {

      /*
        +2 KART ÇEK ETKİSİ VARSA
        SIRA RAKİBE GEÇMEZ.

        AYNI OYUNCU DEVAM EDER.
      */

      if (
        ekstraKartCekmeSayisi >
        0
      ) {

        ekstraKartCekmeSayisi--;


        kartCekmeKilidi =
          false;


        if (
          ekstraKartCekmeSayisi >
          0
        ) {

          secimYazisiGoster(
            `${aktifOyuncu}. OYUNCU — ${ekstraKartCekmeSayisi} EKSTRA KART DAHA ÇEK`
          );

        } else {

          secimYazisiGoster(
            `${aktifOyuncu}. OYUNCU — SON EKSTRA KARTINI ÇEKTİ`
          );

        }


        kartCekmeAsamasiniBaslat();


        return;
      }


      /*
        EKSTRA ÇEKİŞ YOKSA
        NORMAL ŞEKİLDE
        SIRA DEĞİŞİR.
      */

      aktifOyuncu =
        aktifOyuncu === 1
          ? 2
          : 1;


      kartCekmeKilidi =
        false;


      console.log(
        "Yeni aktif oyuncu:",
        aktifOyuncu
      );


      kartCekmeAsamasiniBaslat();

    },
    450
  );
}


/* =====================================================
   KART ÖNİZLEME
===================================================== */

function kartOnizlemeAc(
  kaynakKart,
  gercekDosya = null
) {

  if (
    onizlemeAcik
  ) {

    return;
  }


  onizlemeAcik =
    true;


  butonSesiCal();


  const kaynakRect =
    kaynakKart
      .getBoundingClientRect();


  const katman =
    document.createElement(
      "div"
    );


  katman.id =
    "kartOnizlemeKatmani";


  Object.assign(
    katman.style,
    {
      position:
        "fixed",

      inset:
        "0",

      width:
        "100vw",

      height:
        "100vh",

      background:
        "rgba(0,0,0,0.70)",

      backdropFilter:
        "blur(3px)",

      WebkitBackdropFilter:
        "blur(3px)",

      zIndex:
        "65000",

      cursor:
        "pointer"
    }
  );


  document.body.appendChild(
    katman
  );


  const onizlemeKart =
    document.createElement(
      "img"
    );


  onizlemeKart.id =
    "kartOnizlemeKart";


  /*
    KART KAPALIYSA:

    gercekDosya
    veya
    dataset.gercekDosya

    KULLANILIR.

    AÇIK KARTSA NORMAL SRC KULLANILIR.
  */

  onizlemeKart.src =
    gercekDosya ||
    kaynakKart.dataset.gercekDosya ||
    kaynakKart.src;


  Object.assign(
    onizlemeKart.style,
    {
      position:
        "fixed",

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

      zIndex:
        "65001",

      opacity:
        "1",

      cursor:
        "pointer",

      objectFit:
        "fill",

      touchAction:
        "manipulation",

      userSelect:
        "none",

      WebkitUserDrag:
        "none",

      filter:
        "drop-shadow(0 24px 30px rgba(0,0,0,0.75))"
    }
  );


  document.body.appendChild(
    onizlemeKart
  );


  /*
    KAYNAK KARTI GEÇİCİ OLARAK
    GÖRÜNMEZ YAPIYORUZ.
  */

  kaynakKart.style.opacity =
    "0";


  const kartOrani =
    kaynakRect.width /
    kaynakRect.height;


  let hedefYukseklik =
    window.innerHeight *
    0.82;


  let hedefGenislik =
    hedefYukseklik *
    kartOrani;


  const maksimumGenislik =
    window.innerWidth *
    0.42;


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
    ) /
    2;


  const hedefTop =
    (
      window.innerHeight -
      hedefYukseklik
    ) /
    2;


  gsap.fromTo(
    katman,
    {
      opacity: 0
    },
    {
      opacity: 1,

      duration: 0.25
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

      rotation:
        0,

      duration:
        0.50,

      ease:
        "back.out(1.25)"
    }
  );


  function onizlemeyiKapat() {

    if (
      !onizlemeAcik
    ) {

      return;
    }


    onizlemeAcik =
      false;


    butonSesiCal();


    const guncelKaynakRect =
      kaynakKart
        .getBoundingClientRect();


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

        duration:
          0.45,

        ease:
          "power3.inOut",

        onComplete:
          () => {

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


/* =====================================================
   SANATÇI SEÇİM DURUMU
===================================================== */

function secimDurumunuKontrolEt() {

  if (
    aktifOyuncu === 1 &&
    oyuncu1Secimleri.length ===
    3
  ) {

    aktifOyuncu =
      2;


    secimYazisiGoster(
      "2. OYUNCU — 3 SANATÇI SEÇ"
    );


    return;
  }


  if (
    aktifOyuncu === 2 &&
    oyuncu2Secimleri.length ===
    3
  ) {

    secimKilidi =
      true;


    secimYazisiGoster(
      "SANATÇILAR SEÇİLDİ"
    );


    setTimeout(
      async () => {

        await kalanSanatcilariArtanYuvayaGonder();


        secimYazisiniGizle();


        setTimeout(
          () => {

            ozelKartSeciminiBaslat();

          },
          450
        );

      },
      500
    );
  }
}


/* =====================================================
   DEVAM BUTONU
===================================================== */

devamButonu.addEventListener(
  "click",
  () => {

    if (
      !oyunHazir
    ) {

      return;
    }


    butonSesiCal();


    acilisEkrani
      .classList
      .remove(
        "aktif"
      );


    anaMenu
      .classList
      .add(
        "aktif"
      );


    anaMenuMuzik.currentTime =
      0;


    anaMenuMuzik.volume =
      0;


    anaMenuMuzik
      .play()
      .then(
        () => {

          muzikAc(
            anaMenuMuzik,
            MUZIK_SESI,
            1500
          );

        }
      )
      .catch(
        (hata) => {

          console.log(
            "Ana menü müziği başlatılamadı:",
            hata
          );

        }
      );
  }
);


/* =====================================================
   BAŞLA BUTONU
===================================================== */

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
      .catch(
        (hata) => {

          console.log(
            "Oyun müziği başlatılamadı:",
            hata
          );

        }
      );


    await muzikKapat(
      anaMenuMuzik,
      1000
    );


    anaMenu
      .classList
      .remove(
        "aktif"
      );


    oynanisEkrani
      .classList
      .add(
        "aktif"
      );


    muzikAc(
      oyunMuzik,
      MUZIK_SESI,
      1500
    );


    setTimeout(
      () => {

        sanatciKartlariniKaristir();

      },
      400
    );
  }
);


/* =====================================================
   NASIL OYNANIR
===================================================== */

nasilOynanirButonu.addEventListener(
  "click",
  () => {

    butonSesiCal();


    console.log(
      "Nasıl Oynanır butonuna basıldı!"
    );
  }
);


/* =====================================================
   OYUNU YÜKLE
===================================================== */

oyunuOncedenYukle();
