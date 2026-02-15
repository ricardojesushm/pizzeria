import React, { useState, useEffect, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import UserContext from '../context/UserContext';

export default function Carrito() {
    const { cart, agregarAlCarrito, restarDelCarrito } = useContext(CartContext);
    const [total, setTotal] = useState(0);
    const {token} = useContext(UserContext);
    const [compraExitosa, setCompraExitosa] = useState(false);

    useEffect(() => {
        const suma = cart.reduce((acum, item) => acum + item.precio * item.count, 0);
        setTotal(suma);
        setCompraExitosa(false); // Oculta el mensaje si el carrito cambia
    }, [cart]);

    function añadirItems(idPizza) {
        const pizza = cart.find(p => p.id === idPizza);
        if (pizza) {
            agregarAlCarrito(pizza);
        }
    }

    function restarItems(idPizza) {
        restarDelCarrito(idPizza);
    }

    
    const handlePagar = async () => {
        try {
            const response = await fetch("http://localhost:5001/api/checkouts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ cart }),
            });
            const data = await response.json();
            if (response.ok) {
                setCompraExitosa(true);
            } else {
                alert(data.message || "Error al procesar el pago");
            }
        } catch (error) {
            alert("Error de conexión con el servidor");
        }
    };

    return(
        <section className='carrito_contenedor'>
            <div className='titulo_carrito'>Detalles del pedido</div>
            {compraExitosa && (
                <div className="msj_confirmacion" style={{marginBottom: 16, textAlign: 'center'}}>
                  ¡Compra realizada con éxito!
                </div>
            )}
            <div className='contenedor_items_carrito'>
                {cart.map((itemCart) => (
                    <div className='item_carrito' key={itemCart.id}>
                        <div className='item_carrito_col1'>
                            <img src={itemCart.img} alt={itemCart.nombre}/>
                            <div className='titulo_item_carrito'>{itemCart.nombre}</div>
                        </div>
                        <div className='item_carrito_col2'>
                            <div className='subtotal'>$ {(itemCart.precio * itemCart.count).toLocaleString()}</div>
                            <button className='btn_sumar' onClick={() => añadirItems(itemCart.id)}>+</button>
                            <div className='cantidad'>{itemCart.count}</div>
                            <button className='btn_restar' onClick={() => restarItems(itemCart.id)}>-</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className='total_carrito'>Total: $ {total.toLocaleString()}</div>
            <button className='btn_pagar' disabled={!token} onClick={handlePagar}><i className="bi bi-credit-card-fill"></i> Pagar</button>
        </section>
    )
}