import { products } from "./data.js";

const searchFormEl = document.querySelector(".search-wrapper");

const productWrapper = document.querySelector(".product-wrapper");

window.deleteProduct = function (id) {
  let index = products.findIndex((prod) => prod.id == id);
  products.splice(index, 1);
  readProducts(products);
};

function readProducts(arr) {
  productWrapper.innerHTML = "";
  arr.forEach((product) => {
    productWrapper.innerHTML += `
    <div class="product">
      <img class="product-image" src="${product.image}" alt="${product.name}" />
      <div class="product-content">
        <p class="product-category">${product.category}</p>
        <h2>${product.name}</h2>
        <p class="product-description">${product.description}</p>
        <div class="product-details">
          <span>${product.brand}</span>
          <span>${product.rating} / 5 (${product.reviewsCount} reviews)</span>
        </div>
        <div class="product-footer">
          <strong>$${product.price} ${product.currency}</strong>
          <span>${product.stock} in stock</span>
        </div>
        <button onclick="deleteProduct(${product.id})" class="delete-btn">Delete</button>
      </div>
    </div>
  `;
  });
}

readProducts(products);

searchFormEl.addEventListener("submit", (e) => {
  e.preventDefault();
  let formData = new FormData(searchFormEl);
  let inputValue = formData.get("search-text");
  let filterProdNames = products.filter((prod) => {
    if (prod.name.toLowerCase().includes(inputValue.toLowerCase())) {
      return prod;
    }
  });
  readProducts(filterProdNames);
});
