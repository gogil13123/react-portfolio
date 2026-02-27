import Reveal from './Reveal';
import './Skills.css';

const EditingIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="6" cy="6" r="3"></circle>
        <circle cx="6" cy="18" r="3"></circle>
        <line x1="20" y1="4" x2="8.12" y2="15.88"></line>
        <line x1="14.47" y1="14.48" x2="20" y2="20"></line>
        <line x1="8.12" y1="8.12" x2="12" y2="12"></line>
    </svg>
);

const StorytellingIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m22 8-6 4 6 4V8Z"></path>
        <rect width="14" height="12" x="2" y="6" rx="2" ry="2"></rect>
    </svg>
);

const ColorGradeIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="13.5" cy="6.5" r=".5"></circle>
        <circle cx="17.5" cy="10.5" r=".5"></circle>
        <circle cx="8.5" cy="7.5" r=".5"></circle>
        <circle cx="6.5" cy="12.5" r=".5"></circle>
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.92 0 1.7-.39 2.3-1 .6-.6 1-1.38 1-2.3 0-1.1.9-2 2-2 1.1 0 2.1-.4 2.7-1 .6-.6 1-1.4 1-2.3 0-5.5-4.5-10-10-10z"></path>
    </svg>
);

const MotionIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
    </svg>
);

const skills = [
    { icon: <EditingIcon />, title: 'Editing', desc: 'Precision cutting and pacing that serves the story. Every frame earns its place.' },
    { icon: <StorytellingIcon />, title: 'Storytelling', desc: 'Narrative structure and emotional arc — shaping raw footage into compelling experiences.' },
    { icon: <ColorGradeIcon />, title: 'Color Grade', desc: 'Cinematic looks and consistent visual language that elevate the mood of each project.' },
    { icon: <MotionIcon />, title: 'Motion', desc: 'Dynamic motion graphics and visual effects that enhance without overwhelming.' }
];

const Skills = () => {
    return (
        <section id="skills" className="skills-section">
            <div className="section-label">What I Do</div>
            <Reveal>
                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <div key={index} className="skill-card">
                            <span className="skill-icon">{skill.icon}</span>
                            <div className="skill-title">{skill.title}</div>
                            <p className="skill-desc">{skill.desc}</p>
                        </div>
                    ))}
                </div>
            </Reveal>
        </section>
    );
};

export default Skills;
