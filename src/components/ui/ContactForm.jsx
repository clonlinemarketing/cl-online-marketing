import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const services = [
  'Website Design & Development',
  'Single Landing Page',
  'Multiple / Corporate Website',
  'eCommerce Website',
  'LMS Website',
  'Google Ads',
  'Social Media Ads',
  'Google SEO',
  'AI Search Engine (GEO/AEO/AIO)',
  'Social Media Management',
  'Not sure — need advice',
];

const fieldStyle = {
  width: '100%',
  padding: '12px 16px',
  fontFamily: 'Inter, sans-serif',
  fontSize: '0.9375rem',
  background: 'white',
  border: '1.5px solid #E2E8F0',
  borderRadius: '8px',
  color: '#0b0f1e',
  outline: 'none',
  transition: 'border-color 0.2s, box-shadow 0.2s',
};

export default function ContactForm() {
  const shouldReduce = useReducedMotion();
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', service: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState('');

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Full name is required.';
    if (!form.email.trim()) e.email = 'Email address is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Please enter a valid email.';
    if (!form.message.trim()) e.message = 'Message is required.';
    else if (form.message.trim().length < 10) e.message = 'Message must be at least 10 characters.';
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSubmitted(true);
  };

  const focusStyle = (name) => focused === name ? { borderColor: '#1565c0', boxShadow: '0 0 0 3px rgba(21,101,192,0.15)' } : {};

  if (submitted) return (
    <div className="neumorphic p-10 text-center">
      <div className="text-5xl mb-4">✓</div>
      <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#0b0f1e', marginBottom: '8px' }}>Message Sent!</h3>
      <p style={{ color: '#4A5568', fontFamily: 'Inter, sans-serif' }}>We'll get back to you within 1 business day.</p>
    </div>
  );

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      {[
        { name: 'name', label: 'Full Name *', type: 'text', placeholder: 'Your full name' },
        { name: 'email', label: 'Email Address *', type: 'email', placeholder: 'you@company.com' },
        { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+60 11-XXXX XXXX' },
        { name: 'company', label: 'Company Name', type: 'text', placeholder: 'Your company' },
      ].map(({ name, label, type, placeholder }) => (
        <div key={name}>
          <label className="block text-sm font-medium mb-1" style={{ color: '#0b0f1e', fontFamily: 'Inter, sans-serif' }}>{label}</label>
          <input
            type={type}
            placeholder={placeholder}
            value={form[name]}
            onChange={e => setForm({ ...form, [name]: e.target.value })}
            onFocus={() => setFocused(name)}
            onBlur={() => setFocused('')}
            style={{ ...fieldStyle, ...focusStyle(name) }}
          />
          {errors[name] && <p className="text-xs mt-1" style={{ color: '#ef4444', fontFamily: 'Inter, sans-serif' }}>{errors[name]}</p>}
        </div>
      ))}
      <div>
        <label className="block text-sm font-medium mb-1" style={{ color: '#0b0f1e', fontFamily: 'Inter, sans-serif' }}>Service Interested In</label>
        <select
          value={form.service}
          onChange={e => setForm({ ...form, service: e.target.value })}
          onFocus={() => setFocused('service')}
          onBlur={() => setFocused('')}
          style={{ ...fieldStyle, ...focusStyle('service') }}
        >
          <option value="">Select a service...</option>
          {services.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium mb-1" style={{ color: '#0b0f1e', fontFamily: 'Inter, sans-serif' }}>Message / Tell us about your goals *</label>
        <textarea
          rows={5}
          placeholder="Tell us about your business and what you'd like to achieve..."
          value={form.message}
          onChange={e => setForm({ ...form, message: e.target.value })}
          onFocus={() => setFocused('message')}
          onBlur={() => setFocused('')}
          style={{ ...fieldStyle, ...focusStyle('message'), resize: 'vertical' }}
        />
        {errors.message && <p className="text-xs mt-1" style={{ color: '#ef4444', fontFamily: 'Inter, sans-serif' }}>{errors.message}</p>}
      </div>
      <motion.button
        type="submit"
        className="btn-primary w-full justify-center"
        whileHover={shouldReduce ? {} : { scale: 1.02, y: -2 }}
        whileTap={shouldReduce ? {} : { scale: 0.97 }}
        style={{ width: '100%', justifyContent: 'center' }}
      >
        Book a Call
      </motion.button>
    </form>
  );
}
