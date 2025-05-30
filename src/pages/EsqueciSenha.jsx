import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function EsqueciSenha() {
  const [email, setEmail] = useState('');
  const navigate= useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Recuperação para:', email);
    alert('Se o e-mail estiver cadastrado, você receberá instruções.');
    navigate('/atualizar-senha')
  };

  return (
    <div className="center-container">
      <form onSubmit={handleSubmit} 
      className="form-box">
        <img src="/assets/logo.jpg" alt="logo" style={{ width: '200px' }} />
        <h2 className="text-xl font-bold mb-4">
            Recuperar Senha</h2>
            <p>Digite seu endereco e-mail para recuperar senha</p>
        <input
          type="email"
          placeholder="Digite seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input-field"
          required
        />
        <button type="submit" className="input-field">
          Recuperar Senha
        </button>
        <p className="mt-3 text-sm text-center">
          <Link to="/" className="text-blue-600 hover:underline">
            Voltar ao login
          </Link>
        </p>
         <div className='text1'>
      <p>Todos direitos reservados a @jrs2025</p>
    </div>
      </form>
      
    </div>
  );
}

export default EsqueciSenha;
