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


/* =========================
   20 ÖZEL KART
========================= */

const ozelKartlar = [
  { id: "acik-artirma", dosya: "images/acik-artirma.png" },
  { id: "arkeolojik-kazi", dosya: "images/arkeolojik-kazi.png" },
  { id: "arti-iki-kart", dosya: "images/arti-iki-kart.png" },
  { id: "dedektif-sorusturmasi", dosya: "images/dedektif-sorusturmasi.png" },
  { id: "depo-kilidi", dosya: "images/depo-kilidi.png" },
  { id: "dunya-takimi", dosya: "images/dunya-takimi.png" },
  { id: "eser-calindi", dosya: "images/eser-calindi.png" },
  { id: "eser-sahteydi", dosya: "images/eser-sahteydi.png" },
  { id: "fransa-takimi", dosya: "images/fransa-takimi.png" },
  { id: "gece-nobeti", dosya: "images/gece-nobeti.png" },
  { id: "gizli-sandik", dosya: "images/gizli-sandik.png" },
  { id: "hollanda-takimi", dosya: "images/hollanda-takimi.png" },
  { id: "klasikler-takimi", dosya: "images/klasikler-takimi.png" },
  { id: "muze-guvenligi", dosya: "images/muze-guvenligi.png" },
  { id: "muze-muduru", dosya: "images/muze-muduru.png" },
  { id: "muzede-deprem", dosya: "images/muzede-deprem.png" },
  { id: "muzede-kaza", dosya: "images/muzede-kaza.png" },
  { id: "ozel-kart-takasi", dosya: "images/ozel-kart-takasi.png" },
  { id: "restorasyon", dosya: "images/restorasyon.png" },
  { id: "yeni-sergi", dosya: "images/yeni-sergi.png" }
];


/* =========================
   OYUN DURUMU
========================= */

let aktifOyuncu = 1;

let oyuncu1Secimleri = [];
let oyuncu2Secimleri = [];

let secimKilidi = false;

let onizlemeAcik = false;

let secilenOzelKartlar = [];
let artanOzelKartlar = [];

let ozelKartSecimKilidi = false;


/* =========================
   SES
========================= */

const MUZIK_SESI = 0.22;
const BUTON_SESI = 0.65;

const anaMenuMuzik =
  new Audio("sounds/ana-menu-muzik.mp3");

const oyunMuzik =
  new Audio("sounds/oyun-muzik.mp3");

anaMenuMuzik.loop = true;
oyunMuzik.loop = true;

anaMenuMuzik.volume = 0;
oyunMuzik.volume = 0;

const butonTik =
  new Audio("sounds/buton-tik.mp3");

butonTik.volume = BUTON_SESI;


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
   RANDOM KARIŞTIRMA
========================= */

function karistir(dizi) {

  const yeniDizi =
    [...dizi];

  for (
    let i = yeniDizi.length - 1;
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

    }
  );
}


/* =========================
   SEÇİM YAZISI
========================= */

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

    oynanisEkrani.appendChild(
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


  if (!yazi) return;


  gsap.to(
    yazi,
    {
      opacity: 0,

      duration: 0.3
    }
  );
}


/* =========================
   GSAP DESTE SHUFFLE
========================= */

