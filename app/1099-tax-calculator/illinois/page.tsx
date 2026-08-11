import TaxCalculator from '@/components/TaxCalculator';
import TaxGuideAccordion from '@/components/TaxGuideAccordion';
import Link from 'next/link';
import Script from 'next/script';
import { ChevronRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '1099 Tax Calculator Illinois (2026) — Chicago & IL State Freelancer Tax Guide',
  description: 'Free 1099 tax calculator for Illinois freelancers. Illinois has a flat 4.95% state tax — see your exact federal + state bill. Chicago adds PPRT for S‑corps. Updated for 2026.',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much state tax do Illinois 1099 contractors pay?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Illinois uses a flat 4.95% income tax. Chicago freelancers do not pay a city income tax. S-corps and LLCs taxed as partnerships owe an additional 1.5% PPRT (Personal Property Replacement Tax).',
      },
    },
    {
      '@type': 'Question',
      name: 'Do Chicago freelancers pay city income tax?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Chicago does not impose a city-level income tax on individuals. The only additional layer for Chicago freelancers comes from the statewide PPRT, which applies only to S-corps and LLCs taxed as partnerships.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the Illinois PPRT?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Personal Property Replacement Tax is a statewide tax of 1.5% for S-corps and partnerships/LLCs taxed as partnerships. Sole proprietors do not pay PPRT. C-corps pay 2.5%.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Illinois allow the QBI deduction?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Illinois conforms to federal QBI rules — unlike New York — so the Qualified Business Income deduction reduces your Illinois taxable income as well as your federal taxable income.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much should an Illinois freelancer set aside for taxes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '30–34% of net income for sole proprietors. 32–36% for S-corps or LLCs taxed as partnerships due to the additional 1.5% PPRT.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Illinois a good state for freelancers from a tax perspective?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Illinois is simpler and cheaper than NYC or California, but more expensive than Texas or Florida. Chicago freelancers who incorporate must factor in the 1.5% PPRT, which reduces the net benefit of the S-Corp structure.',
      },
    },
  ],
};

