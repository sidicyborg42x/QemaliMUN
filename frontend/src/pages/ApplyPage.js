import React, { useState } from 'react';
import axiosInstance from '../api/axiosConfig';

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
        <div className="container" style={{ marginTop: '50px', maxWidth: '600px' }}>
            <h2>Formulari i Aplikimit</h2>
            {status && (
                <p style={{ color: status.type === 'success' ? '#28a745' : '#dc3545', fontWeight: 'bold' }}>
                    {status.text}
                </p>
            )}
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <input name="full_name" placeholder="Emri i Plotë" value={formData.full_name} onChange={handleChange} required />
                <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                <input name="school" placeholder="Shkolla" value={formData.school} onChange={handleChange} required />
                <input name="grade" placeholder="Klasa/Viti" value={formData.grade} onChange={handleChange} required />
                <textarea name="motivation" placeholder="Pse dëshironi të merrni pjesë?" rows="5" value={formData.motivation} onChange={handleChange} required />
                <button type="submit" style={{ padding: '10px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                    Dërgo Aplikimin
                </button>
            </form>
        </div>
    );
};

export default ApplyPage;