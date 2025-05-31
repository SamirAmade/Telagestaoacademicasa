import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCheck, FaSchool } from 'react-icons/fa';
import { FaUsers } from 'react-icons/fa6';

function UserInfo() {
  const user = {
    id: 1,
    nome: 'Samir',
    genero: 'Masculino',
    estado: 'Ativo'
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
        <div style={labelStyle}>ID:</div>
        <div>{user.id}</div>
      </div>

      <div style={infoItemStyle}>
        <div style={labelStyle}>Nome:</div>
        <div>{user.nome}</div>
      </div>

      <div style={infoItemStyle}>
        <div style={labelStyle}>Gênero:</div>
        <div>{user.genero}</div>
      </div>

      <div style={infoItemStyle}>
        <div style={labelStyle}>Estado:</div>
        <div>{user.estado}</div>
      </div>
    </div>
  );
}

const Docente = () => {
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
        <button
  style={{ marginBottom: '10px', width: '100%' }}
  onClick={() => navigate('/dasyboard')}
>
  DASHBOARD
</button>

<button
  style={{ marginBottom: '10px', width: '100%' }}
  onClick={() => navigate('/turmas')}
>
  MINHAS TURMAS
</button>

<button
  onClick={handleLogout}
  style={{ marginBottom: '10px', width: '100%' }}
>
  SAIR
</button>

        <div className="text1">
          <p>Todos direitos reservados a @jrs 2025</p>
        </div>
      </div>

      <div style={{ flex: 1, padding: '20px' }}>
        <h1>Bem-vindo, Samir</h1>
        <FaCheck title="Certo" /> <FaUsers title="Estudantes" /> <FaSchool title="Turmas" />
        <hr style={{ width: '100%', borderTop: '2px solid #ccc', marginBottom: '20px' }} />
        <h3>MINHAS INFORMAÇÕES</h3>
        <UserInfo />
      </div>
    </div>
  );
};

export default Docente;
