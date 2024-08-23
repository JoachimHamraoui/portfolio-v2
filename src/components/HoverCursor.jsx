import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import CursorImage from '../../public/images/head.png'; // Adjust the path as needed

const HoverCursor = ({ active }) => {
  const [position, setPosition] = useState({ x: -100, y: -100 });

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
    <motion.div
      className="fixed pointer-events-none"
      style={{
        left: position.x,
        top: position.y,
        transform: 'translate(-50%, -50%)',
        zIndex: 1000,
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: active ? 1.1 : 1, opacity: active ? 1 : 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <img src={CursorImage} alt="Custom Cursor" className="h-32 w-32" />
    </motion.div>
  );
};

HoverCursor.propTypes = {
  active: PropTypes.bool.isRequired,
};

export default HoverCursor;
