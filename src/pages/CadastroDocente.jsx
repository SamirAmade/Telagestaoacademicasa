import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CadastroDocente = () => {
  const navigate = useNavigate();

  
  const [formData, setFormData] = useState({
    nome: '',
    sobrenome: '',
    email: '',
    numero: '',
    nomeUsuario: '',
    bilheteId: '',
    genero: '',
    data: '',
    estadoDocente: '',
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
          <h1>Criar Docente</h1>
          <p>Digite os dados do docente</p>
          <form onSubmit={handleSubmit}>
            <input type="text" name="nome" placeholder="Nome" value={formData.nome} onChange={handleChange} required />
            <input type="text" name="sobrenome" placeholder="Sobrenome" value={formData.sobrenome} onChange={handleChange} required />
            <input type="email" name="email" placeholder="E-mail" value={formData.email} onChange={handleChange} required />
            <input type="text" name="nomeUsuario" placeholder="Nome de Usuário" value={formData.nomeUsuario} onChange={handleChange} required />
            <input type="password" name="senha" placeholder="Senha" value={formData.senha} onChange={handleChange} required />
            <input type="number" name="numero" placeholder="Número" value={formData.numero} onChange={handleChange} required />
            <input type="text" name="bilheteId" placeholder="BI" value={formData.bilheteId} onChange={handleChange} required />
            <input type="text" name="localizacao" placeholder="Localização" value={formData.localizacao} onChange={handleChange} required />

            <select name="genero" value={formData.genero} onChange={handleChange} required>
              <option value="">Selecione o gênero</option>
              <option value="Masculino">Masculino</option>
              <option value="Feminino">Feminino</option>
            </select>

            <input type="text" name="formacao" placeholder="Formação" value={formData.formacao} onChange={handleChange} required />
            <input type="number" name="codigoAutorizacao" placeholder="Código de Autorização" value={formData.codigoAutorizacao} onChange={handleChange} required />

            <select name="estadoDocente" value={formData.estadoDocente} onChange={handleChange} required>
              <option value="">Selecione o estado</option>
              <option value="Solteiro">Solteiro</option>
              <option value="Casado">Casado</option>
            </select>

            <input type="date" name="data" value={formData.data} onChange={handleChange} required />

            <button type="submit" style={submitStyle}>Salvar</button>
          </form>

          <button onClick={handleVoltar} style={backStyle}>Voltar</button>
        </div>
      </div>
    </div>
  );
};




const submitStyle = {
  marginTop: '20px',
  padding: '12px',
  width: '100%',
  backgroundColor: '#BCA37D',
  color: 'white',
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

export default CadastroDocente;
