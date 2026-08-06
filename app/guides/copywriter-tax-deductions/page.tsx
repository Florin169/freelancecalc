import Script from 'next/script';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export const metadata = {
  title: 'Copywriter Tax Deductions 2026 | Complete Freelance Write-Off Guide',
  description:
    'Every tax deduction freelance copywriters can claim in 2026. Writing tools, home office, research, AI subscriptions, and more — with real dollar amounts. Cut your 1099 bill legally.',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can I deduct AI tools like ChatGPT or Claude as a copywriter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. AI writing and research tools are ordinary and necessary business expenses for copywriters in 2026. ChatGPT Plus ($240/year), Claude Pro ($240/year), Jasper, Copy.ai, and similar tools used to assist with client work are fully deductible on Schedule C.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I deduct SEO tools like Ahrefs or Semrush as a copywriter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, if you use them for client work. SEO tools are research tools — if you are writing SEO content for clients and using these platforms to find keywords, analyze competitors, or audit content, they qualify as ordinary and necessary business expenses. Ahrefs starts at $228/year, Semrush at $1,668/year. The full subscription cost is deductible.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is my home office deductible as a freelance copywriter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, provided you use a dedicated space exclusively for work on a regular basis. You can deduct using the simplified method ($5/sq ft, maximum $1,500/year per IRS.gov) or the actual expense method based on your real housing costs. Most copywriters in higher-rent areas find the actual expense method yields significantly more.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much can I save with deductions as a copywriter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It depends on your income and which deductions apply to your situation. At $80,000 gross with $12,000 in deductions, you save approximately $4,200 in combined federal income tax and SE tax. Use the copywriter tax calculator to model your specific numbers.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need receipts for all my deductions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You need documentation for every deduction you claim. Bank and credit card statements showing recurring software subscriptions are usually sufficient. For meals, you need the receipt plus a note of who you met with and the business purpose. For mileage, a contemporaneous log. The IRS recommends keeping records for at least 3 years from the date you file.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if I get audited on my deductions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The IRS can request documentation for any deduction on your Schedule C. Keeping organized digital records — emailed receipts, subscription invoices, credit card statements, and a mileage log — means an audit is a documentation exercise rather than a crisis. The deductions in this guide are all legitimate and well-established for self-employed individuals.',
      },
    },
  ],
};

