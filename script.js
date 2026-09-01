/* =========================================
   FLUXION FOOIES
   MENU + CART + ORDER SYSTEM
========================================= */

/* =========================================
   FACEBOOK PAGE
========================================= */

const facebookPage = "https://www.facebook.com/profile.php?id=61565052770927";

/* =========================================
   MENU DATA
========================================= */

const menuItems = [
  {
    id: 1,
    name: "Sizzling Sisig",
    category: "ulam",
    tag: "BESTSELLER",
    price: 169,
    serving: "Good for 1-2",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Sizzling%20Sisig.jpg?width=900",
    description:
      "Crispy pork, onions, chili, and our creamy house dressing served sizzling hot. A Filipino classic that never misses.",
  },

  {
    id: 2,
    name: "Chicken Inasal",
    category: "ulam",
    tag: "FAVORITE",
    price: 149,
    serving: "1 Chicken Quarter",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Chicken%20Inasal.JPG?width=900",
    description:
      "Juicy grilled chicken marinated in a flavorful Filipino-style blend of calamansi, garlic, and spices.",
  },

  {
    id: 3,
    name: "Crispy Lechon Kawali",
    category: "ulam",
    tag: "CRISPY",
    price: 189,
    serving: "Good for 1-2",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Lechon%20Kawali.jpg?width=900",
    description:
      "Deep-fried pork belly with an irresistibly crispy skin and tender meat, served with our special dipping sauce.",
  },

  {
    id: 4,
    name: "Kare-Kare",
    category: "ulam",
    tag: "CLASSIC",
    price: 199,
    serving: "Good for 2",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Kare-kare.jpg?width=900",
    description:
      "Rich peanut-based Filipino stew loaded with tender meat and vegetables, paired with savory bagoong.",
  },

  {
    id: 5,
    name: "Pancit Bihon",
    category: "ulam",
    tag: "SHARING",
    price: 159,
    serving: "Good for 2-3",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Pancit%20bihon.jpg?width=900",
    description:
      "Classic Filipino rice noodles stir-fried with vegetables, meat, and our savory house sauce.",
  },

  {
    id: 6,
    name: "Classic Porksilog",
    category: "silog",
    tag: "SILOG",
    price: 139,
    serving: "1 Person",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/9568Cuisine%20food%20of%20Bulacan%20in%20Baliuag%2033.jpg?width=900",
    description:
      "Garlic fried rice, sunny-side egg, and savory Filipino-style pork served with a classic dipping sauce.",
  },

  {
    id: 7,
    name: "Longsilog",
    category: "silog",
    tag: "BREAKFAST",
    price: 129,
    serving: "1 Person",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/-SavorFilipino%20continues...%20breakfast%20with%20my%20parents.%20Long-Tocilog%20-Filipino%20-FilipinoFood%20-Breakfast%20-tocino%20-longanisa%20%2814909075278%29.jpg?width=900",
    description:
      "Sweet and savory Filipino longganisa paired with garlic rice and a perfectly cooked egg.",
  },

  {
    id: 8,
    name: "Tocilog",
    category: "silog",
    tag: "SILOG",
    price: 139,
    serving: "1 Person",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/-SavorFilipino%20continues...%20Toci-Long-silog%20-FilipinoFood%20-Breakfast%20-tocino%20-longanisa%20%2815095209992%29.jpg?width=900",
    description:
      "Sweet cured pork, garlic rice, and egg. A comforting Filipino breakfast available anytime.",
  },

  {
    id: 9,
    name: "Barkada Fiesta",
    category: "bundle",
    tag: "GOOD FOR 4",
    price: 699,
    serving: "Good for 4",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Boodle%20fight%20%28kamayan%29%2001.jpg?width=900",
    description:
      "A barkada feast featuring grilled chicken, crispy pork, pancit, rice, and sides. Perfect for sharing.",
  },

  {
    id: 10,
    name: "Pamilya Bundle",
    category: "bundle",
    tag: "BEST VALUE",
    price: 999,
    serving: "Good for 6",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Boodle%20fight%20%28kamayan%29%2002.jpg?width=900",
    description:
      "A generous family spread with Filipino favorites, rice, noodles, grilled meat, and delicious sides.",
  },

  {
    id: 11,
    name: "Fiesta Bilao",
    category: "bundle",
    tag: "PARTY",
    price: 799,
    serving: "Good for 5",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Lechon%20with%20sidings.jpg?width=900",
    description:
      "A celebration-ready platter loaded with Filipino favorites. Bring this to birthdays, gatherings, and fiestas.",
  },

  {
    id: 12,
    name: "Lumpiang Shanghai",
    category: "snacks",
    tag: "CRUNCHY",
    price: 119,
    serving: "10 Pieces",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Lumpiang%20Shanghai%202023.jpg?width=900",
    description:
      "Golden crispy Filipino spring rolls filled with seasoned meat and vegetables.",
  },

  {
    id: 13,
    name: "Tokwa't Baboy",
    category: "snacks",
    tag: "PULUTAN",
    price: 149,
    serving: "Good for 2",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/A%20Bowl%20of%20Tokwa%27t%20Baboy.jpg?width=900",
    description:
      "Crispy tofu and tender pork tossed with onions in a tangy Filipino vinegar sauce.",
  },

  {
    id: 14,
    name: "Mango Shake",
    category: "drinks",
    tag: "FRESH",
    price: 89,
    serving: "16 oz",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Mango%20shake.jpg?width=900",
    description:
      "Cold, creamy, and refreshing mango shake made for beating the Philippine heat.",
  },

  {
    id: 15,
    name: "Calamansi Juice",
    category: "drinks",
    tag: "REFRESHING",
    price: 69,
    serving: "16 oz",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Calamansi%20juice%20%28Filipino%20lemonade%29.jpg?width=900",
    description:
      "Refreshing Filipino calamansi juice with just the right balance of sweet and citrusy.",
  },

  {
    id: 16,
    name: "Halo-Halo",
    category: "drinks",
    tag: "DESSERT",
    price: 109,
    serving: "1 Glass",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Famous%20Halo-Halo%20from%20the%20Philippines.jpg?width=900",
    description:
      "A colorful Filipino dessert loaded with sweetened fruits, jellies, beans, shaved ice, milk, and creamy goodness.",
  },
];

