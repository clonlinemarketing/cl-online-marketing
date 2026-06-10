import { motion, useReducedMotion } from 'framer-motion';
import { Mail, Phone, MapPin, ExternalLink, Clock, CheckCircle, MessageCircle } from 'lucide-react';
import Eyebrow from '../components/ui/Eyebrow';
import ContactForm from '../components/ui/ContactForm';
import FAQAccordion from '../components/ui/FAQAccordion';
import HeroImage, { HERO_IMAGES } from '../components/ui/HeroImage';
import { fadeUp, fadeLeft, fadeRight, staggerContainer, safeAnim, safeAnimAnimate, viewportOnce } from '../utils/animations';

export default function Contact() {
  const shouldReduce = useReducedMotion();

  const infoCards = [
    { icon: Mail,        label: 'Email',    value: 'info@clonlinemarketing.com',          href: 'mailto:info@clonlinemarketing.com' },
    { icon: Phone,       label: 'Phone',    value: '+6011-2368 3513',                      href: 'tel:+60112368353' },
    { icon: MapPin,      label: 'Location', value: 'Malaysia',                             href: null },
    { icon: ExternalLink,label: 'Facebook', value: 'facebook.com/clonlinemarketingagency', href: 'https://www.facebook.com/clonlinemarketingagency', external: true },
  ];

  return (
    <>
      <title>Contact CL Online Marketing Agency | Digital Marketing Malaysia</title>

      {/* HERO */}
      <section className="py-20 md:py-28 px-6 overflow-hidden" style={{ background: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={staggerContainer} {...safeAnimAnimate(staggerContainer, shouldReduce)}>
            <motion.div variants={fadeUp}><Eyebrow>Get in Touch</Eyebrow></motion.div>
            <motion.h1 className="mt-4 mb-6" variants={fadeUp}>Let's Talk About Growing<br /><span style={{ color: '#29b6f6' }}>Your Business Online.</span></motion.h1>
            <motion.p className="text-lg" style={{ color: '#4A5568' }} variants={fadeUp}>No hard sell. No long proposals. Just an honest conversation about your digital marketing goals — and whether CL Online Marketing Agency is the right partner to help you reach them.</motion.p>
          </motion.div>
          <HeroImage src={HERO_IMAGES.contact} alt="Contact CL Online Marketing Agency" badge={{ text: 'We Respond in 1 Business Day', icon: Clock }} badge2={{ text: 'Free Discovery Call', icon: CheckCircle }} delay={0.2} />
        </div>
      </section>

      {/* FORM + INFO */}
      <section className="py-16 px-6" style={{ background: '#F5F7FA' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <div className="neumorphic p-8">
              <h2 className="mb-6 text-2xl">Send Us a Message</h2>
              <ContactForm />
            </div>
          </motion.div>

          <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <h2 className="mb-6 text-2xl">Or Reach Us Directly</h2>
            <div className="space-y-4 mb-6">
              {infoCards.map(({ icon: Icon, label, value, href, external }) => (
                <div key={label} className="neumorphic p-4 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: '#e0f2fe' }}>
                    <Icon size={20} style={{ color: '#1565c0' }} />
                  </div>
                  <div>
                    <p className="text-xs font-medium mb-0.5" style={{ color: '#94a3b8', fontFamily: 'Inter, sans-serif' }}>{label}</p>
                    {href ? (
                      <a href={href} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})} className="text-sm font-semibold" style={{ color: '#0b0f1e', textDecoration: 'none', fontFamily: 'Inter, sans-serif' }}>{value}</a>
                    ) : (
                      <p className="text-sm font-semibold" style={{ color: '#0b0f1e', fontFamily: 'Inter, sans-serif', margin: 0 }}>{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-3 p-4 rounded-2xl" style={{ background: 'linear-gradient(135deg, #e0f2fe, #f0f9ff)', border: '1px solid rgba(41,182,246,0.2)' }}>
              <Clock size={20} style={{ color: '#29b6f6', flexShrink: 0 }} />
              <p className="text-sm font-semibold" style={{ color: '#0b0f1e', fontFamily: 'Inter, sans-serif', margin: 0 }}>We respond within 1 business day</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* REASSURANCE */}
      <section className="py-20 px-6" style={{ background: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-12" variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}><h2>What to Expect When You Reach Out.</h2></motion.div>
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            {[
              { icon: CheckCircle,   title: 'Free Call — No Obligation',       body: 'Our initial call is completely free with no commitment or pressure. We listen first, always.' },
              { icon: Clock,         title: 'We Respond Within 1 Business Day', body: "You'll hear back from a real person on our team within one business day of reaching out." },
              { icon: MessageCircle, title: 'No Pushy Sales — Just Honest Advice', body: "We'll give you an honest assessment of your situation and recommend only what genuinely makes sense for your business." },
            ].map(({ icon: Icon, title, body }) => (
              <motion.div key={title} className="claymorphic p-6" variants={fadeUp}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{ background: '#e0f2fe' }}>
                  <Icon size={20} style={{ color: '#1565c0' }} />
                </div>
                <h4 className="mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, color: '#0b0f1e' }}>{title}</h4>
                <p className="text-sm" style={{ color: '#4A5568', fontFamily: 'Inter, sans-serif' }}>{body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6" style={{ background: '#F5F7FA' }}>
        <div className="max-w-4xl mx-auto">
          <motion.div className="text-center mb-12" variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}><h2>Quick Questions Answered.</h2></motion.div>
          <FAQAccordion items={[
            { q: 'What happens after I reach out?', a: "We'll get back to you within 1 business day to schedule a free discovery call. On the call, we'll learn about your business and goals, then come back with our honest recommendations — no pressure, no hard sell." },
            { q: 'Do you work with businesses outside Klang Valley?', a: 'Yes. We work with businesses across Malaysia — from Kuala Lumpur and Selangor to Penang, Johor, Sabah, Sarawak, and everywhere in between. Our work is primarily digital, so geography is no barrier.' },
            { q: 'Is there a minimum project budget?', a: "We work with Malaysian businesses at a range of budget levels. During our discovery call, we'll understand your budget and recommend services that make sense for your investment — we never push you into something you can't justify." },
          ]} />
        </div>
      </section>
    </>
  );
}
