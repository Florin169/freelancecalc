import TaxCalculator from '@/components/TaxCalculator';
import TaxGuideAccordion from '@/components/TaxGuideAccordion';
import Link from 'next/link';
import Script from 'next/script';
import { ChevronRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '1099 Tax Calculator Ohio (2026) — Freelancer & Contractor Tax Estimator',
  description: 'Free 1099 tax calculator for Ohio freelancers. Ohio moved to a flat 2.75% income tax in 2026 — see your exact federal, state, and SE tax bill. Updated for HB 96.',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the Ohio state income tax rate for 1099 contractors in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ohio uses a flat 2.75% rate on all taxable income above $26,050. Income at or below that threshold is not taxed at the state level. This flat structure was enacted under House Bill 96 and took effect January 1, 2026, replacing the previous multi-bracket system.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do Ohio freelancers pay city income tax?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Possibly, depending on where you live. Most Ohio cities levy their own municipal income tax in addition to the state 2.75% rate. Columbus, Cleveland, and Akron charge 2.5%; Cincinnati charges 1.8%. Rural freelancers and those in smaller municipalities may pay lower rates or no local tax.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much should an Ohio freelancer set aside for taxes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '28–32% of net income for freelancers outside major cities. 30–35% for Columbus, Cleveland, or Akron residents who also pay the 2.5% city income tax.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Ohio tax self-employment income?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, at the state level. Ohio\u2019s 2.75% flat rate applies to self-employment income above $26,050. Additionally, self-employment income is subject to the federal 15.3% SE tax like all US contractors. Any applicable city income tax also applies to self-employment income.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Ohio a good state for freelancers from a tax perspective?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ohio is competitive in the Midwest. The 2026 flat tax reform made Ohio simpler and slightly cheaper than neighboring Indiana and Pennsylvania. However, no-income-tax states like Texas and Florida offer a roughly $2,000–$3,500 annual tax advantage at $100,000 net income. The bigger variable for Ohio residents is city income tax — freelancers in Columbus or Cleveland pay more than those in smaller Ohio communities.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Ohio have an annual LLC fee?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Ohio is one of five states with no annual report requirement for LLCs. After paying the $99 one-time formation fee, there are no recurring state-level fees for maintaining your Ohio LLC.',
      },
    },
  ],
};

