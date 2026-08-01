import Script from 'next/script';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export const metadata = {
  title: 'Graphic Designer Tax Deductions 2026 | Complete Freelance Write-Off Guide',
  description:
    'Every tax deduction freelance graphic designers can claim in 2026. Adobe CC, equipment, home office, and more — with real dollar amounts. Cut your 1099 tax bill legally.',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can I deduct Adobe Creative Cloud as a freelance graphic designer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Adobe Creative Cloud is a business expense used to produce client work and is 100% deductible. The full suite runs $659.88/year. You can deduct the complete annual cost on Schedule C.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is a Wacom tablet tax deductible?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. A Wacom tablet used primarily for client design work qualifies under Section 179 as business equipment. The full purchase price is deductible in the year you buy it, regardless of whether it costs $80 or $3,500.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I deduct my Mac if I use it for personal use too?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, but only the business-use percentage. If your Mac is used 75% for client work and 25% personally, you deduct 75% of the purchase price. Track your usage if you ever face an audit — a reasonable business-use estimate backed by your client workload is usually sufficient.',
      },
    },
    {
      '@type': 'Question',
      name: 'What records do I need to keep?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Receipts or bank statements for every expense you deduct, a mileage log for any vehicle deductions, and documentation of business purpose for meals and travel. The IRS recommends keeping records for at least 3 years from the date you file. Digital tools like Expensify, Wave, or even a folder of emailed receipts are sufficient.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much can I save in taxes with deductions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It depends on your income and deductions. At $80,000 gross with $15,000 in deductions, you save approximately $5,250 in combined federal income tax and SE tax. Use the graphic designer tax calculator to model your specific numbers.',
      },
    },
  ],
};

