import { createContext, useState, useEffect } from "react";

const CartContext = createContext();


const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [sumaTotalcarrito, setSumaTotalcarrito] = useState(0);

    const agregarAlCarrito = (pizza) => {
        if (cart.find(item => item.id === pizza.id)) {
            const nuevoCart = cart.map(item => {
                if (item.id === pizza.id) {
                    return { ...item, count: item.count + 1 };
                }
                return item;
            });
            setCart(nuevoCart);
        } else {
            setCart([...cart, { ...pizza, count: 1 }]);
        }

    }


    const restarDelCarrito = (pizzaId) => {
        const nuevoCart = cart.map(item => {
            if (item.id === pizzaId) {
                return { ...item, count: item.count - 1 };
            }
            return item;
        }).filter(item => item.count > 0);
        setCart(nuevoCart);
    }

    useEffect(() => {
        const total = cart.reduce((sumatoria, item) => sumatoria + item.precio * item.count, 0);
        setSumaTotalcarrito(total);
    }, [cart]);

    

    return(
        <CartContext.Provider value={{cart, agregarAlCarrito, restarDelCarrito, sumaTotalcarrito}}>
            {children}
        </CartContext.Provider>
    )
}

export { CartContext, CartProvider };