import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <h2>Welcome</h2>
                    <nav>
                        {/* You can add NavLink components here later */}
                        <a href="/">Home</a>
                        {/* <a href="/about">About</a> */}
                        {/* <a href="/contact">Contact</a> */}
                    </nav>
                </header>
                <main>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        {/* Define other routes here */}
                    </Routes>
                </main>
                <footer className="App-footer">
                    <p>© 2025 Your Name</p>
                </footer>
            </div>:
        </Router>
    );
}

export default App;
