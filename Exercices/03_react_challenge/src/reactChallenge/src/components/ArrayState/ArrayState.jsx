import { useState } from "react";
import "./ArrayState.css";
export default function ArrayState() {
    const initialProducts = [
        {
            id: 0,
            name: "Baklava",
            count: 1,
        },
        {
            id: 1,
            name: "Cheese",
            count: 5,
        },
        {
            id: 2,
            name: "Spaghetti",
            count: 2,
        },
    ];

    const [product, setProduct] = useState(initialProducts);

    function handelPlus(id) {
        setProduct(
            product.map((ele) => {
                if (ele.id === id) {
                    ele.count++;
                    return ele;
                }

                return ele;
            })
        );
    }

    function handelMoins(id) {
        for (let prod of product) {
            console.log(prod);
            if (prod.id === id) {
                if (prod.count === 1) {
                    setProduct(
                        product.filter((ele) => {
                            if (ele.id === id) {
                                return false;
                            }
                            return true;
                        })
                    );
                } else {
                    setProduct(
                        product.map((ele) => {
                            if (ele.id === id) {
                                ele.count--;
                                return ele;
                            }

                            return ele;
                        })
                    );
                }
            }
        }
    }

    const productList = product.map((ele) => {
        return (
            <li key={ele.id}>
                {ele.name} ({ele.count})
                <button onClick={() => handelPlus(ele.id)}>+</button>
                <button onClick={() => handelMoins(ele.id)}>-</button>
            </li>
        );
    });

    return (
        <>
            <div className="products">
                <ul>{productList}</ul>
            </div>
        </>
    );
}
