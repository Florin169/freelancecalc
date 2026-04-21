import ComparisonTool from '@/components/ComparisonTool';
import FAQ from '@/app/components/FAQ'

export const metadata = {
  title: '1099 vs W2 Calculator | Freelance vs Salary Comparison',
  description: 'Should you take the job offer? Compare 1099 freelance rates against W2 salaries, factoring in taxes, benefits, and expenses.',
};

export default function ComparePage() {
  return (
    /* Changed bg-slate-50 to bg-zinc-950 and text-zinc-50 */
    <main className="min-h-screen bg-zinc-950 text-zinc-50 py-12 px-4">
      <div className="max-w-6xl mx-auto text-center mb-12">
        {/* Changed text-slate-900 to text-white */}
        <h1 className="text-4xl font-black text-white mb-4">
          1099 Contractor vs. W2 Salary
        </h1>
        {/* Changed text-slate-600 to text-zinc-400 */}
        <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
          The "Break-Even" Calculator. Find out exactly how much you need to charge as a freelancer to match your current corporate salary.
        </p>
      </div>
      
      <ComparisonTool />
      <FAQ />

      {/* Changed prose-slate to prose-invert and prose-zinc for dark-mode SEO text */}
      <section className="max-w-3xl mx-auto mt-20 prose prose-invert prose-zinc">
        <h2 className="text-white">Why 1099 Rates Must Be Higher</h2>
        <p className="text-zinc-400">
          When you move from W2 to 1099, you take on costs your employer used to pay. 
          The "Rule of Thumb" is that your 1099 rate should be <b className="text-indigo-400">25% to 40% higher</b> 
          than your W2 hourly equivalent to account for:
        </p>
        <ul className="text-zinc-400">
          <li><b className="text-zinc-200">Self-Employment Tax:</b> An extra 7.65% your employer used to pay.</li>
          <li><b className="text-zinc-200">Benefits:</b> Health insurance, 401k matching, and life insurance.</li>
          <li><b className="text-zinc-200">Unpaid Time:</b> Vacation, sick days, and holidays.</li>
        </ul>
      </section>
    </main>
  );
}