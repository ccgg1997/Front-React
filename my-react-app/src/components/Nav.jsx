import React from "react";
import { useNavigate } from "react-router-dom";

export function Nav(props) {
  const navigate = useNavigate();

  async function handleLogin() {
    //window.location.reload();
    // ...Lógica para cerrar sesión...
    await props.logout();
    navigate("/Login");
    
  }
  function handleHome() {
    // ...Lógica para cerrar sesión...
    navigate("/");
    
  }
  function handleFacturacion() {
    // ...Lógica para cerrar sesión...
    navigate("/Facturacion");
  }

  return (
    <div className="header">
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#">
          Bolsas Romy
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#" onClick={handleHome}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Inventario
              </a>
            </li>
            <li className="nav-item">
              <a onClick={handleFacturacion} className="nav-link" href="#">
                Facturacion
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                User
              </a>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <a onClick={handleLogin} className="dropdown-item" href="#">
                    Login
                  </a>
                </li>
                <li>
                  <a onClick={handleLogin} className="dropdown-item" href="#">
                    Logout
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    asd
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
  );
}
