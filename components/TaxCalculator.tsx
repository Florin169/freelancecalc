"use client";
import React, { useState, useEffect } from 'react';
import { calculateFreelanceTax } from '@/lib/tax-logic';
import { DollarSign, Wallet, Percent, PieChart, Info } from 'lucide-react';

export default function TaxCalculator({ industry = "Freelancer" }) {
  const [gross, setGross] = useState(85000);
  const [expenses, setExpenses] = useState(5000);
  const [results, setResults] = useState<any>(null);

  useEffect(() => {
    setResults(calculateFreelanceTax(gross, expenses));
  }, [gross, expenses]);

  if (!results) return null;

  return (
    /* Changed bg-white to bg-zinc-900 and border-slate-100 to border-zinc-800 */
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-zinc-900 p-8 rounded-2xl shadow-2xl border border-zinc-800">
      {/* Left Side: Inputs */}
      <div className="space-y-8">
        <div>
          {/* Changed text-slate-700 to text-zinc-300 */}
          <label className="block text-sm font-semibold text-zinc-300 mb-4 uppercase tracking-wider">
            Annual Gross Revenue ($)
          </label>
          {/* Changed bg-indigo-100 to bg-zinc-800 */}
          <input 
            type="range" min="0" max="500000" step="500"
            value={gross} onChange={(e) => setGross(Number(e.target.value))}
            className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
          />
          <div className="mt-4 relative">
            {/* Changed text-slate-400 to text-zinc-500 */}
            <span className="absolute left-3 top-2 text-zinc-500">$</span>
            <input 
              type="number" min="0" value={gross} onChange={(e) => setGross(Number(e.target.value))}
              /* Changed bg-slate-50 to bg-zinc-950, border-slate-200 to border-zinc-800, and text-indigo-600 to text-indigo-400 */
              className="w-full pl-8 pr-4 py-2 bg-zinc-950 border border-zinc-800 rounded-lg font-bold text-xl text-indigo-400 outline-none focus:border-indigo-500 transition-colors"
            />
          </div>
        </div>

        <div>
          {/* Changed text-slate-700 to text-zinc-300 */}
          <label className="block text-sm font-semibold text-zinc-300 mb-4 uppercase tracking-wider">
            Annual Business Expenses
          </label>
          <input 
            type="number" value={expenses} onChange={(e) => setExpenses(Number(e.target.value))}
            /* Changed bg-slate-50 to bg-zinc-950, border-slate-200 to border-zinc-800, and text-slate-700 to text-zinc-100 */
            className="w-full px-4 py-2 bg-zinc-950 border border-zinc-800 rounded-lg font-medium text-zinc-100 outline-none focus:border-indigo-500 transition-colors"
            placeholder="Software, gear, office..."
          />
          {/* Changed text-slate-400 to text-zinc-500 */}
          <p className="text-xs text-zinc-500 mt-2 flex items-center">
            <Info className="w-3 h-3 mr-1" /> Includes health insurance & home office
          </p>
        </div>
      </div>

      {/* Right Side: Results */}
      {/* Kept bg-indigo-900 but updated sub-text and borders for better dark visibility */}
      <div className="bg-indigo-950 rounded-xl p-6 text-white space-y-6 border border-indigo-500/20 shadow-inner">
        <div>
          <p className="text-indigo-300 text-sm font-medium">Estimated Net Take-Home</p>
          <h2 className="text-4xl font-black text-white">${results.netTakeHome.toLocaleString(undefined, {maximumFractionDigits:0})}</h2>
          <p className="text-indigo-400/70 text-sm mt-1">/ year after all taxes</p>
        </div>

        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-indigo-500/20">
          <div>
            <p className="text-indigo-300 text-xs uppercase font-bold tracking-wider">Monthly Net</p>
            <p className="text-xl font-bold text-white">${results.monthly.toLocaleString(undefined, {maximumFractionDigits:0})}</p>
          </div>
          <div>
            <p className="text-indigo-300 text-xs uppercase font-bold tracking-wider">Effective Tax</p>
            <p className="text-xl font-bold text-emerald-400">{results.effectiveRate.toFixed(1)}%</p>
          </div>
        </div>

        {/* Changed bg-indigo-950/50 to bg-black/20 for better depth */}
        <div className="space-y-3 bg-black/20 p-4 rounded-lg text-sm border border-white/5">
          <div className="flex justify-between">
            <span className="text-indigo-200">Self-Employment Tax (15.3%)</span>
            <span className="font-medium">${results.seTax.toLocaleString(undefined, {maximumFractionDigits:0})}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-indigo-200">Federal Income Tax</span>
            <span className="font-medium">${results.fedTax.toLocaleString(undefined, {maximumFractionDigits:0})}</span>
          </div>
        </div>
      </div>
    </div>
  );
}