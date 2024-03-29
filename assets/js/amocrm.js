var loadingBtns = document.querySelectorAll("#loading-btn");
let counter = 0;
var phones = document.querySelectorAll(".phoneCopy");

var nameInputs = document.querySelectorAll(".nameCopy");
var phoneInputs = document.querySelectorAll(".phoneCopy");

function disableScroll(scrolltop) {
  over.onscroll = function () {
    window.scrollTo(scrolltop);
  };
}

function enableScroll() {
  window.onscroll = function () {};
}

function clearInput() {
  nameInputs[0].value = "";
  phoneInputs[0].value = "";
  nameInputs[1].value = "";
  phoneInputs[1].value = "";
  nameInputs[2].value = "";
  phoneInputs[2].value = "";
}

function numberCheck(phone) {
  let num = phone.value;

  if (num.length > 13) {
    num = num.slice(0, -1);
  }

  for (let i = 0; i < num.length; i++) {
    let count = 0;
    if (num[i] == "+") count++;
    if (num[i] == "0") count++;
    if (num[i] == "1") count++;
    if (num[i] == "2") count++;
    if (num[i] == "3") count++;
    if (num[i] == "4") count++;
    if (num[i] == "5") count++;
    if (num[i] == "6") count++;
    if (num[i] == "7") count++;
    if (num[i] == "8") count++;
    if (num[i] == "9") count++;
    if (count < 1) {
      num = num.slice(0, -1);
    }
  }

  if (num.length == 12 && num[0] !== "+") {
    num = "+" + num;
  }

  phone.value = num;
}

setTimeout(() => {
  phones[0].addEventListener("input", () => {
    numberCheck(phones[0]);
  });
  phones[1].addEventListener("input", () => {
    numberCheck(phones[1]);
  });
  phones[2].addEventListener("input", () => {
    numberCheck(phones[2]);
  });
}, 1000);

function removeClass() {
  setTimeout(() => {
    loadingBtns[0].classList.remove("loading");
    loadingBtns[1].classList.remove("loading");
    loadingBtns[2].classList.remove("loading");
  }, 300);
}

function showToast(text) {
  removeClass();
  Toastify({
    text: text,
    duration: 3000,
    style: {
      background:
        "linear-gradient(to right, rgb(255, 95, 109), rgb(255, 195, 113))",
      fontFamily: "SF Pro Display",
      fontSize: "16px",
      fontWeigth: "normal",
    },
  }).showToast();
}

function checkAndSend1(name, tel) {
  if (name.length === 0 && tel.length === 0) {
    showToast("Ismingizni va telefon raqamingizni kiriting.");
  } else {
    if (name.length === 0) {
      showToast("Ismingizni kiriting.");
    }
    if (tel.length === 0) {
      showToast(
        "Telefon raqamingizni quyidagi korinishlarda kiriting : +998912345678 991234567"
      );
    }
  }
  if (name.length < 3 && !(name.length === 0)) {
    showToast("Ismingiz kamida 3ta harf bolishi kerak.");
  } else if (tel.length < 9 && !(tel.length === 0)) {
    showToast(
      "Telefon raqamingizni quyidagi korinishlarda kiriting : +998912345678 991234567"
    );
  }
  if (name.length > 2 && tel.length >= 9) {
    const data = {
      name,
      tel,
    };

    if (String(localStorage.getItem(tel)) != tel) {
      fetch("https://www.abdukarimmirzayev.com/api/v1/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          for (let i = 0; i < loadingBtns.length; i++) {
            loadingBtns[i].classList.remove("loading");
          }
          if (response.status === 200) {
            counter++;
            localStorage.setItem("tel", tel);
            clearInput();

            if (window.innerWidth > 576) {
              var modal = document.querySelector(".confirmMobile-continer");
              modal.style.display = "flex";
            } else {
              var modal = document.querySelector(".confirmWeb-continer");
              modal.style.display = "flex";
            }

            var modal = document.querySelector(".signUpMobil-continer");
            modal.style.display = "none";
            var modal = document.querySelector(".signUpWeb-continer");
            modal.style.display = "none";
          }
        })
        .catch((error) => {
          for (let i = 0; i < loadingBtns.length; i++) {
            loadingBtns[i].classList.remove("loading");
          }
          console.log("error");
        });
    } else {
      for (let i = 0; i < loadingBtns.length; i++) {
        loadingBtns[i].classList.remove("loading");
      }
      if (window.innerWidth > 576) {
        var modal = document.querySelector(".confirmMobile-continer");
        modal.style.display = "flex";
      } else {
        var modal = document.querySelector(".confirmWeb-continer");
        modal.style.display = "flex";
      }
    }
  }
}

