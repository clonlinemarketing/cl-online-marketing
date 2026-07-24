import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';

export default function ServiceCard({ icon: Icon, title, body, to }) {
  const shouldReduce = useReducedMotion();
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (e) => {
    if (shouldReduce || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ rotateX: -y * 6, rotateY: x * 6 });
  };

  const handleMouseLeave = () => setTilt({ rotateX: 0, rotateY: 0 });

  return (
    <div className="perspective-1000 h-full">
      <motion.div
        ref={cardRef}
        className="claymorphic p-7 flex flex-col h-full"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{ rotateX: tilt.rotateX, rotateY: tilt.rotateY }}
        transition={{ type: 'spring', stiffness: 150, damping: 15 }}
        whileHover={shouldReduce ? {} : { scale: 1.02, z: 20 }}
      >
        <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4" style={{ background: 'linear-gradient(135deg, #e0f2fe, #bae6fd)' }}>
          {Icon && <Icon size={24} style={{ color: '#1565c0' }} />}
        </div>
        <h3 className="text-lg mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, color: '#0b0f1e' }}>{title}</h3>
        <p className="text-sm leading-relaxed flex-1" style={{ color: '#4A5568' }}>{body}</p>
        {to && (
          <Link to={to} className="mt-4 text-sm font-semibold inline-flex items-center gap-1" style={{ color: '#1565c0', textDecoration: 'none', fontFamily: 'Inter, sans-serif' }}>
            Learn more →
          </Link>
        )}
      </motion.div>
    </div>
  );
}
