import React, { useState, useContext } from "react";
import user from "../imagenes/user.jpg";
import { AuthContext } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';


export function Register() {
  const [cedula, setCedula] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const[name, setName] = useState("");
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("cedula", cedula);
    console.log("password", password);
    console.log('entro en el register:'+isAuthenticated)
  };

   return (
    <div className="register-form-container">
    <form className="register-form" onSubmit={handleSubmit}>
      
        <div className="user">
          <img className="image" src={user} />
        </div>
      <label htmlFor="cedula">Cédula:</label>
      <input
        value={cedula}
        type={"cedula"}
        onChange={(e) => setCedula(e.target.value)}
        placeholder="11X XXX XXX"
      />  
      <label htmlFor="name">Nombre Completo</label>
      <input
        value={name}
        id='name'
        type={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Myname "
      />
      <label htmlFor="password">Contraseña:</label>
      <input
        value={password}
        type={"password"}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="*******"
      />
      <label htmlFor="confirmPassword">Confirmar Contraseña:</label>
      <input
        value={confirmPassword}
        type={"password"}
        onChange={(e) => setConfirmPassword(e.target.value)}
        placeholder="*******"
      
      />
      
      
      <button>Guardar Datos</button>
    </form>
    <button className="link-btn" onClick={()=>{ navigate('/login')}}>Iniciar sesión</button>
    </div>
  );
}
