import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Pizza() {
  const [pizza, setPizza] = useState(null);
  const { id } = useParams();
  const { agregarAlCarrito } = useContext(CartContext);

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const res = await fetch(`http://localhost:5001/api/pizzas/${id}`);
        const data = await res.json();
        setPizza(data);
      } catch (error) {
        console.error("Error al obtener pizzas:", error);
      }
    };
    fetchPizza();
  }, [id]);

  return (
    <div className="pizza_individual">
      {pizza ? (
        <div key={pizza.id} className="contenedor_pizza">
          <div className="imagen_pizza">
            <img src={pizza.img} alt={pizza.name} />
          </div>
          <div className="info_pizza">
            <h2>{pizza.name}</h2>
            <div className="descripcion">
              <div className="titulo_descripcion">Ingredientes:</div>
              <div className="ingredientes_pizza">
                {pizza.ingredients.map((ingredient) => (
                  <div className="ingrediente_pizza" key={ingredient}>
                    <img
                      src="../src/assets/img/icono-pizza.webp"
                      alt={ingredient}
                    />
                    <div>{ingredient}&nbsp;</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="precio_pizza">
              Precio: ${pizza.price.toLocaleString()}
            </div>
            <button
              id="sumar_al_carrito"
              className="boton_carrito"
              onClick={() => agregarAlCarrito({ ...pizza, count: 1, precio: pizza.price, nombre: pizza.name })}
            >
              <i className="bi bi-cart"></i>&nbsp;Añadir
            </button>
          </div>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
}
