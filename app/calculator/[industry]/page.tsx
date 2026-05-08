import TaxCalculator from '@/components/TaxCalculator';
import TaxGuideAccordion from '@/components/TaxGuideAccordion';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const industries = ['graphic-designer', 'video-editor', 'web-developer', 'copywriter', 'social-media-manager', 'ux-designer'];
  return industries.map((industry) => ({ industry }));
}

const roleContent: Record<string, { id: string; title: string; content: string }[]> = {
  'graphic-designer': [
    {
      id: 'gd-deductions',
      title: 'Top Tax Deductions for Graphic Designers',
      content: `For freelance designers, taxable income is significantly impacted by equipment and software costs. Beyond the standard home office deduction, you can deduct 100% of your Adobe Creative Cloud subscriptions, font licenses, and stock photo memberships. Don't forget to include high-ticket hardware like Wacom tablets, color-accurate monitors, and iPad Pros if they are used primarily for client work. Tracking these "ordinary and necessary" expenses is the best way to lower your self-employment tax burden and increase your final take-home pay.

Want to see how an LLC affects your Graphic Designer taxes? Switch to LLC Mode above.`,
    },
    {
      id: 'gd-calculator',
      title: 'Graphic Designer Tax Calculator & Deductions',
      content: `Standard tax tools often ignore the specific "hidden costs" of being a graphic designer. From software subscriptions to equipment depreciation, this tool helps you see your true take-home pay. Use this calculator to accurately estimate your 1099 tax obligations and ensure you never overpay the IRS.`,
    },
  ],
  'video-editor': [
    {
      id: 've-deductions',
      title: 'Maximizing Deductions for Video Editors & Motion Artists',
      content: `Video production involves some of the highest overhead in the freelance world. To optimize your 1099 tax return, ensure you are deducting high-performance workstations, GPU upgrades, and external storage arrays (NAS/RAID). Additionally, cloud-based tools like Frame.io, Dropbox, and specialized plugins or assets from marketplaces like Envato are fully deductible. If you work on-site at studios, keep a log of your mileage or travel expenses, as these can be subtracted from your gross income to lower your total tax liability.

Want to see how an LLC affects your Video Editor taxes? Switch to LLC Mode above.`,
    },
    {
      id: 've-calculator',
      title: 'Video Editor Tax Calculator & Deductions',
      content: `Freelance film editors and motion artists face unique 1099 tax challenges. Use this specialized calculator to account for your high-cost gear and software, and see exactly how much you should be setting aside for quarterly taxes.`,
    },
  ],
  'web-developer': [
    {
      id: 'wd-deductions',
      title: 'Tax Optimization for Freelance Web Developers',
      content: `As a freelance programmer, your digital infrastructure is your biggest tax lever. You should be deducting all server hosting fees (AWS, Vercel, DigitalOcean), domain registrations, and SaaS subscriptions like GitHub Copilot, JetBrains, or Slack Pro. Professional development is also key—coding bootcamps, technical books, and tickets to dev conferences are valid business expenses. Our developer tax calculator helps you account for these costs, ensuring that your "Reasonable Salary" in an LLC structure is based on your true net profit.

Want to see how an LLC affects your Web Developer taxes? Switch to LLC Mode above.`,
    },
    {
      id: 'wd-calculator',
      title: 'Web Developer Tax Calculator & Deductions',
      content: `Developers often miss valuable tax write-offs. This freelance programmer 1099 tax calculator ensures you capture every allowable deduction, from your IDE subscriptions to your cloud infrastructure, maximizing your true take-home pay.`,
    },
  ],
  'copywriter': [
    {
      id: 'cw-deductions',
      title: 'Essential Tax Guide for Freelance Copywriters & Authors',
      content: `Copywriting is a high-margin business, which often leads to a higher self-employment tax bill if not managed correctly. Key deductions for writers include research materials, books, and subscriptions to tools like Grammarly, Jasper, or ChatGPT Plus. If you interview sources for your content, travel and communication costs are also deductible. Since writing requires minimal overhead, many copywriters benefit significantly from switching to an LLC/S-Corp structure once they reach $60k+ in annual profit to save on FICA taxes.

Want to see how an LLC affects your Copywriter taxes? Switch to LLC Mode above.`,
    },
    {
      id: 'cw-calculator',
      title: 'Copywriter Tax Calculator & Deductions',
      content: `Freelance writers and authors need accurate tools to project their 1099 tax burden. This calculator helps you account for your income, business expenses, and potential LLC savings so you can keep more of what you earn.`,
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
          <h1 className="text-4xl font-extrabold text-white capitalize tracking-tight">
            {displayName} Freelance Tax Calculator
          </h1>
          <p className="text-zinc-400 mt-2 max-w-2xl text-lg">
            Professional 2026 tax breakdown specifically for {displayName}s. 
            Includes 1099 self-employment tax, QBI deductions, and industry-standard overhead estimates.
          </p>
        </header>

        <TaxCalculator />

        <section className="mt-16 bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 md:p-8 backdrop-blur-md">
          <h2 className="text-2xl font-bold text-white mb-6 tracking-tight">
            {displayName} Tax Guide & Deductions
          </h2>
          <TaxGuideAccordion customData={accordionData} hideHeader />
        </section>
      </div>
    </div>
  );
}
