import { Check, X } from 'lucide-react';

export default function ComparisonTable({ col1, col2, rows }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full max-w-2xl mx-auto border-collapse">
        <thead>
          <tr>
            <th className="p-4 text-left text-sm" style={{ color: '#94a3b8', fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>Feature</th>
            <th className="p-4 text-center rounded-tl-xl text-sm" style={{ background: '#1565c0', color: 'white', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>{col1}</th>
            <th className="p-4 text-center text-sm" style={{ background: '#F5F7FA', color: '#0b0f1e', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>{col2}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} style={{ borderBottom: '1px solid #E2E8F0' }}>
              <td className="p-4 text-sm" style={{ color: '#4A5568', fontFamily: 'Inter, sans-serif' }}>{row.feature}</td>
              <td className="p-4 text-center" style={{ background: 'rgba(21,101,192,0.04)' }}>
                {row.col1 === true ? <Check size={18} style={{ color: '#1565c0', margin: '0 auto' }} /> : row.col1 === false ? <X size={18} style={{ color: '#94a3b8', margin: '0 auto' }} /> : <span className="text-sm" style={{ color: '#1565c0', fontFamily: 'Inter, sans-serif' }}>{row.col1}</span>}
              </td>
              <td className="p-4 text-center">
                {row.col2 === true ? <Check size={18} style={{ color: '#4A5568', margin: '0 auto' }} /> : row.col2 === false ? <X size={18} style={{ color: '#94a3b8', margin: '0 auto' }} /> : <span className="text-sm" style={{ color: '#4A5568', fontFamily: 'Inter, sans-serif' }}>{row.col2}</span>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
