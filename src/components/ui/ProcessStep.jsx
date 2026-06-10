export default function ProcessSteps({ steps }) {
  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, i) => (
          <div key={i} className="relative flex flex-col items-center text-center">
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold mb-4 flex-shrink-0"
              style={{ background: 'linear-gradient(135deg, #1565c0, #29b6f6)', color: 'white', fontFamily: 'Space Grotesk, sans-serif', boxShadow: '0 4px 14px rgba(21,101,192,0.35)' }}
            >
              {String(i + 1).padStart(2, '0')}
            </div>
            <h4 className="mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, color: '#0b0f1e' }}>{step.title}</h4>
            <p className="text-sm" style={{ color: '#4A5568', fontFamily: 'Inter, sans-serif' }}>{step.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
