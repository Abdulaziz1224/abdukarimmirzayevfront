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
    smallPlay.style.display = "block";
  };
}

// ================= CREATE ACCARDION MAP ========================== //

let ul = document.querySelector(".accardion_section .ul");

Array.isArray(accar)
  ? accar.map((value) => {
      ul.innerHTML += `
    <li class="li" >
                     <div class="title_accardion_top" onclick = "showAccardion(${
                       value.id
                     })">
                                     <div class="title_accardion_left">
                                   <span class="id">0${value.id}</span>
                                   <p class="title">${value.title}</p>
                      </div>
                    <div class="title_accardion_right">
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
                        d="M8.99998 12.172L14.364 6.808L15.778 8.222L7.99998 16L0.221985 8.222L1.63598 6.808L6.99998 12.172V0H8.99998V12.172Z"
                        fill="black"
                        />
                        </svg>
                        </div>
                        </div>
                  <div class="text_accardion-bottom">
                  ${value.post.map((post) => `<p>${post.p}</p>`).join("")}
                    </div>
                </li>
        `;
    })
  : "";

// show and hide accardion Function //
window.addEventListener("load", () => {
  if (ul.children[0].classList.length === 1) {
    ul.children[0].classList.add("active");
    ul.children[0].firstElementChild.lastElementChild.children[0].style.transform =
      "rotate(0deg)";

    ul.children[0].lastElementChild.style.height = "192px";
  }
});

let height = null;
const showAccardion = (id) => {
  height = ul.children[id - 1].lastElementChild.scrollHeight;

  ul.children[id - 1].classList.toggle("active");

  if (ul.children[id - 1].classList.contains("active")) {
    ul.children[id - 1].lastElementChild.style.height = height + "px";

    ul.children[
      id - 1
    ].firstElementChild.lastElementChild.children[0].style.transform =
      "rotate(0deg)";
  } else {
    ul.children[
      id - 1
    ].firstElementChild.lastElementChild.children[0].style.transform =
      "rotate(-90deg)";

    ul.children[id - 1].lastElementChild.style.height = "0px";
  }
};

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
setTimeout(() => {
  spinnerWrapper.parentElement.removeChild(spinnerWrapper);
}, 3000);
