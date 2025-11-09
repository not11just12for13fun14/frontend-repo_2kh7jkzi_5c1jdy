import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[70vh] md:min-h-[82vh] overflow-hidden rounded-2xl md:rounded-3xl bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay for readability (won't block interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/60" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-16 md:py-24 text-white">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs md:text-sm backdrop-blur-md">
          <Rocket className="h-4 w-4 text-emerald-300" />
          <span className="text-white/90">Animatefolio</span>
        </div>
        <h1 className="mt-6 text-3xl md:text-6xl font-semibold leading-tight">
          Build an interactive portfolio in minutes.
        </h1>
        <p className="mt-4 max-w-2xl text-white/80 text-sm md:text-base">
          Live editing, AI-crafted content, beautiful themes, and a playful 3D hero. Launch your
          personal site without writing code.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#editor"
            className="inline-flex items-center justify-center rounded-full bg-emerald-500 hover:bg-emerald-400 text-white px-5 py-2.5 text-sm font-medium transition"
          >
            Start Editing
          </a>
          <a
            href="#features"
            className="inline-flex items-center justify-center rounded-full border border-white/30 hover:border-white/60 text-white/90 px-5 py-2.5 text-sm font-medium transition"
          >
            Explore Features
          </a>
        </div>
      </div>
    </section>
  );
}
