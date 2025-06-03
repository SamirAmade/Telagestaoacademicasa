import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CriarTurma= () => {
  const navigate = useNavigate();

  // Estado único para melhor organização
  const [formData, setFormData] = useState({
    nome: '',
    sobrenome: '',
    email: '',
    numero: '',
    nomeUsuario: '',
    bilheteId: '',
    genero: '',
    data: '',
   
    localizacao: '',
    senha: '',
    formacao: '',
    codigoAutorizacao: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Docente cadastrado: ${formData.nome} ${formData.sobrenome}`);
    
  };

  const handleVoltar = () => {
    navigate(-1);
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div
        style={{
          width: '200px',
          backgroundColor: '#f0f0f0',
          padding: '20px',
          boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
          textAlign: 'center',
        }}
      >
        <img src="/assets/logo.jpg" alt="logo" style={{ width: '100%' }} />
        <h2>Menu</h2>
        <button style={buttonStyle} onClick={() => navigate('/dasyboard')}>DASHBOARD</button>
        <button style={buttonStyle} onClick={() => navigate('/turma')}>TURMAS</button>
        <button style={buttonStyle} onClick={() => navigate('/docente')}>DOCENTE</button>
        <button style={buttonStyle} onClick={() => navigate('/estudante')}>ESTUDANTE</button>
        <button style={buttonStyle} onClick={() => navigate('/disciplina')}>DISCIPLINA</button>
        <button style={buttonStyle} onClick={() => navigate('/login')}>SAIR</button>
        <p>Todos direitos reservados a @jrs 2025</p>
      </div>

      <div style={{ flex: 1, padding: '40px' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h1>Criar Turma</h1>
          <p>Digite os dados da Turma</p>
          <form onSubmit={handleSubmit}>
            <input type="text" name="nome" placeholder="Nome da Turma" value={formData.nome} onChange={handleChange} required />
            <input type="number" name="ano" placeholder="Ano lectivo" value={formData.ano} onChange={handleChange} required />
            
            <input type="text" name="periodo" placeholder="Periodo" value={formData.nomeUsuario} onChange={handleChange} required />
           
            <input type="text" name="classe" placeholder="Classe" value={formData.bilheteId} onChange={handleChange} required />
            

           

            

            <button type="submit" style={submitStyle}>Criar Turma</button>
          </form>

          <button onClick={handleVoltar} style={backStyle}>Voltar</button>
        </div>
      </div>
    </div>
  );
};


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

export default CriarTurma;
