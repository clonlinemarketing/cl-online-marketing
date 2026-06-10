import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import WebDesign from './pages/web-design/WebDesign';
import LandingPage from './pages/web-design/LandingPage';
import CorporateWebsite from './pages/web-design/CorporateWebsite';
import EcommerceWebsite from './pages/web-design/EcommerceWebsite';
import LMSWebsite from './pages/web-design/LMSWebsite';
import DigitalAds from './pages/digital-ads/DigitalAds';
import GoogleAds from './pages/digital-ads/GoogleAds';
import SocialAds from './pages/digital-ads/SocialAds';
import SearchHub from './pages/search/SearchHub';
import GoogleSEO from './pages/search/GoogleSEO';
import AISearch from './pages/search/AISearch';
import SocialManagement from './pages/SocialManagement';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

const pageVariants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -16 },
};

function AnimatedPage({ children }) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const location = useLocation();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <main style={{ flex: 1 }}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<AnimatedPage><Home /></AnimatedPage>} />
            <Route path="/about" element={<AnimatedPage><About /></AnimatedPage>} />
            <Route path="/services" element={<AnimatedPage><Services /></AnimatedPage>} />
            <Route path="/services/web-design" element={<AnimatedPage><WebDesign /></AnimatedPage>} />
            <Route path="/services/web-design/landing-page" element={<AnimatedPage><LandingPage /></AnimatedPage>} />
            <Route path="/services/web-design/corporate" element={<AnimatedPage><CorporateWebsite /></AnimatedPage>} />
            <Route path="/services/web-design/ecommerce" element={<AnimatedPage><EcommerceWebsite /></AnimatedPage>} />
            <Route path="/services/web-design/lms" element={<AnimatedPage><LMSWebsite /></AnimatedPage>} />
            <Route path="/services/digital-ads" element={<AnimatedPage><DigitalAds /></AnimatedPage>} />
            <Route path="/services/digital-ads/google-ads" element={<AnimatedPage><GoogleAds /></AnimatedPage>} />
            <Route path="/services/digital-ads/social-ads" element={<AnimatedPage><SocialAds /></AnimatedPage>} />
            <Route path="/services/search" element={<AnimatedPage><SearchHub /></AnimatedPage>} />
            <Route path="/services/search/google-seo" element={<AnimatedPage><GoogleSEO /></AnimatedPage>} />
            <Route path="/services/search/ai-search" element={<AnimatedPage><AISearch /></AnimatedPage>} />
            <Route path="/services/social-management" element={<AnimatedPage><SocialManagement /></AnimatedPage>} />
            <Route path="/blog" element={<AnimatedPage><Blog /></AnimatedPage>} />
            <Route path="/contact" element={<AnimatedPage><Contact /></AnimatedPage>} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
