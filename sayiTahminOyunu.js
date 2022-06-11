"use strict";

document.querySelector(".mesaj"); //index.html'den ""<p class="mesaj">Start guessing...</p>"" kod satirini döndürmüs olduk. cünkü bu satirin sinifi ".mesaj" //
document.querySelector(".mesaj").textContent; // textContent yazarak bu kod satirinin text kismini döndürdük. //

// Fonksiyonlar //

const textDegistir = function (hedefText, yeniMesaj) {
  document.querySelector(hedefText).textContent = yeniMesaj;
};

const numStyleDegistir = function (yeniWidth, yeniFontSize) {
  document.querySelector(".sayi11").style.width = yeniWidth;
  document.querySelector(".sayi11").style.fontSize = yeniFontSize;
};

const bodyStyleDegistir = function (yeniBGStyle) {
  document.querySelector("body").style.backgroundColor = yeniBGStyle;
};

//

let dogruSayi = Math.floor(Math.random() * 101);
console.log(dogruSayi);

textDegistir(".skor", 100);

document.querySelector(".tahmin1").value; //secilen sinifin box degerini döndürür.//

document.querySelector(".yenile1").addEventListener("click", function () {
  textDegistir(".mesaj", "🧐 Bir tahmin giriniz");
  textDegistir(".sayi11", "?");
  textDegistir(".skor", 100);
  bodyStyleDegistir("#222");
  numStyleDegistir("15rem", "6rem");
  dogruSayi = Math.floor(Math.random() * 20) + 1;
  document.querySelector(".tahmin1").value = "";
});

let tavansayi = 100;
let tabansayi = 1;
document.querySelector(".check").addEventListener("click", function () {
  const tahmin = Number(document.querySelector(".tahmin1").value);
  const skor = Number(document.querySelector(".skor").textContent);
  const rekor = Number(document.querySelector(".rekorskor").textContent);
  if (document.querySelector(".mesaj").textContent != "🤩 Bildiniz!") {
    if (Boolean(document.querySelector(".tahmin1").value)) {
      if (document.querySelector(".skor").textContent <= 0) {
        textDegistir(".mesaj", "😓 Kaybettiniz...");
      } else if (tahmin == dogruSayi) {
        textDegistir(".sayi11", dogruSayi);
        textDegistir(".mesaj", "🤩 Bildiniz!");
        bodyStyleDegistir("#60b347");
        numStyleDegistir("30rem", "12rem");
        if (skor > rekor) {
          document.querySelector(".rekorskor").textContent = Number(
            document.querySelector(".skor").textContent
          );
        }
      } else if (tahmin > dogruSayi) {
        textDegistir(
          ".mesaj",
          `🧐 ${tabansayi} ile ${tahmin} arasinda bir sayi giriniz.`
        );
        if (tahmin >= tavansayi) {
          textDegistir(".mesaj", `🧐 Yanlis aralikta sayi girdiniz.`);
          return {};
        }
        tavansayi = tahmin;
        document.querySelector(".skor").textContent -= 10;
      } else {
        textDegistir(
          ".mesaj",
          `🧐 ${tahmin} ile ${tavansayi} arasinda bir sayi giriniz.`
        );
        if (tahmin <= tabansayi) {
          textDegistir(".mesaj", `🧐 Yanlis aralikta sayi girdiniz.`);
          return {};
        }
        tabansayi = tahmin;
        document.querySelector(".skor").textContent -= 10;
      }
    } else {
      textDegistir(".mesaj", "😅 Sayi girmediniz");
    }
  }
});
