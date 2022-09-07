let hamburger = document.querySelector(".hamburger");
let controls = document.querySelector("#controls");
let moreControls = document.querySelector("#more-controls");
let bottom = document.querySelector("#controls #bottom");
let lis = document.querySelectorAll("#more-controls ul li");
hamburger.addEventListener("click", () => {
  controls.classList.toggle("active");
})
lis.forEach((li) => {
  li.addEventListener("click", () => {
    controls.classList.toggle("active");
  })
})

if (innerWidth >= 600) {
  window.addEventListener("scroll", () => {
    if (window.scrollY >= 50) {
      moreControls.style.background = "rgba(0, 0, 0, 0.9)";
    } else {
      moreControls.style.background = "rgba(0, 0, 0, 0.3)";
    }
  })
}
else {
  moreControls.style.background = "none";
}
