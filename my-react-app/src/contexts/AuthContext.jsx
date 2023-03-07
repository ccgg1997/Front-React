import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = async (cedula, password) => {
    try {
      const response = await fetch("http://localhost:5000/api/users/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: cedula, password }),
      });

      if (response.ok) {
        const json = await response.json();
        setToken(json.token);
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
        throw new Error("Credenciales inválidas");
        
      }
    } catch (error) {
      setIsAuthenticated(false);
      throw new Error("Error de inicio de sesión");
    }
  };

  const logout = () => {
    setToken(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ token, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
