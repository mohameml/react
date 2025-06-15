import { faker } from "@faker-js/faker";

const products = Array.from({ length: 20 }, () => {
	return {
		productName: faker.commerce.productName(),
		description: faker.commerce.productDescription(),
		price: faker.commerce.price(),
	};
});

export default function ProductItem({ product }) {
	return (
		<li className="product">
			<p className="product-name">{product.productName}</p>
			<p className="product-price">${product.price}</p>
			<p className="product-description">{product.description}</p>
		</li>
	);
}

// LATER: Let's say we got this component from a 3rd-party library, and can't change it. But we still want to add the 2 toggle functionalities to it
function ProductList({ items }) {
	return (
		<div>
			<ul className="list">
				{items.map((product) => (
					<ProductItem key={product.productName} product={product} />
				))}
			</ul>
		</div>
	);
}

// eslint-disable-next-line react-refresh/only-export-components
export { products, ProductList };
