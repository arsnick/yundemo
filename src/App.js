import KnowledgeBaseLeftDemo from './KnowledgeBaseLeftDemo';
import KnowledgeBaseRightDemo from './KnowledgeBaseRightDemo';
import KnowledgeBaseTrainee from './KnowledgeBaseTrainee';
import KnowledgeBaseQingyun from './KnowledgeBaseQingyun';
import KnowledgeBaseProfessional from './KnowledgeBaseProfessional';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

function LeftArea() {
  const location = useLocation();
  // 只在 / 和 /trainee、/qingyun、/professional 下渲染左区专属页面
  if (location.pathname === '/trainee') return <KnowledgeBaseTrainee />;
  if (location.pathname === '/qingyun') return <KnowledgeBaseQingyun />;
  if (location.pathname === '/professional') return <KnowledgeBaseProfessional />;
  return <KnowledgeBaseLeftDemo />;
}

function RightArea() {
  const location = useLocation();
  // 只在 /right/trainee、/right/qingyun、/right/professional 下渲染右区专属页面
  if (location.pathname === '/right/trainee') return <KnowledgeBaseTrainee side="right" />;
  if (location.pathname === '/right/qingyun') return <KnowledgeBaseQingyun side="right" />;
  if (location.pathname === '/right/professional') return <KnowledgeBaseProfessional side="right" />;
  return <KnowledgeBaseRightDemo />;
}

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/*" element={<><LeftArea /><RightArea /></>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
