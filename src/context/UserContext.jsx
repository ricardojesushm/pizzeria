import { createContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(true);
    const login =()=>{
        setToken(true);
    }
    const logout =()=>{
        setToken(false);
    }
  return (
    <UserContext.Provider value={{ token, setToken, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;