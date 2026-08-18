import TaxCalculator from '@/components/TaxCalculator';
import TaxGuideAccordion from '@/components/TaxGuideAccordion';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export const metadata = {
  title: 'LLC Tax Calculator 2025–2026 | S-Corp vs Sole Proprietorship Savings',
  description: 'Calculate how much you save in self-employment taxes by electing S-Corp status for your LLC. Free calculator for freelancers and contractors. Updated for 2026 tax brackets.',
};

export default function LLCPage() {
  return (
    <main className="bg-black text-zinc-50 min-h-screen pb-20 antialiased">
      {/* Breadcrumb */}
      

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-zinc-800 bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/40 to-transparent pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="relative max-w-4xl mx-auto px-4 pt-6 md:pt-8">
<nav className="flex items-center gap-2 text-sm text-zinc-500">
          <Link href="/" className="hover:text-zinc-300 transition-colors">
            Home
          </Link>
          <ChevronRight size={16} />
          <span className="text-zinc-300">LLC Tax Savings Calculator</span>
        </nav>
      </div>

      <div className="relative max-w-4xl mx-auto text-center px-6 py-12 md:py-24">
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-[1.1]">
            LLC Tax Savings Calculator: <br />
            <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">S-Corp vs. Sole Proprietorship</span>
          </h1>
          
          <p className="text-zinc-400 text-lg md:text-xl mt-6 max-w-2xl mx-auto leading-relaxed font-light">
            Calculate how much you could save in self-employment taxes by switching from a 1099 Sole Prop to an LLC taxed as an S-Corp.
          </p>
        </div>
      </section>

      {/* Main Calculator Split-Pane */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 -mt-6 md:-mt-12 relative z-10">
        <TaxCalculator defaultMode="llc" />
      </div>

      {/* CTA Card */}
      <div className="max-w-4xl mx-auto px-4 mt-12">
        <Link 
          href="/1099-tax-calculator"
          className="block bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 backdrop-blur-sm shadow-2xl hover:border-indigo-500/50 transition-all duration-300 group"
        >
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <div>
              <p className="text-indigo-400 text-xs font-bold uppercase tracking-widest mb-1">Not sure about LLCs yet?</p>
              <p className="text-white font-semibold group-hover:text-indigo-300 transition-colors">
                Estimate your basic 1099 taxes first
              </p>
            </div>
            <ChevronRight size={20} className="text-zinc-600 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all shrink-0 mt-1" />
          </div>
        </Link>
      </div>

      {/* SEO Knowledge Layer Accordion */}
      <div className="max-w-4xl mx-auto px-4 mt-16">
        <h2 className="text-xl font-bold text-white mb-6 tracking-tight max-w-4xl mx-auto px-4">
          LLC Tax Savings Guide: S-Corp Election Explained
        </h2>
        <TaxGuideAccordion 
          hideHeader 
          customData={[
            {
              id: 's-corp-election',
              title: 'How does an LLC save you money on taxes?',
              content: `The key is filing for an "S-Corp Election." By default, an LLC is taxed as a Sole Proprietorship, meaning you pay self-employment (SE) tax on all profits. With an S-Corp, you must pay yourself a "Reasonable Salary." You only pay the 15.3% SE tax on that salary portion. The remaining profit (distributions) is exempt from SE tax, saving you thousands annually.`,
            },
            {
              id: 'golden-rule',
              title: 'When is it worth switching to an S-Corp?',
              content: `The general "Golden Rule" is to consider an S-Corp when your net profit consistently exceeds $60,000 to $70,000 per year. Below this threshold, the administrative costs and complexity of running payroll may outweigh the SE tax savings. Use our calculator above to see your specific savings for your income level.`,
            },
            {
              id: 'reasonable-salary',
              title: 'What is a "Reasonable Salary" for the IRS?',
              content: `The IRS requires that S-Corp owners pay themselves what a typical employee in their field would earn for similar work. Factors include your industry, location, experience, and hours worked. Paying yourself $0 or an unreasonably low salary to avoid SE tax is a major red flag for audits. Research salary data on sites like Glassdoor or the Bureau of Labor Statistics to justify your number.`,
            },
            {
              id: 'llc-costs',
              title: 'What does it actually cost to form and run an LLC?',
              content: `Forming an LLC typically costs $50–$500 in state filing fees depending on your state — California is the most expensive at $70 to file plus an $800 annual franchise tax. Beyond formation, running an S-Corp LLC adds ongoing costs: payroll software ($500–$1,500/year), an accountant or CPA for the S-Corp election and annual tax return ($1,000–$3,000/year), and quarterly payroll tax filings. This is why the $60,000–$70,000 profit threshold matters — below it, these costs can easily cancel out your SE tax savings.`,
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
