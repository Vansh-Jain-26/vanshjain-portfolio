import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './ui/Navbar';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import Footer from './ui/Footer';
import ContactPage from './pages/ContactPage';
import BlogsPage from './pages/BlogsPage';
import BlogDetail from './pages/BlogDetail'; // 1. Is naye page ko import karein
import CoursesPage from './pages/CoursesPage';
import SessionsPage from './pages/SessionsPage';
import EliteVersePage from './pages/EliteVersePage';
import KattalyxLabsPage from './pages/KattalyxLabsPage';
import ScrollToTop from './ui/ScrollToTop';

const NotFound = () => <h1 className="text-white p-20 text-center">404 - Page Not Found</h1>;

function App() {
  return (
    <>
      <Navigation />

      <div className="content-container">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/speaker-sessions" element={<SessionsPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* BLOG ROUTES */}
          <Route path="/blog" element={<BlogsPage />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/company/elite-verse" element={<EliteVersePage />} />
          <Route path="/company/kattalyx-labs" element={<KattalyxLabsPage />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;