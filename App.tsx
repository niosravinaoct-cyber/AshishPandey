import React, { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CoursesPage from './pages/CoursesPage';
import NotesPage from './pages/NotesPage';
import QuizPage from './pages/QuizPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import AboutPage from './pages/AboutPage';
import StudyBot from './components/StudyBot';
import Sidebar from './components/Sidebar';
import TestSeriesPage from './pages/TestSeriesPage';
import PreviousYearPapersPage from './pages/PreviousYearPapersPage';
import CurrentAffairsPage from './pages/CurrentAffairsPage';
import BooksPage from './pages/BooksPage';
import FreeCoursesPage from './pages/FreeCoursesPage';

const App: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <HashRouter>
      <div className="flex h-screen bg-gray-100 font-sans text-gray-800">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-white">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/courses" element={<CoursesPage />} />
              <Route path="/notes" element={<NotesPage />} />
              <Route path="/test-series" element={<TestSeriesPage />} />
              <Route path="/previous-papers" element={<PreviousYearPapersPage />} />
              <Route path="/current-affairs" element={<CurrentAffairsPage />} />
              <Route path="/books" element={<BooksPage />} />
              <Route path="/free-courses" element={<FreeCoursesPage />} />
              <Route path="/quiz" element={<QuizPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
            <Footer />
          </main>
        </div>
        <StudyBot />
      </div>
    </HashRouter>
  );
};

export default App;
