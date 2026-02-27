import { useRef, useState } from 'react';
import Reveal from './Reveal';
import VideoModal from './VideoModal';
import './Work.css';

const projects = [
    { id: 1, title: 'Apple UI Animation', category: 'UI Motion', video: '/work/apple_ui.mp4' },
    { id: 2, title: 'Jiberia Edit V1', category: 'Cinematic', video: '/work/jiberia_1.mp4' },
    { id: 3, title: 'Infinity Edit V1', category: 'Motion Graphics', video: '/work/infinity_1.mp4' },
    { id: 4, title: 'Infinity Edit V2', category: 'Motion Graphics', video: '/work/infinity_2.mp4' },
    { id: 5, title: 'Jiberia Edit V2', category: 'Cinematic', video: '/work/jiberia_2.mp4' },
    { id: 6, title: 'Social Media Content', category: 'Social Media', video: '/work/social_edit.mp4' }
];

const WorkItem = ({ project, onSelect }) => {
    const videoRef = useRef(null);

    const handleMouseEnter = () => {
        if (videoRef.current) {
            videoRef.current.play().catch(err => console.log("Video play interrupted"));
        }
    };

    const handleMouseLeave = () => {
        if (videoRef.current) {
            videoRef.current.pause();
        }
    };

    return (
        <div
            className="work-item"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => onSelect(project)}
        >
            <div className="work-video-container">
                <video
                    ref={videoRef}
                    className="work-video"
                    muted
                    loop
                    playsInline
                >
                    <source src={project.video} type="video/mp4" />
                </video>
                <div className="work-video-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M5 3l14 9-14 9V3z" />
                    </svg>
                </div>
            </div>
            <div className="work-overlay">
                <div className="work-cat">{project.category}</div>
                <div className="work-name">{project.title}</div>
            </div>
        </div>
    );
};

const Work = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section id="work" className="work-section">
            <Reveal>
                <div className="section-label">Selected Work</div>
            </Reveal>
            <Reveal>
                <div className="work-grid">
                    {projects.map((project) => (
                        <WorkItem
                            key={project.id}
                            project={project}
                            onSelect={(p) => setSelectedProject(p)}
                        />
                    ))}
                </div>
            </Reveal>

            <VideoModal
                isOpen={!!selectedProject}
                videoSrc={selectedProject?.video}
                title={selectedProject?.title}
                onClose={() => setSelectedProject(null)}
            />
        </section>
    );
};

export default Work;
