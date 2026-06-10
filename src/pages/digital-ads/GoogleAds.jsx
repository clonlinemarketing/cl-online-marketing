import { motion, useReducedMotion } from 'framer-motion';
import { TrendingUp, Search, Target, BarChart3, Zap, Globe, Settings, Eye, CheckCircle } from 'lucide-react';
import Eyebrow from '../../components/ui/Eyebrow';
import CTABanner from '../../components/ui/CTABanner';
import TrustCard from '../../components/ui/TrustCard';
import FAQAccordion from '../../components/ui/FAQAccordion';
import ProcessSteps from '../../components/ui/ProcessStep';
import HeroImage, { HERO_IMAGES } from '../../components/ui/HeroImage';
import { fadeUp, fadeLeft, fadeRight, staggerContainer, safeAnim, safeAnimAnimate, viewportOnce } from '../../utils/animations';

export default function GoogleAds() {
  const shouldReduce = useReducedMotion();
  return (
    <>
      <title>Google Ads Malaysia | CL Online Marketing Agency</title>
      {/* HERO */}
      <section className="py-20 md:py-28 px-6 overflow-hidden" style={{ background: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={staggerContainer} {...safeAnimAnimate(staggerContainer, shouldReduce)}>
            <motion.div variants={fadeUp}><Eyebrow>Google Ads Malaysia</Eyebrow></motion.div>
            <motion.h1 className="mt-4 mb-6" variants={fadeUp}>Show Up on Google<br />When Your Customers Are<br /><span style={{ color: '#29b6f6' }}>Searching to Buy.</span></motion.h1>
            <motion.p className="text-lg mb-8" style={{ color: '#4A5568' }} variants={fadeUp}>Google Ads puts your business at the top of search results for high-intent keywords — reaching Malaysian customers the moment they're actively searching for what you offer. Immediate visibility. Measurable ROI.</motion.p>
            <motion.a href="/contact" className="btn-primary" variants={fadeUp} whileHover={shouldReduce ? {} : { scale: 1.03, y: -2 }}>Book a Call</motion.a>
          </motion.div>
          <HeroImage src={HERO_IMAGES.googleAds} alt="Google Ads management" badge={{ text: 'Immediate Search Visibility', icon: Zap }} badge2={{ text: 'ROI-Tracked Campaigns', icon: BarChart3 }} delay={0.2} />
        </div>
      </section>
      {/* WHY GOOGLE ADS */}
      <section className="py-16 px-6" style={{ background: '#F5F7FA' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <Eyebrow>Why Google Ads?</Eyebrow>
            <h2 className="mt-3 mb-5">The Fastest Way to Reach Customers Who Are Actively Searching.</h2>
            <p style={{ color: '#4A5568', lineHeight: 1.8 }}>Unlike social media ads that interrupt, Google Ads captures demand — you appear when a potential customer types exactly what they need. This intent-based targeting makes Google Ads one of the highest-ROI paid channels available to Malaysian businesses.</p>
          </motion.div>
          <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <div className="relative rounded-3xl overflow-hidden" style={{ boxShadow: '0 16px 48px rgba(0,0,0,0.10)' }}>
              <img src="https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?auto=format&fit=crop&w=700&q=80" alt="Google search advertising" loading="lazy" style={{ width: '100%', height: '360px', objectFit: 'cover', display: 'block' }} />
            </div>
          </motion.div>
        </div>
      </section>
      {/* WHAT WE DO */}
      <section className="py-20 px-6" style={{ background: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-12" variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}><h2>What's Included in Our Google Ads Service.</h2></motion.div>
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            {[{ icon: Search, title: 'Keyword Research & Strategy', body: 'We identify the high-intent keywords your ideal customers use to find businesses like yours in Malaysia.' }, { icon: Target, title: 'Campaign Setup & Structure', body: 'Properly structured campaigns with tightly themed ad groups for maximum relevance and Quality Score.' }, { icon: Settings, title: 'Ad Copy & Creative', body: 'Compelling ad copy tested and optimised for clicks and conversions — not just impressions.' }, { icon: Zap, title: 'Landing Page Alignment', body: 'We ensure your landing page matches your ads — critical for Quality Score and conversion rate.' }, { icon: BarChart3, title: 'Ongoing Optimisation', body: 'Regular bid management, keyword refinement, and A/B testing to continuously improve ROI.' }, { icon: Eye, title: 'Monthly Reporting', body: 'Clear performance reports showing impressions, clicks, leads, cost-per-lead, and overall ROI.' }].map((t) => (<motion.div key={t.title} variants={fadeUp}><TrustCard {...t} /></motion.div>))}
          </motion.div>
        </div>
      </section>
      {/* PROCESS */}
      <section className="py-20 px-6" style={{ background: '#F5F7FA' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-12" variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}><h2>How We Launch Your Google Ads Campaign.</h2></motion.div>
          <ProcessSteps steps={[{ title: 'Audit & Strategy', body: 'We assess your goals, audience, and competition to build your keyword and bidding strategy.' }, { title: 'Campaign Build', body: 'We set up properly structured campaigns, ad groups, and conversion tracking.' }, { title: 'Launch & Monitor', body: 'Campaign goes live and we monitor performance closely in the first 2 weeks.' }, { title: 'Optimise & Scale', body: 'Ongoing bid management, negative keywords, and ad testing to maximise ROI.' }]} />
        </div>
      </section>
      {/* FAQ */}
      <section className="py-20 px-6" style={{ background: '#FFFFFF' }}>
        <div className="max-w-4xl mx-auto">
          <motion.div className="text-center mb-12" variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}><Eyebrow>FAQ</Eyebrow><h2 className="mt-3">Google Ads Questions Answered.</h2></motion.div>
          <FAQAccordion items={[{ q: 'How much should I budget for Google Ads in Malaysia?', a: 'There\'s no one-size-fits-all budget — it depends on your industry, competition, and goals. We\'ll recommend an appropriate budget after understanding your specific situation on our initial call.' }, { q: 'How quickly will I see results from Google Ads?', a: 'Google Ads can drive traffic from the day your campaign launches. The first 2–4 weeks are a learning period for optimisation; campaigns typically improve significantly after that.' }, { q: 'Do I need a landing page for Google Ads?', a: 'Yes — a dedicated landing page aligned to your ad is critical for Quality Score and conversion rates. We can provide landing page recommendations or work with your existing website.' }, { q: 'Do you manage the ads ongoing or is it a one-off setup?', a: 'We provide ongoing management — including bid optimisation, keyword refinement, A/B testing, and monthly reporting. Google Ads requires continuous management to maintain and improve ROI.' }]} />
        </div>
      </section>
      <CTABanner headline="Ready to Launch Google Ads That Deliver Real Leads?" cta1="Book a Call" />
    </>
  );
}
