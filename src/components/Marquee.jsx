import React from 'react';
import { Bot } from 'lucide-react';

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

  const renderTrack = (isAlt = false) => (
    items.map((item, idx) => (
      <span 
        key={isAlt ? `alt-${idx}` : idx} 
        className="marquee-item-span flex items-center gap-12 text-base md:text-5xl font-medium font-sixcaps uppercase tracking-widest select-none transition-all duration-300 hover:scale-[1.05] cursor-default text-neutral-800 dark:text-white"
      >
        <span>{item}</span>
        <Bot className="marquee-item-bot w-6 h-6 text-red-400 dark:text-yellow-100 select-none flex-shrink-0 transition-all duration-300" strokeWidth={2} />
      </span>
    ))
  );

  return (
    <div className="marquee-wrapper py-9 bg-gradient-to-r from-neutral-50 via-neutral-100 to-neutral-50 dark:from-neutral-900 dark:via-neutral-950 dark:to-neutral-900 border-y border-neutral-200/50 dark:border-neutral-800/40 overflow-hidden select-none mt-16 mb-16 relative z-10 shadow-sm">
      <div className="marquee-container flex w-full">
        {/* First track */}
        <div className="marquee-content flex gap-12 whitespace-nowrap pr-12">
          {renderTrack(false)}
        </div>
        {/* Second track (Duplicate for seamless looping) */}
        <div className="marquee-content flex gap-12 whitespace-nowrap pr-12" aria-hidden="true">
          {renderTrack(true)}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .marquee-wrapper {
          width: 112vw;
          margin-left: -6vw;
        }
        .marquee-container {
          mask-image: linear-gradient(to right, transparent, white 15%, white 85%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, white 15%, white 85%, transparent);
        }
        .marquee-content {
          animation: marquee-scroll 50s linear infinite;
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
