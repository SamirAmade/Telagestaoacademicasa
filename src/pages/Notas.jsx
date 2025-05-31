import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function UserInfo() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '20px',
  };

  return (
    <div style={containerStyle}>
      <h3>Minhas Notas</h3>
      <hr style={{ width: '100%', borderTop: '2px solid #ccc', marginBottom: '20px' }} />
      {/* Aqui futuramente você pode exibir a lista de notas com base no semestre selecionado */}
    </div>
  );
}

const Notas = () => {
  const navigate = useNavigate();
  const [semestre, setSemestre] = useState('1º Semestre');

  const handleLogout = () => {
    navigate('/');
  };

  const handleChange = (e) => {
    setSemestre(e.target.value);
    // Aqui você pode usar esse valor para filtrar notas depois
  };

  const sidebarStyle = {
    width: '200px',
    backgroundColor: '#D7C8B4',
    padding: '20px',
    boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
    textAlign: 'center',
  };

  const buttonStyle = {
    marginBottom: '10px',
    width: '100%',
  };

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  };

  const titleStyle = {
    flex: 1,
    textAlign: 'center',
    margin: 0,
  };

  return (
    <div className="dashboard-wrapper" style={{ display: 'flex', height: '100vh' }}>
      
      {/* Sidebar */}
      <div className="sidebar" style={sidebarStyle}>
        <img src="/assets/logo.jpg" alt="logo" style={{ width: '200px' }} />
        <h2>Menu</h2>
       <button onClick={() => navigate('/dasyboard')} style={buttonStyle}>DASHBOARD</button>
<button onClick={() => navigate('/notas')} style={buttonStyle}>MINHAS NOTAS</button>
<button onClick={() => navigate('/disciplina')} style={buttonStyle}>DISCIPLINAS</button>
<button onClick={() => navigate('/propina')} style={buttonStyle}>PROPINAS</button>

        <button onClick={handleLogout} style={buttonStyle}>SAIR</button>
        <p>Todos direitos reservados a @jrs 2025</p>
      </div>

      {/* Conteúdo Principal */}
      <div style={{ flex: 1, padding: '20px' }}>
        <div style={headerStyle}>
          <h1 style={titleStyle}>Bem Vindo, Mirson</h1>

          <select
            value={semestre}
            onChange={handleChange}
            style={{ padding: '5px 10px', fontSize: '16px' }}
          >
            <option value="1º Semestre">1º Semestre</option>
            <option value="2º Semestre">2º Semestre</option>
          </select>
        </div>

        <hr style={{ width: '100%', borderTop: '2px solid #ccc', marginBottom: '20px' }} />
        <UserInfo />
      </div>
    </div>
  );
};

export default Notas;
