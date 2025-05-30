import React from 'react';
import { useNavigate } from 'react-router-dom';

function UserInfo() {
  const user = {
   
    usuario: 'Usuario',
    valor: 'Valor', 
    mes:'Mes',
    ano:'Ano'
    
  };

  const containerStyle = {
    display: 'flex',
    gap: '40px',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: '20px',
    justifyContent: 'center'
  };

  const infoItemStyle = {
    display: 'flex',
    gap: '5px',
    fontSize: '16px'
  };

  const labelStyle = {
    fontWeight: 'bold'
  };

  return (
    <div style={containerStyle}>
        <h3>Propinas</h3>
        <hr style={{ width: '100%', borderTop: '2px solid #ccc', marginBottom: '20px' }} />
      

      <div style={infoItemStyle}>
        <div style={labelStyle}>Usuario:</div>
        <div>{user.usuario}</div>
      </div>

      <div style={infoItemStyle}>
        <div style={labelStyle}>Valor:</div>
        <div>{user.valor}</div>
      </div>

      <div style={infoItemStyle}>
        <div style={labelStyle}>Mes:</div>
        <div>{user.mes}</div>
      </div>
      <div style={infoItemStyle}>
        <div style={labelStyle}>Ano:</div>
        <div>{user.ano}</div>
      </div>
      

      

      
      
    </div>
  );
}
const Propina = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="dashboard-wrapper" style={{ display: 'flex', height: '100vh' }}>
      <div
        className="sidebar"
        style={{
          width: '200px',
          backgroundColor: '#D7C8B4',
          padding: '20px',
          boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
          textAlign: 'center'
        }}
      >
        <img src="/assets/logo.jpg" alt="logo" style={{ width: '200px' }} />
        <h2>Menu</h2>
        <button style={{ marginBottom: '10px', width: '100%' }}>DASHBOARD</button>
        <button style={{ marginBottom: '10px', width: '100%' }}>MINHAS NOTAS</button>
        <button style={{ marginBottom: '10px', width: '100%' }}>DISCIPLINAS</button>
        <button style={{ marginBottom: '10px', width: '100%' }}>PROPINAS</button>
        <button onClick={handleLogout} style={{ marginBottom: '10px', width: '100%' }}>
          SAIR
        </button>
        <p>Todos direitos reservados a @jrs 2025</p>
      </div>

      <div style={{ flex: 1, padding: '20px' }}>
        <h1>Bem Vindo, Mirson</h1>
      
        <hr style={{ width: '100%', borderTop: '2px solid #ccc', marginBottom: '20px' }} />

        <UserInfo />
        <p style={{ textAlign: 'center', marginTop: '20px', color: '#555' }}>Nenhuma Propina encontrada</p>
      </div>
    </div>
  );
};


export default Propina;
