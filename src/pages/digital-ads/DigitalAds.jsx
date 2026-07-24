import { motion, useReducedMotion } from 'framer-motion';
import { TrendingUp, Megaphone, Zap, Target, BarChart3, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import Eyebrow from '../../components/ui/Eyebrow';
import CTABanner from '../../components/ui/CTABanner';
import ServiceCard from '../../components/ui/ServiceCard';
import TrustCard from '../../components/ui/TrustCard';
import StatCard from '../../components/ui/StatCard';
import HeroImage, { HERO_IMAGES } from '../../components/ui/HeroImage';
import { fadeUp, fadeLeft, fadeRight, staggerContainer, scaleIn, safeAnim, safeAnimAnimate, viewportOnce } from '../../utils/animations';

export default function DigitalAds() {
  const shouldReduce = useReducedMotion();
  return (
    <>
      <title>Digital Pay Ads Malaysia | CL Online Marketing Agency</title>
      {/* HERO */}
      <section className="py-20 md:py-28 px-6 overflow-hidden" style={{ background: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={staggerContainer} {...safeAnimAnimate(staggerContainer, shouldReduce)}>
            <motion.div variants={fadeUp}><Eyebrow>Digital Pay Ads</Eyebrow></motion.div>
            <motion.h1 className="mt-4 mb-6" variants={fadeUp}>Get in Front of Your Customers<br />the Moment They're<br /><span style={{ color: '#29b6f6' }}>Ready to Buy.</span></motion.h1>
            <motion.p className="text-lg mb-8" style={{ color: '#4A5568' }} variants={fadeUp}>Google Ads and social media advertising that puts your business in front of high-intent buyers on the channels they use most — measurable ROI from day one.</motion.p>
            <div><motion.a href="/contact" className="btn-primary" variants={fadeUp} whileHover={shouldReduce ? {} : { scale: 1.03, y: -2 }}>Book a Call</motion.a></div>
          </motion.div>
          <HeroImage src={HERO_IMAGES.digitalAds} alt="Digital advertising campaigns" badge={{ text: 'Immediate Visibility', icon: Zap }} badge2={{ text: 'ROI-Tracked Campaigns', icon: BarChart3 }} delay={0.2} />
        </div>
      </section>
      {/* SERVICES */}
      <section className="py-20 px-6" style={{ background: '#F5F7FA' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-12" variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <Eyebrow>Our Paid Ads Services</Eyebrow>
            <h2 className="mt-3">Choose the Right Paid Channel for Your Business.</h2>
          </motion.div>
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            {[
              { icon: TrendingUp, title: 'Google Ads', body: 'Capture high-intent buyers searching on Google right now. Search campaigns engineered for leads, calls, and sales.', to: '/services/digital-ads/google-ads' },
              { icon: Megaphone,  title: 'Social Media Ads', body: 'Precision-targeted Facebook and Instagram campaigns built to reach the right Malaysian audience and drive conversions.', to: '/services/digital-ads/social-ads' },
            ].map((c) => (<motion.div key={c.title} variants={fadeUp}><ServiceCard {...c} /></motion.div>))}
          </motion.div>
        </div>
      </section>
      {/* WHY */}
      <section className="py-20 px-6" style={{ background: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-12" variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}><Eyebrow>Why CL Online Marketing Agency</Eyebrow><h2 className="mt-3">Why Choose CL Online Marketing Agency for Your Paid Ads.</h2></motion.div>
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            {[{ icon: Target, title: 'Built to Convert, Not Just Click', body: 'We optimise for the metrics that matter — leads, calls, and sales — not just impressions and clicks.' }, { icon: BarChart3, title: 'Transparent Reporting', body: 'Clear monthly reports showing exactly where your budget went and what it delivered.' }, { icon: Globe, title: 'Market Experience', body: 'We know what works for your audience — the platforms, messaging, and targeting that converts.' }].map((t) => (<motion.div key={t.title} variants={fadeUp}><TrustCard {...t} /></motion.div>))}
          </motion.div>
        </div>
      </section>
      {/* STATS */}
      <section className="py-16 px-6" style={{ background: '#F5F7FA' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            {[{ stat: '2', label: 'Paid Ad Platforms Managed' }, { stat: '100+', label: 'Clients Served' }, { stat: '8+', label: 'Years Paid Ads Experience' }].map((s) => (<motion.div key={s.label} variants={scaleIn}><StatCard {...s} /></motion.div>))}
          </motion.div>
        </div>
      </section>
      <CTABanner headline="Ready to Launch Paid Ads That Actually Deliver ROI?" cta1="Book a Call" />
    </>
  );
}
