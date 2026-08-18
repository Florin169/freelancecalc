import TaxCalculator from '@/components/TaxCalculator';
import TaxGuideAccordion from '@/components/TaxGuideAccordion';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Zap, BarChart3 } from 'lucide-react';

export const metadata = {
  title: 'Freelance Tax Calculator 2025–2026 | 1099 Self-Employment Tax Estimator',
  description: 'Calculate your exact 1099 take-home pay after federal, state, and self-employment taxes. Free tool for freelancers and independent contractors. Updated for 2026 tax brackets.',
};

export default function Home() {
  const topIndustries = [
    { name: 'Video Editor', slug: 'video-editor' },
    { name: 'Graphic Designer', slug: 'graphic-designer' },
    { name: 'Web Developer', slug: 'web-developer' },
    { name: 'Copywriter', slug: 'copywriter' },
    { name: 'Social Media Manager', slug: 'social-media-manager' },
    { name: 'UX Designer', slug: 'ux-designer' },
    { name: 'Physician', slug: 'physician' }
  ];

  return (
    <main className="bg-black text-zinc-50 min-h-screen pb-20 antialiased">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-zinc-800 bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/40 to-transparent pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="relative max-w-4xl mx-auto text-center px-6 py-12 md:py-32">
          <div className="inline-flex items-center gap-2 bg-zinc-900/80 text-indigo-400 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-4 md:mb-8 border border-zinc-800 backdrop-blur-md">
            <Zap size={14} className="text-indigo-500" /> Updated for 2026 Tax Year
          </div>
          
          <h1 className="text-[2.5rem] leading-tight md:text-7xl font-black text-white tracking-tight md:leading-[1.05]">
            Self-Employed Tax Calculator & <br className="hidden md:block" />
            <span className="bg-gradient-to-br from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent">1099 Estimator</span>
          </h1>
          
          <p className="text-zinc-400 text-base md:text-xl mt-6 md:mt-12 max-w-2xl mx-auto leading-relaxed font-light">
            Calculate your net take-home pay, 1099 deductions, and LLC tax savings in seconds.
          </p>
        </div>
      </section>

      {/* Main Calculator Split-Pane */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 -mt-6 md:-mt-12 relative z-10">
        <TaxCalculator />
      </div>

      {/* Comparison Section */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="bg-zinc-900/50 rounded-3xl p-8 md:p-12 overflow-hidden relative shadow-2xl border border-zinc-800/80 backdrop-blur-sm">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
          <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">Switching to Freelance?</h2>
              <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                A $100k salary and $100k freelance income are NOT the same. Use our "Battle Tool" to find your break-even hourly rate.
              </p>
              <Link 
                href="/compare/1099-vs-w2" 
                className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-xl font-bold hover:bg-zinc-200 transition-all duration-300 group shadow-lg shadow-white/10"
              >
                Compare 1099 vs W2 <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="hidden md:flex justify-center">
              <div className="relative">
                <BarChart3 size={200} className="text-zinc-700/20" />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent" />
              </div>
            </div>
          </div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-indigo-500 rounded-full blur-[100px] opacity-[0.07] pointer-events-none" />
        </div>
      </section>

      {/* Industries Section */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center">
            <ShieldCheck className="text-indigo-500" size={20} />
          </div>
          <h2 className="text-2xl font-bold text-white tracking-tight">Specialized Industry Tools</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {topIndustries.map((ind) => (
            <Link 
              key={ind.slug} 
              href={`/calculator/${ind.slug}`}
              className="group bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800 hover:border-indigo-500/50 hover:bg-zinc-800/30 transition-all duration-300 shadow-xl hover:shadow-indigo-500/10 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <p className="text-sm font-bold text-zinc-600 uppercase tracking-widest mb-2">Industry</p>
              <h3 className="text-lg font-bold text-zinc-100 group-hover:text-white transition-colors tracking-tight">
                {ind.name}
              </h3>
              <div className="mt-4 flex items-center text-xs font-bold text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                OPEN CALCULATOR <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Trust Section */}
      <section className="max-w-3xl mx-auto px-6 mt-20 text-center border-t border-zinc-800 pt-20">
        <h2 className="text-xl font-bold text-white mb-6 tracking-tight">Why Freelancers Trust CalculateFreelance</h2>
        <p className="text-zinc-500 leading-relaxed italic text-lg">
          "Most tax calculators are built for W2 employees. We built this specifically for the 1099 economy, 
          incorporating the 2026 QBI deduction and Self-Employment tax adjustments."
        </p>
      </section>

      {/* Quick Links Hub */}
      <section className="max-w-4xl mx-auto px-4 mt-12">
        <div className="bg-zinc-900/30 border border-zinc-800/60 rounded-2xl p-6 backdrop-blur-sm text-center">
          <p className="text-zinc-400 text-sm mb-4">Looking for something specific?</p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm font-medium">
            <Link 
              href="/1099-tax-calculator" 
              className="text-indigo-400 hover:text-white transition-colors"
            >
              1099 Estimator
            </Link>
            <span className="text-zinc-600">•</span>
            <Link 
              href="/llc-tax-calculator" 
              className="text-indigo-400 hover:text-white transition-colors"
            >
              LLC Savings
            </Link>
            <span className="text-zinc-600">•</span>
            <Link 
              href="/compare/1099-vs-w2" 
              className="text-indigo-400 hover:text-white transition-colors"
            >
              W2 vs 1099 Compare
            </Link>
          </div>
        </div>
      </section>

      {/* Tax Guide Accordion */}
      <div className="max-w-4xl mx-auto px-4">
        <TaxGuideAccordion />
      </div>
    </main>
  );
}
