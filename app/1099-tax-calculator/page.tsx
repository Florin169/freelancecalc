import TaxCalculator from '@/components/TaxCalculator';
import TaxGuideAccordion from '@/components/TaxGuideAccordion';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '1099 Tax Calculator 2025–2026 | Freelancer & Contractor Tax Estimator',
  description: 'Free 1099 tax calculator for freelancers and contractors. Estimate your 2025–2026 federal, state, and self-employment taxes in seconds. See exactly what you owe and what deductions lower your bill.',
};

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
            1099 Tax Calculator 2025–2026 & <br />
            <span className="bg-gradient-to-r from-indigo-400 to-indigo-600 bg-clip-text text-transparent">Self-Employment Tax Estimator</span>
          </h1>
          
          <p className="text-zinc-400 text-lg md:text-xl mt-6 max-w-2xl mx-auto leading-relaxed font-light">
            Find out exactly how much you&rsquo;ll owe in Federal, State, and Self-Employment taxes — and what deductions can lower your bill. Updated for 2026 tax brackets.
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

      {/* Content Links */}
      <div className="max-w-4xl mx-auto px-4 mt-6 flex flex-col sm:flex-row gap-3">
        <Link
          href="/guides/w2-vs-1099"
          className="flex items-center gap-2 text-sm bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 hover:border-indigo-500/50 transition-colors group"
        >
          <span className="text-zinc-400">Comparing W2 vs 1099?</span>
          <span className="text-indigo-400 group-hover:text-indigo-300">Read the full guide →</span>
        </Link>
        <Link
          href="/1099-tax-calculator/texas"
          className="flex items-center gap-2 text-sm bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 hover:border-indigo-500/50 transition-colors group"
        >
          <span className="text-zinc-400">Based in Texas?</span>
          <span className="text-indigo-400 group-hover:text-indigo-300">See the Texas guide →</span>
        </Link>
        <Link
          href="/1099-tax-calculator/california"
          className="flex items-center gap-2 text-sm bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 hover:border-indigo-500/50 transition-colors group"
        >
          <span className="text-zinc-400">Based in California?</span>
          <span className="text-indigo-400 group-hover:text-indigo-300">See the California guide →</span>
        </Link>
        <Link
          href="/1099-tax-calculator/florida"
          className="flex items-center gap-2 text-sm bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 hover:border-indigo-500/50 transition-colors group"
        >
          <span className="text-zinc-400">Based in Florida?</span>
          <span className="text-indigo-400 group-hover:text-indigo-300">See the Florida guide →</span>
        </Link>
      </div>

      {/* SEO Knowledge Layer Accordion */}
      <div className="max-w-4xl mx-auto px-4 mt-16">
        <h2 className="text-xl font-bold text-white mb-6 tracking-tight max-w-4xl mx-auto px-4">
          1099 Tax Guide: Common Questions Answered
        </h2>
        <TaxGuideAccordion 
          hideHeader 
          customData={[
            {
              id: 'how-calculated',
              title: 'How is 1099 tax calculated?',
              content: `1099 income is subject to both standard Income Tax and the 15.3% Self-Employment tax. You only pay tax on your Net Profit — your total income minus legitimate business expenses. For example, if you earn $80,000 but have $15,000 in deductions, you only pay tax on $65,000.`,
            },
            {
              id: 'tax-rate-2026',
              title: 'What is the 1099 tax rate in 2026?',
              content: `The Self-Employment tax rate for 2026 is 15.3% — 12.4% for Social Security and 2.9% for Medicare. The Social Security portion applies only up to the 2026 wage base limit of $184,500 (up from $176,100 in 2025); Medicare applies to all earnings. High earners pay an additional 0.9% Medicare surtax above $200,000.`,
            },
            {
              id: 'set-aside-30',
              title: 'Why do people say to set aside 30% for 1099 taxes?',
              content: `The 30% rule of thumb comes from combining two tax obligations: roughly 15.3% in Self-Employment tax plus approximately 15% in federal income tax for a median earner. That adds up to around 30% of net income. Your actual number depends on your income level, state, and deductions — use the calculator above for a precise figure.`,
            },
            {
              id: 'common-deductions',
              title: 'Common 1099 deductions to lower your bill',
              content: `The biggest deduction most freelancers miss is the home office deduction. Beyond that, track software subscriptions, professional equipment, health insurance premiums, and business travel. You can also deduct half of your self-employment tax bill when calculating adjusted gross income — at $50,000 net income that saves you roughly $1,100–$1,500. Every deduction reduces the income the calculator taxes you on.`,
            },
            {
              id: 'six-hundred-rule',
              title: 'What is the $600 rule for 1099?',
              content: `If a client pays you $600 or more in a calendar year, they are required to send you a 1099-NEC form reporting that income to the IRS. You owe tax on all self-employment income regardless of whether you receive a 1099 — the form is just a reporting mechanism, not a threshold for owing taxes.`,
            },
            {
              id: 'set-aside-amount',
              title: 'How much should I set aside for taxes as a 1099 contractor?',
              content: `A safe starting point is 25–30% of your net income after deductions. If you are in a higher income bracket or a high-tax state, lean toward 30–35%. Use the calculator above to get your specific number, then divide by four for quarterly estimated tax payments.`,
            },
          ]} 
        />
      </div>

      {/* Calculate by State */}
      <div className="max-w-4xl mx-auto px-4 mt-12 flex flex-col gap-3">
        <Link
          href="/1099-tax-calculator/texas"
          className="block bg-zinc-900/50 border border-zinc-800 rounded-xl px-6 py-4 text-center hover:border-indigo-500/50 transition-all duration-300 group"
        >
          <p className="text-zinc-300 group-hover:text-indigo-300 transition-colors font-medium">
            Calculating taxes in Texas? See our Texas-specific guide <span className="text-indigo-400">&rarr;</span>
          </p>
        </Link>
        <Link
          href="/1099-tax-calculator/california"
          className="block bg-zinc-900/50 border border-zinc-800 rounded-xl px-6 py-4 text-center hover:border-indigo-500/50 transition-all duration-300 group"
        >
          <p className="text-zinc-300 group-hover:text-indigo-300 transition-colors font-medium">
            Calculating taxes in California? See our California-specific guide <span className="text-indigo-400">&rarr;</span>
          </p>
        </Link>
        <Link
          href="/1099-tax-calculator/florida"
          className="block bg-zinc-900/50 border border-zinc-800 rounded-xl px-6 py-4 text-center hover:border-indigo-500/50 transition-all duration-300 group"
        >
          <p className="text-zinc-300 group-hover:text-indigo-300 transition-colors font-medium">
            Calculating taxes in Florida? See our Florida-specific guide <span className="text-indigo-400">&rarr;</span>
          </p>
        </Link>
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
