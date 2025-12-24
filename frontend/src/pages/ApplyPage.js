// frontend/src/pages/ApplyPage.js
import React, { useState } from 'react';
import axiosInstance from '../api/axiosConfig';
import './ApplyPage.css';

const ApplyPage = () => {
    const [formData, setFormData] = useState({
        full_name: '', email: '', school: '', grade: '', motivation: ''
    });
    const [status, setStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axiosInstance.post('applications/', formData);
            setStatus({ type: 'success', text: 'Aplikimi u dërgua me sukses!' });
            setFormData({ full_name: '', email: '', school: '', grade: '', motivation: '' });
        } catch (error) {
            setStatus({ type: 'error', text: 'Pati një gabim. Provoni përsëri.' });
        }
    };

    return (
        <div className="apply-page-wrapper">
            <div className="apply-card">
                <h2>Apliko Tani</h2>
                <p className="form-subtitle">Bëhu pjesë e simpoziumit më të madh diplomatik.</p>
                {status && <div className={`status-message ${status.type}`}>{status.text}</div>}
                <form onSubmit={handleSubmit} className="apply-form">
                    <div className="form-group">
                        <input name="full_name" placeholder="Emri i Plotë" value={formData.full_name} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <input name="school" placeholder="Shkolla" value={formData.school} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <input name="grade" placeholder="Klasa/Viti" value={formData.grade} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <textarea name="motivation" placeholder="Pse dëshironi të merrni pjesë?" rows="5" value={formData.motivation} onChange={handleChange} required />
                    </div>
                    <button type="submit" className="submit-btn">Dërgo Aplikimin</button>
                </form>
            </div>
        </div>
    );
};

export default ApplyPage;