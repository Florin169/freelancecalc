"use client";
import React, { useState } from 'react';
import { calculateFreelanceTax } from '@/lib/tax-logic';
import { ArrowRight, Briefcase, UserCheck } from 'lucide-react';

export default function ComparisonTool() {
  const [w2Salary, setW2Salary] = useState(80000);
  
  // W2 simple math (estimating 25% total tax hit for W2)
  const w2Net = w2Salary * 0.75;
  
  // Logic: Find the 1099 Gross that results in the same Net
  // Usually, 1099 needs to be ~30% higher
  const needed1099Gross = w2Salary * 1.35;
  const freelanceResults = calculateFreelanceTax(needed1099Gross, 5000);

  return (
    <div className="max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-11 gap-4 items-center">
        
        {/* W2 Side */}
        <div className="md:col-span-5 bg-white p-8 rounded-2xl border-2 border-slate-200">
          <div className="flex items-center gap-3 mb-6 text-slate-500">
            <Briefcase className="w-5 h-5" />
            <span className="font-bold uppercase tracking-widest text-xs">Current W2 Salary</span>
          </div>
          <input 
            type="number" 
            value={w2Salary} 
            onChange={(e) => setW2Salary(Number(e.target.value))}
            className="w-full text-4xl font-black text-slate-900 border-none focus:ring-0 p-0 mb-2"
          />
          <p className="text-slate-500 border-t pt-4">
            Estimated Take-Home: <span className="font-bold text-slate-700">${w2Net.toLocaleString()}</span>
          </p>
        </div>

        {/* The "Versus" Icon */}
        <div className="md:col-span-1 flex justify-center">
          <div className="bg-indigo-600 p-3 rounded-full text-white shadow-lg">
            <ArrowRight className="w-6 h-6 rotate-90 md:rotate-0" />
          </div>
        </div>

        {/* 1099 Side */}
        <div className="md:col-span-5 bg-indigo-900 p-8 rounded-2xl text-white shadow-2xl">
          <div className="flex items-center gap-3 mb-6 text-indigo-300">
            <UserCheck className="w-5 h-5" />
            <span className="font-bold uppercase tracking-widest text-xs">Needed 1099 Gross</span>
          </div>
          <h3 className="text-4xl font-black text-white mb-2">
            ${needed1099Gross.toLocaleString(undefined, {maximumFractionDigits: 0})}
          </h3>
          <p className="text-indigo-200 border-t border-indigo-800 pt-4">
            Hourly Rate: <span className="font-bold text-emerald-400">${(needed1099Gross / 2080).toFixed(2)}/hr</span>
          </p>
          <p className="text-xs text-indigo-400 mt-2 italic">
            *To match take-home pay after 1099 taxes & $5k expenses
          </p>
        </div>

      </div>
    </div>
  );
}