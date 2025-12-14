import React from 'react'
import { useState } from "react";


export default function Login() {

  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [error, setError] = useState(false);
  const [confirmacion, setConfirmacion] = useState(false);

  const validarDatos = (e) => {
    e.preventDefault()
    if (email == '' || contraseña == '' || contraseña.length < 6){
      setError(true)
      setConfirmacion(false)
      return
    }
    setError(false)
    setConfirmacion(true)
    setEmail('')
    setContraseña('')
  }

  return (
    <div className='contenedor_general'>
      <div className='formulario_contenedor'>
        <h1 className='titulo_form'>Login</h1>
        <form className='formulario' onSubmit={validarDatos}>
          {error ? <p className='mensaje_error'>Error en ingreso de datos</p> : null}
          {confirmacion ? <p className='msj_confirmacion'>Login logrado</p> : null}
          <input 
          type="email" 
          id='correo_form' 
          placeholder='Correo electrónico'
          onChange={(e)=>setEmail(e.target.value)}
          value={email}/>
          <input type="password" 
          id='password1_form' 
          placeholder='Contraseña (mín. 6 dígitos)'
          onChange={(e)=>setContraseña(e.target.value)}
          value={contraseña}/>
          <button type="submit" className="btn_enviar">Acceder</button>
        </form>
      </div>
    </div>
  )
}
