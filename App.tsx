import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import TopNavBar from './components/TopNavBar';
import Footer from './components/Footer';
import StudyBot from './components/StudyBot';
import HomePage from './pages/HomePage';
import CoursesPage from './pages/CoursesPage';
import TestSeriesPage from './pages/TestSeriesPage';
import PreviousYearPapersPage from './pages/PreviousYearPapersPage';
import CurrentAffairsPage from './pages/CurrentAffairsPage';
import BooksPage from './pages/BooksPage';
import FreeCoursesPage from './pages/FreeCoursesPage';
import NotesPage from './pages/NotesPage';
import LoginPage from './pages/LoginPage';
import PlaceholderPage from './pages/PlaceholderPage';


const AppContent: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  if (isLoginPage) {
    return (
      <Routes>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    );
  }

  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopNavBar setSidebarOpen={setSidebarOpen} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-slate-50">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/test-series" element={<TestSeriesPage />} />
            <Route path="/previous-papers" element={<PreviousYearPapersPage />} />
            <Route path="/current-affairs" element={<CurrentAffairsPage />} />
            <Route path="/books" element={<BooksPage />} />
            <Route path="/free-courses" element={<FreeCoursesPage />} />
            <Route path="/pdf-notes" element={<NotesPage />} />
            <Route path="/profile" element={<PlaceholderPage title="Profile" />} />
            <Route path="/settings" element={<PlaceholderPage title="Settings" />} />
          </Routes>
          <Footer />
        </main>
      </div>
      <StudyBot />
    </div>
  );
};


const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;