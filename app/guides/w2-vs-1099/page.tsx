import Script from 'next/script';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export const metadata = {
  title: 'W2 vs 1099 Calculator 2025–2026 | True Take-Home Pay Comparison',
  description: 'W2 and 1099 income are taxed completely differently. See exactly how much more you need to earn as a contractor to match your employee salary — with real numbers.',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the $600 rule for 1099?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If a client pays you $600 or more in a calendar year, they must issue you a 1099-NEC form. You owe self-employment tax on all income regardless of whether you receive the form — the $600 threshold is a reporting requirement for clients, not a tax threshold for contractors.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it better to be W2 or 1099?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'At the same gross income, W2 almost always wins after accounting for the SE tax gap and benefits cost. At a 30–40% higher rate as a contractor, the math flips. Your break-even depends on your rate, state, and deductions.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much should I set aside for 1099 taxes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '25–30% of net income after deductions is the standard starting point. In a high-tax state or high income bracket, lean toward 30–35%. Divide your estimated annual tax by four for quarterly payments.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I deduct business expenses as a 1099 contractor?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Any expense that is ordinary and necessary for your work is deductible — home office, equipment, software, health insurance, professional development, and business travel.',
      },
    },
  ],
};

export default function W2Vs1099GuidePage() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="bg-black text-zinc-50 min-h-screen pb-20 antialiased">
        {/* Breadcrumb */}
        <div className="max-w-4xl mx-auto px-4 pt-8">
          <nav className="flex items-center gap-2 text-sm text-zinc-500"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-zinc-300 transition-colors">
              Home
            </Link>
            <ChevronRight size={16} />
            <span className="text-zinc-500">Guides</span>
            <ChevronRight size={16} />
            <span className="text-zinc-300">W2 vs 1099</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-zinc-800 bg-black">
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/40 to-transparent pointer-events-none" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-indigo-500/10 blur-[40px] rounded-full pointer-events-none" />

          <div className="relative max-w-4xl mx-auto text-center px-6 py-12 md:py-24">
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-[1.1]">
              W2 vs 1099: What&rsquo;s the Real Difference in Take-Home Pay? (2025&ndash;2026)
            </h1>
            <p className="text-zinc-400 text-lg md:text-xl mt-6 max-w-2xl mx-auto leading-relaxed font-light">
              A $90,000 freelance contract is not the same as a $90,000 salary. Not even close.
              This guide breaks down exactly what changes, what it costs you, and how to calculate
              the 1099 rate that actually matches your current salary.
            </p>
          </div>
        </section>

        {/* Article Body */}
        <article className="max-w-3xl mx-auto px-6 py-12 space-y-16">

          {/* Section 1 — Core tax difference */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              The core tax difference between W2 and 1099
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-6">
              When you are a W2 employee, your employer splits the Social Security and Medicare tax
              (called FICA) with you. You each pay 7.65%. It comes out of your paycheck before you ever
              see it, so most employees barely notice it.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-6">
              When you are a 1099 contractor, you pay both halves yourself. The full 15.3%
              Self-Employment (SE) tax lands on you alone.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-6">
              At $80,000 in net income, that difference is $6,120 per year in extra taxes — money a W2
              employee at the same gross never pays out of pocket because the employer absorbs it.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-8">
              That is the single biggest number most people miss when comparing offers.
            </p>
            <div className="overflow-x-auto rounded-lg border border-zinc-800">
              <table className="w-full text-sm text-left text-zinc-300">
                <thead className="bg-zinc-900 text-zinc-100 uppercase text-xs tracking-wider">
                  <tr>
                    <th className="px-4 py-3 font-semibold"></th>
                    <th className="px-4 py-3 font-semibold">W2 Employee</th>
                    <th className="px-4 py-3 font-semibold">1099 Contractor</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800">
                  <tr>
                    <td className="px-4 py-3 font-medium">Gross income</td>
                    <td className="px-4 py-3">$80,000</td>
                    <td className="px-4 py-3">$80,000</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Employer pays FICA</td>
                    <td className="px-4 py-3">$6,120 (7.65%)</td>
                    <td className="px-4 py-3">$0</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Your FICA obligation</td>
                    <td className="px-4 py-3">$6,120 (7.65%)</td>
                    <td className="px-4 py-3">$12,240 (15.3%)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Extra tax vs W2</td>
                    <td className="px-4 py-3">—</td>
                    <td className="px-4 py-3 text-red-400">+$6,120</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 2 — What a 1099 contractor actually takes home */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              What a 1099 contractor actually takes home
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-6">
              Take a specific example. A W2 employee earning $80,000 in California with standard
              deductions takes home roughly $57,000 after federal income tax, state income tax, and
              their half of FICA.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-6">
              A 1099 contractor earning the same $80,000 gross in California takes home roughly $48,500 —
              about $8,500 less — because they pay both sides of FICA, have no employer benefits, and
              cannot contribute to an employer-sponsored 401k match.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-6">
              That $8,500 gap is before accounting for health insurance, which a W2 employer often
              subsidizes and a 1099 contractor buys alone. A basic individual plan runs $400–$800 per
              month, adding another $4,800–$9,600 per year to the comparison.
            </p>
          </section>

          {/* Section 3 — How to convert a W2 salary to a 1099 rate */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              How to convert a W2 salary to a 1099 rate
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-6">
              The standard formula used by most CPAs and contractor rate guides:
            </p>
            <p className="text-zinc-400 leading-relaxed mb-6 font-semibold">
              1099 rate = W2 rate × 1.30 to 1.40
            </p>
            <p className="text-zinc-400 leading-relaxed mb-6">
              The 30–40% premium covers:
            </p>
            <ul className="list-disc list-inside text-zinc-400 mb-6">
              <li>The employer FICA contribution you now pay yourself (~7.65%)</li>
              <li>Benefits you must purchase (health insurance, retirement)</li>
              <li>Unpaid time off (2 weeks off = 2 weeks of $0 income)</li>
              <li>Business overhead (software, equipment, liability)</li>
            </ul>
            <p className="text-zinc-400 leading-relaxed mb-6">
              In practice:
            </p>
            <div className="overflow-x-auto rounded-lg border border-zinc-800 mb-8">
              <table className="w-full text-sm text-left text-zinc-300">
                <thead className="bg-zinc-900 text-zinc-100 uppercase text-xs tracking-wider">
                  <tr>
                    <th className="px-4 py-3 font-semibold">W2 hourly</th>
                    <th className="px-4 py-3 font-semibold">Minimum 1099 equivalent</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800">
                  <tr>
                    <td className="px-4 py-3">$30/hr</td>
                    <td className="px-4 py-3">$39–$42/hr</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">$50/hr</td>
                    <td className="px-4 py-3">$65–$70/hr</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">$75/hr</td>
                    <td className="px-4 py-3">$97–$105/hr</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">$100/hr</td>
                    <td className="px-4 py-3">$130–$140/hr</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-zinc-400 leading-relaxed mb-6">
              These are break-even figures. To actually come out ahead financially, you need to charge
              above this range. Use the{' '}
              <Link
                href="/compare/1099-vs-w2"
                className="text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                W2 vs 1099 calculator
              </Link>{' '}
              to run your specific numbers — it accounts for your state tax rate, deductions, and
              benefits cost.
            </p>
          </section>

          {/* Section 4 — Do 1099 contractors pay more in taxes than W2 employees? */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Do 1099 contractors pay more in taxes than W2 employees?
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-6">
              Generally yes, at the same gross income. But the answer gets more complicated once you
              factor in deductions.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-6">
              1099 contractors can deduct business expenses that W2 employees cannot:
            </p>
            <ul className="list-disc list-inside text-zinc-400 mb-6">
              <li>Home office space (proportional share of rent or mortgage)</li>
              <li>Software, subscriptions, equipment</li>
              <li>Health insurance premiums (often 100% deductible)</li>
              <li>Half of the self-employment tax bill itself</li>
              <li>Business travel and mileage at the IRS standard rate</li>
            </ul>
            <p className="text-zinc-400 leading-relaxed mb-6">
              A contractor who aggressively tracks deductions can bring their taxable income down
              significantly. The key variable is net profit, not gross revenue. Your 1099 taxes are
              calculated on what remains after legitimate business expenses — not on every dollar a client
              pays you.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              So while a 1099 contractor at $80,000 gross with no deductions pays more tax than a W2
              employee at $80,000, a contractor at $80,000 gross with $15,000 in deductions is only
              taxed on $65,000. The gap narrows substantially.
            </p>
          </section>

          {/* Section 5 — The hidden costs of switching to 1099 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              The hidden costs of switching to 1099
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-6">
              Taxes are only part of the picture. The full cost of going 1099 includes:
            </p>
            <div className="space-y-6 text-zinc-300">
              <div>
                <p className="text-white font-semibold">Unpaid time off.</p>
                <p className="text-zinc-400">
                  A W2 employee gets paid vacation. A 1099 contractor who takes two weeks off earns
                  nothing for two weeks. At $75/hr billing 40 hours a week, two weeks off costs
                  $6,000 in lost income.
                </p>
              </div>
              <div>
                <p className="text-white font-semibold">Retirement contributions.</p>
                <p className="text-zinc-400">
                  Many W2 employers match 401k contributions — commonly 3–6% of salary. A contractor
                  must fund their own retirement entirely. A SEP-IRA or Solo 401k lets contractors
                  contribute more than a traditional 401k, but the discipline to actually do it is on
                  you.
                </p>
              </div>
              <div>
                <p className="text-white font-semibold">Unpredictable income.</p>
                <p className="text-zinc-400">
                  Contracts end. Clients go quiet. A W2 employee gets a paycheck every two weeks
                  regardless. A contractor&apos;s income can drop to $0 between engagements.
                </p>
              </div>
              <div>
                <p className="text-white font-semibold">Quarterly estimated taxes.</p>
                <p className="text-zinc-400">
                  1099 contractors must pay estimated taxes four times a year (April, June, September,
                  January). Missing a payment triggers an IRS underpayment penalty even if you pay
                  everything owed at year-end.
                </p>
              </div>
              <div>
                <p className="text-white font-semibold">Business administration.</p>
                <p className="text-zinc-400">
                  Invoicing, contract management, accounting, and tax filing all fall on you. Even using
                  software, this takes real time — time a W2 employee gets paid to work instead.
                </p>
              </div>
            </div>
          </section>

          {/* Section 6 — When 1099 is actually worth it */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              When 1099 is actually worth it
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-6">
              Despite the extra costs, 1099 has real financial upside in the right situation:
            </p>
            <div className="space-y-6 text-zinc-300 mb-6">
              <div>
                <p className="text-white font-semibold">Higher gross pay.</p>
                <p className="text-zinc-400">
                  Contractors typically command 30–50% more than equivalent employees because
                  companies pay a premium for flexibility and to avoid benefits cost. If you can
                  negotiate a rate above the break-even threshold, 1099 income can exceed W2
                  take-home.
                </p>
              </div>
              <div>
                <p className="text-white font-semibold">Deduction leverage.</p>
                <p className="text-zinc-400">
                  Every legitimate business expense lowers your taxable income dollar for dollar. A
                  W2 employee gets standard deductions. A 1099 contractor can stack deductions the
                  employee cannot touch.
                </p>
              </div>
              <div>
                <p className="text-white font-semibold">LLC S-Corp tax savings.</p>
                <p className="text-zinc-400">
                  Once net profit consistently exceeds $60,000–$70,000, an LLC taxed as an S-Corp can
                  save $3,000–$10,000 per year by splitting income between salary (subject to SE tax)
                  and distributions (exempt from SE tax). See the{' '}
                  <Link
                    href="/llc-tax-calculator"
                    className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2"
                  >
                    LLC tax savings calculator
                  </Link>{' '}
                  to run your specific scenario.
                </p>
              </div>
              <div>
                <p className="text-white font-semibold">Location flexibility.</p>
                <p className="text-zinc-400">
                  1099 income can be earned remotely from any state or country. Moving from California
                  (13.3% top state rate) to Texas (0% state income tax) as a contractor is a
                  legitimate tax strategy that saves thousands annually.
                </p>
              </div>
            </div>
          </section>

          {/* Section 7 — FAQ */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
              Frequently asked questions
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  What is the $600 rule for 1099?
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  If a client pays you $600 or more in a calendar year, they are required to issue you a
                  1099-NEC form. You owe self-employment tax on all income regardless of whether you
                  receive the form — the $600 threshold is a reporting requirement for clients, not a
                  tax threshold for contractors.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Is it better to be W2 or 1099?
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  It depends on your rate, expenses, risk tolerance, and benefits situation. At the
                  same gross income, W2 almost always wins after accounting for the SE tax gap and
                  benefits cost. At a 30–40% higher rate as a contractor, the math flips. Use the
                  calculator to find your personal break-even.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  How much should I set aside for 1099 taxes?
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  25–30% of net income after deductions is the standard starting point. In a high-tax
                  state or high income bracket, lean toward 30–35%. Divide your estimated annual tax by
                  four for quarterly payments.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Can I deduct business expenses as a 1099 contractor?
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  Yes. Any expense that is ordinary (common in your field) and necessary (helpful for
                  your work) is deductible. This includes home office, equipment, software, health
                  insurance, professional development, and business travel.
                </p>
              </div>
            </div>
          </section>

          {/* Section 8 — Run your own numbers */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Run your own numbers
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-6">
              The tables above use median assumptions. Your actual tax bill depends on your state,
              filing status, deductions, and income level.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-6">
              The{' '}
              <Link
                href="/compare/1099-vs-w2"
                className="text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                W2 vs 1099 calculator
              </Link>{' '}
              lets you enter your specific situation and see the exact difference in take-home pay
              between a W2 salary and a 1099 rate. It accounts for federal brackets, your state&apos;s
              tax rate, the SE tax, and common deductions.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-6">
              If your net profit is over $60,000 and you are already contracting, also check the{' '}
              <Link
                href="/llc-tax-calculator"
                className="text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                LLC tax savings calculator
              </Link>{' '}
              — the S-Corp election is the next logical step once you have a stable 1099 income.
            </p>
            <p className="text-zinc-500 text-sm italic">
              Estimates based on 2026 tax law. For educational purposes only. Consult a CPA for
              advice specific to your situation.
            </p>
          </section>

          {/* Final CTA */}
          <section className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to compare?</h2>
            <p className="text-zinc-400 mb-6">
              Compare your exact W2 salary vs 1099 rate and see your true take-home pay after taxes,
              deductions, and benefits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/compare/1099-vs-w2"
                className="inline-flex items-center justify-center px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-lg transition-colors"
              >
                Compare W2 vs 1099
              </Link>
              <Link
                href="/llc-tax-calculator"
                className="inline-flex items-center justify-center px-6 py-3 border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white rounded-lg transition-colors"
              >
                Calculate LLC Savings
              </Link>
            </div>
          </section>

        </article>

        {/* Footer Disclaimer */}
        <div className="max-w-4xl mx-auto px-4 mt-12 text-center">
          <p className="text-xs text-zinc-600 font-mono">
            ESTIMATES BASED ON 2026 TAX LAW • FOR EDUCATIONAL PURPOSES ONLY
          </p>
        </div>
      </div>
    </>
  );
}
