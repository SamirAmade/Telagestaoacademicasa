import React, { useState } from 'react';
import { CiTextAlignCenter } from 'react-icons/ci';

const PreRegisto = () => {
  const [formData, setFormData] = useState({
    nomeCompleto: '',
    dataNascimento: '',
    email: '',
    morada: '',
    classe: '',
    documento: '',
    periodo: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email.includes('@')) {
      alert('Por favor, insira um e-mail válido');
      return;
    }

    alert(`Pré-registo feito para: ${formData.nomeCompleto}`);
  };

  return (
    <div style={pageStyle}>
      
      {/* Lado esquerdo com imagem */}
      <div style={imageSideStyle}>
        <img src="/assets/logo.jpg" alt="Logo" style={{ width: '100%', maxWidth: '250px' }} />
        
      </div>

      {/* Lado direito com formulário */}
      <div style={formSideStyle}>
        <h2>Formulário de Pré-Registo</h2>
        <p>Digite suas credencias para fazer seu pre registo</p>
        <form onSubmit={handleSubmit} style={formStyle}>
          <input
            type="text"
            name="nomeCompleto"
            placeholder="Nome completo"
            value={formData.nomeCompleto}
            onChange={handleChange}
            required
          />

          <input
            type="date"
            name="dataNascimento"
            value={formData.dataNascimento}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="nome@dominio.com"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="morada"
            placeholder="Morada completa"
            value={formData.morada}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="classe"
            placeholder="Classe de frequência (ex: 10ª, 11ª)"
            value={formData.classe}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="documento"
            placeholder="BI ou Cédula"
            value={formData.documento}
            onChange={handleChange}
            required
          />

          <select
            name="periodo"
            value={formData.periodo}
            onChange={handleChange}
            required
          >
            <option value="">Selecione o período</option>
            <option value="Manhã">Manhã</option>
            <option value="Tarde">Tarde</option>
            <option value="Noite">Noite</option>
          </select>

          <button type="submit">Juntar-se a escola jrs</button>

          <div className='text1'>
      <p>Todos direitos reservados a @jrs2025</p>
    </div>
        </form>
      </div>
    </div>
  );
};

// Estilos
const pageStyle = {
  display: 'flex',
  minHeight: '100vh',
  fontFamily: 'Arial'
};

const imageSideStyle = {
  flex: '0 0 30%',
  backgroundColor: '#F0EEEA',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '20px'
};

const formSideStyle = {
  flex: 1,
  padding: '40px',
  textAlign: 'center'
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
  maxWidth: '500px',
  margin: '0 auto'
};


export default PreRegisto;
