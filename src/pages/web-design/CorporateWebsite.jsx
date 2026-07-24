import { motion, useReducedMotion } from 'framer-motion';
import { Palette, Smartphone, Search, Lock, Users, BarChart3, Globe, Edit, CheckCircle } from 'lucide-react';
import Eyebrow from '../../components/ui/Eyebrow';
import CTABanner from '../../components/ui/CTABanner';
import TrustCard from '../../components/ui/TrustCard';
import FAQAccordion from '../../components/ui/FAQAccordion';
import HeroImage, { HERO_IMAGES } from '../../components/ui/HeroImage';
import { fadeUp, fadeLeft, fadeRight, staggerContainer, safeAnim, safeAnimAnimate, viewportOnce } from '../../utils/animations';

export default function CorporateWebsite() {
  const shouldReduce = useReducedMotion();
  return (
    <>
      <title>Corporate Website Malaysia | CL Online Marketing Agency</title>
      {/* HERO */}
      <section className="py-20 md:py-28 px-6 overflow-hidden" style={{ background: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={staggerContainer} {...safeAnimAnimate(staggerContainer, shouldReduce)}>
            <motion.div variants={fadeUp}><Eyebrow>Multiple / Corporate Website</Eyebrow></motion.div>
            <motion.h1 className="mt-4 mb-6" variants={fadeUp}>A Professional Website That Builds<br /><span style={{ color: '#29b6f6' }}>Authority and Drives Enquiries.</span></motion.h1>
            <motion.p className="text-lg mb-8" style={{ color: '#4A5568' }} variants={fadeUp}>Multiple pages corporate websites for businesses, SMEs, startups, and enterprises — built to establish credibility, showcase your services, and convert visitors into qualified leads.</motion.p>
            <div><motion.a href="/contact" className="btn-primary" variants={fadeUp} whileHover={shouldReduce ? {} : { scale: 1.03, y: -2 }}>Book a Call</motion.a></div>
          </motion.div>
          <HeroImage src={HERO_IMAGES.corporate} alt="Corporate website design" badge={{ text: 'Authority-Building Design', icon: Globe }} badge2={{ text: 'Multi-Page Structure', icon: Users }} delay={0.2} />
        </div>
      </section>
      {/* ABOUT */}
      <section className="py-16 px-6" style={{ background: '#F5F7FA' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <Eyebrow>Multiple pages website</Eyebrow>
            <h2 className="mt-3 mb-5">A Corporate Website is More Than Just A Brochure for Your Business.</h2>
            <p style={{ color: '#4A5568', lineHeight: 1.8 }}>A corporate website typically includes Home, About, Services, Blog, Contact — and any additional pages your business needs. It gives you the depth, authority, and credibility to compete and convert across every touchpoint of the customer journey.</p>
          </motion.div>
          <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <div className="relative rounded-3xl overflow-hidden" style={{ boxShadow: '0 16px 48px rgba(0,0,0,0.10)' }}>
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=700&q=80" alt="Corporate office workspace" loading="lazy" style={{ width: '100%', height: '360px', objectFit: 'cover', display: 'block' }} />
            </div>
          </motion.div>
        </div>
      </section>
      {/* FEATURES */}
      <section className="py-20 px-6" style={{ background: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-12" variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}><h2>What's Included in Every Corporate Website.</h2></motion.div>
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            {[{ icon: Palette, title: 'Custom Brand Design', body: 'Designed around your brand — colours, fonts, tone, and visual identity carried consistently throughout.' }, { icon: Smartphone, title: 'Mobile-First Responsive', body: 'Perfect across all devices — your customers reach you on smartphones, tablets, and desktops alike.' }, { icon: Search, title: 'SEO-Optimised Structure', body: 'Built with SEO foundations in place — proper structure, meta tags, speed, and clean code from day one.' }, { icon: Lock, title: 'SSL & Security', body: 'HTTPS secured with SSL certificate included — trusted by Google and by your visitors.' }].map((t) => (<motion.div key={t.title} variants={fadeUp}><TrustCard {...t} /></motion.div>))}
          </motion.div>
        </div>
      </section>
      {/* FAQ */}
      <section className="py-20 px-6" style={{ background: '#F5F7FA' }}>
        <div className="max-w-4xl mx-auto">
          <motion.div className="text-center mb-12" variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}><Eyebrow>FAQ</Eyebrow><h2 className="mt-3">Corporate Website Questions Answered.</h2></motion.div>
          <FAQAccordion items={[{ q: 'How many pages are included in a corporate website?', a: 'It depends on your business needs. We typically build 5–10 pages as a starting point (Home, About, Services, Blog, Contact) and can expand as needed. We\'ll plan the full sitemap together.' }, { q: 'How long does it take to build a corporate website?', a: 'A corporate website typically takes 4–6 weeks from discovery to launch, depending on the number of pages, content readiness, and feedback turnaround.' }, { q: 'Will my corporate website rank on Google?', a: 'Yes — every website we build includes on-page SEO foundations. For ongoing rankings and organic growth, we also offer dedicated Google SEO services.' }, { q: 'Can I manage the website content myself after launch?', a: 'Yes. We build on user-friendly CMS platforms and provide training so you and your team can update pages and add content independently.' }]} />
        </div>
      </section>
      <CTABanner headline="Ready to Build a Corporate Website That Wins Clients?" cta1="Book a Call" />
    </>
  );
}
