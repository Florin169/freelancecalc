import TaxCalculator from '@/components/TaxCalculator';
import TaxGuideAccordion from '@/components/TaxGuideAccordion';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: '1099 Tax Calculator Georgia (2026) — Freelancer & Contractor Tax Estimator',
  description: 'Free 1099 tax calculator for Georgia freelancers. GA dropped to a flat 4.99% income tax in 2026 under HB 463 — see your exact federal, state, and SE tax bill. Updated for HB 463.',
};

const faqData = [
  {
    id: 'georgia-state-tax',
    title: 'What is the Georgia state income tax rate for 1099 contractors in 2026?',
    content: `Georgia uses a flat 4.99% rate on all taxable income for 2026, enacted under HB 463 signed by Governor Kemp on May 11, 2026, retroactive to January 1, 2026. This is down from 5.19% in 2025. Single filers reduce taxable income by a $15,000 standard deduction and $4,000 personal exemption before the 4.99% rate applies.`,
  },
  {
    id: 'georgia-atlanta-city-tax',
    title: 'Do Atlanta freelancers pay city income tax?',
    content: `No. Georgia has no city or local income taxes. Atlanta, Savannah, Augusta, and every other Georgia city all charge the same rate — zero — on top of the state income tax. This is one of Georgia's advantages over states like New York where city residents pay an additional 3.078%–3.876%.`,
  },
  {
    id: 'georgia-set-aside',
    title: 'How much should a Georgia freelancer set aside for taxes?',
    content: `30–34% of net income after deductions is the recommended range for most Georgia freelancers. Use the calculator above for your exact quarterly payment amount based on your specific income and deductions.`,
  },
  {
    id: 'georgia-qbi',
    title: 'Does Georgia have a QBI deduction for freelancers?',
    content: `No. The federal Qualified Business Income deduction — which can reduce federal taxable income by up to 20% for many 1099 contractors — does not apply on the Georgia state return. This is the same treatment as New York and Illinois. The federal deduction still reduces your federal tax, but your Georgia taxable income is calculated without it.`,
  },
  {
    id: 'georgia-good-state',
    title: 'Is Georgia a good state for freelancers from a tax perspective?',
    content: `Georgia is competitive and improving. The 4.99% flat rate is below the national average for states with income tax, and HB 463 sets up further annual reductions toward 3.99%. Combined with no city income taxes, a $15,000 standard deduction, and affordable LLC maintenance costs ($60/year annual registration), Georgia offers a favorable environment for 1099 contractors — particularly those in Atlanta with access to the growing tech and film production ecosystem.`,
  },
  {
    id: 'georgia-llc-fee',
    title: 'What is the Georgia LLC annual fee?',
    content: `Georgia LLCs pay $60 per year in annual registration fees ($50 state fee plus $10 online service fee), due by April 1 each year. The one-time formation fee is $100. There is no franchise tax or net worth tax on LLCs taxed as pass-throughs. Total first-year cost: approximately $160.`,
  },
];

