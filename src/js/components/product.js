import Header from "./header.js";

async function fetchProduct(id) {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  const product = await response.json();
  console.log(product);
	htmlProduct(product);
  return product;
}

function htmlProduct(product) {
  let price = new Intl.NumberFormat("pt-BR").format(product.price);
  var productHtml = `
		<div class="product-image">
			<figure class="aspect-ratio square">
				<img src="${product.image}" alt="${product.title}">
			</figure>
		</div>
		<div class="product-infos">
			<h1 class="name">
				${product.title}
			</h1>
			<p class="description">${product.description}</p>
			<del>R$ 2000,00</del>
			<ins>R$ ${price}</ins>
			<button type="button">
				Comprar
			</button>
		</div>
	`;

	document.getElementById("product-section").insertAdjacentHTML("beforeend", productHtml);
}

// let getIdProductt =
const params = new URLSearchParams(document.location.search);
const id = params.get("id");
console.log(id);
Header.init()
if (id) {
  fetchProduct(id);
}
