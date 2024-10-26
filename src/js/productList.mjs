import { getData } from "./productData.mjs";
import { renderListWithTemplate } from "./utils.mjs";

export function productCardTemplate(product) {
  return `<li class="product-card">
    <a href="../product_pages/?product=${product.Id}">
    <img
      src="${product.Images.PrimaryMedium}"
      alt="Image of ${product.Name}"
    />
    <h3 class="card__brand">${product.Brand.Name}</h3>
    <h2 class="card__name">${product.NameWithoutBrand}</h2>
    <p class="product-card__price">$${product.FinalPrice}</p></a>
  </li>`;
}

export default async function productList(selector, category) {
  // get the element we will insert the list into from the selector
  const element = document.querySelector(selector);
  // get the list of products
  const products = await getData(category);
  console.log(products);

  // render out the product list to the element
  renderListWithTemplate(productCardTemplate, element, products);
  document.querySelector(".title").innerHTML = category;
}