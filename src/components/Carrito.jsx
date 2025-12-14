import React from 'react'
import { pizzaCart } from '../assets/js/pizzas'
import { useState } from 'react'

export default function Carrito() {

    let sumaTotal=0

    const [pizzas, setPizzas] = useState(pizzaCart);

    function añadirItems(idPizza){
        let nuevoCart = pizzas.map(pizza=>{
            if (pizza.id==idPizza){
                return {
                    ...pizza, count:pizza.count+1
                } 
            } else {
                return pizza;
            }
        }
        )
        setPizzas(nuevoCart);
    };

        
    function restarItems(idPizza){
     let nuevoCart = pizzas.map(pizza=>{
            if (pizza.id==idPizza){
                return {
                    ...pizza, count:pizza.count-1
                } 
            } else {
                return pizza;
         }
        }
        )
        .filter(pizza => pizza.count > 0); // Elimina las pizzas con count 0
     setPizzas(nuevoCart);
     };

    return(
        <section className='carrito_contenedor'>
            <div className='titulo_carrito'>Detalles del pedido</div>
            <div className='contenedor_items_carrito'>
                {pizzas.map((itemCart, index)=>(
                    
                    <div className='item_carrito' key={index}>
                        <div className='item_carrito_col1'>
                            <img src={itemCart.img}/>
                            <div className='titulo_item_carrito'>{itemCart.name}</div>
                        </div>
                        <div className='item_carrito_col2'>
                            <div className='subtotal'>$ {(itemCart.price * itemCart.count).toLocaleString()}</div>
                            <button className='btn_sumar' onClick={()=>{
                                añadirItems(itemCart.id);
                            }}>+</button>
                            <div className='cantidad'>{itemCart.count}</div>
                            <button className='btn_restar' onClick={()=>{restarItems(itemCart.id,itemCart.count)}}>-</button>
                        </div>
                        
                        <div className='subtotal_items'>{sumaTotal=sumaTotal+(itemCart.price*itemCart.count)}</div>
                    </div>
                    
                ))
              
                }
                
            </div>
            <div className='total_carrito'>Total: $ {sumaTotal.toLocaleString()}</div>
            <button className='btn_pagar'><i className="bi bi-credit-card-fill"></i> Pagar</button>
        </section>
    )
}