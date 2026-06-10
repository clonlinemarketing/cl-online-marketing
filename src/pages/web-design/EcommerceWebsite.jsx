import { motion, useReducedMotion } from 'framer-motion';
import { ShoppingCart, CreditCard, Package, Search, Smartphone, Lock, BarChart3, Zap, CheckCircle } from 'lucide-react';
import Eyebrow from '../../components/ui/Eyebrow';
import CTABanner from '../../components/ui/CTABanner';
import TrustCard from '../../components/ui/TrustCard';
import FAQAccordion from '../../components/ui/FAQAccordion';
import HeroImage, { HERO_IMAGES } from '../../components/ui/HeroImage';
import { fadeUp, fadeLeft, fadeRight, staggerContainer, safeAnim, safeAnimAnimate, viewportOnce } from '../../utils/animations';

export default function EcommerceWebsite() {
  const shouldReduce = useReducedMotion();
  return (
    <>
      <title>eCommerce Website Malaysia | CL Online Marketing Agency</title>
      {/* HERO */}
      <section className="py-20 md:py-28 px-6 overflow-hidden" style={{ background: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={staggerContainer} {...safeAnimAnimate(staggerContainer, shouldReduce)}>
            <motion.div variants={fadeUp}><Eyebrow>eCommerce Website Malaysia</Eyebrow></motion.div>
            <motion.h1 className="mt-4 mb-6" variants={fadeUp}>Sell Online 24/7 With a<br /><span style={{ color: '#29b6f6' }}>Professional eCommerce Store.</span></motion.h1>
            <motion.p className="text-lg mb-8" style={{ color: '#4A5568' }} variants={fadeUp}>A fully equipped online store for Malaysian businesses — product pages, secure checkout, payment gateway, order management, and everything your customers expect from a trustworthy online shopping experience.</motion.p>
            <motion.a href="/contact" className="btn-primary" variants={fadeUp} whileHover={shouldReduce ? {} : { scale: 1.03, y: -2 }}>Book a Call</motion.a>
          </motion.div>
          <HeroImage src={HERO_IMAGES.ecommerce} alt="eCommerce website design" badge={{ text: 'Secure Payment Gateway', icon: CreditCard }} badge2={{ text: 'Mobile Shopping Ready', icon: Smartphone }} delay={0.2} />
        </div>
      </section>
      {/* SECTION 2 */}
      <section className="py-16 px-6" style={{ background: '#F5F7FA' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <Eyebrow>Why eCommerce?</Eyebrow>
            <h2 className="mt-3 mb-5">Your Customers Want to Buy Online. Make It Easy for Them.</h2>
            <p style={{ color: '#4A5568', lineHeight: 1.8 }}>Malaysian consumers increasingly shop online — from product discovery to checkout. An eCommerce website lets your business sell around the clock, reach customers beyond your physical location, and scale without the constraints of a physical shopfront.</p>
          </motion.div>
          <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <div className="relative rounded-3xl overflow-hidden" style={{ boxShadow: '0 16px 48px rgba(0,0,0,0.10)' }}>
              <img src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=700&q=80" alt="Online shopping experience" loading="lazy" style={{ width: '100%', height: '360px', objectFit: 'cover', display: 'block' }} />
            </div>
          </motion.div>
        </div>
      </section>
      {/* FEATURES */}
      <section className="py-20 px-6" style={{ background: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-12" variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}><h2>Everything Your Online Store Needs.</h2></motion.div>
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            {[{ icon: ShoppingCart, title: 'Product Catalogue & Management', body: 'Clean product listings with images, descriptions, variants, and inventory management built in.' }, { icon: CreditCard, title: 'Secure Payment Gateway', body: 'Malaysian payment methods supported — credit/debit cards, FPX, e-wallets, and more.' }, { icon: Package, title: 'Order & Shipping Management', body: 'Order tracking, shipping integration, and fulfilment workflows to manage your business efficiently.' }, { icon: Search, title: 'eCommerce SEO', body: 'Product pages and category pages optimised for Google so your store gets found organically.' }, { icon: Lock, title: 'Secure & SSL-Certified', body: 'Full HTTPS security — essential for customer trust and Google ranking.' }, { icon: Zap, title: 'Fast & Mobile-Optimised', body: 'Speed-optimised for mobile shoppers — slow load times kill conversions on mobile.' }].map((t) => (<motion.div key={t.title} variants={fadeUp}><TrustCard {...t} /></motion.div>))}
          </motion.div>
        </div>
      </section>
      {/* FAQ */}
      <section className="py-20 px-6" style={{ background: '#F5F7FA' }}>
        <div className="max-w-4xl mx-auto">
          <motion.div className="text-center mb-12" variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}><Eyebrow>FAQ</Eyebrow><h2 className="mt-3">eCommerce Website Questions Answered.</h2></motion.div>
          <FAQAccordion items={[{ q: 'Which payment gateways do you support for Malaysian eCommerce?', a: 'We integrate with major Malaysian payment gateways supporting FPX, credit/debit cards, and popular e-wallets — so your customers can pay however they prefer.' }, { q: 'Can I manage my own products and inventory after launch?', a: 'Yes. We build on platforms with intuitive admin dashboards so you can add products, update stock, and manage orders without any technical knowledge.' }, { q: 'How long does it take to build an eCommerce website?', a: 'Typically 6–10 weeks depending on the number of products, payment integration complexity, and content readiness.' }, { q: 'Can you integrate with my existing courier or logistics provider?', a: 'Yes. We can integrate shipping plugins that connect with popular Malaysian couriers for automated shipping calculations and tracking.' }]} />
        </div>
      </section>
      <CTABanner headline="Ready to Start Selling Online in Malaysia?" cta1="Book a Call" />
    </>
  );
}
