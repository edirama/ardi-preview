// Navbar
const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");
const navbarItems = document.querySelectorAll(".nabar__item");

const hideNavbar = function () {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
};

menu.addEventListener("click", hideNavbar);
navbarItems.forEach((navbarItem) =>
  navbarItem.addEventListener("click", hideNavbar)
);

// Section Intro
const chevronDown = document.querySelector(".chevron-down");
const cube1 = document.querySelector(".cube1");
const cube2 = document.querySelector(".cube2");
const cube3 = document.querySelector(".cube3");
const sectionIntroText = document.querySelector(".section__intro--text");

window.addEventListener("scroll", function () {
  const value = window.scrollY;

  chevronDown.style.marginTop = value * 0.88 + "px";
  cube1.style.marginLeft = -value * 1 + "px";
  cube2.style.marginTop = -value * 1 + "px";
  cube3.style.marginRight = -value * 1 + "px";
  sectionIntroText.style.marginBottom = value * 1.5 + "px";
});

// Projects
// likes
const hearts = document.querySelectorAll(".fa-heart");

hearts.forEach(function (heart) {
  heart.addEventListener("click", function () {
    heart.classList.toggle("liked");
  });
});

// shares
const shares = document.querySelectorAll(".fa-share");
const btnCloseModal = document.querySelector(".modal__close--btn");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

shares.forEach((btn) => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// Copy link
const modalCopyBtn = document.querySelector(".modal__copy--btn");
const copyText = document.querySelector("#modal__copy--text");
const copy = document.querySelector(".fa-copy");

modalCopyBtn.addEventListener("click", function () {
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
  copy.classList.replace("fa-copy", "fa-check");

  setTimeout(function () {
    copy.classList.replace("fa-check", "fa-copy");
  }, 1000);
});

// Send email
const contactForm = document.getElementById("contact__form");
const fName = document.getElementById("fName");
const lName = document.getElementById("lName");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");
const contactMessage = document.getElementById("contact--message");

const sendEmail = function (e) {
  e.preventDefault();

  contactMessage.classList.remove("color-red");
  contactMessage.classList.remove("color-blue");
  contactMessage.classList.add("normal-color");
  contactMessage.innerHTML =
    "Mesazhi ëshë duke u dërguar <i class='fa-solid fa-spinner'></i>";

  if (
    fName.value === "" ||
    lName.value === "" ||
    email.value === "" ||
    subject.value === "" ||
    message.value === ""
  ) {
    contactMessage.classList.remove("normal-color");
    contactMessage.classList.add("color-red");

    contactMessage.textContent = "Ju lutem plotësoni të gjitha fushat 📩";
  } else {
    // serviceID - templateID - #form - publicKey
    emailjs
      .sendForm(
        "service_o6gg2zs",
        "template_ma6eeco",
        "#contact__form",
        "LVLAvkijYcat08N3a"
      )
      .then(
        () => {
          contactMessage.classList.remove("normal-color");
          contactMessage.classList.add("color-blue");
          contactMessage.textContent = "U dërgua ✅";

          setTimeout(() => {
            contactMessage.textContent = "";
          }, 5000);
        },
        () => {
          contactMessage.classList.remove("normal-color");
          contactMessage.classList.add("color-red");
          contactMessage.textContent =
            "Mesazhi nuk u dërgua, probleme me serverin ❌";

          setTimeout(() => {
            contactMessage.textContent = "";
          }, 5000);
        }
      );
    fName.value = "";
    lName.value = "";
    email.value = "";
    subject.value = "";
    message.value = "";
  }
};

contactForm.addEventListener("submit", sendEmail);
