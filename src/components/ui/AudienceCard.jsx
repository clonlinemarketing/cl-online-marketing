import { motion, useReducedMotion } from 'framer-motion';

export default function AudienceCard({ icon: Icon, title, body }) {
  const shouldReduce = useReducedMotion();
  return (
    <motion.div
      className="claymorphic p-6 text-center"
      whileHover={shouldReduce ? {} : { scale: 1.02, y: -4 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
    >
      {Icon && (
        <div className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-3" style={{ background: 'linear-gradient(135deg, #e0f2fe, #bae6fd)' }}>
          <Icon size={24} style={{ color: '#1565c0' }} />
        </div>
      )}
      <h4 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, color: '#0b0f1e' }}>{title}</h4>
      {body && <p className="text-sm mt-2" style={{ color: '#4A5568', fontFamily: 'Inter, sans-serif' }}>{body}</p>}
    </motion.div>
  );
}