export default function GraphicDesignerTaxDeductionsGuidePage() {
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
            <span className="text-zinc-300">Graphic Designer Tax Deductions</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-zinc-800 bg-black">
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/40 to-transparent pointer-events-none" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-indigo-500/10 blur-[40px] rounded-full pointer-events-none" />

          <div className="relative max-w-4xl mx-auto text-center px-6 py-12 md:py-24">
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-[1.1]">
              Graphic Designer Tax Deductions: The Complete 2025&ndash;2026 Guide
            </h1>
            <p className="text-zinc-400 text-lg md:text-xl mt-6 max-w-2xl mx-auto leading-relaxed font-light">
              Freelance graphic designers have more deductible expenses than almost any other
              creative profession &mdash; and most leave thousands on the table every year.
            </p>
          </div>
        </section>

        {/* Article Body */}
        <article className="max-w-3xl mx-auto px-6 py-12 space-y-16">
          {/* Intro */}
          <section>
            <p className="text-zinc-400 leading-relaxed mb-6">
              The reason is simple: design work requires expensive, specialized tools. Your Adobe
              Creative Cloud subscription, your color-accurate monitor, your Wacom tablet, your
              font licenses &mdash; every one of these is a legitimate business expense that
              reduces your taxable income dollar for dollar. At a 24% federal tax rate plus 15.3%
              self-employment tax, every $1,000 in deductions saves you roughly $390 in taxes.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              This guide covers every deduction available to freelance graphic designers in 2026,
              with real dollar amounts so you know what you&apos;re actually saving.
            </p>
          </section>

          {/* Section 1 — How deductions lower your tax bill */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              How deductions lower your tax bill as a 1099 designer
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-6">
              Before the list, it&apos;s worth understanding exactly how deductions work for 1099
              contractors.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-6">
              Your self-employment tax (15.3%) and federal income tax are both calculated on your
              net profit &mdash; your gross income minus legitimate business expenses. This means
              deductions reduce both tax obligations simultaneously, not just one.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-6">
              At $80,000 gross with $15,000 in deductions, you pay tax on $65,000. At a combined
              effective rate of around 35%, that $15,000 in deductions saves you approximately
              $5,250 in total taxes. Use the{' '}
              <Link
                href="/calculator/graphic-designer"
                className="text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                graphic designer tax calculator
              </Link>{' '}
              to see how your specific deductions change your actual bill.
            </p>
          </section>

          {/* Section 2 — Software and subscription deductions */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Software and subscription deductions
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-6">
              This is the highest-value deduction category for most designers and the easiest to
              document.
            </p>
            <div className="space-y-6 text-zinc-300 mb-6">
              <div>
                <p className="text-white font-semibold">Adobe Creative Cloud.</p>
                <p className="text-zinc-400">
                  Fully deductible as a business expense. At $659.88/year for the full suite (all
                  apps plan), this is one of the larger software deductions available to
                  designers. If you use a team or enterprise plan, the full cost is deductible.
                </p>
              </div>
              <div>
                <p className="text-white font-semibold">Figma, Sketch, Affinity.</p>
                <p className="text-zinc-400">
                  Any design software used for client work is 100% deductible. Figma Professional
                  runs $144/year, Sketch is $99/year, Affinity licenses are one-time purchases
                  &mdash; all deductible in the year of purchase.
                </p>
              </div>
              <div>
                <p className="text-white font-semibold">Font licenses.</p>
                <p className="text-zinc-400">
                  Individual font purchases and subscription services like Adobe Fonts (included
                  in CC), Fontspring, or Monotype Fonts are fully deductible. Font libraries can
                  run $200&ndash;$2,000+ annually for active designers.
                </p>
              </div>
              <div>
                <p className="text-white font-semibold">Stock photo and asset subscriptions.</p>
                <p className="text-zinc-400">
                  Shutterstock, Getty Images, Adobe Stock, Envato Elements, and similar services
                  are fully deductible. A standard Shutterstock subscription runs
                  $228&ndash;$1,188/year depending on image volume.
                </p>
              </div>
              <div>
                <p className="text-white font-semibold">Project management and client tools.</p>
                <p className="text-zinc-400">
                  Notion, Asana, Monday.com, Basecamp, FreshBooks, HoneyBook, and similar tools
                  used to manage design projects and clients are deductible. These typically run
                  $100&ndash;$600/year combined.
                </p>
              </div>
              <div>
                <p className="text-white font-semibold">Cloud storage.</p>
                <p className="text-zinc-400">
                  Dropbox, Google Drive, or any cloud storage used for client file delivery and
                  project backups is deductible proportionally to business use.
                </p>
              </div>
            </div>
            <p className="text-zinc-400 leading-relaxed font-semibold">
              Total potential software deductions for an active designer:
              $1,500&ndash;$5,000/year depending on subscriptions.
            </p>
          </section>

          {/* Section 3 — Equipment and hardware deductions */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Equipment and hardware deductions
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-6">
              Under Section 179, you can deduct the full cost of qualifying equipment in the year
              of purchase rather than depreciating it over several years. The 2026 Section 179
              limit is $2,560,000 &mdash; well above what any individual designer would spend. For
              practical purposes, every piece of equipment you buy for your design work can be
              fully expensed in 2026.
            </p>
            <div className="space-y-6 text-zinc-300 mb-6">
              <div>
                <p className="text-white font-semibold">Computer and laptop.</p>
                <p className="text-zinc-400">
                  A MacBook Pro runs $1,999&ndash;$3,499, a Mac Studio or Mac Pro
                  $1,999&ndash;$7,999. If used primarily for client work, the full cost is
                  deductible in the year of purchase under Section 179.
                </p>
              </div>
              <div>
                <p className="text-white font-semibold">Color-accurate monitor.</p>
                <p className="text-zinc-400">
                  Professional design monitors run $400&ndash;$3,500. Brands like BenQ, Eizo, and
                  LG UltraFine are standard in the industry. Fully deductible as specialized
                  equipment.
                </p>
              </div>
              <div>
                <p className="text-white font-semibold">Wacom tablet.</p>
                <p className="text-zinc-400">
                  Wacom Intuos runs $80&ndash;$250, Wacom Cintiq $600&ndash;$3,500. Fully
                  deductible as design equipment used for client work.
                </p>
              </div>
              <div>
                <p className="text-white font-semibold">iPad Pro with Apple Pencil.</p>
                <p className="text-zinc-400">
                  Used increasingly for illustration and client presentation. $800&ndash;$1,300
                  for the iPad, $129&ndash;$179 for Apple Pencil. Deductible if used primarily
                  for business.
                </p>
              </div>
              <div>
                <p className="text-white font-semibold">External hard drives and SSDs.</p>
                <p className="text-zinc-400">
                  Client file storage and backups. $60&ndash;$300 per drive. Fully deductible.
                </p>
              </div>
              <div>
                <p className="text-white font-semibold">Printer.</p>
                <p className="text-zinc-400">
                  If you print proofs, mock-ups, or client deliverables. $100&ndash;$800 depending
                  on quality. Fully deductible for business use.
                </p>
              </div>
            </div>
            <p className="text-zinc-400 leading-relaxed mb-6 font-semibold">
              Important rule: equipment must be used more than 50% for business to qualify for
              Section 179.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-6">
              If you use a computer for both personal and business use, only the business-use
              percentage is deductible. A computer used 80% for business on a $2,500 purchase
              gives you a $2,000 deduction.
            </p>
            <p className="text-zinc-400 leading-relaxed font-semibold">
              Total potential equipment deductions for an active designer:
              $2,000&ndash;$8,000 in a purchase year, $0&ndash;$500 in maintenance years.
            </p>
          </section>

          {/* Section 4 — Home office deduction */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Home office deduction</h2>
            <p className="text-zinc-400 leading-relaxed mb-6">
              The home office deduction is the most commonly missed by freelance designers &mdash;
              and one of the most valuable.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-6">
              To qualify, you must use a dedicated space in your home regularly and exclusively
              for business. A desk in a shared bedroom does not qualify. A dedicated office room
              or clearly partitioned workspace does.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-6 font-semibold">
              Two calculation methods:
            </p>
            <ul className="list-disc list-inside text-zinc-400 mb-6">
              <li>
                <span className="font-semibold text-white">The simplified method</span> &mdash;
                deduct $5 per square foot of dedicated office space, up to 300 square feet.
                Maximum deduction: $1,500/year. No recordkeeping beyond measuring the space.
                Source: IRS.gov simplified option for home office deduction (updated March 2026).
              </li>
              <li>
                <span className="font-semibold text-white">The actual expense method</span>{' '}
                &mdash; deduct the business-use percentage of your actual home costs: rent or
                mortgage interest, utilities, homeowner&apos;s insurance, and internet. For
                example, a 200 sq ft office in a 1,000 sq ft apartment equals 20% business use.
                At $2,000/month rent, that&apos;s $4,800/year in deductions &mdash; significantly
                more than the $1,000 simplified method deduction on the same space.
              </li>
            </ul>
            <p className="text-zinc-400 leading-relaxed mb-6">
              For most designers: the actual expense method yields a much larger deduction,
              especially in high-rent markets. Run both calculations before filing. If your
              housing costs are above average, the actual method will save you significantly more.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              <span className="font-semibold text-white">Internet</span> &mdash; a portion of your
              internet bill is deductible even without a dedicated home office. If you use the
              internet 70% for business, 70% of your annual internet cost is deductible. At
              $60/month, that&apos;s $504/year.
            </p>
          </section>

          {/* Section 5 — Professional development and education */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Professional development and education
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-6">
              Any course, book, conference, or training directly related to your design skills is
              deductible.
            </p>
            <div className="space-y-6 text-zinc-300 mb-6">
              <div>
                <p className="text-white font-semibold">Online courses.</p>
                <p className="text-zinc-400">
                  Skillshare, LinkedIn Learning, Domestika, Udemy courses related to design,
                  motion graphics, UX, or business development. $15&ndash;$500/year. Fully
                  deductible.
                </p>
              </div>
              <div>
                <p className="text-white font-semibold">Design conferences.</p>
                <p className="text-zinc-400">
                  HOW Design Live, AIGA events, Awwwards Conference. Registration fees
                  ($500&ndash;$2,000), travel, hotel, and meals at conferences are deductible
                  business expenses.
                </p>
              </div>
              <div>
                <p className="text-white font-semibold">Books and publications.</p>
                <p className="text-zinc-400">
                  Design books, industry publications, research materials. Fully deductible.
                </p>
              </div>
              <div>
                <p className="text-white font-semibold">Software tutorials and masterclasses.</p>
                <p className="text-zinc-400">
                  Paid tutorials on Motion Array, School of Motion, or similar platforms for
                  motion design and video skills. Fully deductible.
                </p>
              </div>
            </div>
            <p className="text-zinc-400 leading-relaxed font-semibold">
              Total potential professional development deductions: $500&ndash;$3,000/year
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
                <p className="text-white font-semibold">Website and portfolio hosting.</p>
                <p className="text-zinc-400">
                  Your portfolio site hosting, domain name, and any website-related expenses are
                  fully deductible. Typically $100&ndash;$500/year.
                </p>
              </div>
              <div>
                <p className="text-white font-semibold">Business cards and printed materials.</p>
                <p className="text-zinc-400">Deductible as marketing expenses.</p>
              </div>
              <div>
                <p className="text-white font-semibold">LinkedIn Premium.</p>
                <p className="text-zinc-400">
                  Deductible if used for client prospecting. $359.88/year.
                </p>
              </div>
              <div>
                <p className="text-white font-semibold">Freelance platform fees.</p>
                <p className="text-zinc-400">
                  Upwork, Fiverr, 99designs, or similar platform fees taken from your earnings are
                  deductible as a cost of doing business.
                </p>
              </div>
              <div>
                <p className="text-white font-semibold">Professional liability insurance (E&amp;O).</p>
                <p className="text-zinc-400">
                  Errors and Omissions insurance for designers typically runs
                  $500&ndash;$1,500/year. Fully deductible.
                </p>
              </div>
              <div>
                <p className="text-white font-semibold">Accounting software.</p>
                <p className="text-zinc-400">
                  QuickBooks Self-Employed, FreshBooks, Wave, or similar tools.
                  $150&ndash;$500/year. Deductible.
                </p>
              </div>
              <div>
                <p className="text-white font-semibold">Bank fees.</p>
                <p className="text-zinc-400">
                  Business bank account fees and payment processing fees (Stripe, PayPal, Square)
                  are deductible.
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
              If you pay for your own health insurance as a self-employed designer and are not
              eligible for coverage through a spouse&apos;s employer plan, your premiums may be
              100% deductible from your adjusted gross income. This applies to medical, dental,
              and vision insurance premiums for you, your spouse, and dependents.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              Individual health insurance premiums run $300&ndash;$700/month
              ($3,600&ndash;$8,400/year) depending on your plan and location. This is often the
              single largest deduction available to uninsured freelancers and one of the most
              impactful on your total tax bill. Source: IRS Publication 535.
            </p>
          </section>

          {/* Section 8 — Self-employment tax deduction */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Self-employment tax deduction
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-6">
              This one is automatic but worth understanding explicitly. You can deduct half of
              your self-employment tax bill from your federal adjusted gross income. At $80,000
              net income, your SE tax is approximately $11,304. Half of that &mdash; $5,652
              &mdash; reduces your federal taxable income, saving you roughly $1,356 in federal
              income tax at the 24% bracket.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              You do not need to track this separately. It is calculated on Schedule SE and flows
              automatically to your Form 1040.
            </p>
          </section>

          {/* Section 9 — Retirement contributions */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Retirement contributions
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-6">
              Contributing to a SEP-IRA or Solo 401k reduces your taxable income dollar for
              dollar. A SEP-IRA allows contributions of up to 25% of net self-employment income.
              At $80,000 net income, that is up to $20,000 in deductible contributions &mdash;
              saving roughly $7,800 in combined taxes at a 39% effective rate.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              This is the highest-leverage deduction available to high-earning freelance designers
              and is consistently underused.
            </p>
          </section>

          {/* Section 10 — Mileage and travel deductions */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Mileage and travel deductions
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-6">
              If you drive to client meetings, photo shoots, print shops, or other business
              locations, your mileage is deductible. The 2026 IRS standard mileage rate is 72.5
              cents per mile (January&ndash;June) and 76 cents per mile (July&ndash;December).
              Source: IRS IR-2025-128, December 29, 2025; IRS mid-year adjustment effective July
              1, 2026.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-6">
              At 2,000 business miles per year, your deduction is approximately
              $1,470&ndash;$1,520 depending on the half-year split. Keep a mileage log with date,
              destination, and business purpose for every trip.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              Flights, hotels, and meals for business travel are also deductible. Meals are 50%
              deductible (not 100%). Keep receipts for any travel expense over $75.
            </p>
          </section>

          {/* Section 11 — What graphic designers cannot deduct */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              What graphic designers cannot deduct
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-6">
              Understanding the limits is as important as knowing the deductions.
            </p>
            <div className="space-y-6 text-zinc-300 mb-6">
              <div>
                <p className="text-white font-semibold">Personal use portion of mixed-use items.</p>
                <p className="text-zinc-400">
                  If your laptop is used 40% personally and 60% for business, only 60% is
                  deductible. The same applies to your phone, internet, and home office space.
                </p>
              </div>
              <div>
                <p className="text-white font-semibold">Clothing.</p>
                <p className="text-zinc-400">
                  Unless it is a uniform or protective gear required specifically for your work
                  and not suitable for everyday wear, clothing is not deductible. A t-shirt you
                  wear while working from home is not deductible.
                </p>
              </div>
              <div>
                <p className="text-white font-semibold">Commuting.</p>
                <p className="text-zinc-400">
                  Driving from home to a regular place of business (like a coworking space you use
                  every day) is not deductible. However, if you have a qualifying home office,
                  driving from home to a client site is deductible.
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

          {/* Section 12 — FAQ */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
              Frequently asked questions
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Can I deduct Adobe Creative Cloud as a freelance graphic designer?
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  Yes. Adobe Creative Cloud is a business expense used to produce client work and
                  is 100% deductible. The full suite runs $659.88/year. You can deduct the
                  complete annual cost on Schedule C.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Is a Wacom tablet tax deductible?
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  Yes. A Wacom tablet used primarily for client design work qualifies under
                  Section 179 as business equipment. The full purchase price is deductible in the
                  year you buy it, regardless of whether it costs $80 or $3,500.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Can I deduct my Mac if I use it for personal use too?
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  Yes, but only the business-use percentage. If your Mac is used 75% for client
                  work and 25% personally, you deduct 75% of the purchase price. Track your usage
                  if you ever face an audit &mdash; a reasonable business-use estimate backed by
                  your client workload is usually sufficient.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  What records do I need to keep?
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  Receipts or bank statements for every expense you deduct, a mileage log for any
                  vehicle deductions, and documentation of business purpose for meals and travel.
                  The IRS recommends keeping records for at least 3 years from the date you file.
                  Digital tools like Expensify, Wave, or even a folder of emailed receipts are
                  sufficient.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  How much can I save in taxes with deductions?
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  It depends on your income and deductions. At $80,000 gross with $15,000 in
                  deductions, you save approximately $5,250 in combined federal income tax and SE
                  tax. Use the{' '}
                  <Link
                    href="/calculator/graphic-designer"
                    className="text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    graphic designer tax calculator
                  </Link>{' '}
                  to model your specific numbers.
                </p>
              </div>
            </div>
          </section>

          {/* Section 13 — Calculate your tax bill after deductions */}
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
              The{' '}
              <Link
                href="/1099-tax-calculator"
                className="text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                1099 tax calculator
              </Link>{' '}
              lets you enter your gross income and estimated deductions to see your federal and SE
              tax bill after write-offs. The{' '}
              <Link
                href="/calculator/graphic-designer"
                className="text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                graphic designer calculator
              </Link>{' '}
              is pre-configured for the most common designer expense categories.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-6">
              If your net profit after deductions consistently exceeds $60,000&ndash;$70,000, also
              check the{' '}
              <Link
                href="/llc-tax-calculator"
                className="text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                LLC tax savings calculator
              </Link>{' '}
              &mdash; the S-Corp election is the next major tax lever for high-earning designers.
            </p>
            <p className="text-zinc-500 text-sm italic">
              Based on 2026 IRS tax rules and rates. For educational purposes only. Consult a CPA
              for advice specific to your situation.
            </p>
          </section>

          {/* Final CTA */}
          <section className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800">
            <h2 className="text-2xl font-bold text-white mb-4">
              Calculate your design deductions
            </h2>
            <p className="text-zinc-400 mb-6">
              Enter your gross income and deductions to see exactly how much tax you&apos;ll owe
              in 2026 — and how much the write-offs above save you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/calculator/graphic-designer"
                className="inline-flex items-center justify-center px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-lg transition-colors"
              >
                Graphic Designer Calculator
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
