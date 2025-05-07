// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SelectQuiz from './pages/SelectQuiz';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/select-quiz" element={<SelectQuiz />} />
        </Routes>
      </Router>
  );
}

export default App;
