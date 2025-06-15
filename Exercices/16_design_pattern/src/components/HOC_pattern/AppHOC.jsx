import { ProductList, products } from "./Product";
import { companies } from "../render_props_pattern/Company";
import withToggles from "./HOC";

const ProductListWithToggles = withToggles(ProductList);

export default function AppHOC() {
	return (
		<div>
			<h1>HOC Demo</h1>

			<div className="col-2">
				<ProductListWithToggles
					items={products}
					title={"Products HOC"}
				/>
				<ProductListWithToggles
					items={companies}
					title={"Companies HOC"}
				/>
			</div>
		</div>
	);
}
