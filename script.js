let navmenulinks = document.querySelectorAll(".navmenu a");

function navmenuScrollspy() {
  navmenulinks.forEach((navmenulink) => {
    if (!navmenulink.hash) return;
    let section = document.querySelector(navmenulink.hash);
    if (!section) return;
    let position = window.scrollY + 200;
    if (
      position >= section.offsetTop &&
      position <= section.offsetTop + section.offsetHeight
    ) {
      document
        .querySelectorAll(".navmenu a.active")
        .forEach((link) => link.classList.remove("active"));
      navmenulink.classList.add("active");
    } else {
      navmenulink.classList.remove("active");
    }
  });
}
window.addEventListener("load", navmenuScrollspy);
document.addEventListener("scroll", navmenuScrollspy);

const dob = new Date("1999-10-01"); // Change this to your DOB

const today = new Date();
let age = today.getFullYear() - dob.getFullYear();
const m = today.getMonth() - dob.getMonth();

if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
  age--;
}

document.getElementById("age").textContent = age;

// const navLinks = document.querySelectorAll(".navmenu a");
// const offcanvasEl = document.getElementById("offcanvasNavbar2");

// const bsOffcanvas = bootstrap.Offcanvas.getOrCreateInstance(offcanvasEl);

// navLinks.forEach((link) => {
//   link.addEventListener("click", () => {
//     if (window.innerWidth < 992) {
//       bsOffcanvas.hide();
//     }
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".navmenu a");
  const offcanvasEl = document.getElementById("offcanvasNavbar2");

  if (!offcanvasEl) return;

  const bsOffcanvas = bootstrap.Offcanvas.getOrCreateInstance(offcanvasEl);

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth < 992) {
        bsOffcanvas.hide();
      }
    });
  });
});