function checkAndSend2(name, tel) {
  if (name.length === 0 && tel.length === 0) {
    showToast("Ismingizni va telefon raqamingizni kiriting.");
  } else {
    if (name.length === 0) {
      showToast("Ismingizni kiriting.");
    }
    if (tel.length === 0) {
      showToast(
        "Telefon raqamingizni quyidagi korinishlarda kiriting : +998912345678 991234567"
      );
    }
  }
  if (name.length < 3 && !(name.length === 0)) {
    showToast("Ismingiz kamida 3ta harf bolishi kerak.");
  } else if (tel.length < 9 && !(tel.length === 0)) {
    showToast(
      "Telefon raqamingizni quyidagi korinishlarda kiriting : +998912345678  991234567"
    );
  }
  if (name.length > 2 && tel.length >= 9) {
    const data = {
      name,
      tel,
    };

    if (String(localStorage.getItem("tel")) != tel) {
      fetch("https://www.abdukarimmirzayev.com/api/v1/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          for (let i = 0; i < loadingBtns.length; i++) {
            loadingBtns[i].classList.remove("loading");
          }
          if (response.status === 200) {
            counter++;
            localStorage.setItem("tel", tel);

            Toastify({
              text: `Siz muvaffaqiyatli ro‘yxatdan o‘tdingiz. Siz bilan yaqin orada
          konsultantimiz bog‘lanadi. Kursimizda ko‘rishguncha!`,
              duration: 3000,
              style: {
                background:
                  "linear-gradient(to right, rgb(0, 176, 155), rgb(150, 201, 61))",
                fontFamily: "SF Pro Display",
                fontSize: "16px",
                fontWeigth: "normal",
              },
            }).showToast();
            clearInput();
          }
        })
        .catch((error) => {
          for (let i = 0; i < loadingBtns.length; i++) {
            loadingBtns[i].classList.remove("loading");
          }
        });
    } else {
      setTimeout(() => {
        for (let i = 0; i < loadingBtns.length; i++) {
          loadingBtns[i].classList.remove("loading");
        }
      }, 300);
      Toastify({
        text: `Siz muvaffaqiyatli ro‘yxatdan o‘tdingiz. Siz bilan yaqin orada
          konsultantimiz bog‘lanadi. Kursimizda ko‘rishguncha!`,
        duration: 3000,
        style: {
          background:
            "linear-gradient(to right, rgb(0, 176, 155), rgb(150, 201, 61))",
          fontFamily: "SF Pro Display",
          fontSize: "16px",
          fontWeigth: "normal",
        },
      }).showToast();
    }
  }
}

function descModalSend() {
  disableScroll(over.scrollTop);
  var name = document.querySelector("#name-modal-desc").value;
  var tel = document.querySelector("#phone-modal-desc").value;
  console.log(over);

  checkAndSend1(name, tel);
}

function mobileModalSend() {
  var name = document.querySelector("#name-modal-mobile").value;
  var tel = document.querySelector("#phone-modal-mobile").value;
  checkAndSend1(name, tel);
}

function send() {
  var name = document.querySelector("#name").value;
  var tel = document.querySelector("#phone").value;

  checkAndSend2(name, tel);
}

function close1() {
  var modal = document.querySelector(".confirmMobile-continer");
  modal.style.display = "none";

  clearInput();
}
function close2() {
  var modal = document.querySelector(".confirmWeb-continer");
  modal.style.display = "none";
  clearInput();
}
function close3() {
  var modal = document.querySelector(".signUpWeb-continer");
  modal.style.display = "none";

  clearInput();
}
function close4() {
  var modal = document.querySelector(".signUpMobil-continer");
  modal.style.display = "none";

  clearInput();
}

function signup() {
  if (window.innerWidth > 576) {
    var modal = document.querySelector(".signUpWeb-continer");
    modal.style.display = "flex";
  } else {
    var modal = document.querySelector(".signUpMobil-continer");
    modal.style.display = "flex";
  }
}

for (let i = 0; i < loadingBtns.length; i++) {
  loadingBtns[i].addEventListener("click", () => {
    loadingBtns[i].classList.add("loading");
  });
}
