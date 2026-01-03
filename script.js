const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
const navLinks = document.querySelectorAll("#mobileMenu a");
const spans = hamburger.querySelectorAll("span");
let isMenuOpen = false;

function toggleMenu() {
  isMenuOpen = !isMenuOpen;

  if (isMenuOpen) {
    mobileMenu.classList.remove("opacity-0", "pointer-events-none");
    mobileMenu.classList.add("opacity-100", "pointer-events-auto");

    spans[0].classList.add("rotate-45", "translate-y-2");
    spans[1].classList.add("opacity-0");
    spans[2].classList.add("-rotate-45", "-translate-y-2");
  } else {
    mobileMenu.classList.add("opacity-0", "pointer-events-none");
    mobileMenu.classList.remove("opacity-100", "pointer-events-auto");

    spans[0].classList.remove("rotate-45", "translate-y-2");
    spans[1].classList.remove("opacity-0");
    spans[2].classList.remove("-rotate-45", "-translate-y-2");
  }
}

hamburger.addEventListener("click", toggleMenu);
navLinks.forEach((link) => link.addEventListener("click", toggleMenu));

const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll(".reveal-on-scroll").forEach((el) => {
  observer.observe(el);
});

const header = document.getElementById("main-header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    header.classList.add("bg-white/80", "backdrop-blur-md", "shadow-md");
    header.classList.remove("bg-transparent");
  } else {
    header.classList.remove("bg-white/80", "backdrop-blur-md", "shadow-md");
    header.classList.add("bg-transparent");
  }
});
