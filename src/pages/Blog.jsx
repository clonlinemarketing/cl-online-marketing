import { motion, useReducedMotion } from 'framer-motion';
import { useState } from 'react';
import { BookOpen, PenTool } from 'lucide-react';
import Eyebrow from '../components/ui/Eyebrow';
import BlogCard from '../components/ui/BlogCard';
import HeroImage, { HERO_IMAGES } from '../components/ui/HeroImage';
import { fadeUp, staggerContainer, safeAnim, safeAnimAnimate, viewportOnce } from '../utils/animations';

export default function Blog() {
  const shouldReduce = useReducedMotion();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  return (
    <>
      <title>Digital Marketing Blog Malaysia | CL Online Marketing Agency</title>

      {/* HERO */}
      <section className="py-20 md:py-28 px-6 overflow-hidden" style={{ background: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={staggerContainer} {...safeAnimAnimate(staggerContainer, shouldReduce)}>
            <motion.div variants={fadeUp}><Eyebrow>Digital Marketing Insights</Eyebrow></motion.div>
            <motion.h1 className="mt-4 mb-6" variants={fadeUp}>Resources for Malaysian<br /><span style={{ color: '#29b6f6' }}>Business Owners.</span></motion.h1>
            <motion.p className="text-lg" style={{ color: '#4A5568' }} variants={fadeUp}>Practical digital marketing guides, SEO tips, AI search insights, and online marketing strategies — written for Malaysian SMEs, startups, and business owners.</motion.p>
          </motion.div>
          <HeroImage src={HERO_IMAGES.blog} alt="Digital marketing blog" badge={{ text: 'Practical Guides', icon: BookOpen }} badge2={{ text: 'Malaysia-Focused Tips', icon: PenTool }} delay={0.2} />
        </div>
      </section>

      {/* POSTS */}
      <section className="py-16 px-6" style={{ background: '#F5F7FA' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            {[
              { category: 'SEO', title: "What is GEO? A Malaysian Business Owner's Guide to Generative Engine Optimisation", excerpt: "ChatGPT and Perplexity are changing how Malaysians search for businesses. Here's what GEO is, why it matters, and how to get your brand cited in AI-generated answers.", date: '15 January 2025', readTime: '6 min read' },
              { category: 'Digital Marketing', title: 'SEO vs Google Ads vs Social Media Ads: Which Digital Marketing Channel is Right for Your Malaysian Business?', excerpt: "Not sure whether to invest in SEO, Google Ads, or social media advertising? Here's a clear breakdown of each channel — what it does, who it's for, and when to use it.", date: '8 January 2025', readTime: '8 min read' },
              { category: 'Website Design', title: 'How Much Does a Website Cost in Malaysia in 2025? A Complete Pricing Guide', excerpt: 'Landing page, corporate website, eCommerce store, or LMS — website design costs in Malaysia vary widely. This guide breaks it all down so you know exactly what to budget for.', date: '2 January 2025', readTime: '7 min read' },
            ].map((card, i) => (
              <motion.div key={i} variants={fadeUp}>
                <BlogCard {...card} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-6" style={{ background: '#FFFFFF' }}>
        <div className="max-w-2xl mx-auto text-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <Eyebrow>Newsletter</Eyebrow>
            <h2 className="mt-3 mb-4">Get Digital Marketing Tips<br />for Malaysian Businesses.</h2>
            <p className="mb-8" style={{ color: '#4A5568' }}>No spam. Practical insights on SEO, AI search, digital ads, and website design — delivered to your inbox.</p>
            {subscribed ? (
              <div className="neumorphic p-6 text-center">
                <p style={{ color: '#1565c0', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>Thanks for subscribing! Look out for insights in your inbox.</p>
              </div>
            ) : (
              <form onSubmit={e => { e.preventDefault(); if (email) setSubscribed(true); }} className="flex flex-col sm:flex-row gap-3">
                <input type="email" placeholder="Your email address" value={email} onChange={e => setEmail(e.target.value)} required className="flex-1" style={{ padding: '14px 18px', border: '1.5px solid #E2E8F0', borderRadius: '10px', fontFamily: 'Inter, sans-serif', fontSize: '0.9375rem', color: '#0b0f1e', outline: 'none' }} />
                <motion.button type="submit" className="btn-primary" whileHover={shouldReduce ? {} : { scale: 1.03, y: -2 }} whileTap={shouldReduce ? {} : { scale: 0.97 }}>Subscribe</motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </>
  );
}
