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
const LogClose = document.querySelector(".log-close");

logBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    logContainer.style.display = "flex";
  });
});

LogClose.addEventListener("click", () => {
  logContainer.style.display = "none";
});
