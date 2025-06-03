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
   
    id: '1',
    nome: 'portugues'
    
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
<hr style={{ width: '100%', borderTop: '2px solid #ccc', marginBottom: '20px' }} />
        
      <div style={infoItemStyle}>
        <div style={labelStyle}>Nome:</div>
        <div>{user.nome}</div>
      </div>
      <hr style={{ width: '100%', borderTop: '2px solid #ccc', marginBottom: '20px' }} />
        

      
      
    </div>
  );
}

const Disciplina = () => {
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
        <div className='branco'>
        <h2>Menu</h2>
        </div>
       <button style={buttonStyle} onClick={() => navigate('/dasyboard')}>DASHBOARD</button>
        <button style={buttonStyle} onClick={() => navigate('/notas')}>MINHAS NOTAS</button>
        <button style={buttonStyle} onClick={() => navigate('/disciplina')}>DISCIPLINA</button>
        <button style={buttonStyle} onClick={() => navigate('/propina')}>PROPINAS</button>
        
        <button
  style={buttonStyle}
  onClick={() => {
    console.log('Clicou em SAIR');
    navigate('/login');
  }}
>
  SAIR
</button>

        <div className="text1">
          <p>Todos direitos reservados a @jrs 2025</p>
        </div>
      </div>

      <div style={{ flex: 1, padding: '20px' }}>
        <h1>DISCIPLINA</h1>
       
        <hr style={{ width: '100%', borderTop: '2px solid #ccc', marginBottom: '20px' }} />
        
        <UserInfo />
      </div>
    </div>
  );
};

export default Disciplina;
