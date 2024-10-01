import React, { useEffect, useRef, useState } from "react";
import "./sparkling_background.css";

interface ParticleProps {
    style: React.CSSProperties;
}

const Particle: React.FC<ParticleProps> = ({ style }) => (
    <div className="particle" style={style} />
);

const SparklingBackground: React.FC = () => {
    const [particles, setParticles] = useState<React.CSSProperties[]>([]);
    const requestRef = useRef<number>();
    const previousTimeRef = useRef<number>();

    const createParticle = () => {
        const size = Math.random() * 3 + 2;
        const colors = [
            "#3498db",
            "#8e44ad",
            "#2ecc71",
            "#e74c3c",
            "#f39c12",
            "#ffffff",
        ];
        const color = colors[Math.floor(Math.random() * colors.length)];
        const duration = Math.random() * 5 + 3;

        return {
            width: `${size}px`,
            height: `${size}px`,
            backgroundColor: color,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `sparkle ${duration}s ease-in-out infinite`,
            animationDelay: `${Math.random() * duration}s`,
        };
    };

    const updateParticles = (time: number) => {
        if (previousTimeRef.current != undefined) {
            const deltaTime = time - previousTimeRef.current;

            // Update particles every 200ms
            if (deltaTime > 200) {
                setParticles((prevParticles) => {
                    if (prevParticles.length < 100) {
                        return [...prevParticles, createParticle()];
                    }
                    const newParticles = [...prevParticles];
                    newParticles[
                        Math.floor(Math.random() * newParticles.length)
                    ] = createParticle();
                    return newParticles;
                });
                previousTimeRef.current = time;
            }
        } else {
            previousTimeRef.current = time;
        }

        requestRef.current = requestAnimationFrame(updateParticles);
    };

    useEffect(() => {
        requestRef.current = requestAnimationFrame(updateParticles);
        return () => {
            if (requestRef.current) {
                cancelAnimationFrame(requestRef.current);
            }
        };
    }, []);

    return (
        <div className="sparkling-background">
            {particles.map((style, index) => (
                <Particle key={index} style={style} />
            ))}
        </div>
    );
};

export default SparklingBackground;
