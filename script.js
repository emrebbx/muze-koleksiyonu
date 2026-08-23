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
    dosya: "images/dunya-takimi.png"
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
    dosya: "images/muze-guvenligi.png"
  },

  {
    id: "muze-muduru",
    tip: "ozel",
    dosya: "images/muze-muduru.png"
  },

  {
    id: "muzede-deprem",
    tip: "ozel",
    dosya: "images/muzede-deprem.png"
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
   DEPO YUVASI DOLU MU?
===================================================== */

function depoYuvasiDoluMu(
  yuvaId
) {

  return Boolean(
    document.querySelector(
      `.depodakiEserKarti[data-yuva-id="${yuvaId}"]`
    )
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


  const digerKartlar =
    karistir(
      ozelKartlar.filter(
        (
          kart
        ) =>
          kart.id !==
          "dedektif-sorusturmasi"
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
    ÇÖP GÖRSELLERİNİ DE
    SONRA PART 5/6'DA
    YENİDEN SENKRONLAYACAĞIZ.
  */
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


  ekstraKartCekmeSayisi +=
    kazanilanHak;


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

      genelSonuc.textContent =
        "EŞİTLİK — TEKRAR ZAR ATILACAK";


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


    genelSonuc.textContent =
      `${kazanan}. OYUNCU AÇIK ARTIRMAYI KAZANDI`;


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

function muzedeDepremSonrasiOturumuSifirla() {

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
    "DEPREM OTURUMU BİTİRDİ — YENİ OYUN BAŞLIYOR"
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
      hedef.disabled
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

    "kartOnizlemeKatmani"
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
   EKRAN GEÇİŞLERİ — PAKET 1
===================================================== */

let oyunBaslatiliyor =
  false;

let oyunAktif =
  false;


/* =========================
   TEK EKRAN GÖSTER
========================= */

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


/* =========================
   MÜZİĞİ ANINDA DURDUR
========================= */

function muzigiTamDurdur(
  muzik
) {

  if (
    !muzik
  ) {

    return;
  }


  muzik.pause();

  muzik.currentTime =
    0;

  muzik.volume =
    0;
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


    if (
      oyunAktif ||
      oyunBaslatiliyor
    ) {

      return;
    }


    butonSesiCal();


    /* OYUN MÜZİĞİ KESİNLİKLE ÇALMASIN */

    muzigiTamDurdur(
      oyunMuzik
    );


    ekranGoster(
      anaMenu
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

    /*
      ÇİFT TIKLAMA /
      OYUN ÜSTÜNE OYUN
      BAŞLATMAYI ENGELLE
    */

    if (
      oyunBaslatiliyor ||
      oyunAktif
    ) {

      return;
    }


    oyunBaslatiliyor =
      true;


    butonSesiCal();


    /*
      ÖNCE MENÜ MÜZİĞİ BİTSİN.

      ESKİ KODDA OYUN MÜZİĞİ
      ÖNCE BAŞLIYORDU VE 1 SANİYE
      İKİ MÜZİK BİRLİKTE ÇALIYORDU.
    */

    await muzikKapat(
      anaMenuMuzik,
      700
    );


    muzigiTamDurdur(
      anaMenuMuzik
    );


    /* =========================
       YENİ OYUN VERİLERİ
    ========================= */

    ilkOyunDurumunuHazirla();


    /* =========================
       SADECE OYNANIŞ EKRANI
    ========================= */

    ekranGoster(
      oynanisEkrani
    );


    /* =========================
       OYUN MÜZİĞİ
    ========================= */

    oyunMuzik.currentTime =
      0;

    oyunMuzik.volume =
      0;


    try {

      await oyunMuzik.play();


      muzikAc(
        oyunMuzik,
        MUZIK_SESI,
        1500
      );

    } catch (
      hata
    ) {

      console.log(
        "Oyun müziği başlatılamadı:",
        hata
      );
    }


    genelDokunmaUyumlulugunuKur();


    oyunAktif =
      true;

    oyunBaslatiliyor =
      false;


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
      PAKET 7'DE GERÇEK
      NASIL OYNANIR EKRANI
      BAĞLANACAK.

      ŞİMDİLİK MÜZİĞE
      VE OYUNA DOKUNMUYOR.
    */

    console.log(
      "Nasıl Oynanır ekranı daha sonra bağlanacak."
    );
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