export default function IllinoisPage() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="bg-black text-zinc-50 min-h-screen pb-20 antialiased">
        {/* Breadcrumb */}
        <div className="max-w-4xl mx-auto px-4 pt-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-zinc-500">
            <Link href="/" className="hover:text-zinc-300 transition-colors">
              Home
            </Link>
            <ChevronRight size={16} />
            <Link href="/1099-tax-calculator" className="hover:text-zinc-300 transition-colors">
              1099 Tax Calculator
            </Link>
            <ChevronRight size={16} />
            <span className="text-zinc-300">Illinois</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-zinc-800 bg-black">
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/40 to-transparent pointer-events-none" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none" />

          <div className="relative max-w-4xl mx-auto text-center px-6 py-12 md:py-24">
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-[1.1]">
              1099 Tax Calculator Illinois 2025–2026 & <br />
              <span className="bg-gradient-to-r from-indigo-400 to-indigo-600 bg-clip-text text-transparent">What Freelancers Actually Owe in Illinois & Chicago</span>
            </h1>

            <p className="text-zinc-400 text-lg md:text-xl mt-6 max-w-2xl mx-auto leading-relaxed font-light">
              Illinois is one of the simplest states in the country for 1099 contractors — a flat 4.95% state income tax, no city income tax, and no local surcharges. But Chicago freelancers who incorporate face the 1.5% Personal Property Replacement Tax. Use the calculator above to see your exact federal + state bill. Updated for 2026.
            </p>
          </div>
        </section>

        {/* Main Calculator Split-Pane */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 -mt-6 md:-mt-12 relative z-10">
          <TaxCalculator defaultMode="freelance" showSeBreakdown />
        </div>

        {/* How 1099 Taxes Work Section */}
        <article className="max-w-3xl mx-auto px-4 mt-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">How 1099 taxes work in Illinois</h2>
          <p className="text-zinc-400 leading-relaxed mb-8">
            Illinois 1099 contractors face three main tax obligations — plus PPRT if you incorporate:
          </p>

          <div className="space-y-6 text-zinc-400 leading-relaxed mb-8">
            <div>
              <h3 className="text-white font-semibold mb-1">Federal income tax</h3>
              <p>Calculated on net profit after deductions at standard federal brackets. Identical for all US taxpayers.</p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">Self-Employment (SE) tax</h3>
              <p>15.3% on 92.35% of net earnings, covering both halves of Social Security (12.4% up to the $184,500 wage base) and Medicare (2.9% with no cap). As a 1099 contractor, you pay both halves.</p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">Illinois state income tax</h3>
              <p>A flat 4.95% on taxable income. Illinois does not use brackets. The state also uses a personal exemption instead of a standard deduction. For 2026, the exemption is $2,775 per taxpayer (inflation-adjusted estimate based on IL DOR formula).</p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">Chicago local income tax</h3>
              <p>None. Chicago does not impose a city income tax on individuals.</p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">Illinois PPRT (Personal Property Replacement Tax)</h3>
              <p>Applies only to incorporated entities: S-corps at 1.5%, partnerships/LLCs taxed as partnerships at 1.5%, and C-corps at 2.5%. Sole proprietors do not pay PPRT.</p>
            </div>
          </div>

          <p className="text-zinc-400 leading-relaxed">
            A freelancer earning $100,000 in Illinois pays roughly $31,000–$33,000 in total taxes — compared to $38,000–$42,000 in New York City or $29,000 in Texas or Florida. Use the calculator above to see your exact Illinois 1099 tax bill, or read on to understand every layer of what you owe.
          </p>
        </article>

        {/* What IL Contractors Owe Section */}
        <article className="max-w-3xl mx-auto px-4 mt-16">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-4">What an Illinois 1099 contractor actually owes in 2026</h2>
          <p className="text-zinc-400 leading-relaxed mb-4">
            Here is what a freelancer earning different income levels owes in 2026, assuming standard federal deductions and the Illinois personal exemption.
          </p>

          <h3 className="text-white font-semibold mb-4">Illinois (statewide):</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="border-b border-zinc-800 text-zinc-400 uppercase text-xs tracking-wider">
                  <th className="py-3 pr-4 font-medium">Net 1099 Income</th>
                  <th className="py-3 pr-4 font-medium">SE Tax</th>
                  <th className="py-3 pr-4 font-medium">Federal Income Tax</th>
                  <th className="py-3 pr-4 font-medium">IL State Tax</th>
                  <th className="py-3 pr-4 font-medium">Total Tax</th>
                  <th className="py-3 font-medium">Effective Rate</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['$40,000', '$5,652', '$2,836', '$1,860', '$10,348', '~26%'],
                  ['$60,000', '$8,478', '$5,836', '$2,970', '$17,284', '~29%'],
                  ['$80,000', '$11,304', '$9,836', '$3,960', '$25,100', '~31%'],
                  ['$100,000', '$14,130', '$14,836', '$4,950', '$33,916', '~34%'],
                  ['$150,000', '$16,377', '$28,711', '$7,425', '$52,513', '~35%'],
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
          <p className="text-zinc-500 text-xs mt-2">Estimates assume single filer, federal standard deduction, Illinois personal exemption, no additional business deductions. Use the calculator above for your exact figures.</p>
        </article>

        {/* Chicago vs Illinois */}
        <article className="max-w-3xl mx-auto px-4 mt-16">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-4">Chicago vs Illinois: the real cost difference</h2>
          <p className="text-zinc-400 leading-relaxed mb-4">
            Chicago freelancers do not pay a city income tax. The only difference comes from PPRT, which applies only if you operate as an S-corp or partnership/LLC.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="border-b border-zinc-800 text-zinc-400 uppercase text-xs tracking-wider">
                  <th className="py-3 pr-4 font-medium">Structure</th>
                  <th className="py-3 pr-4 font-medium">IL State Tax</th>
                  <th className="py-3 pr-4 font-medium">Chicago PPRT</th>
                  <th className="py-3 pr-4 font-medium">Total State + Local</th>
                  <th className="py-3 font-medium">Extra vs Sole Proprietor</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Sole Proprietor', '4.95%', '0%', '4.95%', '—'],
                  ['LLC taxed as partnership', '4.95%', '1.5%', '6.45%', '+1.5%'],
                  ['S-Corp', '4.95%', '1.5%', '6.45%', '+1.5%'],
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
          <p className="text-zinc-400 leading-relaxed mt-4">
            Chicago has no city income tax. PPRT is statewide but disproportionately affects Chicago freelancers who incorporate. For a Chicago freelancer earning $100,000: a sole proprietor pays $4,950 in IL tax, while an S-corp or LLC taxed as partnership pays $6,450 combined IL + PPRT. This is still dramatically lower than NYC&apos;s combined 9%–10% state + city burden.
          </p>
        </article>

        {/* IL vs Other States */}
        <article className="max-w-3xl mx-auto px-4 mt-16">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-4">Illinois vs other states: the real cost difference</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="border-b border-zinc-800 text-zinc-400 uppercase text-xs tracking-wider">
                  <th className="py-3 pr-4 font-medium">State</th>
                  <th className="py-3 pr-4 font-medium">State + Local Tax at $100k</th>
                  <th className="py-3 pr-4 font-medium">Total Tax</th>
                  <th className="py-3 pr-4 font-medium">vs Illinois</th>
                  <th className="py-3 font-medium">vs Chicago S-Corp</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Illinois', '~$4,950', '~$33,916', '—', '-$1,500'],
                  ['Chicago (S-Corp)', '~$6,450', '~$35,416', '+$1,500', '—'],
                  ['California', '~$8,548', '~$37,514', '+$3,598', '+$2,098'],
                  ['New York State', '~$6,132', '~$35,098', '+$1,182', '-$318'],
                  ['NYC', '~$10,048', '~$38,928', '+$5,098', '+$3,512'],
                  ['Texas', '$0', '~$28,966', '-$4,950', '-$6,450'],
                  ['Florida', '$0', '~$28,966', '-$4,950', '-$6,450'],
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
          <p className="text-zinc-400 leading-relaxed mt-4">
            Illinois is significantly cheaper than NYC or California, but more expensive than Texas or Florida.
          </p>
        </article>

        {/* Illinois-Specific Deductions */}
        <article className="max-w-3xl mx-auto px-4 mt-16">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-4">Illinois-specific deductions and quirks</h2>
          <p className="text-zinc-400 leading-relaxed mb-6">
            Illinois follows most federal deduction rules but has several important differences.
          </p>
          <div className="space-y-6">
            <div>
              <h3 className="text-white font-semibold mb-1">No state standard deduction</h3>
              <p className="text-zinc-400 leading-relaxed">
                Illinois uses a personal exemption instead of a standard deduction. For 2026, the exemption is $2,775 per taxpayer.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">Illinois conforms to the federal QBI deduction</h3>
              <p className="text-zinc-400 leading-relaxed">
                Unlike New York, Illinois allows the federal Qualified Business Income (QBI) deduction to reduce your Illinois taxable income. This is a major difference from NY.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">SE tax deduction applies at the state level</h3>
              <p className="text-zinc-400 leading-relaxed">
                Illinois allows the federal SE tax deduction (half of SE tax) to carry through to the state return.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">Home office deduction</h3>
              <p className="text-zinc-400 leading-relaxed">
                Illinois follows federal home office rules. Chicago freelancers with high rents often benefit from the actual expense method.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">Health insurance premiums</h3>
              <p className="text-zinc-400 leading-relaxed">
                Often 100% deductible at both the federal and Illinois state level for self-employed individuals who are not eligible for employer-sponsored coverage.
              </p>
            </div>
          </div>
        </article>

        {/* Quarterly Deadlines */}
        <section className="max-w-3xl mx-auto px-4 mt-16">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-4">Quarterly estimated taxes in Illinois</h2>
          <p className="text-zinc-400 leading-relaxed mb-4">
            Illinois 1099 contractors must pay federal and Illinois estimated taxes separately throughout the year.
          </p>
          <h3 className="text-white font-semibold mb-2">Federal estimated tax deadlines for 2026:</h3>
          <ul className="space-y-2 text-zinc-300 list-disc list-inside mb-6">
            <li><span className="text-indigo-400 font-semibold">April 15</span> — Q1 (January–March income)</li>
            <li><span className="text-indigo-400 font-semibold">June 16</span> — Q2 (April–May income)</li>
            <li><span className="text-indigo-400 font-semibold">September 15</span> — Q3 (June–August income)</li>
            <li><span className="text-indigo-400 font-semibold">January 15, 2027</span> — Q4 (September–December income)</li>
          </ul>
          <h3 className="text-white font-semibold mb-2">Illinois estimated tax deadlines for 2026:</h3>
          <p className="text-zinc-400 leading-relaxed mb-4">
            Illinois follows the same schedule — April 15, June 15, September 15, and January 15. File using Form IL-1040-ES. The threshold to pay estimated taxes in Illinois is $500 expected liability. Source: Illinois Department of Revenue, IL-1040-ES instructions.
          </p>
          <p className="text-zinc-400 leading-relaxed">
            A safe set-aside rate for Illinois contractors is 30–34% of net income. For Chicago freelancers operating as S-corps or LLCs taxed as partnerships, lean toward 32–36% due to PPRT.
          </p>
        </section>

        {/* Illinois LLC Rules */}
        <article className="max-w-3xl mx-auto px-4 mt-16">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-4">Illinois LLC rules for freelancers</h2>
          <p className="text-zinc-400 leading-relaxed mb-6">
            Illinois has several LLC requirements worth understanding.
          </p>
          <div className="space-y-6">
            <div>
              <h3 className="text-white font-semibold mb-1">Formation fee — $150</h3>
              <p className="text-zinc-400 leading-relaxed">
                Illinois LLCs pay a $150 formation fee. Source: Illinois Secretary of State.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">Annual report fee — $75</h3>
              <p className="text-zinc-400 leading-relaxed">
                Filed every year with the Secretary of State.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">No publication requirement</h3>
              <p className="text-zinc-400 leading-relaxed">
                Unlike New York, Illinois does not require newspaper publication.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">S-Corp election in Illinois</h3>
              <p className="text-zinc-400 leading-relaxed mb-4">
                Illinois recognizes the federal S-Corp election. However, S-corps owe 1.5% PPRT, which reduces the net benefit of the S-corp structure compared to states like Florida or Texas.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                Use the <Link href="/llc-tax-calculator" className="text-indigo-400 hover:text-indigo-300 transition-colors underline">LLC tax savings calculator</Link> to model your specific Illinois S-Corp savings.
              </p>
            </div>
          </div>
        </article>

        {/* FAQ */}
        <div className="max-w-4xl mx-auto px-4 mt-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">Frequently asked questions</h2>
          <TaxGuideAccordion
            hideHeader
            customData={[
              {
                id: 'il-state-tax',
                title: 'How much state tax do Illinois 1099 contractors pay?',
                content: `Illinois uses a flat 4.95% income tax. Chicago freelancers do not pay a city income tax. S-corps and LLCs taxed as partnerships owe an additional 1.5% PPRT.`,
              },
              {
                id: 'il-chicago-city-tax',
                title: 'Do Chicago freelancers pay city income tax?',
                content: `No. Chicago does not impose a city-level income tax on individuals. The only additional layer for Chicago freelancers comes from the statewide PPRT, which applies only to S-corps and LLCs taxed as partnerships.`,
              },
              {
                id: 'il-pprt',
                title: 'What is the Illinois PPRT?',
                content: `The Personal Property Replacement Tax is a statewide tax of 1.5% for S-corps and partnerships/LLCs taxed as partnerships. Sole proprietors do not pay PPRT. C-corps pay 2.5%.`,
              },
              {
                id: 'il-qbi',
                title: 'Does Illinois allow the QBI deduction?',
                content: `Yes. Illinois conforms to federal QBI rules — unlike New York — so the Qualified Business Income deduction reduces your Illinois taxable income as well as your federal taxable income.`,
              },
              {
                id: 'il-set-aside',
                title: 'How much should an Illinois freelancer set aside for taxes?',
                content: `30–34% of net income for sole proprietors. 32–36% for S-corps or LLCs taxed as partnerships due to the additional 1.5% PPRT.`,
              },
              {
                id: 'il-good-state',
                title: 'Is Illinois a good state for freelancers from a tax perspective?',
                content: `Illinois is simpler and cheaper than NYC or California, but more expensive than Texas or Florida. Chicago freelancers who incorporate must factor in the 1.5% PPRT, which reduces the net benefit of the S-Corp structure.`,
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
                <p className="text-indigo-400 text-xs font-bold uppercase tracking-widest mb-1">Illinois 1099 Tax Calculator</p>
                <p className="text-white font-semibold group-hover:text-indigo-300 transition-colors">
                  Use the full calculator to see your exact federal, state, and SE tax bill
                </p>
              </div>
              <ChevronRight size={20} className="text-zinc-600 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all shrink-0 mt-1" />
            </div>
          </Link>
        </div>

        {/* Final CTA Section */}
        <section className="max-w-3xl mx-auto px-4 mt-16">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-4">Calculate your exact Illinois 1099 tax bill</h2>
          <p className="text-zinc-400 leading-relaxed mb-4">
            The tables above use standard assumptions. Your actual bill depends on your filing status, deductions, business expenses, and whether you operate as a sole proprietor or LLC/S-corp.
          </p>
          <p className="text-zinc-400 leading-relaxed mb-4">
            The <Link href="/1099-tax-calculator" className="text-indigo-400 hover:text-indigo-300 transition-colors underline">1099 tax calculator</Link> gives you a precise federal and SE tax breakdown based on your specific income and deductions, updated for 2026 brackets.
          </p>
          <p className="text-zinc-400 leading-relaxed mb-4">
            If your net profit is over $60,000, also check the <Link href="/llc-tax-calculator" className="text-indigo-400 hover:text-indigo-300 transition-colors underline">LLC tax savings calculator</Link> to see whether the S-Corp election saves you money after accounting for Illinois&apos;s PPRT and LLC fees.
          </p>
          <p className="text-zinc-500 text-xs mt-8">
            Federal estimates based on 2026 IRS tax brackets. Illinois state estimates based on the 2026 flat 4.95% rate and $2,775 personal exemption. PPRT estimates based on Illinois Personal Property Replacement Tax rules. For educational purposes only — consult an Illinois CPA for advice specific to your situation.
          </p>
        </section>

        {/* Footer Note */}
        <div className="max-w-4xl mx-auto px-4 mt-12 text-center">
          <p className="text-xs text-zinc-600 font-mono">
            ESTIMATES BASED ON 2026 TAX LAW • FOR EDUCATIONAL PURPOSES ONLY
          </p>
        </div>
      </main>
    </>
  );
}
