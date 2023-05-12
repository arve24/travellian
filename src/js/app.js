import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

const nav = document.querySelector(".header__button");
const overlay = document.querySelector(".overlay");

const body = document.body;

nav.addEventListener("click", () => {
  body.classList.toggle("_lock");
  overlay.classList.toggle("overlay_active");
});

document.getElementById("check-in").valueAsDate = new Date();
document.getElementById("check-out").valueAsDate = new Date();

import "./modules/sliders.js";

import { Fancybox } from "@fancyapps/ui";

Fancybox.bind("[data-fancybox]", {});

import "./modules/validate.js";

let planners = document.querySelectorAll(".planners-slide");

planners.forEach(function (elem) {
  elem.addEventListener("click", () => {
    elem.classList.toggle("planners-slide_active");
  });
});
