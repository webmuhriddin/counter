const h1 = document.querySelector(".counter h1"),
  plusBtn = document.querySelector(".btn__plus"),
  minusBtn = document.querySelector(".btn__minus");

let count = 0;

plusBtn.addEventListener("click", () => {
  count++;
  h1.textContent = count;
});

minusBtn.addEventListener("click", () => {
  count--;
  h1.textContent = count;
});
