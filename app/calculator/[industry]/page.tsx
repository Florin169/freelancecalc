import TaxCalculator from '@/components/TaxCalculator';
import TaxGuideAccordion from '@/components/TaxGuideAccordion';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const industries = ['graphic-designer', 'video-editor', 'web-developer', 'copywriter', 'social-media-manager', 'ux-designer'];
  return industries.map((industry) => ({ industry }));
}

const roleMeta: Record<string, { title: string; description: string }> = {
  'graphic-designer': {
    title: 'Graphic Designer Tax Calculator 2025–2026 | 1099 & Freelance Tax',
    description: 'Free tax calculator for freelance graphic designers. Estimate 1099 self-employment tax, top deductions, and LLC savings for 2025–2026.',
  },
  'video-editor': {
    title: 'Video Editor Tax Calculator 2025–2026 | 1099 & Freelance Tax',
    description: 'Free tax calculator for freelance video editors. Estimate 1099 self-employment tax, equipment deductions, and LLC savings for 2025–2026.',
  },
  'web-developer': {
    title: 'Web Developer Tax Calculator 2025–2026 | 1099 & Freelance Tax',
    description: 'Free tax calculator for freelance web developers. Estimate 1099 self-employment tax, software deductions, and LLC savings for 2025–2026.',
  },
  'copywriter': {
    title: 'Copywriter Tax Calculator 2025–2026 | 1099 & Freelance Tax',
    description: 'Free tax calculator for freelance copywriters. Estimate 1099 self-employment tax, writing tool deductions, and LLC savings for 2025–2026.',
  },
  'social-media-manager': {
    title: 'Social Media Manager Tax Calculator 2025–2026 | 1099 & Freelance Tax',
    description: 'Free tax calculator for freelance social media managers. Estimate 1099 self-employment tax, tool deductions, and LLC savings for 2025–2026.',
  },
  'ux-designer': {
    title: 'UX Designer Tax Calculator 2025–2026 | 1099 & Freelance Tax',
    description: 'Free tax calculator for freelance UX designers. Estimate 1099 self-employment tax, software deductions, and LLC savings for 2025–2026.',
  },
};

export async function generateMetadata({ params }: { params: Promise<{ industry: string }> }) {
  const { industry } = await params;
  const meta = roleMeta[industry];
  if (!meta) return {};
  return {
    title: meta.title,
    description: meta.description,
  };
}

