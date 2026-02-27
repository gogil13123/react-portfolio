import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-bg-text">EDIT</div>

            {/* Left Column: Content */}
            <div className="hero-left">
                <div className="hero-eyebrow">Available for projects · Based in Georgia</div>
                <h1 className="hero-title">
                    Nika<br />
                    <span className="hero-surname">Utali<em>shvili</em></span>
                </h1>
                <p className="hero-desc">
                    Video editor specializing in compelling storytelling, dynamic edits, and platform-ready content — crafted with two years of hands-on expertise.
                </p>
                <div className="hero-cta">
                    <a href="#work" className="btn btn-primary">
                        View Work
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: "8px" }}>
                            <line x1="12" y1="5" x2="12" y2="19"></line>
                            <polyline points="19 12 12 19 5 12"></polyline>
                        </svg>
                    </a>
                    <a href="#contact" className="btn btn-ghost">Hire Me</a>
                </div>
            </div>

            {/* Right Column: Showreel */}
            <div className="hero-right">
                <div className="reel-frame">
                    <div className="reel-label">SHOWREEL 2026</div>
                    <video
                        className="reel-video"
                        autoPlay
                        muted
                        loop
                        playsInline
                    >
                        {/* Replace src with your actual video file */}
                        <source src="/showreel.mp4" type="video/mp4" />
                    </video>
                    {/* Placeholder shown when no video source is provided */}
                    <div className="reel-placeholder" style={{ display: 'none' }}>
                        <div className="reel-play-icon">▶</div>
                        <div className="reel-placeholder-text">Showreel</div>
                    </div>
                    <div className="reel-corner reel-corner--tl"></div>
                    <div className="reel-corner reel-corner--tr"></div>
                    <div className="reel-corner reel-corner--bl"></div>
                    <div className="reel-corner reel-corner--br"></div>
                </div>
            </div>

            <div className="scroll-indicator">Scroll</div>
        </section>
    );
};

export default Hero;
