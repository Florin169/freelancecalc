import TaxCalculator from '@/components/TaxCalculator';
import Link from 'next/link';

export async function generateStaticParams() {
  const industries = ['graphic-designer', 'video-editor', 'web-developer', 'copywriter', 'social-media-manager', 'ux-designer'];
  return industries.map((industry) => ({ industry }));
}

export default async function IndustryPage({ params }: { params: Promise<{ industry: string }> }) {
  const { industry: industrySlug } = await params;
  const displayName = industrySlug.split('-').join(' ');
  
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

        <TaxCalculator industry={displayName} />

        <article className="mt-16 prose prose-invert prose-zinc max-w-none border-t border-zinc-800 pt-10">
          <h3 className="text-xl font-bold mb-4 uppercase tracking-tight text-white">
            Why {displayName}s need a specific calculator
          </h3>
          <p className="text-zinc-400 leading-relaxed">
            Standard tax tools often ignore the specific "hidden costs" of being a {displayName}. 
            From software subscriptions to equipment depreciation, this tool helps you see your true take-home pay.
          </p>
        </article>
      </div>
    </div>
  );
}