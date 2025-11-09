import React from 'react';
import { Wand2, Palette, Sparkles, Share2, Download, LayoutPanelTop, SunMoon } from 'lucide-react';

const features = [
  {
    icon: <Wand2 className="h-5 w-5 text-emerald-500" />,
    title: 'AI Content',
    desc: 'Generate About Me and project descriptions powered by Gemini.'
  },
  {
    icon: <Palette className="h-5 w-5 text-emerald-500" />,
    title: 'Design Systems',
    desc: 'Pick palettes, themes, fonts, animations, and layouts.'
  },
  {
    icon: <LayoutPanelTop className="h-5 w-5 text-emerald-500" />,
    title: 'Live Editor',
    desc: 'Edit sections and see instant preview of your portfolio.'
  },
  {
    icon: <SunMoon className="h-5 w-5 text-emerald-500" />,
    title: 'Light & Dark',
    desc: 'Switch themes with a single click for the perfect mood.'
  },
  {
    icon: <Share2 className="h-5 w-5 text-emerald-500" />,
    title: 'One-click Publish',
    desc: 'Share a unique URL and showcase your work anywhere.'
  },
  {
    icon: <Download className="h-5 w-5 text-emerald-500" />,
    title: 'CV Download',
    desc: 'Upload your resume and add a download button automatically.'
  }
];

export default function FeatureGrid() {
  return (
    <section id="features" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl md:text-4xl font-semibold text-slate-900 text-center">
          Everything you need to shine
        </h2>
        <p className="mt-3 text-slate-600 text-center max-w-2xl mx-auto">
          Create, customize, and publish a beautiful portfolio—no code required.
        </p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, idx) => (
            <div key={idx} className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-emerald-50 p-2">{f.icon}</div>
                <h3 className="font-medium text-slate-900">{f.title}</h3>
              </div>
              <p className="mt-3 text-sm text-slate-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
