"use static";
const carouselBtns = document.querySelectorAll(".carousel-btn");
const carouselBtnsContainer = document.querySelector(".games-carousel-btn");
const gamesCarousel = document.querySelectorAll(".games-carousel");
const menu = document.querySelector(".menu-container");
const menuIcon = document.querySelector(".menu");
const navList = document.querySelector(".list-1");
const logBtn = document.querySelectorAll(".log-btn-activator");
const logContainer = document.querySelector(".logIn-container");
const logBackground = document.querySelector(".log-background");
const LogClose = document.querySelector(".log-close");
const home = document.querySelector(".home");
const sections = [
  document.querySelector(".hardware"),
  document.querySelector(".games"),
  document.querySelector(".shop"),
  document.querySelector(".footer"),
];
const navbar = document.querySelector(".navbar");

// Menu Func.
menu.addEventListener("click", () => {
  navList.classList.toggle("active");
  if (navList.classList.contains("active")) {
    menuIcon.className = "fa-solid fa-xmark menu";
  } else {
    menuIcon.className = "fa-solid fa-bars menu";
  }
});

// Log Close, open
logBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    logContainer.style.display = "flex";
  });
});

const closeFunc = () => (logContainer.style.display = "none");
LogClose.addEventListener("click", closeFunc);
logBackground.addEventListener("click", closeFunc);

// Cookie
const cookie = document.createElement("div");
cookie.classList.add("cookie");
cookie.innerHTML = `
<p class="cookie-text">
we use cookie for improving your user experience
</p>
<button class="btn-2 cookie-btn">Got it!</button>
`;
document.body.prepend(cookie);

const cookieBtn = document.querySelector(".cookie-btn");
cookieBtn.addEventListener("click", () => {
  cookie.remove();
});

// scrolling
const shopLinks = document.querySelectorAll(".shop-link");
const navLists = document.querySelectorAll(".nav-list");

shopLinks.forEach(function (shopLink) {
  shopLink.addEventListener("click", function (e) {
    e.preventDefault();
    const id = this.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  });
});

navLists.forEach((nav) =>
  nav.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.classList.contains("nav-link")) {
      const id = e.target.getAttribute("href");
      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    }
  })
);

// nav items fade
const fade = (order, e) => {
  if (e.target.classList.contains("nav-link")) {
    const link = e.target;
    const linkSiblings = link
      .closest(".nav-list")
      .querySelectorAll(".nav-link");
    linkSiblings.forEach((linkSibling) => {
      if (linkSibling !== link) {
        if (order === "add") {
          linkSibling.classList.add("nl-fade");
        } else {
          linkSibling.classList.remove("nl-fade");
        }
      }
    });
  }
};
navLists.forEach((nl) =>
  nl.addEventListener("mouseover", (e) => {
    fade("add", e);
  })
);
navLists.forEach((nl) =>
  nl.addEventListener("mouseout", (e) => {
    fade("remove", e);
  })
);

// Navbar fixed
const stickyNav = (entries) => {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
};
const homeObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
});

homeObserver.observe(home);

// Section reveal
const reveal = (entries, observer) => {
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section-hidden");
  observer.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(reveal, {
  root: null,
  threshold: 0.3,
});

sections.forEach((sec) => {
  // sec.classList.add("section-hidden");
  sectionObserver.observe(sec);
});

// lazy loading
const lazyImgs = document.querySelectorAll("img[data-src]");
const lazyFunc = (entries, observer) => {
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener("load", () => {
    entry.target.classList.remove("lazy-img");
  });

  // observer.unobserve(e.target);
};
const lazyObserver = new IntersectionObserver(lazyFunc, {
  root: null,
  threshold: 0.1,
});
lazyImgs.forEach((img) => lazyObserver.observe(img));

// Slider

const SliderButtons = document.querySelectorAll(".arrow");

SliderButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const offset = btn.dataset.btn === "next" ? 1 : -1;
    const slides = document.querySelector(".games-carousel");
    const activeSlide = slides.querySelector(".active-game");
    let index = [...slides.children].indexOf(activeSlide) + offset;
    if (index < 0) index = slides.children.length - 1;
    if (index >= slides.children.length) index = 0;

    slides.children[index].classList.add("active-game")
    activeSlide.classList.remove("active-game")
  });
});

const SliderButtonsProducts = document.querySelectorAll(".shop-arrow");

SliderButtonsProducts.forEach((btn) => {
  btn.addEventListener("click", () => {
    const offset = btn.dataset.btn === "next" ? 1 : -1;
    const slides = document.querySelector(".products-container");
    const activeSlide = slides.querySelector(".active-product");
    let index = [...slides.children].indexOf(activeSlide) + offset;
    if (index < 0) index = slides.children.length - 1;
    if (index >= slides.children.length) index = 0;

    slides.children[index].classList.add("active-product")
    activeSlide.classList.remove("active-product")
  });
});
