// MILESTONE 1: generate and display product elements
const products = [
  {
    id: 1,
    name: "WD 2TB Elements Portable External Hard Drive - USB 3.0",
    price: "$64",
    description:
      "USB 3.0 and USB 2.0 Compatibility. Fast data transfers. Improve PC Performance. High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user's hardware configuration and operating system.",
    image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
  },
  {
    id: 2,
    name: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
    price: "$109",
    description:
      "Easy upgrade for faster boot up, shutdown, application load and response. Boosts burst write performance, making it ideal for typical PC workloads. Read/write speeds of up to 535MB/s/450MB/s.",
    image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
  },
  {
    id: 3,
    name: "Mens Casual Premium Slim Fit T-Shirts",
    price: "$22.3",
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket",
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
  },
  {
    id: 4,
    name: "Mens Cotton Jackes",
    price: "$55.99",
    description:
      "great outerwear jackets for Spring/Autumn/Winter, suitable formany occasions, such as working, hiking, camping,mountain/rock climbing, cycling, traveling or other outdoors.Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
  },
  {
    id: 5,
    name: "Mens Casual Slim Fit",
    price: "$15.99",
    description:
      "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description",
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
  },
  {
    id: 6,
    name: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
    price: "$56.99",
    description:
      "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
    image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
  },
  {
    id: 7,
    name: "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
    price: "$29.95",
    description:
      "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
    image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
  },
  {
    id: 8,
    name: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
    price: "$33.99",
    description:
      "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
    image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
  },
  {
    id: 9,
    name: "Mens Casual Slim Fit",
    price: "$15.99",
    description:
      "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description",
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
  },
];
// Function to display products
function displayProducts() {
  const productsList = document.querySelector(".products--list");

  // Clear existing products
  productsList.innerHTML = "";

  // Loop through products and create elements
  products.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.className = "product";

    productElement.innerHTML = `
          <img src="${product.image}" alt="${product.name}" class="product--image">
          <div class="product--text">
              <h3>${product.name}</h3>
              <p class="product--description">${product.description}</p>
              <p class="product--price">$${product.price}</p>
              <button class="product--buy" onclick="handleBuyNow(${product.id})">Buy Now</button>
          </div>
      `;

    productsList.appendChild(productElement);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  displayProducts(); // This will display the products when the page loads
});

// MILESTONE 2: sort products by price
function sortByPrice(sortOrder) {
  // Sort the original array instead of creating a new one
  products.sort((a, b) => {
    const priceA = parseFloat(a.price.replace("$", "")).toFixed(2);
    const priceB = parseFloat(b.price.replace("$", "")).toFixed(2);
    return sortOrder === "asc" ? priceA - priceB : priceB - priceA;
  });

  displayProducts();
}

// Add event listener for the sort dropdown
document.addEventListener("DOMContentLoaded", () => {
  displayProducts(); // Initial display of products

  document.getElementById("sortDropdown").addEventListener("change", (e) => {
    const sortOrder = e.target.value;
    sortByPrice(sortOrder);
  });
});

function displayProducts() {
  const productsList = document.querySelector(".products--list");
  productsList.innerHTML = "";

  products.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.className = "product";

    productElement.innerHTML = `
          <img src="${product.image}" alt="${product.name}" class="product--image">
          <div class="product--text">
              <h3>${product.name}</h3>
              <p class="product--description">${product.description}</p>
              <p class="product--price">${product.price}</p>
              <button class="product--buy" onclick="addToCart(${product.id})">Add to Cart</button>
          </div>
      `;

    productsList.appendChild(productElement);
  });
}
// MILESTONE 3: Adding Products to the Cart
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modalCart");
  const cartLink = document.getElementById("cartLink");
  const closeBtn = document.getElementsByClassName("modal-cart-close")[0];
  const cartDisplay = document.querySelector(".modal-cart-content");
  let cartItems = [];

  // Cart functionality
  function addToCart(product) {
    const existingItem = cartItems.find((item) => item.name === product.name);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cartItems.push({
        name: product.name,
        price: product.price,
        quantity: 1,
      });
    }

    updateCartDisplay();
    displayConfirmation(product.name);
  }

  function updateCartDisplay() {
    const cartContent = document.querySelector(".modal-cart-content");

    if (cartItems.length === 0) {
      cartContent.innerHTML = `
        <span class="modal-cart-close">&times;</span>
        <p>Your cart is empty.</p>
      `;
    } else {
      const total = cartItems.reduce((sum, item) => {
        const price = parseFloat(item.price.replace("$", ""));
        return sum + price * item.quantity;
      }, 0);

      cartContent.innerHTML = `
        <span class="modal-cart-close">&times;</span>
        <div class="cart-items">
          ${cartItems
            .map(
              (item) => `
            <div class="cart-item">
              <p>${item.name}</p>
              <p>Price: ${item.price}</p>
              <p>Quantity: ${item.quantity}</p>
              <button onclick="removeFromCart('${item.name}')">Remove</button>
            </div>
          `
            )
            .join("")}
          <div class="cart-total">
            <p>Total: $${total.toFixed(2)}</p>
          </div>
        </div>
      `;
    }

    // Reattach close button event listener
    const newCloseBtn = document.getElementsByClassName("modal-cart-close")[0];
    if (newCloseBtn) {
      newCloseBtn.onclick = closeCartModal;
    }
  }

  // Make removeFromCart function available globally
  window.removeFromCart = function (productName) {
    cartItems = cartItems.filter((item) => item.name !== productName);
    updateCartDisplay();
  };

  function displayConfirmation(productName) {
    const confirmation = document.createElement("div");
    confirmation.className = "confirmation-message";
    confirmation.textContent = `${productName} has been added to the cart`;
    document.body.appendChild(confirmation);

    setTimeout(() => {
      confirmation.remove();
    }, 3000);
  }

  // Modal controls
  function openCartModal() {
    modal.style.display = "block";
    setTimeout(() => {
      modal.classList.add("show");
    }, 10);
    updateCartDisplay();
  }

  function closeCartModal() {
    modal.classList.remove("show");
    setTimeout(() => {
      modal.style.display = "none";
    }, 300);
  }

  // Event Listeners
  cartLink.addEventListener("click", openCartModal);
  closeBtn.addEventListener("click", closeCartModal);

  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeCartModal();
    }
  });

  // Add to cart button listeners
  document.querySelectorAll(".product--buy").forEach((button) => {
    button.addEventListener("click", (e) => {
      const productElement = e.target.closest(".product");
      const product = {
        name: productElement.querySelector("h3").textContent,
        price: productElement.querySelector(".product--price").textContent,
      };
      addToCart(product);
      openCartModal();
    });
  });

  // Initialize cart display
  updateCartDisplay();
});

