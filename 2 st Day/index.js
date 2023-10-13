/*
hidden--section
icn
header
parag
numbers
number
number-link
btn
btn-link
hidden__section
*/

const hiddenSection = document.querySelector(".hidden--section");
const icn = document.querySelector(".icn");
const header = document.querySelector(".header");
const parag = document.querySelector(".parag");
const numberLink = document.querySelector(".number-link");
const btn = document.querySelector(".btn");
const btnLink = document.querySelector(".btn-link");
const hidden__Section = document.querySelector(".hidden__section");

document.querySelector(".numbers").addEventListener("click", function (e) {
  e.preventDefault();

  const one = [1];
  const two = [2];
  const three = [3];
  const four = [4];
  const five = [5];

  if (e.target.classList.contains("number-link")) {
    if (e.target.classList.contains("ein")) {
      document.querySelector(".ein").style.backgroundColor = "#cf711f";
      document.querySelector(".ein").style.color = "#fff";
    }
    if (e.target.classList.contains("zwei")) {
      document.querySelector(".zwei").style.backgroundColor = "#cf711f";
      document.querySelector(".zwei").style.color = "#fff";
    }
    if (e.target.classList.contains("drei")) {
      document.querySelector(".drei").style.backgroundColor = "#cf711f";
      document.querySelector(".drei").style.color = "#fff";
    }
    if (e.target.classList.contains("vier")) {
      document.querySelector(".vier").style.backgroundColor = "#cf711f";
      document.querySelector(".vier").style.color = "#fff";
    }
    if (e.target.classList.contains("funf")) {
      document.querySelector(".funf").style.backgroundColor = "#cf711f";
      document.querySelector(".funf").style.color = "#fff";
    }
  }
});

btn.addEventListener("click", function (el) {
  hiddenSection.classList.add("hidden");
  hidden__Section.classList.remove("hidden");
});

/*

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});
*/