export default function OhioPage() {
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
            <span className="text-zinc-300">Ohio</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-zinc-800 bg-black">
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/40 to-transparent pointer-events-none" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none" />

          <div className="relative max-w-4xl mx-auto text-center px-6 py-12 md:py-24">
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-[1.1]">
              1099 Tax Calculator Ohio 2025–2026 & <br />
              <span className="bg-gradient-to-r from-indigo-400 to-indigo-600 bg-clip-text text-transparent">What Freelancers Actually Owe in Ohio</span>
            </h1>

            <p className="text-zinc-400 text-lg md:text-xl mt-6 max-w-2xl mx-auto leading-relaxed font-light">
              Ohio just became one of the simplest states in the country for freelancers to calculate their taxes — a flat 2.75% income tax on income above $26,050, no brackets, no marginal rates. But city taxes in Columbus, Cleveland, and Akron add 2.5% on top. Use the calculator above to see your exact federal + state bill. Updated for HB 96.
            </p>
          </div>
        </section>

        {/* Main Calculator Split-Pane */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 -mt-6 md:-mt-12 relative z-10">
          <TaxCalculator defaultMode="freelance" showSeBreakdown />
        </div>

        {/* How 1099 Taxes Work Section */}
        <article className="max-w-3xl mx-auto px-4 mt-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">How 1099 taxes work in Ohio</h2>
          <p className="text-zinc-400 leading-relaxed mb-8">
            Ohio 1099 contractors have three potential tax obligations — plus a fourth if you live in a taxing municipality:
          </p>

          <div className="space-y-6 text-zinc-400 leading-relaxed mb-8">
            <div>
              <h3 className="text-white font-semibold mb-1">Federal income tax</h3>
              <p>Calculated on net profit after deductions at standard federal brackets. Identical for all US taxpayers regardless of state.</p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">Self-Employment (SE) tax</h3>
              <p>15.3% on 92.35% of net earnings, covering both halves of Social Security (12.4% up to the $184,500 wage base) and Medicare (2.9% with no cap). As a 1099 contractor, you pay both the employer and employee portions.</p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">Ohio state income tax</h3>
              <p>A flat 2.75% on all taxable income above $26,050. Income at or below that threshold is not taxed at the state level. Source: Ohio House Bill 96, 136th General Assembly, effective January 1, 2026.</p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">Municipal income tax (if applicable)</h3>
              <p>If you live and work in an Ohio city, that city levies its own income tax in addition to the state rate. This is separate from and on top of the 2.75% state tax. Major city rates: Columbus 2.5%, Cleveland 2.5%, Akron 2.5%, Cincinnati 1.8%. Source: Ohio Department of Taxation; gettaxcalculator.com citing Ohio municipal tax data, updated 2026.</p>
            </div>
          </div>

          <p className="text-zinc-400 leading-relaxed">
            Use the calculator above to see your exact Ohio 1099 tax bill, or read on for the full breakdown.
          </p>
        </article>

        {/* What OH Contractors Owe Section */}
        <article className="max-w-3xl mx-auto px-4 mt-16">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-4">What an Ohio 1099 contractor actually owes in 2026</h2>
          <p className="text-zinc-400 leading-relaxed mb-4">
            Here is what a freelancer owes in Ohio at different income levels in 2026, assuming standard deductions and no additional business expenses. The table below shows two scenarios: Ohio state only, and Ohio state plus a 2.5% city tax (Columbus, Cleveland, or Akron).
          </p>

          <h3 className="text-white font-semibold mb-4">Ohio state only (outside a taxing municipality):</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="border-b border-zinc-800 text-zinc-400 uppercase text-xs tracking-wider">
                  <th className="py-3 pr-4 font-medium">Net 1099 Income</th>
                  <th className="py-3 pr-4 font-medium">SE Tax</th>
                  <th className="py-3 pr-4 font-medium">Federal Income Tax</th>
                  <th className="py-3 pr-4 font-medium">OH State Tax (2.75%)</th>
                  <th className="py-3 pr-4 font-medium">Total Tax</th>
                  <th className="py-3 font-medium">Effective Rate</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['$40,000', '$5,652', '$2,836', '$385', '$8,873', '~22%'],
                  ['$60,000', '$8,478', '$5,836', '$935', '$15,249', '~25%'],
                  ['$80,000', '$11,304', '$9,836', '$1,485', '$22,625', '~28%'],
                  ['$100,000', '$14,130', '$14,836', '$2,035', '$31,001', '~31%'],
                  ['$150,000', '$16,377', '$28,711', '$3,410', '$48,498', '~32%'],
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
          <p className="text-zinc-500 text-xs mt-2">Ohio state tax calculated as 2.75% of (net income minus $26,050). Assumes single filer, federal standard deduction $16,100, no additional business deductions.</p>

          <h3 className="text-white font-semibold mb-4 mt-8">Add city tax for Columbus, Cleveland, or Akron residents (+2.5% on all income):</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="border-b border-zinc-800 text-zinc-400 uppercase text-xs tracking-wider">
                  <th className="py-3 pr-4 font-medium">Net 1099 Income</th>
                  <th className="py-3 pr-4 font-medium">City Tax (2.5%)</th>
                  <th className="py-3 pr-4 font-medium">Total with City Tax</th>
                  <th className="py-3 font-medium">vs State Only</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['$60,000', '$1,500', '$16,749', '+$1,500'],
                  ['$80,000', '$2,000', '$24,625', '+$2,000'],
                  ['$100,000', '$2,500', '$33,501', '+$2,500'],
                  ['$150,000', '$3,750', '$52,248', '+$3,750'],
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
          <p className="text-zinc-500 text-xs mt-2">City tax applies to all net self-employment income. Rates confirmed for Columbus, Cleveland, and Akron at 2.5% for 2026. Cincinnati residents use 1.8%.</p>
          <p className="text-zinc-400 leading-relaxed mt-4">
            Use the 1099 tax calculator for your exact figures based on your specific income, deductions, and city.
          </p>
        </article>

        {/* OH vs Other States */}
        <article className="max-w-3xl mx-auto px-4 mt-16">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-4">Ohio vs other states: where it lands</h2>
          <p className="text-zinc-400 leading-relaxed mb-4">
            Ohio&apos;s 2.75% flat rate puts it firmly in the middle of the national spectrum — far cheaper than California or New York, slightly higher than no-income-tax states like Texas and Florida, and now simpler than almost all neighboring states.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="border-b border-zinc-800 text-zinc-400 uppercase text-xs tracking-wider">
                  <th className="py-3 pr-4 font-medium">State</th>
                  <th className="py-3 pr-4 font-medium">State Income Tax at $100k</th>
                  <th className="py-3 pr-4 font-medium">Total Tax at $100k</th>
                  <th className="py-3 font-medium">vs Ohio</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Texas', '$0', '~$28,966', '-$2,035'],
                  ['Florida', '$0', '~$28,966', '-$2,035'],
                  ['Ohio', '~$2,035', '~$31,001', '—'],
                  ['Indiana', '~$3,050', '~$32,016', '+$1,015'],
                  ['Pennsylvania', '~$3,070', '~$32,036', '+$1,035'],
                  ['Michigan', '~$4,050', '~$33,016', '+$2,015'],
                  ['Illinois', '~$4,950', '~$33,916', '+$2,915'],
                  ['New York', '~$6,132', '~$35,098', '+$4,097'],
                  ['California', '~$8,548', '~$37,514', '+$6,513'],
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
          <p className="text-zinc-500 text-xs mt-2">State tax estimates based on 2026 published rates, single filer, $100,000 net income. Ohio figure excludes city tax.</p>
          <p className="text-zinc-400 leading-relaxed mt-4">
            Ohio is now competitive with its Midwest neighbors and significantly cheaper than coastal states. Indiana (3.05%) and Pennsylvania (3.07%) both charge slightly more than Ohio&apos;s new 2.75% rate.
          </p>
        </article>

        {/* The Ohio 2026 Flat Tax */}
        <article className="max-w-3xl mx-auto px-4 mt-16">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-4">The Ohio 2026 flat tax: what changed and why it matters for freelancers</h2>
          <p className="text-zinc-400 leading-relaxed mb-4">
            Before 2026, Ohio had a graduated bracket system where higher income was taxed at progressively higher rates. Under House Bill 96, signed by Governor Mike DeWine on June 30, 2025, the old structure was replaced with a single 2.75% rate on all income above $26,050. The higher bracket that previously taxed income above $100,000 at 3.125% was eliminated entirely.
          </p>
          <p className="text-zinc-400 leading-relaxed mb-4">
            For freelancers this change has two practical effects.
          </p>
          <p className="text-zinc-400 leading-relaxed mb-4">
            First, quarterly estimated tax calculations became simpler. Previously, estimating your Ohio tax required knowing which bracket you&apos;d land in. Now you multiply net income above $26,050 by 0.0275 and you have your Ohio liability. No bracket lookups, no marginal rate calculations.
          </p>
          <p className="text-zinc-400 leading-relaxed mb-4">
            Second, higher-earning Ohio freelancers got a modest tax cut. A contractor earning $150,000 previously paid Ohio&apos;s highest marginal rate (3.125% in 2025) on income above $100,000. In 2026, that same income is taxed at 2.75% — saving approximately $375 at that income level relative to 2025.
          </p>
        </article>

        {/* Ohio-Specific Deductions */}
        <article className="max-w-3xl mx-auto px-4 mt-16">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-4">Ohio-specific deductions and considerations</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-white font-semibold mb-1">Ohio personal exemption</h3>
              <p className="text-zinc-400 leading-relaxed">
                Ohio provides a personal income exemption of approximately $2,400 for single filers (reduced at higher AGI levels). This reduces your Ohio taxable income before the 2.75% rate applies. Source: gettaxcalculator.com citing Ohio Department of Taxation, 2026.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">Ohio does not conform to the federal QBI deduction</h3>
              <p className="text-zinc-400 leading-relaxed">
                The federal Qualified Business Income deduction allows many 1099 contractors to deduct up to 20% of net business income from federal taxable income. Ohio does not allow this same deduction on the state return. This is the same issue as New York — a deduction that saves you money federally provides no Ohio state tax benefit. Source: Ohio Department of Taxation.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">Federal SE tax deduction applies at the state level</h3>
              <p className="text-zinc-400 leading-relaxed">
                Unlike the QBI deduction, Ohio does allow the federal SE tax adjustment (deducting half of your SE tax from adjusted gross income) to flow through to your Ohio return.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">Home office deduction</h3>
              <p className="text-zinc-400 leading-relaxed">
                Ohio follows federal home office rules. The same deduction that reduces your federal taxable income also reduces your Ohio taxable income. Given Ohio&apos;s lower state rate (2.75%), the state tax savings per deduction dollar are smaller than in California or New York, but they apply on top of the federal savings.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">Health insurance premiums</h3>
              <p className="text-zinc-400 leading-relaxed">
                Often 100% deductible at the federal level for self-employed individuals not eligible for employer coverage. Source: IRS Publication 535. The federal deduction reduces both your federal and Ohio taxable income.
              </p>
            </div>
          </div>
        </article>

        {/* Municipal Income Tax */}
        <article className="max-w-3xl mx-auto px-4 mt-16">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-4">Municipal income tax: what Ohio freelancers often miss</h2>
          <p className="text-zinc-400 leading-relaxed mb-4">
            This is the most commonly overlooked part of Ohio tax planning for 1099 contractors, and the one that causes the biggest surprises.
          </p>
          <p className="text-zinc-400 leading-relaxed mb-4">
            Most Ohio cities levy their own local income tax on residents, separate from and in addition to the state 2.75% rate. Unlike some states where city taxes only apply to wages, Ohio municipal taxes generally apply to self-employment income as well.
          </p>
          <p className="text-zinc-400 leading-relaxed mb-4">
            The key practical points for freelancers:
          </p>
          <ul className="space-y-2 text-zinc-300 list-disc list-inside mb-4">
            <li>Your municipality&apos;s rate applies to your net self-employment income. You typically file a municipal tax return with your city (or through RITA or CCA, the regional collection agencies) in addition to your Ohio state return.</li>
            <li>If you live in one city but work for clients in another city, the rules for how income is allocated between municipalities can get complex. For contractors working entirely from home for remote clients, your home city&apos;s rate generally applies.</li>
            <li>The rates for major Ohio freelance hubs: Columbus 2.5%, Cleveland 2.5%, Akron 2.5%, Cincinnati 1.8%, Toledo 2.25%, Dayton 2.25%.</li>
            <li>Rural Ohio freelancers and those in smaller municipalities often pay lower rates or no local income tax at all.</li>
          </ul>
        </article>

        {/* Quarterly Deadlines */}
        <section className="max-w-3xl mx-auto px-4 mt-16">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-4">Quarterly estimated taxes in Ohio</h2>
          <p className="text-zinc-400 leading-relaxed mb-4">
            Ohio 1099 contractors must pay federal estimated taxes and Ohio state estimated taxes separately.
          </p>
          <h3 className="text-white font-semibold mb-2">Federal estimated tax deadlines for 2026:</h3>
          <ul className="space-y-2 text-zinc-300 list-disc list-inside mb-6">
            <li><span className="text-indigo-400 font-semibold">April 15</span> — Q1 (January–March income)</li>
            <li><span className="text-indigo-400 font-semibold">June 16</span> — Q2 (April–May income)</li>
            <li><span className="text-indigo-400 font-semibold">September 15</span> — Q3 (June–August income)</li>
            <li><span className="text-indigo-400 font-semibold">January 15, 2027</span> — Q4 (September–December income)</li>
          </ul>
          <h3 className="text-white font-semibold mb-2">Ohio state estimated tax</h3>
          <p className="text-zinc-400 leading-relaxed mb-4">
            Ohio follows the same quarterly schedule as the federal government. File using Ohio Form IT 1040ES. The threshold for paying Ohio estimated taxes is $500 in expected Ohio tax liability for the year. Source: Ohio Department of Taxation, IT 1040ES instructions.
          </p>
          <h3 className="text-white font-semibold mb-2">Municipal estimated taxes</h3>
          <p className="text-zinc-400 leading-relaxed mb-4">
            Many Ohio cities also require quarterly estimated payments. Columbus, Cleveland, and Akron all require estimated payments if your municipal tax liability exceeds a threshold. Check with your municipality or RITA/CCA for specific deadlines.
          </p>
          <p className="text-zinc-400 leading-relaxed">
            A safe set-aside rate for Ohio freelancers outside major cities is 28–32% of net income. For Columbus, Cleveland, or Akron residents, add another 2–3% to account for the city tax — bringing the recommended set-aside to 30–35%.
          </p>
        </section>

        {/* Ohio LLC Rules */}
        <article className="max-w-3xl mx-auto px-4 mt-16">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-4">Ohio LLC rules for freelancers</h2>
          <p className="text-zinc-400 leading-relaxed mb-6">
            Ohio is one of the most straightforward and affordable states in the country for LLC formation and maintenance.
          </p>
          <div className="space-y-6">
            <div>
              <h3 className="text-white font-semibold mb-1">$99 one-time formation fee</h3>
              <p className="text-zinc-400 leading-relaxed">
                Ohio charges $99 to file Articles of Organization with the Secretary of State. This is a one-time fee. Source: Ohio Secretary of State, confirmed Q2 2026 across multiple sources.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">No annual report required</h3>
              <p className="text-zinc-400 leading-relaxed mb-4">
                Ohio is one of only five states with no annual LLC report filing requirement. There is no recurring annual fee. Source: confirmed across Ohio Secretary of State resources and multiple LLC compliance guides, 2026. This alone saves Ohio freelancers $100–$500/year compared to states like New York ($9 biennial + $300–$1,200 publication) or California ($800 minimum annual franchise tax).
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">S-Corp election</h3>
              <p className="text-zinc-400 leading-relaxed mb-4">
                Ohio recognizes the federal S-Corp election. At $60,000–$70,000 in net profit, the SE tax savings from splitting income between salary and distributions typically justify the administrative costs. Ohio&apos;s flat 2.75% rate and zero annual fees make the S-Corp math clean — unlike California where additional franchise taxes complicate the calculation.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                Use the <Link href="/llc-tax-calculator" className="text-indigo-400 hover:text-indigo-300 transition-colors underline">LLC tax savings calculator</Link> to model your specific Ohio S-Corp savings.
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
                id: 'oh-state-tax',
                title: 'What is the Ohio state income tax rate for 1099 contractors in 2026?',
                content: `Ohio uses a flat 2.75% rate on all taxable income above $26,050. Income at or below that threshold is not taxed at the state level. This flat structure was enacted under House Bill 96 and took effect January 1, 2026, replacing the previous multi-bracket system.`,
              },
              {
                id: 'oh-city-tax',
                title: 'Do Ohio freelancers pay city income tax?',
                content: `Possibly, depending on where you live. Most Ohio cities levy their own municipal income tax in addition to the state 2.75% rate. Columbus, Cleveland, and Akron charge 2.5%; Cincinnati charges 1.8%. If you live in one of these cities, your total Ohio tax burden is the state rate plus the city rate. Rural freelancers and those in smaller municipalities may pay lower rates or no local tax.`,
              },
              {
                id: 'oh-set-aside',
                title: 'How much should an Ohio freelancer set aside for taxes?',
                content: `28–32% of net income for freelancers outside major cities. 30–35% for Columbus, Cleveland, or Akron residents who also pay the 2.5% city income tax. Use the calculator above for your exact quarterly payment amount.`,
              },
              {
                id: 'oh-se-tax',
                title: 'Does Ohio tax self-employment income?',
                content: `Yes, at the state level. Ohio\u2019s 2.75% flat rate applies to self-employment income above $26,050. Additionally, self-employment income is subject to the federal 15.3% SE tax like all US contractors. Any applicable city income tax also applies to self-employment income.`,
              },
              {
                id: 'oh-good-state',
                title: 'Is Ohio a good state for freelancers from a tax perspective?',
                content: `Ohio is competitive in the Midwest. The 2026 flat tax reform made Ohio simpler and slightly cheaper than neighboring Indiana and Pennsylvania. However, no-income-tax states like Texas and Florida offer a roughly $2,000–$3,500 annual tax advantage at $100,000 net income. The bigger variable for Ohio residents is city income tax — freelancers in Columbus or Cleveland pay more than those in smaller Ohio communities.`,
              },
              {
                id: 'oh-llc-fee',
                title: 'Does Ohio have an annual LLC fee?',
                content: `No. Ohio is one of five states with no annual report requirement for LLCs. After paying the $99 one-time formation fee, there are no recurring state-level fees for maintaining your Ohio LLC. This makes Ohio one of the most cost-effective states for long-term LLC operation.`,
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
                <p className="text-indigo-400 text-xs font-bold uppercase tracking-widest mb-1">Ohio 1099 Tax Calculator</p>
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
          <h2 className="text-xl md:text-2xl font-bold text-white mb-4">Calculate your exact Ohio 1099 tax bill</h2>
          <p className="text-zinc-400 leading-relaxed mb-4">
            The tables above use standard assumptions. Your actual bill depends on your filing status, city of residence, deductions, and business expenses.
          </p>
          <p className="text-zinc-400 leading-relaxed mb-4">
            The <Link href="/1099-tax-calculator" className="text-indigo-400 hover:text-indigo-300 transition-colors underline">1099 tax calculator</Link> gives you a precise federal and SE tax breakdown based on your specific income and deductions, updated for 2026 brackets. For Ohio&apos;s state and city tax layer, the 2.75% flat rate makes the calculation straightforward — multiply your net income above $26,050 by 0.0275 and add your city rate if applicable.
          </p>
          <p className="text-zinc-400 leading-relaxed mb-4">
            If your net profit is over $60,000, also check the <Link href="/llc-tax-calculator" className="text-indigo-400 hover:text-indigo-300 transition-colors underline">LLC tax savings calculator</Link> — Ohio&apos;s zero annual fees and flat tax rate make it one of the cleaner states to implement the S-Corp election.
          </p>
          <p className="text-zinc-500 text-xs mt-8">
            Federal estimates based on 2026 IRS tax brackets. Ohio state estimates based on House Bill 96, 136th General Assembly, effective January 1, 2026. For educational purposes only. Consult a CPA for advice specific to your situation, particularly regarding municipal income tax obligations.
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