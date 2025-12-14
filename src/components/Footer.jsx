import React from 'react'

export default function Footer() {
  var today = new Date();
  var year = today.getFullYear();

  return (
    <div className='pie_de_pagina'>
      © {year} Pizzería Mamma Mia - Todos los derechos reservados
    </div>
  )
}
