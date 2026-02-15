import React, { useContext } from "react";
import { useState } from "react";
import UserContext from "../context/UserContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [confirmacion, setConfirmacion] = useState(false);
  const { login } = useContext(UserContext);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const validarDatos = async (e) => {
    e.preventDefault();
    if (email === "" || password === "" || password.length < 6) {
      setError(true);
      setConfirmacion(false);
      return;
    }
    setError(false);
    setConfirmacion(false);

    const result = await login(email, password);
    if (result.success) {
      setConfirmacion(true);
      setEmail("");
      setPassword("");
    } else {
      setError(true);
      setConfirmacion(false);
    }
  };

  return (
    <div className="contenedor_general">
      <div className="formulario_contenedor">
        <h1 className="titulo_form">Login</h1>
        <form className="formulario" onSubmit={validarDatos}>
          {error ? (
            <p className="mensaje_error">Error en ingreso de datos</p>
          ) : null}
          {confirmacion ? (
            <p className="msj_confirmacion">Login logrado</p>
          ) : null}
          <input
            type="email"
            id="correo_form"
            placeholder="Correo electrónico"
            onChange={handleEmail}
            value={email}
          />
          <input
            type="password"
            id="password_form"
            placeholder="Contraseña (mín. 6 dígitos)"
            onChange={handlePassword}
            value={password}
          />
          <button type="submit" className="btn_enviar">
            Acceder
          </button>
        </form>
      </div>
    </div>
  );
}