function gsapDesteKaristir(
  desteKartlari
) {

  return new Promise(
    (resolve) => {

      const solDeste =
        desteKartlari.slice(0, 6);

      const sagDeste =
        desteKartlari.slice(6, 12);


      desteKartlari.forEach(
        (kart, index) => {

          gsap.set(
            kart,
            {
              x:
                index * 1.2,

              y:
                index * -0.35,

              rotation: 0,

              scale: 1,

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
            defaults: {
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


      tl.to(
        solDeste,
        {
          x:
            (index) =>
              -72 +
              index * 1.5,

          y:
            (index) =>
              8 -
              index * 0.5,

          rotation: -8,

          scaleY: 0.96,

          duration: 0.35
        }
      );


      tl.to(
        sagDeste,
        {
          x:
            (index) =>
              72 +
              index * 1.5,

          y:
            (index) =>
              8 -
              index * 0.5,

          rotation: 8,

          scaleY: 0.96,

          duration: 0.35
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
            x:
              -6 +
              i * 2,

            y:
              -i * 0.8,

            rotation: -1.5,

            duration: 0.18,

            ease:
              "power1.out"
          },
          "riffle+=" +
          (
            i * 0.055
          )
        );


        tl.to(
          sagKart,
          {
            x:
              6 -
              i * 2,

            y:
              -i * 0.8,

            rotation: 1.5,

            duration: 0.18,

            ease:
              "power1.out"
          },
          "riffle+=" +
          (
            i * 0.055 +
            0.028
          )
        );

      }


      tl.to(
        desteKartlari,
        {
          x:
            (index) =>
              index * 0.9,

          y:
            (index) =>
              index * -0.28,

          rotation: 0,

          scaleY: 1,

          duration: 0.4,

          stagger: 0.012,

          ease:
            "back.out(1.25)"
        },
        ">"
      );

    }
  );
}


/* =========================
   SANATÇI KARTLARINI KARIŞTIR
========================= */

async function sanatciKartlariniKaristir() {

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


  secimKilidi = true;

  kart.dataset.secildi =
    "evet";


  gsap.to(
    kart,
    {
      scaleX: 0,

      duration: 0.2,

      ease:
        "power2.in",

      onComplete: () => {

        kart.src =
          sanatci.dosya;


        gsap.to(
          kart,
          {
            scaleX: 1,

            duration: 0.22,

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
        9999,

      pointerEvents:
        "none",

      opacity:
        "1"
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
                5,

              opacity:
                "1",

              pointerEvents:
                "auto",

              cursor:
                "pointer",

              objectFit:
                "fill",

              userSelect:
                "none",

              WebkitUserDrag:
                "none"
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


/* =========================
   KALAN 6 SANATÇIYI
   ARTAN YUVAYA GÖNDER
========================= */

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


          oynanisEkrani.appendChild(
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


/* =========================
   ÖZEL KART SEÇİMİNİ BAŞLAT
========================= */

function ozelKartSeciminiBaslat() {

  secilenOzelKartlar = [];

  artanOzelKartlar = [];

  ozelKartSecimKilidi = false;


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


  dedektifSecimAlani.appendChild(
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

      ease:
        "power2.out"
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


/* =========================
   KALAN ÖZEL KARTLARI
   ARTAN YUVAYA GÖNDER
========================= */

function artanOzelKartlariYuvayaGonder() {

  const kalanKartlar =
    Array.from(
      document.querySelectorAll(
        ".kapaliOzelKart"
      )
    );


  artanOzelKartlar =
    kalanKartlar.map(
      (kart) => ({
        id:
          kart.dataset.id,

        dosya:
          kart.dataset.dosya
      })
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
            index
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


/* =========================
   ÖZEL KART SEÇİMİNİ BİTİR
========================= */

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

    },
    900
  );
}


/* =========================
   KART ÖNİZLEME
========================= */

function kartOnizlemeAc(
  kaynakKart
) {

  if (
    onizlemeAcik
  ) {
    return;
  }


  onizlemeAcik = true;


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
        10001,

      opacity:
        "1",

      cursor:
        "pointer",

      userSelect:
        "none",

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

    if (
      !onizlemeAcik
    ) {
      return;
    }


    onizlemeAcik = false;


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

        duration: 0.45,

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


/* =========================
   SANATÇI SEÇİM DURUMU
========================= */

function secimDurumunuKontrolEt() {

  if (
    aktifOyuncu === 1 &&
    oyuncu1Secimleri.length ===
    3
  ) {

    aktifOyuncu = 2;


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

    secimKilidi = true;


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


/* =========================
   DEVAM
========================= */

devamButonu.addEventListener(
  "click",
  () => {

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
