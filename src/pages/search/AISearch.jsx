import { motion, useReducedMotion } from 'framer-motion';
import { Cpu, Globe, MessageCircle, Brain, TrendingUp, Search, BarChart3, Zap, Eye } from 'lucide-react';
import Eyebrow from '../../components/ui/Eyebrow';
import CTABanner from '../../components/ui/CTABanner';
import TrustCard from '../../components/ui/TrustCard';
import FAQAccordion from '../../components/ui/FAQAccordion';
import HeroImage, { HERO_IMAGES } from '../../components/ui/HeroImage';
import { fadeUp, fadeLeft, fadeRight, staggerContainer, safeAnim, safeAnimAnimate, viewportOnce } from '../../utils/animations';

const pillars = [
  { abbr: 'GEO', full: 'Generative Engine Optimisation', desc: 'Optimise your content to be cited and referenced by AI-powered search engines like ChatGPT and Perplexity when users ask questions in your industry.' },
  { abbr: 'AEO', full: 'Answer Engine Optimisation', desc: 'Structure your content so that Google, Bing, and voice assistants surface your business as the authoritative answer to key queries.' },
  { abbr: 'AIO', full: 'AI Overview Optimisation', desc: 'Be featured in Google\'s AI Overviews — the AI-generated answer boxes appearing above traditional organic results in Google Search.' },
];

