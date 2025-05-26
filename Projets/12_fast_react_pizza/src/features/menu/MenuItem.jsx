import { formatCurrency } from "../../utils/helpers";
import Button from "../../ui/Button";

function MenuItem({ pizza }) {
    const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

    return (
        <li className="flex gap-4 py-2">
            <img
                src={imageUrl}
                alt={name}
                className={`h-24 ${soldOut ? "opacity-75 grayscale" : ""}`}
            />
            <div className="flex grow flex-col pt-0.5">
                <p className="font-semibold">{name}</p>
                <p className="text-sm text-stone-500 capitalize italic">
                    {ingredients.join(", ")}
                </p>
                <div className="mt-auto flex items-center justify-between text-sm uppercase">
                    {!soldOut ? (
                        <p>{formatCurrency(unitPrice)}</p>
                    ) : (
                        <p className="font-medium text-stone-500">Sold out</p>
                    )}
                    <Button type="small">Add to Cart</Button>
                </div>
            </div>
            <hr />
        </li>
    );
}

export default MenuItem;
