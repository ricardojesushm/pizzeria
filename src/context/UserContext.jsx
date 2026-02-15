import { createContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [email, setEmail] = useState("");

  const login = async (emailInput, password) => {
    try {
      const response = await fetch("http://localhost:5001/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: emailInput, password }),
      });
      const data = await response.json();
      if (response.ok) {
        setToken(data.token);
        setEmail(data.email);
        return { success: true };
      } else {
        return { success: false, message: data.message || "Login fallido" };
      }
    } catch (error) {
      return { success: false, message: error.message };
    }
  };

  const register = async (emailInput, password) => {
    try {
      const response = await fetch("http://localhost:5001/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: emailInput, password }),
      });
      const data = await response.json();
      if (response.ok) {
        setToken(data.token);
        setEmail(data.email);
        return { success: true };
      } else {
        return { success: false, message: data.message || "Registro fallido" };
      }
    } catch (error) {
      return { success: false, message: error.message };
    }
  };

  const logout = () => {
    setToken(null);
    setEmail("");
  };

  const getProfile = async () => {
    if (!token) return { success: false, message: "No autenticado" };
    try {
      const response = await fetch("http://localhost:5001/api/auth/me", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      if (response.ok) {
        return { success: true, profile: data };
      } else {
        return {
          success: false,
          message: data.message || "Error al obtener perfil",
        };
      }
    } catch (error) {
      return { success: false, message: error.message };
    }
  };

  return (
    <UserContext.Provider
      value={{ token, email, login, register, logout, getProfile }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
