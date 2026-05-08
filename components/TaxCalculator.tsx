"use client";
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { calculateFreelanceTax, calculateSCorpTax } from '@/lib/tax-logic';
import { DollarSign, Info, Building2, User, TrendingDown } from 'lucide-react';

type Tool = 'freelance' | 'llc';

type TaxResults = {
  netTakeHome: number;
  totalTax: number;
  seTax: number;
  fedTax: number;
  effectiveRate: number;
  monthly: number;
  distributions?: number;
  salary?: number;
};

export default function TaxCalculator({ industry = "Freelancer" }) {
  const [activeTool, setActiveTool] = useState<Tool>('freelance');

  const [gross, setGross] = useState(85000);
  const [expenses, setExpenses] = useState(5000);
  const [salary, setSalary] = useState(45000);

  const [grossDisplay, setGrossDisplay] = useState("85000");
  const [expensesDisplay, setExpensesDisplay] = useState("5000");
  const [salaryDisplay, setSalaryDisplay] = useState("45000");

  const [results, setResults] = useState<TaxResults | null>(null);
  const [savings, setSavings] = useState<number>(0);

  useEffect(() => {
    let currentResults: TaxResults;
    if (activeTool === 'llc') {
      currentResults = calculateSCorpTax(gross, expenses, salary);
    } else {
      currentResults = calculateFreelanceTax(gross, expenses);
    }
    setResults(currentResults);

    // Calculate tax savings when in LLC mode
    if (activeTool === 'llc') {
      const freelanceResults = calculateFreelanceTax(gross, expenses);
      setSavings(Math.max(0, freelanceResults.totalTax - currentResults.totalTax));
    }
  }, [gross, expenses, salary, activeTool]);

  const handleGrossChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    setGrossDisplay(raw);
    const num = Number(raw);
    if (raw === "" || (!isNaN(num) && raw !== "")) {
      setGross(raw === "" ? 0 : num);
    }
  };

  const handleExpensesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    setExpensesDisplay(raw);
    const num = Number(raw);
    if (raw === "" || (!isNaN(num) && raw !== "")) {
      setExpenses(raw === "" ? 0 : num);
    }
  };

  const handleSalaryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    setSalaryDisplay(raw);
    const num = Number(raw);
    if (raw === "" || (!isNaN(num) && raw !== "")) {
      setSalary(raw === "" ? 0 : num);
    }
  };

  // Compute dynamic meta/SEO content
  const seoTitle = activeTool === 'llc' ? "LLC Tax Calculator & S-Corp Savings" : "Self-Employed Tax Estimator (1099)";
  const seoDescription = activeTool === 'llc' 
    ? "Calculate your LLC or S-Corp tax savings and see how much you save compared to a sole proprietorship." 
    : "Estimate your freelance 1099 taxes, self-employment tax, and federal deductions in seconds.";

  if (!results) return null;

  const StatCard = ({ label, value, sub, accent = false }: { label: string; value: string; sub?: string; accent?: boolean }) => (
    <div className="bg-white/[0.03] border border-white/10 rounded-xl p-4 backdrop-blur-sm">
      <p className="text-zinc-400 text-xs font-semibold uppercase tracking-wider mb-1">{label}</p>
      <p className={`text-2xl font-bold tracking-tight ${accent ? 'text-white' : 'text-zinc-100'}`}>{value}</p>
      {sub && <p className="text-zinc-500 text-xs mt-1">{sub}</p>}
    </div>
  );

  return (
    <>
      <Head>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Left Side: Inputs */}
        <div className="lg:col-span-3 space-y-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl p-4 md:p-8 backdrop-blur-md shadow-2xl">
          {/* Tool Switcher */}
          <div className="flex items-center justify-center">
            <div className="inline-flex w-full md:w-auto items-center gap-1 bg-black border border-zinc-800 rounded-full p-1">
              <button
                onClick={() => setActiveTool('freelance')}
                className={`relative flex-1 md:flex-none flex items-center justify-center gap-2 px-3 md:px-5 py-2.5 md:py-2.5 rounded-full text-xs md:text-sm font-bold transition-all duration-300 ${activeTool === 'freelance' ? 'bg-zinc-800 text-white shadow-lg' : 'text-zinc-500 hover:text-zinc-300'}`}
              >
                <User size={16} />
                Freelance (1099)
              </button>
              <button
                onClick={() => setActiveTool('llc')}
                className={`relative flex-1 md:flex-none flex items-center justify-center gap-2 px-3 md:px-5 py-2.5 md:py-2.5 rounded-full text-xs md:text-sm font-bold transition-all duration-300 ${activeTool === 'llc' ? 'bg-zinc-800 text-white shadow-lg' : 'text-zinc-500 hover:text-zinc-300'}`}
              >
                <Building2 size={16} />
                LLC (S-Corp)
              </button>
            </div>
          </div>

          <div className="space-y-6 md:space-y-8 pt-2">
            <div>
              <label className="block text-xs md:text-sm font-semibold text-zinc-300 mb-3 md:mb-4 uppercase tracking-wider">
                Annual Gross Revenue
              </label>
              <div className="relative mb-4">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 text-base md:text-lg font-medium">$</span>
                <input
                  type="number" min="0" value={grossDisplay} onChange={handleGrossChange}
                  className="w-full pl-10 pr-4 py-3 bg-black/30 border border-zinc-700/50 rounded-xl font-bold text-lg md:text-xl text-white outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 transition-all placeholder:text-zinc-600"
                />
              </div>
              <input
                type="range" min="0" max="500000" step="500"
                value={gross} onChange={(e) => {
                  const num = Number(e.target.value);
                  setGross(num);
                  setGrossDisplay(String(num));
                }}
                className="w-full h-3 md:h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
              />
              <div className="flex justify-between mt-2 text-xs text-zinc-600 font-mono">
                <span>$0</span>
                <span>$500K</span>
              </div>
            </div>

            <div>
              <label className="block text-xs md:text-sm font-semibold text-zinc-300 mb-3 md:mb-4 uppercase tracking-wider">
                Annual Business Expenses
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 text-base md:text-lg font-medium">$</span>
                <input
                  type="number" value={expensesDisplay} onChange={handleExpensesChange}
                  className="w-full pl-10 pr-4 py-3 bg-black/30 border border-zinc-700/50 rounded-xl font-bold text-lg md:text-xl text-white outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 transition-all placeholder:text-zinc-600"
                  placeholder="Software, gear, office..."
                />
              </div>
              <p className="text-xs text-zinc-500 mt-3 flex items-center gap-1.5">
                <Info className="w-3 h-3 text-zinc-600" /> Includes health insurance & home office
              </p>
            </div>

            {/* Conditional S-Corp Salary Input */}
            <AnimatePresence>
              {activeTool === 'llc' && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden"
                >
                  <div className="pt-2">
                    <label className="block text-xs md:text-sm font-semibold text-zinc-300 mb-3 md:mb-4 uppercase tracking-wider">
                      Reasonable Salary
                    </label>
                    <div className="relative mb-4">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 text-base md:text-lg font-medium">$</span>
                      <input
                        type="number" min="0" value={salaryDisplay} onChange={handleSalaryChange}
                        className="w-full pl-10 pr-4 py-3 bg-black/30 border border-zinc-700/50 rounded-xl font-bold text-lg md:text-xl text-white outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 transition-all placeholder:text-zinc-600"
                      />
                    </div>
                    <input
                      type="range" min="0" max="500000" step="500"
                      value={salary} onChange={(e) => {
                        const num = Number(e.target.value);
                        setSalary(num);
                        setSalaryDisplay(String(num));
                      }}
                      className="w-full h-3 md:h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                    />
                    <div className="flex justify-between mt-2 text-xs text-zinc-600 font-mono">
                      <span>$0</span>
                      <span>$500K</span>
                    </div>
                    <p className="text-xs text-zinc-500 mt-3 flex items-center gap-1.5">
                      <Info className="w-3 h-3 text-zinc-600" /> Salary must be "reasonable" for your industry
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Right Side: Results (Hidden on mobile, desktop sticky) */}
        <div className="hidden lg:block lg:col-span-2 space-y-4">
          <div className="lg:sticky lg:top-8 bg-gradient-to-b from-zinc-900 to-zinc-950 rounded-2xl p-6 md:p-8 border border-zinc-800/80 shadow-2xl backdrop-blur-xl">
            
            {/* Savings Highlight (LLC Mode Only) */}
            <AnimatePresence>
              {activeTool === 'llc' && savings > 0 && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="mb-6"
                >
                  <div className="relative overflow-hidden bg-emerald-950/30 border border-emerald-500/30 rounded-xl p-4 backdrop-blur-sm shadow-[0_0_15px_rgba(16,185,129,0.1)]">
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center shrink-0">
                        <TrendingDown size={16} className="text-emerald-400" />
                      </div>
                      <div>
                        <p className="text-emerald-400 text-[10px] font-bold uppercase tracking-widest">Estimated S-Corp Savings</p>
                        <p className="text-2xl font-black text-white tracking-tight mt-1">
                          ${savings.toLocaleString(undefined, {maximumFractionDigits:0})}
                        </p>
                        <p className="text-emerald-400/70 text-xs mt-1">Compared to Sole Proprietorship</p>
                      </div>
                    </div>
                    {/* Background Glow */}
                    <div className="absolute -top-10 -right-10 w-24 h-24 bg-emerald-500/20 rounded-full blur-2xl pointer-events-none" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Hero Result */}
            <div className="mb-6 pb-6 border-b border-zinc-800/60">
              <p className="text-zinc-400 text-xs font-semibold uppercase tracking-widest mb-2">Estimated Net Take-Home</p>
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter">
                ${results.netTakeHome.toLocaleString(undefined, {maximumFractionDigits:0})}
              </h2>
              <p className="text-zinc-500 text-sm mt-2 font-mono">/ year after all taxes</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <StatCard 
                label="Monthly Net" 
                value={`$${results.monthly.toLocaleString(undefined, {maximumFractionDigits:0})}`} 
              />
              <StatCard 
                label="Effective Tax Rate" 
                value={`${results.effectiveRate.toFixed(1)}%`}
                accent
              />
            </div>

            {/* S-Corp Additional Stats */}
            {activeTool === 'llc' && (
              <div className="grid grid-cols-1 gap-3 mb-6">
                {results.distributions !== undefined && (
                  <StatCard 
                    label="Pass-Through Distributions" 
                    value={`$${results.distributions.toLocaleString(undefined, {maximumFractionDigits:0})}`} 
                    sub="Not subject to SE tax"
                  />
                )}
                {results.salary !== undefined && (
                  <StatCard 
                    label="Reasonable Salary" 
                    value={`$${results.salary.toLocaleString(undefined, {maximumFractionDigits:0})}`} 
                    sub="Subject to SE tax (15.3%)"
                  />
                )}
              </div>
            )}

            {/* Breakdown */}
            <div className="space-y-3 bg-black/20 p-4 rounded-xl text-sm border border-white/5">
              <h4 className="text-zinc-400 text-xs font-bold uppercase tracking-widest mb-3">Tax Breakdown</h4>
              <div className="flex justify-between items-center">
                <span className="text-zinc-400">Self-Employment Tax</span>
                <span className="font-mono font-medium text-zinc-200">${results.seTax.toLocaleString(undefined, {maximumFractionDigits:0})}</span>
              </div>
              <div className="w-full h-px bg-zinc-800/50" />
              <div className="flex justify-between items-center">
                <span className="text-zinc-400">Federal Income Tax</span>
                <span className="font-mono font-medium text-zinc-200">${results.fedTax.toLocaleString(undefined, {maximumFractionDigits:0})}</span>
              </div>
            </div>

            {/* Footer Note */}
            <div className="mt-6 pt-6 border-t border-zinc-800/60 text-center">
              <p className="text-[10px] text-zinc-600 font-mono leading-relaxed">
                ESTIMATES BASED ON 2026 TAX LAW<br/>
                FOR EDUCATIONAL PURPOSES ONLY
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sticky Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
        <AnimatePresence>
          <motion.div 
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            className="bg-zinc-900/90 backdrop-blur-md border-t border-zinc-800 px-4 py-3 shadow-2xl"
          >
            <div className="flex items-center justify-between max-w-md mx-auto">
              <div>
                <p className="text-zinc-400 text-[10px] font-semibold uppercase tracking-widest">Net Take-Home</p>
                <p className="text-xl font-black text-white tracking-tighter">
                  ${results.netTakeHome.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                </p>
              </div>
              <AnimatePresence>
                {activeTool === 'llc' && savings > 0 && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-lg"
                  >
                    <TrendingDown size={14} className="text-emerald-400" />
                    <div className="text-right">
                      <p className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider">Savings</p>
                      <p className="text-sm font-bold text-white">${savings.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}
