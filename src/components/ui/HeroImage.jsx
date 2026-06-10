import { motion, useReducedMotion } from 'framer-motion';

// Curated Unsplash images per page/service
export const HERO_IMAGES = {
  home:       'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80',
  about:      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80',
  services:   'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=80',
  webDesign:  'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=900&q=80',
  landing:    'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=900&q=80',
  corporate:  'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80',
  ecommerce:  'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=900&q=80',
  lms:        'https://images.unsplash.com/photo-1434030216411-0b793f4b6f7e?auto=format&fit=crop&w=900&q=80',
  digitalAds: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=900&q=80',
  googleAds:  'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?auto=format&fit=crop&w=900&q=80',
  socialAds:  'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=900&q=80',
  search:     'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&w=900&q=80',
  googleSeo:  'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80',
  aiSearch:   'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=900&q=80',
  social:     'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?auto=format&fit=crop&w=900&q=80',
  blog:       'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=80',
  contact:    'https://images.unsplash.com/photo-1423666639684-112551851967?auto=format&fit=crop&w=900&q=80',
};

/**
 * Animated hero image panel.
 * badge = { text, icon: LucideComponent } (optional)
 * badge2 = secondary badge (optional)
 */
export default function HeroImage({ src, alt = '', badge, badge2, delay = 0 }) {
  const shouldReduce = useReducedMotion();

  return (
    <motion.div
      className="relative"
      initial={shouldReduce ? {} : { opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Decorative background blob */}
      <div
        className="absolute -inset-4 rounded-3xl opacity-30"
        style={{ background: 'radial-gradient(ellipse at 60% 40%, #bae6fd, transparent 70%)', zIndex: 0 }}
      />

      {/* Main image */}
      <div
        className="relative rounded-3xl overflow-hidden"
        style={{ boxShadow: '0 24px 64px rgba(0,0,0,0.14)', zIndex: 1 }}
      >
        <img
          src={src}
          alt={alt}
          loading="lazy"
          style={{ width: '100%', height: '420px', objectFit: 'cover', display: 'block' }}
        />
        {/* Blue overlay tint */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(135deg, rgba(21,101,192,0.15) 0%, transparent 60%)',
        }} />
      </div>

      {/* Floating badge 1 */}
      {badge && (
        <motion.div
          className="absolute glassmorphic flex items-center gap-2 px-4 py-2"
          style={{ bottom: '24px', left: '-12px', zIndex: 2 }}
          animate={shouldReduce ? {} : { y: [0, -8, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
        >
          {badge.icon && <badge.icon size={16} style={{ color: '#1565c0', flexShrink: 0 }} />}
          <span style={{ fontSize: '0.8125rem', fontFamily: 'Inter, sans-serif', fontWeight: 600, color: '#0b0f1e', whiteSpace: 'nowrap' }}>
            {badge.text}
          </span>
        </motion.div>
      )}

      {/* Floating badge 2 */}
      {badge2 && (
        <motion.div
          className="absolute glassmorphic flex items-center gap-2 px-4 py-2"
          style={{ top: '24px', right: '-12px', zIndex: 2 }}
          animate={shouldReduce ? {} : { y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
        >
          {badge2.icon && <badge2.icon size={16} style={{ color: '#29b6f6', flexShrink: 0 }} />}
          <span style={{ fontSize: '0.8125rem', fontFamily: 'Inter, sans-serif', fontWeight: 600, color: '#0b0f1e', whiteSpace: 'nowrap' }}>
            {badge2.text}
          </span>
        </motion.div>
      )}

      {/* Corner accent dot */}
      <motion.div
        className="absolute w-5 h-5 rounded-full"
        style={{ top: '-8px', right: '32px', background: '#29b6f6', zIndex: 2, boxShadow: '0 0 16px rgba(41,182,246,0.6)' }}
        animate={shouldReduce ? {} : { scale: [1, 1.4, 1] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      />
    </motion.div>
  );
}
