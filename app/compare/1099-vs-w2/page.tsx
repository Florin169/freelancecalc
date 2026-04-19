import ComparisonTool from '@/components/ComparisonTool';
import FAQ from '@/app/components/FAQ'

export const metadata = {
  title: '1099 vs W2 Calculator | Freelance vs Salary Comparison',
  description: 'Should you take the job offer? Compare 1099 freelance rates against W2 salaries, factoring in taxes, benefits, and expenses.',
};

export default function ComparePage() {
  return (
    <main className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-black text-slate-900 mb-4">
          1099 Contractor vs. W2 Salary
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          The "Break-Even" Calculator. Find out exactly how much you need to charge as a freelancer to match your current corporate salary.
        </p>
      </div>
      
      <ComparisonTool />
      <FAQ />

      <section className="max-w-3xl mx-auto mt-20 prose prose-slate">
        <h2>Why 1099 Rates Must Be Higher</h2>
        <p>
          When you move from W2 to 1099, you take on costs your employer used to pay. 
          The "Rule of Thumb" is that your 1099 rate should be <b>25% to 40% higher</b> 
          than your W2 hourly equivalent to account for:
        </p>
        <ul>
          <li><b>Self-Employment Tax:</b> An extra 7.65% your employer used to pay.</li>
          <li><b>Benefits:</b> Health insurance, 401k matching, and life insurance.</li>
          <li><b>Unpaid Time:</b> Vacation, sick days, and holidays.</li>
        </ul>
      </section>
    </main>
  );
}