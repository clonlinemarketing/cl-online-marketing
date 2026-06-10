import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

function useCounter(target, duration = 1500) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  const start = () => {
    if (started) return;
    setStarted(true);
    const num = parseInt(target);
    if (isNaN(num)) { setCount(target); return; }
    let start = 0;
    const step = num / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= num) { setCount(num); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
  };
  return { count, start };
}

export default function StatCard({ stat, label }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const shouldReduce = useReducedMotion();
  const numericPart = stat.replace(/\D/g, '');
  const suffix = stat.replace(/[\d]/g, '');
  const { count, start } = useCounter(numericPart);

  useEffect(() => { if (isInView && !shouldReduce) start(); }, [isInView]);

  return (
    <div ref={ref} className="neumorphic p-8 text-center">
      <div className="text-5xl font-bold mb-2" style={{ color: '#1565c0', fontFamily: 'Space Grotesk, sans-serif' }}>
        {shouldReduce ? stat : `${count}${suffix}`}
      </div>
      <p className="text-sm font-medium" style={{ color: '#4A5568', fontFamily: 'Inter, sans-serif' }}>{label}</p>
    </div>
  );
}
