import React from 'react';
import { Share2 } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-3xl bg-slate-900 text-white p-8 md:p-12 overflow-hidden relative">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-transparent to-emerald-500/20" />
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold">Publish with one click</h3>
              <p className="mt-2 text-white/80 max-w-xl">
                Save your work to the cloud and get a unique URL to share with recruiters and friends.
              </p>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full bg-white text-slate-900 px-5 py-2.5 text-sm font-medium hover:bg-slate-100"
            >
              <Share2 className="h-4 w-4" /> Publish Portfolio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
