import React from "react";

export default function Profile() {
  // Datos fijos de ejemplo
  const nombre = "Ricardo";
  const email = "ricardo@pizzeria.com";
  const telefono = "987654321";
  const direccion = "Av. Italia 123";
  const onLogout = () => {
    window.location.href = "/login";
  };
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: 24,
      background: "#fff8f0",
      borderRadius: 16,
      boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
      maxWidth: 400,
      margin: "40px auto",
      width: "90vw",
  // minHeight eliminado para que el contenedor no ocupe todo el alto
    }}>
      <img
        src="../src/assets/img/icono-pizza.webp"
        alt="Profile pizza"
        style={{ width: 70, marginBottom: 12, borderRadius: "50%", border: "2px solid #ffb347" }}
      />
      <h2 style={{ margin: 0, color: "#b22222", fontSize: 28, textAlign: "center" }}>Perfil de usuario</h2>
      <div style={{ width: "100%", margin: "18px 0 24px 0", color: "#333", fontSize: 17 }}>
        <div style={{ marginBottom: 8 }}><strong>Nombre:</strong> {nombre}</div>
        <div style={{ marginBottom: 8 }}><strong>Email:</strong> {email}</div>
        <div style={{ marginBottom: 8 }}><strong>Teléfono:</strong> {telefono}</div>
        <div style={{ marginBottom: 8 }}><strong>Dirección:</strong> {direccion}</div>
      </div>
      <button
        onClick={onLogout}
        style={{
          background: "#ffb347",
          color: "#fff",
          padding: "10px 28px",
          border: "none",
          borderRadius: 30,
          fontWeight: 600,
          fontSize: 16,
          cursor: "pointer",
          width: "100%",
          maxWidth: 250
        }}
      >
        Cerrar sesión
      </button>
      <style>{`
        html, body {
          height: 100vh;
          min-height: 100vh;
        }
        body {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        @media (max-width: 600px) {
          div[style*='max-width: 400px'] {
            padding: 12px !important;
            max-width: 98vw !important;
            margin: 20px auto !important;
          }
          h2 {
            font-size: 22px !important;
          }
          button {
            font-size: 15px !important;
            padding: 10px 0 !important;
          }
        }
      `}</style>
    </div>
  );
}
