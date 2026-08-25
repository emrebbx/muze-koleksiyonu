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
    dosya: "images/monet-eser2-niluferler.png?v=41"
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


/* =====================================================
   20 ÖZEL KART
===================================================== */

const ozelKartlar = [

  {
    id: "acik-artirma",
    tip: "ozel",
    dosya: "images/acik-artirma.png"
  },

  {
    id: "arkeolojik-kazi",
    tip: "ozel",
    dosya: "images/arkeolojik-kazi.png"
  },

  {
    id: "arti-iki-kart",
    tip: "ozel",
    dosya: "images/arti-iki-kart.png"
  },

  {
    id: "dedektif-sorusturmasi",
    tip: "ozel",
    dosya: "images/dedektif-sorusturmasi.png"
  },

  {
    id: "depo-kilidi",
    tip: "ozel",
    dosya: "images/depo-kilidi.png"
  },

  {
    id: "dunya-takimi",
    tip: "ozel",
    dosya: "images/dunya-takimi.png?v=41"
  },

  {
    id: "eser-calindi",
    tip: "ozel",
    dosya: "images/eser-calindi.png"
  },

  {
    id: "eser-sahteydi",
    tip: "ozel",
    dosya: "images/eser-sahteydi.png"
  },

  {
    id: "fransa-takimi",
    tip: "ozel",
    dosya: "images/fransa-takimi.png"
  },

  {
    id: "gece-nobeti",
    tip: "ozel",
    dosya: "images/gece-nobeti.png"
  },

  {
    id: "gizli-sandik",
    tip: "ozel",
    dosya: "images/gizli-sandik.png"
  },

  {
    id: "hollanda-takimi",
    tip: "ozel",
    dosya: "images/hollanda-takimi.png"
  },

  {
    id: "klasikler-takimi",
    tip: "ozel",
    dosya: "images/klasikler-takimi.png"
  },

  {
    id: "muze-guvenligi",
    tip: "ozel",
    dosya: "images/muze-guvenligi.png?v=41"
  },

  {
    id: "muze-muduru",
    tip: "ozel",
    dosya: "images/muze-muduru.png"
  },

  {
    id: "aktivist-saldirisi",
    tip: "ozel",
    dosya: "images/aktivist-saldirisi.png"
  },

  {
    id: "muzede-kaza",
    tip: "ozel",
    dosya: "images/muzede-kaza.png"
  },

  {
    id: "ozel-kart-takasi",
    tip: "ozel",
    dosya: "images/ozel-kart-takasi.png"
  },

  {
    id: "restorasyon",
    tip: "ozel",
    dosya: "images/restorasyon.png"
  },

  {
    id: "yeni-sergi",
    tip: "ozel",
    dosya: "images/yeni-sergi.png"
  }

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

/* PAKET 1 — ekran/oyun tekrar başlatma kilidi */
let oyunBaslatiliyor = false;
let oyunAktif = false;


/* =====================================================
   ORTAK DESTE
===================================================== */

let ortakDeste = [];

let ortakDesteHazir =
  false;


/* =====================================================
   OYUN AŞAMASI
===================================================== */

let oyunAsamasi =
  "hazirlik";


/* =====================================================
   BAŞLANGIÇ ZARI
===================================================== */

let oyuncu1ZarSonucu =
  null;

let oyuncu2ZarSonucu =
  null;

let zarSirasi =
  1;

let zarAtisKilidi =
  false;


/* =====================================================
   KART ÇEKME / DEPO
===================================================== */

let kartCekmeKilidi =
  false;

let oyuncu1DepoKartlari =
  [];

let oyuncu2DepoKartlari =
  [];


/* =====================================================
   ÖZEL KART ALANLARI
===================================================== */

let oyuncu1OzelKartlari =
  [];

let oyuncu2OzelKartlari =
  [];

let bekleyenOzelKart =
  null;


/* =====================================================
   ÇÖPLÜK
===================================================== */

let copDeste =
  [];


/* =====================================================
   EKSTRA KART ÇEKME KUYRUĞU
===================================================== */

let ekstraKartCekmeSayisi =
  0;


/* =====================================================
   ÖZEL KART MOTORU DURUMLARI
===================================================== */

let ozelKartEfektiAktif =
  false;

let hedefSecimAktif =
  false;

let hedefSecimTipi =
  null;

let hedefSecimCallback =
  null;

let hedefSecimMaksimum =
  0;

let secilenHedefler =
  [];


/* =====================================================
   GİZLİ SANDIK / OTURUM HAVUZU
===================================================== */

/*
  Gizli Sandık kullanılırsa
  kendisi oturum dışına çıkar.

  Dışarıdaki 8 karttan gelen kart
  aktif oturum kartı olur.

  Böylece:
  12 -> 11 -> 12
*/

let oturumDisiOzelKartlar =
  [];

let gizliSandiktanDahilOlanKartlar =
  [];


/* =====================================================
   MÜZE GÜVENLİĞİ
===================================================== */

/*
  Oyunda tek Müze Güvenliği var.

  Örnek:

  {
    oyuncu: 1,
    sanatciId: "monet",
    element: HTMLElement
  }
*/

let muzeGuvenligiDurumu =
  null;


/* =====================================================
   DEPO KİLİDİ
===================================================== */

/*
  Oyunda tek Depo Kilidi var.

  Örnek:

  {
    hedefOyuncu: 2,
    yuvaId: "ustDepoBir",
    element: HTMLElement
  }
*/

let depoKilidiDurumu =
  null;


/* =====================================================
   ARTAN SANATÇILARIN GERÇEK VERİSİ
===================================================== */

/*
  Yeni Sergi için sağ taraftaki
  6 sanatçının kim olduğunu
  burada saklayacağız.
*/

let artanSanatcilar =
  [];


/* =====================================================
   TAKIMLAR
===================================================== */

const TAKIMLAR = {

  fransa: [
    "monet",
    "cezanne",
    "millet"
  ],

  hollanda: [
    "rembrandt",
    "van-gogh",
    "vermeer"
  ],

  dunya: [
    "osman-hamdi",
    "mondrian",
    "munch"
  ],

  klasikler: [
    "durer",
    "leonardo",
    "velazquez"
  ]

};


/* =====================================================
   OYUNCU VERİ YARDIMCILARI
===================================================== */

function oyuncununSanatcilari(
  oyuncu
) {

  return oyuncu === 1
    ? oyuncu1Secimleri
    : oyuncu2Secimleri;
}


function oyuncununDeposu(
  oyuncu
) {

  return oyuncu === 1
    ? oyuncu1DepoKartlari
    : oyuncu2DepoKartlari;
}


function oyuncununOzelKartlari(
  oyuncu
) {

  return oyuncu === 1
    ? oyuncu1OzelKartlari
    : oyuncu2OzelKartlari;
}


function rakipOyuncuNumarasi() {

  return aktifOyuncu === 1
    ? 2
    : 1;
}


function aktifOyuncununSanatcilari() {

  return oyuncununSanatcilari(
    aktifOyuncu
  );
}


function rakibinSanatcilari() {

  return oyuncununSanatcilari(
    rakipOyuncuNumarasi()
  );
}


function aktifOyuncununDeposu() {

  return oyuncununDeposu(
    aktifOyuncu
  );
}


function rakibinDeposu() {

  return oyuncununDeposu(
    rakipOyuncuNumarasi()
  );
}


function aktifOyuncununOzelKartlari() {

  return oyuncununOzelKartlari(
    aktifOyuncu
  );
}


function rakibinOzelKartlari() {

  return oyuncununOzelKartlari(
    rakipOyuncuNumarasi()
  );
}


/* =====================================================
   TAKIM SANATÇI SAYISI
===================================================== */

function takimSanatciSayisi(
  takimAdi,
  oyuncu = aktifOyuncu
) {

  const takim =
    TAKIMLAR[takimAdi] || [];


  return oyuncununSanatcilari(
    oyuncu
  ).filter(
    (sanatci) =>
      takim.includes(
        sanatci.id
      )
  ).length;
}


/* =====================================================
   ESER KARTININ SAHİBİNİ BUL
===================================================== */

function eserKartininOyuncusu(
  kartElementi
) {

  const sahip =
    Number(
      kartElementi.dataset.oyuncu
    );


  if (
    sahip === 1 ||
    sahip === 2
  ) {

    return sahip;
  }


  return null;
}


/* =====================================================
   MASADAKİ ESERLER
===================================================== */

function oyuncununMasadakiEserleri(
  oyuncu
) {

  return Array.from(
    document.querySelectorAll(
      `.yerlesenEserKarti[data-oyuncu="${oyuncu}"]`
    )
  );
}


/* =====================================================
   SANATÇININ ESER SAYISI
===================================================== */

function sanatcininToplananEserSayisi(
  oyuncu,
  sanatciId
) {

  return oyuncununMasadakiEserleri(
    oyuncu
  ).filter(
    (kart) =>
      kart.dataset.sanatci ===
      sanatciId
  ).length;
}


/* =====================================================
   KOLEKSİYON TAMAM MI?
===================================================== */

function sanatciKoleksiyonuTamamMi(
  oyuncu,
  sanatciId
) {

  return (
    sanatcininToplananEserSayisi(
      oyuncu,
      sanatciId
    ) === 3
  );
}


/* =====================================================
   MÜZE GÜVENLİĞİ KONTROLÜ
===================================================== */

function sanatciGuvenlikAltindaMi(
  oyuncu,
  sanatciId
) {

  if (
    !muzeGuvenligiDurumu
  ) {

    return false;
  }


  return (
    muzeGuvenligiDurumu.oyuncu ===
      oyuncu &&

    muzeGuvenligiDurumu.sanatciId ===
      sanatciId
  );
}


/* =====================================================
   ESER KOLEKSİYONDA VAR MI?
===================================================== */

function eserKoleksiyondaVarMi(
  eserId
) {

  return Array.from(
    document.querySelectorAll(
      ".yerlesenEserKarti"
    )
  ).some(
    (kart) =>
      kart.dataset.id ===
      eserId
  );
}


/* =====================================================
   ÇÖPTEKİ UYGUN ESERLER
===================================================== */

function coptekiUygunEserleriBul(
  oyuncu = aktifOyuncu
) {

  const sanatciIdleri =
    oyuncununSanatcilari(
      oyuncu
    ).map(
      (sanatci) =>
        sanatci.id
    );


  return copDeste.filter(
    (kart) => {

      if (
        kart.tip !==
        "eser"
      ) {

        return false;
      }


      if (
        !sanatciIdleri.includes(
          kart.sanatci
        )
      ) {

        return false;
      }


      if (
        eserKoleksiyondaVarMi(
          kart.id
        )
      ) {

        return false;
      }


      return true;
    }
  );
}


/* =====================================================
   ÇÖPTEKİ EN SON UYGUN ESER
===================================================== */

function coptekiEnSonUygunEseriBul(
  oyuncu = aktifOyuncu
) {

  const uygun =
    coptekiUygunEserleriBul(
      oyuncu
    );


  if (
    uygun.length === 0
  ) {

    return null;
  }


  /*
    ÇÖPLÜĞÜ EN SONDAN GERİYE
    TARAMAMIZ GEREKİYOR.
  */

  for (
    let i =
      copDeste.length - 1;

    i >= 0;

    i--
  ) {

    const kart =
      copDeste[i];


    if (
      uygun.some(
        (uygunKart) =>
          uygunKart.id ===
          kart.id
      )
    ) {

      return kart;
    }

  }


  return null;
}


/* =====================================================
   RAKİBİN TAMAMLANMAMIŞ UYGUN ESERLERİ
===================================================== */

function rakibinTamamlanmamisUygunEserleri() {

  const rakip =
    rakipOyuncuNumarasi();


  return oyuncununMasadakiEserleri(
    rakip
  ).filter(
    (kart) => {

      const sanatciId =
        kart.dataset.sanatci;


      if (
        sanatciGuvenlikAltindaMi(
          rakip,
          sanatciId
        )
      ) {

        return false;
      }


      return !sanatciKoleksiyonuTamamMi(
        rakip,
        sanatciId
      );
    }
  );
}


/* =====================================================
   RAKİBİN TAMAMLANMIŞ UYGUN ESERLERİ
===================================================== */

function rakibinTamamlanmisUygunEserleri() {

  const rakip =
    rakipOyuncuNumarasi();


  return oyuncununMasadakiEserleri(
    rakip
  ).filter(
    (kart) => {

      const sanatciId =
        kart.dataset.sanatci;


      if (
        sanatciGuvenlikAltindaMi(
          rakip,
          sanatciId
        )
      ) {

        return false;
      }


      return sanatciKoleksiyonuTamamMi(
        rakip,
        sanatciId
      );
    }
  );
}


/* =====================================================
   DEPO YUVASI DOLU MU? — PAKET 1 GÜVENLİ SÜRÜM
===================================================== */

function depoYuvasiDoluMu(
  yuvaId
) {

  const domDolu =
    Boolean(
      document.querySelector(
        `.depodakiEserKarti[data-yuva-id="${yuvaId}"]`
      )
    );

  if (
    domDolu
  ) {

    return true;
  }

  const oyuncu =
    yuvaId.startsWith(
      "alt"
    )
      ? 1
      : 2;

  return oyuncununDeposu(
    oyuncu
  ).some(
    (kart) =>
      kart.yuvaId ===
      yuvaId
  );
}


/* =====================================================
   DEPO YUVASI KİLİTLİ Mİ?
===================================================== */

function depoYuvasiKilitliMi(
  yuvaId
) {

  if (
    !depoKilidiDurumu
  ) {

    return false;
  }


  return (
    depoKilidiDurumu.yuvaId ===
    yuvaId
  );
}


/* =====================================================
   OYUNCUNUN BOŞ DEPO YUVALARI
===================================================== */

function oyuncununBosDepoYuvalari(
  oyuncu
) {

  const yuvalar =
    oyuncu === 1

      ? [
          "altDepoBir",
          "altDepoIki"
        ]

      : [
          "ustDepoBir",
          "ustDepoIki"
        ];


  return yuvalar.filter(
    (yuvaId) => {

      if (
        depoYuvasiKilitliMi(
          yuvaId
        )
      ) {

        return false;
      }


      return !depoYuvasiDoluMu(
        yuvaId
      );
    }
  );
}


/* =====================================================
   KART İNCELEME İZNİ
===================================================== */

function kartIncelemeIzniVarMi(
  kaynakKart
) {

  /*
    OYUNDA NORMAL KART İNCELEME
    SADECE KART ÇEKME AŞAMASINDA
    VE AKTİF OYUNCU İÇİN.
  */

  if (
    oyunAsamasi !==
      "kart-cekme" &&

    oyunAsamasi !==
      "ortak-deste-bitti"
  ) {

    return false;
  }


  const sahip =
    Number(
      kaynakKart.dataset.oyuncu
    );


  /*
    SAHİBİ TANIMLANMIŞ KARTLARDA
    SADECE AKTİF OYUNCU KENDİ
    KARTINA BAKABİLİR.
  */

  if (
    sahip === 1 ||
    sahip === 2
  ) {

    return (
      sahip ===
      aktifOyuncu
    );
  }


  /*
    ÇÖPLÜK GİZLİ DEĞİL.
    ÖN YÜZÜ ZATEN AÇIK.

    Bu yüzden çöpteki karta
    herkes bakabilir.
  */

  if (
    kaynakKart.classList.contains(
      "coptekiKart"
    )
  ) {

    return true;
  }


  return false;
}


/* =====================================================
   ÖZEL KART KULLANILABİLİR Mİ?
===================================================== */

function ozelKartKullanilabilirMi(
  kartBilgisi
) {

  if (
    !kartBilgisi
  ) {

    return false;
  }


  switch (
    kartBilgisi.id
  ) {

    case "dedektif-sorusturmasi":

      return (
        rakibinDeposu().length >
        0
      );


    case "gece-nobeti":

      return (
        rakibinDeposu().length >
        0
      );


    case "eser-calindi":

      return (
        rakibinTamamlanmamisUygunEserleri()
          .length >
        0
      );


    case "eser-sahteydi":

      return (
        rakibinTamamlanmisUygunEserleri()
          .length >
        0
      );


    case "muzede-kaza":

      return (
        rakibinTamamlanmamisUygunEserleri()
          .length >
        0
      );


    case "restorasyon":

      return (
        coptekiUygunEserleriBul()
          .length >
        0
      );


    case "arti-iki-kart":

      return (
        ortakDeste.length >
        0
      );


    case "gizli-sandik":

      return (
        artanOzelKartlar.length >
        0
      );


    case "ozel-kart-takasi":

      /*
        Takas kartının kendisi henüz
        eldeyse, oyuncunun yuvasında
        ayrıca takas edecek en az
        1 başka özel kart bulunmalı.
      */

      return (
        aktifOyuncununOzelKartlari()
          .length >
          0 &&

        rakibinOzelKartlari()
          .length >
          0
      );


    case "muze-guvenligi":

      return (
        aktifOyuncununSanatcilari()
          .length >
        0
      );


    case "arkeolojik-kazi":

      return (
        ortakDeste.length >
        0
      );


    case "muze-muduru":

      /*
        KURAL:
        5'TEN AZ KART VARSA
        MÜZE MÜDÜRÜ KULLANILAMAZ.
      */

      return (
        ortakDeste.length >=
        5
      );


    case "depo-kilidi":

      return (
        oyuncununBosDepoYuvalari(
          rakipOyuncuNumarasi()
        ).length >
        0
      );


    case "acik-artirma":

      return (
        ortakDeste.length >
        0
      );


    case "yeni-sergi":

      return (
        artanSanatcilar.length >
        0
      );


    case "fransa-takimi":

      return (
        takimSanatciSayisi(
          "fransa"
        ) >
          0 &&

        ortakDeste.length >
          0
      );


    case "hollanda-takimi":

      return (
        takimSanatciSayisi(
          "hollanda"
        ) >
          0 &&

        coptekiUygunEserleriBul()
          .length >
          0
      );


    case "dunya-takimi":

      return (
        takimSanatciSayisi(
          "dunya"
        ) >
          0 &&

        ortakDeste.length >
          0
      );


    case "klasikler-takimi": {

      const klasikSayisi =
        takimSanatciSayisi(
          "klasikler"
        );


      if (
        klasikSayisi === 0
      ) {

        return false;
      }


      if (
        klasikSayisi === 3
      ) {

        return (
          rakibinTamamlanmisUygunEserleri()
            .length >
          0
        );
      }


      return (
        rakibinTamamlanmamisUygunEserleri()
          .length >
        0
      );

    }


    /*
      MÜZEDE DEPREMİN
      KULLAN BUTONU YOK.
    */

    case "muzede-deprem":

      return false;


    default:

      return true;
  }
}


/* =====================================================
   ÖZEL KART UYARI METNİ
===================================================== */

function ozelKartUyariMetni(
  kartBilgisi
) {

  if (
    !kartBilgisi
  ) {

    return "";
  }


  /* Takım kartlarında ilk ve en önemli koşul ilgili sanatçıya sahip
     olmaktır. Bu koşul sağlanmıyorsa çöp/deste/hedef sayısı gibi kartın
     ikincil özellikleri hakkında bilgi gösterme. */
  const takimKartlari = {
    "fransa-takimi": "fransa",
    "hollanda-takimi": "hollanda",
    "dunya-takimi": "dunya",
    "klasikler-takimi": "klasikler"
  };

  const takim = takimKartlari[kartBilgisi.id];
  if (takim && takimSanatciSayisi(takim) === 0) {
    return "Bu takıma ait sanatçın yok.";
  }


  switch (
    kartBilgisi.id
  ) {

    case "dedektif-sorusturmasi":

    case "gece-nobeti": {

      const sayi =
        rakibinDeposu().length;


      if (
        sayi === 0
      ) {

        return (
          "Rakibin deposunda eser yok."
        );
      }


      return (
        `Rakibin deposunda ${sayi} eser var.`
      );
    }


    case "restorasyon":

    case "hollanda-takimi": {

      const sayi =
        coptekiUygunEserleriBul()
          .length;


      if (
        sayi === 0
      ) {

        return (
          "Çöpte hiç eserin yok."
        );
      }


      if (
        sayi === 1
      ) {

        return (
          "Çöpte 1 eserin var."
        );
      }


      return (
        `Çöpte ${sayi} eserin var.`
      );
    }


    case "eser-calindi":

      if (
        rakibinTamamlanmamisUygunEserleri()
          .length ===
        0
      ) {

        return (
          "Çalınabilecek uygun eser yok."
        );
      }


      return "";


    case "eser-sahteydi":

      if (
        rakibinTamamlanmisUygunEserleri()
          .length ===
        0
      ) {

        return (
          "Rakibin korunmayan tamamlanmış koleksiyonu yok."
        );
      }


      return "";


    case "muzede-kaza":

      if (
        rakibinTamamlanmamisUygunEserleri()
          .length ===
        0
      ) {

        return (
          "Zarar görebilecek uygun eser yok."
        );
      }


      return "";


    case "arti-iki-kart":

      if (
        ortakDeste.length ===
        0
      ) {

        return (
          "Ortak deste boş."
        );
      }


      return "";


    case "arkeolojik-kazi":

      if (
        ortakDeste.length ===
        0
      ) {

        return (
          "Ortak deste boş."
        );
      }


      return "";


    case "muze-muduru":

      if (
        ortakDeste.length <
        5
      ) {

        return (
          "Müze Müdürü için ortak destede en az 5 kart olmalı."
        );
      }


      return "";


    case "ozel-kart-takasi":

      if (
        aktifOyuncununOzelKartlari()
          .length ===
        0
      ) {

        return (
          "Takas edecek özel kartın yok."
        );
      }


      if (
        rakibinOzelKartlari()
          .length ===
        0
      ) {

        return (
          "Rakibin özel kart alanında kart yok."
        );
      }


      return "";


    case "depo-kilidi":

      if (
        oyuncununBosDepoYuvalari(
          rakipOyuncuNumarasi()
        ).length ===
        0
      ) {

        return (
          "Rakibin boş depo yuvası yok."
        );
      }


      return "";


    case "fransa-takimi":

      if (
        takimSanatciSayisi(
          "fransa"
        ) ===
        0
      ) {

        return (
          "Fransa Takımı sanatçın yok."
        );
      }


      if (
        ortakDeste.length ===
        0
      ) {

        return (
          "Ortak deste boş."
        );
      }


      return "";


    case "hollanda-takimi":

      if (
        takimSanatciSayisi(
          "hollanda"
        ) ===
        0
      ) {

        return (
          "Hollanda Takımı sanatçın yok."
        );
      }


      return "";


    case "dunya-takimi":

      if (
        takimSanatciSayisi(
          "dunya"
        ) ===
        0
      ) {

        return (
          "Dünya Takımı sanatçın yok."
        );
      }


      if (
        ortakDeste.length ===
        0
      ) {

        return (
          "Ortak deste boş."
        );
      }


      return "";


    case "klasikler-takimi":

      if (
        takimSanatciSayisi(
          "klasikler"
        ) ===
        0
      ) {

        return (
          "Klasikler Takımı sanatçın yok."
        );
      }


      if (
        !ozelKartKullanilabilirMi(
          kartBilgisi
        )
      ) {

        return (
          "Rakibin saldırılabilecek uygun eseri yok."
        );
      }


      return "";


    case "yeni-sergi":

      if (
        artanSanatcilar.length ===
        0
      ) {

        return (
          "Artan sanatçı bulunmuyor."
        );
      }


      return "";


    default:

      return "";
  }
}


/* =====================================================
   SES
===================================================== */

const MUZIK_SESI =
  0.22;

const BUTON_SESI =
  0.65;


const anaMenuMuzik =
  new Audio(
    "sounds/ana-menu-muzik.mp3"
  );

const oyunMuzik =
  new Audio(
    "sounds/oyun-muzik.mp3"
  );

const butonTik =
  new Audio(
    "sounds/buton-tik.mp3"
  );


anaMenuMuzik.loop =
  true;

oyunMuzik.loop =
  true;


anaMenuMuzik.volume =
  0;

oyunMuzik.volume =
  0;

butonTik.volume =
  BUTON_SESI;


anaMenuMuzik.preload =
  "auto";

oyunMuzik.preload =
  "auto";

butonTik.preload =
  "auto";


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

  "images/3-sanatci-sec.png",
  "images/dedektif-zar-kutusu.png",

  "images/kart-arkasi.png",
  "images/bilgisayar-kart-ceken-el.png",

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
  [
    ...new Set(
      yuklenecekGorseller
    )
  ];


/* =====================================================
   BUTON SESİ
===================================================== */

function butonSesiCal() {

  butonTik.currentTime =
    0;


  butonTik
    .play()
    .catch(
      (hata) => {

        console.log(
          "Buton sesi çalınamadı:",
          hata
        );

      }
    );
}


/* =====================================================
   TEK GÖRSELİ PRELOAD ET
===================================================== */

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

        if (
          tamamlandi
        ) {

          return;
        }


        tamamlandi =
          true;


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


/* =====================================================
   TEK SESİ PRELOAD ET
===================================================== */

function sesYukle(
  ses,
  isim
) {

  return new Promise(
    (resolve) => {

      let tamamlandi =
        false;


      function bitir() {

        if (
          tamamlandi
        ) {

          return;
        }


        tamamlandi =
          true;


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
        ses.readyState >=
        3
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
        bitir,
        10000
      );

    }
  );
}


/* =====================================================
   WINDOW LOAD BEKLE
===================================================== */

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


/* =====================================================
   OYUN DOSYALARINI PRELOAD ET
===================================================== */

async function oyunuOncedenYukle() {

  oyunHazir =
    false;


  devamButonu
    .classList
    .remove(
      "hazir"
    );


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


  let yuklenenDosya =
    0;


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
      async (
        sesBilgisi
      ) => {

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


  oyunHazir =
    true;


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


/* =====================================================
   RANDOM KARIŞTIRMA
===================================================== */

function karistir(
  dizi
) {

  const yeniDizi =
    [
      ...dizi
    ];


  for (
    let i =
      yeniDizi.length - 1;

    i >
      0;

    i--
  ) {

    const j =
      Math.floor(
        Math.random() *
        (
          i + 1
        )
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

/* =====================================================
   MÜZİĞİ AÇ
===================================================== */

function muzikAc(
  muzik,
  hedefSes = MUZIK_SESI,
  sure = 1500
) {

  const baslangicZamani =
    performance.now();


  const baslangicSes =
    muzik.volume;


  function animasyon(
    zaman
  ) {

    const ilerleme =
      Math.min(
        (
          zaman -
          baslangicZamani
        ) /
        sure,
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
      ilerleme <
      1
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


/* =====================================================
   MÜZİĞİ KAPAT
===================================================== */

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

      function animasyon(
        zaman
      ) {

        const ilerleme =
          Math.min(
            (
              zaman -
              baslangicZamani
            ) /
            sure,
            1
          );


        muzik.volume =
          baslangicSes *
          (
            1 -
            ilerleme
          );


        if (
          ilerleme <
          1
        ) {

          requestAnimationFrame(
            animasyon
          );

        } else {

          muzik.pause();

          muzik.currentTime =
            0;

          muzik.volume =
            0;


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


  if (
    !yazi
  ) {

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


  if (
    !yazi
  ) {

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
   GSAP DESTE KARIŞTIR
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
        (
          kart,
          index
        ) => {

          gsap.set(
            kart,
            {
              x:
                index *
                1.2,

              y:
                index *
                -0.35,

              rotation:
                0,

              scale:
                1,

              transformOrigin:
                "50% 100%",

              zIndex:
                index
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
          y:
            "-=20",

          duration:
            0.25,

          stagger:
            0.01
        }
      );


      tl.to(
        solDeste,
        {
          x:
            (
              index
            ) =>
              -145 +
              index *
              2,

          y:
            (
              index
            ) =>
              -10 -
              index *
              0.5,

          rotation:
            -5,

          duration:
            0.45,

          stagger:
            0.025
        }
      );


      tl.to(
        sagDeste,
        {
          x:
            (
              index
            ) =>
              145 +
              index *
              2,

          y:
            (
              index
            ) =>
              -10 -
              index *
              0.5,

          rotation:
            5,

          duration:
            0.45,

          stagger:
            0.025
        },
        "<"
      );


      for (
        let i =
          0;

        i <
          6;

        i++
      ) {

        const solKart =
          solDeste[i];


        const sagKart =
          sagDeste[i];


        tl.to(
          solKart,
          {
            x:
              -6 +
              i *
              2,

            y:
              -i *
              0.8,

            rotation:
              -1.5,

            duration:
              0.18,

            ease:
              "power1.out"
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
            x:
              6 -
              i *
              2,

            y:
              -i *
              0.8,

            rotation:
              1.5,

            duration:
              0.18,

            ease:
              "power1.out"
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
            (
              index
            ) =>
              index *
              0.9,

          y:
            (
              index
            ) =>
              index *
              -0.28,

          rotation:
            0,

          scaleY:
            1,

          duration:
            0.4,

          stagger:
            0.012,

          ease:
            "back.out(1.25)"
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


  aktifOyuncu =
    1;


  oyuncu1Secimleri =
    [];

  oyuncu2Secimleri =
    [];


  artanSanatcilar =
    [];


  secimKilidi =
    false;


  document
    .querySelectorAll(
      ".artanSanatciKarti"
    )
    .forEach(
      (
        kart
      ) =>
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
    (
      sanatci,
      index
    ) => {

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


/* =====================================================
   12 SANATÇI KARTINI DİZ
===================================================== */

function onIkiKartiDiz(
  karisikSanatcilar
) {

  kapaliKartSirasi.innerHTML =
    "";


  karisikSanatcilar.forEach(
    (
      sanatci,
      index
    ) => {

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


/* =====================================================
   SANATÇI KARTINI SEÇ
===================================================== */

function sanatciKartiSec(
  kart,
  sanatci
) {

  if (
    secimKilidi
  ) {

    return;
  }


  if (
    kart.dataset.secildi ===
    "evet"
  ) {

    return;
  }


  secimKilidi =
    true;


  kart.dataset.secildi =
    "evet";


  butonSesiCal();


  gsap.to(
    kart,
    {
      scaleX:
        0,

      duration:
        0.2,

      ease:
        "power2.in",

      onComplete:
        () => {

          kart.src =
            sanatci.dosya;


          gsap.to(
            kart,
            {
              scaleX:
                1,

              duration:
                0.22,

              ease:
                "back.out(1.5)",

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


/* =====================================================
   SANATÇI KARTINI YUVAYA GÖNDER
===================================================== */

function kartiYuvayaGonder(
  kart,
  sanatci
) {

  let hedefYuva =
    null;


  let hedefIndex =
    0;


  if (
    aktifOyuncu ===
    1
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


  if (
    !hedefYuva
  ) {

    secimKilidi =
      false;


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
      position:
        "fixed",

      left:
        kartRect.left +
        "px",

      top:
        kartRect.top +
        "px",

      width:
        kartRect.width +
        "px",

      height:
        kartRect.height +
        "px",

      zIndex:
        "9999",

      pointerEvents:
        "none",

      opacity:
        "1",

      objectFit:
        "fill"
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

      rotation:
        0,

      opacity:
        1,

      duration:
        0.65,

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
            sanatci.dosya;


          yerlesenKart.className =
            "yerlesenSanatciKarti";


          yerlesenKart.dataset.sanatci =
            sanatci.id;


          yerlesenKart.dataset.oyuncu =
            String(
              aktifOyuncu
            );


          yerlesenKart.dataset.sanatciIndex =
            String(
              hedefIndex
            );


          yerlesenKart.dataset.gercekDosya =
            sanatci.dosya;


          Object.assign(
            yerlesenKart.style,
            {
              position:
                "absolute",

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

              zIndex:
                "5",

              opacity:
                "1",

              pointerEvents:
                "auto",

              cursor:
                "pointer",

              objectFit:
                "fill",

              touchAction:
                "manipulation",

              userSelect:
                "none",

              WebkitUserDrag:
                "none"
            }
          );


          yerlesenKart.addEventListener(
            "click",
            (
              event
            ) => {

              event.stopPropagation();


              if (
                !kartIncelemeIzniVarMi(
                  yerlesenKart
                )
              ) {

                return;
              }


              kartOnizlemeAc(
                yerlesenKart,
                sanatci.dosya
              );

            }
          );


          oynanisEkrani
            .appendChild(
              yerlesenKart
            );


          ucanKart.remove();


          const slot =
            kart.parentElement;


          kart.remove();


          /*
            SLOT SİLİNMİYOR.

            BÖYLECE 12 KARTLIK
            BAŞLANGIÇ DİZİLİMİNİN
            BOŞLUKLARI KORUNUYOR.
          */

          if (
            slot
          ) {

            slot.classList.add(
              "bos"
            );
          }


          if (
            aktifOyuncu ===
            1
          ) {

            oyuncu1Secimleri.push(
              sanatci
            );

          } else {

            oyuncu2Secimleri.push(
              sanatci
            );

          }


          secimKilidi =
            false;


          secimDurumunuKontrolEt();

        }
    }
  );
}


/* =====================================================
   SANATÇI SEÇİM DURUMUNU KONTROL ET
===================================================== */

function secimDurumunuKontrolEt() {

  if (
    aktifOyuncu ===
      1 &&

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
    aktifOyuncu ===
      2 &&

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


      /*
        YENİ SERGİ İÇİN
        GERÇEK 6 SANATÇIYI
        VERİ OLARAK SAKLIYORUZ.
      */

      artanSanatcilar =
        kalanKartlar
          .map(
            (
              kart
            ) =>
              sanatcilar.find(
                (
                  sanatci
                ) =>
                  sanatci.id ===
                  kart.dataset.sanatci
              )
          )
          .filter(
            Boolean
          );


      window.artanSanatcilar =
        artanSanatcilar;


      if (
        kalanKartlar.length ===
          0 ||

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
        (
          kart,
          index
        ) => {

          const kartRect =
            kart.getBoundingClientRect();


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


          ucanKart.dataset.sanatci =
            kart.dataset.sanatci;


          Object.assign(
            ucanKart.style,
            {
              position:
                "absolute",

              left:
                kartLeft +
                "px",

              top:
                kartTop +
                "px",

              width:
                kartRect.width +
                "px",

              height:
                kartRect.height +
                "px",

              zIndex:
                9000 +
                index,

              pointerEvents:
                "none",

              userSelect:
                "none",

              WebkitUserDrag:
                "none",

              objectFit:
                "fill"
            }
          );


          oynanisEkrani
            .appendChild(
              ucanKart
            );


          kart.style.visibility =
            "hidden";


          const desteKaymaX =
            index *
            0.8;


          const desteKaymaY =
            index *
            -0.6;


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

              duration:
                0.7,

              delay:
                index *
                0.10,

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
                    "artanSanatciKarti";


                  artanKart.dataset.sanatci =
                    ucanKart.dataset.sanatci;


                  Object.assign(
                    artanKart.style,
                    {
                      position:
                        "absolute",

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

                      zIndex:
                        20 +
                        index,

                      pointerEvents:
                        "none",

                      userSelect:
                        "none",

                      WebkitUserDrag:
                        "none",

                      objectFit:
                        "fill",

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


  secilenOzelKartlar =
    [];


  artanOzelKartlar =
    [];


  ozelKartSecimKilidi =
    false;


  oturumDisiOzelKartlar =
    [];


  gizliSandiktanDahilOlanKartlar =
    [];


  window.secilenOzelKartlar =
    secilenOzelKartlar;


  window.artanOzelKartlar =
    artanOzelKartlar;


  document
    .querySelectorAll(
      ".artanOzelKarti"
    )
    .forEach(
      (
        kart
      ) =>
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


  /*
    DEDEKTİF SORUŞTURMASI
    OTURUM HAVUZUNA GARANTİ
    GİREN KART OLARAK
    ŞİMDİLİK MEVCUT SİSTEMİNİ
    KORUYORUZ.
  */

  const dedektif =
    ozelKartlar.find(
      (
        kart
      ) =>
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
      opacity:
        0,

      scale:
        0.75,

      y:
        30
    },
    {
      opacity:
        1,

      scale:
        1,

      y:
        0,

      duration:
        0.5,

      ease:
        "back.out(1.5)"
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


/* =====================================================
   DEDEKTİF ZORUNLU SEÇİM
===================================================== */

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
    {
      ...dedektif
    }
  );


  window.secilenOzelKartlar =
    secilenOzelKartlar;


  ozelKartSayac.textContent =
    "SEÇİLEN ÖZEL KART: 1 / 12";


  gsap.to(
    kart,
    {
      scale:
        0.75,

      opacity:
        0,

      y:
        -25,

      duration:
        0.35,

      ease:
        "power2.in",

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


/* =====================================================
   KALAN 19 ÖZEL KARTI DİZ
===================================================== */

function digerOzelKartlariDiz() {

  ozelKartSecimSirasi.innerHTML =
    "";


  ozelKartSecimSirasi.classList.remove(
    "ozelPanelHizliKapan"
  );


  const digerKartlar =
    karistir(
      ozelKartlar.filter(
        (
          kart
        ) =>
          kart.id !==
          "dedektif-sorusturmasi" &&
          !(
            typeof V54_GIZLI_SANDIK_OTURUM_DISI !== "undefined" &&
            V54_GIZLI_SANDIK_OTURUM_DISI &&
            kart.id === "gizli-sandik"
          )
      )
    );


  digerKartlar.forEach(
    (
      ozelKart,
      index
    ) => {

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
      opacity:
        0,

      y:
        30,

      scale:
        0.9
    },
    {
      opacity:
        1,

      y:
        0,

      scale:
        1,

      duration:
        0.4,

      stagger:
        0.035,

      ease:
        "power2.out"
    }
  );
}


/* =====================================================
   KAPALI ÖZEL KART SEÇ
===================================================== */

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
    {
      ...ozelKart
    }
  );


  window.secilenOzelKartlar =
    secilenOzelKartlar;


  ozelKartSayac.textContent =
    `SEÇİLEN ÖZEL KART: ${secilenOzelKartlar.length} / 12`;


  gsap.to(
    kart,
    {
      opacity:
        0,

      scale:
        0.72,

      y:
        -15,

      duration:
        0.25,

      ease:
        "power2.in",

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


    requestAnimationFrame(
      () => {

        ozelKartSecimSirasi.classList.add(
          "ozelPanelHizliKapan"
        );
      }
    );


    setTimeout(
      () => {

        artanOzelKartlariYuvayaGonder();

      },
      450
    );

  }
}


/* =====================================================
   KALAN 8 ÖZEL KARTI ARTAN YUVAYA GÖNDER
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
      (
        kart
      ) => {

        return {
          id:
            kart.dataset.id,

          tip:
            "ozel",

          dosya:
            kart.dataset.dosya
        };

      }
    );


  window.artanOzelKartlar =
    artanOzelKartlar;


  if (
    kalanKartlar.length ===
      0 ||

    !artanOzelYuvasi
  ) {

    ozelKartSeciminiBitir();

    return;
  }


  const yuvaRect =
    artanOzelYuvasi
      .getBoundingClientRect();


  let tamamlanan =
    0;


  kalanKartlar.forEach(
    (
      kart,
      index
    ) => {

      const kartRect =
        kart.getBoundingClientRect();


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
          position:
            "fixed",

          left:
            kartRect.left +
            "px",

          top:
            kartRect.top +
            "px",

          width:
            kartRect.width +
            "px",

          height:
            kartRect.height +
            "px",

          zIndex:
            9100 +
            index,

          pointerEvents:
            "none"
        }
      );


      document.body.appendChild(
        ucanKart
      );


      kart.style.visibility =
        "hidden";


      const desteKaymaX =
        index *
        0.7;


      const desteKaymaY =
        index *
        -0.55;


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

          duration:
            0.72,

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


              artanKart.dataset.id =
                kart.dataset.id;


              artanKart.dataset.dosya =
                kart.dataset.dosya;


              Object.assign(
                artanKart.style,
                {
                  position:
                    "fixed",

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
    "Oyun dışında kalan 8 özel kart:",
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
      (kart) => ({
        ...kart
      })
    );


  const secilenOzeller =
    secilenOzelKartlar.map(
      (kart) => ({
        ...kart,
        tip: "ozel"
      })
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
          Math.random() * 24
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
          i * 0.04,

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
                index % 2 === 0
                  ? -35
                  : 35,

              rotation:
                index % 2 === 0
                  ? -5
                  : 5,

              duration:
                0.28,

              delay:
                index * 0.025,

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
                index * 0.6,

              top:
                yuvaRect.top -
                index * 0.45,

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
                index * 0.035,

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
   ZAR STİLLERİNİ EKLE
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

      color:
        #fff4d4;

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

      user-select:
        none;

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
   BAŞLANGIÇ ZAR SİSTEMİ
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


  if (
    eskiKatman
  ) {

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
      opacity:
        0
    },
    {
      opacity:
        1,

      duration:
        0.35
    }
  );


  gsap.fromTo(
    "#baslangicZarKutusu",
    {
      scale:
        0.82,

      y:
        35
    },
    {
      scale:
        1,

      y:
        0,

      duration:
        0.5,

      ease:
        "back.out(1.5)"
    }
  );
}


/* =====================================================
   BAŞLANGIÇ ZARI AT
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


  let sayac =
    0;


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
            rotation:
              -18,

            scale:
              0.90,

            y:
              -6
          },
          {
            rotation:
              18,

            scale:
              1.06,

            y:
              0,

            duration:
              0.10,

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
      scale:
        1.35,

      rotation:
        -25,

      y:
        -25
    },
    {
      scale:
        1,

      rotation:
        0,

      y:
        0,

      duration:
        0.55,

      ease:
        "bounce.out"
    }
  );


  if (
    oyuncu ===
    1
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
   ZARLARI KARŞILAŞTIR
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


  document.getElementById(
    "zarGorsel1"
  ).textContent =
    "⚀";


  document.getElementById(
    "zarGorsel2"
  ).textContent =
    "⚀";


  document.getElementById(
    "zarSonuc1"
  ).textContent =
    "";


  document.getElementById(
    "zarSonuc2"
  ).textContent =
    "";


  document.getElementById(
    "zarGenelSonuc"
  ).textContent =
    "";


  document.getElementById(
    "zarAtButonu1"
  ).disabled =
    false;


  document.getElementById(
    "zarAtButonu2"
  ).disabled =
    true;


  document
    .getElementById(
      "zarOyuncu1Panel"
    )
    .classList
    .remove(
      "pasif"
    );


  document
    .getElementById(
      "zarOyuncu1Panel"
    )
    .classList
    .add(
      "aktif"
    );


  document
    .getElementById(
      "zarOyuncu2Panel"
    )
    .classList
    .remove(
      "aktif"
    );


  document
    .getElementById(
      "zarOyuncu2Panel"
    )
    .classList
    .add(
      "pasif"
    );
}


/* =====================================================
   ZAR EKRANINI KAPAT
===================================================== */

function baslangicZarEkraniniKapat() {

  const katman =
    document.getElementById(
      "baslangicZarKatmani"
    );


  if (
    !katman
  ) {

    kartCekmeAsamasiniBaslat();

    return;
  }


  gsap.to(
    katman,
    {
      opacity:
        0,

      duration:
        0.35,

      onComplete:
        () => {

          katman.remove();


          kartCekmeAsamasiniBaslat();
        }
    }
  );
}


/* =====================================================
   KART ÇEKME AŞAMASINI BAŞLAT
===================================================== */

function kartCekmeAsamasiniBaslat() {

  oyunAsamasi =
    "kart-cekme";


  kartCekmeKilidi =
    false;


  if (
    ortakDeste.length ===
    0
  ) {

    oyunAsamasi =
      "ortak-deste-bitti";


    secimYazisiGoster(
      "ORTAK DESTE BİTTİ"
    );


    ortakDesteGorselleriniGizle();


    return;
  }


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
    !ustKart
  ) {

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
}


/* =====================================================
   ORTAK DESTE GÖRSELLERİNİ GİZLE
===================================================== */

function ortakDesteGorselleriniGizle() {

  document
    .querySelectorAll(
      ".ortakDesteGorselKarti"
    )
    .forEach(
      (kart) => {

        kart.remove();
      }
    );


  /*
    KARTLAR BİTİNCE ALTTAKİ
    ORTAK DESTE YUVASI GÖRSELİ
    TEKRAR GÖRÜNÜR.
  */

  if (
    ortakDesteYuvasi
  ) {

    ortakDesteYuvasi.style.visibility =
      "visible";


    ortakDesteYuvasi.style.opacity =
      "1";
  }
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
    ortakDeste.length ===
    0
  ) {

    kartCekmeAsamasiniBaslat();

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

function v80KartBasliginiBul(kartBilgisi) {

  const dosyaAdi = String(
    kartBilgisi?.dosya ||
    kartBilgisi?.id ||
    "kart"
  )
    .split("/")
    .pop()
    .split("?")[0]
    .replace(/\.[^.]+$/, "")
    .replace(/^[^-]+-eser\d+-/, "")
    .replace(/-kagit-oynayanlar$/, "-kağıt-oynayanlar")
    .replace(/-/g, " ");

  return dosyaAdi
    .split(" ")
    .filter(Boolean)
    .map(kelime => kelime.charAt(0).toLocaleUpperCase("tr-TR") + kelime.slice(1))
    .join(" ") || "Bilinmeyen Kart";
}


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
      ? kaynakKart.getBoundingClientRect()
      : ortakDesteYuvasi.getBoundingClientRect();


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


  /* Kart çekildiğinde yalnız gerçek PNG yüzü gösterilir. */
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
      opacity:
        0
    },
    {
      opacity:
        1,

      duration:
        0.25
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
                MÜZEDE DEPREM
                TEK OTOMATİK ÖZEL KART.
              */

              if (
                kartBilgisi.id ===
                "muzede-deprem"
              ) {

                muzedeDepremiBaslat(
                  kartBilgisi,
                  kart,
                  katman
                );


                return;
              }


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
    oyuncununSanatcilari(
      aktifOyuncu
    );


  const rakip =
    rakipOyuncuNumarasi();


  const rakipSanatcilari =
    oyuncununSanatcilari(
      rakip
    );


  const kendiSanatciIndex =
    kendiSanatcilari.findIndex(
      (sanatci) =>
        sanatci.id ===
        kartBilgisi.sanatci
    );


  const rakipSanatciIndex =
    rakipSanatcilari.findIndex(
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
      kendiSanatciIndex + 1;


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


    if (
      !hedefYuva
    ) {

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


    eseriKoleksiyonaGonder(
      kartBilgisi,
      kartElementi,
      katman,
      hedefYuva,
      aktifOyuncu
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

  eseriCopeGonder(
    kartBilgisi,
    kartElementi,
    katman
  );
}


/* =====================================================
   ESERİN DOĞRU YUVASINI BUL
===================================================== */

function eserinHedefYuvasiniBul(
  oyuncu,
  kartBilgisi
) {

  const sanatcilar =
    oyuncununSanatcilari(
      oyuncu
    );


  const sanatciIndex =
    sanatcilar.findIndex(
      (sanatci) =>
        sanatci.id ===
        kartBilgisi.sanatci
    );


  if (
    sanatciIndex ===
    -1
  ) {

    return null;
  }


  const sanatciSirasi =
    sanatciIndex + 1;


  const eserSirasi =
    kartBilgisi.eserSirasi;


  const selector =
    oyuncu === 1

      ? `.altS${sanatciSirasi}E${eserSirasi}`

      : `.ustS${sanatciSirasi}E${eserSirasi}`;


  return document.querySelector(
    selector
  );
}


/* =====================================================
   ESERİ KOLEKSİYONA GÖNDER
===================================================== */

function eseriKoleksiyonaGonder(
  kartBilgisi,
  kartElementi,
  katman,
  hedefYuva,
  hedefOyuncu = aktifOyuncu,
  tamamlaninca = null
) {

  if (
    !hedefYuva
  ) {

    if (
      tamamlaninca
    ) {

      tamamlaninca();
    }


    return;
  }


  const hedefRect =
    hedefYuva.getBoundingClientRect();


  if (
    katman
  ) {

    gsap.to(
      katman,
      {
        opacity: 0,
        duration: 0.25
      }
    );
  }


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
            String(
              kartBilgisi.eserSirasi
            );


          yerlesenKart.dataset.gercekDosya =
            kartBilgisi.dosya;


          yerlesenKart.dataset.oyuncu =
            String(
              hedefOyuncu
            );


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


          yerlesenKart.addEventListener(
            "click",
            (event) => {

              event.stopPropagation();


              if (
                hedefSecimAktif
              ) {

                hedefSecimTiklandi(
                  yerlesenKart
                );


                return;
              }


              if (
                !kartIncelemeIzniVarMi(
                  yerlesenKart
                )
              ) {

                return;
              }


              kartOnizlemeAc(
                yerlesenKart,
                kartBilgisi.dosya
              );

            }
          );


          oynanisEkrani.appendChild(
            yerlesenKart
          );


          if (
            kartElementi &&
            kartElementi.remove
          ) {

            kartElementi.remove();
          }


          if (
            katman &&
            katman.remove
          ) {

            katman.remove();
          }


          if (
            tamamlaninca
          ) {

            tamamlaninca();


            return;
          }


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
    oyuncununDeposu(
      aktifOyuncu
    );


  const bosYuvalar =
    oyuncununBosDepoYuvalari(
      aktifOyuncu
    );


  /*
    BOŞ KULLANILABİLİR DEPO YUVASI YOKSA
    YENİ ESER ÇÖPE GİDER.
  */

  if (
    bosYuvalar.length ===
    0
  ) {

    eseriCopeGonder(
      kartBilgisi,
      kartElementi,
      katman
    );


    return;
  }


  const hedefYuvaId =
    bosYuvalar[0];


  const hedefYuva =
    document.getElementById(
      hedefYuvaId
    );


  if (
    !hedefYuva
  ) {

    eseriCopeGonder(
      kartBilgisi,
      kartElementi,
      katman
    );


    return;
  }


  const depoVerisi = {
    ...kartBilgisi,
    yuvaId:
      hedefYuvaId
  };


  depoKartlari.push(
    depoVerisi
  );


  const hedefRect =
    hedefYuva
      .getBoundingClientRect();


  if (
    katman
  ) {

    gsap.to(
      katman,
      {
        opacity:
          0,

        duration:
          0.25
      }
    );
  }


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


          depoKarti.src =
            "images/kart-arkasi.png";


          depoKarti.className =
            "depodakiEserKarti";


          depoKarti.dataset.id =
            kartBilgisi.id;


          depoKarti.dataset.gercekDosya =
            kartBilgisi.dosya;


          depoKarti.dataset.sanatci =
            kartBilgisi.sanatci;


          depoKarti.dataset.eserSirasi =
            String(
              kartBilgisi.eserSirasi
            );


          depoKarti.dataset.oyuncu =
            String(
              aktifOyuncu
            );


          depoKarti.dataset.yuvaId =
            hedefYuvaId;


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


              if (
                hedefSecimAktif
              ) {

                hedefSecimTiklandi(
                  depoKarti
                );


                return;
              }


              /*
                NORMALDE SADECE KENDİ
                DEPONA BAKABİLİRSİN.
              */

              if (
                Number(
                  depoKarti.dataset.oyuncu
                ) !==
                aktifOyuncu
              ) {

                return;
              }


              kartOnizlemeAc(
                depoKarti,
                kartBilgisi.dosya
              );

            }
          );


          oynanisEkrani.appendChild(
            depoKarti
          );


          kartElementi.remove();


          if (
            katman
          ) {

            katman.remove();
          }


          turuBitir();

        }
    }
  );
}


/* =====================================================
   DEPODAN KART VERİSİ SİL
===================================================== */

function depodanKartVerisiniSil(
  oyuncu,
  kartId
) {

  const depo =
    oyuncununDeposu(
      oyuncu
    );


  const index =
    depo.findIndex(
      (kart) =>
        kart.id ===
        kartId
    );


  if (
    index !==
    -1
  ) {

    depo.splice(
      index,
      1
    );
  }
}


/* =====================================================
   DEPODAN ESERİ KOLEKSİYONA AKTAR
===================================================== */

function depodakiEseriKoleksiyonaAktar(
  depoElementi,
  hedefOyuncu,
  tamamlaninca = null
) {

  const kartId =
    depoElementi.dataset.id;


  const kaynakOyuncu =
    Number(
      depoElementi.dataset.oyuncu
    );


  const kartBilgisi =
    eserKartlari.find(
      (kart) =>
        kart.id ===
        kartId
    );


  if (
    !kartBilgisi
  ) {

    if (
      tamamlaninca
    ) {

      tamamlaninca();
    }


    return;
  }


  const hedefYuva =
    eserinHedefYuvasiniBul(
      hedefOyuncu,
      kartBilgisi
    );


  if (
    !hedefYuva
  ) {

    if (
      tamamlaninca
    ) {

      tamamlaninca();
    }


    return;
  }


  depodanKartVerisiniSil(
    kaynakOyuncu,
    kartId
  );


  /*
    ÖNCE GERÇEK KART BÜYÜK GÖSTERİLSİN,
    SONRA YUVASINA GİTSİN.
  */

  const kaynakRect =
    depoElementi
      .getBoundingClientRect();


  const gosterimKarti =
    document.createElement(
      "img"
    );


  gosterimKarti.src =
    kartBilgisi.dosya;


  Object.assign(
    gosterimKarti.style,
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
        "70010",

      objectFit:
        "fill",

      pointerEvents:
        "none",

      userSelect:
        "none",

      WebkitUserDrag:
        "none",

      filter:
        "drop-shadow(0 20px 25px rgba(0,0,0,0.7))"
    }
  );


  document.body.appendChild(
    gosterimKarti
  );


  depoElementi.remove();


  const oran =
    kaynakRect.width /
    kaynakRect.height;


  let hedefH =
    window.innerHeight *
    0.66;


  let hedefW =
    hedefH *
    oran;


  if (
    hedefW >
    window.innerWidth * 0.34
  ) {

    hedefW =
      window.innerWidth *
      0.34;


    hedefH =
      hedefW /
      oran;
  }


  const hedefX =
    (
      window.innerWidth -
      hedefW
    ) /
    2;


  const hedefY =
    (
      window.innerHeight -
      hedefH
    ) /
    2;


  gsap.to(
    gosterimKarti,
    {
      left:
        hedefX,

      top:
        hedefY,

      width:
        hedefW,

      height:
        hedefH,

      duration:
        0.45,

      ease:
        "back.out(1.2)",

      onComplete:
        () => {

          setTimeout(
            () => {

              eseriKoleksiyonaGonder(
                kartBilgisi,
                gosterimKarti,
                null,
                hedefYuva,
                hedefOyuncu,
                tamamlaninca
              );

            },
            900
          );

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
  katman,
  turBitsin = true,
  tamamlaninca = null
) {

  const copYuvasi =
    document.getElementById(
      "copYuvasi"
    );


  if (
    !copYuvasi
  ) {

    if (
      kartElementi
    ) {

      kartElementi.remove();
    }


    if (
      katman
    ) {

      katman.remove();
    }


    if (
      tamamlaninca
    ) {

      tamamlaninca();


      return;
    }


    if (
      turBitsin
    ) {

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


  copDeste.push(
    {
      ...kartBilgisi
    }
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


  if (
    katman
  ) {

    gsap.to(
      katman,
      {
        opacity:
          0,

        duration:
          0.25
      }
    );
  }


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

              zIndex:
                12000 +
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


          oynanisEkrani.appendChild(
            copKarti
          );


          kartElementi.remove();


          if (
            katman
          ) {

            katman.remove();
          }


          if (
            tamamlaninca
          ) {

            tamamlaninca();


            return;
          }


          if (
            turBitsin
          ) {

            turuBitir();
          }

        }
    }
  );
}


/* =====================================================
   MASADAKİ ESERİ ÇÖPE GÖNDER
===================================================== */

function masadakiEseriCopeGonder(
  eserElementi,
  tamamlaninca = null
) {

  const kartBilgisi =
    eserKartlari.find(
      (kart) =>
        kart.id ===
        eserElementi.dataset.id
    );


  if (
    !kartBilgisi
  ) {

    if (
      tamamlaninca
    ) {

      tamamlaninca();
    }


    return;
  }


  const rect =
    eserElementi
      .getBoundingClientRect();


  const ucanKart =
    document.createElement(
      "img"
    );


  ucanKart.src =
    kartBilgisi.dosya;


  Object.assign(
    ucanKart.style,
    {
      position:
        "fixed",

      left:
        rect.left +
        "px",

      top:
        rect.top +
        "px",

      width:
        rect.width +
        "px",

      height:
        rect.height +
        "px",

      zIndex:
        "70020",

      objectFit:
        "fill",

      pointerEvents:
        "none"
    }
  );


  document.body.appendChild(
    ucanKart
  );


  eserElementi.remove();


  eseriCopeGonder(
    kartBilgisi,
    ucanKart,
    null,
    false,
    tamamlaninca
  );
}


/* =====================================================
   ÇÖPTEN ESER VERİSİNİ SİL
===================================================== */

function coptenKartSil(
  kartId
) {

  for (
    let i =
      copDeste.length - 1;

    i >= 0;

    i--
  ) {

    if (
      copDeste[i].id ===
      kartId
    ) {

      copDeste.splice(
        i,
        1
      );


      break;
    }
  }


  window.copDeste =
    copDeste;


  /*
    ÇÖPTE BİR KART SİLİNDİĞİNDE
    TÜM GÖRSEL SIRAYI YENİDEN
    HESAPLA.
  */

  copDesteGorseliniYenile();
}


/* =====================================================
   ÇÖPTEN ESERİ KOLEKSİYONA AL
===================================================== */

function coptenEseriKoleksiyonaAl(
  kartBilgisi,
  hedefOyuncu,
  tamamlaninca = null
) {

  const hedefYuva =
    eserinHedefYuvasiniBul(
      hedefOyuncu,
      kartBilgisi
    );


  if (
    !hedefYuva
  ) {

    if (
      tamamlaninca
    ) {

      tamamlaninca();
    }


    return;
  }


  coptenKartSil(
    kartBilgisi.id
  );


  const copElementi =
    Array.from(
      document.querySelectorAll(
        ".coptekiKart"
      )
    ).reverse().find(
      (element) =>
        element.dataset.id ===
        kartBilgisi.id
    );


  const kaynakRect =
    copElementi
      ? copElementi.getBoundingClientRect()
      : document
          .getElementById(
            "copYuvasi"
          )
          .getBoundingClientRect();


  if (
    copElementi
  ) {

    copElementi.remove();
  }


  const ucanKart =
    document.createElement(
      "img"
    );


  ucanKart.src =
    kartBilgisi.dosya;


  Object.assign(
    ucanKart.style,
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
        "70030",

      objectFit:
        "fill",

      pointerEvents:
        "none"
    }
  );


  document.body.appendChild(
    ucanKart
  );


  eseriKoleksiyonaGonder(
    kartBilgisi,
    ucanKart,
    null,
    hedefYuva,
    hedefOyuncu,
    tamamlaninca
  );
}


/* =====================================================
   HEDEF SEÇİM TIKLAMASI
===================================================== */

function hedefSecimTiklandi(
  element
) {

  if (
    !hedefSecimAktif
  ) {

    return;
  }


  if (
    typeof hedefSecimCallback !==
    "function"
  ) {

    return;
  }


  hedefSecimCallback(
    element
  );
}


/* =====================================================
   HEDEF SEÇİMİNİ TEMİZLE
===================================================== */

function hedefSeciminiTemizle() {

  hedefSecimAktif =
    false;


  hedefSecimTipi =
    null;


  hedefSecimCallback =
    null;


  hedefSecimMaksimum =
    0;


  secilenHedefler =
    [];


  document
    .querySelectorAll(
      "[data-hedef-secilebilir='evet']"
    )
    .forEach(
      (element) => {

        element.dataset.hedefSecilebilir =
          "hayir";


        element.style.outline =
          "";
      }
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


  /*
    HEDEF SEÇİM MODUNDA
    NORMAL ÖNİZLEME AÇILMAZ.
  */

  if (
    hedefSecimAktif
  ) {

    return;
  }


  /*
    SAHİBİ OLAN KARTLARDA
    NORMAL İNCELEME İZNİ ŞART.
  */

  if (
    kaynakKart.dataset.oyuncu &&
    !kartIncelemeIzniVarMi(
      kaynakKart
    )
  ) {

    return;
  }


  onizlemeAcik =
    true;


  document.body.classList.add(
    "v79KartOnizlemeAcik"
  );


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


  // Zorunlu ekran temizliğinde de kaynak kartı tekrar görünür yapabilmek için.
  onizlemeKart._kaynakKart =
    kaynakKart;


  onizlemeKart.id =
    "kartOnizlemeKart";


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
      opacity:
        0
    },
    {
      opacity:
        1,

      duration:
        0.25
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


    document.body.classList.remove(
      "v79KartOnizlemeAcik"
    );


    butonSesiCal();


    const guncelKaynakRect =
      kaynakKart
        .getBoundingClientRect();


    gsap.to(
      katman,
      {
        opacity:
          0,

        duration:
          0.25
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
   ÖZEL KART KARAR EKRANINI TEMİZLE
===================================================== */

function ozelKartKararEkraniniTemizle() {

  const kutu =
    document.getElementById(
      "ozelKartKararButonlari"
    );


  if (
    kutu
  ) {

    kutu.remove();
  }


  const uyari =
    document.getElementById(
      "ozelKartUyariMetni"
    );


  if (
    uyari
  ) {

    uyari.remove();
  }
}


/* =====================================================
   ÖZEL KART KARAR BUTONU OLUŞTUR
===================================================== */

function ozelKartKararButonuOlustur(
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
        "0 6px 15px rgba(0,0,0,0.4)",

      transition:
        "transform 0.12s ease, filter 0.12s ease, opacity 0.2s ease"
    }
  );


  buton.addEventListener(
    "pointerdown",
    () => {

      if (
        buton.disabled
      ) {

        return;
      }


      buton.style.transform =
        "scale(0.94) translateY(2px)";


      buton.style.filter =
        "brightness(0.82)";
    }
  );


  function birak() {

    buton.style.transform =
      "";


    buton.style.filter =
      "";
  }


  buton.addEventListener(
    "pointerup",
    birak
  );


  buton.addEventListener(
    "pointercancel",
    birak
  );


  buton.addEventListener(
    "pointerleave",
    birak
  );


  return buton;
}


/* =====================================================
   ÖZEL KART KARAR EKRANI
===================================================== */

function ozelKartKararlariniGoster(
  kartBilgisi,
  kartElementi,
  katman
) {

  ozelKartKararEkraniniTemizle();


  /*
    MÜZEDE DEPREMDE
    KARAR EKRANI YOK.

    PART 3'TE ZATEN
    OTOMATİK AYRILIYOR.
  */

  if (
    kartBilgisi.id ===
    "muzede-deprem"
  ) {

    muzedeDepremiBaslat(
      kartBilgisi,
      kartElementi,
      katman
    );


    return;
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
      position:
        "fixed",

      left:
        "50%",

      bottom:
        "5%",

      transform:
        "translateX(-50%)",

      display:
        "flex",

      gap:
        "14px",

      justifyContent:
        "center",

      alignItems:
        "center",

      flexWrap:
        "wrap",

      width:
        "92%",

      zIndex:
        "60020",

      pointerEvents:
        "auto"
    }
  );


  document.body.appendChild(
    kutu
  );


  const kullanButonu =
    ozelKartKararButonuOlustur(
      "KULLAN"
    );


  const yuvayaKoyButonu =
    ozelKartKararButonuOlustur(
      "ÖZEL KART YUVANA KOY"
    );


  const copeAtButonu =
    ozelKartKararButonuOlustur(
      "ÇÖPE AT"
    );


  kutu.appendChild(
    kullanButonu
  );


  kutu.appendChild(
    yuvayaKoyButonu
  );


  kutu.appendChild(
    copeAtButonu
  );


  /* =========================
     KULLANILABİLİRLİK
  ========================= */

  const kullanilabilir =
    ozelKartKullanilabilirMi(
      kartBilgisi
    );


  if (
    !kullanilabilir
  ) {

    kullanButonu.disabled =
      true;


    kullanButonu.style.opacity =
      "0.30";


    kullanButonu.style.cursor =
      "default";


    kullanButonu.style.filter =
      "grayscale(0.6)";
  }


  /* =========================
     UYARI METNİ
  ========================= */

  const uyariMetni =
    ozelKartUyariMetni(
      kartBilgisi
    );


  if (
    uyariMetni
  ) {

    const uyari =
      document.createElement(
        "div"
      );


    uyari.id =
      "ozelKartUyariMetni";


    uyari.textContent =
      uyariMetni;


    Object.assign(
      uyari.style,
      {
        position:
          "fixed",

        left:
          "50%",

        bottom:
          "13%",

        transform:
          "translateX(-50%)",

        maxWidth:
          "80%",

        padding:
          "10px 18px",

        borderRadius:
          "12px",

        background:
          "rgba(36, 24, 12, 0.92)",

        border:
          "2px solid #c7a15a",

        color:
          "#f5e7c4",

        fontFamily:
          'Georgia, "Times New Roman", serif',

        fontSize:
          "clamp(13px, 1vw, 19px)",

        fontWeight:
          "bold",

        textAlign:
          "center",

        zIndex:
          "60021",

        pointerEvents:
          "none",

        boxShadow:
          "0 5px 15px rgba(0,0,0,0.45)"
      }
    );


    document.body.appendChild(
      uyari
    );
  }


  /* =========================
     KULLAN
  ========================= */

  kullanButonu.addEventListener(
    "click",
    () => {

      if (
        kullanButonu.disabled
      ) {

        return;
      }


      butonSesiCal();


      ozelKartKararEkraniniTemizle();


      ozelKartiKullan(
        kartBilgisi,
        kartElementi,
        katman
      );
    }
  );


  /* =========================
     YUVAYA KOY
  ========================= */

  yuvayaKoyButonu.addEventListener(
    "click",
    () => {

      butonSesiCal();


      ozelKartKararEkraniniTemizle();


      const eldekiKartlar =
        aktifOyuncununOzelKartlari();


      /*
        0 VEYA 1 KART VARSA
        NORMAL ŞEKİLDE YUVAYA KOY.
      */

      if (
        eldekiKartlar.length <
        2
      ) {

        ozelKartiYuvayaGonder(
          kartBilgisi,
          kartElementi,
          katman
        );


        return;
      }


      /*
        İKİ YUVA DA DOLUYSA
        YENİ KARTI SAKLAMAK
        İÇİN ESKİ KARTLARDAN
        BİRİ ÇÖPE ATILMALI.
      */

      ozelKartDegistirmeEkraniAc(
        kartBilgisi,
        kartElementi,
        katman
      );
    }
  );


  /* =========================
     ÇÖPE AT
  ========================= */

  copeAtButonu.addEventListener(
    "click",
    () => {

      butonSesiCal();


      ozelKartKararEkraniniTemizle();


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
   ÖZEL KART YUVA ID'LERİ
===================================================== */

function oyuncununOzelKartYuvaIdleri(
  oyuncu
) {

  return oyuncu === 1

    ? [
        "altOzelKartBir",
        "altOzelKartIki"
      ]

    : [
        "ustOzelKartBir",
        "ustOzelKartIki"
      ];
}


/* =====================================================
   ÖZEL KART YUVASI DOLU MU?
===================================================== */

function ozelKartYuvasiDoluMu(
  yuvaId
) {

  return Boolean(
    document.querySelector(
      `.oyuncuOzelKartKarti[data-yuva-id="${yuvaId}"]`
    )
  );
}


/* =====================================================
   BOŞ ÖZEL KART YUVASINI BUL
===================================================== */

function bosOzelKartYuvasiBul(
  oyuncu
) {

  const yuvalar =
    oyuncununOzelKartYuvaIdleri(
      oyuncu
    );


  return yuvalar.find(
    (yuvaId) =>
      !ozelKartYuvasiDoluMu(
        yuvaId
      )
  ) || null;
}


/* =====================================================
   ÖZEL KARTI YUVAYA GÖNDER
===================================================== */

function ozelKartiYuvayaGonder(
  kartBilgisi,
  kartElementi,
  katman,
  belirliYuvaId = null,
  tamamlaninca = null
) {

  const oyuncu =
    aktifOyuncu;


  const oyuncuOzelKartlari =
    oyuncununOzelKartlari(
      oyuncu
    );


  const hedefYuvaId =
    belirliYuvaId ||
    bosOzelKartYuvasiBul(
      oyuncu
    );


  if (
    !hedefYuvaId
  ) {

    console.warn(
      "Boş özel kart yuvası bulunamadı."
    );


    ozelKartKararlariniGoster(
      kartBilgisi,
      kartElementi,
      katman
    );


    return;
  }


  const hedefYuva =
    document.getElementById(
      hedefYuvaId
    );


  if (
    !hedefYuva
  ) {

    console.error(
      "Özel kart yuvası HTML'de bulunamadı:",
      hedefYuvaId
    );


    return;
  }


  const kayit = {
    ...kartBilgisi,
    yuvaId:
      hedefYuvaId
  };


  oyuncuOzelKartlari.push(
    kayit
  );


  const hedefRect =
    hedefYuva
      .getBoundingClientRect();


  if (
    katman
  ) {

    gsap.to(
      katman,
      {
        opacity:
          0,

        duration:
          0.25
      }
    );
  }


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


          kapaliKart.src =
            "images/kart-arkasi.png";


          kapaliKart.className =
            "oyuncuOzelKartKarti";


          kapaliKart.dataset.id =
            kartBilgisi.id;


          kapaliKart.dataset.tip =
            "ozel";


          kapaliKart.dataset.gercekDosya =
            kartBilgisi.dosya;


          kapaliKart.dataset.oyuncu =
            String(
              oyuncu
            );


          kapaliKart.dataset.yuvaId =
            hedefYuvaId;


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


          kapaliKart.addEventListener(
            "click",
            (event) => {

              event.stopPropagation();


              /*
                HEDEF SEÇİM MODUNDA
                NORMAL İNCELEME YOK.
              */

              if (
                hedefSecimAktif
              ) {

                hedefSecimTiklandi(
                  kapaliKart
                );


                return;
              }


              /*
                SADECE AKTİF OYUNCU
                KENDİ ÖZEL KARTINA
                BAKABİLİR.
              */

              if (
                Number(
                  kapaliKart.dataset.oyuncu
                ) !==
                aktifOyuncu
              ) {

                return;
              }


              kartOnizlemeAc(
                kapaliKart,
                kartBilgisi.dosya
              );
            }
          );


          oynanisEkrani.appendChild(
            kapaliKart
          );


          if (
            kartElementi &&
            kartElementi.remove
          ) {

            kartElementi.remove();
          }


          if (
            katman
          ) {

            katman.remove();
          }


          bekleyenOzelKart =
            null;


          if (
            tamamlaninca
          ) {

            tamamlaninca();


            return;
          }


          turuBitir();
        }
    }
  );
}


/* =====================================================
   ÖZEL KART VERİSİNİ OYUNCUDAN SİL
===================================================== */

function oyuncudanOzelKartSil(
  oyuncu,
  kartId,
  yuvaId = null
) {

  const kartlar =
    oyuncununOzelKartlari(
      oyuncu
    );


  const index =
    kartlar.findIndex(
      (kart) => {

        if (
          kart.id !==
          kartId
        ) {

          return false;
        }


        if (
          yuvaId &&
          kart.yuvaId !==
          yuvaId
        ) {

          return false;
        }


        return true;
      }
    );


  if (
    index ===
    -1
  ) {

    return null;
  }


  return kartlar.splice(
    index,
    1
  )[0];
}


/* =====================================================
   ÖZEL KART DEĞİŞTİRME EKRANI
===================================================== */

function ozelKartDegistirmeEkraniAc(
  yeniKartBilgisi,
  yeniKartElementi,
  katman
) {

  const eskiKatman =
    document.getElementById(
      "ozelKartDegistirmeKatmani"
    );


  if (
    eskiKatman
  ) {

    eskiKatman.remove();
  }


  const katmanSecim =
    document.createElement(
      "div"
    );


  katmanSecim.id =
    "ozelKartDegistirmeKatmani";


  Object.assign(
    katmanSecim.style,
    {
      position:
        "fixed",

      inset:
        "0",

      width:
        "100vw",

      height:
        "100vh",

      zIndex:
        "70000",

      background:
        "rgba(0,0,0,0.68)",

      backdropFilter:
        "blur(3px)",

      WebkitBackdropFilter:
        "blur(3px)",

      display:
        "flex",

      flexDirection:
        "column",

      justifyContent:
        "center",

      alignItems:
        "center",

      gap:
        "24px"
    }
  );


  const baslik =
    document.createElement(
      "div"
    );


  baslik.textContent =
    "YERİNE ÇÖPE ATACAĞIN ÖZEL KARTI SEÇ";


  Object.assign(
    baslik.style,
    {
      color:
        "#f5e7c4",

      fontFamily:
        'Georgia, "Times New Roman", serif',

      fontWeight:
        "bold",

      fontSize:
        "clamp(16px, 1.5vw, 28px)",

      textAlign:
        "center"
    }
  );


  katmanSecim.appendChild(
    baslik
  );


  const kartKutusu =
    document.createElement(
      "div"
    );


  Object.assign(
    kartKutusu.style,
    {
      display:
        "flex",

      justifyContent:
        "center",

      alignItems:
        "center",

      gap:
        "24px"
    }
  );


  katmanSecim.appendChild(
    kartKutusu
  );


  document.body.appendChild(
    katmanSecim
  );


  const kartElementleri =
    Array.from(
      document.querySelectorAll(
        `.oyuncuOzelKartKarti[data-oyuncu="${aktifOyuncu}"]`
      )
    );


  kartElementleri.forEach(
    (eskiKartElementi) => {

      const kartBilgisi =
        aktifOyuncununOzelKartlari()
          .find(
            (kart) =>
              kart.id ===
                eskiKartElementi.dataset.id &&

              kart.yuvaId ===
                eskiKartElementi.dataset.yuvaId
          );


      if (
        !kartBilgisi
      ) {

        return;
      }


      const secimKarti =
        document.createElement(
          "img"
        );


      secimKarti.src =
        kartBilgisi.dosya;


      Object.assign(
        secimKarti.style,
        {
          height:
            "min(46vh, 430px)",

          width:
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
            "drop-shadow(0 15px 20px rgba(0,0,0,0.7))"
        }
      );


      kartKutusu.appendChild(
        secimKarti
      );


      secimKarti.addEventListener(
        "click",
        () => {

          butonSesiCal();


          const eskiYuvaId =
            eskiKartElementi.dataset.yuvaId;


          oyuncudanOzelKartSil(
            aktifOyuncu,
            kartBilgisi.id,
            eskiYuvaId
          );


          eskiKartElementi.remove();


          katmanSecim.remove();


          /*
            ESKİ KARTI ÇÖPE AT,
            AMA TURU BİTİRME.

            SONRA YENİ KARTI
            AYNI YUVAYA KOY.
          */

          const sahteKaynak =
            document.createElement(
              "img"
            );


          const eskiYuva =
            document.getElementById(
              eskiYuvaId
            );


          const eskiRect =
            eskiYuva
              .getBoundingClientRect();


          sahteKaynak.src =
            kartBilgisi.dosya;


          Object.assign(
            sahteKaynak.style,
            {
              position:
                "fixed",

              left:
                eskiRect.left +
                "px",

              top:
                eskiRect.top +
                "px",

              width:
                eskiRect.width +
                "px",

              height:
                eskiRect.height +
                "px",

              zIndex:
                "70010",

              objectFit:
                "fill",

              pointerEvents:
                "none"
            }
          );


          document.body.appendChild(
            sahteKaynak
          );


          ozelKartiCopeGonder(
            kartBilgisi,
            sahteKaynak,
            null,
            false,
            () => {

              ozelKartiYuvayaGonder(
                yeniKartBilgisi,
                yeniKartElementi,
                katman,
                eskiYuvaId
              );

            }
          );
        }
      );

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


  if (
    !copYuvasi
  ) {

    if (
      kartElementi
    ) {

      kartElementi.remove();
    }


    if (
      katman
    ) {

      katman.remove();
    }


    bekleyenOzelKart =
      null;


    if (
      tamamlaninca
    ) {

      tamamlaninca();


      return;
    }


    if (
      turBitsin
    ) {

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


  copDeste.push(
    {
      ...kartBilgisi,
      tip: "ozel"
    }
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


  if (
    katman
  ) {

    gsap.to(
      katman,
      {
        opacity:
          0,

        duration:
          0.25
      }
    );
  }


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
                12000 +
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


          oynanisEkrani.appendChild(
            copKarti
          );


          if (
            kartElementi
          ) {

            kartElementi.remove();
          }


          if (
            katman
          ) {

            katman.remove();
          }


          bekleyenOzelKart =
            null;


          console.log(
            "ÇÖPLÜK:",
            copDeste
          );


          if (
            tamamlaninca
          ) {

            tamamlaninca();


            return;
          }


          if (
            turBitsin
          ) {

            turuBitir();
          }

        }
    }
  );
}


/* =====================================================
   KULLANILMIŞ ÖZEL KARTI ÖNCE ÇÖPE GÖNDER
===================================================== */

function kullanilanOzelKartiCopeAt(
  kartBilgisi,
  kartElementi,
  katman,
  tamamlaninca
) {

  ozelKartiCopeGonder(
    kartBilgisi,
    kartElementi,
    katman,
    false,
    tamamlaninca
  );
}


/* =====================================================
   ÖZEL KARTI OYUN DIŞINA ÇIKAR
===================================================== */

function ozelKartiOturumDisinaCikar(
  kartBilgisi,
  kartElementi,
  katman,
  tamamlaninca = null
) {

  oturumDisiOzelKartlar.push(
    {
      ...kartBilgisi
    }
  );


  window.oturumDisiOzelKartlar =
    oturumDisiOzelKartlar;


  if (
    katman
  ) {

    gsap.to(
      katman,
      {
        opacity:
          0,

        duration:
          0.25
      }
    );
  }


  gsap.to(
    kartElementi,
    {
      opacity:
        0,

      scale:
        0.6,

      y:
        -80,

      rotation:
        8,

      duration:
        0.55,

      ease:
        "power2.in",

      onComplete:
        () => {

          kartElementi.remove();


          if (
            katman
          ) {

            katman.remove();
          }


          bekleyenOzelKart =
            null;


          if (
            tamamlaninca
          ) {

            tamamlaninca();
          }

        }
    }
  );
}


/* =====================================================
   ÖZEL KARTI KULLAN — ANA YÖNLENDİRİCİ
===================================================== */

function ozelKartiKullan(
  kartBilgisi,
  kartElementi,
  katman
) {

  switch (
    kartBilgisi.id
  ) {

    case "arti-iki-kart":

      artiIkiKartKullan(
        kartBilgisi,
        kartElementi,
        katman
      );

      return;


    case "arkeolojik-kazi":

      arkeolojikKaziKullan(
        kartBilgisi,
        kartElementi,
        katman
      );

      return;


    case "fransa-takimi":

      fransaTakimiKullan(
        kartBilgisi,
        kartElementi,
        katman
      );

      return;


    case "dunya-takimi":

      dunyaTakimiKullan(
        kartBilgisi,
        kartElementi,
        katman
      );

      return;


    case "hollanda-takimi":

      hollandaTakimiKullan(
        kartBilgisi,
        kartElementi,
        katman
      );

      return;


    /*
      DİĞER ÖZEL KARTLAR
      SONRAKİ PARTLARDA
      BURAYA BAĞLANACAK.
    */

    default:

      console.log(
        "Özel kart etkisi sonraki partta:",
        kartBilgisi.id
      );


      ozelKartiCopeGonder(
        kartBilgisi,
        kartElementi,
        katman,
        true
      );

      return;
  }
}


/* =====================================================
   +2 KART ÇEK
===================================================== */

function artiIkiKartKullan(
  kartBilgisi,
  kartElementi,
  katman
) {

  /*
    DESTEKTE KAÇ KART VARSA
    EN FAZLA O KADAR HAK EKLENİR.

    ÖRNEK:
    +2 GELDİ AMA DESTEKTE
    SADECE 1 KART VARSA
    SADECE +1 HAK KAZANILIR.
  */

  const kazanilanHak =
    Math.min(
      2,
      ortakDeste.length
    );


  ekstraKartCekmeSayisi +=
    kazanilanHak;


  console.log(
    "+2 KART ÇEK:",
    kazanilanHak,
    "ekstra çekiş hakkı eklendi."
  );


  kullanilanOzelKartiCopeAt(
    kartBilgisi,
    kartElementi,
    katman,
    () => {

      if (
        kazanilanHak <= 0
      ) {

        turuBitir();

        return;
      }


      kartCekmeKilidi =
        false;


      secimYazisiGoster(
        `${aktifOyuncu}. OYUNCU — ${kazanilanHak} EKSTRA KART ÇEK`
      );


      kartCekmeAsamasiniBaslat();
    }
  );
}


/* =====================================================
   ARKEOLOJİK KAZI
===================================================== */

function arkeolojikKaziKullan(
  kartBilgisi,
  kartElementi,
  katman
) {

  if (
    ortakDeste.length === 0
  ) {

    /*
      NORMALDE KULLAN BUTONU
      ZATEN PASİF OLUR.

      BU KONTROL EK GÜVENLİK.
    */

    ozelKartKararlariniGoster(
      kartBilgisi,
      kartElementi,
      katman
    );


    return;
  }


  kullanilanOzelKartiCopeAt(
    kartBilgisi,
    kartElementi,
    katman,
    () => {

      /*
        DESTE SONU = ARRAY'İN BAŞI.

        NORMAL ÇEKİŞTE pop()
        KULLANDIĞIMIZ İÇİN
        ALT KART shift() İLE ALINIR.
      */

      const cekilenKart =
        ortakDeste.shift();


      window.ortakDeste =
        ortakDeste;


      console.log(
        "ARKEOLOJİK KAZI — DESTE ALTINDAN:",
        cekilenKart
      );


      kartCekmeKilidi =
        true;


      secimYazisiGoster(
        "ARKEOLOJİK KAZI — DESTENİN ALTINDAKİ KART ÇEKİLDİ"
      );


      cekilenKartiBuyukGoster(
        cekilenKart
      );
    }
  );
}


/* =====================================================
   TAKIM SANATÇI SAYISI
===================================================== */

function takimSanatciSayisi(
  takimId,
  oyuncu = aktifOyuncu
) {

  const secimler =
    oyuncu === 1
      ? oyuncu1Secimleri
      : oyuncu2Secimleri;


  let takimSanatcilari =
    [];


  switch (
    takimId
  ) {

    case "fransa":

      takimSanatcilari = [
        "monet",
        "cezanne",
        "millet"
      ];

      break;


    case "hollanda":

      takimSanatcilari = [
        "van-gogh",
        "vermeer",
        "rembrandt"
      ];

      break;


    case "dunya":

      takimSanatcilari = [
        "osman-hamdi",
        "mondrian",
        "munch"
      ];

      break;


    case "klasikler":

      takimSanatcilari = [
        "leonardo",
        "durer",
        "velazquez"
      ];

      break;
  }


  return secimler.filter(
    (sanatci) =>
      takimSanatcilari.includes(
        sanatci.id
      )
  ).length;
}


/* =====================================================
   FRANSA TAKIMI
===================================================== */

function fransaTakimiKullan(
  kartBilgisi,
  kartElementi,
  katman
) {

  const fransizSayisi =
    takimSanatciSayisi(
      "fransa"
    );


  /*
    1 FRANSA = +1
    2 FRANSA = +2
    3 FRANSA = +3
  */

  const kazanilanHak =
    Math.min(
      fransizSayisi,
      ortakDeste.length
    );


  if (
    fransizSayisi <= 0
  ) {

    ozelKartKararlariniGoster(
      kartBilgisi,
      kartElementi,
      katman
    );


    return;
  }


  /*
    İlk kart aşağıda hemen çekilir. Kuyrukta yalnızca
    kalan haklar tutulur. Böylece toplam çekiş sayısı Fransız
    sanatçı sayısına birebir eşit olur.
  */
  ekstraKartCekmeSayisi =
    Math.max(
      0,
      kazanilanHak - 1
    );


  console.log(
    "FRANSA TAKIMI:",
    fransizSayisi,
    "sanatçı →",
    kazanilanHak,
    "ekstra kart."
  );


  kullanilanOzelKartiCopeAt(
    kartBilgisi,
    kartElementi,
    katman,
    () => {

      if (
        kazanilanHak <= 0
      ) {

        turuBitir();

        return;
      }


      kartCekmeKilidi =
        false;


      secimYazisiGoster(
        `FRANSA TAKIMI — ${kazanilanHak} EKSTRA KART ÇEK`
      );


      kartCekmeAsamasiniBaslat();
    }
  );
}


/* =====================================================
   DÜNYA TAKIMI
===================================================== */

function dunyaTakimiKullan(
  kartBilgisi,
  kartElementi,
  katman
) {

  const dunyaSayisi =
    takimSanatciSayisi(
      "dunya"
    );


  if (
    dunyaSayisi <= 0 ||
    ortakDeste.length === 0
  ) {

    ozelKartKararlariniGoster(
      kartBilgisi,
      kartElementi,
      katman
    );


    return;
  }


  /*
    1 DÜNYA = 2 KARTA BAK
    2 DÜNYA = 3 KARTA BAK
    3 DÜNYA = 4 KARTA BAK

    DESTEDE DAHA AZ KART VARSA
    MEVCUT KART SAYISI KADAR BAKILIR.
  */

  const bakilacakKartSayisi =
    Math.min(
      dunyaSayisi + 1,
      ortakDeste.length
    );


  kullanilanOzelKartiCopeAt(
    kartBilgisi,
    kartElementi,
    katman,
    () => {

      dunyaTakimiKartSecimEkraniAc(
        bakilacakKartSayisi
      );
    }
  );
}


/* =====================================================
   DÜNYA TAKIMI — KART SEÇİM EKRANI
===================================================== */

function dunyaTakimiKartSecimEkraniAc(
  kartSayisi
) {

  const eskiKatman =
    document.getElementById(
      "dunyaTakimiSecimKatmani"
    );


  if (
    eskiKatman
  ) {

    eskiKatman.remove();
  }


  /*
    DESTE ÜSTÜ ARRAY'İN SONU.

    SON N KARTA BAKIYORUZ.
  */

  const baslangicIndex =
    Math.max(
      0,
      ortakDeste.length -
      kartSayisi
    );


  const bakilanKartlar =
    ortakDeste.slice(
      baslangicIndex
    );


  const secimKatmani =
    document.createElement(
      "div"
    );


  secimKatmani.id =
    "dunyaTakimiSecimKatmani";


  Object.assign(
    secimKatmani.style,
    {
      position:
        "fixed",

      inset:
        "0",

      zIndex:
        "71000",

      background:
        "rgba(0,0,0,0.78)",

      backdropFilter:
        "blur(4px)",

      WebkitBackdropFilter:
        "blur(4px)",

      display:
        "flex",

      flexDirection:
        "column",

      alignItems:
        "center",

      justifyContent:
        "center",

      gap:
        "24px"
    }
  );


  const baslik =
    document.createElement(
      "div"
    );


  baslik.textContent =
    `${bakilanKartlar.length} KARTTAN 1 TANESİNİ SEÇ`;


  Object.assign(
    baslik.style,
    {
      color:
        "#f5e7c4",

      fontFamily:
        'Georgia, "Times New Roman", serif',

      fontSize:
        "clamp(17px, 1.5vw, 30px)",

      fontWeight:
        "bold",

      textAlign:
        "center"
    }
  );


  const kartKutusu =
    document.createElement(
      "div"
    );


  Object.assign(
    kartKutusu.style,
    {
      display:
        "flex",

      justifyContent:
        "center",

      alignItems:
        "center",

      gap:
        "18px",

      maxWidth:
        "94vw",

      flexWrap:
        "wrap"
    }
  );


  secimKatmani.appendChild(
    baslik
  );


  secimKatmani.appendChild(
    kartKutusu
  );


  document.body.appendChild(
    secimKatmani
  );


  let secildi =
    false;


  bakilanKartlar.forEach(
    (kartBilgisi) => {

      const kart =
        document.createElement(
          "img"
        );


      kart.src =
        kartBilgisi.dosya;


      Object.assign(
        kart.style,
        {
          height:
            "min(48vh, 430px)",

          width:
            "auto",

          maxWidth:
            "21vw",

          objectFit:
            "contain",

          cursor:
            "pointer",

          touchAction:
            "manipulation",

          userSelect:
            "none",

          WebkitUserDrag:
            "none",

          filter:
            "drop-shadow(0 15px 20px rgba(0,0,0,0.70))"
        }
      );


      kartKutusu.appendChild(
        kart
      );


      kart.addEventListener(
        "click",
        () => {

          if (
            secildi
          ) {

            return;
          }


          secildi =
            true;


          butonSesiCal();


          /*
            SEÇİLEN KARTI
            GERÇEK DESTEDEN SİL.
          */

          const gercekIndex =
            ortakDeste.findIndex(
              (desteKarti) =>
                desteKarti ===
                kartBilgisi
            );


          if (
            gercekIndex !==
            -1
          ) {

            ortakDeste.splice(
              gercekIndex,
              1
            );
          }


          window.ortakDeste =
            ortakDeste;


          secimKatmani.remove();


          secimYazisiGoster(
            "DÜNYA TAKIMI — SEÇİLEN KART ÇEKİLDİ"
          );


          /*
            SEÇİLMEYEN KARTLAR
            DESTEDEN ÇIKARILMADIĞI İÇİN
            AYNI KONUMLARINDA KALIR.
          */

          cekilenKartiBuyukGoster(
            kartBilgisi
          );
        }
      );

    }
  );
}


/* =====================================================
   ÇÖPTEKİ ESERLERİ GETİR
===================================================== */

function coptekiEserleriGetir() {

  return copDeste.filter(
    (kart) =>
      kart.tip ===
      "eser"
  );
}


/* =====================================================
   HOLLANDA TAKIMI
===================================================== */

function hollandaTakimiKullan(
  kartBilgisi,
  kartElementi,
  katman
) {

  const hollandaSayisi =
    takimSanatciSayisi(
      "hollanda"
    );


  const coptekiEserler =
    coptekiEserleriGetir();


  if (
    hollandaSayisi <= 0 ||
    coptekiEserler.length === 0
  ) {

    ozelKartKararlariniGoster(
      kartBilgisi,
      kartElementi,
      katman
    );


    return;
  }


  kullanilanOzelKartiCopeAt(
    kartBilgisi,
    kartElementi,
    katman,
    () => {

      /*
        1 HOLLANDA:
        ÇÖPTEKİ EN SON ESER
        OTOMATİK ALINIR.

        2 HOLLANDA:
        İSTEDİĞİN 1 ESER.

        3 HOLLANDA:
        İSTEDİĞİN 2 ESER.
      */

      if (
        hollandaSayisi ===
        1
      ) {

        const sonEser =
          copDeste
            .slice()
            .reverse()
            .find(
              (kart) =>
                kart.tip ===
                "eser"
            );


        if (
          !sonEser
        ) {

          turuBitir();

          return;
        }


        coptenEserCikar(
          sonEser
        );


        secimYazisiGoster(
          "HOLLANDA TAKIMI — ÇÖPTEKİ EN SON ESER ALINDI"
        );


        cekilenKartiBuyukGoster(
          sonEser
        );


        return;
      }


      const alinacakAdet =
        hollandaSayisi >= 3
          ? Math.min(
              2,
              coptekiEserler.length
            )
          : 1;


      hollandaCopSecimEkraniAc(
        alinacakAdet
      );
    }
  );
}


/* =====================================================
   ÇÖPTEN ESER ÇIKAR
===================================================== */

function coptenEserCikar(
  kartBilgisi
) {

  const index =
    copDeste.findIndex(
      (kart) =>
        kart ===
        kartBilgisi ||
        kart.id ===
        kartBilgisi.id
  );


  if (
    index ===
    -1
  ) {

    return false;
  }


  copDeste.splice(
    index,
    1
  );


  window.copDeste =
    copDeste;


  /*
    EKRANDAKİ İLGİLİ
    ÇÖP KARTINI DA SİL.
  */

  const copKartlari =
    Array.from(
      document.querySelectorAll(
        ".coptekiKart"
      )
    );


  const hedefElement =
    copKartlari
      .slice()
      .reverse()
      .find(
        (element) =>
          element.dataset.id ===
          kartBilgisi.id
      );


  if (
    hedefElement
  ) {

    hedefElement.remove();
  }


  copDesteGorseliniYenile();


  return true;
}


/* =====================================================
   ÇÖP DESTE GÖRSELİNİ YENİLE
===================================================== */

function copDesteGorseliniYenile() {

  const copYuvasi =
    document.getElementById(
      "copYuvasi"
    );


  if (
    !copYuvasi
  ) {

    return;
  }


  const sahneRect =
    oynanisEkrani
      .getBoundingClientRect();


  const hedefRect =
    copYuvasi
      .getBoundingClientRect();


  const copKartlari =
    Array.from(
      document.querySelectorAll(
        ".coptekiKart"
      )
    );


  copKartlari.forEach(
    (element) => {

      const kartBilgisi =
        copDeste.find(
          (kart) =>
            kart.id ===
            element.dataset.id
        );


      if (
        !kartBilgisi
      ) {

        element.remove();
      }
    }
  );


  const kalanElementler =
    Array.from(
      document.querySelectorAll(
        ".coptekiKart"
      )
    );


  kalanElementler.forEach(
    (element) => {

      const index =
        copDeste.findIndex(
          (kart) =>
            kart.id ===
            element.dataset.id
        );


      if (
        index ===
        -1
      ) {

        return;
      }


      const kaymaX =
        index *
        0.45;


      const kaymaY =
        index *
        -0.35;


      element.style.left =
        (
          hedefRect.left -
          sahneRect.left +
          kaymaX
        ) +
        "px";


      element.style.top =
        (
          hedefRect.top -
          sahneRect.top +
          kaymaY
        ) +
        "px";


      element.style.zIndex =
        String(
          40 +
          index
        );


      element.style.transform =
        `rotate(${(
          index %
          5 -
          2
        ) * 0.35}deg)`;
    }
  );
}


/* =====================================================
   HOLLANDA — ÇÖPTEN ESER SEÇ
===================================================== */

function hollandaCopSecimEkraniAc(
  alinacakAdet
) {

  const mevcutEserler =
    coptekiEserleriGetir();


  const gercekAdet =
    Math.min(
      alinacakAdet,
      mevcutEserler.length
    );


  if (
    gercekAdet <= 0
  ) {

    turuBitir();

    return;
  }


  const secimKatmani =
    document.createElement(
      "div"
    );


  secimKatmani.id =
    "hollandaCopSecimKatmani";


  Object.assign(
    secimKatmani.style,
    {
      position:
        "fixed",

      inset:
        "0",

      zIndex:
        "72000",

      background:
        "rgba(0,0,0,0.80)",

      backdropFilter:
        "blur(4px)",

      WebkitBackdropFilter:
        "blur(4px)",

      display:
        "flex",

      flexDirection:
        "column",

      justifyContent:
        "center",

      alignItems:
        "center",

      gap:
        "20px",

      padding:
        "3%"
    }
  );


  const baslik =
    document.createElement(
      "div"
    );


  baslik.textContent =
    gercekAdet === 1
      ? "ÇÖPTEN 1 ESER SEÇ"
      : `ÇÖPTEN ${gercekAdet} ESER SEÇ`;


  Object.assign(
    baslik.style,
    {
      color:
        "#f5e7c4",

      fontFamily:
        'Georgia, "Times New Roman", serif',

      fontSize:
        "clamp(17px, 1.5vw, 30px)",

      fontWeight:
        "bold",

      textAlign:
        "center"
    }
  );


  const kartKutusu =
    document.createElement(
      "div"
    );


  Object.assign(
    kartKutusu.style,
    {
      display:
        "flex",

      justifyContent:
        "center",

      alignItems:
        "center",

      flexWrap:
        "wrap",

      gap:
        "14px",

      maxWidth:
        "96vw",

      maxHeight:
        "76vh",

      overflowY:
        "auto"
    }
  );


  secimKatmani.appendChild(
    baslik
  );


  secimKatmani.appendChild(
    kartKutusu
  );


  document.body.appendChild(
    secimKatmani
  );


  const secilenler =
    [];


  mevcutEserler.forEach(
    (kartBilgisi) => {

      const kart =
        document.createElement(
          "img"
        );


      kart.src =
        kartBilgisi.dosya;


      Object.assign(
        kart.style,
        {
          height:
            "min(32vh, 310px)",

          width:
            "auto",

          cursor:
            "pointer",

          touchAction:
            "manipulation",

          userSelect:
            "none",

          WebkitUserDrag:
            "none",

          border:
            "3px solid transparent",

          borderRadius:
            "8px",

          filter:
            "drop-shadow(0 10px 12px rgba(0,0,0,0.65))"
        }
      );


      kartKutusu.appendChild(
        kart
      );


      kart.addEventListener(
        "click",
        () => {

          if (
            secilenler.includes(
              kartBilgisi
            )
          ) {

            const index =
              secilenler.indexOf(
                kartBilgisi
              );


            secilenler.splice(
              index,
              1
            );


            kart.style.borderColor =
              "transparent";


            return;
          }


          if (
            secilenler.length >=
            gercekAdet
          ) {

            return;
          }


          secilenler.push(
            kartBilgisi
          );


          kart.style.borderColor =
            "#e5c266";
        }
      );
    }
  );


  const onayButonu =
    ozelKartKararButonuOlustur(
      "SEÇİMİ ONAYLA"
    );


  onayButonu.disabled =
    true;


  onayButonu.style.opacity =
    "0.35";


  secimKatmani.appendChild(
    onayButonu
  );


  function onayDurumunuGuncelle() {

    const hazir =
      secilenler.length ===
      gercekAdet;


    onayButonu.disabled =
      !hazir;


    onayButonu.style.opacity =
      hazir
        ? "1"
        : "0.35";
  }


  kartKutusu.addEventListener(
    "click",
    () => {

      onayDurumunuGuncelle();
    }
  );


  onayButonu.addEventListener(
    "click",
    () => {

      if (
        onayButonu.disabled
      ) {

        return;
      }


      butonSesiCal();


      secimKatmani.remove();


      secilenler.forEach(
        (kartBilgisi) => {

          coptenEserCikar(
            kartBilgisi
          );
        }
      );


      /*
        BİRDEN FAZLA ESER VARSA
        SIRAYLA NORMAL ÇEKİLMİŞ
        GİBİ UYGULANACAK.

        İLK ESER İŞLENİR.
        SONRAKİ ESERLER İÇİN
        EKSTRA ÇEKİŞ KUYRUĞU
        KULLANMIYORUZ; AYRI
        ETKİ KUYRUĞU KULLANIYORUZ.
      */

      hollandaEserleriniSiraylaUygula(
        secilenler
      );
    }
  );
}


/* =====================================================
   HOLLANDA ESERLERİNİ SIRAYLA UYGULA
===================================================== */

function hollandaEserleriniSiraylaUygula(
  eserler
) {

  if (
    !eserler ||
    eserler.length === 0
  ) {

    turuBitir();

    return;
  }


  const kuyruk =
    [...eserler];


  window.hollandaEtkiKuyrugu =
    kuyruk;


  hollandaSiradakiEseriUygula();
}


/* =====================================================
   HOLLANDA — SIRADAKİ ESER
===================================================== */

function hollandaSiradakiEseriUygula() {

  const kuyruk =
    window.hollandaEtkiKuyrugu ||
    [];


  if (
    kuyruk.length === 0
  ) {

    window.hollandaEtkiKuyrugu =
      null;


    turuBitir();

    return;
  }


  const kartBilgisi =
    kuyruk.shift();


  window.hollandaEtkiKuyrugu =
    kuyruk;


  /*
    KARTI NORMAL ÇEKİLMİŞ
    GİBİ BÜYÜK GÖSTERİYORUZ.

    SONRAKİ PARTTA turuBitir()
    ETKİ KUYRUĞUNU DA KONTROL
    EDECEK ŞEKİLDE TAMAMLANACAK.
  */

  cekilenKartiBuyukGoster(
    kartBilgisi
  );
}


/* =====================================================
   TURU BİTİR / ETKİ KUYRUKLARINI KONTROL ET
===================================================== */

function turuBitir() {

  kartCekmeKilidi =
    true;


  setTimeout(
    () => {

      /*
        HOLLANDA TAKIMI
        BİRDEN FAZLA ESER ALDIYSA
        ÖNCE KUYRUK TAMAMLANIR.
      */

      if (
        window.hollandaEtkiKuyrugu &&
        window.hollandaEtkiKuyrugu.length >
        0
      ) {

        kartCekmeKilidi =
          false;


        hollandaSiradakiEseriUygula();


        return;
      }


      /*
        EKSTRA KART ÇEKME
        KUYRUĞU VARSA
        AYNI OYUNCU DEVAM EDER.
      */

      if (
        ekstraKartCekmeSayisi >
        0
      ) {

        /*
          ORTAK DESTE BİTTİYSE
          KALAN EKSTRA HAKLAR YANAR.
        */

        if (
          ortakDeste.length ===
          0
        ) {

          ekstraKartCekmeSayisi =
            0;


          kartCekmeKilidi =
            false;


          kartCekmeAsamasiniBaslat();


          return;
        }


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
            `${aktifOyuncu}. OYUNCU — SON EKSTRA KART`
          );
        }


        kartCekmeAsamasiniBaslat();


        return;
      }


      /*
        NORMAL TUR BİTİŞİ.
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
   ÖZEL KART ANA YÖNLENDİRİCİSİ — EK KARTLAR
===================================================== */

/*
  PART 6'DA TANIMLANAN
  ozelKartiKullan FONKSİYONUNU
  YENİDEN TANIMLIYORUZ.

  JAVASCRIPT'TE SON TANIM
  GEÇERLİ OLACAĞI İÇİN
  BÜTÜN ÖZEL KARTLARI
  BURADAN YÖNETECEĞİZ.
*/

function ozelKartiKullan(
  kartBilgisi,
  kartElementi,
  katman
) {

  switch (
    kartBilgisi.id
  ) {

    case "arti-iki-kart":

      artiIkiKartKullan(
        kartBilgisi,
        kartElementi,
        katman
      );

      return;


    case "arkeolojik-kazi":

      arkeolojikKaziKullan(
        kartBilgisi,
        kartElementi,
        katman
      );

      return;


    case "fransa-takimi":

      fransaTakimiKullan(
        kartBilgisi,
        kartElementi,
        katman
      );

      return;


    case "dunya-takimi":

      dunyaTakimiKullan(
        kartBilgisi,
        kartElementi,
        katman
      );

      return;


    case "hollanda-takimi":

      hollandaTakimiKullan(
        kartBilgisi,
        kartElementi,
        katman
      );

      return;


    case "dedektif-sorusturmasi":

      dedektifSorusturmasiKullan(
        kartBilgisi,
        kartElementi,
        katman
      );

      return;


    case "gece-nobeti":

      geceNobetiKullan(
        kartBilgisi,
        kartElementi,
        katman
      );

      return;


    case "eser-calindi":

      eserCalindiKullan(
        kartBilgisi,
        kartElementi,
        katman
      );

      return;


    case "eser-sahteydi":

      eserSahteydiKullan(
        kartBilgisi,
        kartElementi,
        katman
      );

      return;


    case "muzede-kaza":

      muzedeKazaKullan(
        kartBilgisi,
        kartElementi,
        katman
      );

      return;


    case "restorasyon":

      restorasyonKullan(
        kartBilgisi,
        kartElementi,
        katman
      );

      return;


    /*
      SONRAKİ PART:
      - Gizli Sandık
      - Müze Güvenliği
      - Depo Kilidi
      - Müze Müdürü
      - Özel Kart Takası
      - Açık Artırma
      - Yeni Sergi
      - Klasikler
      - Deprem
    */

    default:

      console.log(
        "Henüz bu partta bağlanmadı:",
        kartBilgisi.id
      );


      ozelKartiCopeGonder(
        kartBilgisi,
        kartElementi,
        katman,
        true
      );

      return;
  }
}


/* =====================================================
   GENEL ÖZEL KART ZAR EKRANI
===================================================== */

function ozelKartZarEkraniAc(
  baslik,
  aciklama,
  tamamlaninca
) {

  const eski =
    document.getElementById(
      "ozelKartZarKatmani"
    );


  if (
    eski
  ) {

    eski.remove();
  }


  const katman =
    document.createElement(
      "div"
    );


  katman.id =
    "ozelKartZarKatmani";


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

      zIndex:
        "75000",

      background:
        "rgba(0,0,0,0.76)",

      backdropFilter:
        "blur(4px)",

      WebkitBackdropFilter:
        "blur(4px)",

      display:
        "flex",

      justifyContent:
        "center",

      alignItems:
        "center"
    }
  );


  const kutu =
    document.createElement(
      "div"
    );


  Object.assign(
    kutu.style,
    {
      minWidth:
        "min(72vw, 620px)",

      padding:
        "30px",

      border:
        "4px solid #8a621e",

      borderRadius:
        "22px",

      background:
        "linear-gradient(180deg, rgba(244,227,187,0.98), rgba(218,188,126,0.98))",

      color:
        "#5b3d11",

      textAlign:
        "center",

      fontFamily:
        'Georgia, "Times New Roman", serif',

      boxShadow:
        "0 20px 60px rgba(0,0,0,0.60)"
    }
  );


  const baslikElementi =
    document.createElement(
      "div"
    );


  baslikElementi.textContent =
    baslik;


  Object.assign(
    baslikElementi.style,
    {
      fontSize:
        "clamp(20px, 2vw, 36px)",

      fontWeight:
        "bold",

      marginBottom:
        "14px"
    }
  );


  const aciklamaElementi =
    document.createElement(
      "div"
    );


  aciklamaElementi.textContent =
    aciklama;


  Object.assign(
    aciklamaElementi.style,
    {
      fontSize:
        "clamp(14px, 1.1vw, 20px)",

      fontWeight:
        "bold",

      marginBottom:
        "24px"
    }
  );


  const zar =
    document.createElement(
      "div"
    );


  zar.textContent =
    "⚀";


  Object.assign(
    zar.style,
    {
      width:
        "120px",

      height:
        "120px",

      margin:
        "0 auto 22px",

      display:
        "flex",

      alignItems:
        "center",

      justifyContent:
        "center",

      background:
        "#fff7dc",

      border:
        "4px solid #9d742b",

      borderRadius:
        "22px",

      fontSize:
        "94px",

      lineHeight:
        "1",

      boxShadow:
        "0 8px 20px rgba(0,0,0,0.35)"
    }
  );


  const sonucMetni =
    document.createElement(
      "div"
    );


  sonucMetni.textContent =
    "";


  Object.assign(
    sonucMetni.style,
    {
      minHeight:
        "30px",

      marginBottom:
        "18px",

      fontSize:
        "clamp(15px, 1.3vw, 23px)",

      fontWeight:
        "bold"
    }
  );


  const buton =
    ozelKartKararButonuOlustur(
      "ZAR AT"
    );


  kutu.appendChild(
    baslikElementi
  );


  kutu.appendChild(
    aciklamaElementi
  );


  kutu.appendChild(
    zar
  );


  kutu.appendChild(
    sonucMetni
  );


  kutu.appendChild(
    buton
  );


  katman.appendChild(
    kutu
  );


  document.body.appendChild(
    katman
  );


  const semboller = [
    "⚀",
    "⚁",
    "⚂",
    "⚃",
    "⚄",
    "⚅"
  ];


  let kilit =
    false;


  buton.addEventListener(
    "click",
    () => {

      if (
        kilit
      ) {

        return;
      }


      kilit =
        true;


      buton.disabled =
        true;


      butonSesiCal();


      sonucMetni.textContent =
        "Atılıyor...";


      let sayac =
        0;


      const interval =
        setInterval(
          () => {

            const rastgele =
              Math.floor(
                Math.random() *
                6
              );


            zar.textContent =
              semboller[
                rastgele
              ];


            gsap.fromTo(
              zar,
              {
                scale:
                  0.9,

                rotation:
                  -15
              },
              {
                scale:
                  1.08,

                rotation:
                  15,

                duration:
                  0.09
              }
            );


            sayac++;


            if (
              sayac >=
              14
            ) {

              clearInterval(
                interval
              );


              const sonuc =
                Math.floor(
                  Math.random() *
                  6
                ) +
                1;


              zar.textContent =
                semboller[
                  sonuc - 1
                ];


              sonucMetni.textContent =
                `${sonuc} GELDİ`;


              gsap.fromTo(
                zar,
                {
                  scale:
                    1.35,

                  y:
                    -20
                },
                {
                  scale:
                    1,

                  y:
                    0,

                  duration:
                    0.5,

                  ease:
                    "bounce.out"
                }
              );


              setTimeout(
                () => {

                  katman.remove();


                  tamamlaninca(
                    sonuc
                  );

                },
                900
              );

            }

          },
          75
        );
    }
  );
}


/* =====================================================
   DEDEKTİF SORUŞTURMASI
===================================================== */

function dedektifSorusturmasiKullan(
  kartBilgisi,
  kartElementi,
  katman
) {

  kullanilanOzelKartiCopeAt(
    kartBilgisi,
    kartElementi,
    katman,
    () => {

      ozelKartZarEkraniAc(
        "DEDEKTİF SORUŞTURMASI",

        "1–2 başarısız • 3–4 bir eser • 5–6 iki eser",

        (zarSonucu) => {

          if (
            zarSonucu <=
            2
          ) {

            secimYazisiGoster(
              "SORUŞTURMA BAŞARISIZ"
            );


            turuBitir();


            return;
          }


          const rakipDepo =
            rakibinDeposu();


          const hak =
            zarSonucu <= 4
              ? 1
              : 2;


          const gercekHak =
            Math.min(
              hak,
              rakipDepo.length
            );


          dedektifDepoSecimiBaslat(
            gercekHak
          );

        }
      );
    }
  );
}


/* =====================================================
   RAKİP DEPOSUNDAN KAPALI KART SEÇ
===================================================== */

function dedektifDepoSecimiBaslat(
  adet
) {

  const rakip =
    rakipOyuncuNumarasi();


  const kartlar =
    Array.from(
      document.querySelectorAll(
        `.depodakiEserKarti[data-oyuncu="${rakip}"]`
      )
    );


  if (
    adet <= 0 ||
    kartlar.length === 0
  ) {

    turuBitir();


    return;
  }


  hedefSecimAktif =
    true;


  hedefSecimTipi =
    "rakip-depo";


  hedefSecimMaksimum =
    Math.min(
      adet,
      kartlar.length
    );


  secilenHedefler =
    [];


  secimYazisiGoster(
    hedefSecimMaksimum === 1
      ? "RAKİBİN DEPOSUNDAN 1 KART SEÇ"
      : `RAKİBİN DEPOSUNDAN ${hedefSecimMaksimum} KART SEÇ`
  );


  kartlar.forEach(
    (kart) => {

      kart.dataset.hedefSecilebilir =
        "evet";


      kart.style.outline =
        "3px solid #e6c45a";
    }
  );


  hedefSecimCallback =
    (kartElementi) => {

      if (
        kartElementi.dataset.hedefSecilebilir !==
        "evet"
      ) {

        return;
      }


      if (
        secilenHedefler.includes(
          kartElementi
        )
      ) {

        return;
      }


      secilenHedefler.push(
        kartElementi
      );


      kartElementi.style.outline =
        "4px solid #66d17a";


      if (
        secilenHedefler.length <
        hedefSecimMaksimum
      ) {

        return;
      }


      const secimler =
        [
          ...secilenHedefler
        ];


      hedefSeciminiTemizle();


      depodanSecilenEserleriSiraylaAl(
        secimler,
        aktifOyuncu
      );
    };
}


/* =====================================================
   DEPODAN SEÇİLEN ESERLERİ SIRAYLA AL
===================================================== */

function depodanSecilenEserleriSiraylaAl(
  kartElementleri,
  hedefOyuncu
) {

  const kuyruk =
    [
      ...kartElementleri
    ];


  function siradaki() {

    if (
      kuyruk.length ===
      0
    ) {

      turuBitir();


      return;
    }


    const element =
      kuyruk.shift();


    depodakiEseriKoleksiyonaAktar(
      element,
      hedefOyuncu,
      siradaki
    );
  }


  siradaki();
}


/* =====================================================
   GECE NÖBETİ
===================================================== */

function geceNobetiKullan(
  kartBilgisi,
  kartElementi,
  katman
) {

  kullanilanOzelKartiCopeAt(
    kartBilgisi,
    kartElementi,
    katman,
    () => {

      /*
        ZARSIZ.
        SADECE 1 KAPALI DEPO KARTI.
      */

      dedektifDepoSecimiBaslat(
        1
      );
    }
  );
}


/* =====================================================
   ESER ÇALINDI
===================================================== */

function eserCalindiKullan(
  kartBilgisi,
  kartElementi,
  katman
) {

  const hedefler =
    rakibinTamamlanmamisUygunEserleri();


  if (
    hedefler.length ===
    0
  ) {

    ozelKartKararlariniGoster(
      kartBilgisi,
      kartElementi,
      katman
    );


    return;
  }


  kullanilanOzelKartiCopeAt(
    kartBilgisi,
    kartElementi,
    katman,
    () => {

      rakipEserHedefSecimiBaslat(
        hedefler,
        1,
        "ÇALMAK İSTEDİĞİN 1 ESERİ SEÇ",
        (secilenler) => {

          masadakiEseriCopeGonder(
            secilenler[0],
            () => {

              turuBitir();
            }
          );
        }
      );
    }
  );
}


/* =====================================================
   ESER SAHTEYDİ
===================================================== */

function eserSahteydiKullan(
  kartBilgisi,
  kartElementi,
  katman
) {

  const hedefler =
    rakibinTamamlanmisUygunEserleri();


  if (
    hedefler.length ===
    0
  ) {

    ozelKartKararlariniGoster(
      kartBilgisi,
      kartElementi,
      katman
    );


    return;
  }


  kullanilanOzelKartiCopeAt(
    kartBilgisi,
    kartElementi,
    katman,
    () => {

      rakipEserHedefSecimiBaslat(
        hedefler,
        1,
        "SAHTE OLDUĞUNU İLAN EDECEĞİN ESERİ SEÇ",
        (secilenler) => {

          masadakiEseriCopeGonder(
            secilenler[0],
            () => {

              turuBitir();
            }
          );
        }
      );
    }
  );
}


/* =====================================================
   GENEL RAKİP ESER HEDEF SEÇİMİ
===================================================== */

function rakipEserHedefSecimiBaslat(
  hedefler,
  maksimum,
  mesaj,
  tamamlaninca
) {

  const gercekMaksimum =
    Math.min(
      maksimum,
      hedefler.length
    );


  if (
    gercekMaksimum <= 0
  ) {

    tamamlaninca(
      []
    );


    return;
  }


  hedefSecimAktif =
    true;


  hedefSecimTipi =
    "rakip-eser";


  hedefSecimMaksimum =
    gercekMaksimum;


  secilenHedefler =
    [];


  secimYazisiGoster(
    mesaj
  );


  hedefler.forEach(
    (kart) => {

      kart.dataset.hedefSecilebilir =
        "evet";


      kart.style.outline =
        "3px solid #e6c45a";
    }
  );


  hedefSecimCallback =
    (kartElementi) => {

      if (
        kartElementi.dataset.hedefSecilebilir !==
        "evet"
      ) {

        return;
      }


      if (
        secilenHedefler.includes(
          kartElementi
        )
      ) {

        return;
      }


      secilenHedefler.push(
        kartElementi
      );


      kartElementi.style.outline =
        "4px solid #d04b43";


      if (
        secilenHedefler.length <
        gercekMaksimum
      ) {

        return;
      }


      const sonuc =
        [
          ...secilenHedefler
        ];


      hedefSeciminiTemizle();


      tamamlaninca(
        sonuc
      );
    };
}


/* =====================================================
   MÜZEDE KAZA
===================================================== */

function muzedeKazaKullan(
  kartBilgisi,
  kartElementi,
  katman
) {

  const uygunHedefler =
    rakibinTamamlanmamisUygunEserleri();


  if (
    uygunHedefler.length ===
    0
  ) {

    ozelKartKararlariniGoster(
      kartBilgisi,
      kartElementi,
      katman
    );


    return;
  }


  kullanilanOzelKartiCopeAt(
    kartBilgisi,
    kartElementi,
    katman,
    () => {

      ozelKartZarEkraniAc(
        "MÜZEDE KAZA",

        "1–2 kaza atlatıldı • 3–4 bir eser • 5–6 iki eser",

        (zarSonucu) => {

          if (
            zarSonucu <=
            2
          ) {

            secimYazisiGoster(
              "KAZA ATLATILDI"
            );


            turuBitir();


            return;
          }


          const hak =
            zarSonucu <=
            4
              ? 1
              : 2;


          const hedefler =
            rakibinTamamlanmamisUygunEserleri();


          const gercekHak =
            Math.min(
              hak,
              hedefler.length
            );


          rakipEserHedefSecimiBaslat(
            hedefler,
            gercekHak,

            gercekHak === 1
              ? "ZARAR GÖRECEK 1 ESERİ SEÇ"
              : `ZARAR GÖRECEK ${gercekHak} ESERİ SEÇ`,

            (secilenler) => {

              eserleriSiraylaCopeGonder(
                secilenler,
                () => {

                  turuBitir();
                }
              );
            }
          );
        }
      );
    }
  );
}


/* =====================================================
   ESERLERİ SIRAYLA ÇÖPE GÖNDER
===================================================== */

function eserleriSiraylaCopeGonder(
  eserElementleri,
  tamamlaninca
) {

  const kuyruk =
    [
      ...eserElementleri
    ];


  function siradaki() {

    if (
      kuyruk.length ===
      0
    ) {

      tamamlaninca();


      return;
    }


    const eser =
      kuyruk.shift();


    masadakiEseriCopeGonder(
      eser,
      siradaki
    );
  }


  siradaki();
}


/* =====================================================
   RESTORASYON
===================================================== */

function restorasyonKullan(
  kartBilgisi,
  kartElementi,
  katman
) {

  const uygunEserler =
    coptekiUygunEserleriBul();


  if (
    uygunEserler.length ===
    0
  ) {

    ozelKartKararlariniGoster(
      kartBilgisi,
      kartElementi,
      katman
    );


    return;
  }


  kullanilanOzelKartiCopeAt(
    kartBilgisi,
    kartElementi,
    katman,
    () => {

      ozelKartZarEkraniAc(
        "RESTORASYON",

        "1–2 başarısız • 3–4 bir eser • 5–6 iki eser",

        (zarSonucu) => {

          if (
            zarSonucu <=
            2
          ) {

            secimYazisiGoster(
              "RESTORASYON BAŞARISIZ"
            );


            turuBitir();


            return;
          }


          const hak =
            zarSonucu <=
            4
              ? 1
              : 2;


          const guncelUygun =
            coptekiUygunEserleriBul();


          const gercekHak =
            Math.min(
              hak,
              guncelUygun.length
            );


          restorasyonCopSecimiAc(
            gercekHak,
            guncelUygun
          );
        }
      );
    }
  );
}


/* =====================================================
   RESTORASYON — ÇÖPTEN ESER SEÇ
===================================================== */

function restorasyonCopSecimiAc(
  adet,
  uygunEserler
) {

  if (
    adet <= 0
  ) {

    turuBitir();


    return;
  }


  const katman =
    document.createElement(
      "div"
    );


  katman.id =
    "restorasyonSecimKatmani";


  Object.assign(
    katman.style,
    {
      position:
        "fixed",

      inset:
        "0",

      zIndex:
        "76000",

      background:
        "rgba(0,0,0,0.80)",

      backdropFilter:
        "blur(4px)",

      WebkitBackdropFilter:
        "blur(4px)",

      display:
        "flex",

      flexDirection:
        "column",

      justifyContent:
        "center",

      alignItems:
        "center",

      gap:
        "18px",

      padding:
        "3%"
    }
  );


  const baslik =
    document.createElement(
      "div"
    );


  baslik.textContent =
    adet === 1
      ? "RESTORE EDECEĞİN 1 ESERİ SEÇ"
      : `RESTORE EDECEĞİN ${adet} ESERİ SEÇ`;


  Object.assign(
    baslik.style,
    {
      color:
        "#f5e7c4",

      fontFamily:
        'Georgia, "Times New Roman", serif',

      fontSize:
        "clamp(17px,1.5vw,30px)",

      fontWeight:
        "bold"
    }
  );


  const kartKutusu =
    document.createElement(
      "div"
    );


  Object.assign(
    kartKutusu.style,
    {
      display:
        "flex",

      justifyContent:
        "center",

      alignItems:
        "center",

      flexWrap:
        "wrap",

      gap:
        "14px",

      maxWidth:
        "96vw",

      maxHeight:
        "72vh",

      overflowY:
        "auto"
    }
  );


  katman.appendChild(
    baslik
  );


  katman.appendChild(
    kartKutusu
  );


  document.body.appendChild(
    katman
  );


  const secilenler =
    [];


  const onay =
    ozelKartKararButonuOlustur(
      "SEÇİMİ ONAYLA"
    );


  onay.disabled =
    true;


  onay.style.opacity =
    "0.35";


  uygunEserler.forEach(
    (kartBilgisi) => {

      const kart =
        document.createElement(
          "img"
        );


      kart.src =
        kartBilgisi.dosya;


      Object.assign(
        kart.style,
        {
          height:
            "min(32vh, 310px)",

          width:
            "auto",

          cursor:
            "pointer",

          border:
            "3px solid transparent",

          borderRadius:
            "8px",

          touchAction:
            "manipulation",

          userSelect:
            "none",

          WebkitUserDrag:
            "none"
        }
      );


      kartKutusu.appendChild(
        kart
      );


      kart.addEventListener(
        "click",
        () => {

          const mevcut =
            secilenler.indexOf(
              kartBilgisi
            );


          if (
            mevcut !==
            -1
          ) {

            secilenler.splice(
              mevcut,
              1
            );


            kart.style.borderColor =
              "transparent";

          } else {

            if (
              secilenler.length >=
              adet
            ) {

              return;
            }


            secilenler.push(
              kartBilgisi
            );


            kart.style.borderColor =
              "#e5c266";
          }


          const hazir =
            secilenler.length ===
            adet;


          onay.disabled =
            !hazir;


          onay.style.opacity =
            hazir
              ? "1"
              : "0.35";
        }
      );
    }
  );


  katman.appendChild(
    onay
  );


  onay.addEventListener(
    "click",
    () => {

      if (
        onay.disabled
      ) {

        return;
      }


      butonSesiCal();


      katman.remove();


      restorasyonEserleriniSiraylaAl(
        secilenler
      );
    }
  );
}


/* =====================================================
   RESTORASYON ESERLERİNİ SIRAYLA KOLEKSİYONA AL
===================================================== */

function restorasyonEserleriniSiraylaAl(
  eserler
) {

  const kuyruk =
    [
      ...eserler
    ];


  function siradaki() {

    if (
      kuyruk.length ===
      0
    ) {

      turuBitir();


      return;
    }


    const kartBilgisi =
      kuyruk.shift();


    coptenEseriKoleksiyonaAl(
      kartBilgisi,
      aktifOyuncu,
      siradaki
    );
  }


  siradaki();
}


/* =====================================================
   HOLLANDA TAKIMI — DÜZELTİLMİŞ SÜRÜM
===================================================== */

/*
  PART 6'DAKİ HOLLANDA FONKSİYONUNU
  BURADA EZİYORUZ.

  KURAL:

  1 HOLLANDA:
  ÇÖPLÜKTE GERİYE DOĞRU GİT,
  KENDİ SANATÇILARINA AİT
  EN SON UYGUN ESERİ AL.

  2 HOLLANDA:
  İSTEDİĞİN 1 UYGUN ESER.

  3 HOLLANDA:
  İSTEDİĞİN 2 UYGUN ESER.
*/

function hollandaTakimiKullan(
  kartBilgisi,
  kartElementi,
  katman
) {

  const hollandaSayisi =
    takimSanatciSayisi(
      "hollanda"
    );


  const uygunEserler =
    coptekiUygunEserleriBul(
      aktifOyuncu
    );


  if (
    hollandaSayisi <= 0 ||
    uygunEserler.length === 0
  ) {

    ozelKartKararlariniGoster(
      kartBilgisi,
      kartElementi,
      katman
    );


    return;
  }


  kullanilanOzelKartiCopeAt(
    kartBilgisi,
    kartElementi,
    katman,
    () => {

      /* =========================
         1 HOLLANDA
      ========================= */

      if (
        hollandaSayisi === 1
      ) {

        const sonUygunEser =
          coptekiEnSonUygunEseriBul(
            aktifOyuncu
          );


        if (
          !sonUygunEser
        ) {

          turuBitir();


          return;
        }


        secimYazisiGoster(
          "HOLLANDA TAKIMI — EN SON UYGUN ESER GERİ ALINIYOR"
        );


        coptenEseriKoleksiyonaAl(
          sonUygunEser,
          aktifOyuncu,
          () => {

            turuBitir();
          }
        );


        return;
      }


      /* =========================
         2 / 3 HOLLANDA
      ========================= */

      const alinacakAdet =
        hollandaSayisi === 2
          ? 1
          : Math.min(
              2,
              uygunEserler.length
            );


      hollandaCopSecimEkraniAc(
        alinacakAdet
      );
    }
  );
}


/* =====================================================
   HOLLANDA — DÜZELTİLMİŞ ÇÖP SEÇİMİ
===================================================== */

function hollandaCopSecimEkraniAc(
  alinacakAdet
) {

  /*
    SADECE AKTİF OYUNCUNUN
    SANATÇILARINA AİT
    GERİ ALINABİLİR ESERLER.
  */

  const mevcutEserler =
    coptekiUygunEserleriBul(
      aktifOyuncu
    );


  const gercekAdet =
    Math.min(
      alinacakAdet,
      mevcutEserler.length
    );


  if (
    gercekAdet <= 0
  ) {

    turuBitir();


    return;
  }


  const eski =
    document.getElementById(
      "hollandaCopSecimKatmani"
    );


  if (
    eski
  ) {

    eski.remove();
  }


  const secimKatmani =
    document.createElement(
      "div"
    );


  secimKatmani.id =
    "hollandaCopSecimKatmani";


  Object.assign(
    secimKatmani.style,
    {
      position:
        "fixed",

      inset:
        "0",

      zIndex:
        "72000",

      background:
        "rgba(0,0,0,0.80)",

      backdropFilter:
        "blur(4px)",

      WebkitBackdropFilter:
        "blur(4px)",

      display:
        "flex",

      flexDirection:
        "column",

      justifyContent:
        "center",

      alignItems:
        "center",

      gap:
        "20px",

      padding:
        "3%"
    }
  );


  const baslik =
    document.createElement(
      "div"
    );


  baslik.textContent =
    gercekAdet === 1
      ? "ÇÖPTEN 1 ESER SEÇ"
      : `ÇÖPTEN ${gercekAdet} ESER SEÇ`;


  Object.assign(
    baslik.style,
    {
      color:
        "#f5e7c4",

      fontFamily:
        'Georgia, "Times New Roman", serif',

      fontSize:
        "clamp(17px, 1.5vw, 30px)",

      fontWeight:
        "bold",

      textAlign:
        "center"
    }
  );


  const kartKutusu =
    document.createElement(
      "div"
    );


  Object.assign(
    kartKutusu.style,
    {
      display:
        "flex",

      justifyContent:
        "center",

      alignItems:
        "center",

      flexWrap:
        "wrap",

      gap:
        "14px",

      maxWidth:
        "96vw",

      maxHeight:
        "74vh",

      overflowY:
        "auto"
    }
  );


  secimKatmani.appendChild(
    baslik
  );


  secimKatmani.appendChild(
    kartKutusu
  );


  document.body.appendChild(
    secimKatmani
  );


  const secilenler =
    [];


  const onay =
    ozelKartKararButonuOlustur(
      "SEÇİMİ ONAYLA"
    );


  onay.disabled =
    true;


  onay.style.opacity =
    "0.35";


  mevcutEserler.forEach(
    (kartBilgisi) => {

      const kart =
        document.createElement(
          "img"
        );


      kart.src =
        kartBilgisi.dosya;


      Object.assign(
        kart.style,
        {
          height:
            "min(32vh, 310px)",

          width:
            "auto",

          cursor:
            "pointer",

          touchAction:
            "manipulation",

          userSelect:
            "none",

          WebkitUserDrag:
            "none",

          border:
            "3px solid transparent",

          borderRadius:
            "8px",

          filter:
            "drop-shadow(0 10px 12px rgba(0,0,0,0.65))"
        }
      );


      kartKutusu.appendChild(
        kart
      );


      kart.addEventListener(
        "click",
        () => {

          const mevcutIndex =
            secilenler.indexOf(
              kartBilgisi
            );


          if (
            mevcutIndex !== -1
          ) {

            secilenler.splice(
              mevcutIndex,
              1
            );


            kart.style.borderColor =
              "transparent";

          } else {

            if (
              secilenler.length >=
              gercekAdet
            ) {

              return;
            }


            secilenler.push(
              kartBilgisi
            );


            kart.style.borderColor =
              "#e5c266";
          }


          const hazir =
            secilenler.length ===
            gercekAdet;


          onay.disabled =
            !hazir;


          onay.style.opacity =
            hazir
              ? "1"
              : "0.35";
        }
      );
    }
  );


  secimKatmani.appendChild(
    onay
  );


  onay.addEventListener(
    "click",
    () => {

      if (
        onay.disabled
      ) {

        return;
      }


      butonSesiCal();


      secimKatmani.remove();


      hollandaSecilenEserleriKoleksiyonaAl(
        secilenler
      );
    }
  );
}


/* =====================================================
   HOLLANDA — SEÇİLEN ESERLERİ SIRAYLA AL
===================================================== */

function hollandaSecilenEserleriKoleksiyonaAl(
  eserler
) {

  const kuyruk =
    [
      ...eserler
    ];


  function siradaki() {

    if (
      kuyruk.length ===
      0
    ) {

      turuBitir();


      return;
    }


    const kartBilgisi =
      kuyruk.shift();


    coptenEseriKoleksiyonaAl(
      kartBilgisi,
      aktifOyuncu,
      siradaki
    );
  }


  siradaki();
}


/* =====================================================
   ÖZEL KART ANA YÖNLENDİRİCİSİ — PART 8
===================================================== */

/*
  SON TANIM GEÇERLİ OLACAĞI İÇİN
  ÖNCEKİ ROUTER'I BURADA
  GENİŞLETİYORUZ.
*/

function ozelKartiKullan(
  kartBilgisi,
  kartElementi,
  katman
) {

  switch (
    kartBilgisi.id
  ) {

    case "arti-iki-kart":

      artiIkiKartKullan(
        kartBilgisi,
        kartElementi,
        katman
      );

      return;


    case "arkeolojik-kazi":

      arkeolojikKaziKullan(
        kartBilgisi,
        kartElementi,
        katman
      );

      return;


    case "fransa-takimi":

      fransaTakimiKullan(
        kartBilgisi,
        kartElementi,
        katman
      );

      return;


    case "dunya-takimi":

      dunyaTakimiKullan(
        kartBilgisi,
        kartElementi,
        katman
      );

      return;


    case "hollanda-takimi":

      hollandaTakimiKullan(
        kartBilgisi,
        kartElementi,
        katman
      );

      return;


    case "dedektif-sorusturmasi":

      dedektifSorusturmasiKullan(
        kartBilgisi,
        kartElementi,
        katman
      );

      return;


    case "gece-nobeti":

      geceNobetiKullan(
        kartBilgisi,
        kartElementi,
        katman
      );

      return;


    case "eser-calindi":

      eserCalindiKullan(
        kartBilgisi,
        kartElementi,
        katman
      );

      return;


    case "eser-sahteydi":

      eserSahteydiKullan(
        kartBilgisi,
        kartElementi,
        katman
      );

      return;


    case "muzede-kaza":

      muzedeKazaKullan(
        kartBilgisi,
        kartElementi,
        katman
      );

      return;


    case "restorasyon":

      restorasyonKullan(
        kartBilgisi,
        kartElementi,
        katman
      );

      return;


    case "gizli-sandik":

      gizliSandikKullan(
        kartBilgisi,
        kartElementi,
        katman
      );

      return;


    case "muze-guvenligi":

      muzeGuvenligiKullan(
        kartBilgisi,
        kartElementi,
        katman
      );

      return;


    case "depo-kilidi":

      depoKilidiKullan(
        kartBilgisi,
        kartElementi,
        katman
      );

      return;


    /*
      PART 9:
      MÜZE MÜDÜRÜ
      ÖZEL KART TAKASI
      AÇIK ARTIRMA

      PART 10:
      YENİ SERGİ
      KLASİKLER
      DEPREM
    */

    default:

      console.log(
        "Henüz sonraki partta bağlanacak:",
        kartBilgisi.id
      );


      ozelKartiCopeGonder(
        kartBilgisi,
        kartElementi,
        katman,
        true
      );

      return;
  }
}


/* =====================================================
   GİZLİ SANDIK
===================================================== */

function gizliSandikKullan(
  kartBilgisi,
  kartElementi,
  katman
) {

  if (
    artanOzelKartlar.length ===
    0
  ) {

    ozelKartKararlariniGoster(
      kartBilgisi,
      kartElementi,
      katman
    );


    return;
  }


  /*
    GİZLİ SANDIK KULLANILDIĞINDA
    ÇÖPE GİTMEZ.

    OTURUM DIŞINA ÇIKAR.
  */

  ozelKartiOturumDisinaCikar(
    kartBilgisi,
    kartElementi,
    katman,
    () => {

      /* =========================
         DIŞARIDAKİ 8'DEN
         RASTGELE 1 KART
      ========================= */

      const rastgeleIndex =
        Math.floor(
          Math.random() *
          artanOzelKartlar.length
        );


      const gelenKart =
        artanOzelKartlar.splice(
          rastgeleIndex,
          1
        )[0];


      if (
        !gelenKart
      ) {

        turuBitir();


        return;
      }


      /* =========================
         GELEN KART ARTIK
         OTURUMUN AKTİF KARTIDIR
      ========================= */

      gizliSandiktanDahilOlanKartlar.push(
        {
          ...gelenKart
        }
      );


      /*
        GİZLİ SANDIK AKTİF 12'DEN
        ÇIKTI.

        GELEN KART ONUN YERİNİ ALDI.
      */

      const gizliIndex =
        secilenOzelKartlar.findIndex(
          (kart) =>
            kart.id ===
            "gizli-sandik"
        );


      if (
        gizliIndex !==
        -1
      ) {

        secilenOzelKartlar.splice(
          gizliIndex,
          1
        );
      }


      secilenOzelKartlar.push(
        {
          ...gelenKart
        }
      );


      window.secilenOzelKartlar =
        secilenOzelKartlar;


      window.artanOzelKartlar =
        artanOzelKartlar;


      window.gizliSandiktanDahilOlanKartlar =
        gizliSandiktanDahilOlanKartlar;


      console.log(
        "GİZLİ SANDIKTAN GELEN KART:",
        gelenKart
      );


      console.log(
        "AKTİF ÖZEL KART SAYISI:",
        secilenOzelKartlar.length
      );


      /* =========================
         ARTAN ÖZEL KART GÖRSELLERİNDEN
         BİR TANESİNİ EKSİLT
      ========================= */

      const artanGorseller =
        Array.from(
          document.querySelectorAll(
            ".artanOzelKarti"
          )
        );


      if (
        artanGorseller.length >
        0
      ) {

        artanGorseller[
          artanGorseller.length - 1
        ].remove();
      }


      /* =========================
         GELEN KARTI BÜYÜK GÖSTER
      ========================= */

      secimYazisiGoster(
        "GİZLİ SANDIK — YENİ ÖZEL KART BULUNDU"
      );


      kartCekmeKilidi =
        true;


      /*
        MÜZEDE DEPREM GELİRSE
        cekilenKartiBuyukGoster()
        OTOMATİK DEPREMİ BAŞLATIR.

        DİĞER TÜM KARTLARDA
        NORMAL 3 SEÇENEK GELİR.
      */

      cekilenKartiBuyukGoster(
        gelenKart
      );
    }
  );
}


/* =====================================================
   MÜZE GÜVENLİĞİ
===================================================== */

function muzeGuvenligiKullan(
  kartBilgisi,
  kartElementi,
  katman
) {

  const sanatciKartlari =
    Array.from(
      document.querySelectorAll(
        `.yerlesenSanatciKarti[data-oyuncu="${aktifOyuncu}"]`
      )
    );


  if (
    sanatciKartlari.length ===
    0
  ) {

    ozelKartKararlariniGoster(
      kartBilgisi,
      kartElementi,
      katman
    );


    return;
  }


  secimYazisiGoster(
    "MÜZE GÜVENLİĞİ — KORUNACAK SANATÇIYI SEÇ"
  );


  hedefSecimAktif =
    true;


  hedefSecimTipi =
    "muze-guvenligi-sanatci";


  sanatciKartlari.forEach(
    (sanatciKarti) => {

      sanatciKarti.dataset.hedefSecilebilir =
        "evet";


      sanatciKarti.style.outline =
        "4px solid #e0b936";


      /*
        NORMALDE SANATÇI KARTINDA
        HEDEF SEÇİM DİNLEYİCİSİ YOK.

        BU YÜZDEN GEÇİCİ
        POINTER HANDLER EKLİYORUZ.
      */

      sanatciKarti.onclick =
        (event) => {

          event.stopPropagation();


          if (
            !hedefSecimAktif ||
            hedefSecimTipi !==
            "muze-guvenligi-sanatci"
          ) {

            return;
          }


          muzeGuvenligiSanatciyaYerlestir(
            kartBilgisi,
            kartElementi,
            katman,
            sanatciKarti
          );
        };
    }
  );
}


/* =====================================================
   MÜZE GÜVENLİĞİNİ SANATÇIYA YERLEŞTİR
===================================================== */

function muzeGuvenligiSanatciyaYerlestir(
  kartBilgisi,
  kartElementi,
  katman,
  sanatciElementi
) {

  const sanatciId =
    sanatciElementi.dataset.sanatci;


  const oyuncu =
    aktifOyuncu;


  /* =========================
     HEDEF MODUNU TEMİZLE
  ========================= */

  hedefSeciminiTemizle();


  document
    .querySelectorAll(
      ".yerlesenSanatciKarti"
    )
    .forEach(
      (kart) => {

        kart.onclick =
          null;
      }
    );


  const sanatciRect =
    sanatciElementi
      .getBoundingClientRect();


  /*
    GÜVENLİK KARTI SANATÇIYI
    TAMAMEN KAPATMAYACAK.

    DAHA KÜÇÜK BİR KART OLARAK
    ALT/SAĞ TARAFINA OTURUYOR.
  */

  const hedefGenislik =
    sanatciRect.width *
    0.46;


  const oran =
    kartElementi
      .getBoundingClientRect()
      .width /
    kartElementi
      .getBoundingClientRect()
      .height;


  const hedefYukseklik =
    hedefGenislik /
    oran;


  const hedefLeft =
    sanatciRect.right -
    hedefGenislik *
    0.88;


  const hedefTop =
    sanatciRect.bottom -
    hedefYukseklik *
    0.72;


  if (
    katman
  ) {

    gsap.to(
      katman,
      {
        opacity:
          0,

        duration:
          0.25
      }
    );
  }


  gsap.to(
    kartElementi,
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
        -4,

      duration:
        0.70,

      ease:
        "power3.inOut",

      onComplete:
        () => {

          if (
            katman
          ) {

            katman.remove();
          }


          /*
            FIXED'DAN OYUN ALANINA
            ABSOLUTE KARTA DÖNÜŞTÜR.
          */

          const sahneRect =
            oynanisEkrani
              .getBoundingClientRect();


          const guvenlikKarti =
            document.createElement(
              "img"
            );


          guvenlikKarti.src =
            kartBilgisi.dosya;


          guvenlikKarti.className =
            "aktifMuzeGuvenligiKarti";


          guvenlikKarti.dataset.oyuncu =
            String(
              oyuncu
            );


          guvenlikKarti.dataset.sanatci =
            sanatciId;


          guvenlikKarti.dataset.id =
            kartBilgisi.id;


          Object.assign(
            guvenlikKarti.style,
            {
              position:
                "absolute",

              left:
                (
                  hedefLeft -
                  sahneRect.left
                ) +
                "px",

              top:
                (
                  hedefTop -
                  sahneRect.top
                ) +
                "px",

              width:
                hedefGenislik +
                "px",

              height:
                hedefYukseklik +
                "px",

              zIndex:
                "14",

              objectFit:
                "fill",

              transform:
                "rotate(-4deg)",

              pointerEvents:
                "none",

              filter:
                "drop-shadow(0 6px 6px rgba(0,0,0,0.55))"
            }
          );


          oynanisEkrani.appendChild(
            guvenlikKarti
          );


          kartElementi.remove();


          muzeGuvenligiDurumu = {
            oyuncu:
              oyuncu,

            sanatciId:
              sanatciId,

            element:
              guvenlikKarti
          };


          window.muzeGuvenligiDurumu =
            muzeGuvenligiDurumu;


          bekleyenOzelKart =
            null;


          secimYazisiGoster(
            "MÜZE GÜVENLİĞİ AKTİF"
          );


          turuBitir();
        }
    }
  );
}


/* =====================================================
   MÜZE GÜVENLİĞİNİ BAŞKA SANATÇIYA AKTAR
===================================================== */

/*
  YENİ SERGİDE KORUNAN SANATÇI
  OYUNDAN ÇIKARILIRSA
  GÜVENLİK HAKKI KAYBOLMAZ.

  PART 10'DA YENİ SERGİ
  BU FONKSİYONU KULLANACAK.
*/

function muzeGuvenliginiSanatciyaAktar(
  yeniSanatciElementi
) {

  if (
    !muzeGuvenligiDurumu ||
    !muzeGuvenligiDurumu.element
  ) {

    return;
  }


  const guvenlikKarti =
    muzeGuvenligiDurumu.element;


  const sanatciRect =
    yeniSanatciElementi
      .getBoundingClientRect();


  const sahneRect =
    oynanisEkrani
      .getBoundingClientRect();


  const hedefGenislik =
    sanatciRect.width *
    0.46;


  const mevcutRect =
    guvenlikKarti
      .getBoundingClientRect();


  const oran =
    mevcutRect.width /
    mevcutRect.height;


  const hedefYukseklik =
    hedefGenislik /
    oran;


  const hedefLeft =
    sanatciRect.right -
    hedefGenislik *
    0.88;


  const hedefTop =
    sanatciRect.bottom -
    hedefYukseklik *
    0.72;


  gsap.to(
    guvenlikKarti,
    {
      left:
        (
          hedefLeft -
          sahneRect.left
        ),

      top:
        (
          hedefTop -
          sahneRect.top
        ),

      width:
        hedefGenislik,

      height:
        hedefYukseklik,

      duration:
        0.55,

      ease:
        "power3.inOut"
    }
  );


  muzeGuvenligiDurumu.sanatciId =
    yeniSanatciElementi.dataset.sanatci;


  guvenlikKarti.dataset.sanatci =
    yeniSanatciElementi.dataset.sanatci;
}


/* =====================================================
   DEPO KİLİDİ
===================================================== */

function depoKilidiKullan(
  kartBilgisi,
  kartElementi,
  katman
) {

  const rakip =
    rakipOyuncuNumarasi();


  const bosYuvalar =
    oyuncununBosDepoYuvalari(
      rakip
    );


  if (
    bosYuvalar.length ===
    0
  ) {

    ozelKartKararlariniGoster(
      kartBilgisi,
      kartElementi,
      katman
    );


    return;
  }


  /* =========================
     TEK BOŞ YUVA VARSA
     OTOMATİK ORAYA GİT
  ========================= */

  if (
    bosYuvalar.length ===
    1
  ) {

    depoKilidiniYuvayaYerlestir(
      kartBilgisi,
      kartElementi,
      katman,
      rakip,
      bosYuvalar[0]
    );


    return;
  }


  /* =========================
     İKİ BOŞ YUVA VARSA
     OYUNCU SEÇSİN
  ========================= */

  depoKilidiYuvaSecimEkraniAc(
    kartBilgisi,
    kartElementi,
    katman,
    rakip,
    bosYuvalar
  );
}


/* =====================================================
   DEPO KİLİDİ — YUVA SEÇİMİ
===================================================== */

function depoKilidiYuvaSecimEkraniAc(
  kartBilgisi,
  kartElementi,
  katman,
  rakip,
  yuvaIdleri
) {

  const secimKatmani =
    document.createElement(
      "div"
    );


  secimKatmani.id =
    "depoKilidiSecimKatmani";


  Object.assign(
    secimKatmani.style,
    {
      position:
        "fixed",

      inset:
        "0",

      zIndex:
        "77000",

      background:
        "rgba(0,0,0,0.66)",

      pointerEvents:
        "auto"
    }
  );


  document.body.appendChild(
    secimKatmani
  );


  secimYazisiGoster(
    "DEPO KİLİDİ — KİLİTLENECEK DEPOYU SEÇ"
  );


  const secimButonlari =
    [];


  yuvaIdleri.forEach(
    (yuvaId) => {

      const yuva =
        document.getElementById(
          yuvaId
        );


      if (
        !yuva
      ) {

        return;
      }


      const rect =
        yuva.getBoundingClientRect();


      const buton =
        document.createElement(
          "div"
        );


      buton.className =
        "depoKilidiHedefButonu";


      buton.dataset.yuvaId =
        yuvaId;


      Object.assign(
        buton.style,
        {
          position:
            "fixed",

          left:
            rect.left +
            "px",

          top:
            rect.top +
            "px",

          width:
            rect.width +
            "px",

          height:
            rect.height +
            "px",

          border:
            "4px solid #e0b936",

          boxSizing:
            "border-box",

          borderRadius:
            "8px",

          cursor:
            "pointer",

          zIndex:
            "77001",

          background:
            "rgba(224,185,54,0.12)"
        }
      );


      document.body.appendChild(
        buton
      );


      secimButonlari.push(
        buton
      );


      buton.addEventListener(
        "click",
        () => {

          butonSesiCal();


          secimButonlari.forEach(
            (item) =>
              item.remove()
          );


          secimKatmani.remove();


          depoKilidiniYuvayaYerlestir(
            kartBilgisi,
            kartElementi,
            katman,
            rakip,
            yuvaId
          );
        }
      );
    }
  );
}


/* =====================================================
   DEPO KİLİDİNİ YUVAYA YERLEŞTİR
===================================================== */

function depoKilidiniYuvayaYerlestir(
  kartBilgisi,
  kartElementi,
  katman,
  hedefOyuncu,
  yuvaId
) {

  const yuva =
    document.getElementById(
      yuvaId
    );


  if (
    !yuva
  ) {

    return;
  }


  const rect =
    yuva.getBoundingClientRect();


  if (
    katman
  ) {

    gsap.to(
      katman,
      {
        opacity:
          0,

        duration:
          0.25
      }
    );
  }


  gsap.to(
    kartElementi,
    {
      left:
        rect.left,

      top:
        rect.top,

      width:
        rect.width,

      height:
        rect.height,

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


          const kilitKarti =
            document.createElement(
              "img"
            );


          kilitKarti.src =
            kartBilgisi.dosya;


          kilitKarti.className =
            "aktifDepoKilidiKarti";


          kilitKarti.dataset.id =
            kartBilgisi.id;


          kilitKarti.dataset.oyuncu =
            String(
              hedefOyuncu
            );


          kilitKarti.dataset.yuvaId =
            yuvaId;


          Object.assign(
            kilitKarti.style,
            {
              position:
                "absolute",

              left:
                (
                  rect.left -
                  sahneRect.left
                ) +
                "px",

              top:
                (
                  rect.top -
                  sahneRect.top
                ) +
                "px",

              width:
                rect.width +
                "px",

              height:
                rect.height +
                "px",

              zIndex:
                "15",

              objectFit:
                "fill",

              pointerEvents:
                "none",

              filter:
                "drop-shadow(0 6px 7px rgba(0,0,0,0.55))"
            }
          );


          oynanisEkrani.appendChild(
            kilitKarti
          );


          kartElementi.remove();


          if (
            katman
          ) {

            katman.remove();
          }


          depoKilidiDurumu = {
            hedefOyuncu:
              hedefOyuncu,

            yuvaId:
              yuvaId,

            element:
              kilitKarti
          };


          window.depoKilidiDurumu =
            depoKilidiDurumu;


          bekleyenOzelKart =
            null;


          secimYazisiGoster(
            `${hedefOyuncu}. OYUNCUNUN BİR DEPOSU KİLİTLENDİ`
          );


          turuBitir();
        }
    }
  );
}


/* =====================================================
   ÖZEL KART ANA YÖNLENDİRİCİSİ — PART 9
===================================================== */

function ozelKartiKullan(
  kartBilgisi,
  kartElementi,
  katman
) {

  switch (
    kartBilgisi.id
  ) {

    case "arti-iki-kart":

      artiIkiKartKullan(
        kartBilgisi,
        kartElementi,
        katman
      );

      return;


    case "arkeolojik-kazi":

      arkeolojikKaziKullan(
        kartBilgisi,
        kartElementi,
        katman
      );

      return;


    case "fransa-takimi":

      fransaTakimiKullan(
        kartBilgisi,
        kartElementi,
        katman
      );

      return;


    case "dunya-takimi":

      dunyaTakimiKullan(
        kartBilgisi,
        kartElementi,
        katman
      );

      return;


    case "hollanda-takimi":

      hollandaTakimiKullan(
        kartBilgisi,
        kartElementi,
        katman
      );

      return;


    case "dedektif-sorusturmasi":

      dedektifSorusturmasiKullan(
        kartBilgisi,
        kartElementi,
        katman
      );

      return;


    case "gece-nobeti":

      geceNobetiKullan(
        kartBilgisi,
        kartElementi,
        katman
      );

      return;


    case "eser-calindi":

      eserCalindiKullan(
        kartBilgisi,
        kartElementi,
        katman
      );

      return;


    case "eser-sahteydi":

      eserSahteydiKullan(
        kartBilgisi,
        kartElementi,
        katman
      );

      return;


    case "muzede-kaza":

      muzedeKazaKullan(
        kartBilgisi,
        kartElementi,
        katman
      );

      return;


    case "restorasyon":

      restorasyonKullan(
        kartBilgisi,
        kartElementi,
        katman
      );

      return;


    case "gizli-sandik":

      gizliSandikKullan(
        kartBilgisi,
        kartElementi,
        katman
      );

      return;


    case "muze-guvenligi":

      muzeGuvenligiKullan(
        kartBilgisi,
        kartElementi,
        katman
      );

      return;


    case "depo-kilidi":

      depoKilidiKullan(
        kartBilgisi,
        kartElementi,
        katman
      );

      return;


    case "muze-muduru":

      muzeMuduruKullan(
        kartBilgisi,
        kartElementi,
        katman
      );

      return;


    case "ozel-kart-takasi":

      ozelKartTakasiKullan(
        kartBilgisi,
        kartElementi,
        katman
      );

      return;


    case "acik-artirma":

      acikArtirmaKullan(
        kartBilgisi,
        kartElementi,
        katman
      );

      return;


    /*
      PART 10:
      - Yeni Sergi
      - Klasikler Takımı
      - Müzede Deprem
    */

    default:

      console.log(
        "Sonraki partta bağlanacak:",
        kartBilgisi.id
      );


      ozelKartiCopeGonder(
        kartBilgisi,
        kartElementi,
        katman,
        true
      );

      return;
  }
}


/* =====================================================
   MÜZE MÜDÜRÜ
===================================================== */

function muzeMuduruKullan(
  kartBilgisi,
  kartElementi,
  katman
) {

  /*
    KURAL:
    DESTEDE 5'TEN AZ KART VARSA
    KULLANILAMAZ.
  */

  if (
    ortakDeste.length <
    5
  ) {

    ozelKartKararlariniGoster(
      kartBilgisi,
      kartElementi,
      katman
    );


    return;
  }


  kullanilanOzelKartiCopeAt(
    kartBilgisi,
    kartElementi,
    katman,
    () => {

      muzeMuduruBesKartEkraniAc();

    }
  );
}


/* =====================================================
   MÜZE MÜDÜRÜ — 5 KART
===================================================== */

function muzeMuduruBesKartEkraniAc() {

  const eski =
    document.getElementById(
      "muzeMuduruKatmani"
    );


  if (
    eski
  ) {

    eski.remove();
  }


  /*
    NORMAL DESTE ÜSTÜ ARRAY'İN SONU.
  */

  const besKart =
    ortakDeste.slice(
      -5
    );


  const secimKatmani =
    document.createElement(
      "div"
    );


  secimKatmani.id =
    "muzeMuduruKatmani";


  Object.assign(
    secimKatmani.style,
    {
      position:
        "fixed",

      inset:
        "0",

      zIndex:
        "78000",

      background:
        "rgba(0,0,0,0.82)",

      backdropFilter:
        "blur(4px)",

      WebkitBackdropFilter:
        "blur(4px)",

      display:
        "flex",

      flexDirection:
        "column",

      alignItems:
        "center",

      justifyContent:
        "center",

      gap:
        "20px",

      padding:
        "3%"
    }
  );


  const baslik =
    document.createElement(
      "div"
    );


  baslik.textContent =
    "MÜZE MÜDÜRÜ — DESTE ALTINA GÖNDERECEĞİN 1 KARTI SEÇ";


  Object.assign(
    baslik.style,
    {
      color:
        "#f5e7c4",

      fontFamily:
        'Georgia, "Times New Roman", serif',

      fontSize:
        "clamp(17px,1.5vw,30px)",

      fontWeight:
        "bold",

      textAlign:
        "center"
    }
  );


  const kartKutusu =
    document.createElement(
      "div"
    );


  Object.assign(
    kartKutusu.style,
    {
      display:
        "flex",

      justifyContent:
        "center",

      alignItems:
        "center",

      gap:
        "14px",

      flexWrap:
        "wrap",

      maxWidth:
        "96vw"
    }
  );


  secimKatmani.appendChild(
    baslik
  );


  secimKatmani.appendChild(
    kartKutusu
  );


  document.body.appendChild(
    secimKatmani
  );


  besKart.forEach(
    (kartBilgisi) => {

      const kart =
        document.createElement(
          "img"
        );


      kart.src =
        kartBilgisi.dosya;


      Object.assign(
        kart.style,
        {
          height:
            "min(43vh,390px)",

          width:
            "auto",

          maxWidth:
            "18vw",

          objectFit:
            "contain",

          cursor:
            "pointer",

          touchAction:
            "manipulation",

          userSelect:
            "none",

          WebkitUserDrag:
            "none",

          border:
            "3px solid transparent",

          borderRadius:
            "8px",

          filter:
            "drop-shadow(0 12px 16px rgba(0,0,0,0.65))"
        }
      );


      kartKutusu.appendChild(
        kart
      );


      kart.addEventListener(
        "click",
        () => {

          butonSesiCal();


          /*
            SEÇİLEN KART
            DESTE ALTINA GİDECEK.
          */

          muzeMuduruSirala(
            besKart,
            kartBilgisi,
            secimKatmani
          );
        }
      );
    }
  );
}


/* =====================================================
   MÜZE MÜDÜRÜ — KALAN 4 KARTI SIRALA
===================================================== */

function muzeMuduruSirala(
  besKart,
  altaGidecekKart,
  eskiKatman
) {

  eskiKatman.remove();


  const kalanDortKart =
    besKart.filter(
      (kart) =>
        kart !==
        altaGidecekKart
    );


  const katman =
    document.createElement(
      "div"
    );


  katman.id =
    "muzeMuduruSiralaKatmani";


  Object.assign(
    katman.style,
    {
      position:
        "fixed",

      inset:
        "0",

      zIndex:
        "78000",

      background:
        "rgba(0,0,0,0.82)",

      backdropFilter:
        "blur(4px)",

      WebkitBackdropFilter:
        "blur(4px)",

      display:
        "flex",

      flexDirection:
        "column",

      alignItems:
        "center",

      justifyContent:
        "center",

      gap:
        "22px",

      padding:
        "3%"
    }
  );


  const baslik =
    document.createElement(
      "div"
    );


  baslik.textContent =
    "KARTLARI ÇEKİLMESİNİ İSTEDİĞİN SIRAYLA SEÇ";


  Object.assign(
    baslik.style,
    {
      color:
        "#f5e7c4",

      fontFamily:
        'Georgia, "Times New Roman", serif',

      fontSize:
        "clamp(17px,1.5vw,30px)",

      fontWeight:
        "bold",

      textAlign:
        "center"
    }
  );


  const bilgi =
    document.createElement(
      "div"
    );


  bilgi.textContent =
    "1. seçeceğin kart destenin en üstünde olacak.";


  Object.assign(
    bilgi.style,
    {
      color:
        "#dfcfa3",

      fontFamily:
        'Georgia, "Times New Roman", serif',

      fontSize:
        "clamp(13px,1vw,19px)",

      fontWeight:
        "bold"
    }
  );


  const kartKutusu =
    document.createElement(
      "div"
    );


  Object.assign(
    kartKutusu.style,
    {
      display:
        "flex",

      justifyContent:
        "center",

      alignItems:
        "center",

      gap:
        "16px",

      flexWrap:
        "wrap"
    }
  );


  const siralamaYazisi =
    document.createElement(
      "div"
    );


  Object.assign(
    siralamaYazisi.style,
    {
      minHeight:
        "30px",

      color:
        "#f5e7c4",

      fontFamily:
        'Georgia, "Times New Roman", serif',

      fontWeight:
        "bold",

      fontSize:
        "clamp(14px,1.15vw,22px)"
    }
  );


  katman.appendChild(
    baslik
  );


  katman.appendChild(
    bilgi
  );


  katman.appendChild(
    kartKutusu
  );


  katman.appendChild(
    siralamaYazisi
  );


  document.body.appendChild(
    katman
  );


  const secilenSira =
    [];


  kalanDortKart.forEach(
    (kartBilgisi) => {

      const kart =
        document.createElement(
          "img"
        );


      kart.src =
        kartBilgisi.dosya;


      Object.assign(
        kart.style,
        {
          height:
            "min(45vh,400px)",

          width:
            "auto",

          maxWidth:
            "20vw",

          cursor:
            "pointer",

          border:
            "3px solid transparent",

          borderRadius:
            "8px",

          touchAction:
            "manipulation",

          userSelect:
            "none",

          WebkitUserDrag:
            "none",

          filter:
            "drop-shadow(0 12px 16px rgba(0,0,0,0.65))"
        }
      );


      kartKutusu.appendChild(
        kart
      );


      kart.addEventListener(
        "click",
        () => {

          if (
            secilenSira.includes(
              kartBilgisi
            )
          ) {

            return;
          }


          butonSesiCal();


          secilenSira.push(
            kartBilgisi
          );


          kart.style.borderColor =
            "#e5c266";


          kart.style.opacity =
            "0.55";


          siralamaYazisi.textContent =
            `${secilenSira.length}. kart seçildi`;


          if (
            secilenSira.length ===
            4
          ) {

            setTimeout(
              () => {

                muzeMuduruSonucuUygula(
                  besKart,
                  altaGidecekKart,
                  secilenSira
                );


                katman.remove();

              },
              400
            );
          }
        }
      );
    }
  );
}


/* =====================================================
   MÜZE MÜDÜRÜ — SONUCU DESTEYE UYGULA
===================================================== */

function muzeMuduruSonucuUygula(
  besKart,
  altaGidecekKart,
  cekilmeSirasi
) {

  /*
    ORTAK DESTENİN ÜST 5 KARTINI
    GERÇEK DESTEDEN ÇIKAR.
  */

  ortakDeste.splice(
    ortakDeste.length - 5,
    5
  );


  /*
    ALTA GİDECEK KART
    ARRAY'İN EN BAŞINA.
  */

  ortakDeste.unshift(
    altaGidecekKart
  );


  /*
    NORMAL ÇEKİŞ pop() İLE.

    O YÜZDEN OYUNCUNUN
    1. SEÇTİĞİ KART
    ARRAY'İN EN SONUNDA OLMALI.

    ÖRNEK:
    ÇEKİLME SIRASI A-B-C-D

    ARRAY'E:
    D-C-B-A
    EKLENİR.
  */

  const tersSira =
    [
      ...cekilmeSirasi
    ].reverse();


  tersSira.forEach(
    (kart) => {

      ortakDeste.push(
        kart
      );
    }
  );


  window.ortakDeste =
    ortakDeste;


  console.log(
    "MÜZE MÜDÜRÜ SONRASI DESTE:",
    ortakDeste
  );


  secimYazisiGoster(
    "MÜZE MÜDÜRÜ — DESTE YENİDEN DÜZENLENDİ"
  );


  turuBitir();
}


/* =====================================================
   ÖZEL KART TAKASI
===================================================== */

function ozelKartTakasiKullan(
  kartBilgisi,
  kartElementi,
  katman
) {

  const kendiKartlari =
    aktifOyuncununOzelKartlari();


  const rakipKartlari =
    rakibinOzelKartlari();


  if (
    kendiKartlari.length ===
      0 ||

    rakipKartlari.length ===
      0
  ) {

    ozelKartKararlariniGoster(
      kartBilgisi,
      kartElementi,
      katman
    );


    return;
  }


  /*
    TAKAS KARTININ KENDİSİ
    ÖNCE ÇÖPE.
  */

  kullanilanOzelKartiCopeAt(
    kartBilgisi,
    kartElementi,
    katman,
    () => {

      ozelKartTakasiSecimEkraniAc();

    }
  );
}


/* =====================================================
   ÖZEL KART TAKASI — SEÇİM EKRANI
===================================================== */

function ozelKartTakasiSecimEkraniAc() {

  const kendiOyuncu =
    aktifOyuncu;


  const rakip =
    rakipOyuncuNumarasi();


  const kendiDOMKartlari =
    Array.from(
      document.querySelectorAll(
        `.oyuncuOzelKartKarti[data-oyuncu="${kendiOyuncu}"]`
      )
    );


  const rakipDOMKartlari =
    Array.from(
      document.querySelectorAll(
        `.oyuncuOzelKartKarti[data-oyuncu="${rakip}"]`
      )
    );


  if (
    kendiDOMKartlari.length === 0 ||
    rakipDOMKartlari.length === 0
  ) {

    turuBitir();


    return;
  }


  const katman =
    document.createElement(
      "div"
    );


  katman.id =
    "ozelKartTakasiKatmani";


  Object.assign(
    katman.style,
    {
      position:
        "fixed",

      inset:
        "0",

      zIndex:
        "79000",

      background:
        "rgba(0,0,0,0.82)",

      backdropFilter:
        "blur(4px)",

      WebkitBackdropFilter:
        "blur(4px)",

      display:
        "flex",

      flexDirection:
        "column",

      justifyContent:
        "center",

      alignItems:
        "center",

      gap:
        "26px",

      padding:
        "3%"
    }
  );


  const baslik =
    document.createElement(
      "div"
    );


  baslik.textContent =
    "ÖZEL KART TAKASI";


  Object.assign(
    baslik.style,
    {
      color:
        "#f5e7c4",

      fontFamily:
        'Georgia, "Times New Roman", serif',

      fontSize:
        "clamp(21px,2vw,38px)",

      fontWeight:
        "bold"
    }
  );


  const kolonlar =
    document.createElement(
      "div"
    );


  Object.assign(
    kolonlar.style,
    {
      display:
        "flex",

      gap:
        "60px",

      justifyContent:
        "center",

      alignItems:
        "flex-start",

      flexWrap:
        "wrap"
    }
  );


  katman.appendChild(
    baslik
  );


  katman.appendChild(
    kolonlar
  );


  document.body.appendChild(
    katman
  );


  const kendiAlan =
    document.createElement(
      "div"
    );


  const rakipAlan =
    document.createElement(
      "div"
    );


  [
    kendiAlan,
    rakipAlan
  ].forEach(
    (alan) => {

      Object.assign(
        alan.style,
        {
          display:
            "flex",

          flexDirection:
            "column",

          alignItems:
            "center",

          gap:
            "14px"
        }
      );
    }
  );


  kolonlar.appendChild(
    kendiAlan
  );


  kolonlar.appendChild(
    rakipAlan
  );


  const kendiBaslik =
    document.createElement(
      "div"
    );


  kendiBaslik.textContent =
    "KENDİ KARTIN";


  const rakipBaslik =
    document.createElement(
      "div"
    );


  rakipBaslik.textContent =
    "RAKİBİN KAPALI KARTI";


  [
    kendiBaslik,
    rakipBaslik
  ].forEach(
    (yazi) => {

      Object.assign(
        yazi.style,
        {
          color:
            "#f5e7c4",

          fontFamily:
            'Georgia, "Times New Roman", serif',

          fontWeight:
            "bold",

          fontSize:
            "clamp(15px,1.2vw,23px)"
        }
      );
    }
  );


  kendiAlan.appendChild(
    kendiBaslik
  );


  rakipAlan.appendChild(
    rakipBaslik
  );


  const kendiKartKutusu =
    document.createElement(
      "div"
    );


  const rakipKartKutusu =
    document.createElement(
      "div"
    );


  [
    kendiKartKutusu,
    rakipKartKutusu
  ].forEach(
    (kutu) => {

      Object.assign(
        kutu.style,
        {
          display:
            "flex",

          gap:
            "16px"
        }
      );
    }
  );


  kendiAlan.appendChild(
    kendiKartKutusu
  );


  rakipAlan.appendChild(
    rakipKartKutusu
  );


  let secilenKendi =
    null;


  let secilenRakip =
    null;


  let secilenKendiGorsel =
    null;


  let secilenRakipGorsel =
    null;


  const onay =
    ozelKartKararButonuOlustur(
      "TAKAS ET"
    );

  onay.dataset.botTakasOnay = "evet";


  onay.disabled =
    true;


  onay.style.opacity =
    "0.35";


  katman.appendChild(
    onay
  );


  function onayiGuncelle() {

    const hazir =
      Boolean(
        secilenKendi &&
        secilenRakip
      );


    onay.disabled =
      !hazir;


    onay.style.opacity =
      hazir
        ? "1"
        : "0.35";
  }


  /* =========================
     KENDİ KARTLARIN
     ÖN YÜZÜ GÖSTERİLİR
  ========================= */

  kendiDOMKartlari.forEach(
    (domKart) => {

      const kayit =
        oyuncununOzelKartlari(
          kendiOyuncu
        ).find(
          (kart) =>
            kart.id ===
              domKart.dataset.id &&

            kart.yuvaId ===
              domKart.dataset.yuvaId
        );


      if (
        !kayit
      ) {

        return;
      }


      const gorsel =
        document.createElement(
          "img"
        );


      gorsel.src =
        kayit.dosya;

      gorsel.dataset.takasTaraf = "kendi";


      Object.assign(
        gorsel.style,
        {
          height:
            "min(42vh,380px)",

          width:
            "auto",

          cursor:
            "pointer",

          border:
            "4px solid transparent",

          borderRadius:
            "8px",

          touchAction:
            "manipulation",

          userSelect:
            "none"
        }
      );


      kendiKartKutusu.appendChild(
        gorsel
      );


      gorsel.addEventListener(
        "click",
        () => {

          if (
            secilenKendiGorsel
          ) {

            secilenKendiGorsel.style.borderColor =
              "transparent";
          }


          secilenKendi = {
            kayit,
            domKart
          };


          secilenKendiGorsel =
            gorsel;


          gorsel.style.borderColor =
            "#e5c266";


          onayiGuncelle();
        }
      );
    }
  );


  /* =========================
     RAKİBİN KARTLARI
     KAPALI KALIR
  ========================= */

  rakipDOMKartlari.forEach(
    (domKart) => {

      const kayit =
        oyuncununOzelKartlari(
          rakip
        ).find(
          (kart) =>
            kart.id ===
              domKart.dataset.id &&

            kart.yuvaId ===
              domKart.dataset.yuvaId
        );


      if (
        !kayit
      ) {

        return;
      }


      const gorsel =
        document.createElement(
          "img"
        );


      gorsel.src =
        "images/kart-arkasi.png";

      gorsel.dataset.takasTaraf = "rakip";


      Object.assign(
        gorsel.style,
        {
          height:
            "min(42vh,380px)",

          width:
            "auto",

          cursor:
            "pointer",

          border:
            "4px solid transparent",

          borderRadius:
            "8px",

          touchAction:
            "manipulation",

          userSelect:
            "none"
        }
      );


      rakipKartKutusu.appendChild(
        gorsel
      );


      gorsel.addEventListener(
        "click",
        () => {

          if (
            secilenRakipGorsel
          ) {

            secilenRakipGorsel.style.borderColor =
              "transparent";
          }


          secilenRakip = {
            kayit,
            domKart
          };


          secilenRakipGorsel =
            gorsel;


          gorsel.style.borderColor =
            "#e5c266";


          onayiGuncelle();
        }
      );
    }
  );


  onay.addEventListener(
    "click",
    () => {

      if (
        onay.disabled
      ) {

        return;
      }


      butonSesiCal();


      const kendiYuva =
        secilenKendi
          .kayit
          .yuvaId;


      const rakipYuva =
        secilenRakip
          .kayit
          .yuvaId;


      const kendiKartBilgisi = {
        ...secilenKendi.kayit
      };


      const rakipKartBilgisi = {
        ...secilenRakip.kayit
      };


      /* =========================
         VERİ DİZİLERİNDEN SİL
      ========================= */

      oyuncudanOzelKartSil(
        kendiOyuncu,
        kendiKartBilgisi.id,
        kendiYuva
      );


      oyuncudanOzelKartSil(
        rakip,
        rakipKartBilgisi.id,
        rakipYuva
      );


      /* =========================
         YENİ SAHİPLERİNE EKLE
      ========================= */

      oyuncununOzelKartlari(
        kendiOyuncu
      ).push(
        {
          ...rakipKartBilgisi,

          yuvaId:
            kendiYuva
        }
      );


      oyuncununOzelKartlari(
        rakip
      ).push(
        {
          ...kendiKartBilgisi,

          yuvaId:
            rakipYuva
        }
      );


      /* =========================
         DOM KARTLARINI GÜNCELLE
      ========================= */

      secilenKendi
        .domKart
        .dataset
        .id =
          rakipKartBilgisi.id;


      secilenKendi
        .domKart
        .dataset
        .gercekDosya =
          rakipKartBilgisi.dosya;


      secilenKendi
        .domKart
        .dataset
        .oyuncu =
          String(
            kendiOyuncu
          );


      secilenRakip
        .domKart
        .dataset
        .id =
          kendiKartBilgisi.id;


      secilenRakip
        .domKart
        .dataset
        .gercekDosya =
          kendiKartBilgisi.dosya;


      secilenRakip
        .domKart
        .dataset
        .oyuncu =
          String(
            rakip
          );


      /*
        MASADA İKİSİ DE
        KAPALI KALIR.
      */

      secilenKendi.domKart.src =
        "images/kart-arkasi.png";


      secilenRakip.domKart.src =
        "images/kart-arkasi.png";


      katman.remove();


      secimYazisiGoster(
        "ÖZEL KART TAKASI TAMAMLANDI"
      );


      turuBitir();
    }
  );
}


/* =====================================================
   AÇIK ARTIRMA
===================================================== */

function acikArtirmaKullan(
  kartBilgisi,
  kartElementi,
  katman
) {

  if (
    ortakDeste.length ===
    0
  ) {

    ozelKartKararlariniGoster(
      kartBilgisi,
      kartElementi,
      katman
    );


    return;
  }


  kullanilanOzelKartiCopeAt(
    kartBilgisi,
    kartElementi,
    katman,
    () => {

      acikArtirmaZarEkraniAc();

    }
  );
}


/* =====================================================
   AÇIK ARTIRMA — ZAR EKRANI
===================================================== */

function acikArtirmaZarEkraniAc() {

  /* Açık artırma etkisine geçmeden önce çekilen/yuvadan açılan özel kartın
     büyük görseli ve karar katmanı ekranda kesinlikle kalmamalı. */
  document.querySelectorAll(
    ".cekilenBuyukKart, .cekilenKartKatmani, " +
    "#eldekiOzelKartKatmani, #ozelKartKararButonlari, #ozelKartUyariMetni"
  ).forEach((element) => {
    gsap.killTweensOf(element);
    element.remove();
  });

  /* Eski yuvadan-kullan akışında sınıfsız oluşturulmuş olabilecek açık
     artırma görsellerini de yalnız body/fixed düzeyinde hedefleyip temizle. */
  document.querySelectorAll('body > img[src*="acik-artirma"]')
    .forEach((element) => {
      if (getComputedStyle(element).position !== "fixed") return;
      gsap.killTweensOf(element);
      element.remove();
    });

  const eski =
    document.getElementById(
      "acikArtirmaZarKatmani"
    );


  if (
    eski
  ) {

    eski.remove();
  }


  const katman =
    document.createElement(
      "div"
    );


  katman.id =
    "acikArtirmaZarKatmani";


  Object.assign(
    katman.style,
    {
      position:
        "fixed",

      inset:
        "0",

      zIndex:
        "80000",

      background:
        "rgba(0,0,0,0.80)",

      backdropFilter:
        "blur(4px)",

      WebkitBackdropFilter:
        "blur(4px)",

      display:
        "flex",

      flexDirection:
        "column",

      justifyContent:
        "center",

      alignItems:
        "center",

      gap:
        "24px"
    }
  );


  const baslik =
    document.createElement(
      "div"
    );


  baslik.textContent =
    "AÇIK ARTIRMA";


  Object.assign(
    baslik.style,
    {
      color:
        "#f5e7c4",

      fontFamily:
        'Georgia, "Times New Roman", serif',

      fontSize:
        "clamp(22px,2.2vw,40px)",

      fontWeight:
        "bold"
    }
  );


  const paneller =
    document.createElement(
      "div"
    );


  Object.assign(
    paneller.style,
    {
      display:
        "flex",

      gap:
        "40px",

      justifyContent:
        "center",

      alignItems:
        "center"
    }
  );


  const genelSonuc =
    document.createElement(
      "div"
    );


  genelSonuc.className =
    "v81AcikArtirmaGenelSonuc";


  Object.assign(
    genelSonuc.style,
    {
      minHeight:
        "34px",

      color:
        "#f5e7c4",

      fontFamily:
        'Georgia, "Times New Roman", serif',

      fontSize:
        "clamp(17px,1.5vw,28px)",

      fontWeight:
        "bold"
    }
  );


  katman.appendChild(
    baslik
  );


  katman.appendChild(
    paneller
  );


  katman.appendChild(
    genelSonuc
  );


  document.body.appendChild(
    katman
  );


  let oyuncu1Sonuc =
    null;


  let oyuncu2Sonuc =
    null;


  let sira =
    1;


  let kilit =
    false;


  const semboller = [
    "⚀",
    "⚁",
    "⚂",
    "⚃",
    "⚄",
    "⚅"
  ];


  function panelOlustur(
    oyuncu
  ) {

    const panel =
      document.createElement(
        "div"
      );


    Object.assign(
      panel.style,
      {
        padding:
          "26px",

        minWidth:
          "230px",

        background:
          "rgba(244,227,187,0.96)",

        border:
          "4px solid #8a621e",

        borderRadius:
          "20px",

        textAlign:
          "center",

        fontFamily:
          'Georgia, "Times New Roman", serif',

        color:
          "#5b3d11"
      }
    );


    const isim =
      document.createElement(
        "div"
      );


    isim.textContent =
      `${oyuncu}. OYUNCU`;


    isim.style.fontWeight =
      "bold";


    isim.style.marginBottom =
      "16px";


    const zar =
      document.createElement(
        "div"
      );


    zar.textContent =
      "⚀";


    Object.assign(
      zar.style,
      {
        fontSize:
          "90px",

        lineHeight:
          "1",

        marginBottom:
          "18px"
      }
    );


    const buton =
      ozelKartKararButonuOlustur(
        "ZAR AT"
      );


    buton.dataset.acikArtirmaOyuncu =
      String(
        oyuncu
      );


    const sonuc =
      document.createElement(
        "div"
      );


    Object.assign(
      sonuc.style,
      {
        minHeight:
          "26px",

        marginTop:
          "14px",

        fontWeight:
          "bold"
      }
    );


    panel.appendChild(
      isim
    );


    panel.appendChild(
      zar
    );


    panel.appendChild(
      buton
    );


    panel.appendChild(
      sonuc
    );


    paneller.appendChild(
      panel
    );


    return {
      panel,
      zar,
      buton,
      sonuc
    };
  }


  const p1 =
    panelOlustur(
      1
    );


  const p2 =
    panelOlustur(
      2
    );


  p2.buton.disabled =
    true;


  p2.buton.style.opacity =
    "0.35";


  function tekZarAt(
    oyuncu,
    panelBilgisi
  ) {

    if (
      kilit ||
      oyuncu !==
      sira
    ) {

      return;
    }


    kilit =
      true;


    panelBilgisi.buton.disabled =
      true;


    butonSesiCal();


    let sayac =
      0;


    const interval =
      setInterval(
        () => {

          panelBilgisi.zar.textContent =
            semboller[
              Math.floor(
                Math.random() *
                6
              )
            ];


          sayac++;


          if (
            sayac >=
            13
          ) {

            clearInterval(
              interval
            );


            const sonuc =
              Math.floor(
                Math.random() *
                6
              ) +
              1;


            panelBilgisi.zar.textContent =
              semboller[
                sonuc - 1
              ];


            panelBilgisi.sonuc.textContent =
              `${sonuc} GELDİ`;


            if (
              oyuncu ===
              1
            ) {

              oyuncu1Sonuc =
                sonuc;


              sira =
                2;


              p2.buton.disabled =
                false;


              p2.buton.style.opacity =
                "1";


              kilit =
                false;


              return;
            }


            oyuncu2Sonuc =
              sonuc;


            kilit =
              false;


            acikArtirmaSonucuKontrolEt();

          }

        },
        75
      );
  }


  p1.buton.addEventListener(
    "click",
    () => {

      tekZarAt(
        1,
        p1
      );
    }
  );


  p2.buton.addEventListener(
    "click",
    () => {

      tekZarAt(
        2,
        p2
      );
    }
  );


  function acikArtirmaSonucuKontrolEt() {

    if (
      oyuncu1Sonuc ===
      oyuncu2Sonuc
    ) {

      genelSonuc.innerHTML =
        '<span class="v81AcikArtirmaAd">EŞİTLİK</span>' +
        '<span class="v81AcikArtirmaMetin">TEKRAR ZAR ATILACAK</span>';


      setTimeout(
        () => {

          oyuncu1Sonuc =
            null;


          oyuncu2Sonuc =
            null;


          sira =
            1;


          p1.zar.textContent =
            "⚀";


          p2.zar.textContent =
            "⚀";


          p1.sonuc.textContent =
            "";


          p2.sonuc.textContent =
            "";


          p1.buton.disabled =
            false;


          p1.buton.style.opacity =
            "1";


          p2.buton.disabled =
            true;


          p2.buton.style.opacity =
            "0.35";


          genelSonuc.textContent =
            "";

        },
        1200
      );


      return;
    }


    const kazanan =
      oyuncu1Sonuc >
      oyuncu2Sonuc
        ? 1
        : 2;


    genelSonuc.innerHTML =
      `<span class="v81AcikArtirmaAd">${kazanan}. OYUNCU</span>` +
      '<span class="v81AcikArtirmaMetin">AÇIK ARTIRMAYI KAZANDI</span>';


    setTimeout(
      () => {

        katman.remove();


        acikArtirmaKazananKartCeksin(
          kazanan
        );

      },
      1300
    );
  }
}


/* =====================================================
   AÇIK ARTIRMA — KAZANAN KARTI ÇEKER
===================================================== */

function acikArtirmaKazananKartCeksin(
  kazanan
) {

  if (
    ortakDeste.length ===
    0
  ) {

    aktifOyuncu =
      kazanan;


    turuBitir();


    return;
  }


  /*
    KAZANAN OYUNCU
    BİR SONRAKİ KARTIN
    SAHİBİ OLUR.
  */

  aktifOyuncu =
    kazanan;


  const cekilenKart =
    ortakDeste.pop();


  window.ortakDeste =
    ortakDeste;


  kartCekmeKilidi =
    true;


  secimYazisiGoster(
    `${kazanan}. OYUNCU AÇIK ARTIRMADAN KART KAZANDI`
  );


  cekilenKartiBuyukGoster(
    cekilenKart
  );
}


/* =====================================================
   ÖZEL KART ANA YÖNLENDİRİCİSİ — PART 10
===================================================== */

function ozelKartiKullan(
  kartBilgisi,
  kartElementi,
  katman
) {

  switch (
    kartBilgisi.id
  ) {

    case "arti-iki-kart":

      artiIkiKartKullan(
        kartBilgisi,
        kartElementi,
        katman
      );

      return;


    case "arkeolojik-kazi":

      arkeolojikKaziKullan(
        kartBilgisi,
        kartElementi,
        katman
      );

      return;


    case "fransa-takimi":

      fransaTakimiKullan(
        kartBilgisi,
        kartElementi,
        katman
      );

      return;


    case "dunya-takimi":

      dunyaTakimiKullan(
        kartBilgisi,
        kartElementi,
        katman
      );

      return;


    case "hollanda-takimi":

      hollandaTakimiKullan(
        kartBilgisi,
        kartElementi,
        katman
      );

      return;


    case "dedektif-sorusturmasi":

      dedektifSorusturmasiKullan(
        kartBilgisi,
        kartElementi,
        katman
      );

      return;


    case "gece-nobeti":

      geceNobetiKullan(
        kartBilgisi,
        kartElementi,
        katman
      );

      return;


    case "eser-calindi":

      eserCalindiKullan(
        kartBilgisi,
        kartElementi,
        katman
      );

      return;


    case "eser-sahteydi":

      eserSahteydiKullan(
        kartBilgisi,
        kartElementi,
        katman
      );

      return;


    case "muzede-kaza":

      muzedeKazaKullan(
        kartBilgisi,
        kartElementi,
        katman
      );

      return;


    case "restorasyon":

      restorasyonKullan(
        kartBilgisi,
        kartElementi,
        katman
      );

      return;


    case "gizli-sandik":

      gizliSandikKullan(
        kartBilgisi,
        kartElementi,
        katman
      );

      return;


    case "muze-guvenligi":

      muzeGuvenligiKullan(
        kartBilgisi,
        kartElementi,
        katman
      );

      return;


    case "depo-kilidi":

      depoKilidiKullan(
        kartBilgisi,
        kartElementi,
        katman
      );

      return;


    case "muze-muduru":

      muzeMuduruKullan(
        kartBilgisi,
        kartElementi,
        katman
      );

      return;


    case "ozel-kart-takasi":

      ozelKartTakasiKullan(
        kartBilgisi,
        kartElementi,
        katman
      );

      return;


    case "acik-artirma":

      acikArtirmaKullan(
        kartBilgisi,
        kartElementi,
        katman
      );

      return;


    case "yeni-sergi":

      yeniSergiKullan(
        kartBilgisi,
        kartElementi,
        katman
      );

      return;


    case "klasikler-takimi":

      klasiklerTakimiKullan(
        kartBilgisi,
        kartElementi,
        katman
      );

      return;


    case "muzede-deprem":

      /*
        NORMALDE BURAYA GELMEZ.
        ÇEKİLDİĞİ ANDA
        PART 3 TARAFINDAN
        OTOMATİK ÇALIŞTIRILIR.
      */

      muzedeDepremiBaslat(
        kartBilgisi,
        kartElementi,
        katman
      );

      return;


    default:

      console.warn(
        "Tanımsız özel kart:",
        kartBilgisi.id
      );


      ozelKartiCopeGonder(
        kartBilgisi,
        kartElementi,
        katman,
        true
      );

      return;
  }
}


/* =====================================================
   KLASİKLER TAKIMI
===================================================== */

function klasiklerTakimiKullan(
  kartBilgisi,
  kartElementi,
  katman
) {

  const klasikSayisi =
    takimSanatciSayisi(
      "klasikler"
    );


  if (
    klasikSayisi <= 0
  ) {

    ozelKartKararlariniGoster(
      kartBilgisi,
      kartElementi,
      katman
    );


    return;
  }


  let hedefler =
    [];


  let hedefAdedi =
    0;


  let mesaj =
    "";


  /* =========================
     1 KLASİK
  ========================= */

  if (
    klasikSayisi === 1
  ) {

    hedefler =
      rakibinTamamlanmamisUygunEserleri();


    hedefAdedi =
      1;


    mesaj =
      "RAKİBİN TAMAMLANMAMIŞ KOLEKSİYONUNDAN 1 ESER SEÇ";
  }


  /* =========================
     2 KLASİK
  ========================= */

  if (
    klasikSayisi === 2
  ) {

    hedefler =
      rakibinTamamlanmamisUygunEserleri();


    hedefAdedi =
      Math.min(
        2,
        hedefler.length
      );


    mesaj =
      hedefAdedi === 1

        ? "RAKİBİN TAMAMLANMAMIŞ KOLEKSİYONUNDAN 1 ESER SEÇ"

        : "RAKİBİN TAMAMLANMAMIŞ KOLEKSİYONUNDAN 2 ESER SEÇ";
  }


  /* =========================
     3 KLASİK
  ========================= */

  if (
    klasikSayisi >= 3
  ) {

    hedefler =
      rakibinTamamlanmisUygunEserleri();


    hedefAdedi =
      1;


    mesaj =
      "RAKİBİN TAMAMLANMIŞ KOLEKSİYONUNDAN 1 ESER SEÇ";
  }


  if (
    hedefler.length === 0 ||
    hedefAdedi <= 0
  ) {

    ozelKartKararlariniGoster(
      kartBilgisi,
      kartElementi,
      katman
    );


    return;
  }


  kullanilanOzelKartiCopeAt(
    kartBilgisi,
    kartElementi,
    katman,
    () => {

      rakipEserHedefSecimiBaslat(
        hedefler,
        hedefAdedi,
        mesaj,
        (secilenler) => {

          eserleriSiraylaCopeGonder(
            secilenler,
            () => {

              turuBitir();
            }
          );
        }
      );
    }
  );
}


/* =====================================================
   YENİ SERGİ
===================================================== */

function yeniSergiKullan(
  kartBilgisi,
  kartElementi,
  katman
) {

  if (
    artanSanatcilar.length === 0
  ) {

    ozelKartKararlariniGoster(
      kartBilgisi,
      kartElementi,
      katman
    );


    return;
  }


  /*
    YENİ SERGİ KARTININ
    KENDİSİ ÖNCE ÇÖPE GİDER.
  */

  kullanilanOzelKartiCopeAt(
    kartBilgisi,
    kartElementi,
    katman,
    () => {

      yeniSergiArtanSanatciSecimiAc();

    }
  );
}


/* =====================================================
   YENİ SERGİ — ARTAN 6 SANATÇIYI AÇ
===================================================== */

function yeniSergiArtanSanatciSecimiAc() {

  const eski =
    document.getElementById(
      "yeniSergiArtanKatmani"
    );


  if (
    eski
  ) {

    eski.remove();
  }


  const katman =
    document.createElement(
      "div"
    );


  katman.id =
    "yeniSergiArtanKatmani";


  Object.assign(
    katman.style,
    {
      position:
        "fixed",

      inset:
        "0",

      zIndex:
        "81000",

      background:
        "rgba(0,0,0,0.82)",

      backdropFilter:
        "blur(4px)",

      WebkitBackdropFilter:
        "blur(4px)",

      display:
        "flex",

      flexDirection:
        "column",

      justifyContent:
        "center",

      alignItems:
        "center",

      gap:
        "22px",

      padding:
        "3%"
    }
  );


  const baslik =
    document.createElement(
      "div"
    );


  baslik.textContent =
    "YENİ SERGİ — OYUNA DAHİL EDECEĞİN SANATÇIYI SEÇ";


  Object.assign(
    baslik.style,
    {
      color:
        "#f5e7c4",

      fontFamily:
        'Georgia, "Times New Roman", serif',

      fontSize:
        "clamp(18px,1.6vw,32px)",

      fontWeight:
        "bold",

      textAlign:
        "center"
    }
  );


  const kartKutusu =
    document.createElement(
      "div"
    );


  Object.assign(
    kartKutusu.style,
    {
      display:
        "flex",

      flexWrap:
        "wrap",

      justifyContent:
        "center",

      alignItems:
        "center",

      gap:
        "14px",

      maxWidth:
        "96vw",

      maxHeight:
        "78vh",

      overflowY:
        "auto"
    }
  );


  katman.appendChild(
    baslik
  );


  katman.appendChild(
    kartKutusu
  );


  document.body.appendChild(
    katman
  );


  artanSanatcilar.forEach(
    (sanatci) => {

      const kart =
        document.createElement(
          "img"
        );


      kart.src =
        sanatci.dosya;


      Object.assign(
        kart.style,
        {
          height:
            "min(42vh,380px)",

          width:
            "auto",

          maxWidth:
            "21vw",

          cursor:
            "pointer",

          touchAction:
            "manipulation",

          userSelect:
            "none",

          WebkitUserDrag:
            "none",

          objectFit:
            "contain",

          border:
            "3px solid transparent",

          borderRadius:
            "8px",

          filter:
            "drop-shadow(0 13px 18px rgba(0,0,0,0.70))"
        }
      );


      kartKutusu.appendChild(
        kart
      );


      kart.addEventListener(
        "click",
        () => {

          butonSesiCal();


          katman.remove();


          yeniSergiEskiSanatciSecimiAc(
            sanatci
          );
        }
      );
    }
  );
}


/* =====================================================
   YENİ SERGİ — ÇIKACAK SANATÇIYI SEÇ
===================================================== */

function yeniSergiEskiSanatciSecimiAc(
  yeniSanatci
) {

  const oyuncu =
    aktifOyuncu;


  const oyuncuSanatciKartlari =
    Array.from(
      document.querySelectorAll(
        `.yerlesenSanatciKarti[data-oyuncu="${oyuncu}"]`
      )
    );


  const katman =
    document.createElement(
      "div"
    );


  katman.id =
    "yeniSergiEskiSanatciKatmani";


  Object.assign(
    katman.style,
    {
      position:
        "fixed",

      inset:
        "0",

      zIndex:
        "81100",

      background:
        "rgba(0,0,0,0.82)",

      backdropFilter:
        "blur(4px)",

      WebkitBackdropFilter:
        "blur(4px)",

      display:
        "flex",

      flexDirection:
        "column",

      justifyContent:
        "center",

      alignItems:
        "center",

      gap:
        "24px"
    }
  );


  const baslik =
    document.createElement(
      "div"
    );


  baslik.textContent =
    "OYUNDAN ÇIKARACAĞIN SANATÇIYI SEÇ";


  Object.assign(
    baslik.style,
    {
      color:
        "#f5e7c4",

      fontFamily:
        'Georgia, "Times New Roman", serif',

      fontSize:
        "clamp(18px,1.6vw,32px)",

      fontWeight:
        "bold"
    }
  );


  const kutu =
    document.createElement(
      "div"
    );


  Object.assign(
    kutu.style,
    {
      display:
        "flex",

      gap:
        "20px",

      justifyContent:
        "center",

      alignItems:
        "center",

      flexWrap:
        "wrap"
    }
  );


  katman.appendChild(
    baslik
  );


  katman.appendChild(
    kutu
  );


  document.body.appendChild(
    katman
  );


  oyuncuSanatciKartlari.forEach(
    (domSanatci) => {

      const sanatciId =
        domSanatci.dataset.sanatci;


      const sanatciBilgisi =
        sanatcilar.find(
          (sanatci) =>
            sanatci.id ===
            sanatciId
        );


      if (
        !sanatciBilgisi
      ) {

        return;
      }


      const kart =
        document.createElement(
          "img"
        );


      kart.src =
        sanatciBilgisi.dosya;


      Object.assign(
        kart.style,
        {
          height:
            "min(48vh,420px)",

          width:
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
            "drop-shadow(0 15px 20px rgba(0,0,0,0.70))"
        }
      );


      kutu.appendChild(
        kart
      );


      kart.addEventListener(
        "click",
        () => {

          butonSesiCal();


          katman.remove();


          yeniSergiDegisimiUygula(
            yeniSanatci,
            domSanatci
          );
        }
      );
    }
  );
}


/* =====================================================
   YENİ SERGİ — DEĞİŞİMİ UYGULA
===================================================== */

function yeniSergiDegisimiUygula(
  yeniSanatci,
  eskiSanatciElementi
) {

  const oyuncu =
    aktifOyuncu;


  const eskiSanatciId =
    eskiSanatciElementi
      .dataset
      .sanatci;


  const sanatciIndex =
    Number(
      eskiSanatciElementi
        .dataset
        .sanatciIndex
    );


  const eskiSanatci =
    sanatcilar.find(
      (sanatci) =>
        sanatci.id ===
        eskiSanatciId
    );


  if (
    !eskiSanatci ||
    Number.isNaN(
      sanatciIndex
    )
  ) {

    turuBitir();


    return;
  }


  /* =========================
     ESKİ SANATÇININ ESERLERİ
     ÇÖPE GİDECEK
  ========================= */

  const eskiSanatciEserleri =
    oyuncununMasadakiEserleri(
      oyuncu
    ).filter(
      (eser) =>
        eser.dataset.sanatci ===
        eskiSanatciId
    );


  /* =========================
     GÜVENLİK BU SANATÇIDA MI?
  ========================= */

  const guvenlikAktarilacak =
    Boolean(
      muzeGuvenligiDurumu &&
      muzeGuvenligiDurumu.oyuncu ===
        oyuncu &&
      muzeGuvenligiDurumu.sanatciId ===
        eskiSanatciId
    );


  /* =========================
     ARTAN SANATÇILARI GÜNCELLE
  ========================= */

  const yeniIndex =
    artanSanatcilar.findIndex(
      (sanatci) =>
        sanatci.id ===
        yeniSanatci.id
    );


  if (
    yeniIndex !==
    -1
  ) {

    artanSanatcilar.splice(
      yeniIndex,
      1
    );
  }


  artanSanatcilar.push(
    {
      ...eskiSanatci
    }
  );


  window.artanSanatcilar =
    artanSanatcilar;


  /* =========================
     OYUNCUNUN 3 SANATÇISINI
     GÜNCELLE
  ========================= */

  const secimler =
    oyuncununSanatcilari(
      oyuncu
    );


  secimler[
    sanatciIndex
  ] = {
    ...yeniSanatci
  };


  /* =========================
     SANATÇI KARTININ GÖRSELİNİ
     DEĞİŞTİR
  ========================= */

  eskiSanatciElementi.src =
    yeniSanatci.dosya;


  eskiSanatciElementi.dataset.sanatci =
    yeniSanatci.id;


  eskiSanatciElementi.dataset.gercekDosya =
    yeniSanatci.dosya;


  /* =========================
     ÖNCE ESKİ ESERLER ÇÖPE
  ========================= */

  eserleriSiraylaCopeGonder(
    eskiSanatciEserleri,
    () => {

      artanSanatciDestesiGorseliniYenile();


      if (
        guvenlikAktarilacak
      ) {

        /*
          KAZANILMIŞ GÜVENLİK
          KAYBOLMUYOR.

          OYUNCU İSTEDİĞİ
          SANATÇIYA AKTARIYOR.
        */

        yeniSergiGuvenlikAktarmaSecimiAc();


        return;
      }


      secimYazisiGoster(
        "YENİ SERGİ TAMAMLANDI"
      );


      turuBitir();
    }
  );
}


/* =====================================================
   YENİ SERGİ — GÜVENLİĞİ AKTAR
===================================================== */

function yeniSergiGuvenlikAktarmaSecimiAc() {

  const oyuncu =
    aktifOyuncu;


  const sanatciKartlari =
    Array.from(
      document.querySelectorAll(
        `.yerlesenSanatciKarti[data-oyuncu="${oyuncu}"]`
      )
    );


  const katman =
    document.createElement(
      "div"
    );


  katman.id =
    "yeniSergiGuvenlikAktarmaKatmani";


  Object.assign(
    katman.style,
    {
      position:
        "fixed",

      inset:
        "0",

      zIndex:
        "81200",

      background:
        "rgba(0,0,0,0.78)",

      display:
        "flex",

      flexDirection:
        "column",

      justifyContent:
        "center",

      alignItems:
        "center",

      gap:
        "22px"
    }
  );


  const baslik =
    document.createElement(
      "div"
    );


  baslik.textContent =
    "MÜZE GÜVENLİĞİNİ AKTARACAĞIN SANATÇIYI SEÇ";


  Object.assign(
    baslik.style,
    {
      color:
        "#f5e7c4",

      fontFamily:
        'Georgia, "Times New Roman", serif',

      fontWeight:
        "bold",

      fontSize:
        "clamp(18px,1.6vw,31px)"
    }
  );


  const kutu =
    document.createElement(
      "div"
    );


  Object.assign(
    kutu.style,
    {
      display:
        "flex",

      gap:
        "20px",

      flexWrap:
        "wrap",

      justifyContent:
        "center"
    }
  );


  katman.appendChild(
    baslik
  );


  katman.appendChild(
    kutu
  );


  document.body.appendChild(
    katman
  );


  sanatciKartlari.forEach(
    (sanatciDom) => {

      const sanatciBilgisi =
        sanatcilar.find(
          (sanatci) =>
            sanatci.id ===
            sanatciDom.dataset.sanatci
        );


      if (
        !sanatciBilgisi
      ) {

        return;
      }


      const kart =
        document.createElement(
          "img"
        );


      kart.src =
        sanatciBilgisi.dosya;


      Object.assign(
        kart.style,
        {
          height:
            "min(46vh,410px)",

          width:
            "auto",

          cursor:
            "pointer",

          touchAction:
            "manipulation",

          userSelect:
            "none"
        }
      );


      kutu.appendChild(
        kart
      );


      kart.addEventListener(
        "click",
        () => {

          butonSesiCal();


          katman.remove();


          muzeGuvenliginiSanatciyaAktar(
            sanatciDom
          );


          secimYazisiGoster(
            "MÜZE GÜVENLİĞİ YENİ SANATÇIYA AKTARILDI"
          );


          setTimeout(
            () => {

              turuBitir();

            },
            450
          );
        }
      );
    }
  );
}


/* =====================================================
   ARTAN SANATÇI DESTESİ GÖRSELİNİ YENİLE
===================================================== */

function artanSanatciDestesiGorseliniYenile() {

  document
    .querySelectorAll(
      ".artanSanatciKarti"
    )
    .forEach(
      (kart) =>
        kart.remove()
    );


  if (
    !artanSanatciYuvasi
  ) {

    return;
  }


  const sahneRect =
    oynanisEkrani
      .getBoundingClientRect();


  const yuvaRect =
    artanSanatciYuvasi
      .getBoundingClientRect();


  artanSanatcilar.forEach(
    (sanatci, index) => {

      const kart =
        document.createElement(
          "img"
        );


      kart.src =
        "images/kart-arkasi.png";


      kart.className =
        "artanSanatciKarti";


      kart.dataset.sanatci =
        sanatci.id;


      Object.assign(
        kart.style,
        {
          position:
            "absolute",

          left:
            (
              yuvaRect.left -
              sahneRect.left +
              index * 0.8
            ) +
            "px",

          top:
            (
              yuvaRect.top -
              sahneRect.top -
              index * 0.6
            ) +
            "px",

          width:
            yuvaRect.width +
            "px",

          height:
            yuvaRect.height +
            "px",

          zIndex:
            20 +
            index,

          objectFit:
            "fill",

          pointerEvents:
            "none",

          transform:
            `rotate(${(
              index -
              2.5
            ) * 0.35}deg)`
        }
      );


      oynanisEkrani.appendChild(
        kart
      );
    }
  );
}


/* =====================================================
   MÜZEDE DEPREM
===================================================== */

function muzedeDepremiBaslat(
  kartBilgisi,
  kartElementi,
  katman
) {

  /*
    MÜZEDE DEPREM:
    - KULLAN BUTONU YOK
    - SAKLA YOK
    - ÇÖPE AT YOK
    - ÇEKİLDİĞİ ANDA MECBURİ
    - TÜM 5 OYUNLUK OTURUM BİTER
    - SANATÇI SEÇİMİNDEN
      YENİDEN BAŞLANIR
  */

  kartCekmeKilidi =
    true;


  oyunAsamasi =
    "muzede-deprem";


  secimYazisiGoster(
    "MÜZEDE DEPREM!"
  );


  document
    .querySelectorAll(
      "button"
    )
    .forEach(
      (buton) => {

        buton.disabled =
          true;
      }
    );


  /*
    KART 2 SANİYE
    EKRANDA KALSIN.
  */

  setTimeout(
    () => {

      muzedeDepremEfekti(
        kartBilgisi,
        kartElementi,
        katman
      );

    },
    2000
  );
}


/* =====================================================
   DEPREM EFEKTİ
===================================================== */

function muzedeDepremEfekti(
  kartBilgisi,
  kartElementi,
  katman
) {

  /*
    EKRANI SALLA
  */

  gsap.to(
    oynanisEkrani,
    {
      x:
        16,

      y:
        -10,

      rotation:
        0.7,

      duration:
        0.07,

      repeat:
        17,

      yoyo:
        true,

      ease:
        "none"
    }
  );


  /*
    BÜYÜK KARTI DA
    SARS.
  */

  gsap.to(
    kartElementi,
    {
      x:
        13,

      y:
        -8,

      rotation:
        3,

      duration:
        0.065,

      repeat:
        14,

      yoyo:
        true,

      ease:
        "none"
    }
  );


  /*
    MASADAKİ KARTLAR
    SAĞA SOLA DAĞILSIN.
  */

  const dagilacakKartlar =
    Array.from(
      document.querySelectorAll(
        [
          ".yerlesenSanatciKarti",
          ".yerlesenEserKarti",
          ".depodakiEserKarti",
          ".oyuncuOzelKartKarti",
          ".aktifMuzeGuvenligiKarti",
          ".aktifDepoKilidiKarti",
          ".coptekiKart",
          ".ortakDesteGorselKarti",
          ".artanSanatciKarti",
          ".artanOzelKarti"
        ].join(",")
      )
    );


  dagilacakKartlar.forEach(
    (kart, index) => {

      const yon =
        index % 2 === 0
          ? -1
          : 1;


      gsap.to(
        kart,
        {
          x:
            yon *
            (
              80 +
              Math.random() *
              380
            ),

          y:
            -160 +
            Math.random() *
            480,

          rotation:
            -45 +
            Math.random() *
            90,

          scale:
            0.85 +
            Math.random() *
            0.25,

          duration:
            0.75 +
            Math.random() *
            0.55,

          ease:
            "power3.out"
        }
      );
    }
  );


  /*
    KARANLIK / KIRMIZI FLAŞ
  */

  const flash =
    document.createElement(
      "div"
    );


  Object.assign(
    flash.style,
    {
      position:
        "fixed",

      inset:
        "0",

      zIndex:
        "99990",

      background:
        "rgba(70,0,0,0.28)",

      pointerEvents:
        "none",

      opacity:
        "0"
    }
  );


  document.body.appendChild(
    flash
  );


  gsap.to(
    flash,
    {
      opacity:
        1,

      duration:
        0.10,

      repeat:
        5,

      yoyo:
        true
    }
  );


  setTimeout(
    () => {

      gsap.to(
        [
          kartElementi,
          katman,
          flash
        ].filter(
          Boolean
        ),
        {
          opacity:
            0,

          duration:
            0.55,

          onComplete:
            () => {

              if (
                kartElementi
              ) {

                kartElementi.remove();
              }


              if (
                katman
              ) {

                katman.remove();
              }


              flash.remove();


              muzedeDepremSonrasiOturumuSifirla();
            }
        }
      );

    },
    1600
  );
}


/* =====================================================
   DEPREM SONRASI OTURUMU TAMAMEN SIFIRLA
===================================================== */

function muzedeDepremSonrasiOturumuSifirla(normalYeniOyun = false) {

  oynanisEkrani.classList.remove("v52SkorHazir");

  /*
    TÜM DİNAMİK OYUN KARTLARINI
    MASADAN TEMİZLE.
  */

  document
    .querySelectorAll(
      [
        ".yerlesenSanatciKarti",
        ".yerlesenEserKarti",
        ".depodakiEserKarti",
        ".oyuncuOzelKartKarti",
        ".aktifMuzeGuvenligiKarti",
        ".aktifDepoKilidiKarti",
        ".coptekiKart",
        ".ortakDesteGorselKarti",
        ".artanSanatciKarti",
        ".artanSanatciUcanKart",
        ".artanOzelKarti",
        ".artanOzelUcanKart",
        ".cekilenBuyukKart",
        ".cekilenKartKatmani"
      ].join(",")
    )
    .forEach(
      (element) =>
        element.remove()
    );


  /*
    AÇIK KALMIŞ ÖZEL EKRANLARI
    DA TEMİZLE.
  */

  [
    "ozelKartKararButonlari",
    "ozelKartUyariMetni",
    "ozelKartDegistirmeKatmani",
    "dunyaTakimiSecimKatmani",
    "hollandaCopSecimKatmani",
    "ozelKartZarKatmani",
    "restorasyonSecimKatmani",
    "muzeMuduruKatmani",
    "muzeMuduruSiralaKatmani",
    "ozelKartTakasiKatmani",
    "acikArtirmaZarKatmani",
    "yeniSergiArtanKatmani",
    "yeniSergiEskiSanatciKatmani",
    "yeniSergiGuvenlikAktarmaKatmani",
    "depoKilidiSecimKatmani"
  ].forEach(
    (id) => {

      const element =
        document.getElementById(
          id
        );


      if (
        element
      ) {

        element.remove();
      }
    }
  );


  gsap.set(
    oynanisEkrani,
    {
      x:
        0,

      y:
        0,

      rotation:
        0
    }
  );


  /* =========================
     OYUN VERİLERİNİ SIFIRLA
  ========================= */

  aktifOyuncu =
    1;


  oyuncu1Secimleri =
    [];


  oyuncu2Secimleri =
    [];


  oyuncu1DepoKartlari =
    [];


  oyuncu2DepoKartlari =
    [];


  oyuncu1OzelKartlari =
    [];


  oyuncu2OzelKartlari =
    [];


  secilenOzelKartlar =
    [];


  artanOzelKartlar =
    [];


  artanSanatcilar =
    [];


  copDeste =
    [];


  ortakDeste =
    [];


  oturumDisiOzelKartlar =
    [];


  gizliSandiktanDahilOlanKartlar =
    [];


  muzeGuvenligiDurumu =
    null;


  depoKilidiDurumu =
    null;


  bekleyenOzelKart =
    null;


  ekstraKartCekmeSayisi =
    0;


  hedefSecimAktif =
    false;


  hedefSecimTipi =
    null;


  hedefSecimCallback =
    null;


  hedefSecimMaksimum =
    0;


  secilenHedefler =
    [];


  kartCekmeKilidi =
    false;


  secimKilidi =
    false;


  ozelKartSecimKilidi =
    false;


  onizlemeAcik =
    false;


  ortakDesteHazir =
    false;


  /*
    WINDOW DEBUG VERİLERİ
  */

  window.ortakDeste =
    ortakDeste;


  window.copDeste =
    copDeste;


  window.secilenOzelKartlar =
    secilenOzelKartlar;


  window.artanOzelKartlar =
    artanOzelKartlar;


  window.artanSanatcilar =
    artanSanatcilar;


  window.muzeGuvenligiDurumu =
    null;


  window.depoKilidiDurumu =
    null;


  window.hollandaEtkiKuyrugu =
    null;


  /*
    ORTAK DESTE YUVASI
    TEKRAR NORMAL GÖRÜNSÜN.
  */

  if (
    ortakDesteYuvasi
  ) {

    ortakDesteYuvasi.style.visibility =
      "visible";


    ortakDesteYuvasi.style.opacity =
      "1";
  }


  secimYazisiGoster(
    normalYeniOyun
      ? "YENİ OYUN BAŞLIYOR"
      : "DEPREM OTURUMU BİTİRDİ — YENİ OYUN BAŞLIYOR"
  );


  /*
    YENİDEN EN BAŞTAN:
    SANATÇI SEÇİMİ
  */

  setTimeout(
    () => {

      sanatciKartlariniKaristir();

    },
    1400
  );
}


/* =====================================================
   ORTAK DESTE SONU DURUMLARI
===================================================== */

let ortakDesteSonuArdisikPas =
  0;

let ortakDesteSonuKontrolAktif =
  false;


/* =====================================================
   ELDEKİ ÖZEL KART KULLANILABİLİR Mİ?
===================================================== */

function eldekiOzelKartKullanilabilirMi(
  kartKaydi
) {

  if (
    !kartKaydi
  ) {

    return false;
  }


  /*
    ÖZEL KART TAKASI
    ELDE DURUYORSA:

    Takas kartının kendisi dışında
    kendi alanında en az 1 kart
    daha bulunması gerekir.
  */

  if (
    kartKaydi.id ===
    "ozel-kart-takasi"
  ) {

    const kendiDigerKartlari =
      aktifOyuncununOzelKartlari()
        .filter(
          (kart) =>
            !(
              kart.id ===
                kartKaydi.id &&

              kart.yuvaId ===
                kartKaydi.yuvaId
            )
        );


    return (
      kendiDigerKartlari.length >
        0 &&

      rakibinOzelKartlari().length >
        0
    );
  }


  return ozelKartKullanilabilirMi(
    kartKaydi
  );
}


/* =====================================================
   ÖZEL KART YUVASINDAKİ KARTA TIKLANDI
===================================================== */

function eldekiOzelKartEkraniAc(
  domKart
) {

  /*
    SADECE KART ÇEKME SIRASINDA
    VEYA ORTAK DESTE BİTTİKTEN
    SONRA ÖZEL KART KULLANILABİLİR.
  */

  if (
    oyunAsamasi !==
      "kart-cekme" &&

    oyunAsamasi !==
      "ortak-deste-bitti"
  ) {

    return;
  }


  const kartSahibi =
    Number(
      domKart.dataset.oyuncu
    );


  /*
    RAKİBİN ÖZEL KARTINA
    NORMAL ŞEKİLDE ASLA
    BAKILAMAZ.
  */

  if (
    kartSahibi !==
    aktifOyuncu
  ) {

    return;
  }


  if (
    ozelKartEfektiAktif ||
    hedefSecimAktif ||
    kartCekmeKilidi
  ) {

    return;
  }


  const kartKaydi =
    oyuncununOzelKartlari(
      aktifOyuncu
    ).find(
      (kart) =>
        kart.id ===
          domKart.dataset.id &&

        kart.yuvaId ===
          domKart.dataset.yuvaId
    );


  if (
    !kartKaydi
  ) {

    return;
  }


  const eski =
    document.getElementById(
      "eldekiOzelKartKatmani"
    );


  if (
    eski
  ) {

    eski.remove();
  }


  const katman =
    document.createElement(
      "div"
    );


  katman.id =
    "eldekiOzelKartKatmani";


  Object.assign(
    katman.style,
    {
      position:
        "fixed",

      inset:
        "0",

      zIndex:
        "85000",

      background:
        "rgba(0,0,0,0.76)",

      backdropFilter:
        "blur(4px)",

      WebkitBackdropFilter:
        "blur(4px)",

      display:
        "flex",

      flexDirection:
        "column",

      justifyContent:
        "center",

      alignItems:
        "center",

      gap:
        "20px",

      pointerEvents:
        "auto"
    }
  );


  const kart =
    document.createElement(
      "img"
    );


  kart.src =
    kartKaydi.dosya;


  Object.assign(
    kart.style,
    {
      height:
        "min(70vh,650px)",

      width:
        "auto",

      maxWidth:
        "38vw",

      objectFit:
        "contain",

      userSelect:
        "none",

      WebkitUserDrag:
        "none",

      filter:
        "drop-shadow(0 22px 30px rgba(0,0,0,0.75))"
    }
  );


  const butonKutusu =
    document.createElement(
      "div"
    );


  Object.assign(
    butonKutusu.style,
    {
      display:
        "flex",

      gap:
        "14px",

      justifyContent:
        "center",

      alignItems:
        "center",

      flexWrap:
        "wrap"
    }
  );


  const kullan =
    ozelKartKararButonuOlustur(
      "KULLAN"
    );


  const kapat =
    ozelKartKararButonuOlustur(
      "KAPAT"
    );


  const kullanilabilir =
    eldekiOzelKartKullanilabilirMi(
      kartKaydi
    );


  if (
    !kullanilabilir
  ) {

    kullan.disabled =
      true;


    kullan.style.opacity =
      "0.30";


    kullan.style.cursor =
      "default";
  }


  katman.appendChild(
    kart
  );


  /*
    KULLANILAMAMA SEBEBİNİ
    KARTIN ALTINDA GÖSTER.
  */

  const uyariMetni =
    ozelKartUyariMetni(
      kartKaydi
    );


  if (
    uyariMetni
  ) {

    const uyari =
      document.createElement(
        "div"
      );


    uyari.textContent =
      uyariMetni;


    Object.assign(
      uyari.style,
      {
        padding:
          "9px 16px",

        borderRadius:
          "10px",

        background:
          "rgba(45,28,13,0.94)",

        border:
          "2px solid #c7a15a",

        color:
          "#f5e7c4",

        fontFamily:
          'Georgia, "Times New Roman", serif',

        fontSize:
          "clamp(13px,1vw,19px)",

        fontWeight:
          "bold",

        textAlign:
          "center",

        maxWidth:
          "78vw"
      }
    );


    katman.appendChild(
      uyari
    );
  }


  butonKutusu.appendChild(
    kullan
  );


  butonKutusu.appendChild(
    kapat
  );


  katman.appendChild(
    butonKutusu
  );


  document.body.appendChild(
    katman
  );


  kapat.addEventListener(
    "click",
    () => {

      butonSesiCal();


      katman.remove();
    }
  );


  kullan.addEventListener(
    "click",
    () => {

      if (
        kullan.disabled
      ) {

        return;
      }


      butonSesiCal();


      katman.remove();


      eldekiOzelKartiKullan(
        kartKaydi,
        domKart
      );
    }
  );
}


/* =====================================================
   ELDEKİ ÖZEL KARTI KULLAN
===================================================== */

function eldekiOzelKartiKullan(
  kartKaydi,
  domKart
) {

  const oyuncu =
    aktifOyuncu;


  /*
    ORTAK DESTE BİTMİŞKEN
    BİR KART KULLANILDIYSA
    PAS SERİSİ SIFIRLANIR.
  */

  if (
    ortakDeste.length ===
    0
  ) {

    ortakDesteSonuArdisikPas =
      0;
  }


  /*
    KARTIN VERİSİNİ
    ÖZEL ALANDAN ÇIKAR.
  */

  oyuncudanOzelKartSil(
    oyuncu,
    kartKaydi.id,
    kartKaydi.yuvaId
  );


  const kaynakRect =
    domKart
      .getBoundingClientRect();


  const buyukKatman =
    document.createElement(
      "div"
    );


  buyukKatman.className =
    "cekilenKartKatmani";


  Object.assign(
    buyukKatman.style,
    {
      position:
        "fixed",

      inset:
        "0",

      width:
        "100vw",

      height:
        "100vh",

      zIndex:
        "86000",

      background:
        "rgba(0,0,0,0.68)",

      backdropFilter:
        "blur(3px)",

      WebkitBackdropFilter:
        "blur(3px)",

      pointerEvents:
        "none"
    }
  );


  const buyukKart =
    document.createElement(
      "img"
    );


  buyukKart.className =
    "cekilenBuyukKart";


  buyukKart.src =
    kartKaydi.dosya;


  Object.assign(
    buyukKart.style,
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
        "86001",

      objectFit:
        "fill",

      pointerEvents:
        "none",

      userSelect:
        "none",

      WebkitUserDrag:
        "none",

      filter:
        "drop-shadow(0 24px 30px rgba(0,0,0,0.75))"
    }
  );


  document.body.appendChild(
    buyukKatman
  );


  document.body.appendChild(
    buyukKart
  );


  domKart.remove();


  const oran =
    kaynakRect.width /
    kaynakRect.height;


  let hedefYukseklik =
    window.innerHeight *
    0.72;


  let hedefGenislik =
    hedefYukseklik *
    oran;


  if (
    hedefGenislik >
    window.innerWidth *
    0.34
  ) {

    hedefGenislik =
      window.innerWidth *
      0.34;


    hedefYukseklik =
      hedefGenislik /
      oran;
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


  kartCekmeKilidi =
    true;


  ozelKartEfektiAktif =
    true;


  gsap.to(
    buyukKart,
    {
      left:
        hedefLeft,

      top:
        hedefTop,

      width:
        hedefGenislik,

      height:
        hedefYukseklik,

      duration:
        0.55,

      ease:
        "back.out(1.25)",

      onComplete:
        () => {

          setTimeout(
            () => {

              ozelKartEfektiAktif =
                false;


              ozelKartiKullan(
                {
                  ...kartKaydi
                },
                buyukKart,
                buyukKatman
              );

            },
            450
          );
        }
    }
  );
}


/* =====================================================
   ÖZEL KART TIKLAMALARINI MERKEZDEN YAKALA
===================================================== */

/*
  CAPTURE KULLANIYORUZ.

  Böylece PART 5'te kartın üstüne
  eklenen eski "sadece önizleme"
  click listener'ından ÖNCE
  burası çalışır.
*/

document.addEventListener(
  "click",
  (event) => {

    const kart =
      event.target.closest(
        ".oyuncuOzelKartKarti"
      );


    if (
      !kart
    ) {

      return;
    }


    /*
      ÖZEL KART TAKASI GİBİ
      BİR HEDEF SEÇİMİ AKTİFSE
      O MEKANİĞİ BOZMAYALIM.
    */

    if (
      hedefSecimAktif
    ) {

      return;
    }


    event.preventDefault();

    event.stopPropagation();

    event.stopImmediatePropagation();


    /*
      RAKİBİN KARTIYSA
      HİÇBİR ŞEY YAPMA.
    */

    if (
      Number(
        kart.dataset.oyuncu
      ) !==
      aktifOyuncu
    ) {

      return;
    }


    /* Özel Kart Takası kararı açıkken kendi yuvandaki kapalı karta
       tıklamak yalnız ön yüzünü gösterir; kart kullanılmaz ve karar
       düğmeleri kapanmaz. */
    const takasKarariAcik =
      Boolean(document.getElementById("ozelKartKararButonlari")) &&
      bekleyenOzelKart?.id === "ozel-kart-takasi";

    if (takasKarariAcik) {
      kartOnizlemeAc(kart, kart.dataset.gercekDosya);
      return;
    }

    eldekiOzelKartEkraniAc(
      kart
    );

  },
  true
);


/* =====================================================
   ORTAK DESTE SONU BUTONLARINI TEMİZLE
===================================================== */

function ortakDesteSonuKontrolleriniTemizle() {

  const kutu =
    document.getElementById(
      "ortakDesteSonuKontrolleri"
    );


  if (
    kutu
  ) {

    kutu.remove();
  }


  ortakDesteSonuKontrolAktif =
    false;
}


/* =====================================================
   ORTAK DESTE BİTTİKTEN SONRA TUR
===================================================== */

function ortakDesteSonuTurunuBaslat() {

  oyunAsamasi =
    "ortak-deste-bitti";


  kartCekmeKilidi =
    false;


  ortakDesteGorselleriniGizle();


  ortakDesteSonuKontrolleriniTemizle();


  const eldekiKartlar =
    oyuncununOzelKartlari(
      aktifOyuncu
    );


  /*
    KURAL:
    SIRA KENDİSİNE GELDİĞİNDE
    HİÇ ÖZEL KARTI KALMAMIŞSA
    OYUN ARTIK BİTER.
  */

  if (
    eldekiKartlar.length ===
    0
  ) {

    secimYazisiGoster(
      `${aktifOyuncu}. OYUNCUNUN KULLANABİLECEĞİ ÖZEL KART KALMADI`
    );


    setTimeout(
      () => {

        mevcutOyunuBitir();

      },
      850
    );


    return;
  }


  secimYazisiGoster(
    `${aktifOyuncu}. OYUNCU — ÖZEL KART KULLAN VEYA PAS`
  );


  const kutu =
    document.createElement(
      "div"
    );


  kutu.id =
    "ortakDesteSonuKontrolleri";


  Object.assign(
    kutu.style,
    {
      position:
        "fixed",

      left:
        "50%",

      bottom:
        "4%",

      transform:
        "translateX(-50%)",

      zIndex:
        "87000",

      display:
        "flex",

      alignItems:
        "center",

      justifyContent:
        "center",

      gap:
        "14px",

      pointerEvents:
        "auto"
    }
  );


  const bilgi =
    document.createElement(
      "div"
    );


  bilgi.textContent =
    "Kullanmak istediğin özel karta dokun veya PAS de.";


  Object.assign(
    bilgi.style,
    {
      padding:
        "12px 18px",

      borderRadius:
        "12px",

      border:
        "2px solid #c7a15a",

      background:
        "rgba(38,24,12,0.94)",

      color:
        "#f5e7c4",

      fontFamily:
        'Georgia, "Times New Roman", serif',

      fontWeight:
        "bold",

      fontSize:
        "clamp(13px,1vw,19px)"
    }
  );


  const pas =
    ozelKartKararButonuOlustur(
      "PAS"
    );


  kutu.appendChild(
    bilgi
  );


  kutu.appendChild(
    pas
  );


  document.body.appendChild(
    kutu
  );


  ortakDesteSonuKontrolAktif =
    true;


  pas.addEventListener(
    "click",
    () => {

      butonSesiCal();


      ortakDesteSonuKontrolleriniTemizle();


      ortakDesteSonuArdisikPas++;


      /*
        İKİ OYUNCU ART ARDA
        PAS DERSE OYUN BİTER.
      */

      if (
        ortakDesteSonuArdisikPas >=
        2
      ) {

        mevcutOyunuBitir();


        return;
      }


      /*
        TEK PAS:
        SIRA RAKİBE.
      */

      aktifOyuncu =
        aktifOyuncu === 1
          ? 2
          : 1;


      setTimeout(
        () => {

          ortakDesteSonuTurunuBaslat();

        },
        350
      );
    }
  );
}


/* =====================================================
   KART ÇEKME AŞAMASI — FİNAL SÜRÜM
===================================================== */

/*
  ÖNCEKİ kartCekmeAsamasiniBaslat()
  TANIMINI BURADA GENİŞLETİYORUZ.

  SON TANIM GEÇERLİDİR.
*/

function kartCekmeAsamasiniBaslat() {

  ortakDesteSonuKontrolleriniTemizle();


  /*
    DESTE BİTMİŞSE
    ARTIK NORMAL ÇEKİŞ YOK.
  */

  if (
    ortakDeste.length ===
    0
  ) {

    /*
      KALMIŞ EKSTRA ÇEKİŞ
      HAKLARI YANAR.
    */

    ekstraKartCekmeSayisi =
      0;


    ortakDesteSonuTurunuBaslat();


    return;
  }


  ortakDesteSonuArdisikPas =
    0;


  oyunAsamasi =
    "kart-cekme";


  kartCekmeKilidi =
    false;


  secimYazisiGoster(
    `${aktifOyuncu}. OYUNCU — ORTAK DESTEDEN KART ÇEK VEYA ÖZEL KART KULLAN`
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
    !ustKart
  ) {

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
}


/* =====================================================
   MEVCUT OYUNU BİTİR
===================================================== */

/*
  ŞİMDİLİK ÖZEL KART MOTORUNUN
  BİTİŞ NOKTASI.

  5 OYUNLUK SKOR / YENİ OYUN
  SİSTEMİNİ SONRA BU FONKSİYONA
  BAĞLAYACAĞIZ.
*/

function mevcutOyunuBitir() {

  ortakDesteSonuKontrolleriniTemizle();


  oyunAsamasi =
    "oyun-bitti";


  kartCekmeKilidi =
    true;


  hedefSeciminiTemizle();


  secimYazisiGoster(
    "OYUN BİTTİ"
  );


  console.log(
    "MEVCUT OYUN BİTTİ"
  );


  console.log(
    "1. Oyuncu eserleri:",
    oyuncununMasadakiEserleri(
      1
    ).length
  );


  console.log(
    "2. Oyuncu eserleri:",
    oyuncununMasadakiEserleri(
      2
    ).length
  );


  /*
    BURADAN SONRA:
    - CANLI SKOR
    - OYUN GALİBİ
    - 1/5, 2/5...
    - ÇÖPÜ YENİDEN KARIŞTIR
    - DEPO / ÖZEL KARTLARI KORU
    - DEPO KİLİDİNİ KALDIR
    - MÜZE GÜVENLİĞİNİ KALDIR
    - 5. OYUN SONU FİNAL

    sistemini bağlayacağız.
  */
}


/* =====================================================
   SON GÜVENLİK — POINTER / DOKUNMA AYARLARI
===================================================== */

function genelDokunmaUyumlulugunuKur() {

  const seciciler = [
    "button",
    ".yerlesenSanatciKarti",
    ".yerlesenEserKarti",
    ".depodakiEserKarti",
    ".oyuncuOzelKartKarti",
    ".coptekiKart",
    ".kapaliSanatciKarti",
    ".kapaliOzelKart"
  ];


  document
    .querySelectorAll(
      seciciler.join(",")
    )
    .forEach(
      (element) => {

        element.style.touchAction =
          "manipulation";


        element.style.userSelect =
          "none";


        element.style.webkitUserSelect =
          "none";


        element.style.webkitTapHighlightColor =
          "transparent";
      }
    );
}


/* =====================================================
   DİNAMİK KARTLAR İÇİN POINTER BASMA EFEKTİ
===================================================== */

document.addEventListener(
  "pointerdown",
  (event) => {

    const hedef =
      event.target.closest(
        [
          "button",
          ".yerlesenSanatciKarti",
          ".yerlesenEserKarti",
          ".depodakiEserKarti",
          ".oyuncuOzelKartKarti",
          ".kapaliSanatciKarti",
          ".kapaliOzelKart"
        ].join(",")
      );


    if (
      !hedef ||
      hedef.disabled ||
      hedef.id === "oyunMuzikButonu"
    ) {

      return;
    }


    hedef.dataset.pointerBasili =
      "evet";


    hedef.style.transform +=
      " scale(0.96)";


    hedef.style.filter =
      "brightness(0.84)";
  }
);


function pointerEfektiniBirak(
  event
) {

  const hedef =
    event.target.closest(
      [
        "button",
        ".yerlesenSanatciKarti",
        ".yerlesenEserKarti",
        ".depodakiEserKarti",
        ".oyuncuOzelKartKarti",
        ".kapaliSanatciKarti",
        ".kapaliOzelKart"
      ].join(",")
    );


  if (
    !hedef ||
    hedef.dataset.pointerBasili !==
      "evet"
  ) {

    return;
  }


  hedef.dataset.pointerBasili =
    "hayir";


  /*
    Kartlarda bazı fonksiyonların
    kendi rotate/transform değerleri
    bulunabildiği için transform'u
    tamamen silmiyoruz.

    Sadece eklenen scale'i kaldırıyoruz.
  */

  hedef.style.transform =
    hedef.style.transform.replace(
      /\s*scale\(0\.96\)/g,
      ""
    );


  hedef.style.filter =
    "";
}


document.addEventListener(
  "pointerup",
  pointerEfektiniBirak
);


document.addEventListener(
  "pointercancel",
  pointerEfektiniBirak
);


/* =====================================================
   AKTİF OYUNCU KART İNCELEME KİLİDİNİ GÜNCELLE
===================================================== */

function kartEtkilesimleriniGuncelle() {

  document
    .querySelectorAll(
      ".depodakiEserKarti"
    )
    .forEach(
      (kart) => {

        const sahip =
          Number(
            kart.dataset.oyuncu
          );


        if (
          hedefSecimAktif
        ) {

          kart.style.cursor =
            "pointer";


          return;
        }


        kart.style.cursor =
          sahip === aktifOyuncu
            ? "pointer"
            : "default";
      }
    );


  document
    .querySelectorAll(
      ".oyuncuOzelKartKarti"
    )
    .forEach(
      (kart) => {

        const sahip =
          Number(
            kart.dataset.oyuncu
          );


        if (
          hedefSecimAktif
        ) {

          return;
        }


        kart.style.cursor =
          sahip === aktifOyuncu
            ? "pointer"
            : "default";
      }
    );


  document
    .querySelectorAll(
      ".yerlesenSanatciKarti, .yerlesenEserKarti"
    )
    .forEach(
      (kart) => {

        const sahip =
          Number(
            kart.dataset.oyuncu
          );


        kart.style.cursor =
          sahip === aktifOyuncu
            ? "pointer"
            : "default";
      }
    );
}


/* =====================================================
   TUR DEĞİŞİMİ SONRASI ETKİLEŞİM YENİLE
===================================================== */

function aktifOyuncuArayuzunuYenile() {

  kartEtkilesimleriniGuncelle();


  genelDokunmaUyumlulugunuKur();
}


/* =====================================================
   TURU BİTİR — FİNAL BAĞLANTI SÜRÜMÜ
===================================================== */

/*
  Önceki turuBitir tanımını
  son kez burada tamamlıyoruz.

  Hollanda kuyruğu,
  ekstra kart çekme,
  deste bitişi ve
  oyuncu değişimini tek merkezden
  yönetir.
*/

function turuBitir() {

  kartCekmeKilidi =
    true;


  ozelKartEfektiAktif =
    false;


  hedefSeciminiTemizle();


  setTimeout(
    () => {

      /* =========================
         HOLLANDA ETKİ KUYRUĞU
      ========================= */

      if (
        window.hollandaEtkiKuyrugu &&
        window.hollandaEtkiKuyrugu.length >
          0
      ) {

        kartCekmeKilidi =
          false;


        hollandaSiradakiEseriUygula();


        return;
      }


      /* =========================
         EKSTRA KART ÇEKİŞLERİ
      ========================= */

      if (
        ekstraKartCekmeSayisi >
        0
      ) {

        if (
          ortakDeste.length ===
          0
        ) {

          /*
            DESTE BİTTİ.
            KALAN EKSTRA HAKLAR YANAR.
          */

          ekstraKartCekmeSayisi =
            0;


          kartCekmeKilidi =
            false;


          aktifOyuncuArayuzunuYenile();


          ortakDesteSonuTurunuBaslat();


          return;
        }


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
            `${aktifOyuncu}. OYUNCU — SON EKSTRA KART`
          );
        }


        aktifOyuncuArayuzunuYenile();


        kartCekmeAsamasiniBaslat();


        return;
      }


      /* =========================
         DESTE BİTMİŞSE
      ========================= */

      if (
        ortakDeste.length ===
        0
      ) {

        /*
          Normal tur tamamlandıktan sonra
          sıra rakibe geçsin.
        */

        aktifOyuncu =
          aktifOyuncu === 1
            ? 2
            : 1;


        kartCekmeKilidi =
          false;


        aktifOyuncuArayuzunuYenile();


        ortakDesteSonuTurunuBaslat();


        return;
      }


      /* =========================
         NORMAL SIRA DEĞİŞİMİ
      ========================= */

      aktifOyuncu =
        aktifOyuncu === 1
          ? 2
          : 1;


      kartCekmeKilidi =
        false;


      aktifOyuncuArayuzunuYenile();


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
   AÇIK KALMIŞ KARAR KATMANLARINI TEMİZLE
===================================================== */

function geciciOyunKatmanlariniTemizle() {

  const acikOnizlemeKarti =
    document.getElementById(
      "kartOnizlemeKart"
    );


  if (
    acikOnizlemeKarti?._kaynakKart
  ) {

    acikOnizlemeKarti._kaynakKart.style.opacity =
      "1";
  }


  onizlemeAcik =
    false;


  document.body.classList.remove(
    "v79KartOnizlemeAcik"
  );

  const idler = [

    "ozelKartKararButonlari",
    "ozelKartUyariMetni",

    "ozelKartDegistirmeKatmani",

    "eldekiOzelKartKatmani",

    "dunyaTakimiSecimKatmani",

    "hollandaCopSecimKatmani",

    "ozelKartZarKatmani",

    "restorasyonSecimKatmani",

    "muzeMuduruKatmani",

    "muzeMuduruSiralaKatmani",

    "ozelKartTakasiKatmani",

    "acikArtirmaZarKatmani",

    "yeniSergiArtanKatmani",

    "yeniSergiEskiSanatciKatmani",

    "yeniSergiGuvenlikAktarmaKatmani",

    "depoKilidiSecimKatmani",

    "ortakDesteSonuKontrolleri",

    "v80KartYukleniyor",

    "kartOnizlemeKatmani",
    "kartOnizlemeKart"
  ];


  idler.forEach(
    (id) => {

      const element =
        document.getElementById(
          id
        );


      if (
        element
      ) {

        element.remove();
      }
    }
  );
}


/* =====================================================
   BAŞLANGIÇTA OYUN DURUMUNU TEMİZLE
===================================================== */

function ilkOyunDurumunuHazirla() {

  aktifOyuncu =
    1;


  oyunAsamasi =
    "hazirlik";


  oyuncu1Secimleri =
    [];


  oyuncu2Secimleri =
    [];


  oyuncu1DepoKartlari =
    [];


  oyuncu2DepoKartlari =
    [];


  oyuncu1OzelKartlari =
    [];


  oyuncu2OzelKartlari =
    [];


  ortakDeste =
    [];


  copDeste =
    [];


  secilenOzelKartlar =
    [];


  artanOzelKartlar =
    [];


  artanSanatcilar =
    [];


  oturumDisiOzelKartlar =
    [];


  gizliSandiktanDahilOlanKartlar =
    [];


  muzeGuvenligiDurumu =
    null;


  depoKilidiDurumu =
    null;


  bekleyenOzelKart =
    null;


  ekstraKartCekmeSayisi =
    0;


  ortakDesteSonuArdisikPas =
    0;


  ortakDesteSonuKontrolAktif =
    false;


  ozelKartEfektiAktif =
    false;


  hedefSecimAktif =
    false;


  hedefSecimTipi =
    null;


  hedefSecimCallback =
    null;


  hedefSecimMaksimum =
    0;


  secilenHedefler =
    [];


  window.hollandaEtkiKuyrugu =
    null;


  window.ortakDeste =
    ortakDeste;


  window.copDeste =
    copDeste;


  window.secilenOzelKartlar =
    secilenOzelKartlar;


  window.artanOzelKartlar =
    artanOzelKartlar;


  window.artanSanatcilar =
    artanSanatcilar;


  geciciOyunKatmanlariniTemizle();
}


/* =====================================================
   EKRAN GEÇİŞLERİ — PAKET 1 GÜVENLİ SÜRÜM
===================================================== */

function ekranGoster(
  hedefEkran
) {

  document
    .querySelectorAll(
      ".ekran"
    )
    .forEach(
      (ekran) => {

        ekran.classList.remove(
          "aktif"
        );

        ekran.style.pointerEvents =
          "none";
      }
    );

  if (
    hedefEkran
  ) {

    hedefEkran.classList.add(
      "aktif"
    );

    hedefEkran.style.pointerEvents =
      "auto";
  }
}


function muzigiTamDurdur(
  muzik
) {

  if (
    !muzik
  ) {

    return;
  }

  muzik.pause();
  muzik.currentTime = 0;
  muzik.volume = 0;
}


/* =====================================================
   DEVAM BUTONU
===================================================== */

devamButonu.addEventListener(
  "click",
  () => {

    if (
      !oyunHazir ||
      oyunBaslatiliyor ||
      oyunAktif
    ) {

      return;
    }

    butonSesiCal();

    muzigiTamDurdur(
      oyunMuzik
    );

    ekranGoster(
      anaMenu
    );

    anaMenuMuzik.currentTime = 0;
    anaMenuMuzik.volume = 0;

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

    if (
      oyunBaslatiliyor ||
      oyunAktif
    ) {

      return;
    }

    oyunBaslatiliyor = true;

    butonSesiCal();

    try {

      await muzikKapat(
        anaMenuMuzik,
        700
      );

    } catch (hata) {

      console.log(
        "Ana menü müziği kapatılırken hata:",
        hata
      );
    }

    muzigiTamDurdur(
      anaMenuMuzik
    );

    ilkOyunDurumunuHazirla();

    ekranGoster(
      oynanisEkrani
    );

    oyunMuzik.currentTime = 0;
    oyunMuzik.volume = 0;

    try {

      await oyunMuzik.play();

      muzikAc(
        oyunMuzik,
        MUZIK_SESI,
        1500
      );

    } catch (hata) {

      console.log(
        "Oyun müziği başlatılamadı:",
        hata
      );
    }

    genelDokunmaUyumlulugunuKur();

    oyunAktif = true;
    oyunBaslatiliyor = false;

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
  (event) => {

    event.preventDefault();
    event.stopPropagation();

    butonSesiCal();

    /*
      NASIL OYNANIR EKRANI SONRAKİ
      PAKETLERDE BAĞLANACAK.
      ŞİMDİLİK MENÜ MÜZİĞİNE VE
      OYUN STATE'İNE DOKUNMAZ.
    */

    console.log(
      "Nasıl Oynanır ekranı henüz bağlanmadı."
    );
  }
);


/* =====================================================
   PENCERE BOYUTU DEĞİŞTİĞİNDE
   ETKİLEŞİMLERİ TAZELE
===================================================== */

window.addEventListener(
  "resize",
  () => {

    aktifOyuncuArayuzunuYenile();
  }
);


/* =====================================================
   SAYFA SEKMEDEN GERİ GELDİĞİNDE
   TAKILI POINTER EFEKTLERİNİ TEMİZLE
===================================================== */

document.addEventListener(
  "visibilitychange",
  () => {

    if (
      document.hidden
    ) {

      return;
    }


    document
      .querySelectorAll(
        "[data-pointer-basili='evet']"
      )
      .forEach(
        (element) => {

          element.dataset.pointerBasili =
            "hayir";


          element.style.transform =
            element.style.transform.replace(
              /\s*scale\(0\.96\)/g,
              ""
            );


          element.style.filter =
            "";
        }
      );
  }
);


/* =====================================================
   İLK DOKUNMA AYARLARI
===================================================== */

genelDokunmaUyumlulugunuKur();


/* =====================================================
   OYUNU YÜKLE
===================================================== */

oyunuOncedenYukle();

/* =====================================================
   V37 TOPLU DÜZELTME KATMANI — 23.08.2026
   Mevcut oyun motorunu bozmadan son davranışları ezer.
===================================================== */

const V37 = {
  oyuncuAdlari: { 1: '1. OYUNCU', 2: '2. OYUNCU' },
  puanlar: { 1: 0, 2: 0 },
  tamamlananKoleksiyonlar: new Set(),
  acikArtirmaKazanan: null,
  muzeMuduruSure: 30,
  sesBaglami: null,
  isimlerAlindi: false
};

function v37SesBaglami() {
  if (!V37.sesBaglami) {
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (Ctx) V37.sesBaglami = new Ctx();
  }
  return V37.sesBaglami;
}

function v37KisaSes(frekans = 520, sure = 0.07, tip = 'sine', ses = 0.035) {
  try {
    const ctx = v37SesBaglami();
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = tip;
    osc.frequency.value = frekans;
    gain.gain.setValueAtTime(ses, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + sure);
    osc.connect(gain).connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + sure);
  } catch (_) {}
}

function v37KartSecimSesi() {
  v37KisaSes(420, 0.06, 'triangle', 0.025);
  setTimeout(() => v37KisaSes(620, 0.05, 'triangle', 0.018), 45);
}

function v37KartYerlesmeSesi() {
  v37KisaSes(180, 0.09, 'sine', 0.03);
}

function v37KoleksiyonSesi() {
  [660, 880, 1100].forEach((f, i) => setTimeout(() => v37KisaSes(f, 0.16, 'sine', 0.035), i * 90));
}

/* Kart seçim aşamalarında klasik buton tiki yerine kart sesi. */
const v37EskiButonSesiCal = butonSesiCal;
butonSesiCal = function() {
  if (oyunAsamasi === 'sanatci-secimi' || oyunAsamasi === 'ozel-kart-secimi') {
    v37KartSecimSesi();
    return;
  }
  return v37EskiButonSesiCal();
};

/* Yerleşen sanatçıları izleyip oturma sesi çal. */
new MutationObserver((mutations) => {
  for (const m of mutations) {
    for (const n of m.addedNodes) {
      if (n instanceof HTMLElement && n.classList?.contains('yerlesenSanatciKarti')) {
        v37KartYerlesmeSesi();
      }
    }
  }
}).observe(oynanisEkrani, { childList: true, subtree: true });

/* =====================================================
   EKRAN / MENÜ / MÜZİK İZOLASYONU
===================================================== */
function v37EkranGoster(hedef) {
  document.querySelectorAll('.ekran').forEach((e) => {
    e.classList.remove('aktif');
    e.style.pointerEvents = 'none';
  });
  if (hedef) {
    hedef.classList.add('aktif');
    hedef.style.pointerEvents = 'auto';
  }
}

function v37MuzigiKes(m) {
  if (!m) return;
  try { m.pause(); m.currentTime = 0; m.volume = 0; } catch (_) {}
}

let v37OyunBaslatiliyor = false;
let v37OyunAktif = false;

/* Eski click listener'larını capture aşamasında kesiyoruz. */
devamButonu.addEventListener('click', (e) => {
  e.preventDefault();
  e.stopImmediatePropagation();
  if (!oyunHazir || v37OyunBaslatiliyor) return;
  v37EskiButonSesiCal();
  v37MuzigiKes(oyunMuzik);
  v37EkranGoster(anaMenu);
  anaMenuMuzik.currentTime = 0;
  anaMenuMuzik.volume = 0;
  anaMenuMuzik.play().then(() => muzikAc(anaMenuMuzik, MUZIK_SESI, 900)).catch(() => {});
}, true);

baslaButonu.addEventListener('click', (e) => {
  e.preventDefault();
  e.stopImmediatePropagation();
  if (v37OyunBaslatiliyor || v37OyunAktif) return;
  v37OyuncuIsimleriSor();
}, true);

nasilOynanirButonu.addEventListener('click', (e) => {
  e.preventDefault();
  e.stopImmediatePropagation();
  v37EskiButonSesiCal();
  v37NasilOynanirAc();
}, true);

async function v37GercekOyunuBaslat() {
  if (v37OyunBaslatiliyor || v37OyunAktif) return;
  v37OyunBaslatiliyor = true;
  try { await muzikKapat(anaMenuMuzik, 500); } catch (_) { v37MuzigiKes(anaMenuMuzik); }
  ilkOyunDurumunuHazirla();
  V37.puanlar = { 1: 0, 2: 0 };
  V37.tamamlananKoleksiyonlar.clear();
  v37SkorGuncelle();
  v37EkranGoster(oynanisEkrani);
  oyunMuzik.currentTime = 0;
  oyunMuzik.volume = 0;
  try { await oyunMuzik.play(); muzikAc(oyunMuzik, MUZIK_SESI, 1000); } catch (_) {}
  v37OyunAktif = true;
  v37OyunBaslatiliyor = false;
  setTimeout(() => sanatciKartlariniKaristir(), 350);
}

function v37OyuncuIsimleriSor() {
  let k = document.getElementById('v37IsimKatmani');
  if (k) k.remove();
  k = document.createElement('div');
  k.id = 'v37IsimKatmani';
  k.innerHTML = `
    <div class="v37Panel v37IsimPanel">
      <h2>OYUNCU İSİMLERİ</h2>
      <input id="v37Ad1" maxlength="18" placeholder="1. Oyuncu" value="${V37.oyuncuAdlari[1] === '1. OYUNCU' ? '' : V37.oyuncuAdlari[1]}">
      <input id="v37Ad2" maxlength="18" placeholder="2. Oyuncu" value="${V37.oyuncuAdlari[2] === '2. OYUNCU' ? '' : V37.oyuncuAdlari[2]}">
      <button id="v37IsimBaslat">OYUNA BAŞLA</button>
      <button id="v37IsimIptal">GERİ</button>
    </div>`;
  document.body.appendChild(k);
  k.querySelector('#v37IsimIptal').onclick = () => k.remove();
  k.querySelector('#v37IsimBaslat').onclick = () => {
    V37.oyuncuAdlari[1] = k.querySelector('#v37Ad1').value.trim() || '1. OYUNCU';
    V37.oyuncuAdlari[2] = k.querySelector('#v37Ad2').value.trim() || '2. OYUNCU';
    V37.isimlerAlindi = true;
    k.remove();
    v37GercekOyunuBaslat();
  };
}

function v37NasilOynanirAc() {
  let k = document.getElementById('v37NasilKatmani');
  if (k) k.remove();
  k = document.createElement('div');
  k.id = 'v37NasilKatmani';
  k.innerHTML = `
    <div class="v37Panel v37NasilPanel v83RehberPanel">
      <button class="v37Kapat" aria-label="Kapat">×</button>
      <div class="v83RehberIcerik"></div>
    </div>`;
  document.body.appendChild(k);

  const icerik = k.querySelector('.v83RehberIcerik');
  const panel = k.querySelector('.v83RehberPanel');

  const anaSecimiGoster = () => {
    panel.classList.remove('v83KartGalerisiPanel', 'v83KartOnizlemePanel');
    icerik.innerHTML = `
      <h2>OYUN REHBERİ</h2>
      <div class="v83RehberSecenekleri">
        <button type="button" data-rehber="nasil">NASIL OYNANIR?</button>
        <button type="button" data-rehber="kartlar">KARTLAR VE ÖZELLİKLERİ</button>
      </div>`;

    icerik.querySelector('[data-rehber="nasil"]').onclick = nasilOynanirMetniniGoster;
    icerik.querySelector('[data-rehber="kartlar"]').onclick = kartGalerisiniGoster;
  };

  const geriButonuOlustur = (hedef) => {
    const geri = document.createElement('button');
    geri.type = 'button';
    geri.className = 'v83RehberGeri';
    geri.textContent = 'GERİ';
    geri.onclick = hedef;
    return geri;
  };

  function nasilOynanirMetniniGoster() {
    panel.classList.remove('v83KartGalerisiPanel', 'v83KartOnizlemePanel');
    icerik.innerHTML = `
      <h2>NASIL OYNANIR?</h2>
      <div class="v83NasilMetni">
        <p>Bu alan oyun kuralları ve görselleri için hazırlandı.</p>
        <p><b>Amaç:</b> Sanatçı koleksiyonlarını tamamla, eserleri yönet ve özel kartları doğru zamanda kullan.</p>
        <p>Detaylı kuralları ve örnek görselleri buraya birlikte ekleyeceğiz.</p>
      </div>`;
    icerik.appendChild(geriButonuOlustur(anaSecimiGoster));
  }

  function kartGalerisiniGoster() {
    panel.classList.add('v83KartGalerisiPanel');
    panel.classList.remove('v83KartOnizlemePanel');
    icerik.innerHTML = '<h2>KARTLAR VE ÖZELLİKLERİ</h2><div class="v83KartBolumleri"></div>';
    const bolumler = icerik.querySelector('.v83KartBolumleri');

    const bolumEkle = (baslik, kartlar) => {
      const bolum = document.createElement('section');
      bolum.className = 'v83KartBolumu';
      const baslikElementi = document.createElement('h3');
      baslikElementi.textContent = baslik;
      const liste = document.createElement('div');
      liste.className = 'v83KartListesi';

      kartlar.forEach(kartBilgisi => {
        const dugme = document.createElement('button');
        dugme.type = 'button';
        dugme.className = 'v83GaleriKarti';
        const resim = document.createElement('img');
        resim.src = kartBilgisi.dosya;
        resim.alt = typeof v80KartBasliginiBul === 'function'
          ? v80KartBasliginiBul(kartBilgisi)
          : kartBilgisi.id;
        resim.loading = 'lazy';
        resim.decoding = 'async';
        dugme.appendChild(resim);
        dugme.onclick = () => kartOnizlemesiniGoster(kartBilgisi);
        liste.appendChild(dugme);
      });

      bolum.append(baslikElementi, liste);
      bolumler.appendChild(bolum);
    };

    bolumEkle('SANATÇI KARTLARI', sanatcilar);
    bolumEkle('ESER KARTLARI', eserKartlari);
    bolumEkle('ÖZEL KARTLAR', ozelKartlar);
    icerik.appendChild(geriButonuOlustur(anaSecimiGoster));
    panel.scrollTop = 0;
  }

  function kartOnizlemesiniGoster(kartBilgisi) {
    panel.classList.remove('v83KartGalerisiPanel');
    panel.classList.add('v83KartOnizlemePanel');
    icerik.innerHTML = '';

    const baslik = document.createElement('h2');
    baslik.textContent = typeof v80KartBasliginiBul === 'function'
      ? v80KartBasliginiBul(kartBilgisi)
      : kartBilgisi.id;

    const resim = document.createElement('img');
    resim.className = 'v83BuyukKart';
    resim.src = kartBilgisi.dosya;
    resim.alt = baslik.textContent;

    const kapat = document.createElement('button');
    kapat.type = 'button';
    kapat.className = 'v83KartKapat';
    kapat.textContent = 'KAPAT';
    kapat.onclick = kartGalerisiniGoster;

    icerik.append(baslik, resim, kapat);
    panel.scrollTop = 0;
  }

  anaSecimiGoster();
  k.querySelector('.v37Kapat').onclick = () => k.remove();
  k.addEventListener('click', (e) => { if (e.target === k) k.remove(); });
}

/* =====================================================
   OYUNCU GÖSTERGESİ / SKOR
===================================================== */
function v37UIKur() {
  if (!document.getElementById('v37TurGostergesi')) {
    const tur = document.createElement('div');
    tur.id = 'v37TurGostergesi';
    oynanisEkrani.appendChild(tur);
  }
  if (!document.getElementById('v37Skor1')) {
    const s1 = document.createElement('div'); s1.id = 'v37Skor1'; s1.className = 'v37Skor v37SkorAlt'; oynanisEkrani.appendChild(s1);
    const s2 = document.createElement('div'); s2.id = 'v37Skor2'; s2.className = 'v37Skor v37SkorUst'; oynanisEkrani.appendChild(s2);
  }
  v37TurGuncelle();
  v37SkorGuncelle();
}

function v37TurGuncelle() {
  const el = document.getElementById('v37TurGostergesi');
  if (!el) return;
  const yeniMetin = `SIRA: ${V37.oyuncuAdlari[aktifOyuncu] || `${aktifOyuncu}. OYUNCU`}`;
  const yeniOyuncu = String(aktifOyuncu);
  if (el.textContent !== yeniMetin) el.textContent = yeniMetin;
  if (el.dataset.oyuncu !== yeniOyuncu) el.dataset.oyuncu = yeniOyuncu;
}

function v37SkorGuncelle() {
  const a = document.getElementById('v37Skor1');
  const b = document.getElementById('v37Skor2');
  const metinA = `${V37.oyuncuAdlari[1]}  •  +${V37.puanlar[1]} Koleksiyon`;
  const metinB = `${V37.oyuncuAdlari[2]}  •  +${V37.puanlar[2]} Koleksiyon`;
  if (a && a.textContent !== metinA) a.textContent = metinA;
  if (b && b.textContent !== metinB) b.textContent = metinB;
}

setInterval(() => { if (v37OyunAktif) { v37TurGuncelle(); v37SkorGuncelle(); } }, 750);

/* =====================================================
   KOLEKSİYON TAMAMLAMA +1 / PARILTI
===================================================== */
function v37KoleksiyonlariKontrolEt() {
  for (const oyuncu of [1, 2]) {
    for (const sanatci of oyuncununSanatcilari(oyuncu)) {
      const key = `${oyuncu}:${sanatci.id}`;
      const kartlar = oyuncununMasadakiEserleri(oyuncu).filter(k => k.dataset.sanatci === sanatci.id);
      if (kartlar.length === 3 && !V37.tamamlananKoleksiyonlar.has(key)) {
        V37.tamamlananKoleksiyonlar.add(key);
        V37.puanlar[oyuncu] += 1;
        v37KoleksiyonSesi();
        kartlar.forEach((k, i) => {
          k.classList.add('v37KoleksiyonParilti');
          setTimeout(() => k.classList.remove('v37KoleksiyonParilti'), 1800 + i * 80);
        });
        v37SkorGuncelle();
      }
    }
  }
}
let v37KoleksiyonKontrolZamanlayicisi = null;
new MutationObserver(() => {
  clearTimeout(v37KoleksiyonKontrolZamanlayicisi);
  v37KoleksiyonKontrolZamanlayicisi = setTimeout(v37KoleksiyonlariKontrolEt, 80);
}).observe(oynanisEkrani, { childList: true, subtree: true });

/* =====================================================
   DEDEKTİF HİKÂYE METNİ
===================================================== */
const v37DedektifMetni = document.getElementById('ozelKartAciklama');
if (v37DedektifMetni) {
  v37DedektifMetni.innerHTML = '20 özel kart arasından 12 adet özel kart seç.<br>Dedektif Soruşturması kartıyla başla.<br><b>“Sürekli olayların olduğu bir müzede dedektifsiz kalmak istemezsin.”</b>';
}

/* =====================================================
   AKILLI GÖRSEL YEDEKLERİ
   Gerçek dosya yoksa kırık ikon yerine alternatif adları dener.
===================================================== */
const V37_GORSEL_ALTERNATIFLERI = {
  'images/monet-eser2-niluferler.png': ['images/monet-eser2-nilüferler.png', 'images/monet-eser2-niluferler.PNG'],
  'images/muze-guvenligi.png': ['images/müze-güvenliği.png', 'images/muze-guvenligi.PNG'],
  'images/dunya-takimi.png': ['images/dünya-takımı.png', 'images/dunya-takimi.PNG']
};

document.addEventListener('error', (e) => {
  const img = e.target;
  if (!(img instanceof HTMLImageElement)) return;
  const current = img.getAttribute('src');
  const list = V37_GORSEL_ALTERNATIFLERI[current];
  if (!list || !list.length) return;
  const next = list.shift();
  img.src = next;
}, true);

/* =====================================================
   ÇÖP DESTESİ: SIRALAMA + İNCELEME
===================================================== */
const v37EskiCopYenile = copDesteGorseliniYenile;
copDesteGorseliniYenile = function() {
  if (typeof v37EskiCopYenile === 'function') v37EskiCopYenile();
  const kartlar = Array.from(document.querySelectorAll('.coptekiKart'));
  kartlar.forEach((el) => {
    const index = copDeste.findIndex(k => k.id === el.dataset.id);
    if (index >= 0) el.style.zIndex = String(3000 + index);
  });
};

function v37CopTarayiciAc() {
  if (!copDeste.length) { secimYazisiGoster('ÇÖPLÜK BOŞ'); return; }
  let idx = copDeste.length - 1;
  let kat = document.getElementById('v37CopTarayici');
  if (kat) kat.remove();
  kat = document.createElement('div');
  kat.id = 'v37CopTarayici';
  kat.innerHTML = `
    <div class="v37Panel v37CopPanel">
      <button class="v37Kapat">×</button>
      <div class="v37CopBaslik"></div>
      <img class="v37CopKart" alt="Çöpteki kart">
      <div class="v37CopAlt">
        <button class="v37Onceki">◀ ÖNCEKİ</button>
        <button class="v37Sonraki">SONRAKİ ▶</button>
      </div>
    </div>`;
  document.body.appendChild(kat);
  const resim = kat.querySelector('.v37CopKart');
  const baslik = kat.querySelector('.v37CopBaslik');
  function ciz() {
    const k = copDeste[idx];
    resim.src = k.dosya;
    baslik.textContent = k.tip === 'eser' ? 'ÇÖPTEKİ ESER' : 'ÇÖPTEKİ ÖZEL KART';
  }
  kat.querySelector('.v37Onceki').onclick = () => { idx = Math.max(0, idx - 1); ciz(); };
  kat.querySelector('.v37Sonraki').onclick = () => { idx = Math.min(copDeste.length - 1, idx + 1); ciz(); };
  kat.querySelector('.v37Kapat').onclick = () => kat.remove();
  ciz();
}

document.addEventListener('click', (e) => {
  if (hedefSecimAktif) return;
  const t = e.target.closest?.('.coptekiKart, #copYuvasi');
  if (!t || !v37OyunAktif) return;
  e.preventDefault();
  e.stopImmediatePropagation();
  v37CopTarayiciAc();
}, true);

/* =====================================================
   DEPO KİLİDİ + DOLULUK: TEK KAYNAKLI KONTROL
===================================================== */
depoYuvasiDoluMu = function(yuvaId) {
  const domDolu = !!document.querySelector(`.depodakiEserKarti[data-yuva-id="${yuvaId}"]`);
  const oyuncu = yuvaId.startsWith('alt') ? 1 : 2;
  const veriDolu = oyuncununDeposu(oyuncu).some(k => k.yuvaId === yuvaId);
  return domDolu || veriDolu;
};

depoYuvasiKilitliMi = function(yuvaId) {
  return !!(depoKilidiDurumu && depoKilidiDurumu.yuvaId === yuvaId);
};

oyuncununBosDepoYuvalari = function(oyuncu) {
  const ids = oyuncu === 1 ? ['altDepoBir', 'altDepoIki'] : ['ustDepoBir', 'ustDepoIki'];
  return ids.filter(id => !depoYuvasiKilitliMi(id) && !depoYuvasiDoluMu(id));
};

/* =====================================================
   ÖZEL KART KARAR EKRANI: TAKIM SAKLAMA KİLİDİ + MASAYI GÖR
===================================================== */
const v37EskiOzelKarar = ozelKartKararlariniGoster;
ozelKartKararlariniGoster = function(kartBilgisi, kartElementi, katman) {
  v37EskiOzelKarar(kartBilgisi, kartElementi, katman);

  const takimMap = {
    'fransa-takimi': 'fransa',
    'hollanda-takimi': 'hollanda',
    'dunya-takimi': 'dunya',
    'klasikler-takimi': 'klasikler'
  };
  const takim = takimMap[kartBilgisi.id];
  if (takim && takimSanatciSayisi(takim) === 0) {
    const butonlar = Array.from(document.querySelectorAll('#ozelKartKararButonlari button'));
    const yuvaya = butonlar.find(b => b.textContent.includes('YUVANA'));
    if (yuvaya) {
      yuvaya.disabled = true;
      yuvaya.style.opacity = '0.3';
      yuvaya.style.filter = 'grayscale(0.7)';
      yuvaya.title = 'Bu takımın sanatçısı sende olmadığı için saklanamaz.';
    }
  }

  if (['ozel-kart-takasi', 'yeni-sergi', 'muze-guvenligi'].includes(kartBilgisi.id)) {
    if (katman) {
      katman.style.background = 'rgba(0,0,0,0.28)';
      katman.style.backdropFilter = 'none';
      katman.style.webkitBackdropFilter = 'none';
    }
    if (kartElementi) {
      gsap.to(kartElementi, {
        left: window.innerWidth * 0.84,
        top: window.innerHeight * 0.28,
        width: Math.min(window.innerWidth * 0.12, 220),
        height: 'auto',
        duration: 0.35,
        ease: 'power2.out'
      });
    }
  }
};

/* =====================================================
   ARKEOLOJİK KAZI — DESTENİN ALTINDAN GÖRSEL ÇIKIŞ
===================================================== */
arkeolojikKaziKullan = function(kartBilgisi, kartElementi, katman) {
  if (!ortakDeste.length) { ozelKartKararlariniGoster(kartBilgisi, kartElementi, katman); return; }
  kullanilanOzelKartiCopeAt(kartBilgisi, kartElementi, katman, () => {
    const cekilen = ortakDeste.shift();
    window.ortakDeste = ortakDeste;
    const r = ortakDesteYuvasi.getBoundingClientRect();
    const altKart = document.createElement('img');
    altKart.src = 'images/kart-arkasi.png';
    altKart.className = 'v37KaziKart';
    Object.assign(altKart.style, { position:'fixed', left:r.left+'px', top:(r.top+r.height*0.12)+'px', width:r.width+'px', height:r.height+'px', zIndex:'90000' });
    document.body.appendChild(altKart);
    const toz = document.createElement('div');
    toz.className = 'v37Toz';
    toz.style.left = (r.left + r.width/2) + 'px';
    toz.style.top = (r.top + r.height/2) + 'px';
    document.body.appendChild(toz);
    v37KisaSes(120, 0.18, 'sawtooth', 0.018);
    gsap.to(altKart, { x: -r.width*1.25, rotation:-8, duration:0.45, ease:'power2.out', onComplete:() => {
      altKart.src = cekilen.dosya;
      gsap.to(altKart, { left:window.innerWidth/2-r.width*1.8, top:window.innerHeight/2-r.height*1.8, width:r.width*3.6, height:r.height*3.6, x:0, rotation:0, duration:0.55, ease:'back.out(1.3)', onComplete:() => {
        setTimeout(() => { altKart.remove(); toz.remove(); cekilenKartiBuyukGoster(cekilen); }, 300);
      }});
    }});
  });
};

/* =====================================================
   GİZLİ SANDIK — DIŞARIDAKİ KARTI OYUNCU SEÇER
===================================================== */
gizliSandikKullan = function(kartBilgisi, kartElementi, katman) {
  if (!artanOzelKartlar.length) { ozelKartKararlariniGoster(kartBilgisi, kartElementi, katman); return; }
  ozelKartiOturumDisinaCikar(kartBilgisi, kartElementi, katman, () => {
    const secim = document.createElement('div');
    secim.id = 'v37GizliSandikSecim';
    secim.innerHTML = `<div class="v37Panel v37KartSecimPanel"><h2>GİZLİ SANDIK</h2><p>Oyuna dahil etmek istediğin özel kartı seç.</p><div class="v37KartGrid"></div></div>`;
    document.body.appendChild(secim);
    const grid = secim.querySelector('.v37KartGrid');
    artanOzelKartlar.forEach((k) => {
      const img = document.createElement('img');
      img.src = k.dosya; img.alt = k.id; grid.appendChild(img);
      img.onclick = () => {
        const index = artanOzelKartlar.findIndex(x => x.id === k.id);
        const gelen = artanOzelKartlar.splice(index, 1)[0];
        gizliSandiktanDahilOlanKartlar.push({ ...gelen });
        const gi = secilenOzelKartlar.findIndex(x => x.id === 'gizli-sandik');
        if (gi !== -1) secilenOzelKartlar.splice(gi, 1);
        secilenOzelKartlar.push({ ...gelen });
        window.secilenOzelKartlar = secilenOzelKartlar;
        window.artanOzelKartlar = artanOzelKartlar;
        window.gizliSandiktanDahilOlanKartlar = gizliSandiktanDahilOlanKartlar;
        const gorseller = Array.from(document.querySelectorAll('.artanOzelKarti'));
        if (gorseller.length) gorseller[gorseller.length - 1].remove();
        secim.remove();
        secimYazisiGoster('GİZLİ SANDIK — SEÇTİĞİN KART OYUNA DAHİL OLDU');
        cekilenKartiBuyukGoster(gelen);
      };
    });
  });
};

/* =====================================================
   MÜZE GÜVENLİĞİ — SAĞDA BEKLE, SONRA SANATÇIYA UÇ
===================================================== */
muzeGuvenligiKullan = function(kartBilgisi, kartElementi, katman) {
  const oyuncu = aktifOyuncu;
  const sanatciKartlari = Array.from(document.querySelectorAll(`.yerlesenSanatciKarti[data-oyuncu="${oyuncu}"]`));
  if (!sanatciKartlari.length) { ozelKartKararlariniGoster(kartBilgisi, kartElementi, katman); return; }
  if (katman) { katman.style.background='rgba(0,0,0,0.12)'; katman.style.backdropFilter='none'; }
  const bekleW = Math.min(window.innerWidth * 0.11, 210);
  gsap.to(kartElementi, { left:window.innerWidth-bekleW-24, top:window.innerHeight*0.28, width:bekleW, height:'auto', duration:0.35 });
  secimYazisiGoster('MÜZE GÜVENLİĞİ — KORUNACAK SANATÇIYI SEÇ');
  sanatciKartlari.forEach(k => { k.classList.add('v37HedefSanatci'); });
  const handler = (e) => {
    const hedef = e.target.closest?.(`.yerlesenSanatciKarti[data-oyuncu="${oyuncu}"]`);
    if (!hedef) return;
    e.preventDefault(); e.stopImmediatePropagation();
    document.removeEventListener('click', handler, true);
    sanatciKartlari.forEach(k => k.classList.remove('v37HedefSanatci'));
    const hr = hedef.getBoundingClientRect();
    const kr = kartElementi.getBoundingClientRect();
    const w = hr.width * 0.42;
    const oran = kr.width / kr.height || 0.72;
    const h = w / oran;
    const left = hr.right - w * 0.8;
    const top = hr.bottom - h * 0.62;
    gsap.to(kartElementi, { left, top, width:w, height:h, rotation:-5, duration:0.55, ease:'power3.inOut', onComplete:() => {
      const sr = oynanisEkrani.getBoundingClientRect();
      const g = document.createElement('img');
      g.src = kartBilgisi.dosya;
      g.className = 'aktifMuzeGuvenligiKarti';
      g.dataset.oyuncu = String(oyuncu);
      g.dataset.sanatci = hedef.dataset.sanatci;
      Object.assign(g.style,{position:'absolute',left:(left-sr.left)+'px',top:(top-sr.top)+'px',width:w+'px',height:h+'px',zIndex:'40',pointerEvents:'none',transform:'rotate(-5deg)'});
      oynanisEkrani.appendChild(g);
      muzeGuvenligiDurumu = { oyuncu, sanatciId: hedef.dataset.sanatci, element:g };
      window.muzeGuvenligiDurumu = muzeGuvenligiDurumu;
      kartElementi.remove(); if (katman) katman.remove(); bekleyenOzelKart = null; turuBitir();
    }});
  };
  document.addEventListener('click', handler, true);
};

/* =====================================================
   AÇIK ARTIRMA — KAZANAN KENDİSİ DESTEDEN ÇEKER
===================================================== */
acikArtirmaKazananKartCeksin = function(kazanan) {
  aktifOyuncu = kazanan;
  V37.acikArtirmaKazanan = kazanan;
  kartCekmeKilidi = false;
  oyunAsamasi = 'kart-cekme';
  secimYazisiGoster(`${V37.oyuncuAdlari[kazanan]} AÇIK ARTIRMAYI KAZANDI — KARTINI KENDİN ÇEK`);
  kartCekmeAsamasiniBaslat();
};

/* =====================================================
   MÜZE MÜDÜRÜ — AZ BLUR + GERİ SAYIM + SEÇİMİ GERİ AL
===================================================== */
muzeMuduruBesKartEkraniAc = function() {
  if (ortakDeste.length < 5) { turuBitir(); return; }
  const besKart = ortakDeste.slice(-5);
  let kat = document.getElementById('muzeMuduruKatmani'); if (kat) kat.remove();
  kat = document.createElement('div'); kat.id='muzeMuduruKatmani'; kat.className='v37MuzeMuduruKatman';
  kat.innerHTML = `<div class="v37Panel v37MudPanel"><h2>MÜZE MÜDÜRÜ</h2><div class="v37Sure"></div><p>Alta göndereceğin kartı seç. Seçimini değiştirmek için başka karta dokunabilirsin.</p><div class="v37KartGrid"></div><button class="v37Onay">DEVAM</button></div>`;
  document.body.appendChild(kat);
  const grid=kat.querySelector('.v37KartGrid'); const onay=kat.querySelector('.v37Onay'); onay.disabled=true;
  let secilen=null; let kalan=V37.muzeMuduruSure; const sure=kat.querySelector('.v37Sure');
  const interval=setInterval(()=>{ sure.textContent=`${kalan} sn`; kalan--; if(kalan<0){ clearInterval(interval); if(!secilen) secilen=besKart[0]; kat.remove(); muzeMuduruSirala(besKart,secilen,null); }},1000);
  besKart.forEach(k=>{const img=document.createElement('img');img.src=k.dosya;grid.appendChild(img);img.onclick=()=>{secilen=k;grid.querySelectorAll('img').forEach(x=>x.classList.remove('secili'));img.classList.add('secili');onay.disabled=false;};});
  onay.onclick=()=>{if(!secilen)return;clearInterval(interval);kat.remove();muzeMuduruSirala(besKart,secilen,null);};
};

muzeMuduruSirala = function(besKart, altaGidecekKart) {
  const kalanKartlar = besKart.filter(k=>k!==altaGidecekKart);
  const kat=document.createElement('div');kat.id='muzeMuduruSiralaKatmani';kat.className='v37MuzeMuduruKatman';
  kat.innerHTML=`<div class="v37Panel v37MudPanel"><h2>ÇEKİLME SIRASINI BELİRLE</h2><div class="v37Sure"></div><p>Karta dokun: sıraya ekle. Tekrar dokun: seçimden çıkar.</p><div class="v37KartGrid"></div><div class="v37SiraMetni"></div><button class="v37Onay">ONAYLA</button></div>`;
  document.body.appendChild(kat);
  const grid=kat.querySelector('.v37KartGrid'), onay=kat.querySelector('.v37Onay'), metin=kat.querySelector('.v37SiraMetni');onay.disabled=true;
  const secilen=[]; let kalan=V37.muzeMuduruSure; const sure=kat.querySelector('.v37Sure');
  const ciz=()=>{metin.textContent=secilen.length?`Sıra: ${secilen.map((_,i)=>i+1).join(' → ')}`:'Henüz sıra seçilmedi';onay.disabled=secilen.length!==4;};
  const interval=setInterval(()=>{sure.textContent=`${kalan} sn`;kalan--;if(kalan<0){clearInterval(interval);const eksik=kalanKartlar.filter(k=>!secilen.includes(k));secilen.push(...eksik);kat.remove();muzeMuduruSonucuUygula(besKart,altaGidecekKart,secilen);}},1000);
  kalanKartlar.forEach(k=>{const img=document.createElement('img');img.src=k.dosya;grid.appendChild(img);img.onclick=()=>{const i=secilen.indexOf(k);if(i>=0){secilen.splice(i,1);img.classList.remove('secili');}else{secilen.push(k);img.classList.add('secili');}ciz();};});
  onay.onclick=()=>{if(onay.disabled)return;clearInterval(interval);kat.remove();muzeMuduruSonucuUygula(besKart,altaGidecekKart,secilen);};ciz();
};

/* =====================================================
   ÖZEL KART TAKASI / YENİ SERGİ KARARINDA MASAYI OKUNUR TUT
===================================================== */
const v37EskiCekilenBuyuk = cekilenKartiBuyukGoster;
cekilenKartiBuyukGoster = function(kartBilgisi) {
  v37EskiCekilenBuyuk(kartBilgisi);
  if (['ozel-kart-takasi','yeni-sergi','muze-guvenligi','muze-muduru'].includes(kartBilgisi?.id)) {
    setTimeout(()=>{
      const kat=document.querySelector('.cekilenKartKatmani');
      if(kat){kat.style.background='rgba(0,0,0,0.26)';kat.style.backdropFilter='none';kat.style.webkitBackdropFilter='none';}
    },700);
  }
};

/* =====================================================
   BAŞLANGIÇ 12 SANATÇI — TOPLU ZIPLAMAYI KES
===================================================== */
const v37KapaliSira = document.getElementById('kapaliKartSirasi');
if (v37KapaliSira) {
  v37KapaliSira.addEventListener('transitionend', () => {
    if (v37KapaliSira.classList.contains('goster')) v37KapaliSira.classList.add('v37Sabit');
  });
}

/* =====================================================
   12 ÖZEL KART SEÇİMİ — KİM SEÇİYOR?
   Kural netleşmediği için oyunu kilitlemeden ekranda açıklama gösteriyoruz.
===================================================== */
const v37EskiOzelBaslat = ozelKartSeciminiBaslat;
ozelKartSeciminiBaslat = function() {
  v37EskiOzelBaslat();
  const yazi=document.getElementById('ozelKartBaslik');
  if(yazi) yazi.textContent='ÖZEL KART SEÇİMİ — ORTAK OTURUM HAVUZU';
};

/* =====================================================
   OYUN İÇİ KLASİK MÜZİK DOSYASI DESTEĞİ
   sounds/oyun-muzik-klasik.mp3 dosyası eklenirse otomatik onu kullanır.
===================================================== */
(function(){
  const test=new Audio('sounds/oyun-muzik-klasik.mp3');
  test.addEventListener('canplaythrough',()=>{oyunMuzik.src='sounds/oyun-muzik-klasik.mp3';oyunMuzik.loop=true;},{once:true});
  test.load();
})();

/* =====================================================
   UI'YI KUR
===================================================== */
v37UIKur();



/* =====================================================
   V40 — 23.08.2026 KONTROLLÜ SCRIPT DÜZELTMELERİ
   Yalnızca script tarafı.
===================================================== */

/* =====================================================
   OYUNCU ADI YARDIMCISI
===================================================== */

function v40OyuncuAdi(
  oyuncu
) {

  if (
    typeof V37 !== "undefined" &&
    V37.oyuncuAdlari &&
    V37.oyuncuAdlari[oyuncu]
  ) {

    return V37.oyuncuAdlari[oyuncu];
  }


  return `${oyuncu}. OYUNCU`;
}


/* =====================================================
   SEÇİM / TUR YAZILARINDA GERÇEK OYUNCU ADLARI
   + normal tur mesajını çöp ile ortak deste arasına al
===================================================== */

const v40EskiSecimYazisiGoster =
  secimYazisiGoster;


secimYazisiGoster =
  function (
    metin
  ) {

    let yeniMetin =
      String(
        metin ?? ""
      );


    yeniMetin =
      yeniMetin
        .replaceAll(
          "1. OYUNCU",
          v40OyuncuAdi(1)
        )
        .replaceAll(
          "2. OYUNCU",
          v40OyuncuAdi(2)
        );


    /*
      NORMAL TURDA:
      "ORTAK DESTEDEN KART ÇEK"
      yerine oyuncuya iki seçeneği de hatırlat.
    */

    if (
      yeniMetin.includes(
        "ORTAK DESTEDEN KART ÇEK"
      ) &&
      !yeniMetin.includes(
        "VEYA ÖZEL KART KULLAN"
      )
    ) {

      const ad =
        v40OyuncuAdi(
          aktifOyuncu
        );


      yeniMetin =
        `${ad} — ORTAK DESTEDEN KART ÇEK VEYA ÖZEL KART KULLAN`;
    }


    v40EskiSecimYazisiGoster(
      yeniMetin
    );


    const yazi =
      document.getElementById(
        "secimYazisi"
      );


    if (
      !yazi
    ) {

      return;
    }


    const ortaTurMesaji =
      yeniMetin.includes(
        "ORTAK DESTEDEN KART ÇEK VEYA ÖZEL KART KULLAN"
      );


    if (
      ortaTurMesaji
    ) {

      /*
        Çöp ve Ortak Deste yuvalarının
        yatay orta noktası oyun alanında %50 civarıdır.
      */

      yazi.style.left =
        "50%";

      yazi.style.top =
        "48%";

      yazi.style.transform =
        "translate(-50%, -50%)";

      yazi.style.maxWidth =
        "32%";

    } else {

      /*
        Diğer seçim yazıları kendi CSS konumuna döner.
      */

      yazi.style.left =
        "";

      yazi.style.top =
        "";

      yazi.style.transform =
        "";

      yazi.style.maxWidth =
        "";
    }
  };


/* =====================================================
   BAŞLANGIÇ ZAR EKRANINDA GERÇEK OYUNCU ADLARI
===================================================== */

const v40EskiBaslangicZarSisteminiBaslat =
  baslangicZarSisteminiBaslat;


baslangicZarSisteminiBaslat =
  function () {

    v40EskiBaslangicZarSisteminiBaslat();


    requestAnimationFrame(
      () => {

        const adlar =
          document.querySelectorAll(
            "#baslangicZarKatmani .zarOyuncuAdi"
          );


        if (
          adlar[0]
        ) {

          adlar[0].textContent =
            v40OyuncuAdi(1);
        }


        if (
          adlar[1]
        ) {

          adlar[1].textContent =
            v40OyuncuAdi(2);
        }

      }
    );
  };


const v40EskiBaslangicZarlariniKarsilastir =
  baslangicZarlariniKarsilastir;


baslangicZarlariniKarsilastir =
  function () {

    v40EskiBaslangicZarlariniKarsilastir();


    const sonucYazisi =
      document.getElementById(
        "zarGenelSonuc"
      );


    if (
      !sonucYazisi ||
      oyuncu1ZarSonucu ===
        oyuncu2ZarSonucu
    ) {

      return;
    }


    sonucYazisi.textContent =
      `${v40OyuncuAdi(aktifOyuncu)} BAŞLIYOR!`;
  };


/* =====================================================
   12 SANATÇI KARTI — TOPLU MİLİM OYNAMAYI KES
===================================================== */

const v40EskiSanatciKartiSec =
  sanatciKartiSec;


sanatciKartiSec =
  function (
    kart,
    sanatci
  ) {

    /*
      Kart sırası seçime basıldığı anda
      sabit tutulur; yalnızca seçilen kart animasyon görür.
    */

    if (
      kapaliKartSirasi
    ) {

      gsap.killTweensOf(
        kapaliKartSirasi
      );


      kapaliKartSirasi.style.transform =
        "translateY(0)";

      kapaliKartSirasi.style.transitionProperty =
        "opacity";
    }


    v40EskiSanatciKartiSec(
      kart,
      sanatci
    );
  };


/* =====================================================
   ÖZEL KART SEÇİMİ — ORTAK OTURUM HAVUZU ALT BAŞLIĞI
===================================================== */

function v40OrtakOturumHavuzuYazisiniKur() {

  const bilgiKutusu =
    document.getElementById(
      "ozelKartBilgiKutusu"
    );


  const baslik =
    document.getElementById(
      "ozelKartBaslik"
    );


  if (
    !bilgiKutusu ||
    !baslik
  ) {

    return;
  }


  /*
    Önceki V37 katmanının tek satıra
    çevirdiği başlığı geri ayır.
  */

  baslik.textContent =
    "ÖZEL KART SEÇİMİ";


  let altBaslik =
    document.getElementById(
      "v40OrtakOturumHavuzu"
    );


  if (
    !altBaslik
  ) {

    altBaslik =
      document.createElement(
        "div"
      );


    altBaslik.id =
      "v40OrtakOturumHavuzu";


    bilgiKutusu.appendChild(
      altBaslik
    );
  }


  altBaslik.textContent =
    "ORTAK OTURUM HAVUZU";


  Object.assign(
    altBaslik.style,
    {
      position:
        "absolute",

      left:
        "50%",

      top:
        "31%",

      width:
        "84%",

      transform:
        "translateX(-50%)",

      color:
        "#7A5A16",

      fontFamily:
        'Georgia, "Times New Roman", serif',

      fontSize:
        "1.75cqw",

      fontWeight:
        "bold",

      letterSpacing:
        "0.08em",

      textAlign:
        "center",

      whiteSpace:
        "nowrap",

      zIndex:
        "2",

      pointerEvents:
        "none"
    }
  );
}


const v40EskiOzelKartSeciminiBaslat =
  ozelKartSeciminiBaslat;


ozelKartSeciminiBaslat =
  function () {

    v40EskiOzelKartSeciminiBaslat();


    requestAnimationFrame(
      () => {

        v40OrtakOturumHavuzuYazisiniKur();

      }
    );
  };


/* =====================================================
   GİZLİ SANDIK — DIŞARIDAKİ KARTLAR GÖSTERİLMEZ
   Oyuncu hangi kart olduğunu bilmeden rastgele çeker.
===================================================== */

gizliSandikKullan =
  function (
    kartBilgisi,
    kartElementi,
    katman
  ) {

    if (
      artanOzelKartlar.length ===
      0
    ) {

      ozelKartKararlariniGoster(
        kartBilgisi,
        kartElementi,
        katman
      );


      return;
    }


    ozelKartiOturumDisinaCikar(
      kartBilgisi,
      kartElementi,
      katman,
      () => {

        const rastgeleIndex =
          Math.floor(
            Math.random() *
            artanOzelKartlar.length
          );


        const gelenKart =
          artanOzelKartlar.splice(
            rastgeleIndex,
            1
          )[0];


        if (
          !gelenKart
        ) {

          turuBitir();


          return;
        }


        gizliSandiktanDahilOlanKartlar.push(
          {
            ...gelenKart
          }
        );


        const gizliIndex =
          secilenOzelKartlar.findIndex(
            (
              kart
            ) =>
              kart.id ===
              "gizli-sandik"
          );


        if (
          gizliIndex !==
          -1
        ) {

          secilenOzelKartlar.splice(
            gizliIndex,
            1
          );
        }


        secilenOzelKartlar.push(
          {
            ...gelenKart
          }
        );


        window.secilenOzelKartlar =
          secilenOzelKartlar;


        window.artanOzelKartlar =
          artanOzelKartlar;


        window.gizliSandiktanDahilOlanKartlar =
          gizliSandiktanDahilOlanKartlar;


        /*
          Artan özel kart destesinden
          yalnızca 1 kapalı kart eksilir.
          Kartın yüzü hiçbir aşamada gösterilmez.
        */

        const artanGorseller =
          Array.from(
            document.querySelectorAll(
              ".artanOzelKarti"
            )
          );


        if (
          artanGorseller.length >
          0
        ) {

          artanGorseller[
            artanGorseller.length - 1
          ].remove();
        }


        secimYazisiGoster(
          "GİZLİ SANDIK — RASTGELE ÖZEL KART ÇEKİLDİ"
        );


        /*
          Rastgele gelen kart bundan sonra
          normal çekilmiş özel kart gibi açılır.
        */

        cekilenKartiBuyukGoster(
          gelenKart
        );
      }
    );
  };


/* =====================================================
   AKTİVİST SALDIRISI — UYGUN HEDEFLER
   Tamamlanmış koleksiyon ve Müze Güvenliği hariç.
===================================================== */

function aktivistSaldirisiUygunHedefleriBul() {

  return rakibinTamamlanmamisUygunEserleri();
}


/* =====================================================
   AKTİVİST SALDIRISI — KULLANILABİLİRLİK
===================================================== */

const v40EskiOzelKartKullanilabilirMi =
  ozelKartKullanilabilirMi;


ozelKartKullanilabilirMi =
  function (
    kartBilgisi
  ) {

    if (
      kartBilgisi &&
      kartBilgisi.id ===
        "aktivist-saldirisi"
    ) {

      return (
        aktivistSaldirisiUygunHedefleriBul()
          .length >
        0
      );
    }


    return v40EskiOzelKartKullanilabilirMi(
      kartBilgisi
    );
  };


const v40EskiOzelKartUyariMetni =
  ozelKartUyariMetni;


ozelKartUyariMetni =
  function (
    kartBilgisi
  ) {

    if (
      kartBilgisi &&
      kartBilgisi.id ===
        "aktivist-saldirisi"
    ) {

      if (
        aktivistSaldirisiUygunHedefleriBul()
          .length ===
        0
      ) {

        return (
          "Saldırılabilecek uygun eser yok. Tamamlanmış koleksiyonlar ve Müze Güvenliği ile korunan eserler hedef alınamaz."
        );
      }


      return "";
    }


    return v40EskiOzelKartUyariMetni(
      kartBilgisi
    );
  };


/* =====================================================
   AKTİVİST SALDIRISI — ANA ETKİ
===================================================== */

function aktivistSaldirisiKullan(
  kartBilgisi,
  kartElementi,
  katman
) {

  const hedefler =
    aktivistSaldirisiUygunHedefleriBul();


  if (
    hedefler.length ===
    0
  ) {

    ozelKartKararlariniGoster(
      kartBilgisi,
      kartElementi,
      katman
    );


    return;
  }


  /*
    Kullanılan Aktivist Saldırısı
    önce normal şekilde çöpe gider.
  */

  kullanilanOzelKartiCopeAt(
    kartBilgisi,
    kartElementi,
    katman,
    () => {

      const guncelHedefler =
        aktivistSaldirisiUygunHedefleriBul();


      if (
        guncelHedefler.length ===
        0
      ) {

        turuBitir();


        return;
      }


      rakipEserHedefSecimiBaslat(
        guncelHedefler,
        1,
        "AKTİVİST SALDIRISI — SALDIRMAK İSTEDİĞİN 1 ESERİ SEÇ",
        (
          secilenler
        ) => {

          const hedef =
            secilenler[0];


          if (
            !hedef
          ) {

            turuBitir();


            return;
          }


          ozelKartZarEkraniAc(
            "AKTİVİST SALDIRISI",

            "1–2–3–4 saldırı başarısız • 5–6 saldırı başarılı",

            (
              zarSonucu
            ) => {

              if (
                zarSonucu <=
                4
              ) {

                secimYazisiGoster(
                  "AKTİVİST SALDIRISI BAŞARISIZ — ESER ZARAR GÖRMEDİ"
                );


                turuBitir();


                return;
              }


              secimYazisiGoster(
                "AKTİVİST SALDIRISI BAŞARILI — ESER ÇÖPE GİDİYOR"
              );


              masadakiEseriCopeGonder(
                hedef,
                () => {

                  turuBitir();
                }
              );
            }
          );
        }
      );
    }
  );
}


/* =====================================================
   AKTİVİST SALDIRISI — ÖZEL KART MOTORUNA BAĞLA
   MÜZEDE KAZA'YA DOKUNULMAZ.
===================================================== */

const v40EskiOzelKartiKullan =
  ozelKartiKullan;


ozelKartiKullan =
  function (
    kartBilgisi,
    kartElementi,
    katman
  ) {

    if (
      kartBilgisi &&
      kartBilgisi.id ===
        "aktivist-saldirisi"
    ) {

      aktivistSaldirisiKullan(
        kartBilgisi,
        kartElementi,
        katman
      );


      return;
    }


    v40EskiOzelKartiKullan(
      kartBilgisi,
      kartElementi,
      katman
    );
  };


/* =====================================================
   MÜZEDE DEPREM — ARTIK OYUN HAVUZUNDA YOK
   Eski fonksiyonlar dosyada pasif/dead code olarak kalsa da
   hiçbir kart tanımı veya preload yolu onları çağırmaz.
===================================================== */

console.log(
  "V40 hazır: Müzede Deprem kaldırıldı, Aktivist Saldırısı eklendi."
);



/* =====================================================
   V41 — 23.08.2026 TEST DÜZELTMELERİ
===================================================== */

/* NASIL OYNANIR: eski listener'ları tamamen sök. */
(function v41NasilOynanirButonunuTemizle() {
  const eski = document.getElementById("nasilOynanirButonu");
  if (!eski || !eski.parentNode) return;

  const yeni = eski.cloneNode(true);
  eski.parentNode.replaceChild(yeni, eski);

  Object.assign(yeni.style, {
    pointerEvents: "auto",
    zIndex: "5000",
    cursor: "pointer",
    touchAction: "manipulation"
  });

  yeni.addEventListener("pointerup", (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (typeof v37EskiButonSesiCal === "function") {
      v37EskiButonSesiCal();
    } else {
      butonSesiCal();
    }

    if (typeof v37NasilOynanirAc === "function") {
      v37NasilOynanirAc();
    }
  });
})();


/* SANATÇI SEÇİMİ: görsel kutu + oyuncu adı.
   Beklenen görsel: images/3-sanatci-sec.png */
function v41SanatciSecimBanneriniKaldir() {
  document.getElementById("v41SanatciSecimBanner")?.remove();
}

function v41SanatciSecimBanneriniGoster(oyuncuAdi) {
  v41SanatciSecimBanneriniKaldir();

  const banner = document.createElement("div");
  banner.id = "v41SanatciSecimBanner";

  const gorsel = document.createElement("img");
  gorsel.src = "images/3-sanatci-sec.png";
  gorsel.alt = "3 sanatçı seç";

  const ad = document.createElement("div");
  ad.className = "v41SanatciSecimOyuncuAdi";
  ad.textContent = oyuncuAdi;

  banner.append(gorsel, ad);
  oynanisEkrani.appendChild(banner);

  gorsel.addEventListener("error", () => {
    banner.remove();
    const yazi = secimYazisiniOlustur();
    yazi.style.display = "block";
    yazi.textContent = `${oyuncuAdi} — 3 SANATÇI SEÇ`;
  }, { once: true });
}

const v41EskiSecimYazisiGoster = secimYazisiGoster;

secimYazisiGoster = function(metin) {
  const temizMetin = String(metin ?? "");
  const sanatciEslesmesi = temizMetin.match(/^(.*?)\s*—\s*3 SANATÇI SEÇ$/);

  if (sanatciEslesmesi) {
    const yazi = secimYazisiniOlustur();
    yazi.style.display = "none";
    v41SanatciSecimBanneriniGoster(sanatciEslesmesi[1].trim());
    return;
  }

  v41SanatciSecimBanneriniKaldir();

  const yazi = secimYazisiniOlustur();
  yazi.style.display = "block";

  v41EskiSecimYazisiGoster(temizMetin);

  if (temizMetin.includes("ORTAK DESTEDEN KART ÇEK VEYA ÖZEL KART KULLAN")) {
    const oyuncuAdi =
      (typeof V37 !== "undefined" && V37.oyuncuAdlari?.[aktifOyuncu])
        ? V37.oyuncuAdlari[aktifOyuncu]
        : `${aktifOyuncu}. OYUNCU`;

    yazi.innerHTML =
      `<span class="v41TurOyuncuAdi">${oyuncuAdi}</span>` +
      `<span class="v41TurTalimat">ORTAK DESTEDEN KART ÇEK VEYA ÖZEL KART KULLAN</span>`;
  }
};

const v41EskiSecimYazisiniGizle = secimYazisiniGizle;

secimYazisiniGizle = function() {
  v41SanatciSecimBanneriniKaldir();
  v41EskiSecimYazisiniGizle();
};


/* SANATÇI KART SIRASI: parent transformunu sürekli sabitle. */
(function v41SanatciSirasiniKilitle() {
  if (!kapaliKartSirasi) return;

  ["pointerdown", "pointerup", "pointercancel", "click"].forEach((olay) => {
    kapaliKartSirasi.addEventListener(olay, () => {
      gsap.killTweensOf(kapaliKartSirasi);
      kapaliKartSirasi.style.transform = "translateY(0px)";
    }, true);
  });
})();


/* DEDEKTİF ZAR EKRANI — görsel kutu.
   Beklenen görsel: images/dedektif-zar-kutusu.png */
const v41EskiOzelKartZarEkraniAc = ozelKartZarEkraniAc;

ozelKartZarEkraniAc = function(baslik, aciklama, tamamlaninca) {
  if (baslik !== "DEDEKTİF SORUŞTURMASI") {
    v41EskiOzelKartZarEkraniAc(baslik, aciklama, tamamlaninca);
    return;
  }

  document.getElementById("ozelKartZarKatmani")?.remove();

  const katman = document.createElement("div");
  katman.id = "ozelKartZarKatmani";
  katman.className = "v41DedektifZarKatmani";

  const kutu = document.createElement("div");
  kutu.className = "v41DedektifZarKutusu";

  const kutuGorseli = document.createElement("img");
  kutuGorseli.className = "v41DedektifZarKutuGorseli";
  kutuGorseli.src = "images/dedektif-zar-kutusu.png";

  const zar = document.createElement("div");
  zar.className = "v41DedektifZar";
  zar.textContent = "⚀";

  const sonuc = document.createElement("div");
  sonuc.className = "v41DedektifZarSonuc";

  const buton = ozelKartKararButonuOlustur("ZAR AT");
  buton.classList.add("v41DedektifZarButonu");

  kutu.append(kutuGorseli, zar, sonuc, buton);
  katman.appendChild(kutu);
  document.body.appendChild(katman);

  kutuGorseli.addEventListener("error", () => {
    katman.remove();
    v41EskiOzelKartZarEkraniAc(baslik, aciklama, tamamlaninca);
  }, { once: true });

  const semboller = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
  let kilit = false;

  buton.addEventListener("click", () => {
    if (kilit) return;
    kilit = true;
    buton.disabled = true;
    butonSesiCal();
    sonuc.textContent = "Atılıyor...";

    let sayac = 0;
    const interval = setInterval(() => {
      zar.textContent = semboller[Math.floor(Math.random() * 6)];

      gsap.fromTo(
        zar,
        { scale: 0.88, rotation: -16 },
        { scale: 1.08, rotation: 16, duration: 0.09 }
      );

      sayac++;

      if (sayac >= 14) {
        clearInterval(interval);

        const zarSonucu = Math.floor(Math.random() * 6) + 1;
        zar.textContent = semboller[zarSonucu - 1];
        sonuc.textContent = `${zarSonucu} GELDİ`;

        gsap.fromTo(
          zar,
          { scale: 1.35, y: -20 },
          { scale: 1, y: 0, duration: 0.5, ease: "bounce.out" }
        );

        setTimeout(() => {
          katman.remove();
          tamamlaninca(zarSonucu);
        }, 900);
      }
    }, 75);
  });
};


/* GİZLİ SANDIK — artan kartları arkaları dönük şekilde önüne diz.
   Oyuncu kendi seçer; kimlikleri görünmez. */
gizliSandikKullan = function(kartBilgisi, kartElementi, katman) {
  if (artanOzelKartlar.length === 0) {
    ozelKartKararlariniGoster(kartBilgisi, kartElementi, katman);
    return;
  }

  ozelKartiOturumDisinaCikar(
    kartBilgisi,
    kartElementi,
    katman,
    () => {
      const secimKatmani = document.createElement("div");
      secimKatmani.id = "v41GizliSandikSecim";

      const baslik = document.createElement("div");
      baslik.className = "v41GizliSandikBaslik";
      baslik.textContent = "GİZLİ SANDIK — KAPALI KARTLARDAN 1 TANESİNİ SEÇ";

      secimKatmani.appendChild(baslik);
      document.body.appendChild(secimKatmani);

      const kaynakRect = artanOzelYuvasi
        ? artanOzelYuvasi.getBoundingClientRect()
        : { left: 0, top: window.innerHeight / 2, width: 90, height: 130 };

      let secildi = false;

      artanOzelKartlar.forEach((gizliKart, index) => {
        const kart = document.createElement("img");
        kart.src = "images/kart-arkasi.png";
        kart.className = "v41GizliSandikKarti";
        kart.dataset.index = String(index);

        Object.assign(kart.style, {
          position: "fixed",
          left: `${kaynakRect.left}px`,
          top: `${kaynakRect.top}px`,
          width: `${kaynakRect.width}px`,
          height: `${kaynakRect.height}px`
        });

        document.body.appendChild(kart);

        const hedefW = Math.min(window.innerWidth * 0.095, 145);
        const hedefH = hedefW * 1.397;
        const bosluk = hedefW * 0.18;

        const toplamW =
          artanOzelKartlar.length * hedefW +
          (artanOzelKartlar.length - 1) * bosluk;

        const hedefLeft =
          window.innerWidth / 2 -
          toplamW / 2 +
          index * (hedefW + bosluk);

        const hedefTop =
          window.innerHeight / 2 -
          hedefH / 2;

        gsap.to(kart, {
          left: hedefLeft,
          top: hedefTop,
          width: hedefW,
          height: hedefH,
          rotation:
            (index - (artanOzelKartlar.length - 1) / 2) * 1.8,
          duration: 0.55,
          delay: index * 0.035,
          ease: "back.out(1.15)"
        });

        kart.addEventListener("click", () => {
          if (secildi) return;
          secildi = true;

          butonSesiCal();

          const secilenIndex = Number(kart.dataset.index);
          const gelenKart = artanOzelKartlar.splice(secilenIndex, 1)[0];

          if (!gelenKart) {
            secimKatmani.remove();
            turuBitir();
            return;
          }

          gizliSandiktanDahilOlanKartlar.push({ ...gelenKart });

          const gizliIndex =
            secilenOzelKartlar.findIndex((k) => k.id === "gizli-sandik");

          if (gizliIndex !== -1) {
            secilenOzelKartlar.splice(gizliIndex, 1);
          }

          secilenOzelKartlar.push({ ...gelenKart });

          window.secilenOzelKartlar = secilenOzelKartlar;
          window.artanOzelKartlar = artanOzelKartlar;
          window.gizliSandiktanDahilOlanKartlar =
            gizliSandiktanDahilOlanKartlar;

          document.querySelectorAll(".v41GizliSandikKarti").forEach((el) => {
            if (el === kart) {
              gsap.to(el, { scale: 1.12, duration: 0.18 });
            } else {
              gsap.to(el, {
                opacity: 0,
                scale: 0.7,
                duration: 0.25,
                onComplete: () => el.remove()
              });
            }
          });

          const artanMasaGorselleri =
            Array.from(document.querySelectorAll(".artanOzelKarti"));

          if (artanMasaGorselleri.length) {
            artanMasaGorselleri[artanMasaGorselleri.length - 1].remove();
          }

          setTimeout(() => {
            document
              .querySelectorAll(".v41GizliSandikKarti")
              .forEach((el) => el.remove());

            secimKatmani.remove();

            secimYazisiGoster(
              "GİZLİ SANDIK — SEÇTİĞİN KART OYUNA DAHİL OLDU"
            );

            cekilenKartiBuyukGoster(gelenKart);
          }, 320);
        });
      });
    }
  );
};

console.log("V41 test düzeltmeleri yüklendi.");


/* =====================================================
   BOT TEST MODU V1 — BİLGİSAYARA KARŞI OYNA
   2. oyuncuyu bilgisayar yönetir.
   Mevcut oyun motoruna dokunmadan davranış katmanı ekler.
===================================================== */

const BOT_V1 = {
  aktif: false,
  oyuncu: 2,
  isim: "BİLGİSAYAR",
  dusunmeMin: 650,
  dusunmeMax: 1250,
  kilit: false,
  sonAksiyon: "",
  sonAksiyonZamani: 0
};


function botV1RastgeleSure(
  min = BOT_V1.dusunmeMin,
  max = BOT_V1.dusunmeMax
) {

  return Math.floor(
    min +
    Math.random() *
    (
      max -
      min
    )
  );
}


function botV1Bekle(
  fn,
  min = BOT_V1.dusunmeMin,
  max = BOT_V1.dusunmeMax
) {

  if (
    BOT_V1.kilit
  ) {

    return;
  }


  BOT_V1.kilit =
    true;


  setTimeout(
    () => {

      try {

        fn();

      } finally {

        setTimeout(
          () => {

            BOT_V1.kilit =
              false;

          },
          180
        );
      }

    },
    botV1RastgeleSure(
      min,
      max
    )
  );
}


function botV1GorunurMu(
  element
) {

  if (
    !element
  ) {

    return false;
  }


  const stil =
    getComputedStyle(
      element
    );


  const rect =
    element
      .getBoundingClientRect();


  return (
    stil.display !==
      "none" &&

    stil.visibility !==
      "hidden" &&

    Number(
      stil.opacity
    ) >
      0.02 &&

    rect.width >
      0 &&

    rect.height >
      0
  );
}


function botV1ButonBul(
  kok,
  metin
) {

  if (
    !kok
  ) {

    return null;
  }


  return Array.from(
    kok.querySelectorAll(
      "button"
    )
  ).find(
    (
      buton
    ) =>
      !buton.disabled &&
      butonV1MetinEslesir(
        buton,
        metin
      )
  ) || null;
}


function butonV1MetinEslesir(
  buton,
  metin
) {

  return String(
    buton.textContent ||
    ""
  )
    .trim()
    .toLocaleUpperCase("tr-TR")
    .includes(
      String(
        metin
      )
        .trim()
        .toLocaleUpperCase("tr-TR")
    );
}


/* =====================================================
   ANA MENÜ — MOD SEÇİMİ
===================================================== */

function botV1ModSecimEkraniAc() {

  document
    .getElementById(
      "botV1ModKatmani"
    )
    ?.remove();


  const katman =
    document.createElement(
      "div"
    );


  katman.id =
    "botV1ModKatmani";


  Object.assign(
    katman.style,
    {
      position:
        "fixed",

      inset:
        "0",

      zIndex:
        "150000",

      display:
        "flex",

      alignItems:
        "center",

      justifyContent:
        "center",

      background:
        "rgba(0,0,0,0.72)",

      backdropFilter:
        "blur(3px)",

      WebkitBackdropFilter:
        "blur(3px)"
    }
  );


  const panel =
    document.createElement(
      "div"
    );


  Object.assign(
    panel.style,
    {
      width:
        "min(88vw, 620px)",

      padding:
        "28px",

      border:
        "3px solid #c7a15a",

      borderRadius:
        "20px",

      background:
        "linear-gradient(180deg, rgba(68,43,20,.98), rgba(31,20,11,.98))",

      boxShadow:
        "0 24px 70px rgba(0,0,0,.65)",

      fontFamily:
        'Georgia, "Times New Roman", serif',

      color:
        "#f5e7c4",

      textAlign:
        "center"
    }
  );


  panel.innerHTML = `
    <div style="
      font-size:clamp(22px,2vw,34px);
      font-weight:bold;
      margin-bottom:22px;
    ">
      OYUN MODU
    </div>

    <button id="botV1IkiOyuncu" style="
      width:100%;
      padding:15px;
      margin-bottom:12px;
      border:2px solid #c7a15a;
      border-radius:12px;
      background:#5a3718;
      color:#f5e7c4;
      font:700 clamp(14px,1.1vw,20px) Georgia;
      cursor:pointer;
      touch-action:manipulation;
    ">
      2 OYUNCU
    </button>

    <button id="botV1Bilgisayar" style="
      width:100%;
      padding:15px;
      margin-bottom:12px;
      border:2px solid #d6b867;
      border-radius:12px;
      background:#74501d;
      color:#fff1bd;
      font:700 clamp(14px,1.1vw,20px) Georgia;
      cursor:pointer;
      touch-action:manipulation;
    ">
      BİLGİSAYARA KARŞI OYNA
    </button>

    <button id="onlineOyna" style="
      width:100%;
      padding:15px;
      margin-bottom:12px;
      border:2px solid #d6b867;
      border-radius:12px;
      background:#3f6170;
      color:#fff1bd;
      font:700 clamp(14px,1.1vw,20px) Georgia;
      cursor:pointer;
      touch-action:manipulation;
    ">
      ONLINE
    </button>

    <button id="botV1Geri" style="
      padding:11px 22px;
      border:1px solid #9f8048;
      border-radius:10px;
      background:#2a1b0e;
      color:#e5d4ae;
      font:700 14px Georgia;
      cursor:pointer;
      touch-action:manipulation;
    ">
      GERİ
    </button>
  `;


  katman.appendChild(
    panel
  );


  document.body.appendChild(
    katman
  );


  panel
    .querySelector(
      "#botV1IkiOyuncu"
    )
    .onclick =
      () => {

        BOT_V1.aktif =
          false;


        katman.remove();


        v37OyuncuIsimleriSorGercek();
      };


  panel
    .querySelector(
      "#botV1Bilgisayar"
    )
    .onclick =
      () => {

        BOT_V1.aktif =
          true;


        katman.remove();


        botV1OyuncuAdiSor();
      };


  panel
    .querySelector(
      "#onlineOyna"
    )
    .onclick =
      () => {

        katman.remove();


        onlineParolaEkraniAc();
      };


  panel
    .querySelector(
      "#botV1Geri"
    )
    .onclick =
      () => {

        katman.remove();
      };
}


/* =====================================================
   ONLINE OYUN — ORTAK PAROLA GİRİŞİ
   Sunucu eklendiğinde window.onlineOyunaKatil(parola)
   fonksiyonu gerçek eşleştirme akışına bağlanabilir.
===================================================== */

function onlineParolaEkraniAc() {

  document.getElementById("onlineParolaKatmani")?.remove();

  const katman = document.createElement("div");
  katman.id = "onlineParolaKatmani";

  Object.assign(katman.style, {
    position: "fixed",
    inset: "0",
    zIndex: "150002",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "rgba(0,0,0,0.72)",
    backdropFilter: "blur(3px)",
    WebkitBackdropFilter: "blur(3px)"
  });

  const panel = document.createElement("div");
  Object.assign(panel.style, {
    boxSizing: "border-box",
    width: "min(88vw, 560px)",
    padding: "28px",
    border: "3px solid #c7a15a",
    borderRadius: "20px",
    background: "linear-gradient(180deg, rgba(68,43,20,.98), rgba(31,20,11,.98))",
    boxShadow: "0 24px 70px rgba(0,0,0,.65)",
    fontFamily: 'Georgia, "Times New Roman", serif',
    color: "#f5e7c4",
    textAlign: "center"
  });

  panel.innerHTML = `
    <div style="font-size:clamp(22px,2vw,34px);font-weight:bold;margin-bottom:10px;">
      ONLINE OYUN
    </div>
    <div style="font-size:14px;line-height:1.4;opacity:.88;margin-bottom:18px;">
      Rakibinle belirlediğiniz ortak parolayı girin.
    </div>
    <input id="onlineOrtakParola" type="password" maxlength="32"
      autocomplete="off" placeholder="Ortak parola"
      style="box-sizing:border-box;width:100%;padding:14px;margin-bottom:12px;border:2px solid #c7a15a;border-radius:10px;background:#f4e3bb;color:#3b2812;font:700 18px Georgia;outline:none;text-align:center;">
    <div id="onlineDurum" style="min-height:20px;margin-bottom:12px;color:#f2cf7a;font-size:13px;"></div>
    <button id="onlineBaglan" style="width:100%;padding:14px;margin-bottom:10px;border:2px solid #d6b867;border-radius:11px;background:#3f6170;color:#fff1bd;font:700 17px Georgia;cursor:pointer;">
      EŞLEŞMEYE KATIL
    </button>
    <button id="onlineGeri" style="padding:10px 20px;border:1px solid #9f8048;border-radius:9px;background:#28190d;color:#e5d4ae;font:700 14px Georgia;cursor:pointer;">
      GERİ
    </button>`;

  katman.appendChild(panel);
  document.body.appendChild(katman);

  const input = panel.querySelector("#onlineOrtakParola");
  const durum = panel.querySelector("#onlineDurum");

  const baglan = async () => {
    const parola = input.value.trim();
    if (!parola) {
      durum.textContent = "Lütfen ortak parolayı girin.";
      input.focus();
      return;
    }

    if (typeof window.onlineOyunaKatil !== "function") {
      durum.textContent = "Online eşleştirme altyapısı henüz bağlanmadı.";
      return;
    }

    durum.textContent = "Rakip bekleniyor…";
    panel.querySelector("#onlineBaglan").disabled = true;

    try {
      await window.onlineOyunaKatil(parola);
    } catch (hata) {
      durum.textContent = hata?.message || "Bağlantı kurulamadı. Tekrar deneyin.";
      panel.querySelector("#onlineBaglan").disabled = false;
    }
  };

  panel.querySelector("#onlineBaglan").onclick = baglan;
  panel.querySelector("#onlineGeri").onclick = () => {
    katman.remove();
    botV1ModSecimEkraniAc();
  };
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") baglan();
  });
  setTimeout(() => input.focus(), 50);
}


/* =====================================================
   MEVCUT İSİM EKRANINI KORU
===================================================== */

const v37OyuncuIsimleriSorGercek =
  v37OyuncuIsimleriSor;


v37OyuncuIsimleriSor =
  function () {

    botV1ModSecimEkraniAc();
  };


/* =====================================================
   BİLGİSAYARA KARŞI — SADECE KULLANICI ADINI SOR
===================================================== */

function botV1OyuncuAdiSor() {

  document
    .getElementById(
      "botV1IsimKatmani"
    )
    ?.remove();


  const katman =
    document.createElement(
      "div"
    );


  katman.id =
    "botV1IsimKatmani";


  Object.assign(
    katman.style,
    {
      position:
        "fixed",

      inset:
        "0",

      zIndex:
        "150001",

      display:
        "flex",

      alignItems:
        "center",

      justifyContent:
        "center",

      background:
        "rgba(0,0,0,0.72)",

      backdropFilter:
        "blur(3px)",

      WebkitBackdropFilter:
        "blur(3px)"
    }
  );


  const panel =
    document.createElement(
      "div"
    );


  Object.assign(
    panel.style,
    {
      width:
        "min(86vw, 560px)",

      padding:
        "28px",

      border:
        "3px solid #c7a15a",

      borderRadius:
        "20px",

      background:
        "#3a2512",

      color:
        "#f5e7c4",

      fontFamily:
        'Georgia, "Times New Roman", serif',

      textAlign:
        "center",

      boxShadow:
        "0 24px 70px rgba(0,0,0,.65)"
    }
  );


  const mevcutAd =
    V37.oyuncuAdlari[1] ===
      "1. OYUNCU"

      ? ""

      : V37.oyuncuAdlari[1];


  panel.innerHTML = `
    <div style="
      font-size:clamp(20px,1.8vw,30px);
      font-weight:bold;
      margin-bottom:18px;
    ">
      BİLGİSAYARA KARŞI
    </div>

    <input
      id="botV1Ad"
      maxlength="18"
      placeholder="Adını yaz"
      value="${mevcutAd.replaceAll('"', '&quot;')}"
      style="
        width:100%;
        padding:14px;
        margin-bottom:14px;
        border:2px solid #c7a15a;
        border-radius:10px;
        background:#f4e3bb;
        color:#3b2812;
        font:700 18px Georgia;
        outline:none;
      "
    >

    <div style="
      margin-bottom:18px;
      opacity:.85;
      font-size:14px;
    ">
      Rakibin: BİLGİSAYAR
    </div>

    <button id="botV1Baslat" style="
      width:100%;
      padding:14px;
      margin-bottom:10px;
      border:2px solid #d6b867;
      border-radius:11px;
      background:#74501d;
      color:#fff1bd;
      font:700 17px Georgia;
      cursor:pointer;
    ">
      OYUNA BAŞLA
    </button>

    <button id="botV1IsimGeri" style="
      padding:10px 20px;
      border:1px solid #9f8048;
      border-radius:9px;
      background:#28190d;
      color:#e5d4ae;
      font:700 14px Georgia;
      cursor:pointer;
    ">
      GERİ
    </button>
  `;


  katman.appendChild(
    panel
  );


  document.body.appendChild(
    katman
  );


  const input =
    panel.querySelector(
      "#botV1Ad"
    );


  panel
    .querySelector(
      "#botV1Baslat"
    )
    .onclick =
      () => {

        V37.oyuncuAdlari[1] =
          input.value.trim() ||
          "OYUNCU";


        V37.oyuncuAdlari[2] =
          BOT_V1.isim;


        V37.isimlerAlindi =
          true;


        katman.remove();


        v37GercekOyunuBaslat();
      };


  panel
    .querySelector(
      "#botV1IsimGeri"
    )
    .onclick =
      () => {

        katman.remove();


        botV1ModSecimEkraniAc();
      };


  input.addEventListener(
    "keydown",
    (
      event
    ) => {

      if (
        event.key ===
        "Enter"
      ) {

        panel
          .querySelector(
            "#botV1Baslat"
          )
          .click();
      }
    }
  );


  setTimeout(
    () => {

      input.focus();

    },
    50
  );
}


/* =====================================================
   BOT — SANATÇI SEÇİMİ
===================================================== */

function botV1SanatciSec() {

  if (
    !BOT_V1.aktif ||
    aktifOyuncu !==
      BOT_V1.oyuncu ||
    oyunAsamasi !==
      "sanatci-secimi" ||
    secimKilidi
  ) {

    return false;
  }


  const kartlar =
    Array.from(
      document.querySelectorAll(
        ".kapaliSanatciKarti"
      )
    ).filter(
      (
        kart
      ) =>
        kart.dataset.secildi !==
          "evet" &&
        botV1GorunurMu(
          kart
        )
    );


  if (
    kartlar.length ===
    0
  ) {

    return false;
  }


  botV1Bekle(
    () => {

      const kart =
        kartlar[
          Math.floor(
            Math.random() *
            kartlar.length
          )
        ];


      const sanatci =
        sanatcilar.find(
          (
            s
          ) =>
            s.id ===
            kart.dataset.sanatci
        );


      if (
        kart &&
        sanatci &&
        aktifOyuncu ===
          BOT_V1.oyuncu
      ) {

        sanatciKartiSec(
          kart,
          sanatci
        );
      }
    },
    450,
    850
  );


  return true;
}


/* =====================================================
   BOT — BAŞLANGIÇ ZARI
===================================================== */

function botV1BaslangicZari() {

  if (
    !BOT_V1.aktif ||
    oyunAsamasi !==
      "baslangic-zari" ||
    zarSirasi !==
      BOT_V1.oyuncu ||
    zarAtisKilidi
  ) {

    return false;
  }


  const buton =
    document.getElementById(
      `zarAtButonu${BOT_V1.oyuncu}`
    );


  if (
    !buton ||
    buton.disabled
  ) {

    return false;
  }


  botV1Bekle(
    () => {

      if (
        zarSirasi ===
          BOT_V1.oyuncu &&
        !zarAtisKilidi
      ) {

        baslangicZariAt(
          BOT_V1.oyuncu
        );
      }
    },
    650,
    1050
  );


  return true;
}


/* =====================================================
   BOT — HEDEF SEÇİMİ
===================================================== */

function botV1HedefSec() {

  if (
    !BOT_V1.aktif ||
    aktifOyuncu !==
      BOT_V1.oyuncu ||
    !hedefSecimAktif
  ) {

    return false;
  }


  const hedefler =
    Array.from(
      document.querySelectorAll(
        '[data-hedef-secilebilir="evet"]'
      )
    ).filter(
      botV1GorunurMu
    );


  if (
    hedefler.length ===
    0
  ) {

    return false;
  }


  botV1Bekle(
    () => {

      const hedef =
        hedefler[
          Math.floor(
            Math.random() *
            hedefler.length
          )
        ];


      hedef?.click();

    },
    350,
    650
  );


  return true;
}


/* =====================================================
   BOT — ÖZEL KART KARAR EKRANI
===================================================== */

function botV1OzelKartKarari() {

  if (
    !BOT_V1.aktif ||
    aktifOyuncu !==
      BOT_V1.oyuncu
  ) {

    return false;
  }


  const kutu =
    document.getElementById(
      "ozelKartKararButonlari"
    );


  if (
    !botV1GorunurMu(
      kutu
    )
  ) {

    return false;
  }


  const kullan =
    botV1ButonBul(
      kutu,
      "KULLAN"
    );


  const sakla =
    botV1ButonBul(
      kutu,
      "YUVANA KOY"
    );


  const copeAt =
    botV1ButonBul(
      kutu,
      "ÇÖPE AT"
    );


  botV1Bekle(
    () => {

      /*
        Basit bot zekâsı:
        Kullanılabiliyorsa çoğunlukla kullan.
        Kullanamıyorsa sakla.
        Saklayamıyorsa çöpe at.
      */

      if (
        kullan &&
        Math.random() <
          0.78
      ) {

        kullan.click();


        return;
      }


      if (
        sakla
      ) {

        sakla.click();


        return;
      }


      if (
        kullan
      ) {

        kullan.click();


        return;
      }


      copeAt?.click();

    },
    500,
    950
  );


  return true;
}


/* =====================================================
   BOT — GENEL SEÇİM KATMANLARI
===================================================== */

function botV1GenelSecimKatmani() {

  if (
    !BOT_V1.aktif ||
    aktifOyuncu !==
      BOT_V1.oyuncu
  ) {

    return false;
  }


  /* Özel Kart Takası iki ayrı sütundan birer seçim ve son bir onay ister.
     Genel rastgele görsel seçimi yerine aşamaları kesin sırayla tamamla. */
  const takasKatmani = document.getElementById("ozelKartTakasiKatmani");
  if (botV1GorunurMu(takasKatmani)) {
    const kendiKartlar = Array.from(
      takasKatmani.querySelectorAll('img[data-takas-taraf="kendi"]')
    );
    const rakipKartlar = Array.from(
      takasKatmani.querySelectorAll('img[data-takas-taraf="rakip"]')
    );
    const onay = takasKatmani.querySelector('[data-bot-takas-onay="evet"]');
    const kendiSecili = kendiKartlar.some(
      kart => kart.style.borderColor && kart.style.borderColor !== "transparent"
    );
    const rakipSecili = rakipKartlar.some(
      kart => kart.style.borderColor && kart.style.borderColor !== "transparent"
    );

    botV1Bekle(() => {
      if (!takasKatmani.isConnected || aktifOyuncu !== BOT_V1.oyuncu) return;

      if (!kendiSecili && kendiKartlar.length) {
        kendiKartlar[Math.floor(Math.random() * kendiKartlar.length)].click();
        return;
      }

      if (!rakipSecili && rakipKartlar.length) {
        rakipKartlar[Math.floor(Math.random() * rakipKartlar.length)].click();
        return;
      }

      if (onay && !onay.disabled) onay.click();
    }, 550, 900);

    return true;
  }


  /*
    Depo Kilidi kendi hedef sistemini kullanıyor; bu yuvalar
    genel data-hedef-secilebilir listesine dahil değil. Bot,
    rakibin işaretlenmiş boş depolarından birini seçer.
  */
  const depoKilidiHedefleri =
    Array.from(
      document.querySelectorAll(
        ".depoKilidiHedefButonu"
      )
    ).filter(
      botV1GorunurMu
    );


  if (
    document.getElementById(
      "depoKilidiSecimKatmani"
    ) &&
    depoKilidiHedefleri.length
  ) {

    const hedef =
      depoKilidiHedefleri[
        Math.floor(
          Math.random() *
          depoKilidiHedefleri.length
        )
      ];


    botV1Bekle(
      () => {

        if (
          document.body.contains(
            hedef
          )
        ) {

          hedef.click();
        }
      },
      450,
      750
    );


    return true;
  }


  /* Gizli Sandık */
  const gizliKartlar =
    Array.from(
      document.querySelectorAll(
        ".v41GizliSandikKarti"
      )
    ).filter(
      botV1GorunurMu
    );


  if (
    gizliKartlar.length
  ) {

    botV1Bekle(
      () => {

        gizliKartlar[
          Math.floor(
            Math.random() *
            gizliKartlar.length
          )
        ].click();

      },
      400,
      750
    );


    return true;
  }


  /*
    Dünya Takımı, Hollanda, Restorasyon,
    Müze Müdürü vb. seçim ekranlarında
    görünen kartlardan rastgele seçim yap.
  */

  const katmanIdleri = [
    "dunyaTakimiSecimKatmani",
    "hollandaCopSecimKatmani",
    "restorasyonSecimKatmani",
    "muzeMuduruSecimKatmani",
    "yeniSergiSecimKatmani",
    "ozelKartTakasiKatmani",
    "ozelKartDegistirmeKatmani"
  ];


  for (
    const id of
    katmanIdleri
  ) {

    const katman =
      document.getElementById(
        id
      );


    if (
      !botV1GorunurMu(
        katman
      )
    ) {

      continue;
    }


    const secilebilirResimler =
      Array.from(
        katman.querySelectorAll(
          "img"
        )
      ).filter(
        (
          img
        ) =>
          botV1GorunurMu(
            img
          ) &&
          getComputedStyle(
            img
          ).pointerEvents !==
            "none"
      );


    const onay =
      Array.from(
        katman.querySelectorAll(
          "button"
        )
      ).find(
        (
          b
        ) =>
          !b.disabled &&
          (
            butonV1MetinEslesir(
              b,
              "ONAY"
            ) ||
            butonV1MetinEslesir(
              b,
              "TAMAM"
            ) ||
            butonV1MetinEslesir(
              b,
              "SEÇ"
            ) ||
            butonV1MetinEslesir(
              b,
              "TAKAS ET"
            )
          )
      );


    botV1Bekle(
      () => {

        if (
          onay
        ) {

          onay.click();


          return;
        }


        if (
          secilebilirResimler.length
        ) {

          secilebilirResimler[
            Math.floor(
              Math.random() *
              secilebilirResimler.length
            )
          ].click();
        }

      },
      350,
      700
    );


    return true;
  }


  return false;
}


/* =====================================================
   BOT — ZAR EKRANLARI
===================================================== */

function botV1OzelZarAt() {

  if (
    !BOT_V1.aktif ||
    aktifOyuncu !==
      BOT_V1.oyuncu
  ) {

    return false;
  }


  const katman =
    document.getElementById(
      "ozelKartZarKatmani"
    );


  if (
    !botV1GorunurMu(
      katman
    )
  ) {

    return false;
  }


  const zarButonu =
    botV1ButonBul(
      katman,
      "ZAR AT"
    );


  if (
    !zarButonu
  ) {

    return false;
  }


  botV1Bekle(
    () => {

      zarButonu.click();

    },
    500,
    850
  );


  return true;
}


/* =====================================================
   BOT — AÇIK ARTIRMA
===================================================== */

function botV1AcikArtirma() {

  if (
    !BOT_V1.aktif
  ) {

    return false;
  }


  const olasiKatmanlar =
    Array.from(
      document.querySelectorAll(
        '[id*="acikArtirma"], [id*="AcikArtirma"]'
      )
    ).filter(
      botV1GorunurMu
    );


  if (
    olasiKatmanlar.length ===
    0
  ) {

    return false;
  }


  const katman =
    olasiKatmanlar[
      olasiKatmanlar.length - 1
    ];


  const butonlar =
    Array.from(
      katman.querySelectorAll(
        "button"
      )
    ).filter(
      (
        b
      ) =>
        !b.disabled &&
        botV1GorunurMu(
          b
        )
    );


  const botButonu =
    butonlar.find(
      (
        b
      ) => {

        const txt =
          String(
            b.textContent ||
            ""
          )
            .toLocaleUpperCase(
              "tr-TR"
            );


        return (
          txt.includes(
            "2."
          ) ||
          txt.includes(
            "BİLGİSAYAR"
          ) ||
          txt.includes(
            "ZAR AT"
          )
        );
      }
    );


  if (
    !botButonu
  ) {

    return false;
  }


  botV1Bekle(
    () => {

      botButonu.click();

    },
    500,
    900
  );


  return true;
}


/* =====================================================
   BOT — NORMAL TUR
===================================================== */

function botV1ElIleOrtakDestedenCek() {

  /* Kazanan açıklanır açıklanmaz oyunAsamasi kart-cekme oluyor; fakat zar
     katmanı 1,5 saniye daha ekranda kalıyor. Bu aralıkta hiçbir eski veya
     kuyruğa alınmış bot çağrısı kolu gösteremez. */
  if (
    document.getElementById(
      "baslangicZarKatmani"
    )
  ) {

    return;
  }

  if (
    v47BaslangicBotTuru &&
    Date.now() < v54BotIlkCekisHazirZamani
  ) {

    return;
  }

  if (
    document.getElementById(
      "botKartCekenEl"
    )
  ) {

    return;
  }


  if (
    v47BaslangicBotTuru &&
    v47BaslangicBotCekisiniYapti
  ) {

    return;
  }


  const desteRect =
    ortakDesteYuvasi.getBoundingClientRect();


  const el =
    document.createElement(
      "img"
    );


  el.id =
    "botKartCekenEl";


  el.src =
    "images/bilgisayar-kart-ceken-el.png";


  const elGenisligi =
    Math.max(
      desteRect.width * 3.35,
      230
    );


  const elYuksekligi =
    elGenisligi * 1.5;


  const hedefLeft =
    desteRect.left +
    desteRect.width / 2 -
    elGenisligi / 2 +
    desteRect.width * .42;


  const hedefTop =
    desteRect.top +
    desteRect.height * .48 -
    elYuksekligi * .83 -
    desteRect.height * .28;


  Object.assign(
    el.style,
    {
      position: "fixed",
      left: `${hedefLeft}px`,
      top: `${-elYuksekligi - 20}px`,
      width: `${elGenisligi}px`,
      height: `${elYuksekligi}px`,
      objectFit: "contain",
      zIndex: "59000",
      pointerEvents: "none",
      userSelect: "none",
      filter: "drop-shadow(0 18px 18px rgba(0,0,0,.48))"
    }
  );


  document.body.appendChild(
    el
  );


  kartCekmeKilidi =
    true;


  gsap.timeline({
    onComplete: () => {
      el.remove();
    }
  })
    .to(el, {
      top: hedefTop,
      duration: .52,
      ease: "power2.out"
    })
    .to(el, {
      scale: .97,
      duration: .12,
      yoyo: true,
      repeat: 1,
      ease: "power1.inOut",
      onComplete: () => {
        if (
          aktifOyuncu === BOT_V1.oyuncu &&
          oyunAsamasi === "kart-cekme" &&
          ortakDeste.length > 0
        ) {
          kartCekmeKilidi = false;
          ortakDestedenKartCek();
        }
      }
    })
    .to(el, {
      top: -elYuksekligi - 20,
      opacity: .96,
      duration: .42,
      ease: "power2.in"
    }, "+=.08");
}

function botV1NormalTur() {

  if (
    !BOT_V1.aktif ||
    aktifOyuncu !==
      BOT_V1.oyuncu ||
    oyunAsamasi !==
      "kart-cekme" ||
    kartCekmeKilidi ||
    ozelKartEfektiAktif ||
    hedefSecimAktif ||
    onizlemeAcik
  ) {

    return false;
  }


  if (
    document.getElementById(
      "ozelKartKararButonlari"
    ) ||
    document.getElementById(
      "ozelKartZarKatmani"
    )
  ) {

    return false;
  }


  /*
    V1 botunda saklanan özel kartları
    ara sıra kullanmayı dene.
  */

  const eldekiOzelKartElementleri =
    Array.from(
      document.querySelectorAll(
        `.oyuncuOzelKartKarti[data-oyuncu="${BOT_V1.oyuncu}"]`
      )
    ).filter(
      botV1GorunurMu
    );


  const kullanilabilirEldeki =
    eldekiOzelKartElementleri.filter(
      (
        element
      ) => {

        const kayit =
          oyuncununOzelKartlari(
            BOT_V1.oyuncu
          ).find(
            (
              kart
            ) =>
              kart.id ===
                element.dataset.id &&
              (
                !element.dataset.yuvaId ||
                kart.yuvaId ===
                  element.dataset.yuvaId
              )
          );


        return (
          kayit &&
          eldekiOzelKartKullanilabilirMi(
            kayit
          )
        );
      }
    );


  if (
    kullanilabilirEldeki.length &&
    Math.random() <
      0.30
  ) {

    botV1Bekle(
      () => {
        const secilen =
          kullanilabilirEldeki[
            Math.floor(
              Math.random() *
              kullanilabilirEldeki.length
            )
          ];

        const secilenKayit = secilen &&
          oyuncununOzelKartlari(BOT_V1.oyuncu).find(
            kart =>
              kart.id === secilen.dataset.id &&
              kart.yuvaId === secilen.dataset.yuvaId
          );

        if (
          aktifOyuncu !== BOT_V1.oyuncu ||
          oyunAsamasi !== "kart-cekme" ||
          !secilen?.isConnected ||
          !eldekiOzelKartKullanilabilirMi(secilenKayit)
        ) {

          return;
        }


        secilen.click();


        setTimeout(
          () => {

            if (
              aktifOyuncu !== BOT_V1.oyuncu ||
              oyunAsamasi !== "kart-cekme"
            ) {

              document.getElementById("eldekiOzelKartKatmani")?.remove();
              return;
            }

            const kullan =
              Array.from(
                document.querySelectorAll(
                  "#eldekiOzelKartKatmani button"
                )
              ).find(
                (
                  b
                ) =>
                  !b.disabled &&
                  botV1GorunurMu(
                    b
                  ) &&
                  butonV1MetinEslesir(
                    b,
                    "KULLAN"
                  )
              );


            kullan?.click();

          },
          650
        );

      },
      450,
      800
    );


    return true;
  }


  /*
    Aksi halde ortak desteden çek.
  */

  const desteKartlari =
    Array.from(
      document.querySelectorAll(
        ".ortakDesteGorselKarti"
      )
    );


  const ustKart =
    desteKartlari[
      desteKartlari.length - 1
    ];


  if (
    ortakDeste.length >
      0 &&
    ustKart
  ) {

    botV1Bekle(
      () => {

        if (
          aktifOyuncu ===
            BOT_V1.oyuncu &&
          oyunAsamasi ===
            "kart-cekme" &&
          !kartCekmeKilidi
        ) {

          /*
            Otomatik izleme iki tarafı da yönetir; fakat bilgisayarın kolu
            yalnız gerçek bilgisayar koltuğunda görünmelidir. İnsan tarafı
            otomatik oynuyorsa aynı çekiş doğrudan yapılır.
          */
          if (
            window.v78OtomatikOyun &&
            aktifOyuncu !== v60OtomatikOncesiBotOyuncu
          ) {

            if (
              document.getElementById("baslangicZarKatmani") ||
              (
                v47BaslangicBotTuru &&
                Date.now() < v54BotIlkCekisHazirZamani
              )
            ) {
              return;
            }

            ortakDestedenKartCek();
          } else {
            botV1ElIleOrtakDestedenCek();
          }
        }

      },
      500,
      900
    );


    return true;
  }


  return false;
}


/* =====================================================
   BOT — ORTAK DESTE BİTTİKTEN SONRA
===================================================== */

function botV1DesteSonu() {

  if (
    !BOT_V1.aktif ||
    aktifOyuncu !==
      BOT_V1.oyuncu ||
    oyunAsamasi !==
      "ortak-deste-bitti"
  ) {

    return false;
  }


  const kutu =
    document.getElementById(
      "ortakDesteSonuKontrolleri"
    );


  if (
    !botV1GorunurMu(
      kutu
    )
  ) {

    return false;
  }


    const kullanilabilir =
      oyuncununOzelKartlari(
        BOT_V1.oyuncu
      ).filter(
      eldekiOzelKartKullanilabilirMi
    );


  if (
    kullanilabilir.length
  ) {

    const elementler =
      Array.from(
        document.querySelectorAll(
          `.oyuncuOzelKartKarti[data-oyuncu="${BOT_V1.oyuncu}"]`
        )
      );


    const secilenKayit =
      kullanilabilir[
        Math.floor(
          Math.random() *
          kullanilabilir.length
        )
      ];


    const element =
      elementler.find(
        (
          el
        ) =>
          el.dataset.id ===
            secilenKayit.id
      );


    if (
      element
    ) {

      botV1Bekle(
        () => {

          element.click();

        },
        400,
        750
      );


      return true;
    }
  }


  const pas =
    botV1ButonBul(
      kutu,
      "PAS"
    );


  if (
    pas
  ) {

    botV1Bekle(
      () => {

        pas.click();

      },
      450,
      800
    );


    return true;
  }


  return false;
}


/* =====================================================
   BOT ANA DÖNGÜSÜ
===================================================== */

function botV1Tik() {

  /* Otomatik izleme modunda bot motoru her tur o anki aktif oyuncuyu,
     başlangıç zarında ise sıradaki zar sahibini yönetir. */
  if (window.v78OtomatikOyun) {
    BOT_V1.aktif = true;
    BOT_V1.oyuncu = oyunAsamasi === "baslangic-zari"
      ? zarSirasi
      : aktifOyuncu;
  }

  /* Oyunlar arasındaki sonuç paneli normal kart/karar katmanlarından
     bağımsızdır; otomatik modda kendi denetleyicisi tarafından ilerletilir. */
  if (v92OtomatikOyunSonuPaneliniYonet()) {
    return;
  }

  if (
    !BOT_V1.aktif ||
    !v37OyunAktif
  ) {

    return;
  }


  if (
    BOT_V1.kilit
  ) {

    return;
  }


  /*
    Öncelik sırası önemli:
    açık modal/karar > hedef > zar > normal tur
  */

  if (
    botV1AcikArtirma()
  ) {

    return;
  }


  if (
    botV1OzelZarAt()
  ) {

    return;
  }


  if (
    botV1HedefSec()
  ) {

    return;
  }


  if (
    botV1GenelSecimKatmani()
  ) {

    return;
  }


  if (
    botV1OzelKartKarari()
  ) {

    return;
  }


  if (
    window.v78OtomatikOyun &&
    v60OtomatikOzelKartHavuzunuSec()
  ) {

    return;
  }


  if (
    botV1BaslangicZari()
  ) {

    return;
  }


  if (
    botV1SanatciSec()
  ) {

    return;
  }


  if (
    botV1DesteSonu()
  ) {

    return;
  }


  botV1NormalTur();
}


setInterval(
  botV1Tik,
  260
);


/* =====================================================
   BOT MODU GÖRSEL ETİKETİ
===================================================== */

function botV1EtiketGuncelle() {

  let etiket =
    document.getElementById(
      "botV1Etiket"
    );


  if (
    !BOT_V1.aktif ||
    !v37OyunAktif
  ) {

    etiket?.remove();


    return;
  }


  if (
    !etiket
  ) {

    etiket =
      document.createElement(
        "div"
      );


    etiket.id =
      "botV1Etiket";


    Object.assign(
      etiket.style,
      {
        position:
          "fixed",

        right:
          "12px",

        bottom:
          "12px",

        zIndex:
          "120000",

        padding:
          "7px 11px",

        border:
          "1px solid rgba(218,184,103,.75)",

        borderRadius:
          "9px",

        background:
          "rgba(30,18,10,.78)",

        color:
          "#f1ddb0",

        fontFamily:
          'Georgia, "Times New Roman", serif',

        fontSize:
          "12px",

        fontWeight:
          "bold",

        pointerEvents:
          "none"
      }
    );


    document.body.appendChild(
      etiket
    );
  }


  etiket.textContent =
    "🤖 BİLGİSAYARA KARŞI";
}


setInterval(
  botV1EtiketGuncelle,
  500
);


console.log(
  "BOT TEST MODU V1 hazır."
);


/* =====================================================
   V42 — 11 GÜNCEL SORUN İÇİN TOPLU DÜZELTME
   24.08.2026
===================================================== */

/* =====================================================
   1-2) SANATÇI SEÇİM YAZISI:
   - gerçek oyuncu adı
   - 3-sanatci-sec.png varsa görsel kutu
   - yoksa gerçek isimli metin fallback
===================================================== */

function v42OyuncuAdi(oyuncu) {
  if (
    typeof V37 !== "undefined" &&
    V37.oyuncuAdlari &&
    V37.oyuncuAdlari[oyuncu]
  ) {
    return V37.oyuncuAdlari[oyuncu];
  }

  return `${oyuncu}. OYUNCU`;
}


function v42SanatciSecimBanneriniKaldir() {
  document.getElementById("v42SanatciSecimBanner")?.remove();
  document.getElementById("v41SanatciSecimBanner")?.remove();
}


function v42SanatciSecimBanneriniGoster(oyuncu) {
  v42SanatciSecimBanneriniKaldir();

  const oyuncuAdi = v42OyuncuAdi(oyuncu);

  const banner = document.createElement("div");
  banner.id = "v42SanatciSecimBanner";

  const gorsel = document.createElement("img");
  gorsel.src = "images/3-sanatci-sec.png";
  gorsel.alt = "3 Sanatçı Seç";

  const ad = document.createElement("div");
  ad.className = "v42SanatciSecimOyuncuAdi";
  ad.textContent = oyuncuAdi;

  banner.append(gorsel, ad);
  oynanisEkrani.appendChild(banner);

  gorsel.addEventListener(
    "error",
    () => {
      banner.remove();

      const yazi = secimYazisiniOlustur();

      if (yazi.parentElement !== oynanisEkrani) {
        oynanisEkrani.appendChild(yazi);
      }

      yazi.classList.remove("v42OrtaTurUyarisi");
      yazi.style.display = "block";
      yazi.textContent = `${oyuncuAdi} — 3 SANATÇI SEÇ`;
    },
    { once: true }
  );
}


/* =====================================================
   4-5) ORTA TUR UYARISI:
   OYUNCU ADI
   ORTAK DESTEDEN KART ÇEK
   VEYA
   ÖZEL KART KULLAN

   BODY'YE TAŞINIR; BÖYLECE ORTAK DESTE KARTLARININ
   STACKING CONTEXT'İNİN DE ÜSTÜNE ÇIKAR.
===================================================== */

const v42EskiSecimYazisiGoster = secimYazisiGoster;

secimYazisiGoster = function(metin) {
  const ham = String(metin ?? "");

  const sanatci1 =
    ham.includes("1. OYUNCU") &&
    ham.includes("3 SANATÇI SEÇ");

  const sanatci2 =
    ham.includes("2. OYUNCU") &&
    ham.includes("3 SANATÇI SEÇ");

  if (sanatci1 || sanatci2) {
    const oyuncu = sanatci1 ? 1 : 2;

    const yazi = secimYazisiniOlustur();
    yazi.style.display = "none";

    v42SanatciSecimBanneriniGoster(oyuncu);
    return;
  }

  v42SanatciSecimBanneriniKaldir();

  const yazi = secimYazisiniOlustur();

  if (yazi.parentElement !== oynanisEkrani) {
    oynanisEkrani.appendChild(yazi);
  }

  yazi.classList.remove("v42OrtaTurUyarisi");
  yazi.style.display = "block";

  v42EskiSecimYazisiGoster(ham);

  const normalTurMesaji =
    ham.includes("ORTAK DESTEDEN KART ÇEK") &&
    !ham.includes("EKSTRA") &&
    !ham.includes("AÇIK ARTIRMA") &&
    !ham.includes("DÜNYA TAKIMI") &&
    !ham.includes("ARKEOLOJİK");

  if (!normalTurMesaji) {
    return;
  }

  const ad = v42OyuncuAdi(aktifOyuncu);

  yazi.innerHTML = `
    <span class="v42TurSatir v42TurOyuncu">${ad}</span>
    <span class="v42TurSatir">ORTAK DESTEDEN KART ÇEK</span>
    <span class="v42TurSatir v42TurVeya">VEYA</span>
    <span class="v42TurSatir">ÖZEL KART KULLAN</span>
  `;

  yazi.classList.add("v42OrtaTurUyarisi");

  /*
    Ortak deste kartları document.body altında fixed ve z-index ~9300.
    Bu yüzden mesajı da body'ye alıp daha yüksek z-index veriyoruz.
  */
  document.body.appendChild(yazi);

  Object.assign(yazi.style, {
    position: "fixed",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: "95000",
    maxWidth: "none"
  });
};


const v42EskiSecimYazisiniGizle = secimYazisiniGizle;

secimYazisiniGizle = function() {
  v42SanatciSecimBanneriniKaldir();
  v42EskiSecimYazisiniGizle();
};


/* =====================================================
   3) 12 SANATÇI KARTININ TOPLU OYNAMASI:
   KART SIRASININ KENDİSİ HİÇ ANİMASYON ALMAYACAK.
   ASIL RE-FLOW CSS'TE SABİT ASPECT-RATIO İLE KESİLİYOR.
===================================================== */

const v42EskiSanatciKartiSec = sanatciKartiSec;

sanatciKartiSec = function(kart, sanatci) {
  if (kapaliKartSirasi) {
    gsap.killTweensOf(kapaliKartSirasi);

    Object.assign(kapaliKartSirasi.style, {
      transform: "translateY(0px)",
      transitionProperty: "opacity"
    });
  }

  const slotlar =
    Array.from(document.querySelectorAll(".kapaliKartSlotu"));

  slotlar.forEach((slot) => {
    gsap.killTweensOf(slot);
    slot.style.transform = "none";
  });

  v42EskiSanatciKartiSec(kart, sanatci);
};


/* =====================================================
   6) DEDEKTİF ZAR GÖRSELİ:
   V41 sistemi korunuyor. Görsel yoksa eski zar paneli,
   images/dedektif-zar-kutusu.png gelince görsel panel.
===================================================== */


/* =====================================================
   7) GİZLİ SANDIK:
   V41'deki kapalı kartları yayarak oyuncuya seçtiren
   davranış korunuyor. Burada yanlışlıkla eski otomatik
   fonksiyonun sonradan devreye girmesini önlemek için
   mevcut son tanımı sabit referansa alıyoruz.
===================================================== */

const v42GizliSandikSecimliSistem = gizliSandikKullan;

gizliSandikKullan = function(kartBilgisi, kartElementi, katman) {
  return v42GizliSandikSecimliSistem(
    kartBilgisi,
    kartElementi,
    katman
  );
};


/* =====================================================
   8) ÇÖP DESTESİ:
   EN SON GİREN HER ZAMAN GÖRSEL OLARAK EN ÜSTTE.
===================================================== */

function v42CopDesteSirasiZorla() {
  const kartlar =
    Array.from(document.querySelectorAll(".coptekiKart"));

  kartlar.forEach((element) => {
    /*
      Aynı id teorik olarak bir kez bulunur.
      Sondan arayarak veri dizisindeki gerçek son konumu al.
    */
    let index = -1;

    for (let i = copDeste.length - 1; i >= 0; i--) {
      if (copDeste[i]?.id === element.dataset.id) {
        index = i;
        break;
      }
    }

    if (index === -1) {
      return;
    }

    element.style.zIndex = String(12000 + index);
  });

  /* Kartları appendChild ile tekrar tekrar taşımıyoruz. Bu fonksiyon bir
     MutationObserver tarafından çağrıldığı için DOM taşıması gözlemciyi
     yeniden tetikleyip sonsuz çizim döngüsü oluşturuyordu. Görsel sıra için
     yukarıdaki kesin z-index değeri tek başına yeterlidir. */
}


const v42EskiCopDesteGorseliniYenile = copDesteGorseliniYenile;

copDesteGorseliniYenile = function() {
  v42EskiCopDesteGorseliniYenile();

  requestAnimationFrame(() => {
    v42CopDesteSirasiZorla();
  });
};


/*
  Yeni çöp kartı DOM'a geldiği anda sırayı tekrar kur.
*/
new MutationObserver((mutations) => {
  let copKartiGeldi = false;

  for (const mutation of mutations) {
    for (const node of mutation.addedNodes) {
      if (
        node instanceof HTMLElement &&
        node.classList?.contains("coptekiKart")
      ) {
        copKartiGeldi = true;
      }
    }
  }

  if (copKartiGeldi) {
    requestAnimationFrame(v42CopDesteSirasiZorla);
  }
}).observe(oynanisEkrani, {
  childList: true,
  subtree: false
});


/* =====================================================
   9) AÇIK ARTIRMA:
   1. OYUNCU / 2. OYUNCU YERİNE GERÇEK İSİMLER.
   Sonuç yazısı da otomatik dönüştürülür.
===================================================== */

const v42EskiAcikArtirmaZarEkraniAc = acikArtirmaZarEkraniAc;

acikArtirmaZarEkraniAc = function() {
  v42EskiAcikArtirmaZarEkraniAc();

  const katman =
    document.getElementById("acikArtirmaZarKatmani");

  if (!katman) {
    return;
  }

  function isimleriDuzelt(kok = katman) {
    const walker =
      document.createTreeWalker(
        kok,
        NodeFilter.SHOW_TEXT
      );

    const dugumler = [];
    let node;

    while ((node = walker.nextNode())) {
      dugumler.push(node);
    }

    dugumler.forEach((textNode) => {
      let metin = textNode.nodeValue || "";

      metin = metin
        .replaceAll("1. OYUNCU", v42OyuncuAdi(1))
        .replaceAll("2. OYUNCU", v42OyuncuAdi(2));

      if (textNode.nodeValue !== metin) {
        textNode.nodeValue = metin;
      }
    });
  }

  isimleriDuzelt();

  const observer =
    new MutationObserver(() => {
      isimleriDuzelt();
    });

  observer.observe(katman, {
    childList: true,
    subtree: true,
    characterData: true
  });
};


/* =====================================================
   10) +2 KART ÇEK:
   KARTIN KENDİSİ OYNANDIKTAN SONRA TAM 2 EKSTRA ÇEKİŞ.
   Eski sistem ilk çekişi başlatıp kuyruğa 2 daha bıraktığı
   için toplam 3 oluyordu. Artık ilk çekiş + kuyrukta 1.
===================================================== */

artiIkiKartKullan = function(
  kartBilgisi,
  kartElementi,
  katman
) {
  const toplamEkstra =
    Math.min(2, ortakDeste.length);

  if (toplamEkstra <= 0) {
    ozelKartKararlariniGoster(
      kartBilgisi,
      kartElementi,
      katman
    );
    return;
  }

  kullanilanOzelKartiCopeAt(
    kartBilgisi,
    kartElementi,
    katman,
    () => {
      /*
        İlk ekstra çekiş şimdi başlıyor.
        Sonraki çekiş sayısını kuyruğa bırak.
      */
      ekstraKartCekmeSayisi =
        Math.max(0, toplamEkstra - 1);

      kartCekmeKilidi = false;

      secimYazisiGoster(
        `${v42OyuncuAdi(aktifOyuncu)} — ${toplamEkstra} EKSTRA KART ÇEK`
      );

      kartCekmeAsamasiniBaslat();
    }
  );
};


/* =====================================================
   11) ÖZEL KART TAKASI:
   KULLAN / YUVAYA KOY / ÇÖPE AT KARARI AÇIKKEN
   AKTİF OYUNCU KENDİ ÖZEL KARTLARINI İNCELEYEBİLİR.
===================================================== */

const v42EskiKartIncelemeIzniVarMi = kartIncelemeIzniVarMi;

kartIncelemeIzniVarMi = function(kaynakKart) {
  const sahip =
    Number(kaynakKart?.dataset?.oyuncu);

  const takasKarariAcik =
    Boolean(
      document.getElementById("ozelKartKararButonlari")
    ) &&
    bekleyenOzelKart?.id === "ozel-kart-takasi";

  const kendiOzelKarti =
    kaynakKart?.classList?.contains("oyuncuOzelKartKarti") &&
    sahip === aktifOyuncu;

  if (takasKarariAcik && kendiOzelKarti) {
    return true;
  }

  return v42EskiKartIncelemeIzniVarMi(kaynakKart);
};


/* =====================================================
   BOT UYUMLULUĞU:
   Genel mekanik düzeltmeler BOT modunda da otomatik geçerli.
   Botun isim gösterimleri de aynı oyuncu adı kaynağını kullanır.
===================================================== */

console.log(
  "V42 hazır: 11 güncel sorun için toplu düzeltme yüklendi."
);


/* =====================================================
   V43 — SADECE SON 5 SORUNA HEDEFLİ DÜZELTME
   24.08.2026

   NOT:
   Eski çalışan sistemler korunur.
   Bu bölüm yalnızca:
   1) Sanatçı seçim yazısı
   2) Çöp tarayıcı erişimi
   3) Açılan kartın tur uyarısının üstüne çıkması
   4) Eser kartının 5 saniye okunabilmesi
   5) Botun Müze Müdürü kullanımı
   konularına dokunur.
===================================================== */


/* =====================================================
   1) SANATÇI SEÇİMİ — 2 SATIR
   OYUNCU ADI
   3 SANATÇI KARTI SEÇ
===================================================== */

const v43EskiSecimYazisiGoster =
  secimYazisiGoster;

secimYazisiGoster =
  function(metin) {

    const ham =
      String(metin ?? "");

    const sanatciSecimMesaji =
      ham.includes("3 SANATÇI SEÇ") ||
      ham.includes("3 SANATÇI KARTI SEÇ");

    if (
      sanatciSecimMesaji &&
      oyunAsamasi === "sanatci-secimi"
    ) {

      /*
        V42 görsel banner oluşturmuşsa kaldır.
        Mevcut klasik yazı kutusunu kullanıyoruz.
      */
      document
        .getElementById("v42SanatciSecimBanner")
        ?.remove();

      document
        .getElementById("v41SanatciSecimBanner")
        ?.remove();

      const yazi =
        secimYazisiniOlustur();

      if (
        yazi.parentElement !==
        oynanisEkrani
      ) {

        oynanisEkrani
          .appendChild(yazi);
      }

      yazi.classList.remove(
        "v42OrtaTurUyarisi"
      );

      yazi.classList.add(
        "v43SanatciSecimYazisi"
      );

      const oyuncuAdi =
        typeof v42OyuncuAdi === "function"
          ? v42OyuncuAdi(aktifOyuncu)
          : (
              typeof V37 !== "undefined" &&
              V37.oyuncuAdlari?.[aktifOyuncu]
                ? V37.oyuncuAdlari[aktifOyuncu]
                : `${aktifOyuncu}. OYUNCU`
            );

      yazi.innerHTML =
        `<span class="v43SanatciOyuncu">${oyuncuAdi}</span>` +
        `<span class="v43SanatciTalimat">3 SANATÇI KARTI SEÇ</span>`;

      yazi.style.display =
        "block";

      gsap.killTweensOf(
        yazi
      );

      gsap.fromTo(
        yazi,
        {
          opacity: 0,
          scale: 0.88,
          y: -8
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.35,
          ease: "back.out(1.5)"
        }
      );

      return;
    }

    const yazi =
      document.getElementById(
        "secimYazisi"
      );

    if (
      yazi
    ) {

      yazi.classList.remove(
        "v43SanatciSecimYazisi"
      );
    }

    v43EskiSecimYazisiGoster(
      ham
    );
  };


/* =====================================================
   2) ÇÖP TARAYICI — ESKİ SİSTEMİ GERİ ERİŞİLEBİLİR YAP
   v37CopTarayiciAc() AYNEN KULLANILIYOR.
===================================================== */

document.addEventListener(
  "pointerup",
  (event) => {

    if (
      hedefSecimAktif ||
      onizlemeAcik
    ) {

      return;
    }

    const hedef =
      event.target.closest?.(
        ".coptekiKart, #copYuvasi"
      );

    if (
      !hedef
    ) {

      return;
    }

    /*
      Oynanış ekranı açık değilse çöp tarayıcı açılmaz.
      v37OyunAktif değişkenine bağımlılığı kaldırıyoruz;
      eski tarayıcı fonksiyonunun kendisine dokunmuyoruz.
    */
    if (
      !oynanisEkrani.classList.contains(
        "aktif"
      )
    ) {

      return;
    }

    if (
      typeof v37CopTarayiciAc !==
      "function"
    ) {

      return;
    }

    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();

    v37CopTarayiciAc();

  },
  true
);


/* =====================================================
   3) AÇILAN KART VARKEN ORTA TUR UYARISI ARKAYA GİTSİN
   DOM class gözlemcisi CSS'e sinyal verir.
===================================================== */

function v43AcikKartDurumunuGuncelle() {

  const acikKartVar =
    Boolean(
      document.querySelector(
        ".cekilenBuyukKart"
      )
    );

  document.body.classList.toggle(
    "v43KartAcik",
    acikKartVar
  );
}


new MutationObserver(
  () => {

    requestAnimationFrame(
      v43AcikKartDurumunuGuncelle
    );
  }
).observe(
  document.body,
  {
    childList: true,
    subtree: false
  }
);


/* =====================================================
   4) ESER KARTI EKRANDA TOPLAM 2,5 SANİYE OKUNSUN
   ÖZEL KARTLARA DOKUNULMAZ.

   Mevcut sistem büyük karta geldikten 850 ms sonra
   cekilenEseriYonet() çağırıyordu.
   Burada sadece kalan 1650 ms eklenir:
   850 + 1650 = 2500 ms.
===================================================== */

const v43EskiCekilenEseriYonet =
  cekilenEseriYonet;

cekilenEseriYonet =
  function(
    kartBilgisi,
    kartElementi,
    katman
  ) {

    /*
      Bu wrapper yalnız eser kartlarında çalışır.
      Özel kart karar sistemlerine hiç dokunmaz.
    */
    setTimeout(
      () => {
        if (!kartElementi?.isConnected) return;

        try {
          v43EskiCekilenEseriYonet(
            kartBilgisi,
            kartElementi,
            katman
          );

          /* Bazı büyük PNG'lerde/tarayıcı kare atlamalarında GSAP hedefe
             ulaşsa bile onComplete vermeyebiliyor. Eser ekranda asılı
             kalırsa mevcut yerleştirme tween'ini sona taşı ve onun gerçek
             yuva/çöp tamamlama kodunu çalıştır. */
          setTimeout(() => {
            if (!kartElementi?.isConnected) return;

            const hareketler = gsap.getTweensOf(kartElementi);
            hareketler.forEach(hareket => hareket.progress(1));

            /* Tween bulunamadıysa yönlendirme başlamamış demektir; kartı
               güvenli biçimde yeniden sınıflandır. */
            if (kartElementi.isConnected && hareketler.length === 0) {
              v43EskiCekilenEseriYonet(kartBilgisi, kartElementi, katman);
            }
          }, 1400);
        } catch (hata) {
          console.error("Eser yerleştirme hatası:", kartBilgisi?.id, hata);
          if (kartElementi?.isConnected) {
            eseriCopeGonder(kartBilgisi, kartElementi, katman);
          } else {
            katman?.remove();
            kartCekmeKilidi = false;
          }
        }

      },
      1650
    );
  };


/* =====================================================
   5) BOT — MÜZE MÜDÜRÜNÜ KENDİSİ OYNASIN
   İnsan oyuncunun karta müdahalesi kapatılır.
   Diğer bot seçim sistemlerine dokunulmaz.
===================================================== */

function v43BotMuzeMuduruKatmaniVarMi() {

  if (
    typeof BOT_V1 === "undefined" ||
    !BOT_V1.aktif ||
    aktifOyuncu !== BOT_V1.oyuncu
  ) {

    return false;
  }

  return Boolean(
    document.getElementById(
      "muzeMuduruKatmani"
    ) ||
    document.getElementById(
      "muzeMuduruSiralaKatmani"
    )
  );
}


function v43BotMuzeMuduruOyna() {

  if (
    typeof BOT_V1 === "undefined" ||
    !BOT_V1.aktif ||
    aktifOyuncu !== BOT_V1.oyuncu
  ) {

    return false;
  }

  const ilkKatman =
    document.getElementById(
      "muzeMuduruKatmani"
    );

  if (
    ilkKatman &&
    botV1GorunurMu(ilkKatman)
  ) {

    /*
      İnsan müdahalesini kapat.
      Programatik .click() yine çalışır.
    */
    ilkKatman.style.pointerEvents =
      "none";

    const kartlar =
      Array.from(
        ilkKatman.querySelectorAll(
          "img"
        )
      ).filter(
        botV1GorunurMu
      );

    if (
      kartlar.length === 0
    ) {

      return true;
    }

    botV1Bekle(
      () => {

        if (
          !document.body.contains(
            ilkKatman
          )
        ) {

          return;
        }

        const secilecek =
          kartlar[
            Math.floor(
              Math.random() *
              kartlar.length
            )
          ];

        secilecek?.click();

      },
      550,
      900
    );

    return true;
  }


  const siralaKatmani =
    document.getElementById(
      "muzeMuduruSiralaKatmani"
    );

  if (
    siralaKatmani &&
    botV1GorunurMu(siralaKatmani)
  ) {

    siralaKatmani.style.pointerEvents =
      "none";

    /*
      Müze Müdürü seçiminde seçilmiş kartların opacity'si
      0.55'e düşürülüyor. Sadece henüz seçilmemiş kartlardan
      bir tanesine tıklarız. Böylece bot aynı karta takılmaz.
    */
    const secilmemisKartlar =
      Array.from(
        siralaKatmani.querySelectorAll(
          "img"
        )
      ).filter(
        (img) => {

          if (
            !botV1GorunurMu(img)
          ) {

            return false;
          }

          const opacity =
            Number(
              img.style.opacity ||
              getComputedStyle(img).opacity ||
              1
            );

          return opacity > 0.8;
        }
      );

    if (
      secilmemisKartlar.length === 0
    ) {

      return true;
    }

    botV1Bekle(
      () => {

        if (
          !document.body.contains(
            siralaKatmani
          )
        ) {

          return;
        }

        const secilecek =
          secilmemisKartlar[
            Math.floor(
              Math.random() *
              secilmemisKartlar.length
            )
          ];

        secilecek?.click();

      },
      420,
      720
    );

    return true;
  }

  return false;
}


/*
  Eski genel bot seçim fonksiyonu korunur.
  Yalnız Müze Müdürü açıkken önce özel handler çalışır.
*/
const v43EskiBotGenelSecimKatmani =
  botV1GenelSecimKatmani;

botV1GenelSecimKatmani =
  function() {

    if (
      v43BotMuzeMuduruKatmaniVarMi()
    ) {

      return v43BotMuzeMuduruOyna();
    }

    return v43EskiBotGenelSecimKatmani();
  };


console.log(
  "V43 yüklendi: yalnızca son 5 sorun hedefli düzeltildi."
);


/* =====================================================
   V44 — SADECE SON 4 SORUNA HEDEFLİ EK DÜZELTME
   - Açık Artırma zar kilitlenmesi
   - İlk başlayan oyuncunun tek normal çekiş hakkı
   - Eser büyük gösterim toplam 3 saniye
   - BOT + akıllı Yeni Sergi
===================================================== */

/* -----------------------------------------------------
   1) AÇIK ARTIRMA
   V42 isim düzeltme gözlemcisi aynı text node'u tekrar tekrar
   yazıp kendi MutationObserver'ını tetiklememeli.
   Yukarıdaki V42 kodunda yalnız metin gerçekten değişirse
   nodeValue yazılacak şekilde koruma eklendi.
----------------------------------------------------- */

/* -----------------------------------------------------
   2) BAŞLANGIÇTAN SONRA NORMAL TUR = TEK ÇEKİŞ
   Başlangıç zarından kalan hiçbir ekstra çekiş kuyruğu taşınmaz.
   Özel kartların sonradan verdiği ekstra haklara dokunulmaz.
----------------------------------------------------- */
const v44EskiBaslangicZarEkraniniKapat = baslangicZarEkraniniKapat;
baslangicZarEkraniniKapat = function() {
  ekstraKartCekmeSayisi = 0;
  kartCekmeKilidi = false;
  const kapananZarKatmani = document.getElementById("baslangicZarKatmani");
  v47BaslangicBotTuru = Boolean(
    window.v78OtomatikOyun ||
    (
      typeof BOT_V1 !== "undefined" &&
      BOT_V1.aktif &&
      aktifOyuncu === BOT_V1.oyuncu
    )
  );
  v47BaslangicBotCekisiniYapti = false;
  v54BotIlkCekisHazirZamani = v47BaslangicBotTuru
    ? Number.POSITIVE_INFINITY
    : 0;
  if (typeof BOT_V1 !== "undefined") {
    BOT_V1.kilit = false;
  }
  const sonuc = v44EskiBaslangicZarEkraniniKapat();

  /* İki saniyeyi zar kapanma animasyonu başladığında değil, katman ekrandan
     tamamen kaldırıldığı anda say. Böylece bot kolu sonuç ekranının üstüne
     yetişmez ve tam iki saniye sonra uzanır. */
  if (v47BaslangicBotTuru) {
    const ikiSaniyelikBeklemeyiBaslat = () => {
      v54BotIlkCekisHazirZamani = Date.now() + 2000;
    };

    if (!kapananZarKatmani || !kapananZarKatmani.isConnected) {
      ikiSaniyelikBeklemeyiBaslat();
    } else {
      const gozlemci = new MutationObserver(() => {
        if (kapananZarKatmani.isConnected) return;
        gozlemci.disconnect();
        ikiSaniyelikBeklemeyiBaslat();
      });
      gozlemci.observe(document.body, { childList: true, subtree: true });
    }
  }

  return sonuc;
};

/* -----------------------------------------------------
   3) ESER GÖSTERİMİ
   V43 wrapper yukarıda 4150 -> 2150 ms yapıldı.
   Ana açılma beklemesi 850 ms olduğu için toplam = 3000 ms.
----------------------------------------------------- */

/* -----------------------------------------------------
   4) BOT + AKILLI YENİ SERGİ
----------------------------------------------------- */
const V44_TAKIM_KARTLARI = {
  fransa: "fransa-takimi",
  hollanda: "hollanda-takimi",
  dunya: "dunya-takimi",
  klasikler: "klasikler-takimi"
};

const V44_BOT_GORULEN_TAKIMLAR = new Set();

function v44TakimKartiniHatirla(kart) {
  if (!kart) return;
  const id = kart.id || "";
  for (const takim of Object.keys(V44_TAKIM_KARTLARI)) {
    if (id === V44_TAKIM_KARTLARI[takim]) V44_BOT_GORULEN_TAKIMLAR.add(takim);
  }
}

/* Çöpte görünen takım kartları kesin bilgi; ayrıca açılmış büyük takım
   kartlarını görsel src üzerinden hafızaya al. */
function v44BotTakimHafizasiniGuncelle() {
  (copDeste || []).forEach(v44TakimKartiniHatirla);
  document.querySelectorAll('.cekilenBuyukKart').forEach(img => {
    const src = String(img.getAttribute('src') || '');
    for (const [takim, kartId] of Object.entries(V44_TAKIM_KARTLARI)) {
      if (src.includes(kartId)) V44_BOT_GORULEN_TAKIMLAR.add(takim);
    }
  });
}

function v44SanatcininTakimi(sanatciId) {
  for (const [takim, uyeler] of Object.entries(TAKIMLAR)) {
    if (uyeler.includes(sanatciId)) return takim;
  }
  return null;
}

function v44BotYeniSergiPlani() {
  if (typeof BOT_V1 === "undefined" || !BOT_V1.aktif) return null;
  v44BotTakimHafizasiniGuncelle();

  const bot = BOT_V1.oyuncu;
  const mevcut = oyuncununSanatcilari(bot);
  if (!mevcut?.length || !artanSanatcilar?.length) return null;

  const eldekiOzel = oyuncununOzelKartlari(bot) || [];
  const copIds = new Set((copDeste || []).map(k => k.id));
  let enIyi = null;

  for (const yeni of artanSanatcilar) {
    const yeniTakim = v44SanatcininTakimi(yeni.id);
    if (!yeniTakim) continue;

    const takimKartId = V44_TAKIM_KARTLARI[yeniTakim];
    const takimKartiElde = eldekiOzel.some(k => k.id === takimKartId);
    const takimKartiCopte = copIds.has(takimKartId);
    const takimKartiGoruldu = V44_BOT_GORULEN_TAKIMLAR.has(yeniTakim);
    const oncekiTakimSayisi = mevcut.filter(s => TAKIMLAR[yeniTakim].includes(s.id)).length;

    for (const eski of mevcut) {
      const eskiTakim = v44SanatcininTakimi(eski.id);
      const sonra = mevcut
        .filter(s => s.id !== eski.id)
        .concat([yeni]);
      const sonrakiTakimSayisi = sonra.filter(s => TAKIMLAR[yeniTakim].includes(s.id)).length;
      const kazanc = sonrakiTakimSayisi - oncekiTakimSayisi;
      if (kazanc <= 0) continue;

      let skor = kazanc * 20 + sonrakiTakimSayisi * 12;
      if (takimKartiElde) skor += 45;
      if (takimKartiCopte) skor += 30;
      else if (takimKartiGoruldu) skor += 16;
      if (sonrakiTakimSayisi === 3) skor += 55;

      /* Çıkarılan sanatçının kendi takımında güçlü bir ikiliyi bozma. */
      if (eskiTakim && eskiTakim !== yeniTakim) {
        const eskiTakimSayisi = mevcut.filter(s => TAKIMLAR[eskiTakim].includes(s.id)).length;
        if (eskiTakimSayisi >= 2) skor -= 24;
      }

      if (!enIyi || skor > enIyi.skor) {
        enIyi = { yeni, eski, skor, takim: yeniTakim };
      }
    }
  }

  /* Sırf değişiklik olsun diye zayıf hamle yapma. */
  return enIyi && enIyi.skor >= 45 ? enIyi : null;
}

function v44BotYeniSergiKarari(kutu, kullan, sakla, copeAt) {
  if (bekleyenOzelKart?.id !== "yeni-sergi") return false;
  const plan = v44BotYeniSergiPlani();
  botV1Bekle(() => {
    if (plan && kullan && !kullan.disabled) {
      BOT_V1.v44YeniSergiPlani = plan;
      kullan.click();
      return;
    }
    if (sakla && !sakla.disabled) {
      sakla.click();
      return;
    }
    if (kullan && !kullan.disabled) {
      /* Yuva yoksa kartı boşa atmaktansa mevcut en iyi değişimi uygula. */
      BOT_V1.v44YeniSergiPlani = plan || v44BotYeniSergiPlani();
      kullan.click();
      return;
    }
    copeAt?.click();
  }, 450, 750);
  return true;
}

const v44EskiBotOzelKartKarari = botV1OzelKartKarari;
botV1OzelKartKarari = function() {
  if (!BOT_V1.aktif || aktifOyuncu !== BOT_V1.oyuncu) return false;
  const kutu = document.getElementById("ozelKartKararButonlari");
  if (!botV1GorunurMu(kutu)) return false;
  const kullan = botV1ButonBul(kutu, "KULLAN");
  const sakla = botV1ButonBul(kutu, "YUVANA KOY");
  const copeAt = botV1ButonBul(kutu, "ÇÖPE AT");
  if (v44BotYeniSergiKarari(kutu, kullan, sakla, copeAt)) return true;
  return v44EskiBotOzelKartKarari();
};

function v44BotYeniSergiKatmani() {
  if (!BOT_V1.aktif || aktifOyuncu !== BOT_V1.oyuncu) return false;
  const plan = BOT_V1.v44YeniSergiPlani || v44BotYeniSergiPlani();

  const artanKatman = document.getElementById("yeniSergiArtanKatmani");
  if (botV1GorunurMu(artanKatman)) {
    artanKatman.style.pointerEvents = "none";
    const hedef = plan?.yeni;
    const imgs = Array.from(artanKatman.querySelectorAll("img"));
    const kart = hedef
      ? imgs.find(img => String(img.getAttribute("src") || "").includes(hedef.dosya.replace(/^images\//, "")))
      : imgs[0];
    if (kart) {
      botV1Bekle(() => kart.click(), 350, 600);
      return true;
    }
  }

  const eskiKatman = document.getElementById("yeniSergiEskiSanatciKatmani");
  if (botV1GorunurMu(eskiKatman)) {
    eskiKatman.style.pointerEvents = "none";
    const hedef = plan?.eski;
    const imgs = Array.from(eskiKatman.querySelectorAll("img"));
    const kart = hedef
      ? imgs.find(img => String(img.getAttribute("src") || "").includes(hedef.dosya.replace(/^images\//, "")))
      : imgs[0];
    if (kart) {
      botV1Bekle(() => kart.click(), 350, 600);
      return true;
    }
  }

  const guvenlikKatman = document.getElementById("yeniSergiGuvenlikAktarmaKatmani");
  if (botV1GorunurMu(guvenlikKatman)) {
    guvenlikKatman.style.pointerEvents = "none";
    const imgs = Array.from(guvenlikKatman.querySelectorAll("img")).filter(botV1GorunurMu);
    if (imgs.length) {
      botV1Bekle(() => imgs[0].click(), 350, 600);
      return true;
    }
  }
  return false;
}

const v44EskiBotGenelSecimKatmani = botV1GenelSecimKatmani;
botV1GenelSecimKatmani = function() {
  if (v44BotYeniSergiKatmani()) return true;
  return v44EskiBotGenelSecimKatmani();
};

/* Yeni Sergi tamamlanınca planı temizle. */
const v44EskiYeniSergiDegisimiUygula = yeniSergiDegisimiUygula;
yeniSergiDegisimiUygula = function(yeniSanatci, eskiSanatciElementi) {
  const sonuc = v44EskiYeniSergiDegisimiUygula(yeniSanatci, eskiSanatciElementi);
  if (typeof BOT_V1 !== "undefined") BOT_V1.v44YeniSergiPlani = null;
  return sonuc;
};

console.log("V44 hazır: yalnız son 4 sorun için hedefli düzeltmeler yüklendi.");

/* =====================================================
   V45 — SEÇİM PANELLERİ / BOT ZARI / KAZI AKIŞI
===================================================== */

/* Açık artırmada bot yalnızca kendi oyuncu panelindeki zarı atar. */
botV1AcikArtirma = function() {
  if (!BOT_V1.aktif) return false;

  const katman = document.getElementById("acikArtirmaZarKatmani");
  if (!botV1GorunurMu(katman)) return false;

  const botAdi = String(
    (typeof V37 !== "undefined" && V37.oyuncuAdlari?.[BOT_V1.oyuncu]) ||
    `${BOT_V1.oyuncu}. OYUNCU`
  ).toLocaleUpperCase("tr-TR");

  const tumZarlar = Array.from(katman.querySelectorAll("button"))
    .filter((b) => String(b.textContent || "")
      .toLocaleUpperCase("tr-TR")
      .replace(/\s+/g, " ")
      .trim()
      .includes("ZAR AT"));

  const kendiZari = tumZarlar.find((buton) => {
    const panel = buton.parentElement;
    const panelMetni = String(panel?.textContent || "")
      .toLocaleUpperCase("tr-TR");
    return panelMetni.includes(botAdi) ||
      panelMetni.includes(`${BOT_V1.oyuncu}. OYUNCU`) ||
      panelMetni.includes("BİLGİSAYAR");
  });

  if (!kendiZari || kendiZari.disabled || !botV1GorunurMu(kendiZari)) {
    return false;
  }

  botV1Bekle(() => {
    if (document.body.contains(kendiZari) && !kendiZari.disabled) {
      kendiZari.click();
    }
  }, 500, 900);
  return true;
};

function v45KaziArtiklariniTemizle() {
  document.body.classList.remove("v45KaziGecisi");
  document.querySelectorAll(".v37KaziKart, .v37Toz").forEach((el) => {
    gsap.killTweensOf(el);
    el.remove();
  });

  /* Yeni karttan kalmayan eski karar ve blur katmanlarını temizle. */
  document.getElementById("ozelKartKararButonlari")?.remove();
  document.getElementById("ozelKartUyariMetni")?.remove();
  document.querySelectorAll(".cekilenKartKatmani").forEach((el) => {
    if (!el.nextElementSibling?.classList?.contains("cekilenBuyukKart")) {
      el.remove();
    }
  });
  v43AcikKartDurumunuGuncelle();
}

/* Kazı kartı çöpe gittikten sonra alt kartı tek, temiz bir akışta aç. */
arkeolojikKaziKullan = function(kartBilgisi, kartElementi, katman) {
  if (!ortakDeste.length) {
    ozelKartKararlariniGoster(kartBilgisi, kartElementi, katman);
    return;
  }

  ozelKartKararEkraniniTemizle();
  document.body.classList.add("v45KaziGecisi");
  kartCekmeKilidi = true;
  ozelKartEfektiAktif = true;

  kullanilanOzelKartiCopeAt(kartBilgisi, kartElementi, katman, () => {
    const cekilen = ortakDeste.shift();
    window.ortakDeste = ortakDeste;

    /* Çöpe gidiş animasyonunun modalı tamamen kaldırmasını bekle. */
    requestAnimationFrame(() => {
      v45KaziArtiklariniTemizle();
      bekleyenOzelKart = null;
      ozelKartEfektiAktif = false;
      cekilenKartiBuyukGoster(cekilen);
    });
  });
};

/* Her yeni büyük kart açılışında etkileşim durumunu tek kaynağa getir. */
const v45EskiCekilenKartiBuyukGoster = cekilenKartiBuyukGoster;
cekilenKartiBuyukGoster = function(kartBilgisi) {
  v45KaziArtiklariniTemizle();
  kartCekmeKilidi = true;
  v45EskiCekilenKartiBuyukGoster(kartBilgisi);
};

console.log("V45 hazır: paneller, ortalanmış 10+9 dizilim, bot zar sahipliği ve kazı akışı yüklendi.");

/* =====================================================
   V46 — PENCERE BOYUTU DEĞİŞİNCE GÖRSELLERİ YUVALARINA SABİTLE
===================================================== */

function v46MutlakYuvayaSabitle(element, hedef, ekX = 0, ekY = 0) {
  if (!element || !hedef) return;
  const sahne = oynanisEkrani.getBoundingClientRect();
  const rect = hedef.getBoundingClientRect();
  element.style.position = "absolute";
  element.style.left = `${rect.left - sahne.left + ekX}px`;
  element.style.top = `${rect.top - sahne.top + ekY}px`;
  element.style.width = `${rect.width}px`;
  element.style.height = `${rect.height}px`;
}

function v46SabitYuvayaSabitle(element, hedef, ekX = 0, ekY = 0) {
  if (!element || !hedef) return;
  const rect = hedef.getBoundingClientRect();
  element.style.position = "fixed";
  element.style.left = `${rect.left + ekX}px`;
  element.style.top = `${rect.top + ekY}px`;
  element.style.width = `${rect.width}px`;
  element.style.height = `${rect.height}px`;
}

function v46TumMasaGorselleriniSabitle() {
  if (!oynanisEkrani?.classList.contains("aktif")) return;

  /* Yerleşen sanatçılar */
  document.querySelectorAll(".yerlesenSanatciKarti").forEach((kart) => {
    const oyuncu = Number(kart.dataset.oyuncu);
    const index = Number(kart.dataset.sanatciIndex);
    const hedefler = oyuncu === 1 ? oyuncu1SanatciYuvalari : oyuncu2SanatciYuvalari;
    v46MutlakYuvayaSabitle(kart, hedefler?.[index]);
  });

  /* Koleksiyona yerleşen eserler */
  document.querySelectorAll(".yerlesenEserKarti").forEach((kart) => {
    const bilgi = {
      sanatci: kart.dataset.sanatci,
      eserSirasi: Number(kart.dataset.eserSirasi)
    };
    const hedef = eserinHedefYuvasiniBul(Number(kart.dataset.oyuncu), bilgi);
    v46MutlakYuvayaSabitle(kart, hedef);
  });

  /* Depodaki eserler, oyuncu özel kartları ve depo kilidi */
  document.querySelectorAll(
    ".depodakiEserKarti, .oyuncuOzelKartKarti, .aktifDepoKilidiKarti"
  ).forEach((kart) => {
    v46MutlakYuvayaSabitle(kart, document.getElementById(kart.dataset.yuvaId));
  });

  /* Ortak deste: sabit yuva üzerinde hafif yığın kayması */
  document.querySelectorAll(".ortakDesteGorselKarti").forEach((kart, index) => {
    v46SabitYuvayaSabitle(kart, ortakDesteYuvasi, index * 1.2, index * -0.8);
  });

  /* Çöp destesi */
  document.querySelectorAll(".coptekiKart").forEach((kart, index) => {
    v46MutlakYuvayaSabitle(kart, copYuvasi, index * .45, index * -.35);
  });

  /* Artan sanatçı ve özel kart desteleri */
  document.querySelectorAll(".artanSanatciKarti").forEach((kart, index) => {
    v46MutlakYuvayaSabitle(kart, artanSanatciYuvasi, index * .8, index * -.55);
  });
  document.querySelectorAll(".artanOzelKarti").forEach((kart, index) => {
    v46SabitYuvayaSabitle(kart, artanOzelYuvasi, index * .8, index * -.55);
  });

  /* Müze Güvenliği, koruduğu sanatçıya bağlı kalır. */
  document.querySelectorAll(".aktifMuzeGuvenligiKarti").forEach((kart) => {
    const sanatci = document.querySelector(
      `.yerlesenSanatciKarti[data-oyuncu="${kart.dataset.oyuncu}"][data-sanatci="${kart.dataset.sanatci}"]`
    );
    if (!sanatci) return;
    const sahne = oynanisEkrani.getBoundingClientRect();
    const rect = sanatci.getBoundingClientRect();
    const genislik = rect.width * .42;
    const oran = kart.naturalWidth && kart.naturalHeight
      ? kart.naturalWidth / kart.naturalHeight
      : .72;
    const yukseklik = genislik / oran;
    kart.style.position = "absolute";
    kart.style.left = `${rect.right - sahne.left - genislik * .8}px`;
    kart.style.top = `${rect.bottom - sahne.top - yukseklik * .62}px`;
    kart.style.width = `${genislik}px`;
    kart.style.height = `${yukseklik}px`;
  });
}

let v46BoyutlandirmaBekliyor = false;
window.addEventListener("resize", () => {
  if (v46BoyutlandirmaBekliyor) return;
  v46BoyutlandirmaBekliyor = true;
  requestAnimationFrame(() => {
    v46TumMasaGorselleriniSabitle();
    v46BoyutlandirmaBekliyor = false;
  });
});

window.addEventListener("orientationchange", () => {
  setTimeout(v46TumMasaGorselleriniSabitle, 120);
});

console.log("V46 hazır: yerleşmiş masa görselleri yeniden boyutlandırmada yuvalarına sabitlendi.");

/* =====================================================
   V47 — BAŞLANGIÇTA BOTUN İLK TURU TAM OLARAK TEK ÇEKİŞ
===================================================== */

let v47BaslangicBotTuru = false;
let v47BaslangicBotCekisiniYapti = false;

const v47EskiTuruBitir = turuBitir;
turuBitir = function() {
  if (
    v47BaslangicBotTuru &&
    typeof BOT_V1 !== "undefined" &&
    aktifOyuncu === BOT_V1.oyuncu
  ) {
    v47BaslangicBotTuru = false;
    v47BaslangicBotCekisiniYapti = false;
  }
  return v47EskiTuruBitir();
};

console.log("V47 hazır: zarı kazanan botun ilk turu tek ortak deste çekişiyle sınırlandı.");

/* =====================================================
   V48 — BOT SANATÇI SEÇERKEN İNSAN MÜDAHALESİNİ KAPAT
===================================================== */

function v48BotSanatciSecimTiklamasiniEngelle(event) {
  if (
    typeof BOT_V1 === "undefined" ||
    !BOT_V1.aktif ||
    oyunAsamasi !== "sanatci-secimi" ||
    aktifOyuncu !== BOT_V1.oyuncu
  ) {
    return;
  }

  const kart = event.target.closest?.(".kapaliSanatciKarti");
  if (!kart) return;

  event.preventDefault();
  event.stopPropagation();
  event.stopImmediatePropagation();
}

document.addEventListener(
  "pointerdown",
  v48BotSanatciSecimTiklamasiniEngelle,
  true
);

document.addEventListener(
  "click",
  v48BotSanatciSecimTiklamasiniEngelle,
  true
);

console.log("V48 hazır: botun sanatçı seçim turunda kartlara insan dokunuşu kilitlendi.");

/* =====================================================
   V49 — BOTUN ZARINA İNSAN TIKLAMASI + İLK ÇEKİŞ ÇİFTLEME KİLİDİ
===================================================== */

function v49BotKontroluneInsanTiklamasiniEngelle(event) {
  if (
    typeof BOT_V1 === "undefined" ||
    !BOT_V1.aktif
  ) {
    return;
  }

  const botZari = event.target.closest?.("#zarAtButonu2");
  const botTurundaDeste =
    aktifOyuncu === BOT_V1.oyuncu &&
    event.target.closest?.(".ortakDesteGorselKarti");

  if (!botZari && !botTurundaDeste) return;

  event.preventDefault();
  event.stopPropagation();
  event.stopImmediatePropagation();
}

document.addEventListener(
  "pointerdown",
  v49BotKontroluneInsanTiklamasiniEngelle,
  true
);

document.addEventListener(
  "click",
  v49BotKontroluneInsanTiklamasiniEngelle,
  true
);

/*
  Kaynağı ne olursa olsun, zarı kazanan botun başlangıç turunda
  ortak deste fonksiyonu yalnızca bir kez gerçek kart eksiltebilir.
*/
const v49EskiOrtakDestedenKartCek = ortakDestedenKartCek;
ortakDestedenKartCek = function() {
  if (
    v47BaslangicBotTuru &&
    typeof BOT_V1 !== "undefined" &&
    BOT_V1.aktif &&
    aktifOyuncu === BOT_V1.oyuncu
  ) {
    if (v47BaslangicBotCekisiniYapti) return;
    v47BaslangicBotCekisiniYapti = true;
  }

  return v49EskiOrtakDestedenKartCek();
};

console.log("V49 hazır: bot zarı insan tıklamasına kapatıldı ve ilk bot çekişi motor seviyesinde teke indirildi.");

/* =====================================================
   V50 — AÇIK ARTIRMA BOT ZARI KİLİDİ + OYUN MÜZİĞİ DÜĞMESİ
===================================================== */

function v50AcikArtirmaBotZariniInsanaKapat(event) {
  if (
    !event.isTrusted ||
    typeof BOT_V1 === "undefined" ||
    !BOT_V1.aktif
  ) {
    return;
  }

  const buton = event.target.closest?.(
    '[data-acik-artirma-oyuncu="2"]'
  );

  if (!buton) return;

  event.preventDefault();
  event.stopPropagation();
  event.stopImmediatePropagation();
}

document.addEventListener(
  "pointerdown",
  v50AcikArtirmaBotZariniInsanaKapat,
  true
);

document.addEventListener(
  "click",
  v50AcikArtirmaBotZariniInsanaKapat,
  true
);

const oyunMuzikButonu = document.getElementById("oyunMuzikButonu");
let oyunMuzigiKapatildi = false;
let v50MuzikButonuIslemNo = 0;

function v50MuzikButonunuGuncelle() {
  if (!oyunMuzikButonu) return;
  oyunMuzikButonu.textContent = oyunMuzigiKapatildi
    ? "🔇"
    : "🔊";
  oyunMuzikButonu.setAttribute(
    "aria-pressed",
    String(oyunMuzigiKapatildi)
  );
  oyunMuzikButonu.title = oyunMuzigiKapatildi
    ? "Oyun müziğini aç"
    : "Oyun müziğini kapat";
}

oyunMuzikButonu?.addEventListener("click", async (event) => {
  event.preventDefault();
  event.stopPropagation();
  butonSesiCal();

  const buIslem = ++v50MuzikButonuIslemNo;
  oyunMuzigiKapatildi = !oyunMuzigiKapatildi;
  v50MuzikButonunuGuncelle();

  if (oyunMuzigiKapatildi) {
    /* Bekleyen fade işlemi yeni açma tıklamasını sonradan ezmesin. */
    oyunMuzik.pause();
    oyunMuzik.volume = 0;
    return;
  }

  try {
    oyunMuzik.volume = 0;
    await oyunMuzik.play();

    if (
      buIslem !== v50MuzikButonuIslemNo ||
      oyunMuzigiKapatildi
    ) {
      oyunMuzik.pause();
      oyunMuzik.volume = 0;
      return;
    }

    muzikAc(oyunMuzik, MUZIK_SESI, 350);
  } catch (_) {
    if (buIslem !== v50MuzikButonuIslemNo) return;
    oyunMuzigiKapatildi = true;
    v50MuzikButonunuGuncelle();
  }
});

v50MuzikButonunuGuncelle();

console.log("V50 hazır: açık artırma bot zarı korundu ve oyun müziği kontrolü eklendi.");

/* =====================================================
   V51 — MÜZE MÜDÜRÜ BOTU / DEPO GİZLİLİĞİ / SKOR OTURUMU
===================================================== */

/* Bilgisayarın kapalı depo kartını insan fiziksel olarak açamaz. */
function v51RakipDepoTiklamasiniEngelle(event) {
  if (!event.isTrusted) return;

  const kart = event.target.closest?.(".depodakiEserKarti");
  if (!kart || Number(kart.dataset.oyuncu) === aktifOyuncu) return;

  /* Dedektif / Gece Nöbeti rakip deposunu hedeflerken kart açılmaz;
     yalnızca efekt için seçilir. Bu meşru hedef tıklamasını engelleme. */
  if (
    hedefSecimAktif &&
    hedefSecimTipi === "rakip-depo" &&
    kart.dataset.hedefSecilebilir === "evet"
  ) return;
  event.preventDefault();
  event.stopPropagation();
  event.stopImmediatePropagation();
}
document.addEventListener("pointerdown", v51RakipDepoTiklamasiniEngelle, true);
document.addEventListener("click", v51RakipDepoTiklamasiniEngelle, true);

/* Müze Müdüründe botun kart faydasını değerlendir. */
function v51BotKartDegeri(kart) {
  if (!kart) return -9999;
  if (kart.id === "muzede-deprem") return -1000;

  const bot = BOT_V1.oyuncu;
  const rakip = bot === 1 ? 2 : 1;
  if (kart.tip === "eser") {
    const kendi = oyuncununSanatcilari(bot).some(s => s.id === kart.sanatci);
    const rakibin = oyuncununSanatcilari(rakip).some(s => s.id === kart.sanatci);
    const zatenVar = oyuncununMasadakiEserleri(bot).some(
      e => e.dataset.id === kart.id
    );
    if (zatenVar) return -30;
    if (kendi) return 120;
    if (rakibin && oyuncununBosDepoYuvalari(bot).length) return 48;
    return 5;
  }

  let deger = 28;
  if (kart.id === "arti-iki-kart") deger += 45;
  if (kart.id === "muze-muduru") deger += 28;
  if (["fransa-takimi", "hollanda-takimi", "dunya-takimi", "klasikler-takimi"]
      .includes(kart.id)) deger += 22;
  return deger;
}

let v51MuzeMuduruPlani = null;
let v51MuzeMuduruCalisiyor = false;

function v51BotMuzeMuduruOyna() {
  if (!BOT_V1.aktif || aktifOyuncu !== BOT_V1.oyuncu) return false;

  const ilk = document.getElementById("muzeMuduruKatmani");
  if (ilk && botV1GorunurMu(ilk)) {
    if (v51MuzeMuduruCalisiyor) return true;
    const besKart = ortakDeste.slice(-5);
    if (besKart.length < 5) return true;
    v51MuzeMuduruPlani = v53BotMuzeMuduruPlaniKur(besKart);
    const imgler = Array.from(ilk.querySelectorAll("img"));
    const hedefImg = imgler.find(img =>
      String(img.getAttribute("src") || "").includes(
        v51MuzeMuduruPlani.alt.dosya.replace(/^images\//, "")
      )
    );
    const devam = ilk.querySelector(".v37Onay");
    v51MuzeMuduruCalisiyor = true;
    setTimeout(() => {
      hedefImg?.click();
      setTimeout(() => {
        devam?.click();
        v51MuzeMuduruCalisiyor = false;
      }, 1250);
    }, 1700);
    return true;
  }

  const sirala = document.getElementById("muzeMuduruSiralaKatmani");
  if (sirala && botV1GorunurMu(sirala) && v51MuzeMuduruPlani) {
    if (v51MuzeMuduruCalisiyor) return true;
    v51MuzeMuduruCalisiyor = true;
    const imgler = Array.from(sirala.querySelectorAll("img"));
    v51MuzeMuduruPlani.sira.forEach((kart, index) => {
      const img = imgler.find(aday =>
        String(aday.getAttribute("src") || "").includes(
          kart.dosya.replace(/^images\//, "")
        )
      );
      setTimeout(() => img?.click(), 900 + index * 1050);
    });
    setTimeout(() => {
      sirala.querySelector(".v37Onay")?.click();
      v51MuzeMuduruPlani = null;
      v51MuzeMuduruCalisiyor = false;
    }, 900 + 4 * 1050 + 1100);
    return true;
  }
  return false;
}

const v51EskiBotGenelSecimKatmani = botV1GenelSecimKatmani;
botV1GenelSecimKatmani = function() {
  if (v51BotMuzeMuduruOyna()) return true;
  return v51EskiBotGenelSecimKatmani();
};

/* ------------------------- CANLI SKOR ------------------------- */
const V51_OTURUM = {
  oyun: 1,
  galibiyet: { 1: 0, 2: 0 },
  oyunBitiyor: false
};

function v51OyuncuSkoru(oyuncu) {
  const eserler = oyuncununMasadakiEserleri(oyuncu);
  const gruplar = new Map();
  eserler.forEach(kart => {
    const id = kart.dataset.sanatci;
    gruplar.set(id, (gruplar.get(id) || 0) + 1);
  });
  const koleksiyon = Array.from(gruplar.values()).filter(sayi => sayi >= 3).length;
  return { eser: eserler.length, koleksiyon, toplam: eserler.length + koleksiyon };
}

v37SkorGuncelle = function() {
  for (const oyuncu of [1, 2]) {
    const el = document.getElementById(`v37Skor${oyuncu}`);
    if (!el) continue;
    const skor = v51OyuncuSkoru(oyuncu);
    const html = `<span class="v51SkorSayi">${skor.toplam}</span>` +
      `<span class="v51SkorBonus">${skor.eser} eser<br>+${skor.koleksiyon}</span>`;
    if (el.innerHTML !== html) el.innerHTML = html;
    el.title = `${V37.oyuncuAdlari[oyuncu]}: ${skor.eser} eser + ${skor.koleksiyon} koleksiyon`;
  }
};

/* Arayüz daha önce kurulmuşsa eski skor metnini beklemeden yenile. */
v37SkorGuncelle();

function v51OyunSonuPaneli(kazanan, neden) {
  document.getElementById("v51OyunSonu")?.remove();
  const kat = document.createElement("div");
  kat.id = "v51OyunSonu";
  const ad = kazanan ? V37.oyuncuAdlari[kazanan] : "BERABERE";
  const oturumBitti = V55_DOKUZLA_OTURUM_BITTI || V51_OTURUM.oyun >= 5;
  const oturumGalibi = V51_OTURUM.galibiyet[1] === V51_OTURUM.galibiyet[2]
    ? null
    : (V51_OTURUM.galibiyet[1] > V51_OTURUM.galibiyet[2] ? 1 : 2);
  const oturumMetni = oturumBitti
    ? (V55_DOKUZLA_OTURUM_BITTI && kazanan
        ? `OTURUM GALİBİ: ${V37.oyuncuAdlari[kazanan]}`
        : oturumGalibi
        ? `OTURUM GALİBİ: ${V37.oyuncuAdlari[oturumGalibi]}`
        : "OTURUM BERABERE BİTTİ")
    : "";
  kat.innerHTML = `<div class="v37Panel" style="text-align:center;max-width:520px">
    <h2>${ad} ${kazanan ? "KAZANDI" : ""}</h2>
    <p>${neden}</p>
    <p>OTURUM: ${V51_OTURUM.galibiyet[1]} - ${V51_OTURUM.galibiyet[2]} &nbsp; | &nbsp; OYUN ${V51_OTURUM.oyun}/5</p>
    ${oturumMetni ? `<p><strong>${oturumMetni}</strong></p>` : ""}
    <button class="v37Onay">${oturumBitti ? "OTURUMU BİTİR" : "SONRAKİ OYUN"}</button>
  </div>`;
  Object.assign(kat.style, {position:"fixed",inset:"0",zIndex:"160000",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(0,0,0,.78)"});
  document.body.appendChild(kat);
  kat.querySelector("button").onclick = () => {
    kat.remove();
    if (oturumBitti) {
      V51_OTURUM.oyun = 1;
      V51_OTURUM.galibiyet = {1:0, 2:0};
      V51_OTURUM.oyunBitiyor = false;
      V54_GIZLI_SANDIK_OTURUM_DISI = false;
      V55_DOKUZLA_OTURUM_BITTI = false;
      v60AnaMenuyeDon();
      return;
    }
    V51_OTURUM.oyun++;
    V51_OTURUM.oyunBitiyor = false;
    v55SonrakiOyunaGec();
  };
}

function v51OyunuBitir(kazanan, neden) {
  if (V51_OTURUM.oyunBitiyor) return;
  V51_OTURUM.oyunBitiyor = true;
  oyunAsamasi = "oyun-bitti";
  kartCekmeKilidi = true;
  if (kazanan) V51_OTURUM.galibiyet[kazanan]++;
  v51OyunSonuPaneli(kazanan, neden);
}

function v51DokuzEserKontrolu() {
  if (V51_OTURUM.oyunBitiyor || oyunAsamasi === "oyun-bitti") return;
  for (const oyuncu of [1, 2]) {
    if (v51OyuncuSkoru(oyuncu).eser >= 9) {
      v51OyunuBitir(oyuncu, "9 esere ilk ulaşan oyuncu oyunu kazandı.");
      return;
    }
  }
}

new MutationObserver(() => {
  requestAnimationFrame(() => {
    v37SkorGuncelle();
    v51DokuzEserKontrolu();
  });
}).observe(oynanisEkrani, {childList:true, subtree:false});

const v51EskiMevcutOyunuBitir = mevcutOyunuBitir;
mevcutOyunuBitir = function() {
  if (V51_OTURUM.oyunBitiyor) return;
  const s1 = v51OyuncuSkoru(1);
  const s2 = v51OyuncuSkoru(2);
  const kazanan = s1.toplam === s2.toplam ? null : (s1.toplam > s2.toplam ? 1 : 2);
  v51OyunuBitir(kazanan, kazanan ? "Deste sonunda toplam skor üstünlüğü." : "Deste sonunda skorlar eşit.");
};

console.log("V51 hazır: bot Müze Müdürü, depo gizliliği ve 5 oyunluk skor sistemi yüklendi.");

/* =====================================================
   V52 — RESTORASYON ZARI / DEDEKTİF HEDEFİ / SKOR ZAMANI
===================================================== */

/* Her yeni oyunda skorlar başlangıç zarı sonuçlanana kadar gizli kalır. */
const v52EskiBaslangicZarSisteminiBaslat = baslangicZarSisteminiBaslat;
baslangicZarSisteminiBaslat = function() {
  oynanisEkrani.classList.remove("v52SkorHazir");
  return v52EskiBaslangicZarSisteminiBaslat();
};

const v52EskiBaslangicZarlariniKarsilastir = baslangicZarlariniKarsilastir;
baslangicZarlariniKarsilastir = function() {
  const esitlik = oyuncu1ZarSonucu === oyuncu2ZarSonucu;
  const sonuc = v52EskiBaslangicZarlariniKarsilastir();
  if (!esitlik && oyuncu1ZarSonucu != null && oyuncu2ZarSonucu != null) {
    oynanisEkrani.classList.add("v52SkorHazir");
    v37SkorGuncelle();
  }
  return sonuc;
};

/* Özel kart zarı açıkken masa ortasındaki tur yönergesi zarları kapatamaz. */
const v52EskiOzelKartZarEkraniAc = ozelKartZarEkraniAc;
ozelKartZarEkraniAc = function(baslik, aciklama, tamamlaninca) {
  const yazi = document.getElementById("secimYazisi");
  if (yazi) {
    gsap.killTweensOf(yazi);
    yazi.style.opacity = "0";
    yazi.style.display = "none";
    yazi.style.pointerEvents = "none";
  }

  const sonuc = v52EskiOzelKartZarEkraniAc(
    baslik,
    aciklama,
    tamamlaninca
  );

  requestAnimationFrame(() => {
    const katman = document.getElementById("ozelKartZarKatmani");
    if (!katman) return;
    katman.style.zIndex = "155000";

    /* Botun zarı, diğer bot döngülerinden bağımsız olarak tam bir kez atılır. */
    if (
      typeof BOT_V1 !== "undefined" &&
      BOT_V1.aktif &&
      aktifOyuncu === BOT_V1.oyuncu
    ) {
      const zarButonu = Array.from(katman.querySelectorAll("button")).find(
        buton => String(buton.textContent || "")
          .toLocaleUpperCase("tr-TR")
          .includes("ZAR AT")
      );
      if (zarButonu && !zarButonu.dataset.v52BotZariPlanlandi) {
        zarButonu.dataset.v52BotZariPlanlandi = "evet";
        setTimeout(() => {
          if (document.body.contains(zarButonu) && !zarButonu.disabled) {
            zarButonu.click();
          }
        }, 850);
      }
    }
  });

  return sonuc;
};

console.log("V52 hazır: Restorasyon zarı, Dedektif depo hedefi ve skor görünme zamanı düzeltildi.");

/* =====================================================
   V53 — BOT ÖZEL KART TEMPOSU + AKILLI MÜZE MÜDÜRÜ
===================================================== */

function v53KartDegeri(kart, oyuncu) {
  if (!kart) return -9999;
  const rakip = oyuncu === 1 ? 2 : 1;

  if (kart.tip === "eser") {
    const kendiSanatcisi = oyuncununSanatcilari(oyuncu)
      .some(sanatci => sanatci.id === kart.sanatci);
    const rakipSanatcisi = oyuncununSanatcilari(rakip)
      .some(sanatci => sanatci.id === kart.sanatci);
    const mevcutAyniSanatci = oyuncununMasadakiEserleri(oyuncu)
      .filter(eser => eser.dataset.sanatci === kart.sanatci).length;
    const ayniKartVar = oyuncununMasadakiEserleri(oyuncu)
      .some(eser => eser.dataset.id === kart.id);

    if (ayniKartVar) return -45;
    if (kendiSanatcisi) {
      /* Koleksiyonu tamamlayan 3. eser en yüksek önceliktedir. */
      if (mevcutAyniSanatci >= 2) return 185;
      if (mevcutAyniSanatci === 1) return 145;
      return 112;
    }
    if (rakipSanatcisi && oyuncununBosDepoYuvalari(oyuncu).length) return 46;
    return 8;
  }

  const ozelDegerleri = {
    "arti-iki-kart": 145,
    "muze-muduru": 105,
    "dedektif-sorusturmasi": 92,
    "gece-nobeti": 78,
    "eser-calindi": 88,
    "eser-sahteydi": 82,
    "restorasyon": 80,
    "yeni-sergi": 72,
    "arkeolojik-kazi": 70,
    "depo-kilidi": 62,
    "dunya-takimi": 68,
    "hollanda-takimi": 68,
    "fransa-takimi": 68,
    "klasikler-takimi": 68,
    "muzede-deprem": -900
  };
  return ozelDegerleri[kart.id] ?? 42;
}

function v53Permutasyonlar(kartlar) {
  if (kartlar.length <= 1) return [kartlar];
  const sonuc = [];
  kartlar.forEach((kart, index) => {
    const kalan = kartlar.filter((_, kalanIndex) => kalanIndex !== index);
    v53Permutasyonlar(kalan).forEach(sira => sonuc.push([kart, ...sira]));
  });
  return sonuc;
}

function v53BotMuzeMuduruPlaniKur(besKart) {
  const bot = BOT_V1.oyuncu;
  const rakip = bot === 1 ? 2 : 1;
  let enIyi = null;

  /* Müze Müdürü turu bitirir. Sonraki dört normal çekiş:
     rakip, bot, rakip, bot sırasıyla gerçekleşir. */
  besKart.forEach(alt => {
    const kalan = besKart.filter(kart => kart !== alt);
    v53Permutasyonlar(kalan).forEach(sira => {
      const puan =
        v53KartDegeri(sira[1], bot) * 1.18 +
        v53KartDegeri(sira[3], bot) * 1.00 -
        v53KartDegeri(sira[0], rakip) * 1.20 -
        v53KartDegeri(sira[2], rakip) * 1.00 +
        v53KartDegeri(alt, rakip) * 0.62 -
        v53KartDegeri(alt, bot) * 0.28;

      if (!enIyi || puan > enIyi.puan) enIyi = { alt, sira, puan };
    });
  });

  return enIyi || { alt: besKart[0], sira: besKart.slice(1) };
}

/* Bot, özel kartı gösterir göstermez KULLAN'a basmaz; oyuncuya okuma payı verir. */
const v53EskiBotOzelKartKarari = botV1OzelKartKarari;
let v53BotOzelKararBekliyor = false;

botV1OzelKartKarari = function() {
  if (!BOT_V1.aktif || aktifOyuncu !== BOT_V1.oyuncu) return false;
  const kutu = document.getElementById("ozelKartKararButonlari");
  if (!botV1GorunurMu(kutu)) return false;
  if (v53BotOzelKararBekliyor) return true;

  v53BotOzelKararBekliyor = true;
  setTimeout(() => {
    v53BotOzelKararBekliyor = false;
    if (
      document.body.contains(kutu) &&
      BOT_V1.aktif &&
      aktifOyuncu === BOT_V1.oyuncu
    ) {
      v53EskiBotOzelKartKarari();
    }
  }, 1900 + Math.floor(Math.random() * 900));
  return true;
};

console.log("V53 hazır: bot özel kartları daha yavaş oynuyor ve Müze Müdürü sırayı dönüşümlü çekişlere göre kuruyor.");

/* =====================================================
   V54 — İLK BOT BEKLEMESİ / KART SAHİPLİĞİ / GİZLİ SANDIK
          / BOT MÜZE GÜVENLİĞİ
===================================================== */

let v54BotIlkCekisHazirZamani = 0;
let V54_GIZLI_SANDIK_OTURUM_DISI = false;

function v54BotOzelKartKararinaMudahaleEngeli(event) {
  if (
    !event.isTrusted ||
    typeof BOT_V1 === "undefined" ||
    !BOT_V1.aktif ||
    aktifOyuncu !== BOT_V1.oyuncu
  ) return;

  const buton = event.target.closest?.("#ozelKartKararButonlari button");
  if (!buton) return;
  event.preventDefault();
  event.stopPropagation();
  event.stopImmediatePropagation();
}
document.addEventListener("pointerdown", v54BotOzelKartKararinaMudahaleEngeli, true);
document.addEventListener("click", v54BotOzelKartKararinaMudahaleEngeli, true);

/* Kullanılan Gizli Sandık, beş oyunluk oturum tamamlanana kadar geri dönmez. */
const v54EskiGizliSandikKullan = gizliSandikKullan;
gizliSandikKullan = function(kartBilgisi, kartElementi, katman) {
  V54_GIZLI_SANDIK_OTURUM_DISI = true;
  return v54EskiGizliSandikKullan(kartBilgisi, kartElementi, katman);
};

function v54BotGuvenlikSanatcisiniBul() {
  const bot = BOT_V1.oyuncu;
  const eserler = oyuncununMasadakiEserleri(bot);
  return Array.from(document.querySelectorAll(
    `.yerlesenSanatciKarti[data-oyuncu="${bot}"]`
  )).sort((a, b) => {
    const bSayi = eserler.filter(eser => eser.dataset.sanatci === b.dataset.sanatci).length;
    const aSayi = eserler.filter(eser => eser.dataset.sanatci === a.dataset.sanatci).length;
    return bSayi - aSayi;
  })[0] || null;
}

function v54BotMuzeGuvenligiMudahaleEngeli(event) {
  if (
    !event.isTrusted ||
    typeof BOT_V1 === "undefined" ||
    !BOT_V1.aktif ||
    aktifOyuncu !== BOT_V1.oyuncu
  ) return;

  const hedef = event.target.closest?.(
    `.yerlesenSanatciKarti[data-oyuncu="${BOT_V1.oyuncu}"].v37HedefSanatci`
  );
  if (!hedef) return;
  event.preventDefault();
  event.stopPropagation();
  event.stopImmediatePropagation();
}
document.addEventListener("pointerdown", v54BotMuzeGuvenligiMudahaleEngeli, true);
document.addEventListener("click", v54BotMuzeGuvenligiMudahaleEngeli, true);

const v54EskiMuzeGuvenligiKullan = muzeGuvenligiKullan;
muzeGuvenligiKullan = function(kartBilgisi, kartElementi, katman) {
  const botOynuyor =
    typeof BOT_V1 !== "undefined" &&
    BOT_V1.aktif &&
    aktifOyuncu === BOT_V1.oyuncu;

  const sonuc = v54EskiMuzeGuvenligiKullan(kartBilgisi, kartElementi, katman);

  if (botOynuyor) {
    const hedef = v54BotGuvenlikSanatcisiniBul();
    if (hedef) {
      setTimeout(() => {
        if (
          document.body.contains(hedef) &&
          hedef.classList.contains("v37HedefSanatci") &&
          aktifOyuncu === BOT_V1.oyuncu
        ) hedef.click();
      }, 1900);
    }
  }
  return sonuc;
};

console.log("V54 hazır: ilk bot çekişi bekliyor, kart kararları sahipli, Gizli Sandık oturum dışı ve bot güvenlik hedefi akıllı.");

/* =====================================================
   V55 — 5 OYUNLUK OTURUMDA KALICI MASA
===================================================== */

let V55_DOKUZLA_OTURUM_BITTI = false;

function v55GeciciEtkiKartiniDesteHavuzunaEkle(havuz, kartId) {
  if (!kartId || havuz.some(kart => kart.id === kartId)) return;
  const kaynak = ozelKartlar.find(kart => kart.id === kartId);
  if (kaynak) havuz.push({ ...kaynak, tip: "ozel" });
}

function v55SonrakiOyunaGec() {
  ortakDesteSonuKontrolleriniTemizle();
  geciciOyunKatmanlariniTemizle();
  hedefSeciminiTemizle();

  /* Yeni oyunun destesi, bir önceki oyunda çöpe giden kartlardan oluşur.
     Masada, depoda ve özel kart yuvasında duran kartlar burada olmadığı
     için aynen sahiplerinde kalır ve ikinci kez desteye girmez. */
  const yeniDeste = copDeste.map(kart => ({ ...kart }));

  /* Bu iki koruma/kilit etkisi oyun sonuna kadardır. Sonraki oyunda etkileri
     kalkar ve kartlar yeniden karıştırılacak havuza döner. */
  if (muzeGuvenligiDurumu) {
    v55GeciciEtkiKartiniDesteHavuzunaEkle(yeniDeste, "muze-guvenligi");
  }
  if (depoKilidiDurumu) {
    v55GeciciEtkiKartiniDesteHavuzunaEkle(yeniDeste, "depo-kilidi");
  }

  document.querySelectorAll(".coptekiKart").forEach(kart => kart.remove());
  document.querySelectorAll(".aktifMuzeGuvenligiKarti, .aktifDepoKilidiKarti")
    .forEach(kart => kart.remove());
  document.querySelectorAll(".cekilenBuyukKart, .cekilenKartKatmani")
    .forEach(element => element.remove());
  document.body.classList.remove("v43KartAcik", "v45KaziGecisi");

  muzeGuvenligiDurumu = null;
  depoKilidiDurumu = null;
  window.muzeGuvenligiDurumu = null;
  window.depoKilidiDurumu = null;

  copDeste = [];
  ortakDeste = karistir(
    yeniDeste.filter(kart => !(
      V54_GIZLI_SANDIK_OTURUM_DISI && kart.id === "gizli-sandik"
    ))
  );
  window.copDeste = copDeste;
  window.ortakDeste = ortakDeste;

  aktifOyuncu = 1;
  oyunAsamasi = "ortak-deste-hazirlaniyor";
  ortakDesteHazir = false;
  ortakDesteSonuArdisikPas = 0;
  ortakDesteSonuKontrolAktif = false;
  kartCekmeKilidi = false;
  ozelKartEfektiAktif = false;
  bekleyenOzelKart = null;
  ekstraKartCekmeSayisi = 0;
  window.hollandaEtkiKuyrugu = null;
  v47BaslangicBotTuru = false;
  v47BaslangicBotCekisiniYapti = false;
  v54BotIlkCekisHazirZamani = 0;
  BOT_V1.kilit = false;

  oynanisEkrani.classList.remove("v52SkorHazir");
  v37SkorGuncelle();
  secimYazisiGoster(`OYUN ${V51_OTURUM.oyun}/5 — ORTAK DESTE YENİDEN KARIŞTIRILIYOR`);

  /* Sanatçı seçimine dönülmez; mevcut masa korunarak yeni deste ve
     yeni başlangıç zarı hazırlanır. */
  ortakDesteAnimasyonunuBaslat();
}

/* Kalıcı masada 9 esere ulaşmak yalnızca o eli değil, beş oyunluk
   oturumun tamamını anında kazandırır. */
v51DokuzEserKontrolu = function() {
  if (
    V51_OTURUM.oyunBitiyor ||
    V55_DOKUZLA_OTURUM_BITTI ||
    oyunAsamasi === "oyun-bitti"
  ) return;

  for (const oyuncu of [1, 2]) {
    if (v51OyuncuSkoru(oyuncu).eser >= 9) {
      V55_DOKUZLA_OTURUM_BITTI = true;
      v51OyunuBitir(
        oyuncu,
        "9 esere ilk ulaşan oyuncu beş oyunluk oturumu kazandı."
      );
      return;
    }
  }
};

console.log("V55 hazır: oyunlar arası masa, depo, özel kart yuvaları ve skor korunuyor.");

/* =====================================================
   V56 — ARKEOLOJİK KAZI ALT KART ANİMASYONU
===================================================== */

arkeolojikKaziKullan = function(kartBilgisi, kartElementi, katman) {
  if (!ortakDeste.length) {
    ozelKartKararlariniGoster(kartBilgisi, kartElementi, katman);
    return;
  }

  ozelKartKararEkraniniTemizle();
  document.body.classList.add("v45KaziGecisi");
  kartCekmeKilidi = true;
  ozelKartEfektiAktif = true;

  kullanilanOzelKartiCopeAt(kartBilgisi, kartElementi, katman, () => {
    /* Array'in başı ortak destenin gerçek altıdır. */
    const cekilen = ortakDeste.shift();
    window.ortakDeste = ortakDeste;

    const desteRect = ortakDesteYuvasi.getBoundingClientRect();
    const desteKartlari = Array.from(
      document.querySelectorAll(".ortakDesteGorselKarti")
    );

    /* Görsel deste henüz oluşmadıysa oyun akışı yine güvenle devam etsin. */
    if (!desteKartlari.length) {
      bekleyenOzelKart = null;
      ozelKartEfektiAktif = false;
      cekilenKartiBuyukGoster(cekilen);
      return;
    }

    const altKart = desteKartlari[0];
    const ustKartlar = desteKartlari.slice(1);
    const ilkDonusler = new Map(
      ustKartlar.map(kart => [kart, Number(gsap.getProperty(kart, "rotation")) || 0])
    );

    ortakDesteYuvasi.style.visibility = "visible";
    ortakDesteYuvasi.style.opacity = "1";
    desteKartlari.forEach(kart => {
      kart.style.pointerEvents = "none";
      kart.style.cursor = "default";
    });

    altKart.classList.add("v60KaziAltKart");
    altKart.style.zIndex = "9450";

    /* 1) Üstte duran kartlar sağa açılır ve yuva zemini görünür. */
    gsap.to(ustKartlar, {
      x: (index) => desteRect.width * (1.05 + index * .025),
      y: (index) => (index - (ustKartlar.length - 1) / 2) * 4,
      rotation: (index) => 5 + index * .55,
      duration: .68,
      stagger: .045,
      ease: "power3.inOut",
      onComplete: () => {
        /* 2) En alttaki kart desteden yükselir; boş yuva açıkça görünür. */
        gsap.to(altKart, {
          y: -desteRect.height * .48,
          x: -desteRect.width * .12,
          scale: 1.08,
          rotation: -4,
          duration: .52,
          ease: "power2.out",
          onComplete: () => {
            gsap.to(altKart, {
              scaleX: 0,
              duration: .18,
              ease: "power1.in",
              onComplete: () => {
                altKart.src = cekilen.dosya;
                gsap.to(altKart, {
                  scaleX: 1,
                  duration: .22,
                  ease: "back.out(1.25)",
                  onComplete: () => {
                    /* Normal büyük kart sistemi, yükselmiş kartın bulunduğu
                       noktadan başlasın; böylece hareket tek parça görünür. */
                    const kaynakRect = altKart.getBoundingClientRect();
                    const kaynakProxy = document.createElement("div");
                    kaynakProxy.className = "ortakDesteGorselKarti";
                    Object.assign(kaynakProxy.style, {
                      position: "fixed",
                      left: `${kaynakRect.left}px`,
                      top: `${kaynakRect.top}px`,
                      width: `${kaynakRect.width}px`,
                      height: `${kaynakRect.height}px`,
                      opacity: "0",
                      pointerEvents: "none",
                      zIndex: "9460"
                    });
                    document.body.appendChild(kaynakProxy);

                    altKart.remove();
                    cekilenKartiBuyukGoster(cekilen);
                    kaynakProxy.remove();

                    /* 3) Kenara açılan üst yığın ortak deste yuvasına döner. */
                    gsap.to(ustKartlar, {
                      x: 0,
                      y: 0,
                      rotation: (index, kart) => ilkDonusler.get(kart) || 0,
                      duration: .62,
                      stagger: { each: .035, from: "end" },
                      ease: "power3.inOut",
                      onComplete: () => {
                        document.body.classList.remove("v45KaziGecisi");
                        bekleyenOzelKart = null;
                        ozelKartEfektiAktif = false;
                      }
                    });
                  }
                });
              }
            });
          }
        });
      }
    });
  });
};

console.log("V56 hazır: Arkeolojik Kazı üst yığını açıp alt kartı çıkarıyor ve desteyi geri topluyor.");

/* =====================================================
   V57 — YUVADAN KULLANILAN +2 KARTI DONMA KORUMASI
===================================================== */

function v57CopGorseliniGarantiEt(kartBilgisi) {
  if (document.querySelector(`.coptekiKart[data-id="${kartBilgisi.id}"]`)) return;
  const yuva = document.getElementById("copYuvasi");
  if (!yuva) return;
  const sahne = oynanisEkrani.getBoundingClientRect();
  const rect = yuva.getBoundingClientRect();
  const index = Math.max(0, copDeste.length - 1);
  const kart = document.createElement("img");
  kart.src = kartBilgisi.dosya;
  kart.className = "coptekiKart";
  kart.dataset.id = kartBilgisi.id;
  kart.dataset.tip = "ozel";
  kart.dataset.gercekDosya = kartBilgisi.dosya;
  Object.assign(kart.style, {
    position: "absolute",
    left: `${rect.left - sahne.left + index * .45}px`,
    top: `${rect.top - sahne.top - index * .35}px`,
    width: `${rect.width}px`,
    height: `${rect.height}px`,
    zIndex: String(12000 + index),
    objectFit: "fill",
    cursor: "pointer",
    pointerEvents: "auto",
    filter: "drop-shadow(0 5px 5px rgba(0,0,0,.42))"
  });
  kart.addEventListener("click", event => {
    event.stopPropagation();
    kartOnizlemeAc(kart, kartBilgisi.dosya);
  });
  oynanisEkrani.appendChild(kart);
}

artiIkiKartKullan = function(kartBilgisi, kartElementi, katman) {
  const toplamEkstra = Math.min(2, ortakDeste.length);
  let tamamlandi = false;

  const akisiBaslat = () => {
    if (tamamlandi) return;
    tamamlandi = true;

    document.getElementById("eldekiOzelKartKatmani")?.remove();
    document.getElementById("ozelKartKararButonlari")?.remove();
    document.getElementById("ozelKartUyariMetni")?.remove();
    katman?.remove();
    kartElementi?.remove();
    document.body.classList.remove("v43KartAcik");

    bekleyenOzelKart = null;
    onizlemeAcik = false;
    ozelKartEfektiAktif = false;
    kartCekmeKilidi = false;

    if (toplamEkstra <= 0) {
      turuBitir();
      return;
    }

    /* İlk kart şimdi çekilir; ikinci hak turuBitir kuyruğunda kalır. */
    ekstraKartCekmeSayisi = Math.max(0, toplamEkstra - 1);
    secimYazisiGoster(
      `${v42OyuncuAdi(aktifOyuncu)} — ${toplamEkstra} EKSTRA KART ÇEK`
    );
    kartCekmeAsamasiniBaslat();
  };

  kullanilanOzelKartiCopeAt(
    kartBilgisi,
    kartElementi,
    katman,
    akisiBaslat
  );

  /* GSAP/DOM animasyonu herhangi bir nedenle onComplete vermezse oyun kilitlenmez. */
  setTimeout(() => {
    if (tamamlandi) return;
    gsap.killTweensOf(kartElementi);
    gsap.killTweensOf(katman);
    kartElementi?.remove();
    katman?.remove();
    v57CopGorseliniGarantiEt(kartBilgisi);
    akisiBaslat();
  }, 1500);
};

console.log("V57 hazır: yuvadan kullanılan +2 kartı blur bırakmadan iki çekişi tamamlar.");

/* =====================================================
   V58 — GÖRSEL BUTONLARDA TAM DİKDÖRTGEN TIKLAMA ALANI
===================================================== */

function v58GorselButonTamAlanTiklamasi(event) {
  /* Açık bir pencerenin gerçek düğme/form elemanlarına asla müdahale etme. */
  if (event.target.closest?.("button, input, select, textarea, a, [role='button']")) return;

  const adaylar = [
    {
      ekran: acilisEkrani,
      buton: devamButonu,
      kullanilabilir: () => oyunHazir && devamButonu.classList.contains("hazir")
    }
  ];

  for (const aday of adaylar) {
    if (!aday.ekran?.classList.contains("aktif") || !aday.buton || !aday.kullanilabilir()) continue;

    const rect = aday.buton.getBoundingClientRect();
    const alanIcinde =
      event.clientX >= rect.left &&
      event.clientX <= rect.right &&
      event.clientY >= rect.top &&
      event.clientY <= rect.bottom;

    if (!alanIcinde || event.target === aday.buton) continue;

    /* Görselin üzerine başka bir dekoratif katman denk gelse bile aynı
       mevcut oyun akışını yalnızca bir kez çalıştır. */
    event.preventDefault();
    event.stopImmediatePropagation();
    aday.buton.click();
    return;
  }
}

document.addEventListener("click", v58GorselButonTamAlanTiklamasi, true);

console.log("V58 hazır: Başla ve devam görsellerinin bütün dikdörtgen alanı tıklanabilir.");

/* =====================================================
   V59 — BOT ÖZEL KART TAKASINI KENDİSİ TAMAMLAR
===================================================== */

function v59BotTakasinaInsanMudahalesiniEngelle(event) {
  if (
    !event.isTrusted ||
    typeof BOT_V1 === "undefined" ||
    !BOT_V1.aktif ||
    aktifOyuncu !== BOT_V1.oyuncu
  ) return;

  const katman = event.target.closest?.("#ozelKartTakasiKatmani");
  if (!katman) return;

  event.preventDefault();
  event.stopPropagation();
  event.stopImmediatePropagation();
}

document.addEventListener("pointerdown", v59BotTakasinaInsanMudahalesiniEngelle, true);
document.addEventListener("click", v59BotTakasinaInsanMudahalesiniEngelle, true);

console.log("V59 hazır: Bot iki takas kartını seçip TAKAS ET düğmesine kendisi basar.");

/* =====================================================
   V60 — SAĞ KONTROL GRUBU / OTOMATİK OYNA / OYUNDAN ÇIK
===================================================== */

const otomatikOynaButonu = document.getElementById("otomatikOynaButonu");
const oyundanCikButonu = document.getElementById("oyundanCikButonu");
window.v78OtomatikOyun = false;

let v60OtomatikOncesiBotAktif = false;
let v60OtomatikOncesiBotOyuncu = 2;

function v60OtomatikOzelKartHavuzunuSec() {
  if (
    !window.v78OtomatikOyun ||
    oyunAsamasi !== "ozel-kart-secimi" ||
    ozelKartSecimKilidi
  ) return false;

  const dedektif = document.getElementById("dedektifZorunluKart");
  if (dedektif && botV1GorunurMu(dedektif)) {
    botV1Bekle(() => {
      if (dedektif.isConnected && !ozelKartSecimKilidi) dedektif.click();
    }, 500, 800);
    return true;
  }

  const kartlar = Array.from(
    document.querySelectorAll('.kapaliOzelKart[data-secildi="hayir"]')
  ).filter(botV1GorunurMu);

  if (!kartlar.length || secilenOzelKartlar.length >= 12) return false;

  botV1Bekle(() => {
    const guncelKartlar = kartlar.filter(kart => kart.isConnected);
    if (!guncelKartlar.length || ozelKartSecimKilidi) return;
    guncelKartlar[Math.floor(Math.random() * guncelKartlar.length)].click();
  }, 420, 720);

  return true;
}

function v60OtomatikButonunuGuncelle() {
  if (!otomatikOynaButonu) return;
  const acik = Boolean(window.v78OtomatikOyun);
  otomatikOynaButonu.textContent = acik ? "⏸" : "▶";
  otomatikOynaButonu.setAttribute("aria-pressed", String(acik));
  otomatikOynaButonu.title = acik
    ? "Otomatik oynamayı durdur"
    : "Otomatik oynamayı başlat";
  otomatikOynaButonu.setAttribute("aria-label", otomatikOynaButonu.title);
}

function v60OtomatikOyunuAyarla(acik) {
  const yeniDurum = Boolean(acik);
  if (yeniDurum === Boolean(window.v78OtomatikOyun)) return;

  if (yeniDurum) {
    v60OtomatikOncesiBotAktif = BOT_V1.aktif;
    v60OtomatikOncesiBotOyuncu = BOT_V1.oyuncu;
    window.v78OtomatikOyun = true;
    BOT_V1.aktif = true;
    BOT_V1.oyuncu = oyunAsamasi === "baslangic-zari" ? zarSirasi : aktifOyuncu;
    BOT_V1.kilit = false;
  } else {
    window.v78OtomatikOyun = false;
    BOT_V1.aktif = v60OtomatikOncesiBotAktif;
    BOT_V1.oyuncu = v60OtomatikOncesiBotOyuncu;
    BOT_V1.kilit = false;
  }

  v60OtomatikButonunuGuncelle();
  botV1EtiketGuncelle();
}

otomatikOynaButonu?.addEventListener("click", event => {
  event.preventDefault();
  event.stopPropagation();
  butonSesiCal();
  v60OtomatikOyunuAyarla(!window.v78OtomatikOyun);
});

/* Otomatik mod açıkken kullanıcı yalnız sağdaki üç kontrol düğmesini
   kullanabilir; masa, kart ve karar pencereleri bot motoruna aittir. */
function v60OtomatikModdaMasaTiklamasiniEngelle(event) {
  if (!window.v78OtomatikOyun || !event.isTrusted) return;
  if (event.target.closest?.("#oyunKontrolButonlari")) return;

  const oyunEtkilesimi = event.target.closest?.(
    "#oynanisEkrani, .cekilenKartKatmani, #ozelKartZarKatmani, " +
    "#acikArtirmaZarKatmani, #ozelKartTakasiKatmani, #eldekiOzelKartKatmani, " +
    "#muzeMuduruKatmani, #muzeMuduruSiralaKatmani, #depoKilidiSecimKatmani"
  );
  if (!oyunEtkilesimi) return;

  event.preventDefault();
  event.stopPropagation();
  event.stopImmediatePropagation();
}

document.addEventListener("pointerdown", v60OtomatikModdaMasaTiklamasiniEngelle, true);
document.addEventListener("click", v60OtomatikModdaMasaTiklamasiniEngelle, true);

function v60AnaMenuyeDon() {
  window.v78OtomatikOyun = false;
  v60OtomatikButonunuGuncelle();

  BOT_V1.aktif = false;
  BOT_V1.oyuncu = 2;
  BOT_V1.kilit = false;
  v37OyunAktif = false;
  v37OyunBaslatiliyor = false;
  oyunAktif = false;
  oyunBaslatiliyor = false;
  oyunAsamasi = "hazirlik";
  kartCekmeKilidi = false;
  ozelKartEfektiAktif = false;
  hedefSeciminiTemizle();
  geciciOyunKatmanlariniTemizle();

  document.querySelectorAll(
    "#secimYazisi, .cekilenBuyukKart, .cekilenKartKatmani, #baslangicZarKatmani, " +
    "#sanatciSecimBanner, #v41SanatciSecimBanner, #v51OyunSonu, " +
    "#v37CopTarayici, #v37GizliSandikSecim, #v41GizliSandikSecim, " +
    "#botKartCekenEl, #botV1Etiket, " +
    ".ortakDesteGorselKarti, .coptekiKart, " +
    ".artanSanatciKarti, .artanSanatciUcanKart, " +
    ".artanOzelKarti, .artanOzelUcanKart, " +
    ".aktifMuzeGuvenligiKarti, .aktifDepoKilidiKarti"
  ).forEach(element => element.remove());

  document.body.classList.remove(
    "v43KartAcik",
    "v45KaziGecisi",
    "v79KartOnizlemeAcik"
  );
  oynanisEkrani.classList.remove("v52SkorHazir");
  oyunMuzik.pause();
  oyunMuzik.volume = 0;

  v37EkranGoster(anaMenu);
  anaMenuMuzik.currentTime = 0;
  anaMenuMuzik.volume = 0;
  anaMenuMuzik.play()
    .then(() => muzikAc(anaMenuMuzik, MUZIK_SESI, 650))
    .catch(() => {});
}

oyundanCikButonu?.addEventListener("click", event => {
  event.preventDefault();
  event.stopPropagation();
  butonSesiCal();
  v60AnaMenuyeDon();
});

v60OtomatikButonunuGuncelle();

console.log("V60 hazır: Ses, otomatik oyna ve ana menüye çık kontrolleri birlikte çalışıyor.");

/* =====================================================
   V88 — OTOMATİK OYUNDA AÇIK ARTIRMA ZARLARI
   Açık artırmanın kendi 1 -> 2 zar sırası vardır. Otomatik modda genel
   BOT oyuncu sahipliğine bakmadan o anda etkin olan tek düğme kullanılır.
===================================================== */

let v88AcikArtirmaZarZamanlayicisi = null;

const v88EskiBotV1AcikArtirma = botV1AcikArtirma;

botV1AcikArtirma = function() {
  const katman = document.getElementById("acikArtirmaZarKatmani");

  if (
    !window.v78OtomatikOyun ||
    !botV1GorunurMu(katman)
  ) {
    if (v88AcikArtirmaZarZamanlayicisi !== null) {
      clearTimeout(v88AcikArtirmaZarZamanlayicisi);
      v88AcikArtirmaZarZamanlayicisi = null;
    }
    return v88EskiBotV1AcikArtirma();
  }

  /* Zaten planlanmış bir otomatik zar tıklaması varsa yenisini üretme. */
  if (v88AcikArtirmaZarZamanlayicisi !== null) {
    return true;
  }

  const siradakiZar = Array.from(
    katman.querySelectorAll('button[data-acik-artirma-oyuncu]')
  ).find(buton => !buton.disabled && botV1GorunurMu(buton));

  /* Zar dönüyor veya sonuç gösteriliyorsa katmanı sahiplenmeye devam et. */
  if (!siradakiZar) {
    return true;
  }

  v88AcikArtirmaZarZamanlayicisi = setTimeout(() => {
    v88AcikArtirmaZarZamanlayicisi = null;

    if (
      !window.v78OtomatikOyun ||
      !katman.isConnected ||
      siradakiZar.disabled ||
      !botV1GorunurMu(siradakiZar)
    ) {
      return;
    }

    siradakiZar.click();
  }, 750);

  return true;
};

console.log("V88 hazır: otomatik açık artırmada iki zar sırayla kendiliğinden atılır.");

/* =====================================================
   V92 — OTOMATİK MODDA SONRAKİ OYUNA GEÇ
===================================================== */

function v92OtomatikOyunSonuPaneliniYonet() {
  if (!window.v78OtomatikOyun) return false;

  const panel = document.getElementById("v51OyunSonu");
  if (!botV1GorunurMu(panel)) return false;

  const buton = panel.querySelector("button.v37Onay");
  if (!buton) return true;

  const metin = String(buton.textContent || "")
    .toLocaleUpperCase("tr-TR")
    .trim();

  if (
    !metin.includes("SONRAKİ OYUN") &&
    !metin.includes("OTURUMU BİTİR")
  ) return true;

  if (buton.dataset.v92OtomatikPlanlandi === "evet") {
    return true;
  }

  buton.dataset.v92OtomatikPlanlandi = "evet";

  /* Sonuç okunabilsin; ardından paneldeki tek ilerleme düğmesine bas. */
  setTimeout(() => {
    if (
      window.v78OtomatikOyun &&
      panel.isConnected &&
      buton.isConnected &&
      !buton.disabled
    ) {
      buton.click();
    }
  }, 2200);

  return true;
}

console.log("V92 hazır: otomatik mod oyun sonu panelinden sonraki oyuna geçer.");
