import Script from 'next/script';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export const metadata = {
  title: 'Web Developer Tax Deductions 2026 | Complete Freelance Dev Write-Off Guide',
  description:
    'Every tax deduction freelance web developers can claim in 2026. Servers, software, hardware, home office, and more — with real dollar amounts. Cut your 1099 tax bill legally.',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can I deduct GitHub Copilot as a freelance developer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. GitHub Copilot Individual ($120/year) is a productivity tool used directly in the production of client work. It qualifies as an ordinary and necessary business expense and is fully deductible on Schedule C.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I deduct AWS or Google Cloud costs for client projects?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Cloud infrastructure costs incurred for client project development, staging, or deployment are direct business expenses and fully deductible. Keep your monthly billing statements as documentation. If an account serves both client projects and personal projects, deduct only the business-use percentage.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is my MacBook deductible as a freelance web developer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, if used primarily for business. Under Section 179, the full purchase price is deductible in the year you buy it if the device is used more than 50% for business. A MacBook used 85% for client work on a $2,499 purchase gives you a $2,124 deduction. Keep a usage log if personal use is significant.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I deduct JetBrains or VS Code extensions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. IDE subscriptions and developer tools used for client work are ordinary and necessary business expenses. JetBrains All Products Pack at $779.40/year is fully deductible. Individual paid VS Code extensions are also deductible.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much can I save with deductions as a freelance developer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Significantly more than most developers realize. At $100,000 gross with $20,000 in deductions, you save approximately $7,400 in combined federal income tax and SE tax. With a full deduction stack including home office, hardware, cloud infrastructure, software, and retirement contributions, active developers can reduce taxable income by $25,000–$40,000/year. Use the web developer tax calculator to model your specific situation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need receipts for cloud infrastructure costs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Your cloud provider\'s monthly billing statements serve as receipts. AWS, GCP, and Azure all provide itemized invoices. Download and store these monthly — they\'re your primary documentation for infrastructure deductions.',
      },
    },
  ],
};

