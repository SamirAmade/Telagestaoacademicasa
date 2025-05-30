import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div
      className="sidebar"
      style={{
        width: '200px',
        backgroundColor: '#f0f0f0',
        padding: '20px',
        boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
        textAlign: 'center'
      }}
    >
      <img src="/assets/logo.jpg" alt="logo" style={{ width: '200px' }} />
      <h2>Menu</h2>
      <button style={{ width: '100%' }} onClick={() => navigate('/dashboard')}>DASHBOARD</button>
      <button style={{ width: '100%' }} onClick={() => navigate('/cadastro-docente')}>DOCENTE</button>
      <button style={{ width: '100%' }}>TURMAS</button>
      <button style={{ width: '100%' }}>ESTUDANTE</button>
      <button style={{ width: '100%' }}>DISCIPLINA</button>
      <button style={{ width: '100%' }}>SAIR</button>
      <p>Todos direitos reservados a @jrs 2025</p>
    </div>
  );
};

export default Sidebar;
