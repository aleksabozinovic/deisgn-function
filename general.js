const getAQuoteBtn = document.querySelector(".section--container a");
const closePopup = document.querySelector(".close__popup");
const popupForm = document.querySelector(".pop-up__form");
const burger = document.querySelector(".burger");
const navCol = document.querySelector(".nav__col2");
const faq1 = document.querySelector(".faq1");
const faqBody1 = document.querySelector(".faq-body1");
const faq2 = document.querySelector(".faq2");
const faqBody2 = document.querySelector(".faq-body2");
const faq3 = document.querySelector(".faq3");
const faqBody3 = document.querySelector(".faq-body3");
// FAQ

faq1.addEventListener("click", () => {
  faqBody1.classList.toggle("active");
});

faq2.addEventListener("click", () => {
  faqBody2.classList.toggle("active");
});
faq3.addEventListener("click", () => {
  faqBody3.classList.toggle("active");
});

// NAVIGATION

burger.addEventListener("click", () => {
  navCol.classList.toggle("active");
});

// POPUP
getAQuoteBtn.addEventListener("click", () => {
  popupForm.classList.add("active");
});

closePopup.addEventListener("click", () => {
  popupForm.classList.remove("active");
});
