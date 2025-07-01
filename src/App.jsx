// App.js
import './index.css'; // Import the global CSS
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="app-container"> {/* Added a container class */}
        <Navbar />
        <main className="main-content"> {/* Added main content class */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;