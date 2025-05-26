import React from "react";
import SearchOrder from "../features/order/SearchOrder";
import { Link } from "react-router-dom";
import Username from "../features/user/Username";

export default function Header() {
    return (
        <div className="font-roboto text-huge flex items-center justify-between border-b border-stone-200 bg-yellow-500 px-4 py-3 uppercase sm:px-10">
            <Link to="/" className="tracking-widest">
                Fast React PIZZA Co.
            </Link>

            <SearchOrder />

            <Username />
        </div>
    );
}