// MILESTONE 4: Implementing a Search Functionality and Fetch Remote Data
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modalCart");
  const cartLink = document.getElementById("cartLink");
  const closeBtn = document.getElementsByClassName("modal-cart-close")[0];
  const searchInput = document.querySelector(".navbar--search");
  const productList = document.querySelector(".products--list");
  const cartItems = [];
  let products = [];

  // Fetch products from API
  async function fetchProducts() {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      products = data;
      displayProducts(products);
    } catch (error) {
      console.error("Error fetching products:", error);
      productList.innerHTML =
        "<div>Error loading products. Please try again later.</div>";
    }
  }

  function displayProducts(productsToShow) {
    productList.innerHTML = productsToShow
      .map(
        (product) => `
      <div class="product">
        <img src="${product.image}" alt="${
          product.title
        }" class="product--image">
        <div class="product--text">
          <h3 class="product--name">${product.title}</h3>
          <p class="product--description">${product.description.substring(
            0,
            100
          )}...</p>
          <p class="product--price">$${product.price}</p>
          <button class="product--buy">Add to Cart</button>
        </div>
      </div>
    `
      )
      .join("");

    // Reattach event listeners to new buttons
    attachCartButtonListeners();
  }

  // Search functionality
  searchInput.addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm)
    );
    displayProducts(filteredProducts);
  });

  // Sort functionality
  const sortDropdown = document.querySelector(".sort--dropdown");
  if (sortDropdown) {
    sortDropdown.addEventListener("change", (e) => {
      const sortedProducts = [...products];
      if (e.target.value === "asc") {
        sortedProducts.sort((a, b) => a.price - b.price);
      } else {
        sortedProducts.sort((a, b) => b.price - a.price);
      }
      displayProducts(sortedProducts);
    });
  }

  function attachCartButtonListeners() {
    const addToCartButtons = document.querySelectorAll(".product--buy");
    addToCartButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        const product = event.target.closest(".product");
        const productName = product.querySelector(".product--name").textContent;
        const productPrice =
          product.querySelector(".product--price").textContent;
        cartItems.push({
          name: productName,
          price: productPrice,
        });
        displayConfirmation(productName);
        updateCartDisplay();
        openCartModal();
      });
    });
  }

  function openCartModal() {
    modal.style.display = "block";
    setTimeout(() => {
      modal.classList.add("show");
    }, 10);
    updateCartDisplay();
  }

  cartLink.onclick = function () {
    openCartModal();
  };

  closeBtn.onclick = function () {
    modal.classList.remove("show");
    setTimeout(() => {
      modal.style.display = "none";
    }, 300);
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.classList.remove("show");
      setTimeout(() => {
        modal.style.display = "none";
      }, 300);
    }
  };

  function updateCartDisplay() {
    const cartDisplay = modal.querySelector(".modal-cart-content");
    if (cartItems.length === 0) {
      cartDisplay.innerHTML = "<p>Your cart is empty.</p>";
    } else {
      cartDisplay.innerHTML = `
        <span class="modal-cart-close">&times;
        <ul>${cartItems
          .map((item) => `<li>${item.name} - ${item.price}</li>`)
          .join("")}</ul>
      `;
    }
  }

  function displayConfirmation(productName) {
    const confirmation = document.createElement("div");
    confirmation.className = "confirmation-message";
    confirmation.textContent = `${productName} has been added to the cart.`;
    document.body.appendChild(confirmation);
    setTimeout(() => {
      confirmation.remove();
    }, 3000);
  }

  // Initialize the page by fetching products
  fetchProducts();
});
