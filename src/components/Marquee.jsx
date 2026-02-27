import './Marquee.css';

const Marquee = ({ children }) => {
    return (
        <div className="marquee-section">
            <div className="marquee-track">
                {children}
                {children} {/* Duplicate for seamless loop */}
            </div>
        </div>
    );
};

export const MarqueeItem = ({ text }) => (
    <div className="marquee-item">
        {text} <span>✦</span>
    </div>
);

export default Marquee;
