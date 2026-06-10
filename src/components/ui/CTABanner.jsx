import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function CTABanner({ headline, body, cta1 = 'Book a Call', cta2, cta2to }) {
  const shouldReduce = useReducedMotion();
  return (
    <section style={{ background: '#0b0f1e' }} className="relative overflow-hidden py-20 px-6">
      {/* decorative orbs */}
      <motion.div
        className="absolute bottom-12 right-12 w-48 h-48 rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, #29b6f6, transparent)' }}
        animate={shouldReduce ? {} : { scale: [1, 1.3, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-4 left-8 w-24 h-24 rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, #1565c0, transparent)' }}
        animate={shouldReduce ? {} : { scale: [1.2, 1, 1.2] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h2 className="mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: 'clamp(1.375rem, 3.5vw, 2.25rem)', lineHeight: 1.25, color: 'white', width: '100%', maxWidth: '100%', wordBreak: 'break-word', overflowWrap: 'break-word' }}>{headline}</h2>
        {body && <p className="text-slate-400 text-lg mb-8 leading-relaxed">{body}</p>}
        <div className="flex flex-wrap gap-4 justify-center">
          <motion.a
            href="/contact"
            className="btn-primary"
            whileHover={shouldReduce ? {} : { scale: 1.03, y: -2 }}
            whileTap={shouldReduce ? {} : { scale: 0.97 }}
            style={{ background: 'white', color: '#0b0f1e', boxShadow: 'none' }}
          >
            {cta1}
          </motion.a>
          {cta2 && (
            <motion.a
              href={cta2to || '/services'}
              className="btn-ghost-white"
              whileHover={shouldReduce ? {} : { scale: 1.03, y: -2 }}
              whileTap={shouldReduce ? {} : { scale: 0.97 }}
            >
              {cta2}
            </motion.a>
          )}
        </div>
      </div>
    </section>
  );
}
