import TaxCalculator from '@/components/TaxCalculator';
import TaxGuideAccordion from '@/components/TaxGuideAccordion';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '1099 Tax Calculator California (2026) — Freelancer & Contractor Tax Estimator',
  description: 'Free 1099 tax calculator for California freelancers. CA has the highest state income tax in the US — see your exact federal, state, and SE tax bill. Updated for 2026.',
};

export default function CaliforniaPage() {
  return (
    <main className="bg-black text-zinc-50 min-h-screen pb-20 antialiased">
      {/* Breadcrumb */}
      <div className="max-w-4xl mx-auto px-4 pt-8">
        <nav className="flex items-center gap-2 text-sm text-zinc-500">
          <Link href="/" className="hover:text-zinc-300 transition-colors">
            Home
          </Link>
          <ChevronRight size={16} />
          <Link href="/1099-tax-calculator" className="hover:text-zinc-300 transition-colors">
            1099 Tax Calculator
          </Link>
          <ChevronRight size={16} />
          <span className="text-zinc-300">California</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-zinc-800 bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/40 to-transparent pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="relative max-w-4xl mx-auto text-center px-6 py-12 md:py-24">
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-[1.1]">
            1099 Tax Calculator California 2025–2026 & <br />
            <span className="bg-gradient-to-r from-indigo-400 to-indigo-600 bg-clip-text text-transparent">What Freelancers Actually Owe in the Highest-Tax State</span>
          </h1>
          
          <p className="text-zinc-400 text-lg md:text-xl mt-6 max-w-2xl mx-auto leading-relaxed font-light">
            California is the most expensive state for 1099 contractors. On top of federal income tax and 15.3% SE tax, California adds up to 13.3% state income tax — the highest rate in the US. Updated for 2026.
          </p>
        </div>
      </section>

      {/* Main Calculator Split-Pane */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 -mt-6 md:-mt-12 relative z-10">
        <TaxCalculator defaultMode="freelance" showSeBreakdown />
      </div>

      {/* California Tax Info Section */}
      <article className="max-w-3xl mx-auto px-4 mt-16">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">How 1099 taxes work in California</h2>
        <p className="text-zinc-400 leading-relaxed mb-8">
          California 1099 contractors face four separate tax obligations: federal income tax, Self-Employment tax (15.3% on 92.35% of net earnings), California state income tax (progressive up to 13.3%), and California State Disability Insurance (SDI) at 1.1% in 2026. At $100,000 in net income, a California freelancer owes roughly $12,000–$15,000 more than an equivalent contractor in Texas or Florida.
        </p>

        <h2 className="text-xl md:text-2xl font-bold text-white mb-4">What a California 1099 contractor actually owes in 2026</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border-collapse">
            <thead>
              <tr className="border-b border-zinc-800 text-zinc-400 uppercase text-xs tracking-wider">
                <th className="py-3 pr-4 font-medium">Net 1099 Income</th>
                <th className="py-3 pr-4 font-medium">SE Tax</th>
                <th className="py-3 pr-4 font-medium">Federal Income Tax</th>
                <th className="py-3 pr-4 font-medium">CA State Tax</th>
                <th className="py-3 pr-4 font-medium">CA SDI</th>
                <th className="py-3 pr-4 font-medium">Total Tax</th>
                <th className="py-3 font-medium">Effective Rate</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['$40,000', '$5,652', '$2,836', '$1,428', '$440', '$10,356', '~26%'],
                ['$60,000', '$8,478', '$5,836', '$2,868', '$660', '$17,842', '~30%'],
                ['$80,000', '$11,304', '$9,836', '$4,908', '$880', '$26,928', '~34%'],
                ['$100,000', '$14,130', '$14,836', '$7,448', '$1,100', '$37,514', '~38%'],
                ['$150,000', '$16,377', '$28,711', '$14,498', '$1,650', '$61,236', '~41%'],
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
        <p className="text-zinc-500 text-xs mt-2">Estimates assume single filer, standard deduction, no additional business deductions. Use the calculator above for your exact figures.</p>

        <h2 className="text-xl md:text-2xl font-bold text-white mt-12 mb-4">California vs other states: the real cost difference</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border-collapse">
            <thead>
              <tr className="border-b border-zinc-800 text-zinc-400 uppercase text-xs tracking-wider">
                <th className="py-3 pr-4 font-medium">State</th>
                <th className="py-3 pr-4 font-medium">State Tax + SDI</th>
                <th className="py-3 pr-4 font-medium">Total Tax at $100k</th>
                <th className="py-3 font-medium">vs California</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['California', '~$8,548', '~$37,514', '—'],
                ['New York', '~$6,680', '~$35,646', '-$1,868'],
                ['Oregon', '~$7,200', '~$36,166', '-$1,348'],
                ['Texas', '$0', '~$28,966', '-$8,548'],
                ['Florida', '$0', '~$28,966', '-$8,548'],
                ['Nevada', '$0', '~$28,966', '-$8,548'],
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

      {/* California Deductions */}
      <section className="max-w-3xl mx-auto px-4 mt-16">
        <h2 className="text-xl md:text-2xl font-bold text-white mb-4">California deductions that lower your 1099 tax bill</h2>
        <div className="space-y-6 text-zinc-400 leading-relaxed">
          <div>
            <h3 className="text-white font-semibold mb-1">Home office deduction</h3>
            <p>California follows federal home office rules. A dedicated workspace allows you to deduct a proportional share of rent or mortgage, utilities, and internet. At California rent levels, this deduction is often larger than in other states.</p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-1">Self-employment tax deduction</h3>
            <p>You deduct half your SE tax from federal adjusted gross income. California does not allow this same deduction on the state return, which is one of several ways California&apos;s treatment of self-employment income differs from federal rules.</p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-1">Health insurance premiums</h3>
            <p>Often 100% deductible at the federal level for self-employed individuals. California follows this treatment. Given California&apos;s high health insurance costs, this deduction frequently runs $6,000–$15,000 annually.</p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-1">Business equipment and software</h3>
            <p>100% deductible under Section 179 in the year of purchase at the federal level. California has its own Section 179 limits which differ from federal limits — worth confirming with a CPA if you have large equipment purchases.</p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-1">Retirement contributions</h3>
            <p>SEP-IRA contributions up to 25% of net self-employment income reduce both federal and California taxable income. High-earning California freelancers consistently use this as their single largest tax reduction strategy.</p>
          </div>
        </div>
      </section>

      {/* California LLC Rules */}
      <section className="max-w-3xl mx-auto px-4 mt-16">
        <h2 className="text-xl md:text-2xl font-bold text-white mb-4">California LLC rules for freelancers</h2>
        <div className="space-y-4 text-zinc-400 leading-relaxed">
          <p><strong className="text-white">$800 minimum franchise tax</strong> — California charges every LLC an $800 annual minimum franchise tax regardless of income or profit. This applies even in years when the business loses money.</p>
          <p><strong className="text-white">LLC gross receipts fee</strong> — California also charges an additional fee based on LLC gross receipts, not net profit. At $250,000–$499,999 in gross receipts the fee is $900; at $500,000–$999,999 it is $2,500. This is on top of the $800 minimum.</p>
          <p><strong className="text-white">S-Corp election</strong> — California recognizes S-Corp elections but charges a 1.5% franchise tax on net income with an $800 minimum. This is higher than the flat $800 LLC minimum for profitable businesses.</p>
          <p>The S-Corp election still saves money above the $60,000–$70,000 net profit threshold, but the math is more complex than in other states due to these additional California-specific fees.</p>
        </div>
      </section>

      {/* Quarterly Deadlines */}
      <section className="max-w-3xl mx-auto px-4 mt-16">
        <h2 className="text-xl md:text-2xl font-bold text-white mb-4">Quarterly estimated taxes in California</h2>
        <p className="text-zinc-400 leading-relaxed mb-4">
          California 1099 contractors must pay both federal and California estimated taxes quarterly. California&apos;s schedule is slightly different from the federal schedule.
        </p>
        <h3 className="text-white font-semibold mb-2">Federal estimated tax deadlines for 2026:</h3>
        <ul className="space-y-2 text-zinc-300 list-disc list-inside mb-6">
          <li><span className="text-indigo-400 font-semibold">April 15</span> — Q1 (January–March income)</li>
          <li><span className="text-indigo-400 font-semibold">June 16</span> — Q2 (April–May income)</li>
          <li><span className="text-indigo-400 font-semibold">September 15</span> — Q3 (June–August income)</li>
          <li><span className="text-indigo-400 font-semibold">January 15, 2027</span> — Q4 (September–December income)</li>
        </ul>
        <h3 className="text-white font-semibold mb-2">California estimated tax deadlines for 2026:</h3>
        <ul className="space-y-2 text-zinc-300 list-disc list-inside mb-4">
          <li><span className="text-indigo-400 font-semibold">April 15</span> — 30% of estimated annual tax</li>
          <li><span className="text-indigo-400 font-semibold">June 16</span> — 40% of estimated annual tax</li>
          <li><span className="text-zinc-500">No Q3 payment required</span></li>
          <li><span className="text-indigo-400 font-semibold">January 15, 2027</span> — remaining 30%</li>
        </ul>
        <p className="text-zinc-400 leading-relaxed">
          A safe set-aside rate for California freelancers is 35–40% of net income after deductions — significantly higher than the 25–28% recommended for Texas or Florida contractors.
        </p>
      </section>

      {/* FAQ */}
      <div className="max-w-4xl mx-auto px-4 mt-16">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">Frequently asked questions</h2>
        <TaxGuideAccordion 
          hideHeader 
          customData={[
            {
              id: 'ca-state-tax',
              title: 'How much state tax do California 1099 contractors pay?',
              content: `California uses progressive brackets reaching up to 13.3% at the highest income levels. Most freelancers earning $60,000–$150,000 net will pay an effective California state rate of 6–10% on top of federal taxes and SE tax. The combined effective rate for a California contractor at $100,000 net income is approximately 37–38%.`,
            },
            {
              id: 'ca-sdi',
              title: 'What is California SDI for self-employed workers?',
              content: `California State Disability Insurance (SDI) applies to self-employment income at 1.1% in 2026. Unlike W2 employees whose SDI is withheld by employers, self-employed Californians must elect SDI coverage voluntarily through the California EDD. Without electing coverage, you do not pay the SDI tax but also cannot receive disability benefits.`,
            },
            {
              id: 'ca-set-aside',
              title: 'How much should a California freelancer set aside for taxes?',
              content: `35–40% of net income after deductions is the recommended range for California contractors. At higher income levels ($150,000+), lean toward 40–42%. Use the calculator above to get your exact quarterly payment amount based on your specific income and deductions.`,
            },
            {
              id: 'ca-llc-deduction',
              title: 'Can I deduct California\'s $800 LLC minimum franchise tax?',
              content: `Yes. The $800 California minimum franchise tax is a deductible business expense on your federal return, reducing your federal taxable income. It is not deductible on your California return.`,
            },
            {
              id: 'ca-worth-it',
              title: 'Is California worth it for freelancers from a tax perspective?',
              content: `Purely on taxes, no — California is the most expensive state for self-employed workers. However, California also has the largest concentration of high-paying freelance clients, particularly in tech, entertainment, and design. Many freelancers find that higher billing rates more than offset the additional tax burden.`,
            },
          ]} 
        />
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <p className="text-indigo-400 text-xs font-bold uppercase tracking-widest mb-1">California 1099 Tax Calculator</p>
              <p className="text-white font-semibold group-hover:text-indigo-300 transition-colors">
                Use the full calculator to see your exact federal, state, and SE tax bill
              </p>
            </div>
            <ChevronRight size={20} className="text-zinc-600 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all shrink-0 mt-1" />
          </div>
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
