import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/Estilos.css";

export default function NotFound() {
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      background: "#fff8f0",
      color: "#b22222"
    }}>
      <img
        src="../src/assets/img/icono-pizza.webp"
        alt="404 pizza"
        style={{ width: 120, marginBottom: 24 }}
      />
      <h1 style={{ fontSize: 64, margin: 0 }}>404</h1>
      <h2 style={{ fontWeight: 400, margin: "8px 0 24px 0" }}>
        ¡Uy! Página no encontrada
      </h2>
      <p style={{ color: "#333", marginBottom: 32 , textAlign: "center" }}>
        Parece que la pizza que buscas no está en el menú.<br />
        ¿Quieres volver al inicio?
      </p>
      <Link to="/" style={{
        background: "#ffb347",
        color: "#fff",
        padding: "12px 32px",
        borderRadius: 30,
        textDecoration: "none",
        fontWeight: 600,
        fontSize: 18,
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)"
      }}>
        Volver al Home
      </Link>
    </div>
  );
}
