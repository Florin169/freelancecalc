import TaxCalculator from '@/components/TaxCalculator';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Zap, BarChart3 } from 'lucide-react';

export default function Home() {
  const topIndustries = [
    { name: 'Video Editor', slug: 'video-editor' },
    { name: 'Graphic Designer', slug: 'graphic-designer' },
    { name: 'Web Developer', slug: 'web-developer' },
    { name: 'Copywriter', slug: 'copywriter' },
    { name: 'Social Media Manager', slug: 'social-media-manager' },
    { name: 'UX Designer', slug: 'ux-designer' }
  ];

  return (
    <main className="bg-zinc-950 text-zinc-50 min-h-screen pb-20">
      <section className="bg-zinc-950 border-b border-zinc-800 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 text-indigo-400 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-indigo-500/20">
            <Zap size={14} /> Updated for 2026 Tax Year
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-white mt-2 tracking-tight">
            Stop Guessing. <br />
            <span className="text-indigo-500">Calculate Your Net.</span>
          </h1>
          <p className="text-zinc-400 text-xl mt-6 max-w-2xl mx-auto leading-relaxed">
            The most accurate tool for US freelancers to calculate Federal tax, Self-Employment tax, and QBI deductions in seconds.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 -mt-12">
        <TaxCalculator />
      </div>

      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="bg-indigo-950 rounded-3xl p-8 md:p-12 overflow-hidden relative shadow-2xl border border-indigo-500/20">
          <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Switching to Freelance?</h2>
              <p className="text-indigo-200 text-lg mb-8">
                A $100k salary and $100k freelance income are NOT the same. Use our "Battle Tool" to find your break-even hourly rate.
              </p>
              <Link 
                href="/compare/1099-vs-w2" 
                className="inline-flex items-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-emerald-500 transition-all group"
              >
                Compare 1099 vs W2 <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="hidden md:flex justify-center opacity-10">
              <BarChart3 size={240} className="text-white" />
            </div>
          </div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-indigo-500 rounded-full blur-3xl opacity-10"></div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-12">
        <div className="flex items-center gap-2 mb-8">
          <ShieldCheck className="text-indigo-400" />
          <h2 className="text-2xl font-bold text-white tracking-tight">Specialized Industry Tools</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {topIndustries.map((ind) => (
            <Link 
              key={ind.slug} 
              href={`/calculator/${ind.slug}`}
              className="group bg-zinc-900 p-6 rounded-2xl border border-zinc-800 hover:border-indigo-500 hover:bg-zinc-800/50 transition-all shadow-xl"
            >
              <p className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-1">Industry</p>
              <h3 className="text-lg font-bold text-zinc-100 group-hover:text-indigo-400 transition-colors">
                {ind.name}
              </h3>
              <div className="mt-4 flex items-center text-xs font-bold text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity">
                OPEN CALCULATOR <ArrowRight size={14} className="ml-1" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 mt-20 text-center border-t border-zinc-800 pt-20">
        <h2 className="text-xl font-bold text-white mb-4">Why Freelancers Trust CalculateFreelance</h2>
        <p className="text-zinc-500 leading-relaxed italic">
          "Most tax calculators are built for W2 employees. We built this specifically for the 1099 economy, 
          incorporating the 2026 QBI deduction and Self-Employment tax adjustments."
        </p>
      </section>
    </main>
  );
}