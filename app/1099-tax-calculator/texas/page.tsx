import TaxCalculator from '@/components/TaxCalculator';
import TaxGuideAccordion from '@/components/TaxGuideAccordion';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '1099 Tax Calculator Texas 2025–2026 | Freelancer & Contractor Tax Estimator',
  description: 'Free 1099 tax calculator for Texas freelancers. Texas has no state income tax — see exactly what you owe in federal and self-employment taxes. Updated for 2026.',
};

export default function TexasPage() {
  return (
    <main className="bg-black text-zinc-50 min-h-screen pb-20 antialiased">
      {/* Breadcrumb */}
      

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-zinc-800 bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/40 to-transparent pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="relative max-w-4xl mx-auto px-4 pt-6 md:pt-8">
<nav className="flex items-center gap-2 text-sm text-zinc-500">
          <Link href="/" className="hover:text-zinc-300 transition-colors">
            Home
          </Link>
          <ChevronRight size={16} />
          <Link href="/1099-tax-calculator" className="hover:text-zinc-300 transition-colors">
            1099 Tax Calculator
          </Link>
          <ChevronRight size={16} />
          <span className="text-zinc-300">Texas</span>
        </nav>
      </div>

      <div className="relative max-w-4xl mx-auto text-center px-6 py-12 md:py-24">
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-[1.1]">
            1099 Tax Calculator Texas 2025–2026 & <br />
            <span className="bg-gradient-to-r from-indigo-400 to-indigo-600 bg-clip-text text-transparent">No State Income Tax — Lower Bills for TX Freelancers</span>
          </h1>
          
          <p className="text-zinc-400 text-lg md:text-xl mt-6 max-w-2xl mx-auto leading-relaxed font-light">
            Texas 1099 contractors pay no state income tax — only federal income tax and the 15.3% Self-Employment tax. Use the calculator to see your exact bill. Updated for 2026 tax brackets.
          </p>
        </div>
      </section>

      {/* Main Calculator Split-Pane */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 -mt-6 md:-mt-12 relative z-10">
        <TaxCalculator defaultMode="freelance" showSeBreakdown />
      </div>

      {/* Texas Tax Info Section */}
      <article className="max-w-3xl mx-auto px-4 mt-16">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Texas 1099 Tax Overview</h2>
        <p className="text-zinc-400 leading-relaxed mb-8">
          Texas freelancers have one major tax advantage: no state income tax. While a contractor in California pays up to 13.3% on top of federal taxes, a Texas contractor pays $0 to the state. Your 1099 bill in Texas consists of federal income tax plus the 15.3% Self-Employment tax only.
        </p>

        <h2 className="text-xl md:text-2xl font-bold text-white mb-4">What Texas 1099 contractors owe in 2026</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border-collapse">
            <thead>
              <tr className="border-b border-zinc-800 text-zinc-400 uppercase text-xs tracking-wider">
                <th className="py-3 pr-4 font-medium">Net 1099 Income</th>
                <th className="py-3 pr-4 font-medium">SE Tax</th>
                <th className="py-3 pr-4 font-medium">Federal Income Tax</th>
                <th className="py-3 pr-4 font-medium">Total Tax</th>
                <th className="py-3 font-medium">Effective Rate</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['$40,000', '$5,652', '$2,836', '$8,488', '~21%'],
                ['$60,000', '$8,478', '$5,836', '$14,314', '~24%'],
                ['$80,000', '$11,304', '$9,836', '$21,140', '~26%'],
                ['$100,000', '$14,130', '$14,836', '$28,966', '~29%'],
                ['$150,000', '$16,377', '$28,711', '$45,088', '~30%'],
              ].map((row, i) => (
                <tr key={i} className="border-b border-zinc-800 text-zinc-300">
                  {row.map((cell, j) => (
                    <td key={j} className="py-3 pr-4">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-zinc-500 text-xs mt-2">Estimates assume single filer, standard deduction, no additional deductions. Use the calculator above for your exact figures.</p>

        <h2 className="text-xl md:text-2xl font-bold text-white mt-12 mb-4">Texas vs other states at $80,000 net income</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border-collapse">
            <thead>
              <tr className="border-b border-zinc-800 text-zinc-400 uppercase text-xs tracking-wider">
                <th className="py-3 pr-4 font-medium">State</th>
                <th className="py-3 pr-4 font-medium">State Income Tax</th>
                <th className="py-3 pr-4 font-medium">Total Tax Bill</th>
                <th className="py-3 font-medium">vs Texas</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Texas', '$0', '~$21,140', '—'],
                ['Florida', '$0', '~$21,140', '$0'],
                ['Nevada', '$0', '~$21,140', '$0'],
                ['New York', '~$5,120', '~$26,260', '+$5,120'],
                ['California', '~$6,180', '~$27,320', '+$6,180'],
                ['Oregon', '~$6,400', '~$27,540', '+$6,400'],
              ].map((row, i) => (
                <tr key={i} className="border-b border-zinc-800 text-zinc-300">
                  {row.map((cell, j) => (
                    <td key={j} className="py-3 pr-4">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </article>

      {/* Quarterly Deadlines */}
      <section className="max-w-3xl mx-auto px-4 mt-16">
        <h2 className="text-xl md:text-2xl font-bold text-white mb-4">Quarterly estimated tax deadlines for Texas freelancers</h2>
        <p className="text-zinc-400 leading-relaxed mb-4">
          Texas 1099 contractors only pay federal estimated taxes — no state quarterly payments. The 2026 federal deadlines are:
        </p>
        <ul className="space-y-2 text-zinc-300 list-disc list-inside">
          <li><span className="text-indigo-400 font-semibold">April 15</span> — Q1 (January–March income)</li>
          <li><span className="text-indigo-400 font-semibold">June 16</span> — Q2 (April–May income)</li>
          <li><span className="text-indigo-400 font-semibold">September 15</span> — Q3 (June–August income)</li>
          <li><span className="text-indigo-400 font-semibold">January 15, 2027</span> — Q4 (September–December income)</li>
        </ul>
        <p className="text-zinc-400 leading-relaxed mt-4">
          A safe rule of thumb for Texas contractors is to set aside 25–28% of every payment — lower than the 30–35% often recommended in high-tax states because there is no state tax.
        </p>
      </section>

      {/* CTA Card */}
      <div className="max-w-4xl mx-auto px-4 mt-12">
        <Link 
          href="/llc-tax-calculator"
          className="block bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 backdrop-blur-sm shadow-2xl hover:border-indigo-500/50 transition-all duration-300 group"
        >
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <p className="text-indigo-400 text-xs font-bold uppercase tracking-widest mb-1">Texas Freelancers Earning Over $60k</p>
              <p className="text-white font-semibold group-hover:text-indigo-300 transition-colors">
                See how much an LLC S-Corp saves you on federal SE tax
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
              id: 'texas-state-tax',
              title: 'Does Texas have a state income tax for 1099 contractors?',
              content: `No. Texas has no personal state income tax. 1099 contractors in Texas only pay federal income tax and the 15.3% Self-Employment tax. There is no state-level 1099 tax obligation, which saves the average freelancer $3,000–$8,000 per year compared to mid-to-high-tax states.`,
            },
            {
              id: 'texas-set-aside',
              title: 'How much should a Texas freelancer set aside for taxes?',
              content: `25–28% of net income after deductions is a safe range for most Texas freelancers. This is lower than the 30–35% often recommended in high-tax states because Texas has no state income tax. Use the calculator above to get your exact quarterly payment amount.`,
            },
            {
              id: 'texas-se-tax',
              title: 'Do Texas freelancers still pay self-employment tax?',
              content: `Yes. Self-employment tax is a federal obligation and applies equally in all 50 states regardless of state income tax laws. Texas contractors pay the same 15.3% SE tax as contractors in New York or California — the only difference is the absence of state income tax on top of that.`,
            },
            {
              id: 'texas-llc',
              title: 'When should a Texas freelancer form an LLC?',
              content: `If your net profit consistently exceeds $60,000–$70,000 per year, an LLC taxed as an S-Corp can save $3,000–$10,000 annually by splitting income between salary and distributions at the federal level. Texas does not impose a franchise tax on sole proprietors, so the savings are purely federal SE tax. Administrative costs typically run $1,500–$3,000 per year, leaving a clear net benefit above the threshold.`,
            },
            {
              id: 'texas-good-state',
              title: 'Is Texas a good state for freelancers?',
              content: `From a tax standpoint, yes — no state income tax saves the average freelancer $3,000–$8,000 per year compared to mid-to-high-tax states. The main caveat is Texas property taxes, which are among the highest in the country. If you rent rather than own, Texas is one of the most financially favorable states for 1099 work in the US.`,
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
