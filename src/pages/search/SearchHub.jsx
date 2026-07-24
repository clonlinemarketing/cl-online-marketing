import { motion, useReducedMotion } from 'framer-motion';
import { Search, Cpu, BarChart3, Globe, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import Eyebrow from '../../components/ui/Eyebrow';
import CTABanner from '../../components/ui/CTABanner';
import ServiceCard from '../../components/ui/ServiceCard';
import TrustCard from '../../components/ui/TrustCard';
import StatCard from '../../components/ui/StatCard';
import HeroImage, { HERO_IMAGES } from '../../components/ui/HeroImage';
import { fadeUp, fadeLeft, fadeRight, staggerContainer, scaleIn, safeAnim, safeAnimAnimate, viewportOnce } from '../../utils/animations';

export default function SearchHub() {
  const shouldReduce = useReducedMotion();
  return (
    <>
      <title>Google Search Engine & AI SEO Malaysia | CL Online Marketing Agency</title>
      {/* HERO */}
      <section className="py-20 md:py-28 px-6 overflow-hidden" style={{ background: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={staggerContainer} {...safeAnimAnimate(staggerContainer, shouldReduce)}>
            <motion.div variants={fadeUp}><Eyebrow>Google Search Engine & AI Search</Eyebrow></motion.div>
            <motion.h1 className="mt-4 mb-6" variants={fadeUp}>Dominate Google Search —<br />Today and in the<br /><span style={{ color: '#29b6f6' }}>AI Era.</span></motion.h1>
            <motion.p className="text-lg mb-8" style={{ color: '#4A5568' }} variants={fadeUp}>Google SEO builds long-term organic rankings. Our AI search engine optimisation extends your visibility into ChatGPT, Perplexity, and Google AI Overviews — future-proofing your business as search evolves.</motion.p>
            <div><motion.a href="/contact" className="btn-primary" variants={fadeUp} whileHover={shouldReduce ? {} : { scale: 1.03, y: -2 }}>Book a Call</motion.a></div>
          </motion.div>
          <HeroImage src={HERO_IMAGES.search} alt="SEO and search engine optimisation" badge={{ text: 'First-Page Google Rankings', icon: Search }} badge2={{ text: 'AI Search Ready', icon: Cpu }} delay={0.2} />
        </div>
      </section>
      {/* SERVICES */}
      <section className="py-20 px-6" style={{ background: '#F5F7FA' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-12" variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <Eyebrow>Our Search Services</Eyebrow>
            <h2 className="mt-3">Two Disciplines. One Goal — Be Found First.</h2>
          </motion.div>
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            {[
              { icon: Search, title: 'Google SEO', body: 'First-page Google rankings for the keywords your customers search. Long-term organic growth that compounds month after month.', to: '/services/search/google-seo' },
              { icon: Cpu,    title: 'AI Search Engine (GEO · AEO · AIO)', body: 'Get cited by ChatGPT, Perplexity, and Google AI Overviews. Be visible in the next generation of search.', to: '/services/search/ai-search' },
            ].map((c) => (<motion.div key={c.title} variants={fadeUp}><ServiceCard {...c} /></motion.div>))}
          </motion.div>
        </div>
      </section>
      {/* WHY */}
      <section className="py-20 px-6" style={{ background: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-12" variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}><Eyebrow>Why search matters</Eyebrow><h2 className="mt-3">Search Is Still the Most Powerful Way to Get Found.</h2></motion.div>
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            {[{ icon: Search, title: 'High-Intent Traffic', body: 'People searching on Google are actively looking for solutions — the highest-intent audience available to any business.' }, { icon: Cpu, title: 'AI Search is Here', body: 'ChatGPT, Perplexity, and Google AI Overviews are changing how people find information. We optimise for both.' }, { icon: BarChart3, title: 'Compounding Returns', body: 'Unlike paid ads, SEO builds long-term authority — organic rankings that grow and compound over time.' }].map((t) => (<motion.div key={t.title} variants={fadeUp}><TrustCard {...t} /></motion.div>))}
          </motion.div>
        </div>
      </section>
      {/* STATS */}
      <section className="py-16 px-6" style={{ background: '#F5F7FA' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            {[{ stat: '2', label: 'Search Disciplines (SEO + AI Search)' }, { stat: '8+', label: 'Years SEO Experience' }, { stat: '100+', label: 'Clients Served' }].map((s) => (<motion.div key={s.label} variants={scaleIn}><StatCard {...s} /></motion.div>))}
          </motion.div>
        </div>
      </section>
      <CTABanner headline="Ready to Dominate Google and AI Search?" cta1="Book a Call" />
    </>
  );
}
