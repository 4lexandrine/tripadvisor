// document.addEventListener("DOMContentLoaded", () => {
document.querySelector(".btn-sign-up").addEventListener("click", () => {
  document.querySelector(".popup").classList.toggle("popup-signup");
  console.log("ok");
});

document.querySelector(".close").addEventListener("click", () => {
  document.querySelector(".popup").classList.toggle("popup-signup");
});

// window.addEventListener("scroll", () => {
//   if (window.scrollY >= 250) {
//     document.querySelector(".list-menu-sticky").classList.toggle("sticky-menu");
//   }
// });
// });
