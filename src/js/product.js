import { setLocalStorage } from "./utils.mjs";
import { findProductById } from "./productData.mjs";
import { getParam } from "./utils.mjs"

const productId = getParam("product");
console.log(findProductById));

function addProductToCart(product) {
  let cart = JSON.parse(localStorage.getItem("so-cart"));
  cart.push(product);
  setLocalStorage("so-cart", cart);
}

// add to cart button event handler
async function addToCartHandler(e) {
  const product = await findProductById(e.target.dataset.id);
  addProductToCart(product);
}

// add listener to Add to Cart button
document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);
