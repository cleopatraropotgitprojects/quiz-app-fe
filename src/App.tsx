// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SelectQuiz from "./pages/SelectQuiz";
import QuizList from "./pages/QuizList";
import Quiz from "./pages/Quiz";
import { LanguageProvider } from "./contexts/LanguageContext";
import { LanguageSwitcher } from "./components/LanguageSwitcher";

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="relative min-h-screen">
          <LanguageSwitcher />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/select-quiz" element={<SelectQuiz />} />
            <Route path="/quiz-list/:category" element={<QuizList />} />
            <Route path="/quiz/:id" element={<Quiz />} />
          </Routes>
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
