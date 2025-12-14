import React from 'react'

export default function Navbar() {
  const total = 25000;
  const token = false;
  return (
    <div className='navbar_home'>
      <div className='navbar_column_1'> 
        <div className='titulo_navbar'>
          Pizzería Mamma Mia!
        </div>
        <div className='menu_principal'>
          <div className='item_menu_principal' id='inicio_menu'>
            <div className='ico_menu_principal'><i className="bi bi-house-door-fill"></i></div>
            <div className='text_item_menu_principal'>Inicio</div>
          </div>
          <div className={token==false?'ocultar':'item_menu_principal'} id='perfil_menu'>
            <div className='ico_menu_principal'><i className="bi bi-person-fill"></i></div>
            <div className='text_item_menu_principal'>Perfil</div>
          </div>
          <div className={token==false?'ocultar':'item_menu_principal'}>
            <div className='ico_menu_principal'><i className="bi bi-lock-fill"></i></div>
            <div className='text_item_menu_principal'>Cerrar Sesión</div>
          </div>
          <div className={token==true?'ocultar':'item_menu_principal'}>
            <div className='ico_menu_principal'><i className="bi bi-unlock-fill"></i></div>
            <div className='text_item_menu_principal'>Login</div>
          </div>
          <div className={token==true?'ocultar':'item_menu_principal'}>
            <div className='ico_menu_principal'><i className="bi bi-pencil-square"></i></div>
            <div className='text_item_menu_principal'>Registro</div>
          </div>
        </div>
    </div> 
    <div className='carrito_navbar'>
      <div className='ico_menu_principal'><i className="bi bi-cart-fill"></i></div>
      <div className='text_item_menu_principal'>Total: $ {total.toLocaleString()}</div>
    </div>
  </div>
  )
}
