import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function UserInfo() {
  const user = {
    id: '1',
    nome: 'Mirson',
    avaliacao1: '16',
    avaliacao2: '10',
    avaliacao3: '20',
    acp: 18
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
      <div style={infoItemStyle}><div style={labelStyle}>ID:</div><div>{user.id}</div></div>
      <div style={infoItemStyle}><div style={labelStyle}>Nome:</div><div>{user.nome}</div></div>
      <div style={infoItemStyle}><div style={labelStyle}>Avaliacao1:</div><div>{user.avaliacao1}</div></div>
      <div style={infoItemStyle}><div style={labelStyle}>Avaliacao2:</div><div>{user.avaliacao2}</div></div>
      <div style={infoItemStyle}><div style={labelStyle}>Avaliacao3:</div><div>{user.avaliacao3}</div></div>
      <div style={infoItemStyle}><div style={labelStyle}>Acp:</div><div>{user.acp}</div></div>
    </div>
  );
}

const LancarNotas = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  const handleVoltar = () => {
    navigate('/dashboard'); // Corrigido aqui
  };

  // Corrigido: estado para semestre
  const [semestre, setSemestre] = useState("1º Semestre");

  const handleChange = (e) => {
    setSemestre(e.target.value);
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
        <button style={buttonStyle} onClick={() => navigate('/dasyboard')}>DASHBOARD</button>
        <button style={buttonStyle} onClick={() => navigate('/notas')}>MINAHS NOTAS </button>
        
        <button style={buttonStyle} onClick={() => navigate('/login')}>SAIR</button>

        <p>Todos direitos reservados a @jrs 2025</p>
      </div>

      {/* Conteúdo */}
      <div style={{ flex: 1, padding: '20px' }}>
        <h1>Lançar Notas</h1>
        <p>Turma: 2025A2 & Trimestre: 1</p>

        <select
          value={semestre}
          onChange={handleChange}
          style={{ padding: '5px 10px', fontSize: '16px' }}
        >
          <option value="1º Semestre">1º Semestre</option>
          <option value="2º Semestre">2º Semestre</option>
        </select>

        <hr style={{ width: '100%', borderTop: '2px solid #ccc', marginBottom: '20px' }} />

        <UserInfo />

        <div style={{ marginTop: '40px', display: 'flex', gap: '5px' }}>
          <button onClick={handleVoltar} style={{ padding: '10px 20px', fontSize: '16px' }}>
            Voltar
          </button>
        </div>
      </div>
    </div>
  );
};

export default LancarNotas;
