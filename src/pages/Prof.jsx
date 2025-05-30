import React from 'react';
import { useNavigate } from 'react-router-dom';

function UserInfo() {
  const user = {
    nome: 'Nome',
    usuario: 'Usuario',
    status: 'Status',
    email: 'E-mail',
    mudarStatus: 'MudarStatus'
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
      <div style={infoItemStyle}>
        <div style={labelStyle}>Nome:</div>
        <div>{user.nome}</div>
      </div>
      <div style={infoItemStyle}>
        <div style={labelStyle}>Usuario:</div>
        <div>{user.usuario}</div>
      </div>
      <div style={infoItemStyle}>
        <div style={labelStyle}>Status:</div>
        <div>{user.status}</div>
      </div>
      <div style={infoItemStyle}>
        <div style={labelStyle}>E-mail:</div>
        <div>{user.email}</div>
      </div>
      <div style={infoItemStyle}>
        <div style={labelStyle}>MudarStatus:</div>
        <div>{user.mudarStatus}</div>
      </div>
    </div>
  );
}

const Prof = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  const handleDocente = () => {
    navigate('/criar-Docente');
  };

  const handleVoltar = () => {
    navigate('/dashboard');
  };

  return (
    <div className="dashboard-wrapper" style={{ display: 'flex', height: '100vh' }}>
      
      {/* Sidebar */}
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
        <button onClick={handleLogout} style={{ marginBottom: '10px', width: '100%' }}>SAIR</button>
        <p>Todos direitos reservados a @jrs 2025</p>
      </div>

      {/* Conteúdo */}
      <div style={{ flex: 1, padding: '20px' }}>
        <h1>Docente</h1>
        <p>Listas de Docentes cadastrados</p>

        <hr style={{ width: '100%', borderTop: '2px solid #ccc', marginBottom: '20px' }} />

        <UserInfo />

        {/* Botões na parte de baixo */}
        <div style={{ marginTop: '40px', display: 'flex', gap: '20px' }}>
          <button onClick={handleDocente} style={{ padding: '10px 20px', fontSize: '16px' }}>
            Criar Docente
          </button>
          <button onClick={handleVoltar} style={{ padding: '10px 20px', fontSize: '16px' }}>
            Voltar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Prof;
