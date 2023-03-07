import React from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Nav } from "../components/Nav";  

export function Home() {
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/Login");
    } // llamar a la función de logout al montar el componente
  }, []);

  
  return (
    <div className="content-container mt-5 bg-white">
      
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colSpan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
