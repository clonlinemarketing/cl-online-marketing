import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function FAQAccordion({ items }) {
  const [open, setOpen] = useState(null);
  const shouldReduce = useReducedMotion();

  return (
    <div className="max-w-3xl mx-auto space-y-3">
      {items.map((item, i) => (
        <div key={i} className="neumorphic overflow-hidden">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between p-5 text-left"
            aria-expanded={open === i}
          >
            <span className="font-semibold text-base" style={{ color: '#0b0f1e', fontFamily: 'Space Grotesk, sans-serif' }}>{item.q}</span>
            <motion.div animate={shouldReduce ? {} : { rotate: open === i ? 180 : 0 }} transition={{ duration: 0.2 }}>
              <ChevronDown size={20} style={{ color: '#29b6f6' }} />
            </motion.div>
          </button>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div
                initial={shouldReduce ? {} : { height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={shouldReduce ? {} : { height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <p className="px-5 pb-5 text-sm leading-relaxed" style={{ color: '#4A5568', fontFamily: 'Inter, sans-serif' }}>{item.a}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
