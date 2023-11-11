import slider from './slider.js';

const Products = {
	getAllProducts: async function(){
		console.log('fetchProducts')
		const response = await fetch('https://fakestoreapi.com/products?limit=10');
		const products = await response.json();
		console.log('products', products)
		return products;
	},
	htmlProductBlock: function(product, carouselId){
		let price = new Intl.NumberFormat('pt-BR').format(product.price)
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
					<button type="button">
						Comprar
					</button>
				</div>
			</div>
		`
		return productBlockHtml;
		// document.getElementById(carouselId).insertAdjacentHTML("beforeend", productBlockHtml);
	},
	appendProducts: function(carouselId){
		let id = `#${carouselId}`
		slider.setCarouselProducts(id)
		this.getAllProducts().then(products => {
			products.map(function(product){
				let htmlProduct = Products.htmlProductBlock(product, carouselId)
				$(id).slick('slickAdd', htmlProduct);
			});
		});
	},
	init: function(){
		console.log('init')
		this.appendProducts('carousel-1');
	}
};

export default Products;