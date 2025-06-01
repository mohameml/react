import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, redirect, useActionData, useNavigation } from "react-router-dom";

import store from "../../store";
import Button from "../../ui/Button";
import EmptyCart from "../cart/EmptyCart";
import { fetchAddress } from "../user/userSlice";
import { createOrder } from "../../services/apiRestaurant";
import { formatCurrency, isValidPhone } from "../../utils/helpers";
import { clearCart, getCart, getTotalePrice } from "../cart/cartSlice";

function CreateOrder() {
    const [withPriority, setWithPriority] = useState(false);

    // Redux :
    const cart = useSelector(getCart);

    let totalCartPrice = useSelector(getTotalePrice);
    const priorityPrice = withPriority ? totalCartPrice * 0.2 : 0;
    totalCartPrice += priorityPrice;

    const {
        username,
        address,
        position,
        status: addressStatus,
        error: errorAddress,
    } = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const isLoadingAddress = addressStatus === "Loading";

    // React Router :

    const navigation = useNavigation();
    const isSubmitting = navigation.state === "submitting";

    const errors = useActionData();

    if (!cart.length) return <EmptyCart />;

    return (
        <div className="px-4 py-6">
            <h2 className="mb-8 text-xl font-semibold">
                Ready to order? Let's go!
            </h2>

            <Form method="POST">
                <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
                    <label className="sm:basis-40">First Name</label>
                    <input
                        type="text"
                        name="customer"
                        defaultValue={username}
                        required
                        className="input grow"
                    />
                </div>

                <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
                    <label className="sm:basis-40">Phone number</label>
                    <div className="grow">
                        <input
                            type="tel"
                            name="phone"
                            required
                            className="input w-full"
                        />
                        {errors?.phone && (
                            <p className="mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700">
                                {errors.phone}
                            </p>
                        )}
                    </div>
                </div>

                <div className="relative mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
                    <label className="sm:basis-40">Address</label>
                    <div className="grow">
                        <input
                            className="input w-full"
                            type="text"
                            name="address"
                            disabled={isLoadingAddress}
                            defaultValue={address}
                            required
                        />

                        {addressStatus === "error" && (
                            <p className="mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700">
                                {errorAddress}
                            </p>
                        )}
                    </div>

                    {!position.latitude && !position.longitude && (
                        <span className="absolute top-[3px] right-[3px] z-50 md:top-[5px] md:right-[5px]">
                            <Button
                                type="small"
                                disabled={isLoadingAddress}
                                onClick={(e) => {
                                    e.preventDefault();
                                    dispatch(fetchAddress());
                                }}
                            >
                                Get Your Position
                            </Button>
                        </span>
                    )}
                </div>

                <div className="mb-12 flex items-center gap-4 py-2">
                    <input
                        type="checkbox"
                        name="priority"
                        id="priority"
                        className="h-6 w-6 accent-yellow-400 focus:ring focus:ring-yellow-400 focus:ring-offset-2 focus:outline-none"
                        value={withPriority}
                        onChange={(e) => setWithPriority(e.target.checked)}
                    />
                    <label htmlFor="priority" className="font-medium">
                        Want to yo give your order priority?
                    </label>
                </div>

                <div>
                    <input
                        type="hidden"
                        name="cart"
                        value={JSON.stringify(cart)}
                    />

                    <input
                        type="hidden"
                        name="position"
                        value={
                            position.latitude && position.latitude
                                ? `${position.latitude},${position.longitude}`
                                : ""
                        }
                    />

                    <Button
                        disabled={isSubmitting || isLoadingAddress}
                        type="primary"
                    >
                        {isSubmitting
                            ? "Placing Order ...."
                            : `Order now for ${formatCurrency(totalCartPrice)}`}
                    </Button>
                </div>
            </Form>
        </div>
    );
}

export async function action({ request }) {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    const order = {
        ...data,
        cart: JSON.parse(data.cart),
        priority: data.priority === "true",
    };

    console.log(order);

    const errors = {};

    if (!isValidPhone(order.phone))
        errors.phone =
            "Please give us your correct phone number. We might need it to contact you.";

    if (Object.keys(errors).length > 0) return errors;

    const newOrder = await createOrder(order);

    store.dispatch(clearCart());

    return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
