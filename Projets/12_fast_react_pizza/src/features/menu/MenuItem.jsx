import { formatCurrency } from "../../utils/helpers";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { addItem, getCurrentQuantityById } from "../cart/cartSlice";
import { useSelector } from "react-redux";
import DeleteItem from "../cart/DeleteItem";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";

function MenuItem({ pizza }) {
    const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

    const dispatch = useDispatch();

    const currentQuantity = useSelector(getCurrentQuantityById(id));

    const isSelected = currentQuantity > 0;

    const handleClick = () => {
        const newItem = {
            pizzaId: id,
            name: name,
            quantity: 1,
            unitPrice: unitPrice,
            totalPrice: unitPrice * 1,
        };
        console.log(newItem);

        dispatch(addItem(newItem));
    };

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

                    {isSelected && (
                        <div className="flex items-center gap-3 sm:gap-8">
                            <UpdateItemQuantity
                                id={id}
                                currentQuantity={currentQuantity}
                            />
                            <DeleteItem id={id} />
                        </div>
                    )}

                    {!soldOut && !isSelected && (
                        <Button type="small" onClick={handleClick}>
                            Add to Cart
                        </Button>
                    )}
                </div>
            </div>
            <hr />
        </li>
    );
}

export default MenuItem;