export default function CopywriterTaxDeductionsGuidePage() {
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
          <nav className="flex items-center gap-2 text-sm text-zinc-500" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-zinc-300 transition-colors">
              Home
            </Link>
            <ChevronRight size={16} />
            <span className="text-zinc-500">Guides</span>
            <ChevronRight size={16} />
            <span className="text-zinc-300">Copywriter Tax Deductions</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-zinc-800 bg-black">
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/40 to-transparent pointer-events-none" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-indigo-500/10 blur-[40px] rounded-full pointer-events-none" />

          <div className="relative max-w-4xl mx-auto text-center px-6 py-12 md:py-24">
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-[1.1]">
              Copywriter Tax Deductions: The Complete 2025&ndash;2026 Guide for Freelancers
            </h1>
            <p className="text-zinc-400 text-lg md:text-xl mt-6 max-w-2xl mx-auto leading-relaxed font-light">
              Freelance copywriting has one of the highest profit margins of any self-employed
              profession &mdash; low overhead, no equipment to buy, no studio to rent. Just your
              words and your clients.
            </p>
          </div>
        </section>

        {/* Article Body */}
        <article className="max-w-3xl mx-auto px-6 py-12 space-y-16">
          {/* Intro */}
          <section>
            <p className="text-zinc-400 leading-relaxed mb-6">
              That same low-overhead nature means copywriters have fewer automatic deductions
              than graphic designers or video editors. But the deductions that do exist are
              significant, and most copywriters claim only a fraction of what they&apos;re
              legally entitled to. Research tools, AI subscriptions, writing courses, client
              meeting costs, home office expenses &mdash; all of these reduce your taxable
              income dollar for dollar.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-6">
              At a combined effective rate of around 35% (federal income tax plus 15.3% SE tax),
              every $1,000 in deductions saves a copywriter roughly $350 in taxes.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              This guide covers every deduction available to freelance copywriters in 2026, with
              real numbers so you know what you&apos;re actually saving.
            </p>
          </section>

          {/* Section 1 — How deductions lower your tax bill */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              How deductions work for 1099 copywriters
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-6">
              Your self-employment tax (15.3%) and federal income tax are both calculated on your
              net profit &mdash; gross income minus legitimate business expenses. This means
              deductions reduce both obligations simultaneously, not just one.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              At $80,000 gross with $12,000 in deductions, you pay tax on $68,000. At a combined
              effective rate of roughly 35%, that $12,000 in deductions saves you approximately
              $4,200 in total taxes. Use the{' '}
              <Link
                href="/calculator/copywriter"
                className="text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                copywriter tax calculator
              </Link>{' '}
              to see how your specific deductions change your actual bill.
            </p>
          </section>

          {/* Section 2 — Writing tools and software deductions */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Writing tools and software deductions
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-6">
              Every tool you use to produce client work is deductible. For copywriters, this
              category includes both the obvious and the frequently overlooked.
            </p>
            <div className="space-y-6 text-zinc-300 mb-6">
              <div>
                <p className="text-white font-semibold">Grammarly.</p>
                <p className="text-zinc-400">
                  The most widely used editing tool in the industry. Grammarly Premium runs
                  $144/year, Grammarly Business $180+/year per seat. Fully deductible as a
                  writing tool used for client work.
                </p>
              </div>
              <div>
                <p className="text-white font-semibold">Hemingway Editor.</p>
                <p className="text-zinc-400">
                  One-time purchase at $19.99. Fully deductible.
                </p>
              </div>
              <div>
                <p className="text-white font-semibold">ChatGPT Plus / Claude Pro / AI writing tools.</p>
                <p className="text-zinc-400">
                  AI subscriptions used to research, outline, or assist with client copy are fully
                  deductible business expenses. ChatGPT Plus runs $240/year, Claude Pro $240/year.
                  These are among the fastest-growing deductions for copywriters in 2026 and are
                  explicitly deductible as business software under IRS guidelines for ordinary and
                  necessary business expenses.
                </p>
              </div>
              <div>
                <p className="text-white font-semibold">Jasper, Copy.ai, Writesonic.</p>
                <p className="text-zinc-400">
                  AI copywriting tools used for client work. Subscriptions typically run
                  $360&ndash;$1,188/year. Fully deductible.
                </p>
              </div>
              <div>
                <p className="text-white font-semibold">SEO tools.</p>
                <p className="text-zinc-400">
                  Ahrefs ($228&ndash;$1,188/year), Semrush ($139&ndash;$449/month), Surfer SEO
                  ($89&ndash;$219/month). If you write SEO-optimized content for clients, these
                  are legitimate business tools and fully deductible. This is one of the most
                  frequently missed categories &mdash; many SEO copywriters don&apos;t realize
                  their research tools qualify.
                </p>
              </div>
              <div>
                <p className="text-white font-semibold">Keyword research tools.</p>
                <p className="text-zinc-400">
                  Ubersuggest ($120/year), Moz ($99&ndash;$179/month). Same rule: used for client
                  work, fully deductible.
                </p>
              </div>
              <div>
                <p className="text-white font-semibold">Project management and client tools.</p>
                <p className="text-zinc-400">
                  HoneyBook ($19&ndash;$79/month), Dubsado ($20&ndash;$40/month), Notion
                  ($16/month), Asana ($10.99&ndash;$24.99/month). Used to manage projects and
                  client communication. Deductible proportionally to business use.
                </p>
              </div>
              <div>
                <p className="text-white font-semibold">Cloud storage.</p>
                <p className="text-zinc-400">
                  Dropbox, Google Drive, iCloud used for client file delivery and document backup.
                  Deductible proportionally to business use.
                </p>
              </div>
            </div>
            <p className="text-zinc-400 leading-relaxed font-semibold">
              Total potential software deductions for an active copywriter:
              $1,200&ndash;$6,000/year depending on tools.
            </p>
          </section>

          {/* Section 3 — Research and reference deductions */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Research and reference deductions
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-6">
              This is the most underused deduction category for copywriters, and one of the most
              legitimate. Research is a direct business cost &mdash; without it, you can&apos;t
              write accurately for clients.
            </p>
            <div className="space-y-6 text-zinc-300 mb-6">
              <div>
                <p className="text-white font-semibold">Books and publications.</p>
                <p className="text-zinc-400">
                  Every business book, copywriting reference, and industry publication you buy is
                  deductible. This includes classics like Ogilvy on Advertising, scientific
                  studies you purchase for health or finance clients, industry reports, and
                  Kindle purchases. Most active copywriters spend $300&ndash;$1,000/year here.
                </p>
              </div>
              <div>
                <p className="text-white font-semibold">Industry newsletters and subscriptions.</p>
                <p className="text-zinc-400">
                  Paid newsletters covering your clients&apos; industries (marketing, finance,
                  health, tech) are deductible research costs. Morning Brew Business, Axios Pro,
                  Bloomberg Industry Group reports &mdash; all deductible.
                </p>
              </div>
              <div>
                <p className="text-white font-semibold">News and research databases.</p>
                <p className="text-zinc-400">
                  If you write for financial or legal clients, access to news databases, court
                  record services, or industry data platforms is fully deductible.
                </p>
              </div>
              <div>
                <p className="text-white font-semibold">Competitor content analysis tools.</p>
                <p className="text-zinc-400">
                  BuzzSumo, SpyFu, SimilarWeb, or similar tools used to research client
                  competitors and content strategy. Fully deductible.
                </p>
              </div>
              <div>
                <p className="text-white font-semibold">Market research costs.</p>
                <p className="text-zinc-400">
                  If you conduct or purchase surveys, focus group data, or audience research for
                  client projects, these are direct business costs and fully deductible.
                </p>
              </div>
            </div>
            <p className="text-zinc-400 leading-relaxed font-semibold">
              Total potential research deductions: $500&ndash;$3,000/year depending on niches
              served.
            </p>
          </section>

          {/* Section 4 — Home office deduction */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Home office deduction
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-6">
              Copywriting is almost universally done from home, which makes the home office
              deduction both relevant and valuable.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-6">
              To qualify, you must use a dedicated space regularly and exclusively for business. A
              desk in a shared room does not qualify. A dedicated office or a clearly partitioned
              workspace that serves no personal function does.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-6 font-semibold">
              Two calculation methods:
            </p>
            <ul className="list-disc list-inside text-zinc-400 mb-6">
              <li>
                <span className="font-semibold text-white">The simplified method</span> &mdash;
                deduct $5 per square foot of dedicated office space, up to 300 square feet.
                Maximum deduction: $1,500/year. Source: IRS.gov, simplified option for home
                office deduction (page reviewed March 2, 2026). No Form 8829 required, no
                depreciation tracking.
              </li>
              <li>
                <span className="font-semibold text-white">The actual expense method</span>{' '}
                &mdash; deduct the business-use percentage of your actual home costs: rent or
                mortgage interest, utilities, homeowner&apos;s or renter&apos;s insurance, and
                internet. For example, a 150 sq ft office in a 900 sq ft apartment equals 16.7%
                business use. At $1,800/month rent, that&apos;s $3,607/year in deductions
                &mdash; more than double the $750 simplified method deduction on the same space.
              </li>
            </ul>
            <p className="text-zinc-400 leading-relaxed mb-6">
              For most copywriters: run both calculations before filing. In cities with high rent,
              the actual expense method typically yields 3&ndash;5x more than the simplified
              method. The extra recordkeeping (rent receipts, utility bills) is worth the
              additional deduction.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-6">
              <span className="font-semibold text-white">Internet</span> &mdash; even without a
              dedicated home office, a portion of your internet bill is deductible based on
              business-use percentage. At 70% business use and $70/month, that&apos;s $588/year in
              deductions.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              <span className="font-semibold text-white">Phone</span> &mdash; similarly, the
              business-use percentage of your monthly phone bill is deductible. If you use your
              phone 60% for client calls and business communication, 60% of your annual bill is
              deductible.
            </p>
          </section>

          {/* Section 5 — Professional development and education */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Professional development and education
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-6">
              Any course, workshop, book, or coaching directly related to your copywriting skills
              or business is deductible.
            </p>
            <div className="space-y-6 text-zinc-300 mb-6">
              <div>
                <p className="text-white font-semibold">Copywriting courses.</p>
                <p className="text-zinc-400">
                  Copy School (Copyhackers), AWAI programs, Joanna Wiebe&apos;s courses, and
                  similar training run $200&ndash;$3,000+ per program. Fully deductible in the
                  year of purchase.
                </p>
              </div>
              <div>
                <p className="text-white font-semibold">Marketing and business courses.</p>
                <p className="text-zinc-400">
                  Courses on email marketing, social media strategy, SEO, or content strategy that
                  improve your service offerings are deductible professional development.
                </p>
              </div>
              <div>
                <p className="text-white font-semibold">Conferences and events.</p>
                <p className="text-zinc-400">
                  CopyHackers&apos; CTA Conference, Content Marketing World, MarketingProfs B2B
                  Forum. Registration fees ($500&ndash;$2,000), travel, hotel, and 50% of meal
                  costs at business conferences are deductible.
                </p>
              </div>
              <div>
                <p className="text-white font-semibold">Coaching and mentorship.</p>
                <p className="text-zinc-400">
                  Fees paid to a business coach or copywriting mentor are deductible as
                  professional development.
                </p>
              </div>
              <div>
                <p className="text-white font-semibold">Podcast and video subscriptions.</p>
                <p className="text-zinc-400">
                  Paid access to industry podcasts, masterclasses, or video tutorials related to
                  copywriting, marketing, or your client niches. Fully deductible.
                </p>
              </div>
            </div>
            <p className="text-zinc-400 leading-relaxed font-semibold">
              Total potential professional development deductions: $500&ndash;$4,000/year
              depending on investment in skills.
            </p>
          </section>

          {/* Section 6 — Business and marketing deductions */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Business and marketing deductions
            </h2>
            <div className="space-y-6 text-zinc-300 mb-6">
              <div>
                <p className="text-white font-semibold">Portfolio website.</p>
                <p className="text-zinc-400">
                  Hosting, domain name, and any design or development work on your portfolio site
                  are fully deductible. Typically $100&ndash;$800/year.
                </p>
              </div>
              <div>
                <p className="text-white font-semibold">Freelance platform fees.</p>
                <p className="text-zinc-400">
                  Upwork service fees, Fiverr commissions, Contra fees, or any platform percentage
                  taken from your earnings is deductible as a cost of doing business. These fees
                  can run $500&ndash;$3,000/year for active platform users.
                </p>
              </div>
              <div>
                <p className="text-white font-semibold">LinkedIn Premium.</p>
                <p className="text-zinc-400">
                  Deductible if used for client prospecting and business development. Career plan
                  runs $359.88/year, Sales Navigator $959.88/year.
                </p>
              </div>
              <div>
                <p className="text-white font-semibold">Business cards and printed materials.</p>
                <p className="text-zinc-400">Fully deductible as marketing expenses.</p>
              </div>
              <div>
                <p className="text-white font-semibold">Professional liability insurance (E&amp;O).</p>
                <p className="text-zinc-400">
                  Errors and Omissions insurance for copywriters typically runs
                  $300&ndash;$800/year. Fully deductible as a business expense.
                </p>
              </div>
              <div>
                <p className="text-white font-semibold">Accounting software.</p>
                <p className="text-zinc-400">
                  QuickBooks Self-Employed ($180/year), FreshBooks ($228/year), Wave (free but
                  deductible premium features). Fully deductible.
                </p>
              </div>
              <div>
                <p className="text-white font-semibold">Bank fees and payment processing.</p>
                <p className="text-zinc-400">
                  Business bank account fees, PayPal transaction fees, Stripe processing fees, and
                  wire transfer costs are deductible costs of doing business.
                </p>
              </div>
              <div>
                <p className="text-white font-semibold">Legal fees.</p>
                <p className="text-zinc-400">
                  Attorney fees for reviewing client contracts, creating template agreements, or
                  handling a contract dispute are deductible business expenses.
                </p>
              </div>
            </div>
          </section>

          {/* Section 7 — Health insurance deduction */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Health insurance deduction
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-6">
              If you pay for your own health insurance and are not eligible for coverage through
              a spouse&apos;s employer plan, your premiums may be 100% deductible from adjusted
              gross income. This applies to medical, dental, and vision premiums for yourself,
              your spouse, and dependents. Source: IRS Publication 535.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              Individual health insurance premiums typically run $300&ndash;$700/month
              ($3,600&ndash;$8,400/year) depending on plan and location. This is often the single
              largest deduction for uninsured freelance copywriters and directly reduces both your
              federal income tax and the base on which your SE tax is calculated.
            </p>
          </section>

          {/* Section 8 — Self-employment tax deduction */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Self-employment tax deduction
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-6">
              You can deduct half of your self-employment tax bill from your federal adjusted
              gross income. This is automatic and calculated on Schedule SE &mdash; you
              don&apos;t need to track it separately.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              At $80,000 net income before this deduction, your SE tax is approximately $11,304.
              Half of that &mdash; $5,652 &mdash; reduces your federal taxable income, saving
              roughly $1,356 at the 24% bracket. This deduction exists because the IRS recognizes
              that employees don&apos;t pay the employer half of FICA &mdash; as a self-employed
              person, you do, and the deduction partially offsets that burden.
            </p>
          </section>

          {/* Section 9 — Retirement contributions */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Retirement contributions
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-6">
              SEP-IRA contributions of up to 25% of net self-employment income are fully
              deductible. At $80,000 net income, that allows up to $20,000 in deductible
              retirement contributions &mdash; saving approximately $7,800 in combined taxes at a
              39% effective rate.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              This is the highest single-year leverage deduction available to high-earning
              copywriters. A Solo 401k offers even higher contribution limits and may be worth
              exploring if your net income consistently exceeds $100,000. The administrative
              setup takes a few hours and the tax savings are immediate.
            </p>
          </section>

          {/* Section 10 — Client meals and entertainment */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Client meals and entertainment
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-6">
              Business meals with clients, collaborators, or prospects are 50% deductible &mdash;
              not 100%. The meal must have a clear business purpose and be documented with date,
              attendees, and the business topic discussed.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-6">
              Working lunches alone at your desk are not deductible. A dinner with a new client
              discussing a project scope is 50% deductible. The distinction matters and the IRS
              looks for documentation on meal expenses.
            </p>
          </section>

          {/* Section 11 — Mileage and travel deductions */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Mileage and travel deductions
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-6">
              If you drive to client meetings, co-working spaces, or other business locations,
              your mileage is deductible. The 2026 IRS standard mileage rate is 72.5 cents per
              mile (January&ndash;June) and 76 cents per mile (July&ndash;December). Source: IRS
              IR-2025-128 and IRS mid-year adjustment effective July 1, 2026.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-6">
              Most copywriters work primarily from home and have minimal mileage deductions.
              However, if you attend in-person client meetings, networking events, or
              conferences locally, those miles add up. Keep a mileage log with date,
              destination, and business purpose.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              Business travel by air, hotel stays, and transportation for out-of-town client
              work or conferences is fully deductible (flights and hotels 100%, meals 50%). Keep
              receipts for any travel expense over $75.
            </p>
          </section>

          {/* Section 12 — What copywriters cannot deduct */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              What copywriters cannot deduct
            </h2>
            <div className="space-y-6 text-zinc-300 mb-6">
              <div>
                <p className="text-white font-semibold">Personal use portion of mixed-use items.</p>
                <p className="text-zinc-400">
                  If your laptop is used 30% personally, only 70% of its cost is deductible. The
                  same applies to your phone, internet, and home office space.
                </p>
              </div>
              <div>
                <p className="text-white font-semibold">General reading materials.</p>
                <p className="text-zinc-400">
                  Books you buy for personal interest that aren&apos;t related to your client work
                  or professional development are not deductible, even if you occasionally draw
                  inspiration from them. The connection to your business must be direct and
                  documentable.
                </p>
              </div>
              <div>
                <p className="text-white font-semibold">Personal clothing.</p>
                <p className="text-zinc-400">
                  Unless it is a uniform or protective gear required specifically for your work
                  and not suitable for everyday wear, clothing is not deductible. A hoodie you
                  wear while writing from home is not deductible.
                </p>
              </div>
              <div>
                <p className="text-white font-semibold">Personal meals.</p>
                <p className="text-zinc-400">
                  Meals while working alone at your desk are not deductible. Business meals with
                  clients or collaborators discussing work are 50% deductible.
                </p>
              </div>
            </div>
          </section>

          {/* Section 13 — FAQ */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
              Frequently asked questions
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Can I deduct AI tools like ChatGPT or Claude as a copywriter?
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  Yes. AI writing and research tools are ordinary and necessary business expenses
                  for copywriters in 2026. ChatGPT Plus ($240/year), Claude Pro ($240/year),
                  Jasper, Copy.ai, and similar tools used to assist with client work are fully
                  deductible on Schedule C.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Can I deduct SEO tools like Ahrefs or Semrush as a copywriter?
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  Yes, if you use them for client work. SEO tools are research tools &mdash; if
                  you&apos;re writing SEO content for clients and using these platforms to find
                  keywords, analyze competitors, or audit content, they qualify as ordinary and
                  necessary business expenses. Ahrefs starts at $228/year, Semrush at
                  $1,668/year. The full subscription cost is deductible.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Is my home office deductible as a freelance copywriter?
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  Yes, provided you use a dedicated space exclusively for work on a regular
                  basis. You can deduct using the simplified method ($5/sq ft, maximum
                  $1,500/year per IRS.gov) or the actual expense method based on your real
                  housing costs. Most copywriters in higher-rent areas find the actual expense
                  method yields significantly more.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  How much can I save with deductions as a copywriter?
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  It depends on your income and which deductions apply to your situation. At
                  $80,000 gross with $12,000 in deductions, you save approximately $4,200 in
                  combined federal income tax and SE tax. Use the{' '}
                  <Link
                    href="/calculator/copywriter"
                    className="text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    copywriter tax calculator
                  </Link>{' '}
                  to model your specific numbers.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Do I need receipts for all my deductions?
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  You need documentation for every deduction you claim. Bank and credit card
                  statements showing recurring software subscriptions are usually sufficient. For
                  meals, you need the receipt plus a note of who you met with and the business
                  purpose. For mileage, a contemporaneous log. The IRS recommends keeping records
                  for at least 3 years from the date you file.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  What happens if I get audited on my deductions?
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  The IRS can request documentation for any deduction on your Schedule C. Keeping
                  organized digital records &mdash; emailed receipts, subscription invoices,
                  credit card statements, and a mileage log &mdash; means an audit is a
                  documentation exercise rather than a crisis. The deductions in this guide are
                  all legitimate and well-established for self-employed copywriters.
                </p>
              </div>
            </div>
          </section>

          {/* Section 14 — Calculate your tax bill after deductions */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Calculate your tax bill after deductions
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-6">
              The deductions above can significantly reduce what you owe, but the exact impact
              depends on your income level, state, filing status, and which deductions apply to
              your situation.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-6">
              Use the{' '}
              <Link
                href="/calculator/copywriter"
                className="text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                copywriter tax calculator
              </Link>{' '}
              to enter your gross income and estimated deductions and see your federal and SE tax
              bill after write-offs. It is pre-configured for the most common copywriter expense
              categories.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-6">
              If your net profit after deductions consistently exceeds $60,000&ndash;$70,000,
              also check the{' '}
              <Link
                href="/llc-tax-calculator"
                className="text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                LLC tax savings calculator
              </Link>{' '}
              &mdash; the S-Corp election is the next major tax lever for high-earning copywriters.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-6">
              For your overall 1099 tax estimate including state taxes, use the{' '}
              <Link
                href="/1099-tax-calculator"
                className="text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                1099 tax calculator
              </Link>
              .
            </p>
            <p className="text-zinc-500 text-sm italic">
              Based on 2026 IRS tax rules and rates. For educational purposes only. Consult a CPA
              for advice specific to your situation.
            </p>
          </section>

          {/* Final CTA */}
          <section className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800">
            <h2 className="text-2xl font-bold text-white mb-4">
              Calculate your copywriting deductions
            </h2>
            <p className="text-zinc-400 mb-6">
              Enter your gross income and deductions to see exactly how much tax you&apos;ll owe
              in 2026 &mdash; and how much the write-offs above save you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/calculator/copywriter"
                className="inline-flex items-center justify-center px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-lg transition-colors"
              >
                Copywriter Calculator
              </Link>
              <Link
                href="/1099-tax-calculator"
                className="inline-flex items-center justify-center px-6 py-3 border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white rounded-lg transition-colors"
              >
                1099 Tax Calculator
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