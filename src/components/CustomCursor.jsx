import { useEffect, useState } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
    const [positions, setPositions] = useState({ mx: 0, my: 0, rx: 0, ry: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPositions((prev) => ({
                ...prev,
                mx: e.clientX,
                my: e.clientY,
            }));
        };

        document.addEventListener('mousemove', handleMouseMove);
        return () => document.removeEventListener('mousemove', handleMouseMove);
    }, []);

    useEffect(() => {
        let animationFrameId;

        const animateRing = () => {
            setPositions((prev) => ({
                ...prev,
                rx: prev.rx + (prev.mx - prev.rx) * 0.12,
                ry: prev.ry + (prev.my - prev.ry) * 0.12,
            }));
            animationFrameId = requestAnimationFrame(animateRing);
        };

        animationFrameId = requestAnimationFrame(animateRing);
        return () => cancelAnimationFrame(animationFrameId);
    }, []);

    return (
        <>
            <div
                className="cursor"
                style={{ left: `${positions.mx}px`, top: `${positions.my}px` }}
            />
            <div
                className="cursor-ring"
                style={{ left: `${positions.rx}px`, top: `${positions.ry}px` }}
            />
        </>
    );
};

export default CustomCursor;
