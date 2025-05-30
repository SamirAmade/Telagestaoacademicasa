import { useState } from 'react';
import { FaLock } from 'react-icons/fa';
import '../style/Login.css'; // ⬅️ Certifique-se de importar seu CSS

function AtualizarSenha() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <div className="center-container">
      <form>
      <div className="form-box">
        <img src="/assets/logo.jpg" alt="logo" style={{ width: '200px' }} />
        <h3>Atualizar Senha</h3>
        <div className="input-field icon-input">
          
         <input
  type="password"
  placeholder="Nova senha"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  className="input-field"
  required
/>

        <input
          type="password"
          placeholder="Digite novamente a senha"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="input-field"
          required
        />

        <button className="input-field">Salvar nova senha</button>
        
      </div><div className='text1'>
      <p>Todos direitos reservados a @jrs2025</p>
    
    </div>
    </div>

      </form>
      
    </div>
  );
}

export default AtualizarSenha;
