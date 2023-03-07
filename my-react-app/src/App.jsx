import { useState } from "react";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import "./App.css";
import { AuthProvider } from "./contexts/AuthContext";
import { Nav } from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Facturacion } from "./components/Facturacion";

function App() {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Nav className="header" />
          <div className="aside"></div>
          <div className="aside2"></div>
          <div className="main">
            
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Login" element={<Login  />} />
              <Route path="/Register" element={<Register />} />
              <Route path="/Facturacion" element={<Facturacion />} />
            </Routes>
          </div>
          {/*  <Nav  />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register/>} />
        </Routes> */}
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
