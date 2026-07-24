import { motion, useReducedMotion } from 'framer-motion';
import {
  Monitor, TrendingUp, Search, Share2,
  FileText, Building2, ShoppingCart, GraduationCap,
  Megaphone, Cpu, BarChart3, Eye, Zap, ArrowRight,
  CheckCircle, Globe, Target, Users,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Eyebrow from '../components/ui/Eyebrow';
import CTABanner from '../components/ui/CTABanner';
import StatCard from '../components/ui/StatCard';
import TrustCard from '../components/ui/TrustCard';
import HeroImage, { HERO_IMAGES } from '../components/ui/HeroImage';
import { fadeUp, fadeLeft, fadeRight, staggerContainer, safeAnim, safeAnimAnimate, viewportOnce } from '../utils/animations';

/* ─── Shared image data for service blocks ─── */
const serviceBlocks = [
  {
    num: '01',
    eyebrow: 'Website Design & Development',
    headline: 'Your Website is Your Most Powerful Sales Tool.',
    body: 'A slow, outdated, or generic website costs you customers every single day. We design and build high-performance websites for businesses — built to impress, optimised for search, and engineered to convert.',
    image: HERO_IMAGES.webDesign,
    imageAlt: 'Website design and development',
    hub: '/services/web-design',
    cta: 'Explore Web Design',
    accent: '#1565c0',
    checks: [
      'Custom-designed, mobile-first build',
      'SEO-ready structure from day one',
      'Fast load times & secure SSL',
      'Easy content management',
    ],
    subServices: [
      { icon: FileText,     label: 'Single Landing Page',         to: '/services/web-design/landing-page' },
      { icon: Building2,    label: 'Multiple / Corporate Website', to: '/services/web-design/corporate' },
      { icon: ShoppingCart, label: 'eCommerce Website',            to: '/services/web-design/ecommerce' },
      { icon: GraduationCap,label: 'LMS Website',                  to: '/services/web-design/lms' },
    ],
  },
  {
    num: '02',
    eyebrow: 'Digital Pay Ads',
    headline: 'Get in Front of Your Customers the Moment They\'re Ready to Buy.',
    body: 'Google Ads and social media ads put your business in front of high-intent buyers on the channels they use most — Google Search, Facebook, and Instagram. Measurable ROI from day one.',
    image: HERO_IMAGES.digitalAds,
    imageAlt: 'Digital advertising campaigns',
    hub: '/services/digital-ads',
    cta: 'Explore Paid Ads',
    accent: '#29b6f6',
    checks: [
      'Immediate visibility on Google & social',
      'Precision audience targeting',
      'Active campaign management',
      'Transparent ROI reporting',
    ],
    subServices: [
      { icon: TrendingUp, label: 'Google Ads',        to: '/services/digital-ads/google-ads' },
      { icon: Megaphone,  label: 'Social Media Ads',  to: '/services/digital-ads/social-ads' },
    ],
  },
  {
    num: '03',
    eyebrow: 'Google Search Engine',
    headline: 'Dominate Google Search — Today and in the AI Era.',
    body: 'Google SEO builds long-term organic rankings. Our AI search engine optimisation services — GEO, AEO, and AIO — extend that visibility into ChatGPT, Perplexity, and Google AI Overviews.',
    image: HERO_IMAGES.search,
    imageAlt: 'SEO and AI search engine optimisation',
    hub: '/services/search',
    cta: 'Explore Search Services',
    accent: '#1565c0',
    checks: [
      'First-page Google rankings',
      'Technical & on-page SEO',
      'AI search (GEO, AEO, AIO)',
      'Monthly ranking reports',
    ],
    subServices: [
      { icon: Search, label: 'Google SEO',                        to: '/services/search/google-seo' },
      { icon: Cpu,    label: 'AI Search Engine (GEO · AEO · AIO)', to: '/services/search/ai-search' },
    ],
  },
  {
    num: '04',
    eyebrow: 'Social Media Management',
    headline: 'Stay Consistent, Stay Visible, Stay Top of Mind.',
    body: 'Inconsistent posting and generic content kill brand growth on social media. We manage your Facebook and Instagram presence end-to-end — strategy, content, scheduling, and community management.',
    image: HERO_IMAGES.social,
    imageAlt: 'Social media management',
    hub: '/services/social-management',
    cta: 'Explore Social Management',
    accent: '#29b6f6',
    checks: [
      'Monthly content strategy & calendar',
      'On-brand graphic design',
      'Caption copywriting',
      'Community management',
    ],
    subServices: [
      { icon: Share2, label: 'Social Media Management', to: '/services/social-management' },
    ],
  },
];

/* ─── Service Block Component ─── */
function ServiceBlock({ block, index }) {
  const shouldReduce = useReducedMotion();
  const isEven = index % 2 === 0;

  return (
    <section
      className="py-20 px-6"
      style={{ background: isEven ? '#FFFFFF' : '#F5F7FA', overflow: 'hidden' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Number badge */}
        <motion.div
          className="mb-8"
          {...safeAnim(fadeUp, shouldReduce)}
        >
          <span
            className="inline-block text-6xl font-bold mr-4 opacity-10 select-none"
            style={{ fontFamily: 'Space Grotesk, sans-serif', color: block.accent, lineHeight: 1 }}
          >
            {block.num}
          </span>
          <Eyebrow>{block.eyebrow}</Eyebrow>
        </motion.div>

        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isEven ? '' : 'lg:[&>:first-child]:order-2'}`}>
          {/* Text column */}
          <motion.div
            variants={isEven ? fadeLeft : fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <h2 className="mb-5" style={{ lineHeight: 1.2 }}>{block.headline}</h2>
            <p className="mb-6 text-base leading-relaxed" style={{ color: '#4A5568' }}>{block.body}</p>

            {/* Checklist */}
            <ul className="space-y-2 mb-8">
              {block.checks.map((c) => (
                <li key={c} className="flex items-center gap-3">
                  <CheckCircle size={18} style={{ color: block.accent, flexShrink: 0 }} />
                  <span className="text-sm font-medium" style={{ color: '#0b0f1e', fontFamily: 'Inter, sans-serif' }}>{c}</span>
                </li>
              ))}
            </ul>

            {/* Sub-service pills */}
            <motion.div
              className="flex flex-wrap gap-3 mb-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              {block.subServices.map(({ icon: Icon, label, to }) => (
                <motion.div key={label} variants={fadeUp}>
                  <Link
                    to={to}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all"
                    style={{
                      background: '#F5F7FA',
                      color: '#0b0f1e',
                      textDecoration: 'none',
                      fontFamily: 'Inter, sans-serif',
                      border: '1.5px solid #E2E8F0',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = block.accent; e.currentTarget.style.color = block.accent; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = '#E2E8F0'; e.currentTarget.style.color = '#0b0f1e'; }}
                  >
                    <Icon size={15} />
                    {label}
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            <Link to={block.hub} className="btn-primary inline-flex items-center gap-2">
              {block.cta} <ArrowRight size={16} />
            </Link>
          </motion.div>

          {/* Image column */}
          <motion.div
            variants={isEven ? fadeRight : fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="relative"
          >
            {/* Decorative blob */}
            <div
              className="absolute -inset-6 rounded-3xl opacity-25"
              style={{ background: `radial-gradient(ellipse, ${block.accent}40, transparent 70%)` }}
            />
            {/* Image */}
            <div className="relative rounded-3xl overflow-hidden" style={{ boxShadow: '0 20px 56px rgba(0,0,0,0.13)' }}>
              <img
                src={block.image}
                alt={block.imageAlt}
                loading="lazy"
                style={{ width: '100%', height: '400px', objectFit: 'cover', display: 'block' }}
              />
              <div style={{
                position: 'absolute', inset: 0,
                background: `linear-gradient(135deg, ${block.accent}20 0%, transparent 60%)`,
              }} />
            </div>
            {/* Floating number badge */}
            <motion.div
              className="absolute glassmorphic px-5 py-3 flex items-center gap-3"
              style={{ bottom: '-16px', right: '20px' }}
              animate={shouldReduce ? {} : { y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            >
              <span style={{ fontSize: '1.5rem', fontWeight: 700, color: block.accent, fontFamily: 'Space Grotesk, sans-serif' }}>
                {block.num}
              </span>
              <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: '#0b0f1e', fontFamily: 'Inter, sans-serif' }}>
                {block.eyebrow}
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─── Main Page ─── */
export default function Services() {
  const shouldReduce = useReducedMotion();

  return (
    <>
      <title>Digital Marketing Services Malaysia | CL Online Marketing Agency</title>

      {/* HERO */}
      <section className="py-20 md:py-28 px-6 overflow-hidden" style={{ background: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <motion.div
            variants={staggerContainer}
            {...safeAnimAnimate(staggerContainer, shouldReduce)}
          >
            <motion.div variants={fadeUp}>
              <Eyebrow>Our Digital Marketing Services</Eyebrow>
            </motion.div>
            <motion.h1 className="mt-4 mb-6" variants={fadeUp}>
              Online Marketing Solutions<br />Your Business Needs —<br />
              <span style={{ color: '#29b6f6' }}>All In One Agency.</span>
            </motion.h1>
            <motion.p className="text-lg mb-8" style={{ color: '#4A5568', maxWidth: '520px' }} variants={fadeUp}>
              From website design and development to Google SEO, AI search engine optimisation,
              Google Ads, social media ads, and social media management — end-to-end digital
              marketing for businesses.
            </motion.p>
            <motion.div className="flex flex-wrap gap-3" variants={fadeUp}>
              <Link to="/contact" className="btn-primary">Book a Call</Link>
              <a href="#services" className="btn-ghost">View All Services</a>
            </motion.div>
          </motion.div>

          {/* Right */}
          <HeroImage
            src={HERO_IMAGES.services}
            alt="CL Online Marketing Agency team"
            badge={{ text: '6 Service Disciplines', icon: Zap }}
            badge2={{ text: '6 Core Services', icon: Globe }}
            delay={0.2}
          />
        </div>
      </section>

      {/* INTRO STRIP */}
      <section className="py-14 px-6" style={{ background: '#F5F7FA' }}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...safeAnim(fadeUp, shouldReduce)}>
            <h2 className="mb-5">One Agency. All in One Solution.</h2>
            <p className="text-lg leading-relaxed" style={{ color: '#4A5568' }}>
              Most businesses work with 3–4 different vendors — a web designer here, an SEO agency there,
              someone else for ads. The result: misaligned strategies, duplicated costs, and nobody accountable
              for the full picture. At CL Online Marketing Agency, everything works together —
              one team, one strategy, one point of accountability.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 4 SERVICE BLOCKS */}
      <div id="services">
        {serviceBlocks.map((block, i) => (
          <ServiceBlock key={block.num} block={block} index={i} />
        ))}
      </div>

      {/* STATS + TRUST */}
      <section className="py-20 px-6" style={{ background: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
            variants={staggerContainer}
            {...safeAnim(staggerContainer, shouldReduce)}
          >
            {[
              { stat: '100+', label: 'Businesses Served' },
              { stat: '8+',  label: 'Years Experience' },
              { stat: '6',   label: 'Specialist Services' },
            ].map((s) => (
              <motion.div key={s.label} variants={fadeUp}>
                <StatCard {...s} />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={staggerContainer}
            {...safeAnim(staggerContainer, shouldReduce)}
          >
            {[
              { icon: BarChart3, title: 'Results-Driven', body: 'Every service measured against real business outcomes — leads, sales, and revenue growth.' },
              { icon: Eye,       title: 'Full Transparency', body: 'Clear monthly reporting across every service. You always know exactly what\'s happening.' },
              { icon: Target,    title: 'Integrated Strategy', body: 'All services work together under one strategy — maximising the impact of your total investment.' },
            ].map((t) => (
              <motion.div key={t.title} variants={fadeUp}>
                <TrustCard {...t} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CTABanner
        headline="Not Sure Which Service Is Right for Your Business?"
        body="That's what the free call is for — we'll recommend the right combination of digital marketing services for your goals and budget."
        cta1="Book a Call"
      />
    </>
  );
}
