import { motion, useReducedMotion } from 'framer-motion';

export default function TrustCard({ icon: Icon, title, body }) {
  const shouldReduce = useReducedMotion();
  return (
    <motion.div
      className="claymorphic p-6"
      whileHover={shouldReduce ? {} : { scale: 1.02, y: -4 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
    >
      {Icon && (
        <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{ background: '#e0f2fe' }}>
          <Icon size={20} style={{ color: '#1565c0' }} />
        </div>
      )}
      <h4 className="mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, color: '#0b0f1e' }}>{title}</h4>
      <p className="text-sm leading-relaxed" style={{ color: '#4A5568', fontFamily: 'Inter, sans-serif' }}>{body}</p>
    </motion.div>
  );
}
