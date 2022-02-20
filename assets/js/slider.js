let videos = [
  "0i9EY7sArus",
  "dHgRol6ouTg",
  "ZM728QSC6xs",
  "Pi8deuZHnkc",
  "7SvNgdKMnz8",
  "3x8gjOx898g",
  "8Nlx3JYy05w",
  "8H0Gzk3_kXU",
  "Iq7QW_zCWfA",
];

var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 20,
  allowTouchMove: true,
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3000,
  },
});

let swiperslides = document.getElementsByClassName("swiper-slide");
let videopopup = document.getElementsByClassName("videoPopup");
let closepopup = document.getElementsByClassName("closePopup");
let iframe = document.getElementById("slideIFrame");
for (let i = 0; i < swiperslides.length; i++) {
  swiperslides[i].addEventListener("click", () => {
    iframe.src = `https://www.youtube.com/embed/${videos[i]}`;
    videopopup[0].style.display = "block";
  });
}

for (let i = 0; i < closepopup.length; i++) {
  closepopup[i].addEventListener("click", () => {
    videopopup[0].style.display = "none";
    iframe.src = "";
  });
}

videopopup[0].addEventListener("click", () => {
  videopopup[0].style.display = "none";
  iframe.src = "";
});

var slide = document.querySelector(".slide");
var section_7 = document.querySelector(".section-7");
var over = document.querySelector(".over");

window.addEventListener("resize", () => {
  if (window.innerWidth > 1000) {
    var dis = (window.innerWidth - section_7.offsetWidth) / 2 + 265;
    slide.style.width = `${window.innerWidth - dis}px`;
  } else if (window.innerWidth > 576) {
    slide.style.width = `calc(100% - 40px)`;
  } else {
    slide.style.width = `calc(100% - 20px)`;
  }
});

if (window.innerWidth > 1000) {
  var dis = (window.innerWidth - section_7.offsetWidth) / 2 + 265;
  slide.style.width = `${window.innerWidth - dis}px`;
} else if (window.innerWidth > 576) {
  slide.style.width = `calc(100% - 40px)`;
} else {
  slide.style.width = `calc(100% - 20px)`;
}
