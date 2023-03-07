import React from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
  

export function Facturacion() {
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/Login");
    } // llamar a la función de logout al montar el componente
  }, []);

  
  return (
    <div className="Facturacion">FACTURACION</div>
  );
}
