import React from 'react';
import { useNavigate } from 'react-router-dom';
const buttonStyle = {
  marginBottom: '10px',
  width: '100%',
  padding: '10px',
  cursor: 'pointer',
};

const submitStyle = {
  marginTop: '20px',
  padding: '12px',
  width: '100%',
  backgroundColor: '#BCA37D',
  color: 'black',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
};

const backStyle = {
  marginTop: '20px',
  width: '100%',
  padding: '12px',
  borderRadius: '8px',
  cursor: 'pointer',
};
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
         <button style={buttonStyle} onClick={() => navigate('/dasyboard')}>DASHBOARD</button>
        <button style={buttonStyle} onClick={() => navigate('/turma')}>TURMAS</button>
        <button style={buttonStyle} onClick={() => navigate('/docente')}>DOCENTE</button>
        <button style={buttonStyle} onClick={() => navigate('/estudante')}>ESTUDANTE</button>
        <button style={buttonStyle} onClick={() => navigate('/disciplina')}>DISCIPLINA</button>
        <button style={buttonStyle} onClick={() => navigate('/login')}>SAIR</button>
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