/* =========================================
   CART
========================================= */

let cart = [];

/* =========================================
   DOM
========================================= */

const menuGrid = document.getElementById("menuGrid");
const cartCount = document.getElementById("cartCount");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");

const bottomCartText = document.getElementById("bottomCartText");

/* =========================================
   RENDER MENU
========================================= */

function renderMenu(category = "all") {
  menuGrid.innerHTML = "";

  const filteredItems =
    category === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === category);

  filteredItems.forEach((item) => {
    const card = document.createElement("article");

    card.className = "food-card";

    card.onclick = () => openFoodModal(item.id);

    card.innerHTML = `

            <div class="food-image">

                <img
                    src="${item.image}"
                    alt="${item.name}"
                    loading="lazy"
                >

                <span class="food-tag">
                    ${item.tag}
                </span>

            </div>

            <div class="food-info">

                <h3>
                    ${item.name}
                </h3>

                <p>
                    ${item.description}
                </p>

                <div class="food-bottom">

                    <strong class="food-price">
                        ₱${item.price}
                    </strong>

                    <button
                        class="quick-add-button"
                        onclick="event.stopPropagation(); addToCart(${item.id})"
                        aria-label="Add ${item.name} to cart">
                        <span>+</span>
                    </button>

                    <span class="view-dish">
                        VIEW DISH →
                    </span>

                </div>

            </div>

        `;

    menuGrid.appendChild(card);
  });
}

/* =========================================
   FILTER
========================================= */

function filterMenu(category, button) {
  document
    .querySelectorAll(".category")
    .forEach((btn) => btn.classList.remove("active"));

  button.classList.add("active");

  renderMenu(category);
}

/* =========================================
   FOOD MODAL
========================================= */

