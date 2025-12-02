import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
    return (
        <div className="about-page container fade-in">
            <header className="about-header">
                <h1>Rreth QSMUN</h1>
                <p className="lead">Model United Nations i Gjimnazit "Qemal Stafa"</p>
            </header>
            
            <div className="about-content">
                {/* What is MUN Section */}
                <section className="about-section">
                    <h2>Çfarë është MUN?</h2>
                    <p>
                        MUN (Model United Nations) është një aktivitet i cili sugjeron të vendosë të rinjtë në rolin e drejtuesve të një kombi. 
                        Ata njihen me shtetin që zgjedhin të përfaqësojnë, mbrojnë një temë në një debat diplomatik dhe përfshihen në zhvillimin 
                        e një zgjedhjeje duke bashkëpunuar (ose duke formuar aleanca) me “shtete” të tjera.
                    </p>
                </section>

                {/* Advantages Section */}
                <section className="about-section">
                    <h2>Avantazhet e QSMUN</h2>
                    <div className="advantages-grid">
                        <div className="advantage-item">
                            <h3>Zhvillon Lidershipin</h3>
                            <p>Kryetarët, delegatët dhe organizatorët marrin përgjegjësi reale.</p>
                        </div>
                        <div className="advantage-item">
                            <h3>Punë në Ekip</h3>
                            <p>Komitetet kërkojnë bashkëpunim për të kaluar rezolutat.</p>
                        </div>
                        <div className="advantage-item">
                            <h3>Negocim dhe Diplomaci</h3>
                            <p>Mëson si të debatosh pa konflikt.</p>
                        </div>
                        <div className="advantage-item">
                            <h3>Politika Botërore</h3>
                            <p>Rrit njohuritë mbi strukturën e OKB, konfliktet ndërkombëtare dhe bashkëpunimin global.</p>
                        </div>
                        <div className="advantage-item">
                            <h3>Zhvillon Empatinë</h3>
                            <p>Përfaqësimi i shteteve të ndryshme të detyron të kuptosh shumë pikëpamje.</p>
                        </div>
                        <div className="advantage-item">
                            <h3>Qytetari Aktive</h3>
                            <p>Nxënësit kuptojnë si lidhen problemet globale me jetën e përditshme.</p>
                        </div>
                    </div>
                </section>

                {/* Goals Section */}
                <section className="about-section bg-accent">
                    <h2>Synime</h2>
                    <ul className="goals-list">
                        <li>
                            <strong>Trajnime për nxënësit:</strong> Fokus mbi karakteristikat e MUN si Position Paper, Rezolutë dhe zhvillimi i një stimulimi të MUN me nxënësit.
                        </li>
                        <li>
                            <strong>Aktivitet në shkollë:</strong> Planifikuar për fundin e tremujorit të dytë - fillimin e tremujorit të tretë.
                        </li>
                    </ul>
                </section>
                
                {/* Leadership Section */}
                <section className="about-section leadership-section">
                    <h2>Stafi Drejtues</h2>
                    <div className="leadership-grid">
                        <div className="leader-card">
                            <div className="leader-role">Presidente</div>
                            <div className="leader-name">Erojna Mulgeci</div>
                        </div>
                        <div className="leader-card">
                            <div className="leader-role">Zëvëndës Presidente</div>
                            <div className="leader-name">Era Karaj</div>
                        </div>
                        <div className="leader-card">
                            <div className="leader-role">Head of Academics</div>
                            <div className="leader-name">Greis Shqiponja</div>
                        </div>
                        <div className="leader-card">
                            <div className="leader-role">Head of Media</div>
                            <div className="leader-name">Klajdi Kamenica</div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default AboutPage;
