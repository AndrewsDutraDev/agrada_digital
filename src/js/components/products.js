import slider from "./slider.js";

const Products = {
  getAllProducts: async function () {
    const response = await fetch("https://fakestoreapi.com/products?limit=10");
    const products = await response.json();
    return products;
  },
  htmlProductBlock: function (product) {
    let price = new Intl.NumberFormat("pt-BR").format(product.price);
    var productBlockHtml = `
			<div class="product-block">
				<figure class="aspect-ratio square">
					<img src="${product.image}" alt="${product.title}">
				</figure>
				<div>
					<p class="name">
						${product.title}
					</p>
					<del>R$ 2.049,00</del>
					<ins>R$ ${price}</ins>
					<p class="installments">Ou 10x de R$179,90 sem juros</p>
					<a href="./produto.html?id=${product.id}" type="button">
						Comprar
					</a>
				</div>
			</div>
		`;
    return productBlockHtml;
    // document.getElementById(carouselId).insertAdjacentHTML("beforeend", productBlockHtml);
  },
  appendProducts: function (carouselClass) {
    let className = `.${carouselClass}`;
    let element = $(className);
    let secondElement = element[1];
    slider.setCarouselProducts(className);
    this.getAllProducts().then((products) => {
      products.map(function (product) {
        let htmlProduct = Products.htmlProductBlock(product);
        element.first().slick("slickAdd", htmlProduct);
        element.slick("slickAdd", htmlProduct);
      });
    });
  },
  cloneProductSection: function () {
    let products = document.querySelector(".products");
    let clonedProducts = products.cloneNode(true);
    let sectionClonedProducts = document.querySelector(".cloned-products");
    sectionClonedProducts.appendChild(clonedProducts);
  },
  init: function () {
    this.cloneProductSection();
    this.appendProducts("slider");
  },
};

export default Products;
