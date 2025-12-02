import React, { useState, useEffect } from 'react';
import api from '../api/axiosConfig'; // Using the configured axios instance
import ProjectCard from '../components/ProjectCard';
import './HomePage.css';

const HomePage = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await api.get('/projects/');
                setProjects(response.data);
            } catch (err) {
                setError('Failed to fetch projects.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []); // Empty dependency array means this runs once on mount

    if (loading) return <p>Loading projects...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="home-page">
            <h1>My Portfolio</h1>
            <div className="projects-grid">
                {projects.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
};

export default HomePage;
