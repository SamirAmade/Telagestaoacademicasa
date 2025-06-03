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
  const users = [
    {
      nome: 'Alfredo',
      usuario: 'mbebe',
      genero: 'Masculino',
      status: 'Mudar status'
    },
    {
      nome: 'Acla',
      usuario: 'admin2025',
      genero: 'femenino',
      status: 'Ativo'
    },
    {
      nome: 'Humberto',
      usuario: 'mariapaz',
      genero: 'masculino',
      status: 'Inativo'
    }
  ];

  const userCardStyle = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '15px',
    marginBottom: '15px',
    width: '300px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
  };

  const infoItemStyle = {
    display: 'flex',
    gap: '5px',
    fontSize: '16px',
    marginBottom: '8px'
  };

  const labelStyle = {
    fontWeight: 'bold'

  };
  // a tentar algo novo
  const getStatusColor = (status) => {
    if (status === 'Ativo') return 'green';
    if (status === 'Inativo') return 'red';
    return 'orange';
  };
  //experiencias
  const handleEdit = (nome) => {
    alert(`Editar informações de ${nome}`);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {users.map((user, index) => (
        <div key={index} style={userCardStyle}>
          <div style={infoItemStyle}>
            <div style={labelStyle}>Nome:</div>
            <div>{user.nome}</div>
          </div>
          <div style={infoItemStyle}>
            <div style={labelStyle}>Usuário:</div>
            <div>{user.usuario}</div>
          </div>
          <div style={infoItemStyle}>
            <div style={labelStyle}>Gênero:</div>
            <div>{user.genero}</div>
          </div>
          <div style={infoItemStyle}>
            <div style={labelStyle}>Status:</div>
            <div style={{ color: getStatusColor(user.status) }}>{user.status}</div>
          </div>
          <button
            onClick={() => handleEdit(user.nome)}
            style={{
              marginTop: '10px',
              padding: '8px 12px',
              border: 'none',
              backgroundColor: '#007bff',
              color: '#fff',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            Editar
          </button>
        </div>
      ))}
    </div>
  );
}


const DasyboardAlf = () => {
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
       
        
        <button onClick={handleLogout} style={{ marginBottom: '10px', width: '100%' }}>
          SAIR
        </button>
        <div className="text1">
          <p>Todos direitos reservados a @jrs 2025</p>
        </div>
      </div>

      <div style={{ flex: 1, padding: '20px' }}>
        <h1>Dasyboard Administrador,Alfredo</h1>
       
        <hr style={{ width: '100%', borderTop: '2px solid #ccc', marginBottom: '20px' }} />
       
        <UserInfo />
       <button 
  style={{
    marginTop: '20px', 
    width: '200px',     
    padding: '10px',    
    display: 'block',   
    marginLeft: 'auto',
    marginRight: 'auto' 
  }} 
  type="submit"
>
  Criar Admin
</button>

      </div>
      
    </div>
  );
};

export default DasyboardAlf;
