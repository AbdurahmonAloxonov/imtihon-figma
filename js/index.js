document.addEventListener("DOMContentLoaded", fetchProducts);

async function fetchProducts() {
  try {
    const response = await fetch(
      "https://cars-pagination.onrender.com/products"
    );
    const data = await response.json();
    const productsSlice = data.slice(2, 12);
    displayProducts(productsSlice);
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}

function displayProducts(products) {
  const productsContainer = document.getElementById("products-container");
  productsContainer.innerHTML = "";

  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <div class="category">Category: ${product.category}</div>
            <div class="new-price">New Price: $${product.newPrice.toFixed(
              2
            )}</div>
            <div  class="old-price">Old Price: $${product.oldPrice.toFixed(
              2
            )}</div>
            <div class="rating">
                Rating: ${product.star}
                <span class="stars">${"★".repeat(Math.round(product.star))}
                ${"☆".repeat(5 - Math.round(product.star))}</span>
            </div>
            <button class="btn" onclick="viewProduct(${
              product.id
            })">View Details</button>
        `;
    productsContainer.appendChild(productCard);
  });
}

function viewProduct(productId) {
  window.location.href = `detail.html?id=${productId}`;
}

document
  .getElementById("price-filter")
  .addEventListener("change", filterProductsByPrice);

function filterProductsByPrice() {
  const priceRange = document.getElementById("price-filter").value;
}

document.addEventListener("DOMContentLoaded", fetchProducts);

let allProducts = []; // Barcha maxsulotlarni saqlash uchun global o'zgaruvchi

async function fetchProducts() {
  try {
    const response = await fetch(
      "https://cars-pagination.onrender.com/products"
    );
    const data = await response.json();
    allProducts = data; // Barcha maxsulotlarni saqlash
    const productsSlice = data.slice(2, 12); // 2 dan 12 gacha maxsulotlar
    displayProducts(productsSlice);
  } catch (error) {
    console.error("Maxsulotlar yuklanishida xatolik:", error);
  }
}

function displayProducts(products) {
  const productsContainer = document.getElementById("products-container");
  productsContainer.innerHTML = "";

  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <div class="category">Kategoriya: ${product.category}</div>
            <div class="new-price">Yangi narxi: $${product.newPrice.toFixed(
              2
            )}</div>
            <div class="old-price">Eski narxi: $${product.oldPrice.toFixed(
              2
            )}</div>
            <div class="rating">
                Reyting: ${product.star}
                <span class="stars">${"★".repeat(Math.round(product.star))}
                ${"☆".repeat(5 - Math.round(product.star))}</span>
            </div>
            <button class="btn" onclick="viewProduct(${product.id})">Tafsilotlar</button>
        `;
    productsContainer.appendChild(productCard);
  });
}

function viewProduct(productId) {
  window.location.href = `page/detail.html?id=${productId}`;
}

function filterProductsByPrice() {
  const priceRange = document.getElementById("price-filter").value;

  // Barcha maxsulotlarni boshqarish uchun allProducts global o'zgaruvchisidan foydalanamiz
  const filteredProducts = allProducts.filter((product) => {
    if (priceRange === "0") {
      return true; // Barcha maxsulotlarni qaytarish
    } else if (priceRange === "50") {
      return product.newPrice > 43108;
    } else if (priceRange === "100") {
      return product.newPrice >= 10136 && product.newPrice > 10136;
    } else if (priceRange === "200") {
      return product.newPrice >= 49394 && product.newPrice > 49394;
    } else if (priceRange === "500") {
      return product.newPrice >= 16896 && product.newPrice > 16896;
    }
  });

  displayProducts(filteredProducts); 
}

function filterProductsByCategory() {
  const categoryType = document.getElementById("category-filter").value;


  const filteredProducts = allProducts.filter((product) => {
    if (categoryType === "1") {
      return true; 
    } else if (categoryType = "1") {
      return product.category = "Известный";
    } else if (categoryType = "2") {
      return product.category = "Средний";
    } else if (categoryType = "3") {
      return product.category = "Не популярен";
    }
  });

  displayProducts(filteredProducts); 
}