function openFoodModal(id) {
  const item = menuItems.find((food) => food.id === id);

  if (!item) return;

  document.getElementById("modalImage").src = item.image;

  document.getElementById("modalImage").alt = item.name;

  document.getElementById("modalCategory").textContent = item.tag;

  document.getElementById("modalTitle").textContent = item.name;

  document.getElementById("modalDescription").textContent = item.description;

  document.getElementById("modalPrice").textContent = `₱${item.price}`;

  document.getElementById("modalServing").textContent = item.serving;

  const addButton = document.getElementById("modalAddButton");

  addButton.onclick = () => {
    addToCart(item.id);

    closeFoodModal();
  };

  document.getElementById("foodModal").classList.add("active");

  document.body.style.overflow = "hidden";
}

function closeFoodModal() {
  document.getElementById("foodModal").classList.remove("active");

  document.body.style.overflow = "";
}

/* =========================================
   ADD TO CART
========================================= */

function addToCart(id) {
  const existing = cart.find((item) => item.id === id);

  if (existing) {
    existing.quantity++;
  } else {
    cart.push({
      id: id,
      quantity: 1,
    });
  }

  updateCart();

  showCartAddedAnimation();
}

/* =========================================
   REMOVE FROM CART
========================================= */

function removeFromCart(id) {
  cart = cart.filter((item) => item.id !== id);

  updateCart();
}

/* =========================================
   CHANGE QUANTITY
========================================= */

function changeQuantity(id, amount) {
  const item = cart.find((product) => product.id === id);

  if (!item) return;

  item.quantity += amount;

  if (item.quantity <= 0) {
    removeFromCart(id);

    return;
  }

  updateCart();
}

/* =========================================
   UPDATE CART
========================================= */

function updateCart() {
  let totalItems = 0;
  let totalPrice = 0;

  cart.forEach((cartItem) => {
    const product = menuItems.find((item) => item.id === cartItem.id);

    if (!product) return;

    totalItems += cartItem.quantity;

    totalPrice += product.price * cartItem.quantity;
  });

  cartCount.textContent = totalItems;

  cartTotal.textContent = `₱${totalPrice.toLocaleString()}`;

  if (totalItems === 0) {
    bottomCartText.textContent = "Your cart is empty";
  } else {
    bottomCartText.textContent = `${totalItems} ${totalItems === 1 ? "item" : "items"} in your cart • ₱${totalPrice.toLocaleString()}`;
  }

  renderCart();
}

/* =========================================
   RENDER CART
========================================= */

function renderCart() {
  cartItems.innerHTML = "";

  if (cart.length === 0) {
    cartItems.innerHTML = `
            <div class="empty-cart">
                Your fiesta cart is empty.<br>
                Add something delicious from the menu!
            </div>
        `;

    return;
  }

  cart.forEach((cartItem) => {
    const product = menuItems.find((item) => item.id === cartItem.id);

    if (!product) return;

    const row = document.createElement("div");

    row.className = "cart-item";

    row.innerHTML = `

            <img
                src="${product.image}"
                alt="${product.name}"
            >

            <div class="cart-item-info">

                <strong>
                    ${product.name}
                </strong>

                <small>
                    ₱${product.price}
                </small>

            </div>

            <div class="quantity-controls">

                <button
                    onclick="changeQuantity(${product.id}, -1)">
                    −
                </button>

                <span>
                    ${cartItem.quantity}
                </span>

                <button
                    onclick="changeQuantity(${product.id}, 1)">
                    +
                </button>

            </div>

            <button
                class="remove-item"
                onclick="removeFromCart(${product.id})">
                ×
            </button>

        `;

    cartItems.appendChild(row);
  });
}

/* =========================================
   CART MODAL
========================================= */

function openCart() {
  renderCart();

  document.getElementById("cartModal").classList.add("active");

  document.body.style.overflow = "hidden";
}

function closeCart() {
  document.getElementById("cartModal").classList.remove("active");

  document.body.style.overflow = "";
}

/* =========================================
   RECEIPT
========================================= */

function openReceipt() {
  if (cart.length === 0) {
    alert("Your cart is empty. Add some delicious food first!");

    return;
  }

  closeCart();

  closeFoodModal();

  renderReceipt();

  document.getElementById("receiptModal").classList.add("active");

  document.body.style.overflow = "hidden";
}

