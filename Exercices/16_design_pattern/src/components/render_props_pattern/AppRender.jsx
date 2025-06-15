import ProductItem, { products } from "../HOC_pattern/Product";
import CompanyItem, { companies } from "./Company";
import List from "./List";

export default function AppRender() {
	return (
		<div>
			<h1>Render Props Demo</h1>

			<div className="col-2">
				<List
					title="Products"
					items={products}
					render={(product) => (
						<ProductItem
							key={product.productName}
							product={product}
						/>
					)}
				/>
				<List
					title="Companies"
					items={companies}
					render={(company) => (
						<CompanyItem
							key={company.companyName}
							company={company}
						/>
					)}
				/>
			</div>
		</div>
	);
}
