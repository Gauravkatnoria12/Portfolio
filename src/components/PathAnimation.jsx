import React from 'react';

export default function PathAnimation() {
  const pathD = `
    M -50 80
    C 150 180, 350 160, 500 80
    S 800 40, 950 60
    C 1100 60, 1220 60, 1320 60
    C 1420 70, 1500 120, 1650 190
    `;
  return (
    <div className="absolute top-[80px] left-0 w-full h-[400px] pointer-events-none z-0 overflow-hidden">
      {/* Dotted Path Trail */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <path d={pathD} className="motion-path-line" />
      </svg>

      {/* Moving Image Container */}
      <div 
        className="absolute w-36 h-36 flex items-center justify-center"
        style={{
          offsetPath: `path('${pathD.replace(/\s+/g, ' ').trim()}')`,
          offsetRotate: 'auto',
          offsetAnchor: 'center',
          offsetDistance: '0%',
          animation: 'moveAlongPath 10s linear infinite, floatBob 3s ease-in-out infinite',
        }}
      >
        <img 
          src="/aero.png" 
          alt="Moving Shiro" 
          className="w-full h-full object-contain select-none pointer-events-none"
          style={{ filter: 'drop-shadow(4px 8px 8px rgba(0, 0, 0, 0.28))' }}
        />
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .motion-path-line {
          fill: none;
          stroke: #d4d4d4;
          stroke-width: 2;
          stroke-dasharray: 6 6;
        }
        .dark .motion-path-line {
          stroke: #525252;
        }
        @keyframes moveAlongPath {
          0% {
            offset-distance: 0%;
          }
          100% {
            offset-distance: 100%;
          }
        }
        @keyframes floatBob {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-8px) rotate(-4deg);
          }
        }
      `}} />
    </div>
  );
}
