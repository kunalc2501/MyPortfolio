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

//=============== start date code =======================//

// 👇 SAME format as you want
const dobString = "01-10-1999"; // DD-MM-YYYY

// manual parsing
const [day, month, year] = dobString.split("-");
const dob = new Date(year, month - 1, day); // JS safe date

function updateAge() {
  const today = new Date();
  let age = today.getFullYear() - dob.getFullYear();

  if (
    today.getMonth() < dob.getMonth() ||
    (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate())
  ) {
    age--;
  }

  document.getElementById("age").textContent = age;
}

// initial call
updateAge();

// 🔁 auto update (birthday pe khud change ho jayega)
setInterval(updateAge, 60 * 60 * 1000); // every 1 hour

//===================== upadate date of birthday ======================//

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

//======================= contact messgae send ======================//
document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault(); // page reload rokta hai

    emailjs
      .sendForm(
        "service_stvmlbk", // 👈 Service ID
        "template_gfd10ug", // 👈 Template ID
        this,
      )
      .then(
        function () {
          alert("Message sent successfully ✅");
          document.getElementById("contact-form").reset();
        },
        function (error) {
          alert("Failed to send ❌");
          console.log(error);
        },
      );
  });
