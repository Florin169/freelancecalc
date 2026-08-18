import TaxCalculator from '@/components/TaxCalculator';
import TaxGuideAccordion from '@/components/TaxGuideAccordion';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Physician 1099 Tax Calculator 2025–2026 | Locum Tenens & Independent Contractor Tax',
  description: 'Free 1099 tax calculator for physicians, locum tenens doctors, and independent contractor MDs. Estimate SE tax, federal tax, and top deductions for 2026. Includes LLC S-Corp savings.',
};

export default function PhysicianPage() {
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
            Calculator
          </Link>
          <ChevronRight size={16} />
          <span className="text-zinc-300">Physician 1099 Tax Calculator</span>
        </nav>
      </div>

      <div className="relative max-w-4xl mx-auto text-center px-6 py-12 md:py-24">
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-[1.1]">
            Physician 1099 Tax Calculator 2025–2026 & <br />
            <span className="bg-gradient-to-r from-indigo-400 to-indigo-600 bg-clip-text text-transparent">Locum Tenens & Independent Contractor Tax Estimator</span>
          </h1>

          <p className="text-zinc-400 text-lg md:text-xl mt-6 max-w-2xl mx-auto leading-relaxed font-light">
            Physicians face some of the highest 1099 tax bills in the country. Estimate your federal, self-employment, and effective tax rate — and see how an LLC S-Corp election could save you $10,000–$20,000 per year. Updated for 2026.
          </p>
        </div>
      </section>

      {/* Main Calculator Split-Pane */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 -mt-6 md:-mt-12 relative z-10">
        <TaxCalculator defaultMode="freelance" showSeBreakdown />
      </div>

      {/* Article Body */}
      <article className="max-w-3xl mx-auto px-4 mt-16">
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">How 1099 taxes work for physicians</h2>
          <p className="text-zinc-400 leading-relaxed mb-8">
            As a 1099 physician — whether working locum tenens, telehealth, consulting, expert witness, or moonlighting — you pay both halves of Social Security and Medicare tax yourself. W-2 physicians split this 7.65%/7.65% with their employer. As a 1099 contractor, the full 15.3% Self-Employment tax lands on you. On $200,000 in net income, that difference versus a W-2 physician is approximately $15,300 per year in additional tax — before federal income tax is calculated.
          </p>

          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="border-b border-zinc-800 text-zinc-400 uppercase text-xs tracking-wider">
                  <th className="py-3 pr-4 font-medium">Income Type</th>
                  <th className="py-3 pr-4 font-medium">Social Security Tax</th>
                  <th className="py-3 pr-4 font-medium">Medicare Tax</th>
                  <th className="py-3 font-medium">Total FICA</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['W-2 physician (your share)', '6.2% up to $184,500', '1.45% all income', '7.65%'],
                  ['1099 physician (your share)', '12.4% up to $184,500', '2.9% all income', '15.3%'],
                  ['Additional Medicare (>$200k)', '—', '+0.9%', 'on amount above $200k'],
                ].map((row, i) => (
                  <tr key={i} className="border-b border-zinc-800 text-zinc-300">
                    {row.map((cell, j) => (
                      <td key={j} className={`py-3 pr-4 ${j === 0 ? 'font-medium text-zinc-200' : ''}`}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-zinc-400 leading-relaxed">
            Above $200,000 in net income, the IRS adds a 0.9% Additional Medicare Tax. Unlike the standard SE tax, this surtax applies only to the employee portion and is not split — you pay it in full with no offsetting deduction.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-4">What a 1099 physician actually owes in 2026</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="border-b border-zinc-800 text-zinc-400 uppercase text-xs tracking-wider">
                  <th className="py-3 pr-4 font-medium">Net 1099 Income</th>
                  <th className="py-3 pr-4 font-medium">SE Tax</th>
                  <th className="py-3 pr-4 font-medium">Federal Income Tax (est.)</th>
                  <th className="py-3 pr-4 font-medium">Total Tax</th>
                  <th className="py-3 font-medium">Effective Rate</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['$150,000', '$19,453', '$28,711', '$48,164', '~32%'],
                  ['$200,000', '$23,948', '$42,711', '$66,659', '~33%'],
                  ['$250,000', '$26,138', '$62,711', '$88,849', '~36%'],
                  ['$300,000', '$28,328', '$82,711', '$111,039', '~37%'],
                  ['$400,000', '$32,708', '$122,711', '$155,419', '~39%'],
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
          <p className="text-zinc-500 text-xs mt-2">Estimates assume single filer, federal standard deduction $16,100, no additional business deductions. SE tax calculated with SS cap at $184,500 and 0.9% Additional Medicare Tax above $200,000. Use the calculator above for your exact figures.</p>
        </section>

        <section className="mt-12">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-4">Top tax deductions for 1099 physicians</h2>
          <ul className="list-disc list-inside text-zinc-400 space-y-4">
            <li>
              <span className="font-semibold text-white">Malpractice insurance</span> — professional liability (malpractice) premiums are 100% deductible as a business expense. Individual physician malpractice premiums typically run $5,000–$50,000+ per year depending on specialty, making this one of the largest single deductions available. High-risk specialties (OB/GYN, neurosurgery, orthopedics) often see the highest premiums and therefore the largest deductions.
            </li>
            <li>
              <span className="font-semibold text-white">Continuing Medical Education (CME)</span> — CME course fees, conference registration, travel to CME events, and associated lodging are fully deductible for 1099 physicians. If you have both W-2 and 1099 income, CME connected to your 1099 specialty deducts against 1099 income. Annual CME costs typically run $2,000–$10,000.
            </li>
            <li>
              <span className="font-semibold text-white">Medical license and board certification fees</span> — state medical license renewal fees, DEA registration ($888 for 3 years), board certification and recertification fees, and hospital credentialing fees are fully deductible business expenses.
            </li>
            <li>
              <span className="font-semibold text-white">Professional association dues</span> — AMA, specialty society memberships (ACS, ACC, AAP, etc.), and state medical society dues are deductible.
            </li>
            <li>
              <span className="font-semibold text-white">Home office deduction</span> — physicians who perform charting, telehealth visits, medical consulting, or administrative work from a dedicated home office qualify. Deduct using the simplified method ($5/sq ft up to 300 sq ft, maximum $1,500/year) or the actual expense method based on real housing costs. For physicians in high-cost metros, the actual method frequently yields $5,000–$15,000+ in annual deductions.
            </li>
            <li>
              <span className="font-semibold text-white">Health insurance premiums</span> — often 100% deductible for self-employed physicians not eligible for employer-sponsored coverage. At $400–$1,200+/month for individual coverage, this deduction runs $4,800–$14,400/year.
            </li>
            <li>
              <span className="font-semibold text-white">Self-employment tax deduction</span> — half of your SE tax bill is automatically deductible from federal adjusted gross income. At $200,000 net income, that is approximately $11,974 deducted, saving roughly $4,430 in federal income tax at the 37% bracket.
            </li>
            <li>
              <span className="font-semibold text-white">Locum tenens travel expenses</span> — if you travel to temporary assignments (expected to last less than one year), travel, lodging, and 50% of meal costs are deductible. Many locums agencies reimburse these costs — only unreimbursed expenses are deductible.
            </li>
            <li>
              <span className="font-semibold text-white">Medical equipment and supplies</span> — stethoscopes, diagnostic equipment, scrubs (if specialty-specific and not worn outside work), and any equipment purchased for patient care in a private practice or independent contractor setting is deductible. Section 179 allows full expensing in the year of purchase.
            </li>
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-4">Retirement contributions: the biggest lever for physician tax reduction</h2>
          <p className="text-zinc-400 leading-relaxed mb-4">
            For high-income 1099 physicians, retirement contributions are the highest single-year leverage deduction available. Two accounts dominate:
          </p>
          <p className="text-zinc-400 leading-relaxed mb-4">
            <span className="font-semibold text-white">Solo 401k</span> — as a self-employed physician with no full-time employees, you can contribute as both employee and employer. In 2026, the total Solo 401k contribution limit is $72,000 (under age 50), $80,000 (age 50–59 and 64+), or $83,250 (age 60–63 under the SECURE 2.0 super catch-up). The employee deferral portion is $24,500 in 2026. At a 37% federal marginal rate, a $72,000 contribution saves approximately $26,640 in federal income tax alone — before state tax savings.
          </p>
          <p className="text-zinc-400 leading-relaxed mb-8">
            <span className="font-semibold text-white">SEP-IRA</span> — simpler to set up, allows contributions up to 25% of net self-employment income. At $300,000 net income, that is up to $75,000 in deductible contributions. SEP-IRA and Solo 401k cannot be combined above the $72,000 total limit — physicians at high income levels generally find the Solo 401k more flexible because it allows larger employee deferrals at lower income levels.
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="border-b border-zinc-800 text-zinc-400 uppercase text-xs tracking-wider">
                  <th className="py-3 pr-4 font-medium">Account</th>
                  <th className="py-3 pr-4 font-medium">2026 Limit (under 50)</th>
                  <th className="py-3 pr-4 font-medium">2026 Limit (50+)</th>
                  <th className="py-3 font-medium">Best For</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Solo 401k', '$72,000 total', '$80,000', 'Most 1099 physicians'],
                  ['SEP-IRA', '25% of net SE income', 'Same', 'Simplicity, high income'],
                  ['Defined Benefit Plan', 'Actuarially determined', 'Up to $280,000+', 'Very high earners 50+'],
                ].map((row, i) => (
                  <tr key={i} className="border-b border-zinc-800 text-zinc-300">
                    {row.map((cell, j) => (
                      <td key={j} className={`py-3 pr-4 ${j === 0 ? 'font-medium text-zinc-200' : ''}`}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-zinc-400 leading-relaxed">
            For physicians earning $400,000+ with a short remaining career window, a Defined Benefit Plan can shelter $150,000–$280,000+ annually — far exceeding what a Solo 401k allows. This requires actuarial setup and is worth discussing with a physician-specialized CPA.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-4">When should a physician form an LLC or S-Corp?</h2>
          <p className="text-zinc-400 leading-relaxed mb-4">
            The standard S-Corp election threshold for most freelancers is $60,000–$70,000 in net profit. For physicians, the threshold is higher — typically $150,000 in net profit — because medical professional entity requirements (PLLC in most states) and physician-specific payroll complexity add administrative costs of $3,000–$6,000/year rather than the $1,500–$2,500 typical for other freelancers.
          </p>
          <p className="text-zinc-400 leading-relaxed mb-4">
            Above $150,000 net profit, an LLC taxed as an S-Corp typically saves physicians $8,000–$20,000 annually by splitting income between a reasonable salary (subject to 15.3% SE tax) and distributions (exempt from SE tax). At $300,000 net income with a $180,000 reasonable salary, you pay SE tax only on $180,000 instead of $300,000 — saving approximately $11,475 in SE tax per year after accounting for the tax deductibility of half the SE tax.
          </p>
          <p className="text-zinc-400 leading-relaxed mb-4">
            <span className="font-semibold text-amber-400">Important note:</span> most states require physicians to form a PLLC (Professional Limited Liability Company) or PC (Professional Corporation) rather than a standard LLC. The rules vary by state and specialty. Consult a physician-specialized CPA before forming any entity.
          </p>
          <p className="text-zinc-400 leading-relaxed">
            <Link href="/llc-tax-calculator" className="text-indigo-400 hover:text-indigo-300 transition-colors font-medium">
              Use the LLC tax savings calculator
            </Link>{' '}
            to model your specific S-Corp savings.
          </p>
        </section>
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
              <p className="text-indigo-400 text-xs font-bold uppercase tracking-widest mb-1">Earning Over $150k as a 1099 Physician?</p>
              <p className="text-white font-semibold group-hover:text-indigo-300 transition-colors">
                See how much an LLC S-Corp election saves you in SE tax
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
              id: 'physician-se-tax',
              title: 'How much self-employment tax does a 1099 physician pay?',
              content: `As a 1099 physician, you pay 15.3% Self-Employment tax on 92.35% of net earnings up to the $184,500 Social Security wage base. Above $184,500, only the 2.9% Medicare portion applies. Above $200,000 net income, an additional 0.9% Medicare surtax applies — bringing your Medicare rate to 3.8% on income above that threshold. At $200,000 net income, your total SE tax bill is approximately $23,948. You can deduct half of this (about $11,974) from your federal adjusted gross income, partially offsetting the burden.`,
            },
            {
              id: 'physician-set-aside',
              title: 'How much should a 1099 physician set aside for taxes?',
              content: `A 1099 physician earning $150,000–$300,000 net should set aside 35–42% of every payment for taxes. At higher income levels ($300,000+) in high-tax states like California or New York, the combined federal, state, and SE tax rate can exceed 50% of net income. Quarterly estimated payments are required — missing them triggers IRS underpayment penalties. The safest approach is to calculate your exact quarterly liability based on projected annual income and pay that amount each quarter rather than relying on a percentage estimate.`,
            },
            {
              id: 'physician-llc',
              title: 'Should a 1099 physician form an LLC or S-Corp?',
              content: `For most 1099 physicians earning over $150,000 in net profit, the S-Corp election generates meaningful SE tax savings of $8,000–$20,000 annually. However, physicians must typically form a PLLC (Professional LLC) or PC rather than a standard LLC — the rules vary by state and specialty. The administrative cost of running physician payroll is also higher than for most professions, which is why the breakeven threshold is $150,000 rather than the $60,000–$70,000 threshold cited for general freelancers. Consult a physician-specialized CPA before forming any entity.`,
            },
            {
              id: 'physician-locum',
              title: 'Do locum tenens physicians pay more tax than employed physicians?',
              content: `Yes, in most cases. W-2 employed physicians split FICA taxes with their employer — each pays 7.65%. Locum tenens physicians working as 1099 contractors pay the full 15.3% themselves. At $200,000 in income, that difference is approximately $15,300 per year. However, 1099 locum tenens physicians gain access to deductions unavailable to W-2 employees — malpractice insurance, CME, licensing, retirement contributions, home office, and travel — which can offset a significant portion of the SE tax burden when properly tracked.`,
            },
            {
              id: 'physician-retirement',
              title: 'What retirement accounts can a 1099 physician use to reduce taxes?',
              content: `A 1099 physician can contribute to a Solo 401k (up to $72,000 in 2026 under age 50, $80,000 age 50+), a SEP-IRA (up to 25% of net self-employment income), or a Defined Benefit Plan for very high earners seeking to shelter $150,000–$280,000+ annually. These contributions reduce both federal and state taxable income. At a 37% federal marginal rate, a $72,000 Solo 401k contribution saves approximately $26,640 in federal income tax — the single highest-leverage tax reduction available to 1099 physicians.`,
            },
            {
              id: 'physician-malpractice',
              title: 'Is malpractice insurance deductible for 1099 physicians?',
              content: `Yes. Malpractice insurance premiums are 100% deductible as a business expense for 1099 physicians. This is one of the most significant specialty-specific deductions available — premiums vary from $5,000/year for lower-risk specialties to $50,000+/year for high-risk specialties like OB/GYN, neurosurgery, and orthopedics. Tail coverage premiums are also deductible in the year paid.`,
            },
          ]}
        />
      </div>

      {/* Footer Disclaimer */}
      <div className="max-w-4xl mx-auto px-4 mt-12 text-center">
        <p className="text-xs text-zinc-600 font-mono">
          ESTIMATES BASED ON 2026 TAX LAW • FOR EDUCATIONAL PURPOSES ONLY • CONSULT A PHYSICIAN-SPECIALIZED CPA
        </p>
      </div>
    </main>
  );
}