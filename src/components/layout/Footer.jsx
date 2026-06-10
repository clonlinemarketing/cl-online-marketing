import { Link } from 'react-router-dom';
import { Share2, Mail, Phone, MapPin } from 'lucide-react';

const services = [
  { label: 'Website Design & Development', to: '/services/web-design' },
  { label: 'Single Landing Page', to: '/services/web-design/landing-page' },
  { label: 'Corporate Website', to: '/services/web-design/corporate' },
  { label: 'eCommerce Website', to: '/services/web-design/ecommerce' },
  { label: 'LMS Website', to: '/services/web-design/lms' },
  { label: 'Google Ads', to: '/services/digital-ads/google-ads' },
  { label: 'Social Media Ads', to: '/services/digital-ads/social-ads' },
  { label: 'Google SEO', to: '/services/search/google-seo' },
  { label: 'AI Search Engine', to: '/services/search/ai-search' },
  { label: 'Social Media Management', to: '/services/social-management' },
];

const company = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
];

const linkStyle = { color: '#94a3b8', textDecoration: 'none', fontSize: '0.875rem', fontFamily: 'Inter, sans-serif', display: 'block', marginBottom: '8px', transition: 'color 0.2s' };

export default function Footer() {
  return (
    <footer style={{ background: '#0b0f1e', borderTop: '1px solid #1565c0' }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1 */}
          <div>
            <div className="mb-3">
              <span style={{ color: '#1565c0', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '1.125rem' }}>CL</span>
              <span style={{ color: 'white', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '1rem' }}> Online Marketing Agency</span>
            </div>
            <p style={{ color: '#94a3b8', fontSize: '0.875rem', fontFamily: 'Inter, sans-serif', marginBottom: '16px', lineHeight: '1.7' }}>Malaysia's digital growth partner.</p>
            <a
              href="https://www.facebook.com/clonlinemarketingagency"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-9 h-9 rounded-lg transition-colors"
              style={{ background: 'rgba(255,255,255,0.08)', color: 'white' }}
              onMouseEnter={e => e.currentTarget.style.background = '#1565c0'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}
            >
              <Share2 size={18} />
            </a>
          </div>

          {/* Col 2 — Services */}
          <div>
            <h4 style={{ color: 'white', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, marginBottom: '16px', fontSize: '0.9375rem' }}>Services</h4>
            {services.map(s => (
              <Link
                key={s.label}
                to={s.to}
                style={linkStyle}
                onMouseEnter={e => e.target.style.color = '#29b6f6'}
                onMouseLeave={e => e.target.style.color = '#94a3b8'}
              >
                {s.label}
              </Link>
            ))}
          </div>

          {/* Col 3 — Company */}
          <div>
            <h4 style={{ color: 'white', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, marginBottom: '16px', fontSize: '0.9375rem' }}>Company</h4>
            {company.map(c => (
              <Link
                key={c.label}
                to={c.to}
                style={linkStyle}
                onMouseEnter={e => e.target.style.color = '#29b6f6'}
                onMouseLeave={e => e.target.style.color = '#94a3b8'}
              >
                {c.label}
              </Link>
            ))}
          </div>

          {/* Col 4 — Contact */}
          <div>
            <h4 style={{ color: 'white', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, marginBottom: '16px', fontSize: '0.9375rem' }}>Contact</h4>
            <a href="mailto:info@clonlinemarketing.com" className="flex items-center gap-2 mb-3" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.875rem', fontFamily: 'Inter, sans-serif' }}>
              <Mail size={15} style={{ color: '#29b6f6', flexShrink: 0 }} />
              info@clonlinemarketing.com
            </a>
            <a href="tel:+60112368353" className="flex items-center gap-2 mb-3" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.875rem', fontFamily: 'Inter, sans-serif' }}>
              <Phone size={15} style={{ color: '#29b6f6', flexShrink: 0 }} />
              +6011-2368 3513
            </a>
            <div className="flex items-center gap-2 mb-6" style={{ color: '#94a3b8', fontSize: '0.875rem', fontFamily: 'Inter, sans-serif' }}>
              <MapPin size={15} style={{ color: '#29b6f6', flexShrink: 0 }} />
              Malaysia
            </div>
            <a href="/contact" className="btn-primary" style={{ fontSize: '0.875rem', padding: '10px 20px' }}>Book a Call</a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', padding: '20px 24px' }}>
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <p style={{ color: '#94a3b8', fontSize: '0.8125rem', fontFamily: 'Inter, sans-serif', margin: 0 }}>
            © 2026 CL Online Marketing Agency. All rights reserved.
          </p>
          <div className="flex gap-4">
            {['Privacy Policy', 'Terms of Use', 'Disclaimer'].map(t => (
              <a key={t} href="#" style={{ color: '#94a3b8', fontSize: '0.8125rem', fontFamily: 'Inter, sans-serif', textDecoration: 'none' }}>{t}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
