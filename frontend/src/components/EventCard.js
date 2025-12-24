import React from 'react';
import './EventCard.css';

const EventCard = ({ event }) => {
    // Safely format date
    const dateObj = new Date(event.date);
    const dateString = isNaN(dateObj) ? 'Date TBA' : dateObj.toLocaleDateString('en-US', { 
        month: 'long', 
        day: 'numeric', 
        year: 'numeric' 
    });

    return (
        <div className="event-card">
            <div className="event-image-container">
                {event.image ? (
                    <img src={event.image} alt={event.title} />
                ) : (
                    <div className="event-placeholder" />
                )}
            </div>
            <div className="event-content">
                <div className="event-date">{dateString}</div>
                <h3 className="event-title">{event.title}</h3>
                <p className="event-location">📍 {event.location}</p>
                <p className="event-desc">
                    {event.description ? event.description.substring(0, 100) : "No description available"}...
                </p>
                {event.registration_link && (
                    <a 
                        href={event.registration_link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="event-link"
                    >
                        Register Now &rarr;
                    </a>
                )}
            </div>
        </div>
    );
};

export default EventCard;