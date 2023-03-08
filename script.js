const wrapper = document.getElementById("wrapper");

const rand = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const shapes = document.querySelectorAll(".shape");

const uniqueRand = (min, max, prev) => {
  let next = prev;
  
  while(prev === next) next = rand(min, max);
  
  return next;
}
window.onload = () => {
  const index = uniqueRand(0, combinations.length - 1, prev),
  combination = combinations[index];

  wrapper.dataset.configuration = combination.configuration;
  wrapper.dataset.roundness = combination.roundness;

  document.querySelectorAll(".shape").forEach((shape, index) => {
    shape.animate([
      { transform: "scale(0)" },
      { transform: "scale(1)" }
    ], {
      duration: 600,
      easing: "ease-in-out",
      fill: "forwards",
      delay: index - 100
    });
  });
};
const combinations = [
  { configuration: 1, roundness: 1 },
  { configuration: 1, roundness: 2 },
  { configuration: 2, roundness: 1 },
  { configuration: 2, roundness: 2 },
  { configuration: 3, roundness: 1 },
  { configuration: 3, roundness: 2 }
];

let prev = 0;

setInterval(() => {
  if (wrapper.matches(':hover')) return;
  if (wrapper.classList.contains("active")) return;
  const index = uniqueRand(0, combinations.length - 1, prev),
        combination = combinations[index];
  
  wrapper.dataset.configuration = combination.configuration;
  wrapper.dataset.roundness = combination.roundness;
  
  prev = index;
}, 3000);

function toggle(modalId) {
  const popup = document.getElementById(modalId);
  wrapper.classList.toggle('active');
  popup.classList.toggle('active');
}


