import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bulma/css/bulma.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import './styles/prism-codefr.css'; // For CodeFR syntax highlighting styles
import './utils/prism-codefr.js';   // For CodeFR language definition

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Documentation from './pages/Documentation';
import About from './components/About';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/documentation" element={<Documentation />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
