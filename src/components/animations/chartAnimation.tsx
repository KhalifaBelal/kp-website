"use client";

import { useEffect, useRef } from 'react';

const ChartAnimation = () => {
  const chartRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.style.animation = 'chartAnimation 2s ease-in-out forwards';
    }
  }, []);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <svg
        ref={chartRef}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        style={{ position: 'absolute', width: '100%', height: '100%', backgroundColor: '#c1272d' }}
      >
        {/* Chart Line */}
        <polyline
          points="0,100 20,80 40,60 60,40 80,20 100,0"
          fill="none"
          stroke="#fff"
          strokeWidth="2"
          strokeLinejoin="round"
          strokeLinecap="round"
        />

        {/* Chart Animation */}
        <style jsx>{`
          @keyframes chartAnimation {
            0% { transform: scaleX(0); }
            100% { transform: scaleX(1); }
          }
        `}</style>
      </svg>
    </div>
  );
};

export default ChartAnimation;
