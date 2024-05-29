import { createContext } from "react";

export let valueContext = createContext({
    value: "valInit",
    handelChange: null,
});
