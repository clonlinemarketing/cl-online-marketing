import { motion, useReducedMotion } from 'framer-motion';
import { Calendar, Edit, Image, Clock, MessageCircle, BarChart3, TrendingUp, Megaphone, Eye, Target, Zap, CheckCircle } from 'lucide-react';
import Eyebrow from '../components/ui/Eyebrow';
import CTABanner from '../components/ui/CTABanner';
import TrustCard from '../components/ui/TrustCard';
import FAQAccordion from '../components/ui/FAQAccordion';
import ProcessSteps from '../components/ui/ProcessStep';
import HeroImage, { HERO_IMAGES } from '../components/ui/HeroImage';
import { fadeUp, fadeLeft, fadeRight, staggerContainer, safeAnim, safeAnimAnimate, viewportOnce } from '../utils/animations';

export default function SocialManagement() {
  const shouldReduce = useReducedMotion();
  return (
    <>
      <title>Social Media Management Malaysia | CL Online Marketing Agency</title>
      {/* HERO */}
      <section className="py-20 md:py-28 px-6 overflow-hidden" style={{ background: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={staggerContainer} {...safeAnimAnimate(staggerContainer, shouldReduce)}>
            <motion.div variants={fadeUp}><Eyebrow>Social Media Management Malaysia</Eyebrow></motion.div>
            <motion.h1 className="mt-4 mb-6" variants={fadeUp}>Stay Consistent, Stay Visible,<br /><span style={{ color: '#29b6f6' }}>Stay Top of Mind.</span></motion.h1>
            <motion.p className="text-lg mb-8" style={{ color: '#4A5568' }} variants={fadeUp}>We manage your Facebook and Instagram presence end-to-end — strategy, content creation, scheduling, and community management — so your brand stays active and engaging without taking up your time.</motion.p>
            <motion.a href="/contact" className="btn-primary" variants={fadeUp} whileHover={shouldReduce ? {} : { scale: 1.03, y: -2 }}>Book a Call</motion.a>
          </motion.div>
          <HeroImage src={HERO_IMAGES.social} alt="Social media management" badge={{ text: 'Facebook & Instagram', icon: Megaphone }} badge2={{ text: 'Monthly Content Calendar', icon: Calendar }} delay={0.2} />
        </div>
      </section>
      {/* PROBLEM */}
      <section className="py-16 px-6" style={{ background: '#F5F7FA' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <Eyebrow>The problem</Eyebrow>
            <h2 className="mt-3 mb-5">Inconsistent Posting Kills Brand Growth on Social Media.</h2>
            <p style={{ color: '#4A5568', lineHeight: 1.8 }}>Most Malaysian business owners start strong on social media — then life gets busy, posts slow down, and the page goes quiet. Inconsistency erodes trust, kills algorithm reach, and tells potential customers you're not active. We fix that — permanently, professionally, and without requiring your time every week.</p>
          </motion.div>
          <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <div className="relative rounded-3xl overflow-hidden" style={{ boxShadow: '0 16px 48px rgba(0,0,0,0.10)' }}>
              <img src="https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?auto=format&fit=crop&w=700&q=80" alt="Social media content management" loading="lazy" style={{ width: '100%', height: '360px', objectFit: 'cover', display: 'block' }} />
            </div>
          </motion.div>
        </div>
      </section>
      {/* INCLUDES */}
      <section className="py-20 px-6" style={{ background: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-12" variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}><h2>What's Included in Our Social Media Management.</h2></motion.div>
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            {[{ icon: Target, title: 'Monthly Content Strategy', body: 'A content plan aligned to your business goals, campaigns, and seasonal events — planned monthly in advance.' }, { icon: Image, title: 'On-Brand Graphic Design', body: 'Professionally designed visuals that look consistent, on-brand, and attention-grabbing in the feed.' }, { icon: Edit, title: 'Caption Copywriting', body: 'Engaging, on-brand captions written for your audience — with calls-to-action that drive enquiries.' }, { icon: Calendar, title: 'Content Calendar & Scheduling', body: 'Organised monthly calendar approved by you before publishing — no surprises, full transparency.' }, { icon: MessageCircle, title: 'Community Management', body: 'Responding to comments and DMs to keep your audience engaged and your reputation strong.' }, { icon: BarChart3, title: 'Monthly Performance Reports', body: 'Clear reports on reach, engagement, follower growth, and content performance every month.' }].map((t) => (<motion.div key={t.title} variants={fadeUp}><TrustCard {...t} /></motion.div>))}
          </motion.div>
        </div>
      </section>
      {/* PROCESS */}
      <section className="py-20 px-6" style={{ background: '#F5F7FA' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-12" variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}><h2>How Our Social Media Management Works.</h2></motion.div>
          <ProcessSteps steps={[{ title: 'Brand Onboarding', body: 'We learn your brand voice, business goals, audience, and content preferences.' }, { title: 'Content Strategy', body: 'We build a monthly content strategy and calendar — themed content, campaigns, and key dates.' }, { title: 'Content Creation', body: 'We design the graphics and write the captions — everything submitted to you for approval.' }, { title: 'Approval & Scheduling', body: 'You review the month\'s content, give feedback, and we schedule it all for publishing.' }, { title: 'Monitor & Report', body: 'We monitor engagement, manage your community, and deliver a monthly performance report.' }]} />
        </div>
      </section>
      {/* FAQ */}
      <section className="py-20 px-6" style={{ background: '#FFFFFF' }}>
        <div className="max-w-4xl mx-auto">
          <motion.div className="text-center mb-12" variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}><Eyebrow>FAQ</Eyebrow><h2 className="mt-3">Social Media Management Questions Answered.</h2></motion.div>
          <FAQAccordion items={[{ q: 'Which social media platforms do you manage?', a: 'We specialise in Facebook and Instagram — the two dominant platforms for Malaysian businesses. We focus on doing them well rather than spreading thinly across every platform.' }, { q: 'How many posts per month do you publish?', a: 'Posting frequency depends on your package and goals. We recommend a minimum of 12 posts per month (3 per week) for consistent presence and reach — we\'ll discuss the right frequency for your business on our call.' }, { q: 'Will I need to approve content before it goes live?', a: 'Yes. We submit the monthly content calendar for your review and approval before anything is published. You\'re always in control of what goes on your page.' }, { q: 'Can you also run paid social media ads?', a: 'Yes. Social media management and social media ads are complementary services. Many clients run both — organic content builds trust while paid ads accelerate reach and lead generation.' }]} />
        </div>
      </section>
      <CTABanner headline="Ready to Build a Consistent Social Media Presence That Drives Enquiries?" cta1="Book a Call" />
    </>
  );
}
