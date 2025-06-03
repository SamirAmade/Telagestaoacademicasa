import React from 'react';
import { useNavigate } from 'react-router-dom';



function UserInfo() {
  const user = {
   
    nome: 'Mirson',
    genero: 'Masculino',
    estado: 'Ativo',
    usuario: 'Cuamba',
    email:'misroncuamba@gmail.com'
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
        <div style={labelStyle}>Gênero:</div>
        <div>{user.genero}</div>
      </div>

      <div style={infoItemStyle}>
        <div style={labelStyle}>Estado:</div>
        <div>{user.estado}</div>
        </div>
        

        <div style={infoItemStyle}>
        <div style={labelStyle}>Usuario:</div>
        <div>{user.usuario}</div>
      </div>

      <div style={infoItemStyle}>
        <div style={labelStyle}>Email:</div>
        <div>{user.email}</div>
      </div>
      
    </div>
  );
}

const InfoEst = () => {
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
        <button style={buttonStyle} onClick={() => navigate('/turma')}>TURMAS</button>
        <button style={buttonStyle} onClick={() => navigate('/docente')}>DOCENTE</button>
        <button style={buttonStyle} onClick={() => navigate('/estudante')}>ESTUDANTE</button>
        <button style={buttonStyle} onClick={() => navigate('/disciplina')}>DISCIPLINA</button>
        <button style={buttonStyle} onClick={() => navigate('/login')}>SAIR</button>

        <div className="text1">
          <p>Todos direitos reservados a @jrs 2025</p>
        </div>
      </div>

      <div style={{ flex: 1, padding: '20px' }}>
        <h1>Bem-vindo, Mirson</h1>
        
        <hr style={{ width: '100%', borderTop: '2px solid #ccc', marginBottom: '20px' }} />
        <h3>INFORMACOES ESTUDANTE</h3>
        <UserInfo />
      </div>
    </div>
  );
};

export default InfoEst;
