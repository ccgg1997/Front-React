import { useState } from "react";
import logo from "../imagenes/logo.jpg";


export function Login(props) {
  const [cedula, setcedula] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("cedula", cedula);
    console.log("password", password);
  };

  const login = async (event) => {
    const url = "http://localhost:5000/api/users/signin";
    const data = { id: "99", password: "1234" };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const response = await fetch(url, options);

    const json = await response.json();
    console.log(json);
  };

  return (
    <div className="auth-form-container">
      <div className="logo">
        <img className="image" src={logo} />
      </div>
      <div className="input-Data">
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="cedula">Cédula:</label>
          <input
            value={cedula}
            type={"cedula"}
            onChange={(e) => setcedula(e.target.value)}
            placeholder="11X XXX XXX X"
          />
          <label htmlFor="password">Contraseña:</label>
          <input
            value={password}
            type={"password"}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="*******"
          />
          <button
            onClick={() => {
              login();
              console.log("probando");
            }}
          >
            Log in
          </button>
        </form>
        <button
          className="link-btn"
          onClick={() => {
            props.onFormSwitch("register");
          }}
        >
          Registrate aquí
        </button>
      </div>
    </div>
  );
}
