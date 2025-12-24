import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import GamePage from './pages/GamePage'; // New Import
import ApplyPage from './pages/ApplyPage';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <main>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/game" element={<GamePage />} /> {/* New Route */}
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
