"use strict";

let form = document.querySelector("#form");
form.addEventListener("submit", function (x) {
  x.preventDefault();
  let email = document.querySelector("#emailetner").value;
  if (email) {
    let content = document.querySelector("#mt-40info");
    let icontwit = document.querySelector("#twiticon");
    let yttwit = document.querySelector("#ggicon");
    let ggtwit = document.querySelector("#ggicon");
    let linkedintwit = document.querySelector("#linkedinicon");
    let profilepic = document.querySelector("#profilepic");
    let tempprofilepic = document.querySelector("#tempprofilepic");
    form.classList.add("hidden");
    content.classList.remove("hidden");
    icontwit.classList.remove("hidden");
    yttwit.classList.remove("hidden");
    ggtwit.classList.remove("hidden");
    linkedintwit.classList.remove("hidden");
    profilepic.classList.remove("hidden");
    tempprofilepic.classList.add("hidden");
  }
});
let button = document.querySelectorAll(".jobinfobutton");

for (let i = 0; i < button.length; ++i) {
  button[i].addEventListener("click", function () {
    let lessinfobutton = document.querySelectorAll(".jobinfobutton2");
    let jobin4container = document.querySelector("#jobin4container");
    let workexperience = document.querySelector("#workedoutofmymind");
    let education = document.querySelector("#school");
    let work = document.querySelector("#projector");
    let hobbies = document.querySelector(".hobbies");
    let languages = document.querySelector("#languages");
    let computerscience = document.querySelector("#csskills");
    button[i].classList.add("hidden");
    jobin4container.classList.remove("containerhidden");
    jobin4container.classList.add("container");
    workexperience.classList.remove("hidden");
    education.classList.remove("hidden");
    work.classList.remove("hidden");
    hobbies.classList.remove("hidden");
    languages.classList.remove("hidden");
    computerscience.classList.remove("hidden");
    for (let a = 0; a < lessinfobutton.length; ++a) {
      lessinfobutton[a].addEventListener("click", function () {
        jobin4container.classList.add("containerhidden");
        jobin4container.classList.remove("container");
        workexperience.classList.add("hidden");
        education.classList.add("hidden");
        work.classList.add("hidden");
        hobbies.classList.add("hidden");
        languages.classList.add("hidden");
        computerscience.classList.add("hidden");
        lessinfobutton[a].classList.add("hidden");
      });
    }
  });
}
