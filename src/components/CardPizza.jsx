import React from 'react'

export default function CardPizza({img,nombre,precio='0',ingredientes}) {
  return (
    <div className='contenedor_card_pizza'>
      <div className='imagen_card_pizza'><img src={img}></img></div>
      <div className='titulo_card_pizza'>{nombre}</div>
      <div className='detalle'>
        <div className='descripcion'>
          <div className='titulo_descripcion'>Ingredientes:</div>
          <div className='ingredientes_pizza'>{ingredientes.map((ingrediente)=>(<div className='ingrediente_pizza'><img src='./src/assets/img/icono-pizza.webp'></img><div>{ingrediente}&nbsp;</div></div>))}</div>
        </div>
        <div className='footer_card_pizza'>
          <div className='separador_card'></div>
          <div className='precio_pizza'>Precio: ${precio.toLocaleString()}</div>
          <div className='botones_card_pizza'>
            <button id='ver_mas' className='boton_ver_mas'><i className="bi bi-search">&nbsp;Ver más</i></button>
            <button id='sumar_al_carrito' className='boton_carrito'><i className="bi bi-cart"></i>&nbsp;Añadir</button>
          </div>
        </div>
      </div>
    </div>
  )

 

}
