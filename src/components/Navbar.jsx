import React from 'react'
import { Link } from 'react-router-dom';
import '../assets/css/Estilos.css'
import { NavLink, useNavigate } from 'react-router-dom';
import { createContext } from 'react';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import UserContext from '../context/UserContext';

export default function Navbar() {
  const { sumaTotalcarrito } = useContext(CartContext);
  const total = sumaTotalcarrito;
  const { token, setToken } = useContext(UserContext);
  const navigate = useNavigate();
  return (
    <div className='navbar_home'>
      <div className='navbar_column_1'> 
        <div className='titulo_navbar'>
          Pizzería Mamma Mia!
        </div>
        <div className='menu_principal'>
          <div className='item_menu_principal' id='inicio_menu'>
            <div className='ico_menu_principal'><i className="bi bi-house-door-fill"></i></div>
            <div><NavLink to="/" className={({isActive})=>(isActive?'text_item_menu_principal active':'text_item_menu_principal')}>Inicio</NavLink></div>
          </div>
          <div className={token==false?'ocultar':'item_menu_principal'} id='perfil_menu'>
            <div className='ico_menu_principal'><i className="bi bi-person-fill"></i></div>
            <div><NavLink to="/profile" className={({isActive})=>(isActive?'text_item_menu_principal active':'text_item_menu_principal')}>Perfil</NavLink></div>
          </div>
          <div className={token==false?'ocultar':'item_menu_principal'}>
            <div className='ico_menu_principal'><i className="bi bi-lock-fill"></i></div>
            <div><Link onClick={() => {setToken(false); navigate("/login")}} className='text_item_menu_principal'>Cerrar Sesión</Link></div>
          </div>
          <div className={token==true?'ocultar':'item_menu_principal'}>
            <div className='ico_menu_principal'><i className="bi bi-unlock-fill"></i></div>
            <div><NavLink to="/login" className={({isActive})=>(isActive?'text_item_menu_principal active':'text_item_menu_principal')}>Login</NavLink></div>
          </div>
          <div className={token==true?'ocultar':'item_menu_principal'}>
            <div className='ico_menu_principal'><i className="bi bi-pencil-square"></i></div>
            <div><NavLink to="/registro" className={({isActive})=>(isActive?'text_item_menu_principal active':'text_item_menu_principal')}>Registro</NavLink></div>
          </div>
        </div>
    </div> 
    <div className='carrito_navbar'>
      <div className='ico_menu_principal'><i className="bi bi-cart-fill"></i></div>
      <div><Link to="/carrito" className='text_item_menu_principal'>Total: $ {total.toLocaleString()}</Link></div>
    </div>
  </div>
  )
}
