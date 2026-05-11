import ComparisonTool from '@/components/ComparisonTool';
import TaxGuideAccordion from '@/components/TaxGuideAccordion';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export const metadata = {
  title: 'W2 vs. 1099 Calculator: Compare Salary vs. Freelance Pay',
  description: 'Determine your 1099 equivalent hourly rate and true take-home pay after self-employment taxes, healthcare, and business expenses.',
};

export default function ComparePage() {
  return (
    <main className="bg-black text-zinc-50 min-h-screen pb-20 antialiased">
      {/* Breadcrumb */}
      <div className="max-w-4xl mx-auto px-4 pt-8">
        <nav className="flex items-center gap-2 text-sm text-zinc-500">
          <Link href="/" className="hover:text-zinc-300 transition-colors">
            Home
          </Link>
          <ChevronRight size={16} />
          <span className="text-zinc-300">W2 vs 1099 Comparison</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-zinc-800 bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/40 to-transparent pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="relative max-w-4xl mx-auto text-center px-6 py-12 md:py-24">
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-[1.1]">
            W2 vs. 1099 Calculator: <br />
            <span className="bg-gradient-to-r from-indigo-400 to-indigo-600 bg-clip-text text-transparent">Compare Salary vs. Freelance Pay</span>
          </h1>
          
          <p className="text-zinc-400 text-lg md:text-xl mt-6 max-w-2xl mx-auto leading-relaxed font-light">
            Determine your "1099 Equivalent" hourly rate and see your true take-home pay after self-employment taxes, healthcare, and business expenses.
          </p>
        </div>
      </section>

      {/* Main Comparison Tool */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 -mt-6 md:-mt-12 relative z-10 py-12">
        <ComparisonTool />
      </div>

      {/* SEO Knowledge Layer Accordion */}
      <div className="max-w-4xl mx-auto px-4 mt-16">
        <TaxGuideAccordion 
          hideHeader 
          customData={[
            {
              id: '1099-vs-w2',
              title: 'Is 1099 better than W2?',
              content: `The choice between W2 and 1099 involves significant trade-offs. W2 employment offers stability, predictable income, and employer-paid taxes (covering 7.65% of FICA). In contrast, 1099 freelancing offers higher gross pay and massive tax deductions for business expenses, software, and home offices. However, the freelancer must pay both halves of the 15.3% Self-Employment tax and cover their own health insurance. The "best" option depends entirely on your risk tolerance, desired income, and ability to manage business logistics.`,
            },
            {
              id: 'freelance-premium',
              title: 'The "Freelance Premium" Rule',
              content: `Industry experts advise that a fair 1099 hourly rate should be roughly 30% higher than an equivalent W2 salary to account for the lack of employer benefits and the double-sided Social Security tax. If a W2 job pays $30/hr, a freelancer should aim for at least $39/hr to break even—and higher to truly profit. This "Freelance Premium" ensures you aren't taking a pay cut for the flexibility of self-employment.`,
            },
            {
              id: 'hidden-costs',
              title: 'Hidden Costs of Freelancing',
              content: `Before switching to 1099, calculate the full cost of being your own boss. Key hidden costs include health insurance premiums (often $5,000-$10,000/year), the full 15.3% Self-Employment tax obligation, and the cost of "unpaid" vacation days. If you take two weeks off, that's two weeks of zero income. These factors make the W2 vs. 1099 decision much more complex than simply comparing gross numbers.`,
            },
          ]} 
        />
      </div>

      {/* Internal Link CTA */}
      <div className="max-w-4xl mx-auto px-4 mt-12">
        <Link 
          href="/llc-tax-calculator"
          className="block bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 backdrop-blur-sm shadow-2xl hover:border-indigo-500/50 transition-all duration-300 group"
        >
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-1">Ready to maximize your 1099 income?</p>
              <p className="text-white font-semibold group-hover:text-emerald-300 transition-colors">
                Saving over $60k? See how much an LLC S-Corp saves you
              </p>
            </div>
            <ChevronRight size={20} className="text-zinc-600 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all shrink-0 mt-1" />
          </div>
        </Link>
      </div>

      {/* Footer Note */}
      <div className="max-w-4xl mx-auto px-4 mt-12 text-center">
        <p className="text-xs text-zinc-600 font-mono">
          ESTIMATES BASED ON 2026 TAX LAW • FOR EDUCational PURPOSES ONLY
        </p>
      </div>
    </main>
  );
}
