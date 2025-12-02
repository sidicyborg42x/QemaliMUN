import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
    return (
        <div className="about-page container">
            <header className="about-header">
                <h1>About QemaliMUN</h1>
                <p className="lead">Ismail Qemali High School's premier Model United Nations Club.</p>
            </header>
            
            <div className="about-content">
                <section>
                    <h2>Our Mission</h2>
                    <p>
                        At QemaliMUN, we strive to educate students about current events, international relations, 
                        diplomacy, and the United Nations agenda. Our goal is to foster a generation of leaders 
                        who are capable of critical thinking and solving complex global issues through dialogue.
                    </p>
                </section>

                <section>
                    <h2>What We Do</h2>
                    <p>
                        We organize simulations of the United Nations where students act as delegates for 
                        different countries. In these committees, delegates debate topics ranging from 
                        climate change to international security, drafting resolutions to solve these issues.
                    </p>
                </section>
                
                <section>
                    <h2>Leadership</h2>
                    <p>
                        Led by a dedicated board of experienced MUNers, our club provides training sessions, 
                        public speaking workshops, and opportunities to attend international conferences.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default AboutPage;
