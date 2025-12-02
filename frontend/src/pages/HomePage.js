// We will reuse this component for now
import React, { useState, useEffect } from 'react';
import api from '../api/axiosConfig';
import EventCard from '../components/EventCard';
import './HomePage.css';

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
                <div className="container">
                    <h1>Welcome to QemaliMUN</h1>
                    <p className="hero-subtitle">Fostering diplomacy, critical thinking, and global citizenship.</p>
                    <a href="#events" className="btn btn-hero">Explore Events</a>
                </div>
            </section>

            <section id="events" className="events-section container">
                <div className="section-header">
                    <h2>Upcoming Conferences</h2>
                    <p>Join us at our next assembly.</p>
                </div>

                {loading ? (
                    <p className="loading-text">Loading agenda...</p>
                ) : events.length > 0 ? (
                    <div className="events-grid">
                        {events.map(event => (
                            <EventCard key={event.id} event={event} />
                        ))}
                    </div>
                ) : (
                    <div className="no-events">
                        <p>No upcoming events scheduled. Join our WhatsApp group for updates!</p>
                    </div>
                )}
            </section>
        </div>
    );
};

export default HomePage;
