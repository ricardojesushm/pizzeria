
import React, { useEffect, useState } from 'react';
import Header from './Header';
import CardPizza from './CardPizza';


export default function Home() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const res = await fetch('http://localhost:5001/api/pizzas');
        const data = await res.json();
        setPizzas(data);
      } catch (error) {
        console.error('Error al obtener pizzas:', error);
      }
    };
    fetchPizzas();
  }, []);

  return (
    <div>
      <Header />
      <div className='contenedor_productos'>
        {pizzas.map((pizza) => (
          <CardPizza
            key={pizza.id}
            img={pizza.img}
            nombre={pizza.name}
            precio={pizza.price}
            ingredientes={pizza.ingredients}
          />
        ))}
      </div>
    </div>
  );
}
