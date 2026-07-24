import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

const megaMenu = [
  {
    col: 'Website Design & Development',
    items: [
      { label: 'Single Landing Page', to: '/services/web-design/landing-page' },
      { label: 'Multiple / Corporate Website', to: '/services/web-design/corporate' },
      { label: 'eCommerce Website', to: '/services/web-design/ecommerce' },
      { label: 'LMS Website', to: '/services/web-design/lms' },
    ],
    hub: '/services/web-design',
  },
  {
    col: 'Digital Pay Ads',
    items: [
      { label: 'Google Ads', to: '/services/digital-ads/google-ads' },
      { label: 'Social Media Ads', to: '/services/digital-ads/social-ads' },
    ],
    hub: '/services/digital-ads',
  },
  {
    col: 'Google Search Engine',
    items: [
      { label: 'Google SEO', to: '/services/search/google-seo' },
      { label: 'AI Search Engine (GEO, AEO, AIO)', to: '/services/search/ai-search' },
    ],
    hub: '/services/search',
  },
  {
    col: 'Social Media Management',
    items: [],
    hub: '/services/social-management',
  },
];

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services', hasMenu: true },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropRef = useRef(null);
  const location = useLocation();
  const shouldReduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); setDropOpen(false); }, [location]);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e) => { if (dropRef.current && !dropRef.current.contains(e.target)) setDropOpen(false); };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: 'white',
          boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.08)' : 'none',
          borderBottom: scrolled ? 'none' : '1px solid #E2E8F0',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            <img src="/logo.png" alt="CL Online Marketing Agency" style={{ height: '40px', width: 'auto', display: 'block' }} />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map(link => link.hasMenu ? (
              <div key={link.label} ref={dropRef} className="relative flex items-center gap-0.5">
                <Link
                  to={link.to}
                  className="text-sm font-medium transition-colors"
                  style={{ color: location.pathname.startsWith('/services') ? '#1565c0' : '#0b0f1e', textDecoration: 'none', fontFamily: 'Inter, sans-serif', padding: '4px 2px 4px 0' }}
                >
                  {link.label}
                </Link>
                <button
                  onClick={() => setDropOpen(v => !v)}
                  aria-label="Toggle services menu"
                  style={{ background: 'none', border: 'none', cursor: 'pointer', color: location.pathname.startsWith('/services') ? '#1565c0' : '#0b0f1e', display: 'flex', alignItems: 'center', padding: '4px 2px' }}
                >
                  <motion.span animate={shouldReduce ? {} : { rotate: dropOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <ChevronDown size={14} />
                  </motion.span>
                </button>
                <AnimatePresence>
                  {dropOpen && (
                    <motion.div
                      initial={shouldReduce ? {} : { opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={shouldReduce ? {} : { opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 p-6 rounded-2xl"
                      style={{ background: 'white', boxShadow: '0 8px 40px rgba(0,0,0,0.12)', border: '1px solid #E2E8F0', width: '680px', zIndex: 100 }}
                    >
                      <div className="grid grid-cols-4 gap-6">
                        {megaMenu.map((col) => (
                          <div key={col.col}>
                            <Link to={col.hub} className="text-xs font-semibold uppercase tracking-wider block mb-3" style={{ color: '#1565c0', textDecoration: 'none', fontFamily: 'Inter, sans-serif' }}>{col.col}</Link>
                            {col.items.map(item => (
                              <Link
                                key={item.label}
                                to={item.to}
                                className="block text-sm py-1 transition-colors"
                                style={{ color: '#4A5568', textDecoration: 'none', fontFamily: 'Inter, sans-serif' }}
                                onMouseEnter={e => e.target.style.color = '#1565c0'}
                                onMouseLeave={e => e.target.style.color = '#4A5568'}
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.label}
                to={link.to}
                className="text-sm font-medium transition-colors"
                style={{ color: location.pathname === link.to ? '#1565c0' : '#0b0f1e', textDecoration: 'none', fontFamily: 'Inter, sans-serif' }}
              >
                {link.label}
              </Link>
            ))}
            <motion.a
              href="/contact"
              className="btn-primary"
              style={{ padding: '10px 20px', fontSize: '0.875rem' }}
              whileHover={shouldReduce ? {} : { scale: 1.03, y: -1 }}
              whileTap={shouldReduce ? {} : { scale: 0.97 }}
            >
              Book a Call
            </motion.a>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Toggle menu"
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#0b0f1e' }}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={shouldReduce ? {} : { x: '100%' }}
            animate={{ x: 0 }}
            exit={shouldReduce ? {} : { x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col overflow-y-auto"
            style={{ background: 'white', paddingTop: '72px' }}
          >
            <nav className="flex flex-col p-6 gap-2">
              {navLinks.map(link => link.hasMenu ? (
                <div key={link.label}>
                  <div
                    className="flex items-center justify-between py-3"
                    style={{ borderBottom: '1px solid #E2E8F0' }}
                  >
                    <Link
                      to={link.to}
                      className="text-base font-semibold flex-1"
                      style={{ color: '#0b0f1e', textDecoration: 'none', fontFamily: 'Space Grotesk, sans-serif' }}
                    >
                      Services
                    </Link>
                    <button
                      onClick={() => setMobileServicesOpen(v => !v)}
                      aria-label="Toggle services menu"
                      style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#0b0f1e', padding: '4px 8px', display: 'flex', alignItems: 'center' }}
                    >
                      <ChevronDown size={18} style={{ transform: mobileServicesOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
                    </button>
                  </div>
                  {mobileServicesOpen && (
                    <div className="pl-4 mt-2 space-y-1">
                      {megaMenu.map(col => (
                        <div key={col.col} className="mb-4">
                          <Link to={col.hub} className="text-xs font-semibold uppercase tracking-wider block mb-2" style={{ color: '#1565c0', textDecoration: 'none', fontFamily: 'Inter, sans-serif' }}>{col.col}</Link>
                          {col.items.map(item => (
                            <Link key={item.label} to={item.to} className="block py-1 text-sm" style={{ color: '#4A5568', textDecoration: 'none', fontFamily: 'Inter, sans-serif' }}>{item.label}</Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  to={link.to}
                  className="py-3 text-base font-semibold"
                  style={{ color: '#0b0f1e', textDecoration: 'none', fontFamily: 'Space Grotesk, sans-serif', borderBottom: '1px solid #E2E8F0' }}
                >
                  {link.label}
                </Link>
              ))}
              <motion.a
                href="/contact"
                className="btn-primary mt-4 justify-center"
                whileTap={shouldReduce ? {} : { scale: 0.97 }}
              >
                Book a Call
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer */}
      <div style={{ height: '64px' }} />
    </>
  );
}
