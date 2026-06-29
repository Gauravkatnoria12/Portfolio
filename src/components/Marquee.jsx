import React from 'react';

export default function Marquee() {
  const items = [
  "Agentic AI",
  "Large Language Models",
  "Machine Learning",
  "Python",
  "NumPy",
  "OpenAI Codex",
  "Google Antigravity",
  "Pandas",
  "Matplotlib",
  "Seaborn",
  "Scikit-learn",
  "FastAPI",
  "React",
  "TypeScript",
  "Docker",
  "Git",
  "SQL",
  "Problem Solving",
  "AI Applications",
  "Software Engineering"
  ];

  return (
    <div className="marquee-wrapper py-6 dark:bg-neutral-50 bg-neutral-900 border-y dark:border-neutral-200/40 border-neutral-800/40 overflow-hidden select-none my-16 relative z-10 shadow-sm">
      <div className="marquee-container flex w-full">
        {/* First track */}
        <div className="marquee-content flex gap-12 whitespace-nowrap pr-12">
          {items.map((item, idx) => (
            <span 
              key={idx} 
              className="marquee-item flex items-center gap-12 text-sm md:text-base font-medium uppercase tracking-widest dark:text-neutral-700 text-white"
            >
              <span>{item}</span>
              <span className="dark:text-neutral-700 text-3xl text-white select-none">✦</span>
            </span>
          ))}
        </div>
        {/* Second track (Duplicate for seamless looping) */}
        <div className="marquee-content flex gap-12 whitespace-nowrap pr-12" aria-hidden="true">
          {items.map((item, idx) => (
            <span 
              key={`dup-${idx}`} 
              className="marquee-item flex items-center gap-12 text-sm md:text-base font-medium uppercase tracking-widest dark:text-neutral-700 text-white"
            >
              <span>{item}</span>
              <span className="dark:text-neutral-700 text-3xl text-white select-none">✦</span>
            </span>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .marquee-wrapper {
          transform: rotate(-3.5deg);
          width: 112vw;
          margin-left: -6vw;
        }
        .marquee-container {
          mask-image: linear-gradient(to right, transparent, white 15%, white 85%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, white 15%, white 85%, transparent);
        }
        .marquee-content {
          animation: marquee-scroll 35s linear infinite;
        }

        @keyframes marquee-scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}} />
    </div>
  );
}
