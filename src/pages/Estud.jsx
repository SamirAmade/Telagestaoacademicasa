import React from 'react';
import { useNavigate } from 'react-router-dom';

function UserInfo() {
  const user = {
    nome: 'Mirson',
    usuario: 'Cuamba',
    contactoEncarregado: '876802131',
    estado: 'Ativo',
  };

  const containerStyle = {
    display: 'flex',
    gap: '40px',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: '20px',
    justifyContent: 'center',
  };

  const infoItemStyle = {
    display: 'flex',
    gap: '5px',
    fontSize: '16px',
  };

  const labelStyle = {
    fontWeight: 'bold',
  };

  return (
    <div style={containerStyle}>
      <div style={infoItemStyle}>
        <div style={labelStyle}>Nome:</div>
        <div>{user.nome}</div>
      </div>
      <div style={infoItemStyle}>
        <div style={labelStyle}>Usuário:</div>
        <div>{user.usuario}</div>
      </div>
      <div style={infoItemStyle}>
        <div style={labelStyle}>Contacto do Encarregado:</div>
        <div>{user.contactoEncarregado}</div>
      </div>
      <div style={infoItemStyle}>
        <div style={labelStyle}>Estado:</div>
        <div>{user.estado}</div>
      </div>
    </div>
  );
}

const Estud = () => {
  const navigate = useNavigate();

  const buttonStyle = {
    marginBottom: '10px',
    width: '100%',
    padding: '10px',
    fontSize: '14px',
    cursor: 'pointer',
  };

  const handleLogout = () => {
    navigate('/');
  };

  const handleEstudante = () => {
    navigate('/estud');
  };

  const handleVoltar = () => {
    navigate('/dasyboard'); // Corrigido aqui
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
          textAlign: 'center',
        }}
      >
        <img src="/assets/logo.jpg" alt="logo" style={{ width: '200px' }} />
        <h2>Menu</h2>
        <button style={buttonStyle} onClick={() => navigate('/dasyboard')}>DASHBOARD</button>
        <button style={buttonStyle} onClick={() => navigate('/notas')}>MINHAS NOTAS</button>
        <button style={buttonStyle} onClick={() => navigate('/disciplina')}>DISCIPLINA</button>
        <button style={buttonStyle} onClick={() => navigate('/propina')}>PROPINAS</button>
        <button style={buttonStyle} onClick={handleLogout}>SAIR</button>
        <p>Todos direitos reservados a @jrs 2025</p>
      </div>

      {/* Conteúdo */}
      <div style={{ flex: 1, padding: '20px' }}>
        <h1>Estudante</h1>
        <p>Listas de Estudantes cadastrados</p>

        <hr style={{ width: '100%', borderTop: '2px solid #ccc', marginBottom: '20px' }} />

        <UserInfo />

        {/* Botões na parte de baixo */}
        <div style={{ marginTop: '40px', display: 'flex', gap: '20px' }}>
          <button onClick={handleEstudante} style={{ padding: '10px 20px', fontSize: '16px' }}>
            Criar Estudante
          </button>
          <button onClick={handleVoltar} style={{ padding: '10px 20px', fontSize: '16px' }}>
            Voltar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Estud;
