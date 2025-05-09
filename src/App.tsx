// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SelectQuiz from "./pages/SelectQuiz";
import QuizList from "./pages/QuizList";
import Quiz from "./pages/Quiz";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/select-quiz" element={<SelectQuiz />} />
        <Route path="/quiz-list/:category" element={<QuizList />} />
        <Route path="/quiz/:id" element={<Quiz />} />
      </Routes>
    </Router>
  );
}

export default App;
