import TaxCalculator from '@/components/TaxCalculator';
import TaxGuideAccordion from '@/components/TaxGuideAccordion';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function Tax1099Page() {
  return (
    <main className="bg-black text-zinc-50 min-h-screen pb-20 antialiased">
      {/* Breadcrumb */}
      <div className="max-w-4xl mx-auto px-4 pt-8">
        <nav className="flex items-center gap-2 text-sm text-zinc-500">
          <Link href="/" className="hover:text-zinc-300 transition-colors">
            Home
          </Link>
          <ChevronRight size={16} />
          <span className="text-zinc-300">1099 Tax Calculator</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-zinc-800 bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/40 to-transparent pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="relative max-w-4xl mx-auto text-center px-6 py-12 md:py-24">
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-[1.1]">
            1099 Tax Calculator & <br />
            <span className="bg-gradient-to-r from-indigo-400 to-indigo-600 bg-clip-text text-transparent">Self-Employment Tax Estimator</span>
          </h1>
          
          <p className="text-zinc-400 text-lg md:text-xl mt-6 max-w-2xl mx-auto leading-relaxed font-light">
            Calculate your 1099 net income after Federal, State, and Self-Employment (FICA) taxes. Updated for 2026 tax brackets.
          </p>
        </div>
      </section>

      {/* Main Calculator Split-Pane */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 -mt-6 md:-mt-12 relative z-10">
        <TaxCalculator defaultMode="freelance" showSeBreakdown />
      </div>

      {/* Pro Tip Card */}
      <div className="max-w-4xl mx-auto px-4 mt-12">
        <Link 
          href="/"
          className="block bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 backdrop-blur-sm shadow-2xl hover:border-indigo-500/50 transition-all duration-300 group"
        >
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <p className="text-indigo-400 text-xs font-bold uppercase tracking-widest mb-1">Pro Tip</p>
              <p className="text-white font-semibold group-hover:text-indigo-300 transition-colors">
                Paying too much in 1099 tax? Check if an LLC S-Corp could save you money
              </p>
            </div>
            <ChevronRight size={20} className="text-zinc-600 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all shrink-0 mt-1" />
          </div>
        </Link>
      </div>

      {/* SEO Knowledge Layer Accordion */}
      <div className="max-w-4xl mx-auto px-4 mt-16">
        <TaxGuideAccordion 
          hideHeader 
          customData={[
            {
              id: 'how-calculated',
              title: 'How is 1099 Tax Calculated?',
              content: `1099 income is subject to both standard Income Tax and the 15.3% Self-Employment tax. The good news is that you only pay tax on your Net Profit, which is your total income minus your legitimate business expenses. Using a 1099 tax estimator like this one helps you plan for quarterly payments and avoid year-end surprises.`,
            },
            {
              id: 'tax-rate-2026',
              title: 'What is the 1099 Tax Rate for 2026?',
              content: `The Self-Employment tax rate for 2026 consists of 12.4% for Social Security and 2.9% for Medicare, totaling 15.3%. The Social Security portion applies only up to the 2026 wage base limit, while the Medicare portion applies to all earnings. High earners may also be subject to an additional 0.9% Medicare surtax.`,
            },
            {
              id: 'common-deductions',
              title: 'Common 1099 Deductions to Lower Your Bill',
              content: `To lower your taxable income, track all ordinary and necessary business expenses. Common deductions include software subscriptions, home office space, professional equipment, and health insurance premiums. Additionally, you can deduct 50% of your self-employment tax when calculating your adjusted gross income, which helps offset the FICA tax burden.`,
            },
          ]} 
        />
      </div>

      {/* Footer Note */}
      <div className="max-w-4xl mx-auto px-4 mt-12 text-center">
        <p className="text-xs text-zinc-600 font-mono">
          ESTIMATES BASED ON 2026 TAX LAW • FOR EDUCATIONAL PURPOSES ONLY
        </p>
      </div>
    </main>
  );
}
