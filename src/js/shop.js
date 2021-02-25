import products from "./products.json";

console.log(products);

function shop() {
  const productContainer = document.querySelector(".products");
  const productTemplate = `
    ${products
      .map(
        (product) => `
    <div class="product">
    <h3 class="headline">${product.productName}</h3>
    <div class="description">${product.description}</div>
    <div class="price">${product.price / 100}€</div>
    </div>
    `
      )
      .join("")}
`;

  productContainer.innerHTML = productTemplate;
}

export default shop;