function closeReceipt() {
  document.getElementById("receiptModal").classList.remove("active");

  document.body.style.overflow = "";
}

/* =========================================
   RENDER RECEIPT
========================================= */

function renderReceipt() {
  const receiptItems = document.getElementById("receiptItems");

  const receiptTotal = document.getElementById("receiptTotal");

  receiptItems.innerHTML = "";

  let total = 0;

  cart.forEach((cartItem) => {
    const product = menuItems.find((item) => item.id === cartItem.id);

    if (!product) return;

    const subtotal = product.price * cartItem.quantity;

    total += subtotal;

    const row = document.createElement("div");

    row.className = "receipt-row";

    row.innerHTML = `

            <span>
                ${product.name}
            </span>

            <span>
                x${cartItem.quantity}
            </span>

            <strong>
                ₱${subtotal.toLocaleString()}
            </strong>

        `;

    receiptItems.appendChild(row);
  });

  receiptTotal.textContent = `₱${total.toLocaleString()}`;
}

/* =========================================
   CREATE FACEBOOK MESSAGE
========================================= */

function createOrderMessage() {
  let message = "🍽️ FLUXION FOOIES ORDER\n\n";

  cart.forEach((cartItem) => {
    const product = menuItems.find((item) => item.id === cartItem.id);

    if (!product) return;

    const subtotal = product.price * cartItem.quantity;

    message += `${product.name} x${cartItem.quantity} — ₱${subtotal.toLocaleString()}\n`;
  });

  const total = cart.reduce((sum, cartItem) => {
    const product = menuItems.find((item) => item.id === cartItem.id);

    return sum + product.price * cartItem.quantity;
  }, 0);

  message += `\nTOTAL: ₱${total.toLocaleString()}\n\n`;

  message += "📍 Location: Balanga City, Bataan\n";

  message += "\nHello! I'd like to order the items above. Thank you!";

  return message;
}

/* =========================================
   COPY ORDER
========================================= */

async function copyOrder() {
  const message = createOrderMessage();

  try {
    await navigator.clipboard.writeText(message);
  } catch (error) {
    const textarea = document.createElement("textarea");

    textarea.value = message;

    document.body.appendChild(textarea);

    textarea.select();

    document.execCommand("copy");

    textarea.remove();
  }

  const copyMessage = document.getElementById("copyMessage");

  copyMessage.classList.add("show");

  setTimeout(() => {
    copyMessage.classList.remove("show");
  }, 2200);
}

/* =========================================
   FACEBOOK
========================================= */

function goFacebook() {
  const message = createOrderMessage();

  /*
       Facebook does not reliably allow a normal
       website to automatically inject text into
       a Messenger conversation.

       So the order is copied first, then the
       customer is taken to the Facebook page.
    */

  copyOrder();

  setTimeout(() => {
    window.open(facebookPage, "_blank", "noopener,noreferrer");
  }, 500);
}

/* =========================================
   CART ADDED ANIMATION
========================================= */

function showCartAddedAnimation() {
  const button = document.querySelector(".cart-button");

  button.animate(
    [
      {
        transform: "scale(1)",
      },

      {
        transform: "scale(1.15)",
      },

      {
        transform: "scale(1)",
      },
    ],
    {
      duration: 350,
    },
  );
}

/* =========================================
   CLOSE MODALS WHEN CLICKING BACKDROP
========================================= */

document
  .getElementById("foodModal")
  .addEventListener("click", function (event) {
    if (event.target === this) {
      closeFoodModal();
    }
  });

document
  .getElementById("cartModal")
  .addEventListener("click", function (event) {
    if (event.target === this) {
      closeCart();
    }
  });

document
  .getElementById("receiptModal")
  .addEventListener("click", function (event) {
    if (event.target === this) {
      closeReceipt();
    }
  });

/* =========================================
   ESC KEY
========================================= */

document.addEventListener("keydown", function (event) {
  if (event.key !== "Escape") return;

  closeFoodModal();
  closeCart();
  closeReceipt();
});

/* =========================================
   INITIALIZE
========================================= */

renderMenu();
updateCart();
