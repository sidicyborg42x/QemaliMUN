import React from 'react';
import './ProjectCard.css';


const ProjectCard = ({ project: event }) => { 
    return (
        <div className="project-card">
            <img src={event.image} alt={event.title} />
            <div className="project-info">
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                {/* CHANGED: Display Location instead of Tech */}
                <p><strong>Location:</strong> {event.location}</p>
                {/* CHANGED: Display Date if it exists */}
                {event.event_date && <p><strong>Date:</strong> {new Date(event.event_date).toLocaleDateString()}</p>}
                
                {event.link && <a href={event.link} target="_blank" rel="noopener noreferrer">Register / Info</a>}
            </div>
        </div>
    );
};

export default ProjectCard;
