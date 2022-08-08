"use strict";

document.querySelector(".admin__register").addEventListener("click", () => {
  let register_data = document.querySelector(".admin__register-data");
  register_data.style.opacity = 1;
  register_data.style.visibility = "visible";
});

document.querySelector(".close-register").addEventListener("click", () => {
  let register_data = document.querySelector(".admin__register-data");
  register_data.style.opacity = 0;
  register_data.style.visibility = "hidden";
});



