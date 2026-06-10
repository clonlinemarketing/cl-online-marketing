import { motion, useReducedMotion } from 'framer-motion';
import { Search, TrendingUp, FileText, Link2, MapPin, BarChart3, Eye, Shield, Zap } from 'lucide-react';
import Eyebrow from '../../components/ui/Eyebrow';
import CTABanner from '../../components/ui/CTABanner';
import TrustCard from '../../components/ui/TrustCard';
import FAQAccordion from '../../components/ui/FAQAccordion';
import ProcessSteps from '../../components/ui/ProcessStep';
import HeroImage, { HERO_IMAGES } from '../../components/ui/HeroImage';
import { fadeUp, fadeLeft, fadeRight, staggerContainer, safeAnim, safeAnimAnimate, viewportOnce } from '../../utils/animations';

export default function GoogleSEO() {
  const shouldReduce = useReducedMotion();
  return (
    <>
      <title>Google SEO Malaysia | CL Online Marketing Agency</title>
      {/* HERO */}
      <section className="py-20 md:py-28 px-6 overflow-hidden" style={{ background: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={staggerContainer} {...safeAnimAnimate(staggerContainer, shouldReduce)}>
            <motion.div variants={fadeUp}><Eyebrow>Google SEO Malaysia</Eyebrow></motion.div>
            <motion.h1 className="mt-4 mb-6" variants={fadeUp}>Rank Higher on Google.<br />Get Found by Customers<br /><span style={{ color: '#29b6f6' }}>Searching for You.</span></motion.h1>
            <motion.p className="text-lg mb-8" style={{ color: '#4A5568' }} variants={fadeUp}>First-page Google rankings for Malaysian businesses — driven by technical SEO, on-page optimisation, content strategy, and high-quality link building. Organic growth that compounds month after month.</motion.p>
            <motion.a href="/contact" className="btn-primary" variants={fadeUp} whileHover={shouldReduce ? {} : { scale: 1.03, y: -2 }}>Book a Call</motion.a>
          </motion.div>
          <HeroImage src={HERO_IMAGES.googleSeo} alt="Google SEO Malaysia" badge={{ text: 'First-Page Rankings', icon: TrendingUp }} badge2={{ text: 'Long-Term Organic Growth', icon: BarChart3 }} delay={0.2} />
        </div>
      </section>
      {/* WHY SEO */}
      <section className="py-16 px-6" style={{ background: '#F5F7FA' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <Eyebrow>Why Google SEO?</Eyebrow>
            <h2 className="mt-3 mb-5">The Customers Looking for You Are Already on Google.</h2>
            <p style={{ color: '#4A5568', lineHeight: 1.8 }}>Over 90% of Malaysian internet users turn to Google when searching for products and services. Appearing on page one for the right keywords means capturing customers with high purchase intent — without paying per click. SEO is the most sustainable, highest-ROI digital marketing channel when done right.</p>
          </motion.div>
          <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <div className="relative rounded-3xl overflow-hidden" style={{ boxShadow: '0 16px 48px rgba(0,0,0,0.10)' }}>
              <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=700&q=80" alt="SEO strategy" loading="lazy" style={{ width: '100%', height: '360px', objectFit: 'cover', display: 'block' }} />
            </div>
          </motion.div>
        </div>
      </section>
      {/* WHAT WE DO */}
      <section className="py-20 px-6" style={{ background: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-12" variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}><h2>What Our Google SEO Service Covers.</h2></motion.div>
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            {[{ icon: Zap, title: 'Technical SEO', body: 'Site speed, crawlability, mobile optimisation, Core Web Vitals, schema markup, and clean site architecture.' }, { icon: FileText, title: 'On-Page Optimisation', body: 'Keyword-optimised pages, proper heading structure, meta tags, content depth, and internal linking.' }, { icon: Search, title: 'Keyword Research & Strategy', body: 'Identifying the exact keywords your Malaysian customers use — mapped to every stage of the buying journey.' }, { icon: Link2, title: 'Link Building', body: 'High-quality backlinks from credible Malaysian and regional websites to build domain authority.' }, { icon: MapPin, title: 'Local SEO', body: 'Google Business Profile optimisation and local citations to dominate search in your city or service area.' }, { icon: BarChart3, title: 'Monthly Reporting', body: 'Clear ranking reports, traffic trends, and keyword movement — so you can see exactly what\'s improving.' }].map((t) => (<motion.div key={t.title} variants={fadeUp}><TrustCard {...t} /></motion.div>))}
          </motion.div>
        </div>
      </section>
      {/* PROCESS */}
      <section className="py-20 px-6" style={{ background: '#F5F7FA' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-12" variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}><h2>How Our Google SEO Process Works.</h2></motion.div>
          <ProcessSteps steps={[{ title: 'SEO Audit', body: 'Full technical and on-page audit of your current website and competitive landscape.' }, { title: 'Strategy & Keywords', body: 'We build your keyword map and prioritised action plan based on search volume and competition.' }, { title: 'On-Page & Technical', body: 'We implement all on-page and technical SEO improvements across your website.' }, { title: 'Content & Links', body: 'Ongoing content creation and link building to build authority and rankings over time.' }, { title: 'Track & Report', body: 'Monthly ranking reports and traffic analysis to show progress and guide ongoing strategy.' }]} />
        </div>
      </section>
      {/* FAQ */}
      <section className="py-20 px-6" style={{ background: '#FFFFFF' }}>
        <div className="max-w-4xl mx-auto">
          <motion.div className="text-center mb-12" variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}><Eyebrow>FAQ</Eyebrow><h2 className="mt-3">Google SEO Questions Answered.</h2></motion.div>
          <FAQAccordion items={[{ q: 'How long does Google SEO take to show results?', a: 'SEO is a long-term investment. Most businesses start seeing meaningful ranking improvements within 3–6 months, with significant organic growth typically visible at the 6–12 month mark. The timeline depends on competition, current website state, and how aggressively we execute.' }, { q: 'How is your SEO different from other agencies?', a: 'We focus on business outcomes, not ranking reports full of vanity keywords. We prioritise the keywords that drive qualified traffic — the ones that lead to actual enquiries and revenue for your business.' }, { q: 'Do I need to write content for SEO?', a: 'No. We handle the SEO content strategy and can produce SEO-optimised content for your website as part of the service. You review and approve before anything is published.' }, { q: 'Will my rankings disappear if I stop SEO?', a: 'Rankings built on solid technical foundations and quality links tend to hold well. However, ongoing SEO work maintains and grows rankings over time. We\'ll advise on the right level of ongoing investment for your goals.' }]} />
        </div>
      </section>
      <CTABanner headline="Ready to Build First-Page Google Rankings for Your Business?" cta1="Book a Call" />
    </>
  );
}
