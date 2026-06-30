import React from 'react';
import { Bot } from 'lucide-react';

export default function Marquee() {
  const items = [
  "Agentic AI",
  "Large Language Models",
  "Machine Learning",
  "Python",
  "NumPy",
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
  "OpenAI Codex",
  "OpenCode",
  "Google Antigravity",
  "Problem Solving",
  "AI Applications",
  "Software Engineering"
  ];

  return (<>
    <div className="marquee-wrapper-alt py-9 dark:bg-neutral-50 bg-neutral-900 border-y dark:border-neutral-200/40 border-neutral-800/40 overflow-hidden select-none mt-16 mb-16 relative z-10 shadow-sm">
      <div className="marquee-container-alt flex w-full">
        {/* First track */}
        <div className="marquee-content-alt flex gap-12 whitespace-nowrap pr-12">
          {items.map((item, idx) => (
            <span
              key={idx} 
              className="marquee-item-alt flex items-center gap-12 text-sm md:text-base font-medium uppercase tracking-widest dark:text-neutral-700 text-white"
            >
              <span>{item}</span>
              <span className="dark:text-neutral-700 text-3xl text-white select-none"><Bot size={24} strokeWidth={1}/></span>
            </span>
          ))}
        </div>
        {/* Second track (Duplicate for seamless looping) */}
        <div className="marquee-content-alt flex gap-12 whitespace-nowrap pr-12" aria-hidden="true">
          {items.map((item, idx) => (
            <span 
              key={`dup-${idx}`} 
              className="marquee-item-alt flex items-center gap-12 text-sm md:text-base font-medium uppercase tracking-widest dark:text-neutral-700 text-white"
            >
              <span>{item}</span>
              <span className="dark:text-black text-3xl text-white select-none"><Bot size={24} strokeWidth={1}/></span>
            </span>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .marquee-wrapper-alt {
          width: 112vw;
          margin-left: -6vw;
        }
        .marquee-container-alt {
          mask-image: linear-gradient(to right, transparent, white 15%, white 85%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, white 15%, white 85%, transparent);
        }
        .marquee-content-alt {
          flex: 0 0 auto;
          width: max-content;
          animation: marquee-scroll-alt 40s linear infinite;
        }
        .marquee-item-alt {
          flex: 0 0 auto;
        }

        @keyframes marquee-scroll-alt {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0%);
          }
        }
      `}} />
    </div>
    </>
  );
}
