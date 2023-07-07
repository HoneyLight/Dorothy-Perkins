import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const DPcontext = createContext();

function DPProvider(props) {
    
    const [cart, setCart] = useState([]);

    const localData = JSON.parse(localStorage.getItem("DPDebby"))

    useEffect(() => {
        if (localData) {
            setCart(localData)
        }
    }, [])

    return(
        <DPcontext.Provider value = {{cart, setCart}}>
            {props.children}
        </DPcontext.Provider>
    )
}

export default DPProvider;