import { motion, useReducedMotion } from 'framer-motion';
import { FileText, Building2, ShoppingCart, GraduationCap, Palette, Smartphone, Search, Lock, Zap, BarChart3, Globe, Edit, CheckCircle } from 'lucide-react';
import Eyebrow from '../../components/ui/Eyebrow';
import CTABanner from '../../components/ui/CTABanner';
import ServiceCard from '../../components/ui/ServiceCard';
import TrustCard from '../../components/ui/TrustCard';
import FAQAccordion from '../../components/ui/FAQAccordion';
import ProcessSteps from '../../components/ui/ProcessStep';
import HeroImage, { HERO_IMAGES } from '../../components/ui/HeroImage';
import { fadeUp, fadeLeft, fadeRight, staggerContainer, safeAnim, safeAnimAnimate, viewportOnce } from '../../utils/animations';

export default function WebDesign() {
  const shouldReduce = useReducedMotion();
  return (
    <>
      <title>Website Design & Development Malaysia | CL Online Marketing Agency</title>
      {/* HERO */}
      <section className="py-20 md:py-28 px-6 overflow-hidden" style={{ background: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={staggerContainer} {...safeAnimAnimate(staggerContainer, shouldReduce)}>
            <motion.div variants={fadeUp}><Eyebrow>Website Design & Development Malaysia</Eyebrow></motion.div>
            <motion.h1 className="mt-4 mb-6" variants={fadeUp}>High-Performance Websites Built<br />to Impress, <span style={{ color: '#29b6f6' }}>Convert, and Rank.</span></motion.h1>
            <motion.p className="text-lg mb-8" style={{ color: '#4A5568' }} variants={fadeUp}>We design and build professional websites for Malaysian business owners, SMEs, startups, and enterprises — custom-designed, mobile-first, SEO-ready, and built to drive real business results.</motion.p>
            <motion.a href="/contact" className="btn-primary" variants={fadeUp} whileHover={shouldReduce ? {} : { scale: 1.03, y: -2 }}>Book a Call</motion.a>
          </motion.div>
          <HeroImage src={HERO_IMAGES.webDesign} alt="Website design and development" badge={{ text: 'SEO-Ready on Launch', icon: Search }} badge2={{ text: 'Mobile-First Build', icon: Smartphone }} delay={0.2} />
        </div>
      </section>
      {/* PROBLEM */}
      <section className="py-16 px-6" style={{ background: '#F5F7FA' }}>
        <div className="max-w-4xl mx-auto">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <h2 className="mb-5">A Poor Website Doesn't Just<br />Look Bad — It Costs You Customers.</h2>
            <p style={{ color: '#4A5568', lineHeight: 1.8 }}>In Malaysia's digital-first market, your website is your first impression. A slow, outdated, or poorly structured site sends visitors straight to your competitors — and most leave within 3 seconds.</p>
          </motion.div>
        </div>
      </section>
      {/* CARDS */}
      <section className="py-20 px-6" style={{ background: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-12" variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <Eyebrow>Our Website Services</Eyebrow>
            <h2 className="mt-3">Choose the Right Website for Your Business.</h2>
          </motion.div>
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            {[
              { icon: FileText,      title: 'Single Landing Page',            body: 'Fast, focused, and built to convert. Perfect for campaigns, product launches, and businesses that need a clean online presence quickly.',            to: '/services/web-design/landing-page' },
              { icon: Building2,     title: 'Multiple / Corporate Website',   body: 'Multi-page structure with depth and authority — ideal for SMEs, startups, and corporate businesses that need a full digital presence.',           to: '/services/web-design/corporate' },
              { icon: ShoppingCart,  title: 'eCommerce Website',              body: 'A fully equipped online store — product pages, secure checkout, payment gateway, and everything your Malaysian customers expect.',               to: '/services/web-design/ecommerce' },
              { icon: GraduationCap, title: 'LMS Website',                   body: 'Course catalogue, student portal, payment and enrollment — a complete learning management system for Malaysian educators and coaches.',           to: '/services/web-design/lms' },
            ].map((c) => (<motion.div key={c.title} variants={fadeUp}><ServiceCard {...c} /></motion.div>))}
          </motion.div>
        </div>
      </section>
      {/* FEATURES */}
      <section className="py-20 px-6" style={{ background: '#F5F7FA' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-12" variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}><h2>Every Website We Build Includes These Essentials.</h2></motion.div>
          <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-4" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            {[{ icon: Palette, label: 'Custom Design' }, { icon: Smartphone, label: 'Mobile-First Responsive' }, { icon: Search, label: 'SEO-Ready on Launch' }, { icon: Lock, label: 'SSL & Security' }, { icon: Zap, label: 'Speed Optimised' }, { icon: BarChart3, label: 'Analytics & Tracking' }, { icon: Globe, label: 'Bilingual Ready' }, { icon: Edit, label: 'Easy Content Management' }].map(({ icon: Icon, label }) => (
              <motion.div key={label} className="claymorphic p-4 flex flex-col items-center text-center gap-2" variants={fadeUp}>
                <Icon size={22} style={{ color: '#1565c0' }} />
                <span className="text-sm font-semibold" style={{ color: '#0b0f1e', fontFamily: 'Inter, sans-serif' }}>{label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* PROCESS */}
      <section className="py-20 px-6" style={{ background: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-12" variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}><h2>How We Build Your Website.</h2></motion.div>
          <ProcessSteps steps={[{ title: 'Discovery', body: 'We learn about your business, goals, audience, and competitors.' }, { title: 'Strategy & Sitemap', body: 'We plan the structure, user flows, and content strategy.' }, { title: 'Design & Approval', body: 'We design your website and get your sign-off before development.' }, { title: 'Development', body: 'We build the site clean, fast, and fully mobile-responsive.' }, { title: 'Testing & QA', body: 'We test across devices and browsers before anything goes live.' }, { title: 'Launch & Handover', body: 'We launch your site and walk you through how to manage it.' }]} />
        </div>
      </section>
      {/* WHY */}
      <section className="py-20 px-6" style={{ background: '#F5F7FA' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-12" variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}><Eyebrow>Why CL</Eyebrow><h2 className="mt-3">Why Choose CL for Your Website.</h2></motion.div>
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            {[{ icon: Search, title: 'SEO Built In From Day One', body: 'Every website is structured, coded, and content-optimised for Google search from launch — not as an afterthought.' }, { icon: BarChart3, title: 'Designed to Convert, Not Just Impress', body: 'Beautiful design backed by conversion strategy — every page is built to move visitors toward your business goals.' }, { icon: CheckCircle, title: 'Ongoing Support Available', body: 'We\'re here after launch. From content updates to technical support, we\'ve got your website covered long-term.' }].map((t) => (<motion.div key={t.title} variants={fadeUp}><TrustCard {...t} /></motion.div>))}
          </motion.div>
        </div>
      </section>
      {/* FAQ */}
      <section className="py-20 px-6" style={{ background: '#FFFFFF' }}>
        <div className="max-w-4xl mx-auto">
          <motion.div className="text-center mb-12" variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}><Eyebrow>FAQ</Eyebrow><h2 className="mt-3">Website Design Questions Answered.</h2></motion.div>
          <FAQAccordion items={[{ q: 'How much does a website cost in Malaysia?', a: 'Website costs in Malaysia vary by type and complexity — from a focused landing page to a full eCommerce store or LMS. We\'ll give you a transparent quote based on your specific requirements after our initial call.' }, { q: 'How long does it take to build a website?', a: 'Timelines depend on the type of website. A landing page can be delivered in 1–2 weeks; a corporate website typically takes 4–6 weeks; eCommerce and LMS sites may take 6–10 weeks depending on scope.' }, { q: 'Will my website be SEO-optimised?', a: 'Yes. Every website we build includes on-page SEO fundamentals — proper heading structure, meta tags, fast load times, mobile responsiveness, and clean code — so you\'re ready to rank from day one.' }, { q: 'Can I update my website myself?', a: 'Absolutely. We build on user-friendly platforms and provide handover training so you can manage your own content without needing a developer for everyday updates.' }, { q: 'Do you offer ongoing maintenance?', a: 'Yes. We offer ongoing website maintenance plans covering security updates, technical support, content updates, and performance monitoring.' }]} />
        </div>
      </section>
      <CTABanner headline="Ready to Build a Website That Works as Hard as You Do?" cta1="Book a Call" />
    </>
  );
}
