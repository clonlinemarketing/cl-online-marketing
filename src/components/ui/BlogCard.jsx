import { motion, useReducedMotion } from 'framer-motion';

export default function BlogCard({ category, title, excerpt, date, readTime }) {
  const shouldReduce = useReducedMotion();
  return (
    <motion.div
      className="claymorphic p-6 flex flex-col h-full"
      whileHover={shouldReduce ? {} : { y: -4 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
    >
      <span className="eyebrow-pill mb-4 self-start">{category}</span>
      <h3 className="text-lg mb-3 leading-snug flex-1" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, color: '#0b0f1e' }}>{title}</h3>
      <p className="text-sm leading-relaxed mb-4" style={{ color: '#4A5568', fontFamily: 'Inter, sans-serif' }}>{excerpt}</p>
      <div className="flex items-center justify-between text-xs mt-auto" style={{ color: '#94a3b8', fontFamily: 'Inter, sans-serif' }}>
        <span>{date}</span>
        <span>{readTime}</span>
      </div>
      <a href="#" className="mt-3 text-sm font-semibold" style={{ color: '#1565c0', textDecoration: 'none', fontFamily: 'Inter, sans-serif' }}>Read more →</a>
    </motion.div>
  );
}
