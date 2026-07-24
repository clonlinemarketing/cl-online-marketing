import { motion, useReducedMotion } from 'framer-motion';
import { GraduationCap, Users, BookOpen, CreditCard, BarChart3, Smartphone, Lock, Edit, CheckCircle } from 'lucide-react';
import Eyebrow from '../../components/ui/Eyebrow';
import CTABanner from '../../components/ui/CTABanner';
import TrustCard from '../../components/ui/TrustCard';
import FAQAccordion from '../../components/ui/FAQAccordion';
import HeroImage, { HERO_IMAGES } from '../../components/ui/HeroImage';
import { fadeUp, fadeLeft, fadeRight, staggerContainer, safeAnim, safeAnimAnimate, viewportOnce } from '../../utils/animations';

export default function LMSWebsite() {
  const shouldReduce = useReducedMotion();
  return (
    <>
      <title>LMS Website Malaysia | CL Online Marketing Agency</title>
      {/* HERO */}
      <section className="py-20 md:py-28 px-6 overflow-hidden" style={{ background: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={staggerContainer} {...safeAnimAnimate(staggerContainer, shouldReduce)}>
            <motion.div variants={fadeUp}><Eyebrow>LMS Website</Eyebrow></motion.div>
            <motion.h1 className="mt-4 mb-6" variants={fadeUp}>Sell Courses Online With a<br /><span style={{ color: '#29b6f6' }}>Professional Learning Platform.</span></motion.h1>
            <motion.p className="text-lg mb-8" style={{ color: '#4A5568' }} variants={fadeUp}>A complete Learning Management System for educators, coaches, trainers, and course creators — course catalogue, student portal, payment and enrollment, and a seamless learning experience your students will love.</motion.p>
            <div><motion.a href="/contact" className="btn-primary" variants={fadeUp} whileHover={shouldReduce ? {} : { scale: 1.03, y: -2 }}>Book a Call</motion.a></div>
          </motion.div>
          <HeroImage src={HERO_IMAGES.lms} alt="LMS website design" badge={{ text: 'Student Portal Included', icon: Users }} badge2={{ text: 'Course Management', icon: BookOpen }} delay={0.2} />
        </div>
      </section>
      {/* WHY */}
      <section className="py-16 px-6" style={{ background: '#F5F7FA' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <Eyebrow>Why own your own LMS?</Eyebrow>
            <h2 className="mt-3 mb-5">Stop Paying Marketplace Commissions — Own Your Learning Platform.</h2>
            <p style={{ color: '#4A5568', lineHeight: 1.8 }}>Third-party course platforms charge heavy commissions and limit your brand control. A custom LMS website gives you full ownership, branded experience, and 100% of your course revenue — while delivering a professional, credible learning environment for your students.</p>
          </motion.div>
          <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <div className="relative rounded-3xl overflow-hidden" style={{ boxShadow: '0 16px 48px rgba(0,0,0,0.10)' }}>
              <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b6f7e?auto=format&fit=crop&w=700&q=80" alt="Online learning environment" loading="lazy" style={{ width: '100%', height: '360px', objectFit: 'cover', display: 'block' }} />
            </div>
          </motion.div>
        </div>
      </section>
      {/* FEATURES */}
      <section className="py-20 px-6" style={{ background: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-12" variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}><h2>What's Included in Your LMS Website.</h2></motion.div>
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            {[{ icon: BookOpen, title: 'Course Catalogue & Management', body: 'Organised course library with modules, lessons, video content, and downloadable resources.' }, { icon: Users, title: 'Student Portal & Progress Tracking', body: 'Secure student login, course progress tracking, certificates, and personalised dashboards.' }, { icon: CreditCard, title: 'Payment & Enrollment System', body: 'Integrated payment gateway for course purchases, recurring subscriptions, or one-time fees.' }, { icon: Smartphone, title: 'Mobile-Responsive Design', body: 'Students learn on any device — your LMS looks and functions perfectly on smartphones and tablets.' }, { icon: BarChart3, title: 'Admin Dashboard', body: 'Manage courses, students, payments, and content from one intuitive admin interface.' }, { icon: Edit, title: 'Easy Content Updates', body: 'Upload new lessons, update course materials, and manage your catalogue without a developer.' }].map((t) => (<motion.div key={t.title} variants={fadeUp}><TrustCard {...t} /></motion.div>))}
          </motion.div>
        </div>
      </section>
      {/* FAQ */}
      <section className="py-20 px-6" style={{ background: '#F5F7FA' }}>
        <div className="max-w-4xl mx-auto">
          <motion.div className="text-center mb-12" variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}><Eyebrow>FAQ</Eyebrow><h2 className="mt-3">LMS Website Questions Answered.</h2></motion.div>
          <FAQAccordion items={[{ q: 'What types of content can I deliver on the LMS?', a: 'Video lessons, PDF resources, quizzes, downloadable files, live session integrations, and more — we configure the platform to match your course delivery format.' }, { q: 'How long does it take to build an LMS website?', a: 'Typically 6–10 weeks depending on the number of courses, complexity of the student portal, and payment integration requirements.' }, { q: 'Can I sell courses in Malaysian Ringgit (MYR)?', a: 'Yes. We integrate Malaysian payment gateways supporting MYR transactions, including FPX, cards, and e-wallets.' }, { q: 'Can I manage my courses independently after launch?', a: 'Yes. We build and train you on the admin dashboard so you can add new courses, upload lessons, and manage students without any technical knowledge.' }]} />
        </div>
      </section>
      <CTABanner headline="Ready to Launch Your Online Course Platform?" cta1="Book a Call" />
    </>
  );
}
