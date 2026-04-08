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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
      {/* Left Side: Inputs */}
      <div className="space-y-8">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-4 uppercase tracking-wider">
            Annual Gross Revenue ($)
          </label>
          <input 
            type="range" min="0" max="500000" step="500"
            value={gross} onChange={(e) => setGross(Number(e.target.value))}
            className="w-full h-2 bg-indigo-100 rounded-lg appearance-none cursor-pointer accent-indigo-600"
          />
          <div className="mt-4 relative">
            <span className="absolute left-3 top-2 text-slate-400">$</span>
            <input 
              type="number" min="0" value={gross} onChange={(e) => setGross(Number(e.target.value))}
              className="w-full pl-8 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg font-bold text-xl text-indigo-600"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-4 uppercase tracking-wider">
            Annual Business Expenses
          </label>
          <input 
            type="number" value={expenses} onChange={(e) => setExpenses(Number(e.target.value))}
            className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg font-medium text-slate-700"
            placeholder="Software, gear, office..."
          />
          <p className="text-xs text-slate-400 mt-2 flex items-center">
            <Info className="w-3 h-3 mr-1" /> Includes health insurance & home office
          </p>
        </div>
      </div>

      {/* Right Side: Results */}
      <div className="bg-indigo-900 rounded-xl p-6 text-white space-y-6">
        <div>
          <p className="text-indigo-200 text-sm font-medium">Estimated Net Take-Home</p>
          <h2 className="text-4xl font-black">${results.netTakeHome.toLocaleString(undefined, {maximumFractionDigits:0})}</h2>
          <p className="text-indigo-300 text-sm mt-1">/ year after all taxes</p>
        </div>

        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-indigo-800">
          <div>
            <p className="text-indigo-300 text-xs uppercase font-bold">Monthly Net</p>
            <p className="text-xl font-bold">${results.monthly.toLocaleString(undefined, {maximumFractionDigits:0})}</p>
          </div>
          <div>
            <p className="text-indigo-300 text-xs uppercase font-bold">Effective Tax</p>
            <p className="text-xl font-bold text-emerald-400">{results.effectiveRate.toFixed(1)}%</p>
          </div>
        </div>

        <div className="space-y-3 bg-indigo-950/50 p-4 rounded-lg text-sm">
          <div className="flex justify-between">
            <span className="text-indigo-300">Self-Employment Tax (15.3%)</span>
            <span>${results.seTax.toLocaleString(undefined, {maximumFractionDigits:0})}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-indigo-300">Federal Income Tax</span>
            <span>${results.fedTax.toLocaleString(undefined, {maximumFractionDigits:0})}</span>
          </div>
        </div>
      </div>
    </div>
  );
}