import TaxCalculator from '@/components/TaxCalculator';
import TaxGuideAccordion from '@/components/TaxGuideAccordion';
import Link from 'next/link';
import Script from 'next/script';
import { ChevronRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '1099 Tax Calculator New York (2026) — NYC & NY State Freelancer Tax Guide',
  description: 'Free 1099 tax calculator for New York freelancers. NY has up to 10.9% state tax plus NYC city tax — see your exact federal, state, and local bill. Updated for 2026.',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much state tax do New York 1099 contractors pay?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'New York uses progressive brackets from 4% to 10.9%. Most freelancers earning $60,000–$150,000 net pay an effective New York state rate of approximately 5.3%–6.85%, well below the headline 10.9% top rate (which applies above $25 million). NYC residents add another 3.078%–3.876% in city income tax on top.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do NYC freelancers pay city income tax?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NYC residents pay a city income tax of 3.078%–3.876% on top of their New York state income tax. This applies to self-employment income exactly as it applies to wages. It is unique to NYC — contractors living in Nassau County, Westchester, or New Jersey but working for NYC clients do not pay the city tax.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the MTA tax for New York freelancers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Metropolitan Commuter Transportation Mobility Tax (MCTMT) is 0.34% of net self-employment earnings for self-employed individuals in the NYC metro area (NYC, Long Island, and several surrounding counties). Filed on Form MTA-6 with your New York state return.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does New York allow the QBI deduction?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. The federal Qualified Business Income (QBI) deduction — which can reduce federal taxable income by up to 20% — does not carry through to your New York state return. This is one of the most significant differences between federal and New York state tax treatment of self-employment income.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much should a New York freelancer set aside for taxes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '32–36% of net income for contractors living outside NYC. 38–42% for NYC residents, depending on income level. The extra city tax layer makes New York City one of the highest-burden environments for 1099 work in the country. Use the calculator above to get your exact quarterly payment amount.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is New York a good state for freelancers from a tax perspective?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'New York ranks among the least favorable states for self-employed workers on tax grounds alone. However, New York — and NYC in particular — offers unmatched access to high-paying freelance clients in finance, media, tech, and creative industries. Many contractors find that higher billing rates more than compensate for the additional tax burden. The comparison depends heavily on your industry and client concentration.',
      },
    },
  ],
};

