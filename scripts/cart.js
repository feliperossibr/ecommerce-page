const descreaseBtn = document.querySelector(".decrease");
const increaseBtn = document.querySelector(".increase");
const quantityDisplay = document.querySelector(".quantity");

let quantity = 1;

increaseBtn.addEventListener("click", () => {
  quantity++;
  quantityDisplay.textContent = quantity;
});

descreaseBtn.addEventListener("click", () => {
  if (quantity > 1) {
    quantity--;
    quantityDisplay.textContent = quantity;
  }
});