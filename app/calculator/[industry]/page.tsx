import TaxCalculator from '@/components/TaxCalculator';
import Link from 'next/link';

// This tells Next.js which pages to "pre-build"
export async function generateStaticParams() {
  const industries = ['graphic-designer', 'video-editor', 'web-developer', 'copywriter', 'social-media-manager'];
  return industries.map((industry) => ({
    industry: industry,
  }));
}

// We must "await" params in Next.js 15
export default async function IndustryPage({ params }: { params: Promise<{ industry: string }> }) {
  const resolvedParams = await params;
  const industrySlug = resolvedParams.industry;
  const displayName = industrySlug.split('-').join(' ');
  
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <header className="mb-12">
        <nav className="text-sm text-indigo-600 mb-4">
          <Link href="/">← Back to Main Calculator</Link>
        </nav>
        <h1 className="text-4xl font-extrabold text-slate-900 capitalize">
          {displayName} Freelance Tax Calculator
        </h1>
        <p className="text-slate-600 mt-2 max-w-2xl">
          Professional 2026 tax breakdown specifically for {displayName}s. 
          Includes 1099 self-employment tax, QBI deductions, and industry-standard overhead estimates.
        </p>
      </header>

      {/* Passing the display name to the calculator */}
      <TaxCalculator industry={displayName} />

      <article className="mt-16 prose prose-slate max-w-none border-t pt-10">
        <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">Why {displayName}s need a specific calculator</h3>
        <p className="text-slate-600">
          Standard tax tools often ignore the specific "hidden costs" of being a {displayName}. 
          From high-end software subscriptions to equipment depreciation, your actual "taxable profit" 
          is often much lower than your gross billings. This tool helps you see your true take-home pay.
        </p>
      </article>
    </div>
  );
}