export default function GeorgiaPage() {
  return (
    <main className="bg-black text-zinc-50 min-h-screen pb-20 antialiased">
      <Script
        id="georgia-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqData.map((faq) => ({
              '@type': 'Question',
              name: faq.title,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.content,
              },
            })),
          }),
        }}
      />

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
            <span className="text-zinc-300">Georgia</span>
          </nav>
        </div>

        <div className="relative max-w-4xl mx-auto text-center px-6 py-12 md:py-24">
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-[1.1]">
            1099 Tax Calculator Georgia & <br />
            <span className="bg-gradient-to-r from-indigo-400 to-indigo-600 bg-clip-text text-transparent">What Freelancers Actually Owe in 2025–2026</span>
          </h1>
          
          <p className="text-zinc-400 text-lg md:text-xl mt-6 max-w-2xl mx-auto leading-relaxed font-light">
            Georgia just became significantly more affordable for freelancers. HB 463 dropped the flat income tax to 4.99% — see your exact federal, state, and SE tax bill.
          </p>
        </div>
      </section>

      {/* Main Calculator Split-Pane */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 -mt-6 md:-mt-12 relative z-10">
        <TaxCalculator defaultMode="freelance" showSeBreakdown />
      </div>

      {/* Georgia Tax Info Section */}
      <article className="max-w-3xl mx-auto px-4 mt-16">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">How 1099 taxes work in Georgia</h2>
        <p className="text-zinc-400 leading-relaxed mb-4">
          Georgia 1099 contractors have three tax obligations:
        </p>
        <p className="text-zinc-400 leading-relaxed mb-4">
          <span className="text-white font-semibold">Federal income tax</span> — calculated on net profit after deductions at standard federal brackets. Identical for all US taxpayers regardless of state.
        </p>
        <p className="text-zinc-400 leading-relaxed mb-4">
          <span className="text-white font-semibold">Self-Employment (SE) tax</span> — 15.3% on 92.35% of net earnings, covering both halves of Social Security (12.4% up to the $184,500 wage base) and Medicare (2.9% with no cap). As a 1099 contractor, you pay both the employer and employee portions.
        </p>
        <p className="text-zinc-400 leading-relaxed mb-8">
          <span className="text-white font-semibold">Georgia state income tax</span> — a flat 4.99% on all Georgia taxable income. Georgia taxable income starts with your federal adjusted gross income and subtracts the Georgia standard deduction of $15,000 for single filers (increased from $12,000 under HB 463, effective for tax year 2026) and the $4,000 personal exemption.
        </p>
        <p className="text-zinc-400 leading-relaxed mb-8">
          No city income taxes, no county income taxes. One state rate, applied uniformly across Georgia.
        </p>

        <h2 className="text-xl md:text-2xl font-bold text-white mb-4">What a Georgia 1099 contractor actually owes in 2026</h2>
        <p className="text-zinc-400 leading-relaxed mb-4">
          Here is what a freelancer owes in Georgia at different income levels in 2026, assuming no additional business deductions beyond the standard deduction and personal exemption:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border-collapse">
            <thead>
              <tr className="border-b border-zinc-800 text-zinc-400 uppercase text-xs tracking-wider">
                <th className="py-3 pr-4 font-medium">Net 1099 Income</th>
                <th className="py-3 pr-4 font-medium">SE Tax</th>
                <th className="py-3 pr-4 font-medium">Federal Income Tax</th>
                <th className="py-3 pr-4 font-medium">GA State Tax (4.99%)</th>
                <th className="py-3 pr-4 font-medium">Total Tax</th>
                <th className="py-3 font-medium">Effective Rate</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['$40,000', '$5,652', '$2,836', '$949', '$9,437', '~24%'],
                ['$60,000', '$8,478', '$5,836', '$1,949', '$16,263', '~27%'],
                ['$80,000', '$11,304', '$9,836', '$2,949', '$24,089', '~30%'],
                ['$100,000', '$14,130', '$14,836', '$3,949', '$32,915', '~33%'],
                ['$150,000', '$16,377', '$28,711', '$6,449', '$51,537', '~34%'],
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
        <p className="text-zinc-500 text-xs mt-2">Georgia state tax estimated as 4.99% of (net income minus $15,000 standard deduction minus $4,000 personal exemption minus half of SE tax). Assumes single filer. Federal tax uses 2026 brackets. Use the calculator above for your exact figures.</p>

        <h2 className="text-xl md:text-2xl font-bold text-white mt-12 mb-4">Georgia vs other states: where it stands</h2>
        <p className="text-zinc-400 leading-relaxed mb-4">
          Georgia&apos;s 4.99% flat rate puts it in a competitive position — well below the high-tax coastal states and only slightly above the no-income-tax states.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border-collapse">
            <thead>
              <tr className="border-b border-zinc-800 text-zinc-400 uppercase text-xs tracking-wider">
                <th className="py-3 pr-4 font-medium">State</th>
                <th className="py-3 pr-4 font-medium">State Income Tax at $100k</th>
                <th className="py-3 pr-4 font-medium">Total Tax at $100k</th>
                <th className="py-3 font-medium">vs Georgia</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Texas', '$0', '~$28,966', '-$3,949'],
                ['Florida', '$0', '~$28,966', '-$3,949'],
                ['Georgia', '~$3,949', '~$32,915', '—'],
                ['Ohio', '~$2,035', '~$31,001', '-$1,914'],
                ['North Carolina', '~$4,499', '~$33,465', '+$550'],
                ['Illinois', '~$4,950', '~$33,916', '+$1,001'],
                ['New York', '~$6,132', '~$35,098', '+$2,183'],
                ['California', '~$8,548', '~$37,514', '+$4,599'],
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
        <p className="text-zinc-500 text-xs mt-2">State tax estimates based on 2026 published rates, single filer, $100,000 net income. Georgia calculation accounts for $15,000 standard deduction and $4,000 personal exemption.</p>
        <p className="text-zinc-400 leading-relaxed mt-4">
          Georgia is firmly in the middle of the national spectrum — cheaper than most Northeastern and Midwestern states, and the path toward further reductions under HB 463 makes it increasingly competitive.
        </p>
      </article>

      {/* HB 463 Reform Section */}
      <article className="max-w-3xl mx-auto px-4 mt-16">
        <h2 className="text-xl md:text-2xl font-bold text-white mb-4">The HB 463 reform: what it means for Georgia freelancers</h2>
        <p className="text-zinc-400 leading-relaxed mb-4">
          Before 2024, Georgia used a six-bracket progressive system with a top rate of 5.75%. The state converted to a flat tax starting in 2024 (5.49%), then reduced it to 5.19% in 2025 under HB 111. On May 11, 2026, Governor Kemp signed HB 463, which skipped the scheduled 5.09% intermediate step and dropped the rate directly to 4.99% — three years ahead of the original timeline.
        </p>
        <p className="text-zinc-400 leading-relaxed mb-4">
          For freelancers, this has three practical effects:
        </p>
        <div className="space-y-4 mb-8">
          <div>
            <h3 className="text-white font-semibold mb-1">Simpler quarterly estimates</h3>
            <p className="text-zinc-400 leading-relaxed">
              With a flat rate, estimating your Georgia state tax liability is straightforward: multiply your projected net income above the deductions by 4.99%. No bracket lookups, no marginal rate calculations at different income thresholds.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-1">Lower rate than 2025</h3>
            <p className="text-zinc-400 leading-relaxed">
              Every Georgia freelancer pays 0.2 percentage points less than in 2025. At $100,000 net income, that is approximately $200 saved compared to the prior year.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-1">A downward path</h3>
            <p className="text-zinc-400 leading-relaxed">
              HB 463 sets up further annual reductions of 0.125 percentage points toward a 3.99% floor, subject to Georgia meeting its revenue targets each year. For freelancers planning long-term, Georgia&apos;s tax trajectory is favorable.
            </p>
          </div>
        </div>
      </article>

      {/* Deductions Section */}
      <article className="max-w-3xl mx-auto px-4 mt-16">
        <h2 className="text-xl md:text-2xl font-bold text-white mb-4">Georgia-specific deductions and considerations</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-white font-semibold mb-1">Georgia standard deduction — increased for 2026</h3>
            <p className="text-zinc-400 leading-relaxed">
              Georgia&apos;s standard deduction for single filers rose to $15,000 for 2026 under HB 463 (up from $12,000 in 2025). This deduction applies to your Georgia taxable income before the 4.99% rate is applied — reducing your Georgia tax by approximately $748 compared to using the 2025 deduction amount.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-1">Georgia personal exemption — $4,000 for single filers</h3>
            <p className="text-zinc-400 leading-relaxed">
              In addition to the standard deduction, Georgia allows a $4,000 personal exemption. Combined, single filers reduce their Georgia taxable income by $19,000 before the 4.99% rate applies.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-1">SE tax deduction applies at the Georgia level</h3>
            <p className="text-zinc-400 leading-relaxed">
              Georgia allows the federal SE tax adjustment (deducting half of your SE tax from adjusted gross income) to flow through to your Georgia return, reducing your state taxable income.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-1">No QBI deduction at the Georgia level</h3>
            <p className="text-zinc-400 leading-relaxed">
              The federal Qualified Business Income deduction — which can reduce federal taxable income by up to 20% for many 1099 contractors — does not carry through to your Georgia return. This is the same issue as New York and Illinois — a deduction that saves you money federally provides no Georgia state tax benefit.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-1">Home office deduction</h3>
            <p className="text-zinc-400 leading-relaxed">
              Georgia follows federal home office rules. The same deduction that reduces your federal taxable income also reduces your Georgia taxable income, amplifying the value of every deduction dollar at both the federal and state level.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-1">Health insurance premiums</h3>
            <p className="text-zinc-400 leading-relaxed">
              Often 100% deductible at the federal level for self-employed individuals not eligible for employer-sponsored coverage. This deduction flows through to your Georgia return as well, reducing both your federal and state taxable income.
            </p>
          </div>
        </div>
      </article>

      {/* Atlanta freelancers */}
      <article className="max-w-3xl mx-auto px-4 mt-16">
        <h2 className="text-xl md:text-2xl font-bold text-white mb-4">Atlanta freelancers: no city income tax</h2>
        <p className="text-zinc-400 leading-relaxed mb-4">
          This is one of Georgia&apos;s clearest advantages over states like New York. Despite being one of the largest metropolitan economies in the country, Atlanta charges no city income tax on residents or workers. A freelancer in Atlanta pays exactly the same state rate as a freelancer in rural Georgia — 4.99%.
        </p>
        <p className="text-zinc-400 leading-relaxed">
          This contrasts sharply with major cities in other states: New York City adds 3.078%–3.876% on top of state tax, Chicago adds 0% (Illinois has no city income tax but has a higher state rate), and Philadelphia adds 3.75% for residents. Georgia&apos;s structure means Atlanta freelancers get all the advantages of a major metro market without a city tax penalty.
        </p>
      </article>

      {/* Quarterly Deadlines */}
      <section className="max-w-3xl mx-auto px-4 mt-16">
        <h2 className="text-xl md:text-2xl font-bold text-white mb-4">Quarterly estimated taxes in Georgia</h2>
        <p className="text-zinc-400 leading-relaxed mb-4">
          Georgia 1099 contractors must pay federal estimated taxes and Georgia state estimated taxes separately throughout the year.
        </p>
        <p className="text-zinc-400 leading-relaxed mb-2 font-semibold text-white">Federal estimated tax deadlines for 2026:</p>
        <ul className="space-y-2 text-zinc-300 list-disc list-inside mb-6">
          <li><span className="text-indigo-400 font-semibold">April 15</span> — Q1 (January–March income)</li>
          <li><span className="text-indigo-400 font-semibold">June 16</span> — Q2 (April–May income)</li>
          <li><span className="text-indigo-400 font-semibold">September 15</span> — Q3 (June–August income)</li>
          <li><span className="text-indigo-400 font-semibold">January 15, 2027</span> — Q4 (September–December income)</li>
        </ul>
        <p className="text-zinc-400 leading-relaxed mb-2 font-semibold text-white">Georgia state estimated tax deadlines for 2026:</p>
        <p className="text-zinc-400 leading-relaxed mb-4">
          Georgia follows the same quarterly schedule as the federal government — April 15, June 15, September 15, and January 15. The threshold for paying Georgia estimated taxes is $1,000 in expected Georgia tax liability for the year. File using Georgia Form 500ES.
        </p>
        <p className="text-zinc-400 leading-relaxed mt-4">
          A safe set-aside rate for Georgia freelancers is 30–34% of net income. This is higher than no-income-tax states like Texas and Florida (25–28%) but lower than New York City contractors (38–42%).
        </p>
      </section>

      {/* Georgia LLC Rules */}
      <article className="max-w-3xl mx-auto px-4 mt-16">
        <h2 className="text-xl md:text-2xl font-bold text-white mb-4">Georgia LLC rules for freelancers</h2>
        <p className="text-zinc-400 leading-relaxed mb-6">
          Georgia is one of the more straightforward and affordable states for LLC formation and maintenance.
        </p>
        <div className="space-y-6">
          <div>
            <h3 className="text-white font-semibold mb-1">$100 one-time formation fee</h3>
            <p className="text-zinc-400 leading-relaxed">
              Georgia charges $100 to file Articles of Organization with the Secretary of State. This is a one-time cost.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-1">$60 annual registration fee</h3>
            <p className="text-zinc-400 leading-relaxed">
              Georgia LLCs file an Annual Registration every year, due between January 1 and April 1. The fee is $60 ($50 state fee plus $10 online service fee). Late filing triggers a $25 penalty.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-1">No franchise tax on LLCs</h3>
            <p className="text-zinc-400 leading-relaxed">
              Georgia does not charge an entity-level franchise or net worth tax on single-member or multi-member LLCs taxed as pass-throughs. This is a meaningful advantage over California ($800 minimum franchise tax) and New York (biennial statement plus publication requirement).
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-1">No city income taxes</h3>
            <p className="text-zinc-400 leading-relaxed">
              Unlike New York City where S-Corp distributions still face the city income tax question, Georgia&apos;s uniform state rate makes the S-Corp math cleaner — you only need to model federal and state interactions, not federal, state, and city.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-1">S-Corp election</h3>
            <p className="text-zinc-400 leading-relaxed mb-4">
              Georgia recognizes the federal S-Corp election. At $60,000–$70,000 in net profit, the SE tax savings from splitting income between salary and distributions typically justify the administrative costs. Georgia&apos;s flat 4.99% rate and straightforward LLC structure make this one of the more practical states to implement the election.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              Use the <Link href="/llc-tax-calculator" className="text-indigo-400 hover:text-indigo-300 transition-colors underline">LLC tax savings calculator</Link> to model your specific Georgia S-Corp savings.
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
              <p className="text-indigo-400 text-xs font-bold uppercase tracking-widest mb-1">Georgia Freelancers Earning Over $60k</p>
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
          customData={faqData}
        />
      </div>

      {/* Final CTA Section */}
      <section className="max-w-3xl mx-auto px-4 mt-16">
        <h2 className="text-xl md:text-2xl font-bold text-white mb-4">Calculate your exact Georgia 1099 tax bill</h2>
        <p className="text-zinc-400 leading-relaxed mb-4">
          The tables above use standard assumptions. Your actual bill depends on your filing status, deductions, business expenses, and whether you operate as a sole proprietor or LLC.
        </p>
        <p className="text-zinc-400 leading-relaxed mb-4">
          The <Link href="/1099-tax-calculator" className="text-indigo-400 hover:text-indigo-300 transition-colors underline">1099 tax calculator</Link> gives you a precise federal and SE tax breakdown based on your specific income and deductions, updated for 2026 brackets. For Georgia&apos;s 4.99% state tax, the calculation is straightforward — your state bill is approximately 4.99% of your net income above $19,000 in combined deductions.
        </p>
        <p className="text-zinc-400 leading-relaxed mb-4">
          If your net profit is over $60,000, also check the <Link href="/llc-tax-calculator" className="text-indigo-400 hover:text-indigo-300 transition-colors underline">LLC tax savings calculator</Link> — Georgia&apos;s flat rate, no city tax, and clean LLC structure make it one of the more practical states to implement the S-Corp election.
        </p>
        <p className="text-zinc-500 text-xs mt-8">
          Federal estimates based on 2026 IRS tax brackets. Georgia state estimates based on HB 463 (signed May 11, 2026), retroactive to January 1, 2026. For educational purposes only. Consult a CPA for advice specific to your situation.
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
