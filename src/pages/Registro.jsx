import React from 'react'
import { useState } from "react";


export default function Registro() {

  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [confirmarContraseña, setConfirmarContraseña] = useState("");
  const [error, setError] = useState(false);
  const [confirmacion, setConfirmacion] = useState(false);

  const validarDatos = (e) => {
    e.preventDefault()
    if (email == '' || contraseña == '' || confirmarContraseña == '' || contraseña.length < 6 || contraseña !== confirmarContraseña){
      setError(true)
      setConfirmacion(false)
      return
    }
    setError(false)
    setConfirmacion(true)
    setEmail('')
    setContraseña('')
    setConfirmarContraseña('')
  }

  return (
    <div className='contenedor_general'>
      <div className='formulario_contenedor'>
        <h1 className='titulo_form'>Formulario de Registro</h1>
        <form className='formulario' onSubmit={validarDatos}>
          {error ? <p className='mensaje_error'>Error en ingreso de datos</p> : null}
          {confirmacion ? <p className='msj_confirmacion'>Registrado con éxito</p> : null}
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
          <input type="password" 
          id='password2_form' 
          placeholder='Confirmar contraseña'
          onChange={(e)=>setConfirmarContraseña(e.target.value)}
          value={confirmarContraseña}/>
          <button type="submit" className="btn_enviar">Enviar</button>
        </form>
      </div>
    </div>
  )
}
