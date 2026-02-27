import Reveal from './Reveal';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="contact-inner">
                <div>
                    <Reveal>
                        <div className="section-label">Contact</div>
                    </Reveal>
                    <Reveal>
                        <h2 className="contact-headline">Let's<br /><em>create</em><br />together</h2>
                    </Reveal>
                </div>
                <div className="contact-info">
                    <Reveal>
                        <div className="contact-item">
                            <span className="contact-type">Email</span>
                            <a href="mailto:nikautalishvili8@gmail.com" className="contact-value">nikautalishvili8@gmail.com</a>
                        </div>
                        <div className="contact-item">
                            <span className="contact-type">Phone</span>
                            <a href="tel:+995592415111" className="contact-value">+995 592 415 111</a>
                        </div>
                        <div className="contact-item">
                            <span className="contact-type">Status</span>
                            <span className="contact-value" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <span style={{
                                    width: '8px',
                                    height: '8px',
                                    borderRadius: '50%',
                                    background: 'var(--accent)',
                                    display: 'inline-block',
                                    animation: 'pulse 2s ease infinite'
                                }}></span>
                                Available for Work
                            </span>
                        </div>
                        <div style={{ marginTop: '32px' }}>
                            <a href="mailto:nikautalishvili8@gmail.com" className="btn btn-primary">Send a Message →</a>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};

export default Contact;
