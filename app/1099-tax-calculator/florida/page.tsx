import TaxCalculator from '@/components/TaxCalculator';
import TaxGuideAccordion from '@/components/TaxGuideAccordion';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '1099 Tax Calculator Florida (2026) — Freelancer & Contractor Tax Estimator',
  description: 'Free 1099 tax calculator for Florida freelancers. FL has no state income tax — see your exact federal and self-employment tax bill. Updated for 2026 IRS brackets.',
};

export default function FloridaPage() {
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
          <span className="text-zinc-300">Florida</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-zinc-800 bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/40 to-transparent pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="relative max-w-4xl mx-auto text-center px-6 py-12 md:py-24">
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-[1.1]">
            1099 Tax Calculator Florida 2025–2026 & <br />
            <span className="bg-gradient-to-r from-indigo-400 to-indigo-600 bg-clip-text text-transparent">No State Income Tax — Keep More of What You Earn</span>
          </h1>
          
          <p className="text-zinc-400 text-lg md:text-xl mt-6 max-w-2xl mx-auto leading-relaxed font-light">
            Florida is one of the most tax-friendly states in the country for 1099 contractors — no personal state income tax means your entire bill is federal income tax plus the 15.3% Self-Employment tax. Use the calculator above to see your exact Florida 1099 tax bill.
          </p>
        </div>
      </section>

      {/* Main Calculator Split-Pane */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 -mt-6 md:-mt-12 relative z-10">
        <TaxCalculator defaultMode="freelance" showSeBreakdown />
      </div>

      {/* Florida Tax Info Section */}
      <article className="max-w-3xl mx-auto px-4 mt-16">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">How 1099 taxes work in Florida</h2>
        <p className="text-zinc-400 leading-relaxed mb-4">
          Florida has no personal state income tax and no state disability insurance for self-employed workers. Your 1099 tax bill in Florida consists of exactly two obligations:
        </p>
        <p className="text-zinc-400 leading-relaxed mb-4">
          <span className="text-white font-semibold">Federal income tax</span> — calculated on net profit after deductions at standard federal brackets that apply to all US taxpayers regardless of state.
        </p>
        <p className="text-zinc-400 leading-relaxed mb-8">
          <span className="text-white font-semibold">Self-Employment (SE) tax</span> — 15.3% on 92.35% of net earnings, covering both halves of Social Security (12.4%) and Medicare (2.9%). As a 1099 contractor, you pay both the employer and employee portions since no employer splits it with you.
        </p>
        <p className="text-zinc-400 leading-relaxed mb-8">
          That is it. No state income tax, no state SDI, no Florida franchise tax on sole proprietors. Compared to California&apos;s four-layer tax structure, Florida&apos;s simplicity is a meaningful financial advantage. At $100,000 in net income, a Florida freelancer saves roughly $8,500–$12,000 per year compared to a California contractor doing identical work.
        </p>

        <h2 className="text-xl md:text-2xl font-bold text-white mb-4">What a Florida 1099 contractor actually owes in 2026</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border-collapse">
            <thead>
              <tr className="border-b border-zinc-800 text-zinc-400 uppercase text-xs tracking-wider">
                <th className="py-3 pr-4 font-medium">Net 1099 Income</th>
                <th className="py-3 pr-4 font-medium">SE Tax</th>
                <th className="py-3 pr-4 font-medium">Federal Income Tax</th>
                <th className="py-3 pr-4 font-medium">FL State Tax</th>
                <th className="py-3 pr-4 font-medium">Total Tax</th>
                <th className="py-3 font-medium">Effective Rate</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['$40,000', '$5,652', '$2,836', '$0', '$8,488', '~21%'],
                ['$60,000', '$8,478', '$5,836', '$0', '$14,314', '~24%'],
                ['$80,000', '$11,304', '$9,836', '$0', '$21,140', '~26%'],
                ['$100,000', '$14,130', '$14,836', '$0', '$28,966', '~29%'],
                ['$150,000', '$16,377', '$28,711', '$0', '$45,088', '~30%'],
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
        <p className="text-zinc-500 text-xs mt-2">Estimates assume single filer, standard deduction, no additional business deductions. Use the calculator above for your exact figures. The effective rates above are among the lowest available to US freelancers.</p>

        <h2 className="text-xl md:text-2xl font-bold text-white mt-12 mb-4">Florida vs high-tax states: the real annual savings</h2>
        <p className="text-zinc-400 leading-relaxed mb-4">
          For freelancers relocating from high-tax states, the numbers are concrete enough to justify the move on tax grounds alone at higher income levels.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border-collapse">
            <thead>
              <tr className="border-b border-zinc-800 text-zinc-400 uppercase text-xs tracking-wider">
                <th className="py-3 pr-4 font-medium">State You&apos;re Leaving</th>
                <th className="py-3 pr-4 font-medium">State Tax at $100k</th>
                <th className="py-3 pr-4 font-medium">Annual Savings in FL</th>
                <th className="py-3 font-medium">5-Year Savings</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['California', '~$8,548', '~$8,548', '~$42,740'],
                ['New York', '~$6,680', '~$6,680', '~$33,400'],
                ['New Jersey', '~$5,820', '~$5,820', '~$29,100'],
                ['Illinois', '~$4,950', '~$4,950', '~$24,750'],
                ['Oregon', '~$7,200', '~$7,200', '~$36,000'],
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
        <p className="text-zinc-500 text-xs mt-2">State tax estimates based on 2026 published rates at $100,000 net self-employment income, single filer.</p>
        <p className="text-zinc-400 leading-relaxed mt-4">
          At $150,000 net income, these savings roughly double. A California freelancer relocating to Miami or Tampa saves $14,000–$16,000 annually — enough to cover a significant portion of housing costs in most Florida markets.
        </p>
      </article>

      {/* Deductions Section */}
      <article className="max-w-3xl mx-auto px-4 mt-16">
        <h2 className="text-xl md:text-2xl font-bold text-white mb-4">Deductions that lower your Florida 1099 tax bill</h2>
        <p className="text-zinc-400 leading-relaxed mb-6">
          Because Florida has no state income tax, every deduction you claim reduces your federal bill only. But federal deductions still lower both your income tax and your SE tax, making them doubly valuable.
        </p>
        <div className="space-y-6">
          <div>
            <h3 className="text-white font-semibold mb-1">Home office deduction</h3>
            <p className="text-zinc-400 leading-relaxed">
              A dedicated workspace allows you to deduct a proportional share of rent or mortgage, utilities, and internet at the federal level. Florida&apos;s relatively lower rents outside major metro areas mean this deduction is smaller in dollar terms than in California or New York, but it remains meaningful.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-1">Self-employment tax deduction</h3>
            <p className="text-zinc-400 leading-relaxed">
              You deduct half your SE tax from federal adjusted gross income. At $80,000 net income that is roughly $5,652 deducted, saving approximately $1,300 in federal income tax.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-1">Health insurance premiums</h3>
            <p className="text-zinc-400 leading-relaxed">
              Often 100% deductible for self-employed individuals at the federal level. Florida does not have a state-run marketplace subsidy system beyond federal ACA, so individual coverage costs vary widely. The federal deduction applies in full regardless.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-1">Business equipment and software</h3>
            <p className="text-zinc-400 leading-relaxed">
              Fully deductible under Section 179 in the year of purchase. Developers, designers, video editors, and other Florida freelancers with high equipment costs can expense the full amount immediately rather than depreciating over years.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-1">Retirement contributions</h3>
            <p className="text-zinc-400 leading-relaxed">
              SEP-IRA contributions up to 25% of net self-employment income reduce federal taxable income dollar for dollar. Florida has no state income tax to reduce, so this strategy operates purely at the federal level — but the federal savings are still significant.
            </p>
          </div>
        </div>
      </article>

      {/* Quarterly Deadlines */}
      <section className="max-w-3xl mx-auto px-4 mt-16">
        <h2 className="text-xl md:text-2xl font-bold text-white mb-4">Quarterly estimated taxes in Florida</h2>
        <p className="text-zinc-400 leading-relaxed mb-4">
          Florida 1099 contractors only pay federal estimated taxes. There are no Florida state estimated tax payments because there is no state income tax. The 2026 federal deadlines are:
        </p>
        <ul className="space-y-2 text-zinc-300 list-disc list-inside">
          <li><span className="text-indigo-400 font-semibold">April 15</span> — Q1 (January–March income)</li>
          <li><span className="text-indigo-400 font-semibold">June 16</span> — Q2 (April–May income)</li>
          <li><span className="text-indigo-400 font-semibold">September 15</span> — Q3 (June–August income)</li>
          <li><span className="text-indigo-400 font-semibold">January 15, 2027</span> — Q4 (September–December income)</li>
        </ul>
        <p className="text-zinc-400 leading-relaxed mt-4">
          Missing a quarterly payment triggers an IRS underpayment penalty even if you pay everything owed by April 15. The penalty is calculated per quarter on the underpaid amount, not on the annual total.
        </p>
        <p className="text-zinc-400 leading-relaxed mt-4">
          A safe set-aside rate for Florida freelancers is 25–28% of every payment received throughout the year — the same range as Texas and other no-income-tax states, and significantly lower than the 35–40% recommended for California contractors.
        </p>
      </section>

      {/* Florida LLC Rules */}
      <article className="max-w-3xl mx-auto px-4 mt-16">
        <h2 className="text-xl md:text-2xl font-bold text-white mb-4">Florida LLC rules for freelancers</h2>
        <p className="text-zinc-400 leading-relaxed mb-6">
          Florida is one of the more straightforward states for LLC formation and maintenance.
        </p>
        <div className="space-y-6">
          <div>
            <h3 className="text-white font-semibold mb-1">No state income tax on LLC profits</h3>
            <p className="text-zinc-400 leading-relaxed">
              Florida LLCs taxed as sole proprietorships or S-Corps pay no Florida state income tax on pass-through profits. This makes the federal S-Corp election cleaner in Florida than in states like California that add their own franchise taxes on top.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-1">Florida annual report fee</h3>
            <p className="text-zinc-400 leading-relaxed">
              LLCs must file an annual report with the Florida Division of Corporations at a cost of $138.75. This is the primary ongoing administrative cost, far lower than California&apos;s $800 minimum franchise tax.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-1">S-Corp election savings</h3>
            <p className="text-zinc-400 leading-relaxed mb-4">
              At $60,000–$70,000 in net profit, the federal S-Corp election saves Florida freelancers $3,000–$10,000 annually by splitting income between salary (subject to SE tax) and distributions (exempt from SE tax). Without California&apos;s additional franchise taxes eating into the savings, the math works cleanly at the threshold level.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              Use the <Link href="/llc-tax-calculator" className="text-indigo-400 hover:text-indigo-300 transition-colors underline">LLC tax savings calculator</Link> to model your specific Florida S-Corp savings.
            </p>
          </div>
        </div>
      </article>

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
              <p className="text-indigo-400 text-xs font-bold uppercase tracking-widest mb-1">Florida Freelancers Earning Over $60k</p>
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
              id: 'florida-state-tax',
              title: 'Does Florida have a state income tax for 1099 contractors?',
              content: `No. Florida has no personal state income tax. 1099 contractors in Florida pay only federal income tax and the 15.3% Self-Employment tax. There is no state-level tax obligation on self-employment income.`,
            },
            {
              id: 'florida-set-aside',
              title: 'How much should a Florida freelancer set aside for taxes?',
              content: `25–28% of net income after deductions is the right range for most Florida freelancers. This is lower than the 30–35% often recommended nationally because Florida has no state income tax. Use the calculator above to get your exact quarterly payment amount.`,
            },
            {
              id: 'florida-se-tax',
              title: 'Do Florida freelancers pay self-employment tax?',
              content: `Yes. Self-employment tax is a federal obligation that applies in all 50 states regardless of state income tax laws. Florida contractors pay the same 15.3% SE tax as contractors in California or New York — the only difference is the absence of state income tax on top.`,
            },
            {
              id: 'florida-good-state',
              title: 'Is Florida good for freelancers from a tax perspective?',
              content: `Yes — Florida is consistently ranked among the top states for self-employed workers on tax grounds. No state income tax, no SDI, simple LLC rules, and a low annual report fee make it one of the cleanest environments for 1099 work in the US. The main variable is cost of living, which varies dramatically between Miami and smaller Florida markets.`,
            },
            {
              id: 'florida-effective-rate',
              title: 'What is the total effective tax rate for a Florida 1099 contractor?',
              content: `At $60,000 net income, roughly 24%. At $100,000, roughly 29%. At $150,000, roughly 30%. These figures include federal income tax and SE tax only — no state tax applies in Florida.`,
            },
            {
              id: 'florida-vs-texas',
              title: 'How does Florida compare to Texas for freelancers?',
              content: `Both states have no income tax, so the federal and SE tax obligations are identical. The practical differences are cost of living, climate, and client access. From a pure tax standpoint, Florida and Texas are equivalent — both offer the same base advantage over high-tax states.`,
            },
          ]} 
        />
      </div>

      {/* Final CTA Section */}
      <section className="max-w-3xl mx-auto px-4 mt-16">
        <h2 className="text-xl md:text-2xl font-bold text-white mb-4">Calculate your exact Florida 1099 tax bill</h2>
        <p className="text-zinc-400 leading-relaxed mb-4">
          The table above uses standard assumptions. Your actual bill depends on your filing status, deductions, business expenses, and whether you operate as a sole proprietor or LLC.
        </p>
        <p className="text-zinc-400 leading-relaxed mb-4">
          The <Link href="/1099-tax-calculator" className="text-indigo-400 hover:text-indigo-300 transition-colors underline">1099 tax calculator</Link> gives you a precise federal and SE tax breakdown based on your specific income and deductions, updated for 2026 IRS brackets. For Florida residents, the calculation is simpler than most states — no state tax layer to account for.
        </p>
        <p className="text-zinc-400 leading-relaxed mb-4">
          If your net profit is over $60,000, also check the <Link href="/llc-tax-calculator" className="text-indigo-400 hover:text-indigo-300 transition-colors underline">LLC tax savings calculator</Link> to see how much the federal S-Corp election saves you — Florida&apos;s favorable LLC rules make this one of the cleanest states to implement the strategy.
        </p>
        <p className="text-zinc-500 text-xs mt-8">
          Federal estimates based on 2026 IRS tax brackets. Florida has no state income tax. For educational purposes only. Consult a CPA for advice specific to your situation.
        </p>
      </section>

      {/* Footer Note */}
      <div className="max-w-4xl mx-auto px-4 mt-12 text-center">
        <p className="text-xs text-zinc-600 font-mono">
          ESTIMATES BASED ON 2026 TAX LAW • FOR EDUCATIONAL PURPOSES ONLY
        </p>
      </div>
    </main>
  );
}
