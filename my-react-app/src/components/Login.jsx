import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";
import logo from "../imagenes/logo.jpg";
import { useNavigate } from "react-router-dom";

export function Login(props) {
  const [cedula, setCedula] = useState("");
  const [password, setPassword] = useState("");
  const { token, login, logout, error, isAuthenticated, setIsAuthenticated } =
    useContext(AuthContext); // obtener isAuthenticated y setIsAuthenticated del contexto
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    logout(); // llamar a la función de logout al montar el componente
  }, []); // asegurarse de que la función de logout sea una dependencia de useEffect

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("cedula", cedula);
    console.log("password", password);
  };

  const handleLogin = async () => {
    setIsLoading(true);

    try {
      const success = await login(cedula, password);
      setIsLoading(false);
      navigate("/");
      console.log(
        "success:",
        "token",
        token,
        "isAuthenticated",
        isAuthenticated,
        "error",
        error
      );
    } catch (error) {
      setIsLoading(false);
      console.log(
        "error:",
        "token",
        token,
        "isAuthenticated",
        isAuthenticated,
        "error",
        error
      );
      alert("Credenciales inválidas");
    }
  };

  return (
    
    <div className="auth-form-container">
      
      <div className="logo">
        <img className="image" src={logo} alt="Logo" />
      </div>
      <div className="input-Data">
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="cedula">Cédula:</label>
          <input
            value={cedula}
            type={"cedula"}
            className="form-control"
            onChange={(e) => setCedula(e.target.value)}
            placeholder="11X XXX XXX X"
          />
          <label htmlFor="password">Contraseña:</label>
          <input
            value={password}
            type={"password"}
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="*******"
          />
          <button onClick={handleLogin} disabled={isLoading}>
            {isLoading ? "Cargando..." : "Log in"}
          </button>
        </form>
        <div className="Login-Register-Button">
          <button
            className="link-btn"
            onClick={() => {
              navigate("/Register");
            }}
          >
            Registrate aquí
          </button>
        </div>
      </div>
    </div>
  );
}
