import { useState, useEffect,useContext } from "react";
import "./App.css";

//componentes
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { Home } from "./components/Home";
import { Facturacion } from "./components/Facturacion";
import { Nav } from "./components/Nav";


//context
import { AuthProvider,AuthContext } from "./contexts/AuthContext";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

function App() {

  function Layout() {
    const { isAuthenticated, logout } = useContext(AuthContext);
    console.log("isAuthenticated linea 20", isAuthenticated);
  
    return (
    
      <div className="App" style={{ backgroundColor: isAuthenticated ? "white" : "transparent" }}>
        
        <Nav className="header" logout={logout} />
        <div className="aside"></div>
        <div className="aside2"></div>
        <div className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Facturacion" element={<Facturacion />} />
          </Routes>
        </div>
      </div>
    );
  }

  return (
    <AuthProvider>
      <Router>
        <Layout />
      </Router>
    </AuthProvider>
  );
}

export default App;