export default function WebDeveloperTaxDeductionsGuidePage() {
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
            <span className="text-zinc-300">Web Developer Tax Deductions</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-zinc-800 bg-black">
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/40 to-transparent pointer-events-none" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-indigo-500/10 blur-[40px] rounded-full pointer-events-none" />

          <div className="relative max-w-4xl mx-auto text-center px-6 py-12 md:py-24">
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-[1.1]">
              Web Developer Tax Deductions: The Complete 2025&ndash;2026 Guide
            </h1>
            <p className="text-zinc-400 text-lg md:text-xl mt-6 max-w-2xl mx-auto leading-relaxed font-light">
              Freelance web developers have one of the most deduction-rich profiles of any
              self-employed profession.
            </p>
          </div>
        </section>

        {/* Article Body */}
        <article className="max-w-3xl mx-auto px-6 py-12 space-y-16">
          {/* Intro */}
          <section>
            <p className="text-zinc-400 leading-relaxed mb-6">
              Your work runs on expensive, specialized infrastructure &mdash; cloud servers,
              development tools, SaaS subscriptions, high-performance hardware &mdash; and every
              dollar you spend on that infrastructure is a legitimate business expense that
              reduces your taxable income. At a combined effective rate of around 35% (federal
              income tax plus 15.3% SE tax), every $1,000 in deductions saves you roughly $350 in
              taxes.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              Most freelance developers claim only their laptop and maybe a software subscription.
              This guide covers every deduction you&apos;re entitled to in 2026, with real numbers.
            </p>
          </section>

          {/* Section 1 — How deductions work for 1099 developers */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              How deductions work for 1099 developers
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-6">
              Your self-employment tax (15.3%) and federal income tax are both calculated on your
              net profit &mdash; gross income minus legitimate business expenses. Deductions
              reduce both obligations simultaneously.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-6">
              At $100,000 gross with $20,000 in deductions, you pay tax on $80,000. At a combined
              effective rate of roughly 37%, that $20,000 in deductions saves you approximately
              $7,400 in total taxes. Use the{' '}
              <Link
                href="/calculator/web-developer"
                className="text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                web developer tax calculator
              </Link>{' '}
              to model how your specific deductions change your bill.
            </p>
          </section>

          {/* Section 2 — Cloud infrastructure and hosting deductions */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Cloud infrastructure and hosting deductions
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-6">
              This is the deduction category most unique to developers and most consistently
              overlooked. Every dollar you spend running infrastructure for client projects or
              your own business is fully deductible.
            </p>
            <div className="space-y-6 text-zinc-300 mb-6">
              <div>
                <p className="text-white font-semibold">AWS, Google Cloud, Azure.</p>
                <p className="text-zinc-400">
                  Compute instances, storage, databases, CDN costs, and data transfer fees used
                  for client projects or business operations are 100% deductible. Active
                  developers on AWS or GCP can easily spend $50&ndash;$500/month
                  ($600&ndash;$6,000/year) on infrastructure. Keep your billing statements
                  &mdash; they&apos;re your documentation.
                </p>
              </div>
              <div>
                <p className="text-white font-semibold">Vercel, Netlify, Railway, Render.</p>
                <p className="text-zinc-400">
                  Deployment and hosting platforms for client projects. Vercel Pro runs $240/year,
                  Netlify Pro $228/year. Fully deductible.
                </p>
              </div>
              <div>
                <p className="text-white font-semibold">DigitalOcean, Linode, Vultr.</p>
                <p className="text-zinc-400">
                  VPS and managed services. DigitalOcean Basic Droplets start at $72/year, scaling
                  with usage. Fully deductible.
                </p>
              </div>
              <div>
                <p className="text-white font-semibold">Domain names.</p>
                <p className="text-zinc-400">
                  Every domain registered for client projects or your own business is deductible.
                  At $10&ndash;$20/domain/year, active developers with multiple projects can deduct
                  $100&ndash;$400/year in domain costs alone.
                </p>
              </div>
              <div>
                <p className="text-white font-semibold">SSL certificates.</p>
                <p className="text-zinc-400">
                  Any paid SSL certificates purchased for client projects or business sites are
                  deductible.
                </p>
              </div>
              <div>
                <p className="text-white font-semibold">Database services.</p>
                <p className="text-zinc-400">
                  PlanetScale, Supabase, MongoDB Atlas, Firebase paid tiers. Fully deductible as
                  infrastructure costs.
                </p>
              </div>
            </div>
            <p className="text-zinc-400 leading-relaxed font-semibold">
              Total potential cloud/hosting deductions for an active developer:
              $1,000&ndash;$8,000/year depending on project load and architecture choices.
            </p>
          </section>

          {/* Section 3 — Software and subscription deductions */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Software and subscription deductions
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-6">
              Every tool in your development stack used for client work is deductible.
            </p>
            <div className="space-y-6 text-zinc-300 mb-6">
              <div>
                <p className="text-white font-semibold">GitHub.</p>
                <p className="text-zinc-400">
                  GitHub Pro ($48/year), GitHub Teams ($228/year per user). Fully deductible.
                  GitHub Copilot Individual runs $120/year &mdash; deductible as a productivity
                  tool used for client work.
                </p>
              </div>
              <div>
                <p className="text-white font-semibold">JetBrains IDEs.</p>
                <p className="text-zinc-400">
                  All Products Pack runs $779.40/year (first year), $623.52 after. Individual IDE
                  subscriptions like WebStorm or PhpStorm run $79.20&ndash;$249.60/year. Fully
                  deductible.
                </p>
              </div>
              <div>
                <p className="text-white font-semibold">VS Code extensions.</p>
                <p className="text-zinc-400">
                  Paid VS Code extensions used for client work are deductible. Most are
                  inexpensive ($10&ndash;$50) but add up across a year.
                </p>
              </div>
              <div>
                <p className="text-white font-semibold">Postman.</p>
                <p className="text-zinc-400">
                  API development and testing. Postman Basic is free, Pro runs $144/year.
                  Deductible for professional use.
                </p>
              </div>
              <div>
                <p className="text-white font-semibold">Figma.</p>
                <p className="text-zinc-400">
                  If you handle design-to-development workflows, Figma Professional runs $144/year.
                  Fully deductible.
                </p>
              </div>
              <div>
                <p className="text-white font-semibold">Linear, Jira, Asana.</p>
                <p className="text-zinc-400">
                  Project management tools used for client work. Linear runs $96/year, Jira
                  Standard $96+/year. Fully deductible.
                </p>
              </div>
              <div>
                <p className="text-white font-semibold">Slack, Notion, Basecamp.</p>
                <p className="text-zinc-400">
                  Client communication and documentation tools. Slack Pro runs
                  $87.50&ndash;$150/year, Notion Plus $192/year. Deductible proportionally to
                  business use.
                </p>
              </div>
              <div>
                <p className="text-white font-semibold">npm private packages, Docker Hub.</p>
                <p className="text-zinc-400">
                  Paid registry and container service subscriptions used for client projects. Fully
                  deductible.
                </p>
              </div>
              <div>
                <p className="text-white font-semibold">AI coding tools.</p>
                <p className="text-zinc-400">
                  GitHub Copilot ($120/year), Cursor Pro ($192/year), Tabnine ($156/year), Claude
                  Pro ($240/year) used for development work. All fully deductible as productivity
                  software in 2026.
                </p>
              </div>
              <div>
                <p className="text-white font-semibold">Testing and monitoring tools.</p>
                <p className="text-zinc-400">
                  Datadog, Sentry, LogRocket, BrowserStack, Cypress Cloud. These can run
                  $100&ndash;$2,400/year depending on usage. Fully deductible for client project
                  use.
                </p>
              </div>
              <div>
                <p className="text-white font-semibold">Design and prototyping.</p>
                <p className="text-zinc-400">
                  Adobe XD, Zeplin, Storybook, or similar tools used in client workflows. Fully
                  deductible.
                </p>
              </div>
            </div>
            <p className="text-zinc-400 leading-relaxed font-semibold">
              Total potential software deductions for an active developer:
              $2,000&ndash;$8,000/year depending on stack depth.
            </p>
          </section>

          {/* Section 4 — Hardware and equipment deductions */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Hardware and equipment deductions
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-6">
              Under Section 179, you can deduct the full cost of qualifying equipment in the year
              of purchase. The 2026 Section 179 limit is $2,560,000 &mdash; well above any
              individual developer&apos;s spend. Source: section179.org, updated June 2026, citing
              IRS Rev. Proc. 2025-32. For practical purposes, every piece of hardware you buy for
              development work can be fully expensed in 2026.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-6">
              Additionally, 100% bonus depreciation applies in 2026 alongside Section 179 for
              qualifying property. Source: section179.org, OBBBA &sect;70401.
            </p>
            <div className="space-y-6 text-zinc-300 mb-6">
              <div>
                <p className="text-white font-semibold">MacBook Pro or high-performance laptop.</p>
                <p className="text-zinc-400">
                  $1,999&ndash;$3,999. The primary development machine for most freelance
                  developers. If used primarily for client work, the full cost is deductible under
                  Section 179 in the year of purchase.
                </p>
              </div>
              <div>
                <p className="text-white font-semibold">External monitors.</p>
                <p className="text-zinc-400">
                  $200&ndash;$1,500 each. Dual-monitor setups are standard for development work.
                  Both monitors are deductible if used for client work.
                </p>
              </div>
              <div>
                <p className="text-white font-semibold">Mechanical keyboard and peripherals.</p>
                <p className="text-zinc-400">
                  Developer-grade keyboards ($150&ndash;$350), precision mice, and ergonomic
                  accessories used for work. Deductible as business equipment.
                </p>
              </div>
              <div>
                <p className="text-white font-semibold">External storage and NAS.</p>
                <p className="text-zinc-400">
                  Client project files, backups, and development environments stored on external
                  drives or NAS systems. $60&ndash;$600 depending on capacity. Fully deductible.
                </p>
              </div>
              <div>
                <p className="text-white font-semibold">iPad for testing.</p>
                <p className="text-zinc-400">
                  If you test client sites and apps across devices, an iPad used for testing
                  qualifies as business equipment. $329&ndash;$1,299. Deductible proportionally to
                  business use.
                </p>
              </div>
              <div>
                <p className="text-white font-semibold">Networking equipment.</p>
                <p className="text-zinc-400">
                  A router or network switch purchased specifically to support reliable client work
                  from home is deductible as business equipment. $50&ndash;$300.
                </p>
              </div>
            </div>
            <p className="text-zinc-400 leading-relaxed mb-6 font-semibold">
              Important rule: equipment must be used more than 50% for business to qualify for
              Section 179.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-6">
              A computer used 80% for client work on a $2,500 purchase gives you a $2,000
              deduction. Keep usage records.
            </p>
            <p className="text-zinc-400 leading-relaxed font-semibold">
              Total potential hardware deductions in a purchase year: $3,000&ndash;$8,000. In
              non-purchase years, $0&ndash;$500 in maintenance costs.
            </p>
          </section>

          {/* Section 5 — Home office deduction */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Home office deduction
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-6">
              Developers working from home qualify for the home office deduction provided they use
              a dedicated space exclusively for business on a regular basis.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-6 font-semibold">
              Two calculation methods:
            </p>
            <ul className="list-disc list-inside text-zinc-400 mb-6">
              <li>
                <span className="font-semibold text-white">The simplified method</span> &mdash;
                deduct $5 per square foot of dedicated office space, up to 300 square feet.
                Maximum deduction: $1,500/year. Source: IRS.gov Topic 509, updated July 2026; IRS
                simplified option page reviewed May 2026. No Form 8829 required, no depreciation
                tracking.
              </li>
              <li>
                <span className="font-semibold text-white">The actual expense method</span>{' '}
                &mdash; deduct the business-use percentage of your real home costs: rent or
                mortgage interest, utilities, homeowner&apos;s or renter&apos;s insurance, and
                internet. A 200 sq ft office in an 800 sq ft apartment equals 25% business use.
                At $2,000/month rent that is $6,000/year in deductions &mdash; four times the
                simplified method maximum on the same space.
              </li>
            </ul>
            <p className="text-zinc-400 leading-relaxed mb-6">
              For most developers: run both calculations. In markets with rent above $1,500/month,
              the actual expense method produces significantly larger deductions. The extra
              paperwork (rent receipts, utility bills, Form 8829) is worth it.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-6">
              <span className="font-semibold text-white">Internet</span> &mdash; a dedicated
              business-use percentage of your internet bill is deductible even outside the home
              office calculation. At 80% business use and $80/month, that is $768/year. For
              developers who need high-speed fiber for client work, this deduction is meaningful.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              <span className="font-semibold text-white">Phone</span> &mdash; business-use
              percentage of your monthly phone bill is deductible. If you use your phone 50% for
              client calls and 2FA, that is 50% of your annual bill deductible.
            </p>
          </section>

          {/* Section 6 — Professional development deductions */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Professional development deductions
            </h2>
            <div className="space-y-6 text-zinc-300 mb-6">
              <div>
                <p className="text-white font-semibold">Online courses and bootcamps.</p>
                <p className="text-zinc-400">
                  Udemy ($15&ndash;$200/course), Frontend Masters ($390/year), Egghead
                  ($250/year), Zero to Mastery ($239/year), A Cloud Guru ($468/year for AWS/cloud
                  certifications). All fully deductible as professional development directly
                  related to your development work.
                </p>
              </div>
              <div>
                <p className="text-white font-semibold">Certifications.</p>
                <p className="text-zinc-400">
                  AWS certifications ($150&ndash;$300 per exam), Google Cloud certifications
                  ($200/exam), Microsoft Azure certifications ($165/exam). Both the exam fees and
                  preparation materials are deductible.
                </p>
              </div>
              <div>
                <p className="text-white font-semibold">Technical books.</p>
                <p className="text-zinc-400">
                  O&apos;Reilly Learning ($599/year), individual programming books ($30&ndash;$60
                  each). Fully deductible as reference materials used for client work.
                </p>
              </div>
              <div>
                <p className="text-white font-semibold">Developer conferences.</p>
                <p className="text-zinc-400">
                  React Summit, JSConf, AWS re:Invent, Google I/O. Registration fees
                  ($200&ndash;$2,000), travel, hotel, and 50% of meals at business conferences are
                  deductible.
                </p>
              </div>
            </div>
            <p className="text-zinc-400 leading-relaxed font-semibold">
              Total potential professional development deductions: $500&ndash;$4,000/year.
            </p>
          </section>

          {/* Section 7 — Business and marketing deductions */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Business and marketing deductions
            </h2>
            <div className="space-y-6 text-zinc-300 mb-6">
              <div>
                <p className="text-white font-semibold">Portfolio website.</p>
                <p className="text-zinc-400">
                  Hosting, domain, and any design or development work on your personal portfolio
                  are deductible. Typically $100&ndash;$600/year.
                </p>
              </div>
              <div>
                <p className="text-white font-semibold">Freelance platform fees.</p>
                <p className="text-zinc-400">
                  Upwork service fees, Toptal placement fees, Contra commissions. Platform fees
                  taken from your earnings are deductible costs of doing business.
                </p>
              </div>
              <div>
                <p className="text-white font-semibold">LinkedIn Premium.</p>
                <p className="text-zinc-400">
                  Career ($359.88/year) or Sales Navigator ($959.88/year) if used for client
                  prospecting. Deductible.
                </p>
              </div>
              <div>
                <p className="text-white font-semibold">Professional liability insurance (E&amp;O).</p>
                <p className="text-zinc-400">
                  Errors and Omissions insurance for developers typically runs
                  $500&ndash;$1,500/year. Protects against client disputes over bugs, data loss,
                  or delivery failures. Fully deductible.
                </p>
              </div>
              <div>
                <p className="text-white font-semibold">Accounting software.</p>
                <p className="text-zinc-400">
                  QuickBooks Self-Employed ($180/year), FreshBooks ($228/year), or similar. Fully
                  deductible.
                </p>
              </div>
              <div>
                <p className="text-white font-semibold">Business bank fees and payment processing.</p>
                <p className="text-zinc-400">
                  Stripe fees (2.9% + $0.30 per transaction), PayPal fees, wire transfer costs,
                  business bank account fees. All deductible.
                </p>
              </div>
              <div>
                <p className="text-white font-semibold">Legal fees.</p>
                <p className="text-zinc-400">
                  Attorney fees for reviewing client contracts, IP ownership agreements, or NDAs
                  are deductible business expenses. Developer contracts often involve complex IP
                  terms worth reviewing professionally.
                </p>
              </div>
            </div>
          </section>

          {/* Section 8 — Health insurance deduction */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Health insurance deduction
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-6">
              If you pay for your own health insurance and are not eligible for employer-sponsored
              coverage, your premiums may be 100% deductible from adjusted gross income &mdash;
              medical, dental, and vision for yourself, your spouse, and dependents. Source: IRS
              Publication 535.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              Individual premiums typically run $300&ndash;$700/month
              ($3,600&ndash;$8,400/year). This is consistently one of the two or three largest
              deductions available to uninsured freelance developers.
            </p>
          </section>

          {/* Section 9 — Self-employment tax deduction */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Self-employment tax deduction
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-6">
              You can deduct half of your SE tax bill from your federal adjusted gross income
              automatically via Schedule SE. At $100,000 net income your SE tax is approximately
              $14,130. Half of that &mdash; $7,065 &mdash; reduces your federal taxable income,
              saving roughly $1,696 at the 24% bracket.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              No tracking required &mdash; it flows automatically when you complete Schedule SE.
            </p>
          </section>

          {/* Section 10 — Retirement contributions */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Retirement contributions
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-6">
              SEP-IRA contributions of up to 25% of net self-employment income are fully
              deductible. At $100,000 net income, that allows up to $25,000 in deductible
              retirement contributions &mdash; saving approximately $9,750 in combined taxes at a
              39% effective rate.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-6">
              A Solo 401k allows even higher total contributions ($70,000 in 2026 including both
              employee and employer portions) and may be worth setting up if your net income
              consistently exceeds $120,000.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              Source: IRS retirement plan contribution limits 2026.
            </p>
          </section>

          {/* Section 11 — Mileage and travel deductions */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Mileage and travel deductions
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-6">
              If you drive to client sites, co-working spaces, or other business locations, your
              mileage is deductible. The 2026 IRS standard mileage rate is 72.5 cents per mile
              (January&ndash;June) and 76 cents per mile (July&ndash;December). Source: IRS
              IR-2025-128 and IRS mid-year adjustment effective July 1, 2026.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-6">
              Most remote developers have minimal local mileage. However, if you work on-site for
              clients or attend local meetups and conferences, those miles count. Business
              flights, hotels, and meals (50%) for client site visits or conferences are fully
              deductible.
            </p>
          </section>

          {/* Section 12 — What web developers cannot deduct */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              What web developers cannot deduct
            </h2>
            <div className="space-y-6 text-zinc-300 mb-6">
              <div>
                <p className="text-white font-semibold">Personal use portion of equipment.</p>
                <p className="text-zinc-400">
                  If your development laptop is 30% personal use, only 70% is deductible. Keep
                  usage records especially on high-value items.
                </p>
              </div>
              <div>
                <p className="text-white font-semibold">Personal software subscriptions.</p>
                <p className="text-zinc-400">
                  Netflix, Spotify, personal cloud storage, personal gaming subscriptions. Even if
                  you occasionally use them while &quot;thinking about client problems,&quot;
                  personal subscriptions are not deductible.
                </p>
              </div>
              <div>
                <p className="text-white font-semibold">Home internet if also used personally.</p>
                <p className="text-zinc-400">
                  You can only deduct the business-use percentage, not the full bill. 80% business
                  use on a $80/month plan gives you $768/year, not $960.
                </p>
              </div>
              <div>
                <p className="text-white font-semibold">Speculative side project infrastructure.</p>
                <p className="text-zinc-400">
                  If you&apos;re running servers for a personal project that isn&apos;t generating
                  client income, that infrastructure cost is not deductible as a business expense
                  for your freelance work.
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
                  Can I deduct GitHub Copilot as a freelance developer?
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  Yes. GitHub Copilot Individual ($120/year) is a productivity tool used directly
                  in the production of client work. It qualifies as an ordinary and necessary
                  business expense and is fully deductible on Schedule C.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Can I deduct AWS or Google Cloud costs for client projects?
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  Yes. Cloud infrastructure costs incurred for client project development, staging,
                  or deployment are direct business expenses and fully deductible. Keep your
                  monthly billing statements as documentation. If an account serves both client
                  projects and personal projects, deduct only the business-use percentage.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Is my MacBook deductible as a freelance web developer?
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  Yes, if used primarily for business. Under Section 179, the full purchase price
                  is deductible in the year you buy it if the device is used more than 50% for
                  business. A MacBook used 85% for client work on a $2,499 purchase gives you a
                  $2,124 deduction. Keep a usage log if personal use is significant.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Can I deduct JetBrains or VS Code extensions?
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  Yes. IDE subscriptions and developer tools used for client work are ordinary and
                  necessary business expenses. JetBrains All Products Pack at $779.40/year is
                  fully deductible. Individual paid VS Code extensions are also deductible.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  How much can I save with deductions as a freelance developer?
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  Significantly more than most developers realize. At $100,000 gross with $20,000
                  in deductions, you save approximately $7,400 in combined federal income tax and
                  SE tax. With a full deduction stack including home office, hardware, cloud
                  infrastructure, software, and retirement contributions, active developers can
                  reduce taxable income by $25,000&ndash;$40,000/year. Use the{' '}
                  <Link
                    href="/calculator/web-developer"
                    className="text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    web developer tax calculator
                  </Link>{' '}
                  to model your specific situation.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Do I need receipts for cloud infrastructure costs?
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  Your cloud provider&apos;s monthly billing statements serve as receipts. AWS,
                  GCP, and Azure all provide itemized invoices. Download and store these monthly
                  &mdash; they&apos;re your primary documentation for infrastructure deductions.
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
              Use the{' '}
              <Link
                href="/calculator/web-developer"
                className="text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                web developer tax calculator
              </Link>{' '}
              to enter your gross income and estimated deductions and see your federal and SE tax
              bill after write-offs.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-6">
              For your overall 1099 estimate including state taxes, use the{' '}
              <Link
                href="/1099-tax-calculator"
                className="text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                1099 tax calculator
              </Link>
              .
            </p>
            <p className="text-zinc-400 leading-relaxed mb-6">
              If your net profit after deductions consistently exceeds
              $60,000&ndash;$70,000, check the{' '}
              <Link
                href="/llc-tax-calculator"
                className="text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                LLC tax savings calculator
              </Link>
              . The S-Corp election works particularly well for developers &mdash; high margins,
              predictable income, and clean payroll structure make it one of the more
              straightforward implementations of the election.
            </p>
            <p className="text-zinc-500 text-sm italic">
              Based on 2026 IRS tax rules and rates. For educational purposes only. Consult a CPA
              for advice specific to your situation.
            </p>
          </section>

          {/* Final CTA */}
          <section className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800">
            <h2 className="text-2xl font-bold text-white mb-4">
              Calculate your development deductions
            </h2>
            <p className="text-zinc-400 mb-6">
              Enter your gross income and estimated deductions to see exactly how much tax
              you&apos;ll owe in 2026 — and how much the write-offs above save you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/calculator/web-developer"
                className="inline-flex items-center justify-center px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-lg transition-colors"
              >
                Web Developer Calculator
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