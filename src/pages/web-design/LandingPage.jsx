import { motion, useReducedMotion } from 'framer-motion';
import { Zap, Target, BarChart3, Smartphone, Search, CheckCircle, Clock, TrendingUp } from 'lucide-react';
import Eyebrow from '../../components/ui/Eyebrow';
import CTABanner from '../../components/ui/CTABanner';
import TrustCard from '../../components/ui/TrustCard';
import FAQAccordion from '../../components/ui/FAQAccordion';
import HeroImage, { HERO_IMAGES } from '../../components/ui/HeroImage';
import { fadeUp, fadeLeft, fadeRight, staggerContainer, safeAnim, safeAnimAnimate, viewportOnce } from '../../utils/animations';

export default function LandingPage() {
  const shouldReduce = useReducedMotion();
  return (
    <>
      <title>Single Landing Page Malaysia | CL Online Marketing Agency</title>
      {/* HERO */}
      <section className="py-20 md:py-28 px-6 overflow-hidden" style={{ background: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={staggerContainer} {...safeAnimAnimate(staggerContainer, shouldReduce)}>
            <motion.div variants={fadeUp}><Eyebrow>Single Landing Page</Eyebrow></motion.div>
            <motion.h1 className="mt-4 mb-6" variants={fadeUp}>One Page. One Goal.<br /><span style={{ color: '#29b6f6' }}>Maximum Conversion.</span></motion.h1>
            <motion.p className="text-lg mb-8" style={{ color: '#4A5568' }} variants={fadeUp}>A focused, high-converting landing page built for businesses that want fast results — product launches, campaigns, service enquiries, and lead generation.</motion.p>
            <div><motion.a href="/contact" className="btn-primary" variants={fadeUp} whileHover={shouldReduce ? {} : { scale: 1.03, y: -2 }}>Book a Call</motion.a></div>
          </motion.div>
          <HeroImage src={HERO_IMAGES.landing} alt="Single landing page design" badge={{ text: 'Live in 1–2 Weeks', icon: Clock }} badge2={{ text: 'Conversion-Optimised', icon: Target }} delay={0.2} />
        </div>
      </section>
      {/* WHAT IS */}
      <section className="py-16 px-6" style={{ background: '#F5F7FA' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <Eyebrow>What is a landing page?</Eyebrow>
            <h2 className="mt-3 mb-5">A Single Page Designed to Do One Thing — Convert.</h2>
            <p style={{ color: '#4A5568', lineHeight: 1.8 }}>A landing page is a single, focused web page built around one specific goal — capturing a lead, driving a sale, promoting a service, or getting visitors to take action. Unlike a full website, there are no distractions, no navigation maze — just a clear path from visitor to customer.</p>
          </motion.div>
          <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <div className="relative rounded-3xl overflow-hidden" style={{ boxShadow: '0 16px 48px rgba(0,0,0,0.10)' }}>
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=700&q=80" alt="Landing page conversion" loading="lazy" style={{ width: '100%', height: '360px', objectFit: 'cover', display: 'block' }} />
            </div>
          </motion.div>
        </div>
      </section>
      {/* WHO */}
      <section className="py-20 px-6" style={{ background: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-12" variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}><h2>Who Is a Landing Page For?</h2></motion.div>
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            {['Businesses running Google Ads or Facebook Ads', 'New businesses launching online quickly', 'Service providers booking consultations or calls', 'Businesses promoting a specific product or campaign'].map((label) => (
              <motion.div key={label} className="claymorphic p-6 flex items-start gap-3" variants={fadeUp}>
                <CheckCircle size={18} style={{ color: '#1565c0', flexShrink: 0, marginTop: 2 }} />
                <span className="text-sm font-medium" style={{ color: '#0b0f1e', fontFamily: 'Inter, sans-serif' }}>{label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* INCLUDES */}
      <section className="py-20 px-6" style={{ background: '#F5F7FA' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-12" variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}><h2>What's Included in Your Landing Page.</h2></motion.div>
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            {[{ icon: Target, title: 'Conversion-Focused Design', body: 'Every section is structured to guide visitors toward one clear action — no distractions.' }, { icon: Smartphone, title: 'Mobile-First Responsive', body: 'Looks sharp and loads fast on every device — smartphone, tablet, and desktop.' }, { icon: Zap, title: 'Fast Load Speed', body: 'Speed-optimised for mobile users — fast loading means fewer bounces.' }, { icon: TrendingUp, title: 'Lead Form & CTA', body: 'Clean contact form, WhatsApp button, or call-to-action — whatever converts best for your offer.' }].map((t) => (<motion.div key={t.title} variants={fadeUp}><TrustCard {...t} /></motion.div>))}
          </motion.div>
        </div>
      </section>
      {/* FAQ */}
      <section className="py-20 px-6" style={{ background: '#FFFFFF' }}>
        <div className="max-w-4xl mx-auto">
          <motion.div className="text-center mb-12" variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}><Eyebrow>FAQ</Eyebrow><h2 className="mt-3">Landing Page Questions Answered.</h2></motion.div>
          <FAQAccordion items={[{ q: 'How quickly can a landing page be delivered?', a: 'A single landing page can typically be designed, built, and launched within 1–2 weeks, depending on how quickly you can provide content and feedback.' }, { q: 'Can a landing page help with Google Ads campaigns?', a: 'Absolutely. A dedicated landing page with a clear message matching your ad improves Quality Score, reduces cost-per-click, and increases conversion rates significantly versus sending traffic to a generic homepage.' }, { q: 'Can I update the landing page myself?', a: 'Yes. We build on platforms that allow easy content updates — changing copy, images, or offers without needing a developer.' }, { q: 'Do you write the copy for the landing page?', a: 'Yes. We write copy optimised for your target audience and conversion goals. This will have an additional cost. You review and approve before we proceed.' }]} />
        </div>
      </section>
      <CTABanner headline="Ready to Launch a High-Converting Landing Page?" cta1="Book a Call" />
    </>
  );
}
