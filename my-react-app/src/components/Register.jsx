import React, { useState } from "react";
import user from "../imagenes/user.jpg";

export function Register(props) {
  const [cedula, setCedula] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const[name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("cedula", cedula);
    console.log("password", password);
  };

   return (
    <div className="register-form-container">
    <form className="login-form" onSubmit={handleSubmit}>
      
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
    <button className="link-btn" onClick={()=>{props.onFormSwitch('login')}}>Iniciar sesión</button>
    </div>
  );
}
