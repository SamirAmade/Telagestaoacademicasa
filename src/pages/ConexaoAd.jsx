import React, { useState } from "react";

import { FaLock, FaUser } from "react-icons/fa";
import "../style/Login.css";
import { useNavigate, Link } from "react-router-dom"; 

const ConexaoAd = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login realizado com sucesso!");
    navigate("/Docente");
  };

  return (
    <div className="App">
    

      <div className="container">
        <form onSubmit={handleSubmit}>
          
          <img src="/assets/logo.jpg" alt="logo" style={{ width: '200px' }} />
          <h1>Conexão Administrador</h1>
          <p>Digite seu e-mail para entrar na plataforma</p>

          
            <input
  type="e-mail"
  placeholder="E-mail"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  className="input-field"
  required
/>
          

           <input
  type="password"
  placeholder="password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  className="input-field"
  required
/>
           <p className="mt-3 text-sm text-center">
          <Link to="/esqueci-senha" className="text-blue-600 hover:underline">
            Esqueceu a senha?
          </Link>
        </p>

          <button type="submit">Conectar-se com e-mail</button>
        </form>
        <div className='text1'>
      <p>Todos direitos reservados a @jrs2025</p>
    </div>

      </div>
    
    </div>
  );
};

export default ConexaoAd;
