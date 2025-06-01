import React from 'react';
import { useNavigate } from 'react-router-dom';

function UserInfo() {
  const user = {
    id:'1',
    id1:'2',
    codigo: '2025A2',
    codigo1: '2025A7',
    anolectivo: '2025',
    anolectivo1: '2025',
    eliminar: 'apagar',
    eliminar1:'apagar'
    
    
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
        <div style={labelStyle}>ID:</div>
        <div>{user.id1}</div>
      </div>

        <div style={infoItemStyle}>
        <div style={labelStyle}>Codigo:</div>
        <div>{user.codigo}</div>
      </div>
      <div style={infoItemStyle}>
        <div style={labelStyle}>Codigo:</div>
        <div>{user.codigo1}</div>
      </div>
      
      <div style={infoItemStyle}>
        <div style={labelStyle}>AnoLectivo:</div>
        <div>{user.anolectivo}</div>
      </div>
      <div style={infoItemStyle}>
        <div style={labelStyle}>AnoLectivo:</div>
        <div>{user.anolectivo}</div>
      </div>
       <div style={infoItemStyle}>
        <div style={labelStyle}>Eliminar:</div>
        <div>{user.eliminar}</div>
      </div>
      <div style={infoItemStyle}>
        <div style={labelStyle}>Eliminar:</div>
        <div>{user.eliminar1}</div>
      </div>
      
    </div>
  );
}

const Tuurma = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  const handleEstudante = () => {
    navigate('/estud');
  };

  const handleVoltar = () => {
    navigate('/dasyboard');
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
        <button style={{ marginBottom: '10px', width: '100%' }}>MINHAS  TURMAS</button>
        
        <button onClick={handleLogout} style={{ marginBottom: '10px', width: '100%' }}>SAIR</button>
        <p>Todos direitos reservados a @jrs 2025</p>
      </div>

      {/* Conteúdo */}
      <div style={{ flex: 1, padding: '20px' }}>
        <h1>Tuma</h1>
        <p>Listas das turmas registadas</p>

        <hr style={{ width: '100%', borderTop: '2px solid #ccc', marginBottom: '20px' }} />

        <UserInfo />

        {/* Botões na parte de baixo */}
        <div style={{ marginTop: '40px', display: 'flex', gap: '5px' }}>
          
          <button onClick={handleVoltar} style={{ padding: '10px 20px', fontSize: '16px' }}>
            Voltar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tuurma;
