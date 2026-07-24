import { motion, useReducedMotion } from 'framer-motion';
import {
  Monitor, Search, Cpu, TrendingUp, Megaphone, Share2,
  Building, ShoppingCart, Rocket, Building2,
  CheckCircle, BarChart3, Eye, Users, Zap, MessageCircle, Globe, ArrowRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Eyebrow from '../components/ui/Eyebrow';
import CTABanner from '../components/ui/CTABanner';
import ServiceCard from '../components/ui/ServiceCard';
import StatCard from '../components/ui/StatCard';
import TrustCard from '../components/ui/TrustCard';
import AudienceCard from '../components/ui/AudienceCard';
import ProcessSteps from '../components/ui/ProcessStep';
import HeroImage, { HERO_IMAGES } from '../components/ui/HeroImage';
import { fadeUp, fadeLeft, fadeRight, staggerContainer, scaleIn, safeAnim, safeAnimAnimate, viewportOnce } from '../utils/animations';

export default function Home() {
  const shouldReduce = useReducedMotion();

  return (
    <>
      <title>CL Online Marketing Agency | Digital Marketing Malaysia</title>

      {/* ── HERO ── */}
      <section className="py-20 md:py-28 px-6 overflow-hidden" style={{ background: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left text */}
          <motion.div
            variants={staggerContainer}
            {...safeAnimAnimate(staggerContainer, shouldReduce)}
          >
            <motion.div variants={fadeUp}>
              <Eyebrow>Malaysia's #1 Digital Marketing Agency</Eyebrow>
            </motion.div>
            <motion.h1 className="mt-4 mb-6" style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', lineHeight: 1.1 }} variants={fadeUp}>
              Grow Your Business Online<br />With Digital Marketing<br />That <span style={{ color: '#29b6f6' }}>Delivers Results.</span>
            </motion.h1>
            <motion.p className="mb-8 text-lg" style={{ color: '#4A5568', maxWidth: '520px', lineHeight: 1.7 }} variants={fadeUp}>
              CL Online Marketing Agency helps business owners, SMEs, startups, and
              enterprises grow their online presence — through website design and development,
              Google SEO, AI search engine optimisation, Google Ads, social media ads, and
              social media management.
            </motion.p>
            <motion.div className="flex flex-wrap gap-3 mb-8" variants={fadeUp}>
              <motion.a href="/contact" className="btn-primary" whileHover={shouldReduce ? {} : { scale: 1.03, y: -2 }} whileTap={shouldReduce ? {} : { scale: 0.97 }}>
                Book a Call <ArrowRight size={16} />
              </motion.a>
              <motion.a href="/services" className="btn-ghost" whileHover={shouldReduce ? {} : { scale: 1.03, y: -2 }} whileTap={shouldReduce ? {} : { scale: 0.97 }}>
                Explore Our Services
              </motion.a>
            </motion.div>
            <motion.div className="flex flex-wrap gap-3" variants={fadeUp}>
              {['✦ Google SEO Specialists', '✦ AI Search Engine Experts', '✦ Results-Driven Agency'].map((badge) => (
                <span key={badge} className="neumorphic px-4 py-2 text-xs font-semibold" style={{ color: '#1565c0', fontFamily: 'Inter, sans-serif' }}>
                  {badge}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right image */}
          <HeroImage
            src={HERO_IMAGES.home}
            alt="Digital marketing analytics dashboard"
            badge={{ text: '100+ Businesses Served', icon: Users }}
            delay={0.15}
          />
        </div>
      </section>

      {/* ── PROBLEM ── */}
      <section className="py-20 px-6" style={{ background: '#F5F7FA' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <Eyebrow>Problem to Solution</Eyebrow>
            <h2 className="mt-3 mb-5">Your competitors are showing up online.<br />Are you?</h2>
            <p className="mb-4 leading-relaxed" style={{ color: '#4A5568' }}>
              Every day without a strong digital marketing strategy is a day your competitors capture the
              customers that should be yours. Consumers search online, scroll social media, and
              ask AI search engines before they make a single purchase decision.
            </p>
            <p className="leading-relaxed" style={{ color: '#4A5568' }}>
              At CL Online Marketing Agency, we close that gap — with data-driven digital marketing,
              high-performance websites, Google SEO, AI search optimisation, and paid ads that turn
              traffic into revenue.
            </p>
          </motion.div>
          <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <div className="relative rounded-3xl overflow-hidden" style={{ boxShadow: '0 16px 48px rgba(0,0,0,0.10)' }}>
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=700&q=80"
                alt="Team working on digital strategy"
                loading="lazy"
                style={{ width: '100%', height: '360px', objectFit: 'cover', display: 'block' }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(21,101,192,0.12), transparent)' }} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-20 px-6" style={{ background: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-12" variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <Eyebrow>Our Services</Eyebrow>
            <h2 className="mt-3">Every Digital Marketing Service<br />Your Business Needs — Under One Roof.</h2>
            <p className="mt-4 max-w-2xl mx-auto text-center" style={{ color: '#4A5568' }}>
              From website design and development to Google SEO, AI search engine optimisation, Google Ads,
              and social media management — we deliver measurable online marketing results for businesses.
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {[
              { icon: Monitor,    title: 'Website Design & Development', body: 'Professional, fast-loading websites built to convert — landing pages, corporate websites, eCommerce stores, and LMS platforms.', to: '/services/web-design' },
              { icon: Search,     title: 'Google SEO', body: 'First-page Google rankings for the keywords your customers search. Long-term organic growth that compounds month after month.', to: '/services/search/google-seo' },
              { icon: Cpu,        title: 'AI Search Engine (GEO · AEO · AIO)', body: 'Get cited by ChatGPT, Perplexity, and Google AI Overviews. The future of search is here — be visible in it.', to: '/services/search/ai-search' },
              { icon: TrendingUp, title: 'Google Ads', body: 'Immediate, high-intent traffic from Google Search. Campaigns engineered for leads and sales — not just clicks.', to: '/services/digital-ads/google-ads' },
              { icon: Megaphone,  title: 'Social Media Ads', body: 'Precision-targeted Facebook and Instagram ad campaigns built to reach the right audience and convert them.', to: '/services/digital-ads/social-ads' },
              { icon: Share2,     title: 'Social Media Management', body: 'Consistent, on-brand social media content that builds your audience, grows brand awareness, and drives enquiries every month.', to: '/services/social-management' },
            ].map((s) => (
              <motion.div key={s.title} variants={fadeUp} className="h-full">
                <ServiceCard {...s} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-20 px-6" style={{ background: '#F5F7FA' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-12" variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <Eyebrow>Proven Results</Eyebrow>
            <h2 className="mt-3">Trusted by Businesses<br />to Deliver Results.</h2>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {[{ stat: '100+', label: 'Businesses Served' }, { stat: '8+', label: 'Years Digital Marketing Experience' }, { stat: '6', label: 'Specialist Services' }].map((s) => (
              <motion.div key={s.label} variants={scaleIn}><StatCard {...s} /></motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── WHO WE SERVE ── */}
      <section className="py-20 px-6" style={{ background: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-12" variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <Eyebrow>Who we serve</Eyebrow>
            <h2 className="mt-3">Built for Businesses<br />at Every Stage of Growth.</h2>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {[
              { icon: Building,    title: 'SMEs & Local Businesses' },
              { icon: ShoppingCart,title: 'E-Commerce Brands' },
              { icon: Rocket,      title: 'Startups' },
              { icon: Building2,   title: 'Corporate & Enterprise' },
            ].map((a) => (
              <motion.div key={a.title} variants={fadeUp}><AudienceCard {...a} /></motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-20 px-6" style={{ background: '#F5F7FA' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image left */}
          <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <div className="relative rounded-3xl overflow-hidden" style={{ boxShadow: '0 16px 48px rgba(0,0,0,0.10)' }}>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=700&q=80"
                alt="Professional team collaboration"
                loading="lazy"
                style={{ width: '100%', height: '400px', objectFit: 'cover', display: 'block' }}
              />
            </div>
          </motion.div>
          {/* Right trust cards */}
          <div>
            <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={viewportOnce} className="mb-8">
              <Eyebrow>Why CL Online Marketing Agency</Eyebrow>
              <h2 className="mt-3">Why Business Owners<br />Choose CL Online Marketing Agency.</h2>
            </motion.div>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              {[
                { icon: BarChart3,    title: 'Results Over Vanity Metrics', body: 'We measure success by leads, sales, and revenue — not impressions.' },
                { icon: Eye,         title: 'Full Transparency', body: 'Clear reporting every month. No jargon. No black boxes.' },
                { icon: Cpu,         title: 'AI Search Ready', body: 'We specialise in GEO, AEO, and AIO — so you stay visible as search evolves.' },
                { icon: Globe,       title: 'Market Expertise', body: 'We know the platforms, the channels, and what it takes to drive real growth.' },
              ].map((t) => (
                <motion.div key={t.title} variants={fadeUp}><TrustCard {...t} /></motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-20 px-6" style={{ background: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-12" variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <Eyebrow>The process</Eyebrow>
            <h2 className="mt-3">Getting Started is Simple.</h2>
          </motion.div>
          <ProcessSteps steps={[
            { title: 'Book a Call',       body: 'Tell us about your business and goals. We listen first — always.' },
            { title: 'Custom Strategy',   body: 'We build a tailored digital marketing plan around your goals and budget.' },
            { title: 'Execute & Report',  body: 'We deliver, and you receive clear monthly reports showing real results.' },
            { title: 'Optimise & Grow',   body: 'We continuously refine your strategy to keep your growth accelerating.' },
          ]} />
        </div>
      </section>

      <CTABanner
        headline="Ready to Grow Your Business Online?"
        body="Let's have an honest conversation about your digital marketing — no obligation, no hard sell."
        cta1="Book a Call"
        cta2="Explore Services"
        cta2to="/services"
      />
    </>
  );
}
