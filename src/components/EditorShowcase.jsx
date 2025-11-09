import React, { useState } from 'react';
import { Sparkles, User, Layout, Type } from 'lucide-react';

export default function EditorShowcase() {
  const [name, setName] = useState('Alex Taylor');
  const [role, setRole] = useState('Frontend Engineer');
  const [about, setAbout] = useState('I craft fast, accessible web apps with delightful UX.');

  const generateAbout = () => {
    // Simulated AI action (non-blocking). In the full app this would call the backend.
    setAbout(
      `${name} is a ${role} focused on performance, accessibility, and thoughtful design. Passionate about building impactful products with modern web technologies.`
    );
  };

  return (
    <section id="editor" className="py-16 md:py-24 bg-slate-50">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2 text-slate-800">
              <Layout className="h-5 w-5 text-emerald-600" />
              <h3 className="font-semibold">Live Portfolio Editor</h3>
            </div>
            <div className="mt-6 space-y-5">
              <div>
                <label className="block text-sm text-slate-600 mb-1">Name</label>
                <input
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm text-slate-600 mb-1">Role</label>
                <input
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm text-slate-600 mb-1">About Me</label>
                <textarea
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 h-28"
                  value={about}
                  onChange={(e) => setAbout(e.target.value)}
                />
              </div>
              <button
                onClick={generateAbout}
                className="inline-flex items-center gap-2 rounded-md bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 text-sm font-medium"
              >
                <Sparkles className="h-4 w-4" /> Generate with AI
              </button>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2 text-slate-800">
              <User className="h-5 w-5 text-emerald-600" />
              <h3 className="font-semibold">Live Preview</h3>
            </div>
            <div className="mt-6">
              <div className="rounded-xl border border-slate-200 p-6 bg-gradient-to-br from-white to-slate-50">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-xl font-semibold text-slate-900">{name}</h4>
                    <p className="text-sm text-slate-600">{role}</p>
                  </div>
                  <span className="inline-flex items-center rounded-full bg-emerald-50 text-emerald-700 px-3 py-1 text-xs">Portfolio</span>
                </div>
                <p className="mt-4 text-sm text-slate-700 leading-relaxed">{about}</p>
                <div className="mt-6 flex gap-2">
                  <button className="rounded-md border border-slate-300 px-3 py-1.5 text-xs text-slate-700 hover:bg-slate-50">Contact</button>
                  <button className="rounded-md bg-emerald-600 text-white px-3 py-1.5 text-xs hover:bg-emerald-500">Download CV</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
