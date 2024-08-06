import { useState, useEffect } from 'react';

const BlurCircle = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="blur-circle"
      style={{
        left: position.x,
        top: position.y,
      }}
    />
  );
};

export default BlurCircle;