const roleContent: Record<string, { id: string; title: string; content: string }[]> = {
  'graphic-designer': [
    {
      id: 'gd-deductions',
      title: 'Top tax deductions for freelance graphic designers',
      content: `Beyond the home office deduction, graphic designers can deduct 100% of Adobe Creative Cloud subscriptions, font licenses, and stock photo memberships. High-ticket hardware — Wacom tablets, color-accurate monitors, iPad Pros — is fully deductible if used primarily for client work. Equipment purchases can be expensed immediately under Section 179 rather than depreciated over multiple years, which lowers your tax bill faster.`,
    },
    {
      id: 'gd-rate',
      title: 'What should a freelance graphic designer charge per hour?',
      content: `Freelance graphic designers in the US typically charge $50–$150/hr depending on experience, specialization, and location. To find your minimum viable rate, take your desired annual income, add 30% for self-employment taxes, add your annual business expenses, then divide by your billable hours. For example, to net $70,000 working 1,200 billable hours with $5,000 in expenses, you need to bill roughly $83/hr before taxes.`,
    },
    {
      id: 'gd-llc',
      title: 'When should a graphic designer form an LLC?',
      content: `The threshold most CPAs recommend is $60,000–$70,000 in annual net profit. Below that, the cost of running payroll and filing a separate S-Corp tax return ($1,500–$3,000/year) likely cancels out the SE tax savings. Above it, splitting income between a reasonable salary and distributions can save $3,000–$8,000 annually. Use the LLC mode in the calculator above to see your specific savings.`,
    },
  ],
  'video-editor': [
    {
      id: 've-deductions',
      title: 'Top tax deductions for freelance video editors',
      content: `Video production has some of the highest overhead in freelancing, which works in your favor at tax time. Deductible expenses include high-performance workstations, GPU upgrades, external storage arrays, and NAS/RAID systems. Cloud tools like Frame.io, Dropbox, and plugin marketplaces like Envato are fully deductible. If you travel to shoots or studios, mileage and travel costs are deductible at the IRS standard rate. Keep a mileage log — it adds up quickly.`,
    },
    {
      id: 've-rate',
      title: 'What should a freelance video editor charge per hour?',
      content: `Freelance video editors typically charge $40–$150/hr depending on the type of work — rough cuts and assembly edits on the lower end, color grading and motion graphics on the higher end. Day rates for on-set or agency work typically run $400–$1,200. When setting your rate, factor in the high cost of equipment replacement and software — your gear depreciates faster than most creative fields.`,
    },
    {
      id: 've-llc',
      title: 'When should a video editor form an LLC?',
      content: `If you are consistently earning over $60,000–$70,000 in net profit, an LLC taxed as an S-Corp can save you $3,000–$10,000 annually in self-employment taxes depending on your income level. Video editors with high equipment costs should also consider an LLC for liability protection — client contracts and expensive gear make legal exposure a real risk worth insuring against structurally.`,
    },
  ],
  'web-developer': [
    {
      id: 'wd-deductions',
      title: 'Top tax deductions for freelance web developers',
      content: `As a freelance developer, your digital infrastructure is your biggest tax lever. Deduct all server hosting fees (AWS, Vercel, DigitalOcean), domain registrations, and SaaS subscriptions like GitHub Copilot, JetBrains, or Linear. Professional development expenses — coding courses, technical books, conference tickets — are valid business expenses. A dedicated home office space is deductible either by the simplified method ($5/sq ft up to 300 sq ft) or the actual expense method, which is usually higher.`,
    },
    {
      id: 'wd-rate',
      title: 'What should a freelance web developer charge per hour?',
      content: `Freelance web developers in the US typically charge $75–$200/hr. Frontend developers on the lower end, full-stack and backend engineers in the middle, and specialized roles like blockchain or ML engineers at the top. To calculate your minimum rate: take your target annual income, add 30% for taxes, add business expenses, divide by billable hours (typically 1,000–1,400 for a full-time freelancer accounting for admin time and gaps between projects).`,
    },
    {
      id: 'wd-llc',
      title: 'When should a web developer form an LLC?',
      content: `Beyond the $60,000–$70,000 profit threshold for SE tax savings, web developers have an additional reason to form an LLC: liability protection on contracts. Client disputes, IP ownership issues, and data breaches are real risks. An LLC separates your personal assets from your business. Most freelance developers find the combination of tax savings and liability protection makes the LLC worthwhile well before the SE tax math alone would justify it.`,
    },
  ],
  'copywriter': [
    {
      id: 'cw-deductions',
      title: 'Top tax deductions for freelance copywriters',
      content: `Copywriting is a high-margin business with lower overhead than most creative fields — which makes tax strategy more important, not less. Deductible expenses include research materials, books, and subscriptions to tools like Grammarly, Jasper, or ChatGPT Plus. If you interview sources, travel and communication costs are deductible. Health insurance premiums are often 100% deductible for self-employed writers, which is significant given the cost of individual coverage.`,
    },
    {
      id: 'cw-rate',
      title: 'What should a freelance copywriter charge per hour?',
      content: `Freelance copywriters typically charge $50–$200/hr depending on specialization. General web copy sits lower; direct response, email sequences, and B2B SaaS copy command premium rates. Many experienced copywriters move to project-based pricing — a landing page at $500–$3,000, an email sequence at $150–$500 per email — which decouples income from hourly time and rewards efficiency.`,
    },
    {
      id: 'cw-llc',
      title: 'When should a copywriter form an LLC?',
      content: `Because copywriting has low overhead, net profit margins are high — meaning you hit the $60,000–$70,000 S-Corp threshold faster than most freelancers. A copywriter billing $100,000 with $10,000 in expenses has $90,000 in net profit, making the LLC election potentially worth $4,000–$7,000 in annual SE tax savings. The administrative cost is typically $1,500–$2,500/year, leaving a clear net benefit.`,
    },
  ],
  'social-media-manager': [
    {
      id: 'smm-deductions',
      title: 'Top tax deductions for freelance social media managers',
      content: `Social media managers can deduct scheduling and analytics tools like Buffer, Hootsuite, Sprout Social, and Later. Stock photo and video subscriptions, Canva Pro, and any ad spend managed on behalf of clients that you front personally are deductible. If you use your phone heavily for content creation and client communication, a portion of your phone bill is deductible. Keep receipts for any equipment used for content creation — cameras, lighting, microphones.`,
    },
    {
      id: 'smm-rate',
      title: 'What should a freelance social media manager charge per hour?',
      content: `Freelance social media managers typically charge $25–$100/hr, with experienced strategists and those managing paid ad budgets at the higher end. Many move to monthly retainers — $500–$3,000/month per client depending on platform count and content volume — which provides more predictable income and rewards efficiency over billing hours.`,
    },
    {
      id: 'smm-llc',
      title: 'When should a social media manager form an LLC?',
      content: `At the $60,000–$70,000 net profit threshold, the SE tax savings from an S-Corp election become meaningful. Social media managers managing ad budgets also benefit from LLC liability protection — if a client's ad campaign underperforms and they pursue a dispute, an LLC keeps your personal assets separate. Most freelance social media managers find both reasons apply once they have 3–5 ongoing retainer clients.`,
    },
  ],
  'ux-designer': [
    {
      id: 'ux-deductions',
      title: 'Top tax deductions for freelance UX designers',
      content: `UX designers can deduct Figma, Sketch, Adobe XD, and any prototyping or user testing tools like Maze or Hotjar. User research costs — participant recruitment fees, survey tools — are deductible as direct project expenses. A high-quality monitor and ergonomic setup are deductible if used primarily for work. UX conferences and workshop attendance (like UX Research Summit or Interaction) are fully deductible as professional development.`,
    },
    {
      id: 'ux-rate',
      title: 'What should a freelance UX designer charge per hour?',
      content: `Freelance UX designers typically charge $75–$175/hr. UX researchers and service designers command the top of that range; UI-heavy or visual designers typically sit lower. Many senior UX freelancers work on project retainers — a discovery sprint at $5,000–$15,000, an end-to-end product design engagement at $20,000–$60,000 — which reflects the strategic value of the work rather than time spent.`,
    },
    {
      id: 'ux-llc',
      title: 'When should a UX designer form an LLC?',
      content: `UX designers working with startups and enterprise clients on product design have meaningful IP and contract risk — an LLC provides liability protection that sole proprietors lack. On the tax side, senior UX freelancers billing $120,000–$200,000 can save $5,000–$12,000 annually through the S-Corp election. The combination of liability protection and tax savings makes the LLC case strong at the $70,000+ net profit level.`,
    },
  ],
};

