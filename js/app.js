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