export default function AISearch() {
  const shouldReduce = useReducedMotion();
  return (
    <>
      <title>AI Search Engine Optimisation Malaysia | GEO AEO AIO | CL Online Marketing Agency</title>
      {/* HERO */}
      <section className="py-20 md:py-28 px-6 overflow-hidden" style={{ background: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={staggerContainer} {...safeAnimAnimate(staggerContainer, shouldReduce)}>
            <motion.div variants={fadeUp}><Eyebrow>AI Search Engine Optimisation Malaysia</Eyebrow></motion.div>
            <motion.h1 className="mt-4 mb-6" variants={fadeUp}>Get Your Business Cited by<br />ChatGPT, Perplexity &<br /><span style={{ color: '#29b6f6' }}>Google AI Overviews.</span></motion.h1>
            <motion.p className="text-lg mb-8" style={{ color: '#4A5568' }} variants={fadeUp}>The next generation of search is here. Millions of Malaysians now use AI-powered tools to find recommendations, compare services, and make buying decisions. We make sure your business is the one they find.</motion.p>
            <motion.div className="flex flex-wrap gap-3 mb-8" variants={fadeUp}>
              {['GEO', 'AEO', 'AIO'].map((t) => (
                <span key={t} className="px-4 py-2 rounded-xl text-sm font-bold" style={{ background: 'linear-gradient(135deg, #e0f2fe, #bae6fd)', color: '#1565c0', fontFamily: 'Space Grotesk, sans-serif' }}>{t}</span>
              ))}
            </motion.div>
            <motion.a href="/contact" className="btn-primary" variants={fadeUp} whileHover={shouldReduce ? {} : { scale: 1.03, y: -2 }}>Book a Call</motion.a>
          </motion.div>
          <HeroImage src={HERO_IMAGES.aiSearch} alt="AI search engine optimisation" badge={{ text: 'ChatGPT & Perplexity Ready', icon: Brain }} badge2={{ text: 'Google AI Overviews', icon: Cpu }} delay={0.2} />
        </div>
      </section>
      {/* WHY AI SEARCH */}
      <section className="py-16 px-6" style={{ background: '#F5F7FA' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <Eyebrow>Why AI Search?</Eyebrow>
            <h2 className="mt-3 mb-5">Your Customers Are Already Using AI to Find Businesses Like Yours.</h2>
            <p style={{ color: '#4A5568', lineHeight: 1.8 }}>Traditional Google SEO is still essential — but it's no longer enough on its own. AI-powered tools like ChatGPT, Perplexity, Gemini, and Google's own AI Overviews are rapidly changing how people discover and evaluate businesses. Businesses that get cited by AI get chosen. Businesses that don't exist in AI's answer are invisible.</p>
          </motion.div>
          <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <div className="relative rounded-3xl overflow-hidden" style={{ boxShadow: '0 16px 48px rgba(0,0,0,0.10)' }}>
              <img src="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=700&q=80" alt="AI search and generative AI" loading="lazy" style={{ width: '100%', height: '360px', objectFit: 'cover', display: 'block' }} />
            </div>
          </motion.div>
        </div>
      </section>
      {/* PILLARS */}
      <section className="py-20 px-6" style={{ background: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-12" variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <Eyebrow>Our three-pillar approach</Eyebrow>
            <h2 className="mt-3">GEO + AEO + AIO — The Full AI Search Stack.</h2>
          </motion.div>
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            {pillars.map((p) => (
              <motion.div key={p.abbr} className="claymorphic p-8" variants={fadeUp}>
                <div className="inline-block px-4 py-2 rounded-xl mb-4 text-2xl font-bold" style={{ background: 'linear-gradient(135deg, #1565c0, #29b6f6)', color: '#fff', fontFamily: 'Space Grotesk, sans-serif' }}>{p.abbr}</div>
                <h3 className="mb-3">{p.full}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#4A5568', fontFamily: 'Inter, sans-serif' }}>{p.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* WHAT WE DO */}
      <section className="py-20 px-6" style={{ background: '#F5F7FA' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-12" variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}><h2>What Our AI Search Optimisation Service Covers.</h2></motion.div>
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            {[{ icon: Brain, title: 'AI Visibility Audit', body: 'We test how your business currently appears (or doesn\'t) across major AI search tools and identify the gaps.' }, { icon: Globe, title: 'Authority Content Creation', body: 'Creating the kind of comprehensive, trustworthy content that AI models are trained to cite and recommend.' }, { icon: Search, title: 'Schema & Structured Data', body: 'Technical markup that helps AI systems understand and surface your business information accurately.' }, { icon: MessageCircle, title: 'FAQ & Conversational Content', body: 'Optimising your content for the conversational, question-based queries AI tools receive from users.' }, { icon: BarChart3, title: 'AI Citation Monitoring', body: 'Tracking when and how your business is mentioned across AI tools to measure visibility growth.' }, { icon: TrendingUp, title: 'Monthly AI Search Reports', body: 'Clear reports showing your AI search visibility alongside traditional SEO metrics.' }].map((t) => (<motion.div key={t.title} variants={fadeUp}><TrustCard {...t} /></motion.div>))}
          </motion.div>
        </div>
      </section>
      {/* FAQ */}
      <section className="py-20 px-6" style={{ background: '#FFFFFF' }}>
        <div className="max-w-4xl mx-auto">
          <motion.div className="text-center mb-12" variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}><Eyebrow>FAQ</Eyebrow><h2 className="mt-3">AI Search Questions Answered.</h2></motion.div>
          <FAQAccordion items={[{ q: 'What is GEO and how is it different from SEO?', a: 'SEO optimises your visibility in traditional Google search results. GEO (Generative Engine Optimisation) optimises your content to be cited and referenced by AI-powered tools like ChatGPT and Perplexity when users ask questions in your industry.' }, { q: 'What is AEO?', a: 'AEO (Answer Engine Optimisation) structures your content so Google, Bing, and voice assistants surface your business as the authoritative answer to specific queries — including featured snippets and People Also Ask boxes.' }, { q: 'What is AIO?', a: 'AIO (AI Overview Optimisation) focuses specifically on Google\'s AI Overviews feature — the AI-generated summaries that now appear above organic results in Google Search, increasingly replacing traditional position-one clicks.' }, { q: 'Should I do traditional SEO or AI Search Optimisation?', a: 'Both. Traditional Google SEO remains essential for organic rankings. AI search optimisation future-proofs your visibility as more searches happen through AI tools. The strategies are complementary — we typically recommend combining both for maximum coverage.' }]} />
        </div>
      </section>
      <CTABanner headline="Ready to Be Found by AI Search — Before Your Competitors?" cta1="Book a Call" />
    </>
  );
}
