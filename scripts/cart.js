const cartToggle = document.getElementById("cart-toggle");
const cartMenu = document.getElementById("cart-menu");
const cartContent = document.getElementById("cart-content");
const cartBadge = document.getElementById("cart-badge");

let cartItems = []; // Armazena os produtos adicionados

// Alternar visibilidade do carrinho
cartToggle.addEventListener("click", () => {
  cartMenu.classList.toggle("hidden");
});

// Adicionar produto ao carrinho
const addToCartBtn = document.querySelector(".btn-add-cart");
addToCartBtn.addEventListener("click", () => {
  const quantity = parseInt(document.querySelector(".quantity").textContent);
  if (quantity > 0) {
    const product = {
      name: "Fall Limited Edition Sneakers",
      price: 125.00,
      quantity: quantity,
      thumbnail: "assets/images/image-product-1-thumbnail.jpg"
    };
    cartItems = [product]; // Apenas 1 produto para este exemplo
    renderCart();
  }
});

// Atualiza o número no badge
function updateCartBadge() {
  if (cartItems.length > 0) {
    const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    cartBadge.textContent = totalQuantity;
    cartBadge.classList.remove("hidden");
  } else {
    cartBadge.classList.add("hidden");
  }
}

// Renderiza o carrinho
function renderCart() {
  cartContent.innerHTML = "";

  if (cartItems.length === 0) {
    cartContent.innerHTML = `<p class="empty-cart">Your cart is empty.</p>`;
  } else {
    cartItems.forEach(item => {
      const total = (item.price * item.quantity).toFixed(2);
      const cartItemHTML = `
        <div class="cart-item">
          <img src="${item.thumbnail}" alt="Product thumbnail">
          <div class="cart-item-info">
            <p>${item.name}</p>
            <p>$${item.price.toFixed(2)} x ${item.quantity} <span class="price-total">$${total}</span></p>
          </div>
          <button class="delete-btn" aria-label="Remove item">
            <img src="assets/icons/icon-delete.svg" alt="Delete">
          </button>
        </div>
        <button class="checkout-btn">Checkout</button>
      `;
      cartContent.innerHTML = cartItemHTML;

      const deleteBtn = cartContent.querySelector(".delete-btn");
      deleteBtn.addEventListener("click", () => {
        cartItems = [];
        renderCart();
      });
    });
  }

  updateCartBadge();
}