import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './ui/Navbar';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import Footer from './ui/Footer';
import ContactPage from './pages/ContactPage';
import BlogsPage from './pages/BlogsPage';


const SessionsPage = () => <h1>Speaker Sessions</h1>;
const NotFound = () => <h1>404 - Page Not Found</h1>;


function App() {
  return (
    <>
      <Navigation />
      
      <div className="content-container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/speaker-sessions" element={<SessionsPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;