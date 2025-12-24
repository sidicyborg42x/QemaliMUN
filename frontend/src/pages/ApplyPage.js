// frontend/src/pages/ApplyPage.js
import React, { useState } from 'react';
import axiosInstance from '../api/axiosConfig';

const ApplyPage = () => {
    const [formData, setFormData] = useState({
        full_name: '', email: '', school: '', grade: '', motivation: ''
    });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axiosInstance.post('applications/', formData);
            setMessage('Aplikimi u dërgua me sukses!');
            setFormData({ full_name: '', email: '', school: '', grade: '', motivation: '' });
        } catch (error) {
            setMessage('Pati një gabim. Provoni përsëri.');
        }
    };

    return (
        <div className="container" style={{ padding: '2rem' }}>
            <h2>Formulari i Aplikimit</h2>
            {message && <p className="status-message">{message}</p>}
            <form onSubmit={handleSubmit} className="apply-form">
                <input name="full_name" placeholder="Emri i Plotë" value={formData.full_name} onChange={handleChange} required />
                <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                <input name="school" placeholder="Shkolla" value={formData.school} onChange={handleChange} required />
                <input name="grade" placeholder="Klasa/Viti" value={formData.grade} onChange={handleChange} required />
                <textarea name="motivation" placeholder="Pse dëshironi të merrni pjesë?" value={formData.motivation} onChange={handleChange} required />
                <button type="submit">Dërgo</button>
            </form>
        </div>
    );
};

export default ApplyPage;