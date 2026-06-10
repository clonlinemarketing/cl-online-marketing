import { motion, useReducedMotion } from 'framer-motion';
import { Megaphone, Target, BarChart3, Zap, Eye, Settings, Users, Globe } from 'lucide-react';
import Eyebrow from '../../components/ui/Eyebrow';
import CTABanner from '../../components/ui/CTABanner';
import TrustCard from '../../components/ui/TrustCard';
import FAQAccordion from '../../components/ui/FAQAccordion';
import ProcessSteps from '../../components/ui/ProcessStep';
import HeroImage, { HERO_IMAGES } from '../../components/ui/HeroImage';
import { fadeUp, fadeLeft, fadeRight, staggerContainer, safeAnim, safeAnimAnimate, viewportOnce } from '../../utils/animations';

export default function SocialAds() {
  const shouldReduce = useReducedMotion();
  return (
    <>
      <title>Social Media Ads Malaysia | Facebook & Instagram Ads | CL Online Marketing Agency</title>
      {/* HERO */}
      <section className="py-20 md:py-28 px-6 overflow-hidden" style={{ background: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={staggerContainer} {...safeAnimAnimate(staggerContainer, shouldReduce)}>
            <motion.div variants={fadeUp}><Eyebrow>Facebook & Instagram Ads Malaysia</Eyebrow></motion.div>
            <motion.h1 className="mt-4 mb-6" variants={fadeUp}>Reach the Right Malaysian Audience<br />on Social — and<br /><span style={{ color: '#29b6f6' }}>Turn Them Into Customers.</span></motion.h1>
            <motion.p className="text-lg mb-8" style={{ color: '#4A5568' }} variants={fadeUp}>Precision-targeted Facebook and Instagram ad campaigns built to reach your ideal Malaysian customer — by demographics, interest, behaviour, and location — and convert them into leads and buyers.</motion.p>
            <motion.a href="/contact" className="btn-primary" variants={fadeUp} whileHover={shouldReduce ? {} : { scale: 1.03, y: -2 }}>Book a Call</motion.a>
          </motion.div>
          <HeroImage src={HERO_IMAGES.socialAds} alt="Social media advertising" badge={{ text: 'Precise Audience Targeting', icon: Target }} badge2={{ text: 'Facebook & Instagram', icon: Users }} delay={0.2} />
        </div>
      </section>
      {/* WHY */}
      <section className="py-16 px-6" style={{ background: '#F5F7FA' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <Eyebrow>Why social media ads?</Eyebrow>
            <h2 className="mt-3 mb-5">Malaysian Consumers Spend Hours on Social Media Every Day.</h2>
            <p style={{ color: '#4A5568', lineHeight: 1.8 }}>Malaysia has one of the highest social media usage rates in Southeast Asia. Facebook and Instagram give you unparalleled access to a massive audience you can target by age, location, interest, and behaviour — reaching potential customers you'd never find through search alone.</p>
          </motion.div>
          <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <div className="relative rounded-3xl overflow-hidden" style={{ boxShadow: '0 16px 48px rgba(0,0,0,0.10)' }}>
              <img src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=700&q=80" alt="Social media marketing" loading="lazy" style={{ width: '100%', height: '360px', objectFit: 'cover', display: 'block' }} />
            </div>
          </motion.div>
        </div>
      </section>
      {/* WHAT WE DO */}
      <section className="py-20 px-6" style={{ background: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-12" variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}><h2>What's Included in Our Social Ads Service.</h2></motion.div>
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            {[{ icon: Target, title: 'Audience Research & Targeting', body: 'We build precise target audiences using demographics, interests, behaviours, and lookalike data.' }, { icon: Megaphone, title: 'Ad Creative & Copy', body: 'Compelling visuals and ad copy that stops the scroll and drives action — tested and optimised.' }, { icon: Settings, title: 'Campaign Setup & Structure', body: 'Full Meta Ads Manager setup with proper campaign architecture for performance and scale.' }, { icon: Zap, title: 'Retargeting Campaigns', body: 'Re-engage website visitors and warm audiences who showed interest but didn\'t convert.' }, { icon: BarChart3, title: 'Ongoing Optimisation', body: 'Regular testing of audiences, creatives, and bidding to continuously improve results.' }, { icon: Eye, title: 'Monthly Performance Reports', body: 'Clear reports covering reach, engagement, leads, cost-per-result, and overall campaign ROI.' }].map((t) => (<motion.div key={t.title} variants={fadeUp}><TrustCard {...t} /></motion.div>))}
          </motion.div>
        </div>
      </section>
      {/* FAQ */}
      <section className="py-20 px-6" style={{ background: '#F5F7FA' }}>
        <div className="max-w-4xl mx-auto">
          <motion.div className="text-center mb-12" variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}><Eyebrow>FAQ</Eyebrow><h2 className="mt-3">Social Media Ads Questions Answered.</h2></motion.div>
          <FAQAccordion items={[{ q: 'Should I use Facebook Ads or Google Ads for my business?', a: 'It depends on your business model. Google Ads captures existing demand (people actively searching). Facebook/Instagram Ads create demand by reaching people who may not be searching yet but match your ideal customer profile. Many businesses benefit from both working together.' }, { q: 'What budget do I need for Facebook and Instagram Ads in Malaysia?', a: 'Budget requirements vary by industry and objective. We\'ll recommend an appropriate starting budget based on your goals after our initial strategy call.' }, { q: 'Do you create the ad creatives?', a: 'Yes. We produce the ad visuals and copywriting as part of the service — you review and approve before anything goes live.' }, { q: 'How long before I see results from social media ads?', a: 'Social media ads typically show results within the first 2–4 weeks as the algorithm learns. Performance usually improves significantly after the initial learning phase.' }]} />
        </div>
      </section>
      <CTABanner headline="Ready to Launch Social Ads That Reach the Right Customers?" cta1="Book a Call" />
    </>
  );
}
