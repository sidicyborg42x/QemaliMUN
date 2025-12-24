import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../api/axiosConfig';
import EventCard from '../components/EventCard';
import './HomePage.css';
// Import the logo
import AnniversaryLogo from './qemal100.png'; 

const HomePage = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await api.get('/events/');
                setEvents(response.data);
            } catch (err) {
                console.error("Error fetching events:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchEvents();
    }, []);

    return (
        <div className="home-page">
            <section className="hero">
                <div className="container hero-content fade-in">
                    
                    {/* Anniversary Badge - Closer to Title */}
                    <Link to="/about" className="hero-anniversary-badge">
                        <img src={AnniversaryLogo} alt="100 Vjet Qemal Stafa" />
                        <span className="badge-text">100 Vjet Histori</span>
                    </Link>

                    <h1>QSMUN</h1>
                    <p className="hero-subtitle">Model United Nations i Gjimnazit "Qemal Stafa"</p>
                    <a href="#events" className="btn btn-hero">Zbulo Eventet</a>
                </div>
            </section>

            <section id="events" className="events-section container">
                <div className="section-header fade-in">
                    <h2>Eventet e Ardhshme</h2>
                    <p>Bashkohuni me ne në asamblenë e radhës.</p>
                </div>

                {loading ? (
                    <div className="loading-container">
                        <div className="spinner"></div>
                        <p>Duke ngarkuar agjendën...</p>
                    </div>
                ) : events.length > 0 ? (
                    <div className="events-grid">
                        {events.map((event, index) => (
                            <div key={event.id} style={{animationDelay: `${index * 0.1}s`}} className="fade-in">
                                <EventCard event={event} />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="no-events fade-in">
                        <p>Nuk ka evente të planifikuara për momentin.</p>
                    </div>
                )}
            </section>
        </div>
    );
};

export default HomePage;