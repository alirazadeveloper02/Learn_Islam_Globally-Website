const heroSlides = [
  {
    title: "Learn Quran Online",
    text: "Learn Quran from the comfort of your home",
    bgcolor: "black",
    slogan: "The best way for",
    bgimage: "url('al-quran-7737590_1920.jpg')"
},
{
    title: "Affordable Pricing",
    text: "Quality education within your budget",
    bgcolor: "black",
    slogan: "Learn with for less at",
    bgimage: "url('al-quran-7741928_1920.jpg')"
},
{
    title: "Free Trial Classes",
    text: "Experience a class before you commit",
    bgcolor: "black",
    slogan: "Your Trusted source for",
    bgimage: "url('hifz.jpg')"
},
{
    title: "Online Quran Classes",
    text: "Skilled tutors from around the world",
    bgcolor: "black",
    slogan: "Connect with",
    bgimage: "url('koran-4095475_1920.jpg')"
},
{
    title: "Flexible Scheduling",
    text: "Choose class times that fit your lifestyle",
    bgcolor: "black",
    slogan: "Learn at your own pace with",
    bgimage: "url('quran-5400313_1920.jpg')"
  }
];

let slideIndex = 0;

function initHeroSlide() {
  const hero = document.getElementById("hero-slider");
  const title = document.getElementById("hero-title");
  const text = document.getElementById("hero-text");
  const slogan = document.getElementById("hero-slogan");

  hero.style.backgroundImage = heroSlides[slideIndex].bgimage + ", linear-gradient(180deg, rgba(230, 0, 0, 0.15), rgba(0, 0, 0, 0.6))";
  title.textContent = heroSlides[slideIndex].title;
  text.textContent = heroSlides[slideIndex].text;
  slogan.textContent = heroSlides[slideIndex].slogan;
}

function changeHeroSlide() {
  const hero = document.getElementById("hero-slider");
  const title = document.getElementById("hero-title");
  const text = document.getElementById("hero-text");
  const slogan = document.getElementById("hero-slogan");

  slideIndex = (slideIndex + 1) % heroSlides.length;

  hero.style.backgroundImage = heroSlides[slideIndex].bgimage + ", linear-gradient(180deg, rgba(230, 0, 0, 0.15), rgba(0, 0, 0, 0.6))";
  title.textContent = heroSlides[slideIndex].title;
  text.textContent = heroSlides[slideIndex].text;
  slogan.textContent = heroSlides[slideIndex].slogan;
}

// Initialize the first slide immediately
initHeroSlide();

// Start the automatic slideshow
setInterval(changeHeroSlide, 5000);


/* =====================
   MOBILE NAV TOGGLE
===================== */
function toggleNav() {
  const nav = document.getElementById("navLinks");
  const mobileMenu = document.querySelector(".mobile-menu");
  
  if (nav.style.display === "none" || nav.style.display === "") {
    nav.style.display = "flex";
    mobileMenu.style.color = "#B11226";
  } else {
    nav.style.display = "none";
    mobileMenu.style.color = "#fafafa";
  }
}

/* =====================
   HANDLE WINDOW RESIZE FOR RESPONSIVE NAV
===================== */
window.addEventListener("resize", () => {
  const nav = document.getElementById("navLinks");
  
  if (window.innerWidth > 768) {
    nav.style.display = "flex";
  } else {
    nav.style.display = "none";
  }
});

/* =====================
   FORM SUBMISSION
===================== */


/* =====================
   AUTO CLOSE NAV ON LINK CLICK (MOBILE)
===================== */
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-links a");
  const nav = document.getElementById("navLinks");

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 768) {
        nav.style.display = "none";
      }
    });
  });

  // Contact form submission
  const contactForm = document.querySelector('#contact form');
  if (contactForm) {
    contactForm.addEventListener('submit', submitForm);
  }
});


const slider = document.getElementById("slider");
  const slides = document.querySelectorAll(".slide");
  let index = 0;

  setInterval(() => {
    index = (index + 1) % slides.length;
    slider.style.transform = `translateX(-${index * 100}%)`;
  }, 3000);

  