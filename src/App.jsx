import React from 'react';
import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import EditorShowcase from './components/EditorShowcase';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
          <a href="#" className="font-semibold">Animatefolio</a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
            <a className="hover:text-slate-900" href="#features">Features</a>
            <a className="hover:text-slate-900" href="#editor">Editor</a>
            <a className="hover:text-slate-900" href="#">Pricing</a>
          </nav>
          <a href="#editor" className="rounded-full bg-emerald-600 text-white px-4 py-1.5 text-sm hover:bg-emerald-500">Get Started</a>
        </div>
      </header>

      <main className="space-y-6 md:space-y-10">
        <div className="mx-auto max-w-6xl px-6 mt-6 md:mt-10">
          <Hero />
        </div>
        <FeatureGrid />
        <EditorShowcase />
        <CTA />
      </main>

      <footer className="py-10 border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-6 text-sm text-slate-600 flex items-center justify-between">
          <p>© {new Date().getFullYear()} Animatefolio. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-900">Privacy</a>
            <a href="#" className="hover:text-slate-900">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
