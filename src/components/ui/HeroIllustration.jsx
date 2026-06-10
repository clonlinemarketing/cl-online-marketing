import { motion, useReducedMotion } from 'framer-motion';

const float = (delay = 0) => ({
  animate: { y: [0, -14, 0] },
  transition: { duration: 4, repeat: Infinity, ease: 'easeInOut', delay },
});

export default function HeroIllustration() {
  const shouldReduce = useReducedMotion();
  const f = (d) => shouldReduce ? {} : float(d);

  return (
    <div className="relative w-full h-80 md:h-96 flex items-center justify-center" style={{ perspective: '600px' }}>
      {/* Large sphere */}
      <motion.div
        className="absolute"
        style={{
          width: 200, height: 200,
          borderRadius: '50%',
          background: 'radial-gradient(circle at 35% 35%, #42a5f5, #1565c0 60%, #0d47a1)',
          boxShadow: '0 20px 60px rgba(21,101,192,0.4), inset 0 -10px 30px rgba(0,0,0,0.2)',
          left: '50%', top: '50%', transform: 'translate(-50%,-50%)',
        }}
        {...(shouldReduce ? {} : { animate: { y: [0, -14, 0] }, transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' } })}
      />

      {/* Orbiting ring 1 */}
      <motion.div
        className="absolute"
        style={{
          width: 260, height: 260,
          borderRadius: '50%',
          border: '2px solid rgba(41,182,246,0.5)',
          left: '50%', top: '50%',
          transform: 'translate(-50%,-50%) rotateX(70deg)',
        }}
        animate={shouldReduce ? {} : { rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      />

      {/* Orbiting ring 2 */}
      <motion.div
        className="absolute"
        style={{
          width: 320, height: 120,
          borderRadius: '50%',
          border: '1.5px solid rgba(21,101,192,0.3)',
          left: '50%', top: '50%',
          transform: 'translate(-50%,-50%) rotateX(80deg) rotateZ(30deg)',
        }}
        animate={shouldReduce ? {} : { rotate: -360 }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
      />

      {/* Floating cube */}
      <motion.div
        className="absolute glassmorphic"
        style={{ width: 60, height: 60, right: '12%', top: '20%', borderRadius: '12px', border: '1px solid rgba(41,182,246,0.3)', background: 'rgba(255,255,255,0.6)' }}
        {...(shouldReduce ? {} : { animate: { y: [0, -10, 0], rotate: [0, 8, 0] }, transition: { duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 } })}
      />

      {/* Small orb 1 */}
      <motion.div
        className="absolute"
        style={{ width: 24, height: 24, borderRadius: '50%', background: 'radial-gradient(circle, #29b6f6, #0288d1)', left: '15%', top: '30%', boxShadow: '0 0 15px rgba(41,182,246,0.6)' }}
        {...(shouldReduce ? {} : { animate: { y: [0, -8, 0] }, transition: { duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 } })}
      />

      {/* Small orb 2 */}
      <motion.div
        className="absolute"
        style={{ width: 16, height: 16, borderRadius: '50%', background: 'radial-gradient(circle, #42a5f5, #1565c0)', right: '20%', bottom: '25%', boxShadow: '0 0 10px rgba(21,101,192,0.5)' }}
        {...(shouldReduce ? {} : { animate: { y: [0, -12, 0] }, transition: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 } })}
      />

      {/* Grid plane */}
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{
          height: '80px',
          backgroundImage: 'linear-gradient(rgba(21,101,192,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(21,101,192,0.15) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
          transform: 'perspective(200px) rotateX(45deg)',
          transformOrigin: 'bottom',
          opacity: 0.5,
        }}
      />

      {/* Glassmorphic badge */}
      <motion.div
        className="absolute glassmorphic px-4 py-2 flex items-center gap-2"
        style={{ left: '8%', bottom: '30%' }}
        {...(shouldReduce ? {} : { animate: { y: [0, -6, 0] }, transition: { duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 } })}
      >
        <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#29b6f6' }} />
        <span style={{ fontSize: '0.75rem', fontFamily: 'Inter, sans-serif', fontWeight: 600, color: '#0b0f1e', whiteSpace: 'nowrap' }}>Google SEO</span>
      </motion.div>

      <motion.div
        className="absolute glassmorphic px-4 py-2 flex items-center gap-2"
        style={{ right: '5%', top: '40%' }}
        {...(shouldReduce ? {} : { animate: { y: [0, -8, 0] }, transition: { duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.3 } })}
      >
        <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#1565c0' }} />
        <span style={{ fontSize: '0.75rem', fontFamily: 'Inter, sans-serif', fontWeight: 600, color: '#0b0f1e', whiteSpace: 'nowrap' }}>AI Search</span>
      </motion.div>
    </div>
  );
}
