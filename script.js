"use static";
// Menu Func.
const menu = document.querySelector(".menu-container");
const menuIcon = document.querySelector(".menu");
const navList = document.querySelector(".list-1");

menu.addEventListener("click", () => {
  navList.classList.toggle("active");
  if (navList.classList.contains("active")) {
    menuIcon.className = "fa-solid fa-xmark menu";
  } else {
    menuIcon.className = "fa-solid fa-bars menu";
  }
});

// Log Close, open
const logBtn = document.querySelectorAll(".log-btn-activator");
const logContainer = document.querySelector(".logIn-container");
const logBackground = document.querySelector(".log-background");
const LogClose = document.querySelector(".log-close");

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
const home = document.querySelector(".home");
const toHome = document.querySelectorAll(".to-home");
const hardware = document.querySelector(".hardware");
const toHardware = document.querySelectorAll(".to-hardware");
const games = document.querySelector(".games");
const toGames = document.querySelectorAll(".to-games");
const shop = document.querySelector(".shop");
const toShop = document.querySelectorAll(".to-shop");
const support = document.querySelector(".footer");
const toSupport = document.querySelectorAll(".to-support");

const scrollFunc = (btns, section) => {
  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      section.scrollIntoView({ behavior: "smooth" });
    });
  });
};

scrollFunc(toHome, home);
scrollFunc(toHardware, hardware);
scrollFunc(toGames, games);
scrollFunc(toShop, shop);
scrollFunc(toSupport, support);