export default function NewYorkPage() {
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
            <span className="text-zinc-300">New York</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-zinc-800 bg-black">
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/40 to-transparent pointer-events-none" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none" />

          <div className="relative max-w-4xl mx-auto text-center px-6 py-12 md:py-24">
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-[1.1]">
              1099 Tax Calculator New York 2025–2026 & <br />
              <span className="bg-gradient-to-r from-indigo-400 to-indigo-600 bg-clip-text text-transparent">What Freelancers Actually Owe in NYC & NY State</span>
            </h1>

            <p className="text-zinc-400 text-lg md:text-xl mt-6 max-w-2xl mx-auto leading-relaxed font-light">
              On top of the federal income tax and 15.3% Self-Employment tax every contractor pays, New York adds up to 10.9% state income tax — and NYC residents add a city income tax and the MTA surcharge on top. Use the calculator above to see your exact federal, state, and local bill. Updated for 2026.
            </p>
          </div>
        </section>

        {/* Main Calculator Split-Pane */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 -mt-6 md:-mt-12 relative z-10">
          <TaxCalculator defaultMode="freelance" showSeBreakdown />
        </div>

        {/* How 1099 Taxes Work Section */}
        <article className="max-w-3xl mx-auto px-4 mt-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">How 1099 taxes work in New York</h2>
          <p className="text-zinc-400 leading-relaxed mb-8">
            New York 1099 contractors face up to five separate tax obligations depending on where they live:
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
              <h3 className="text-white font-semibold mb-1">New York state income tax</h3>
              <p>Calculated on net income at progressive brackets ranging from 4% to 10.9%. Most freelancers earning $60,000–$200,000 net pay an effective state rate of 5.3%–6.85%. Source: New York Department of Taxation and Finance, 2026 tax rate schedules.</p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">NYC city income tax</h3>
              <p>NYC residents pay an additional 3.078%–3.876% city income tax on top of state tax. The top rate applies above $50,000 of taxable income for single filers. This is unique to New York City — it does not apply to contractors living in the surrounding suburbs or upstate.</p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">MTA surcharge</h3>
              <p>Contractors earning self-employment income in the Metropolitan Commuter Transportation District (NYC plus Nassau, Suffolk, Westchester, Rockland, Dutchess, Putnam, and Orange counties) pay an additional 0.34% on net self-employment earnings. Filed on Form MTA-6.</p>
            </div>
          </div>

          <p className="text-zinc-400 leading-relaxed">
            A freelancer earning $100,000 in New York City pays roughly $38,000–$42,000 in total taxes — compared to approximately $29,000 in Texas or Florida. Use the calculator above to see your exact New York 1099 tax bill, or read on to understand every layer of what you owe.
          </p>
        </article>

        {/* What NY Contractors Owe Section */}
        <article className="max-w-3xl mx-auto px-4 mt-16">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-4">What a New York 1099 contractor actually owes in 2026</h2>
          <p className="text-zinc-400 leading-relaxed mb-4">
            Here is what a freelancer earning different income levels owes in 2026, comparing New York State (outside NYC) vs New York City, assuming standard deductions and no additional business expenses.
          </p>

          <h3 className="text-white font-semibold mb-4">New York State (outside NYC):</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="border-b border-zinc-800 text-zinc-400 uppercase text-xs tracking-wider">
                  <th className="py-3 pr-4 font-medium">Net 1099 Income</th>
                  <th className="py-3 pr-4 font-medium">SE Tax</th>
                  <th className="py-3 pr-4 font-medium">Federal Income Tax</th>
                  <th className="py-3 pr-4 font-medium">NY State Tax</th>
                  <th className="py-3 pr-4 font-medium">Total Tax</th>
                  <th className="py-3 font-medium">Effective Rate</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['$40,000', '$5,652', '$2,836', '$1,840', '$10,328', '~26%'],
                  ['$60,000', '$8,478', '$5,836', '$3,192', '$17,506', '~29%'],
                  ['$80,000', '$11,304', '$9,836', '$4,712', '$25,852', '~32%'],
                  ['$100,000', '$14,130', '$14,836', '$6,132', '$35,098', '~35%'],
                  ['$150,000', '$16,377', '$28,711', '$10,282', '$55,370', '~37%'],
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

          <h3 className="text-white font-semibold mt-8 mb-4">New York City (add city tax):</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="border-b border-zinc-800 text-zinc-400 uppercase text-xs tracking-wider">
                  <th className="py-3 pr-4 font-medium">Net 1099 Income</th>
                  <th className="py-3 pr-4 font-medium">NY State Tax</th>
                  <th className="py-3 pr-4 font-medium">NYC City Tax</th>
                  <th className="py-3 pr-4 font-medium">MTA Tax</th>
                  <th className="py-3 font-medium">Extra vs Upstate NY</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['$60,000', '$3,192', '$1,848', '$204', '+$2,052'],
                  ['$80,000', '$4,712', '$2,864', '$272', '+$3,136'],
                  ['$100,000', '$6,132', '$3,576', '$340', '+$3,916'],
                  ['$150,000', '$10,282', '$5,364', '$510', '+$5,874'],
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
          <p className="text-zinc-500 text-xs mt-2">Estimates assume single filer, standard deduction, no additional business deductions. NY state tax calculated using 2026 published brackets. NYC city tax calculated at applicable marginal rates. Use the calculator above for your exact figures.</p>
        </article>

        {/* NY vs Other States */}
        <article className="max-w-3xl mx-auto px-4 mt-16">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-4">New York vs other states: the real cost difference</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="border-b border-zinc-800 text-zinc-400 uppercase text-xs tracking-wider">
                  <th className="py-3 pr-4 font-medium">State</th>
                  <th className="py-3 pr-4 font-medium">State + Local Tax at $100k</th>
                  <th className="py-3 pr-4 font-medium">Total Tax</th>
                  <th className="py-3 pr-4 font-medium">vs New York State</th>
                  <th className="py-3 font-medium">vs NYC</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['NYC', '~$10,048', '~$38,928', '+$3,916', '—'],
                  ['New York State', '~$6,132', '~$35,098', '—', '-$3,916'],
                  ['California', '~$8,548', '~$37,514', '+$2,416', '-$1,414'],
                  ['Texas', '$0', '~$28,966', '-$6,132', '-$9,962'],
                  ['Florida', '$0', '~$28,966', '-$6,132', '-$9,962'],
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
          <p className="text-zinc-500 text-xs mt-2">State tax estimates based on 2026 published rates, single filer, $100,000 net income.</p>
          <p className="text-zinc-400 leading-relaxed mt-4">
            The difference between a NYC freelancer and a Texas freelancer at $100,000 net income is approximately $10,000 per year — purely in state and city taxes. At $150,000, that gap widens to approximately $16,000–$18,000 annually. This is why high-earning NYC contractors are among the most frequent interstate relocators for tax purposes.
          </p>
        </article>

        {/* NYC UBT */}
        <article className="max-w-3xl mx-auto px-4 mt-16">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-4">The NYC Unincorporated Business Tax (UBT)</h2>
          <p className="text-zinc-400 leading-relaxed mb-4">
            NYC freelancers earning above $95,000 in net self-employment income face an additional consideration: the Unincorporated Business Tax (UBT) at 4% of net income.
          </p>
          <p className="text-zinc-400 leading-relaxed mb-4">
            The practical impact is more limited than it sounds. NYC provides a personal income tax credit equal to 100% of UBT paid, which means the UBT generally does not create additional tax burden beyond what you already owe in city income tax. However, the credit has a cap, and the interaction between UBT and the NYC personal income tax credit is complex enough that contractors earning above $95,000 in New York City should consult a CPA to model the exact impact.
          </p>
          <p className="text-zinc-500 text-xs">Source: NYC Department of Finance, Unincorporated Business Tax rules.</p>
        </article>

        {/* NY-Specific Deductions */}
        <article className="max-w-3xl mx-auto px-4 mt-16">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-4">New York-specific deductions and quirks</h2>
          <p className="text-zinc-400 leading-relaxed mb-6">
            New York follows most federal deduction rules but has several important differences that affect self-employed contractors.
          </p>
          <div className="space-y-6">
            <div>
              <h3 className="text-white font-semibold mb-1">Lower state standard deduction</h3>
              <p className="text-zinc-400 leading-relaxed">
                New York&apos;s standard deduction for single filers is $8,000 — significantly lower than the 2026 federal standard deduction of $16,100. This means more of your income is subject to state tax even if you take the standard deduction at both levels. For high-income contractors, itemizing on the New York state return may produce better results than taking the state standard deduction, even if you take the federal standard deduction.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">No QBI deduction at the state level</h3>
              <p className="text-zinc-400 leading-relaxed">
                The federal Qualified Business Income (QBI) deduction allows many self-employed contractors to deduct up to 20% of net business income from federal taxable income. New York does not conform to this deduction — it does not reduce your New York state taxable income. A contractor claiming a $15,000 QBI deduction on their federal return saves nothing on their New York state return from that deduction.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">SE tax deduction applies at the state level</h3>
              <p className="text-zinc-400 leading-relaxed">
                Unlike the QBI deduction, New York does allow the federal SE tax deduction (half of SE tax) to carry through to the state return, reducing your state taxable income.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">Home office deduction</h3>
              <p className="text-zinc-400 leading-relaxed">
                New York follows federal home office rules. For NYC residents paying high rents, the actual expense method almost always produces a significantly larger deduction than the simplified $5/sq ft method. At $3,500/month NYC rent with a 200 sq ft dedicated office in a 1,000 sq ft apartment (20% business use), the actual deduction is $8,400/year — versus $1,000 under the simplified method.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">Health insurance premiums</h3>
              <p className="text-zinc-400 leading-relaxed">
                Often 100% deductible at both the federal and New York state level for self-employed individuals who are not eligible for employer-sponsored coverage. Source: IRS Publication 535; NY Tax Law §612.
              </p>
            </div>
          </div>
        </article>

        {/* Quarterly Deadlines */}
        <section className="max-w-3xl mx-auto px-4 mt-16">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-4">Quarterly estimated taxes in New York</h2>
          <p className="text-zinc-400 leading-relaxed mb-4">
            New York 1099 contractors must pay federal, New York state, and (if applicable) New York City estimated taxes separately throughout the year.
          </p>
          <h3 className="text-white font-semibold mb-2">Federal estimated tax deadlines for 2026:</h3>
          <ul className="space-y-2 text-zinc-300 list-disc list-inside mb-6">
            <li><span className="text-indigo-400 font-semibold">April 15</span> — Q1 (January–March income)</li>
            <li><span className="text-indigo-400 font-semibold">June 16</span> — Q2 (April–May income)</li>
            <li><span className="text-indigo-400 font-semibold">September 15</span> — Q3 (June–August income)</li>
            <li><span className="text-indigo-400 font-semibold">January 15, 2027</span> — Q4 (September–December income)</li>
          </ul>
          <h3 className="text-white font-semibold mb-2">New York state estimated tax deadlines for 2026:</h3>
          <p className="text-zinc-400 leading-relaxed mb-4">
            New York follows the same schedule as federal — April 15, June 15, September 15, and January 15. File using Form IT-2105. The threshold to pay estimated taxes in New York is $300 expected liability — lower than the federal $1,000 threshold. Source: New York Department of Taxation and Finance, IT-2105 instructions.
          </p>
          <p className="text-zinc-400 leading-relaxed mb-4">
            NYC estimated taxes: NYC residents include their estimated city tax within the same state estimated payment — same form, same schedule, separate calculation on the NYC section.
          </p>
          <p className="text-zinc-400 leading-relaxed">
            A safe set-aside rate for New York State contractors (outside NYC) is 32–36% of net income. For NYC contractors, lean toward 38–42% depending on income level.
          </p>
        </section>

        {/* New York LLC Rules */}
        <article className="max-w-3xl mx-auto px-4 mt-16">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-4">New York LLC rules for freelancers</h2>
          <p className="text-zinc-400 leading-relaxed mb-6">
            New York has distinct LLC requirements worth understanding before forming one.
          </p>
          <div className="space-y-6">
            <div>
              <h3 className="text-white font-semibold mb-1">Biennial Statement — $9 every two years</h3>
              <p className="text-zinc-400 leading-relaxed">
                New York LLCs file a Biennial Statement with the Department of State every two years. The fee is $9 — among the lowest in the country. Source: New York Department of State, dos.ny.gov.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">Annual Filing Fee (Form IT-204-LL) — $25 to $4,500 per year</h3>
              <p className="text-zinc-400 leading-relaxed">
                Separate from the Biennial Statement, New York charges LLCs an annual filing fee based on gross income from New York sources. This is filed with the Department of Taxation and Finance. At $0–$100,000 in NY-source gross income the fee is $25; at $100,001–$250,000 it is $50; scaling up to $4,500 for LLCs with over $25 million in NY-source income. Source: New York Tax Law §658(c)(3). Most freelance LLCs earning under $250,000 pay $25–$50 in annual filing fees — far lower than California&apos;s $800 minimum.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">Publication requirement</h3>
              <p className="text-zinc-400 leading-relaxed">
                New York requires newly formed LLCs to publish a notice of formation in two newspapers for six consecutive weeks. Publication costs vary by county but typically run $300–$1,200 in most New York counties, and up to $1,500+ in New York City. This is a one-time cost at formation. Source: New York LLC Law §206.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">S-Corp election in New York</h3>
              <p className="text-zinc-400 leading-relaxed mb-4">
                New York recognizes the federal S-Corp election. At $60,000–$70,000 in net profit, the federal SE tax savings from splitting income between salary and distributions typically exceed the administrative costs of running payroll. For NYC contractors, the city income tax treatment of S-Corp distributions adds complexity — consult a CPA before making the election.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                Use the <Link href="/llc-tax-calculator" className="text-indigo-400 hover:text-indigo-300 transition-colors underline">LLC tax savings calculator</Link> to model your specific New York S-Corp savings at the federal level.
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
                id: 'ny-state-tax',
                title: 'How much state tax do New York 1099 contractors pay?',
                content: `New York uses progressive brackets from 4% to 10.9%. Most freelancers earning $60,000–$150,000 net pay an effective New York state rate of approximately 5.3%–6.85%, well below the headline 10.9% top rate (which applies above $25 million). NYC residents add another 3.078%–3.876% in city income tax on top.`,
              },
              {
                id: 'nyc-city-tax',
                title: 'Do NYC freelancers pay city income tax?',
                content: `Yes. NYC residents pay a city income tax of 3.078%–3.876% on top of their New York state income tax. This applies to self-employment income exactly as it applies to wages. It is unique to NYC — contractors living in Nassau County, Westchester, or New Jersey but working for NYC clients do not pay the city tax.`,
              },
              {
                id: 'ny-mta-tax',
                title: 'What is the MTA tax for New York freelancers?',
                content: `The Metropolitan Commuter Transportation Mobility Tax (MCTMT) is 0.34% of net self-employment earnings for self-employed individuals in the NYC metro area (NYC, Long Island, and several surrounding counties). Filed on Form MTA-6 with your New York state return.`,
              },
              {
                id: 'ny-qbi',
                title: 'Does New York allow the QBI deduction?',
                content: `No. The federal Qualified Business Income (QBI) deduction — which can reduce federal taxable income by up to 20% — does not carry through to your New York state return. This is one of the most significant differences between federal and New York state tax treatment of self-employment income.`,
              },
              {
                id: 'ny-set-aside',
                title: 'How much should a New York freelancer set aside for taxes?',
                content: `32–36% of net income for contractors living outside NYC. 38–42% for NYC residents, depending on income level. The extra city tax layer makes New York City one of the highest-burden environments for 1099 work in the country. Use the calculator above to get your exact quarterly payment amount.`,
              },
              {
                id: 'ny-good-state',
                title: 'Is New York a good state for freelancers from a tax perspective?',
                content: `New York ranks among the least favorable states for self-employed workers on tax grounds alone. However, New York — and NYC in particular — offers unmatched access to high-paying freelance clients in finance, media, tech, and creative industries. Many contractors find that higher billing rates more than compensate for the additional tax burden. The comparison depends heavily on your industry and client concentration.`,
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
                <p className="text-indigo-400 text-xs font-bold uppercase tracking-widest mb-1">New York 1099 Tax Calculator</p>
                <p className="text-white font-semibold group-hover:text-indigo-300 transition-colors">
                  Use the full calculator to see your exact federal, state, and local tax bill
                </p>
              </div>
              <ChevronRight size={20} className="text-zinc-600 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all shrink-0 mt-1" />
            </div>
          </Link>
        </div>

        {/* Final CTA Section */}
        <section className="max-w-3xl mx-auto px-4 mt-16">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-4">Calculate your exact New York 1099 tax bill</h2>
          <p className="text-zinc-400 leading-relaxed mb-4">
            The tables above use standard assumptions. Your actual bill depends on your filing status, location (NYC vs upstate), deductions, business expenses, and whether you operate as a sole proprietor or LLC.
          </p>
          <p className="text-zinc-400 leading-relaxed mb-4">
            The <Link href="/1099-tax-calculator" className="text-indigo-400 hover:text-indigo-300 transition-colors underline">1099 tax calculator</Link> gives you a precise federal and SE tax breakdown based on your specific income and deductions, updated for 2026 brackets. For the full New York state and NYC city tax calculation — particularly if you are navigating the UBT, MTA tax, or QBI deduction differences — a New York CPA is strongly recommended.
          </p>
          <p className="text-zinc-400 leading-relaxed mb-4">
            If your net profit is over $60,000, also check the <Link href="/llc-tax-calculator" className="text-indigo-400 hover:text-indigo-300 transition-colors underline">LLC tax savings calculator</Link> to see whether the S-Corp election saves you money after accounting for New York&apos;s specific LLC fees and filing requirements.
          </p>
          <p className="text-zinc-500 text-xs mt-8">
            Federal estimates based on 2026 IRS tax brackets. New York state estimates based on 2026 NY Department of Taxation and Finance published rates. NYC city tax based on 2026 published city tax schedules. For educational purposes only. New York and NYC tax law is complex — consult a New York CPA for advice specific to your situation.
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
