'use client'; // This must be at the top for the click logic to work
import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "What is the 'Rule of Thumb' for 1099 vs W2 rates?",
      a: "As a general rule, a 1099 hourly rate should be 25% to 35% higher than a W2 hourly rate. This 'markup' covers the employer's share of FICA taxes, health insurance, 401k matching, and unpaid time off that you lose when leaving a corporate role."
    },
    {
      q: "How does self-employment tax work for freelancers?",
      a: "When you are W2, you pay 7.65% in FICA taxes and your boss pays 7.65%. On 1099, you are both the boss and the employee, so you pay the full 15.3%. However, you can deduct the 'employer' half on your tax return, which our calculator factors into your net pay."
    },
    {
      q: "Is a $50/hr freelance rate the same as a $100k salary?",
      a: "Usually not. A $100k salary is roughly $48/hr, but it comes with benefits. To 'break even' as a freelancer with the same lifestyle, you would typically need to charge $65-$70/hr to cover your own benefits, software, and taxes."
    },
    {
      q: "What is the QBI Deduction?",
      a: "The Qualified Business Income (QBI) deduction allows many freelancers to deduct up to 20% of their business income from their federal taxes. This is a massive advantage for 1099 workers that isn't available to W2 employees."
    }
  ];

  return (
    <section className="max-w-3xl mx-auto mt-20 mb-20 px-6">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">Freelance Tax & Rate FAQ</h2>
      <div className="space-y-4">
        {faqs.map((item, index) => (
          <div key={index} className="border border-slate-800 rounded-xl overflow-hidden">
            <button 
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between p-5 text-left bg-slate-900/50 hover:bg-slate-800 transition-colors"
            >
              <span className="font-bold text-white">{item.q}</span>
              <span className={`text-xl transition-transform ${openIndex === index ? 'rotate-45' : 'rotate-0'}`}>
                +
              </span>
            </button>
            
            {openIndex === index && (
              <div className="p-5 bg-slate-900/30 text-slate-400 border-t border-slate-800 animate-in fade-in slide-in-from-top-1">
                {item.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;