export default async function IndustryPage({ params }: { params: Promise<{ industry: string }> }) {
  const { industry: industrySlug } = await params;
  const displayName = industrySlug.split('-').join(' ');
  const accordionData = roleContent[industrySlug];

  if (!accordionData) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 selection:bg-indigo-500">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <header className="mb-12">
          <nav className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors mb-4">
            <Link href="/">← Back to Main Calculator</Link>
          </nav>
          <h1 className="text-4xl font-extrabold text-white tracking-tight">
            {displayName.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')} Tax Calculator 2025–2026
          </h1>
          <p className="text-zinc-400 mt-2 max-w-2xl text-lg">
            Free 1099 tax calculator for freelance {displayName}s. Estimate your 2025–2026 federal, state, and self-employment taxes — including top deductions for your industry.
          </p>
          {industrySlug === 'graphic-designer' && (
            <Link
              href="/guides/graphic-designer-tax-deductions"
              className="inline-flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300 mt-4 transition-colors"
            >
              Read the full graphic designer tax deductions guide →
            </Link>
          )}
        </header>

        <TaxCalculator />

        <section className="mt-16 bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 md:p-8 backdrop-blur-md">
          <h2 className="text-2xl font-bold text-white mb-6 tracking-tight">
            {displayName.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')} Tax Guide & Deductions 2025–2026
          </h2>
          <TaxGuideAccordion customData={accordionData} hideHeader />
        </section>
      </div>
    </div>
  );
}
