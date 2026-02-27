import Reveal from './Reveal';
import './About.css';

const About = () => {
    return (
        <section id="about">
            <div className="section-label">About</div>
            <div className="about-grid">
                <div>
                    <Reveal>
                        <h2 className="about-title">Frames<br />that <em>feel</em></h2>
                    </Reveal>
                    <Reveal>
                        <div className="stats-row">
                            <div className="stat">
                                <div className="stat-num">2+</div>
                                <div className="stat-label">Years<br />Experience</div>
                            </div>
                            <div className="stat">
                                <div className="stat-num">∞</div>
                                <div className="stat-label">Creative<br />Drive</div>
                            </div>
                            <div className="stat">
                                <div className="stat-num">24/7</div>
                                <div className="stat-label">Dedicated<br />to Craft</div>
                            </div>
                        </div>
                    </Reveal>
                </div>
                <Reveal>
                    <div>
                        <p className="about-text">
                            I'm a motivated video editor with two years of self-directed learning and practical experience. My journey has been driven by a deep passion for the craft — studying every technique, frame, and cut that makes stories resonate.
                        </p>
                        <div className="languages-container">
                            <div className="languages-label">Languages</div>
                            <div className="languages-list">
                                <div className="language-item">
                                    <span className="lang-name">German</span>
                                    <span className="lang-level">B2 - C1</span>
                                </div>
                                <div className="language-item">
                                    <span className="lang-name">English</span>
                                    <span className="lang-level">B2</span>
                                </div>
                                <div className="language-item">
                                    <span className="lang-name">Georgian</span>
                                    <span className="lang-level">Fluent</span>
                                </div>
                            </div>
                        </div>

                        <a href="#contact" className="btn btn-primary" style={{ marginTop: "24px" }}>
                            Let's Work Together
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: "8px" }}>
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </a>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};

export default About;
