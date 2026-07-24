import { motion, useReducedMotion } from 'framer-motion';
import {
  Monitor, Search, Cpu, TrendingUp, Megaphone, Share2,
  Building, ShoppingCart, Rocket, Building2,
  BarChart3, Eye, Users, Globe, MessageCircle, CheckCircle, ArrowRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Eyebrow from '../components/ui/Eyebrow';
import CTABanner from '../components/ui/CTABanner';
import StatCard from '../components/ui/StatCard';
import TrustCard from '../components/ui/TrustCard';
import AudienceCard from '../components/ui/AudienceCard';
import HeroImage, { HERO_IMAGES } from '../components/ui/HeroImage';
import { fadeUp, fadeLeft, fadeRight, staggerContainer, scaleIn, safeAnim, safeAnimAnimate, viewportOnce } from '../utils/animations';

export default function About() {
  const shouldReduce = useReducedMotion();

  const services = [
    { icon: Monitor,    label: 'Website Design & Development', to: '/services/web-design' },
    { icon: Search,     label: 'Google SEO',                    to: '/services/search/google-seo' },
    { icon: Cpu,        label: 'AI Search Engine',              to: '/services/search/ai-search' },
    { icon: TrendingUp, label: 'Google Ads',                    to: '/services/digital-ads/google-ads' },
    { icon: Megaphone,  label: 'Social Media Ads',              to: '/services/digital-ads/social-ads' },
    { icon: Share2,     label: 'Social Media Management',       to: '/services/social-management' },
  ];

  return (
    <>
      <title>About CL Online Marketing Agency | Digital Marketing Malaysia</title>

      {/* HERO */}
      <section className="py-20 md:py-28 px-6 overflow-hidden" style={{ background: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={staggerContainer} {...safeAnimAnimate(staggerContainer, shouldReduce)}>
            <motion.div variants={fadeUp}><Eyebrow>About CL Online Marketing Agency</Eyebrow></motion.div>
            <motion.h1 className="mt-4 mb-6" variants={fadeUp}>
              We Help Businesses<br />Grow Online — With Strategy,<br />
              <span style={{ color: '#29b6f6' }}>Not Guesswork.</span>
            </motion.h1>
            <motion.p className="text-lg mb-8" style={{ color: '#4A5568', lineHeight: 1.7 }} variants={fadeUp}>
              CL Online Marketing Agency is a results-driven digital marketing agency.
              We partner with SMEs, startups, corporate and enterprise businesses to build online presence,
              drive qualified traffic, and turn clicks into real customers.
            </motion.p>
            <div>
            <motion.a href="/contact" className="btn-primary inline-flex items-center gap-2" variants={fadeUp}
              whileHover={shouldReduce ? {} : { scale: 1.03, y: -2 }} whileTap={shouldReduce ? {} : { scale: 0.97 }}>
              Book a Call <ArrowRight size={16} />
            </motion.a>
            </div>
          </motion.div>
          <HeroImage
            src={HERO_IMAGES.about}
            alt="CL Online Marketing Agency team"
            badge={{ text: '8+ Years Experience', icon: BarChart3 }}
            badge2={{ text: '100+ Clients Served', icon: Users }}
            delay={0.2}
          />
        </div>
      </section>

      {/* OUR STORY */}
      <section className="py-20 px-6" style={{ background: '#F5F7FA' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image left */}
          <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <div className="relative rounded-3xl overflow-hidden" style={{ boxShadow: '0 16px 48px rgba(0,0,0,0.10)' }}>
              <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=700&q=80"
                alt="Agency working environment"
                loading="lazy"
                style={{ width: '100%', height: '420px', objectFit: 'cover', display: 'block' }}
              />
            </div>
          </motion.div>
          {/* Right text */}
          <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <Eyebrow>Our story</Eyebrow>
            <h2 className="mt-3 mb-6">Built for Businesses That Deserve<br />Better Than Average.</h2>
            {[
              'CL Online Marketing Agency was founded in 2018 with a simple focus — helping businesses rank on Google. We started with Google SEO, building first-page rankings for our earliest clients and learning what it really takes to drive measurable online growth.',
              'As our clients\' needs grew, so did we. We expanded into website design and development, Google Ads, social media ads, and social media management — building a full-service digital marketing agency that handles everything a business needs to grow online.',
              'Today, we partner with a focused portfolio of SMEs, startups, corporate, and enterprise businesses — delivering digital marketing strategies built around real business goals and measurable outcomes.',
            ].map((p, i) => (
              <motion.p
                key={i}
                className="text-base leading-relaxed mb-4"
                style={{ color: '#4A5568' }}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                transition={{ delay: i * 0.1 }}
              >{p}</motion.p>
            ))}
            <motion.blockquote
              className="mt-8 p-6 rounded-2xl"
              style={{ background: 'linear-gradient(135deg, #e0f2fe, #f0f9ff)', borderLeft: '4px solid #1565c0' }}
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              <p style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: '1.25rem', color: '#1565c0', lineHeight: 1.4, margin: 0 }}>
                "Transparent. Accountable.<br />Invested in your growth."
              </p>
            </motion.blockquote>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto mt-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {[{ stat: '100+', label: 'Clients Served' }, { stat: '8+', label: 'Years of Experience' }, { stat: '6', label: 'Service Disciplines' }].map((s) => (
            <motion.div key={s.label} variants={scaleIn}><StatCard {...s} /></motion.div>
          ))}
        </motion.div>
      </section>

      {/* WHAT WE DO */}
      <section className="py-20 px-6" style={{ background: '#FFFFFF' }}>
        <div className="max-w-5xl mx-auto text-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <Eyebrow>What we do</Eyebrow>
            <h2 className="mt-3 mb-4">Full-Stack Digital Marketing<br />for Businesses.</h2>
            <p className="mb-10 max-w-2xl mx-auto text-center" style={{ color: '#4A5568' }}>
              We go deep on the services that move the needle — website design and development, Google SEO,
              AI search engine optimisation, Google Ads, social media ads, and social media management.
            </p>
          </motion.div>
          <motion.div
            className="flex flex-wrap justify-center gap-3 mt-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {services.map(({ icon: Icon, label, to }) => (
              <motion.div key={label} variants={fadeUp}>
                <Link to={to} className="inline-flex items-center gap-2 px-4 py-3 rounded-2xl neumorphic" style={{ textDecoration: 'none', color: '#0b0f1e', fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: '0.875rem' }}>
                  <Icon size={16} style={{ color: '#1565c0' }} />
                  {label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-20 px-6" style={{ background: '#F5F7FA' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-12" variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <Eyebrow>Our values</Eyebrow>
            <h2 className="mt-3">What Drives Everything We Do.</h2>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {[
              { icon: BarChart3,    title: 'Results Over Vanity Metrics', body: 'We measure everything against real business outcomes — not vanity metrics or activity reports.' },
              { icon: Eye,         title: 'Full Transparency', body: 'No hidden fees, no jargon-filled reports. You always know exactly what we\'re doing and why.' },
              { icon: Cpu,         title: 'Future-Ready Thinking', body: 'From GEO to AEO to AIO, we invest in staying ahead so our clients always benefit first.' },
              { icon: Globe,       title: 'Market Expertise', body: 'We know the digital landscape, the platforms, and what it takes to drive real results.' },
            ].map((v) => (
              <motion.div key={v.title} variants={fadeUp}><TrustCard {...v} /></motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* WHO WE WORK WITH */}
      <section className="py-20 px-6" style={{ background: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-12" variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <Eyebrow>Our clients</Eyebrow>
            <h2 className="mt-3">The Businesses We Partner With.</h2>
            <p className="mt-4 max-w-xl mx-auto" style={{ color: '#4A5568' }}>
              We work best with business owners serious about growth and ready to invest in a long-term digital presence.
            </p>
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

      {/* WHY DIFFERENT */}
      <section className="py-20 px-6" style={{ background: '#F5F7FA' }}>
        <div className="max-w-5xl mx-auto">
          <motion.div className="text-center mb-16" variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <Eyebrow>The difference</Eyebrow>
            <h2 className="mt-3">What Makes CL Online Marketing Agency Different.</h2>
          </motion.div>
          {[
            { icon: Users,        title: 'Invested in Your Growth — Not Your Retainer', body: 'We take on a focused number of clients deliberately — every business gets our full attention and best strategic thinking.' },
            { icon: MessageCircle,title: 'We Speak Business — Not Agency Jargon', body: 'No confusing reports with vanity metrics. Plain English communication tied directly to your revenue and business goals.' },
            { icon: Cpu,          title: 'We Stay Ahead So You Don\'t Have To', body: 'From AI search engine optimisation — GEO, AEO, and AIO — to the latest shifts in Google\'s algorithm, we invest in staying current so our clients always benefit first.' },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              className="flex flex-col md:flex-row gap-6 items-start mb-10 p-8 rounded-3xl"
              style={{ background: i % 2 === 0 ? '#FFFFFF' : '#F0F4FF', boxShadow: '0 4px 24px rgba(0,0,0,0.07)' }}
              variants={i % 2 === 0 ? fadeLeft : fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: '#e0f2fe' }}>
                <item.icon size={24} style={{ color: '#1565c0' }} />
              </div>
              <div>
                <h3 className="mb-2">{item.title}</h3>
                <p style={{ color: '#4A5568' }}>{item.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <CTABanner
        headline="Let's Build Something That Grows Your Business."
        body="No hard sell. No long proposals. Just an honest conversation."
        cta1="Book a Call"
      />
    </>
  );
}
