// ============================= VIDEO POUP ==================================== //
let bigPlay = document.querySelector(".bigPlay");
let smallPlay = document.querySelector(".smallPlay");
let leftText = document.querySelector(".leftText");
let rightText = document.querySelector(".rightText");
let video = document.querySelector("video");

function play() {
  video.autoplay = "true";
  video.load();

  video.controls = "true";

  leftText.style.opacity = "0";
  rightText.style.opacity = "0";

  bigPlay.style.display = "none";
  smallPlay.style.display = "none";

  video.onended = function () {
    bigPlay.style.display = "block";
    video.removeAttribute("controls");
    s;
    // leftText.style.opacity = "1";
    // rightText.style.opacity = "1";
  };
}

function play2() {
  video.autoplay = "true";
  video.load();

  video.controls = "true";

  leftText.style.opacity = "0";
  rightText.style.opacity = "0";

  bigPlay.style.display = "none";
  smallPlay.style.display = "none";

  video.onended = function () {
    video.removeAttribute("controls");
    smallPlay.style.display = "block";
    // leftText.style.opacity = "1";
    // rightText.style.opacity = "1";
  };
}

// ================= CREATE ACCARDION MAP ========================== //

let ul = document.querySelector(".accardion_section .ul");

// show and hide accardion Function //
// window.addEventListener("load", () => {
//   if (ul.children[0].classList.length === 1) {
//     ul.children[0].classList.add("active");
//     ul.children[0].firstElementChild.lastElementChild.children[0].style.transform =
//       "rotate(0deg)";

//     ul.children[0].lastElementChild.style.height = "192px";
//   }
// });

// let height = null;
// const showAccardion = (id) => {
//   height = ul.children[id - 1].lastElementChild.scrollHeight;

//   ul.children[id - 1].classList.toggle("active");

//   if (ul.children[id - 1].classList.contains("active")) {
//     ul.children[id - 1].lastElementChild.style.height = height + "px";

//     ul.children[
//       id - 1
//     ].firstElementChild.lastElementChild.children[0].style.transform =
//       "rotate(0deg)";
//   } else {
//     ul.children[
//       id - 1
//     ].firstElementChild.lastElementChild.children[0].style.transform =
//       "rotate(-90deg)";

//     ul.children[id - 1].lastElementChild.style.height = "0px";
//   }
// };

// height = ul.children[0].lastElementChild.scrollHeight;

// ul.children[0].classList.toggle("active");

// if (ul.children[0].classList.contains("active")) {
//   ul.children[0].lastElementChild.style.height = height + "px";

//   ul.children[0].firstElementChild.lastElementChild.children[0].style.transform =
//     "rotate(0deg)";
// } else {
//   ul.children[0].firstElementChild.lastElementChild.children[0].style.transform =
//     "rotate(-90deg)";

//   ul.children[0].lastElementChild.style.height = "0px";
// }

// ====================== BTN-BURGER ===================== //

let line = document.querySelector("nav .line");
let navBlock = document.querySelector("nav .link ul");

line.addEventListener("click", () => {
  navBlock.classList.toggle("toggle");
  line.classList.toggle("open");
});

window.addEventListener("scroll", () => {
  navBlock.classList.remove("toggle");
  line.classList.remove("open");
});

// * rasmni yuklab olishni oldini olish uchun yozilgan js code
let allImages = document.querySelectorAll("img");
allImages.forEach((value) => {
  value.oncontextmenu = (e) => {
    e.preventDefault();
  };
});

let spinnerWrapper = document.querySelector(".font_loader");
window.onload = () => {
  spinnerWrapper.parentElement.removeChild(spinnerWrapper);
};
