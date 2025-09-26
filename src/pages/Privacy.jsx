import React from "react";
import { ShieldCheck, Lock, UserCheck, EyeOff } from "lucide-react";

const Privacy = () => (
  <section className="max-w-4xl mx-auto py-24 px-4 flex flex-col items-center justify-center min-h-screen relative overflow-hidden">
    {/* Decorative animated background and subtle icons to keep the page engaging */}
    <div className="absolute inset-0 z-0 pointer-events-none">
      <svg width="100%" height="100%" className="absolute inset-0 w-full h-full animate-sparkle" xmlns="http://www.w3.org/2000/svg">
        <g>
          {Array.from({ length: 40 }).map((_, i) => (
            <circle
              key={i}
              cx={Math.random() * 100 + '%'}
              cy={Math.random() * 100 + '%'}
              r={Math.random() * 2 + 1}
              fill={`hsl(${Math.random() * 360}, 80%, 70%)`}
              opacity={0.5 + Math.random() * 0.4}
            />
          ))}
          {/* Meteor streaks for subtle motion */}
          {Array.from({ length: 4 }).map((_, i) => (
            <rect
              key={"meteor"+i}
              x={Math.random() * 100 + '%'}
              y={Math.random() * 100 + '%'}
              width={Math.random() * 40 + 30}
              height={2}
              rx={1}
              fill="white"
              opacity={0.3 + Math.random() * 0.3}
              style={{ filter: "blur(1px)" }}
            />
          ))}
        </g>
      </svg>
      {/* Faint Lucide icons used decoratively */}
      <ShieldCheck className="absolute left-10 top-20 text-yellow-400/30" size={48} />
      <Lock className="absolute right-10 top-32 text-blue-400/30" size={40} />
      <UserCheck className="absolute left-1/3 bottom-16 text-green-400/30" size={40} />
      <EyeOff className="absolute right-1/4 bottom-10 text-pink-400/30" size={40} />
    </div>
    <h1 className="text-5xl font-extrabold mb-10 drop-shadow-lg tracking-tight animate-shine text-blue-400 uppercase font-montserrat">Privacy Policy</h1>
    <div className="bg-[#181e2a]/90 rounded-3xl shadow-2xl p-10 border-2 border-[#232946] text-gray-200">
      <p className="mb-6 text-lg">Your privacy is important to us. We do not share your personal information with third parties. All data is securely stored and used only for improving your experience at IELTS Institute.</p>
      <ul className="list-disc pl-6 space-y-4">
        <li>We collect only necessary information for registration and communication.</li>
        <li>All data is encrypted and protected.</li>
        <li>You can request data deletion at any time.</li>
        <li>Contact us for any privacy concerns.</li>
      </ul>
    </div>
  </section>
);

export default Privacy;
