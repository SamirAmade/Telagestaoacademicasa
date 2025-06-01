import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import CadastroDocente from './pages/CadastroDocente';
import Docente from'./pages/Docente';
import EsqueciSenha from './pages/EsqueciSenha';
import AtualizarSenha from './pages/AtualizarSenha';
import Estudante from './pages/Estudante';
import ConexaoAd from'./pages/ConexaoAd';
import PreRegisto from './pages/PreRegisto';
import DasyboardAd from './pages/DasyboardAd';
import InfoEst from './pages/InfoEst';
import Disciplina from './pages/Disciplina';
import Propina from './pages/Propina';
import Notas from './pages/Notas';
import Prof from './pages/Prof'
import Estud from './pages/Estud';
import Turma from './pages/Turma';
import LancarNotas from './pages/LancarNotas';
import CriarDisciplina from './pages/CriarDisciplina';
import CriarTurma from './pages/CriarTurma';
import Tuurma from './pages/Tuurma';
import Docente1 from './pages/Docente1';
import DasyboardAlf from './pages/DasyboardAlf';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro-docente" element={<CadastroDocente />} />
        <Route path='/Docente' element={<Docente/>}/>
        <Route path="/estudante" element={<Estudante />} />
          <Route path="/conexaoad" element={<ConexaoAd />} />
          <Route path='/preregisto' element={<PreRegisto/>} />
          <Route path='/dasyboard' element={<DasyboardAd/>}/>
          <Route path='/infoest' element={<InfoEst/>}/>
          <Route path='/disciplina'element={<Disciplina/>}/>
          <Route path='/propina'element={<Propina/>}/>
          <Route path='/notas'element={<Notas/>}/>
          <Route path='/prof'element={<Prof/>}/>
          <Route path='/estu'element={<Estud/>}/>
          <Route path='/turma'element={<Turma/>}/>
          <Route path='/lancarnotas'element={<LancarNotas/>}/>
       <Route path='/criardis'element={<CriarDisciplina/>}/>
       <Route path='/tur'element={<CriarTurma/>}/>
        <Route path='/tuur'element={<Tuurma/>}/>
        <Route path='/docente1'element={<Docente1/>}/>
        <Route path='/dasyb'element={<DasyboardAlf/>}/>
       
        <Route path="/Esqueci-Senha" element={<EsqueciSenha />} />
        <Route path="/Atualizar-Senha" element={<AtualizarSenha />} />
      </Routes>
    </Router>
  );
}

export default App;
