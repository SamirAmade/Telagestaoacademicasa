import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Estudante= () => {
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
    estadoEstudante: '',
    localizacao: '',
    senha: '',
   
    codigoAutorizacao: '',
    turma: '',
    contactoEncarregado: '',
     dataNascimento: '',
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
    alert(`Estudante: ${formData.nome} ${formData.sobrenome}`);
    // Aqui pode redirecionar, salvar em API, etc.
  };

  const handleVoltar = () => {
    navigate(-1); // Volta para página anterior
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
        <button style={buttonStyle}>DASHBOARD</button>
        <button style={buttonStyle}>TURMAS</button>
        <button style={buttonStyle}>DOCENTE</button>
        <button style={buttonStyle}>ESTUDANTE</button>
        <button style={buttonStyle}>DISCIPLINA</button>
        <button style={buttonStyle}>SAIR</button>
        <p>Todos direitos reservados a @jrs 2025</p>
      </div>

      <div style={{ flex: 1, padding: '40px' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h1>Criar Estudante</h1>
          <p>Digite os dados do Estudante</p>
          <form onSubmit={handleSubmit}>
            <input type="text" name="nome" placeholder="Nome" value={formData.nome} onChange={handleChange} required />

            <input type="text" name="sobrenome" placeholder="Sobrenome" value={formData.sobrenome} onChange={handleChange} required />

            <input type="email" name="email" placeholder="E-mail" value={formData.email} onChange={handleChange} required />

            <input type="text" name="nomeUsuario" placeholder="Nome de Usuário" value={formData.nomeUsuario} onChange={handleChange} required />

            <input type="password" name="senha" placeholder="Senha" value={formData.senha} onChange={handleChange} required />

            <input type="number" name="numero" placeholder="Número" value={formData.numero} onChange={handleChange} required />

            <input type="text" name="bilheteId" placeholder="BI" value={formData.bilheteId} onChange={handleChange} required />

            <input type="text" name="localizacao" placeholder="Localização" value={formData.localizacao} onChange={handleChange} required />

            <input type="number" name="turma" placeholder="Turma" value={formData.turma} onChange={handleChange} required />

            <input type="number" name="contactoencarregado" placeholder="ContactoEncarregado" value={formData.contactoencarregado} onChange={handleChange} required />

            <select name="genero" value={formData.genero} onChange={handleChange} required>
              <option value="">Selecione o gênero</option>
              <option value="Masculino">Masculino</option>
              <option value="Feminino">Feminino</option>
            </select>

            <input type="number" name="codigoAutorizacao" placeholder="Código de Autorização" value={formData.codigoAutorizacao} onChange={handleChange} required />

            <select name="estadoestudante" value={formData.estadoEstudante} onChange={handleChange} required>
              <option value="">Selecione o estado</option>
              <option value="Solteiro">Solteiro</option>
              <option value="Casado">Casado</option>
            </select>
            
            <div style={inputGroupStyle}>
  <label htmlFor="dataNascimento">Data de Nascimento:</label>
  <input
    type="date"
    id="dataNascimento"
    name="dataNascimento"
    value={formData.dataNascimento}
    onChange={handleChange}
    required
  />
</div>

<div style={inputGroupStyle}>
  <label htmlFor="data">Data de Registro:</label>
  <input
    type="date"
    id="data"
    name="data"
    value={formData.data}
    onChange={handleChange}
    required
  />
</div>


            <button type="submit" style={submitStyle}>Criar Estudante</button>
          </form>

          <button onClick={handleVoltar} style={backStyle}>Voltar</button>
        </div>
      </div>
    </div>
  );
};

// Estilos reutilizáveis
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
const inputGroupStyle = {
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '5px',
};


export default Estudante;
