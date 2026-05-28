'use client';

import React, { useState } from 'react';
import { ChevronDown, BookOpen, Briefcase, Lightbulb, type LucideProps } from 'lucide-react';

export interface AccordionItem {
  id: string;
  title: string;
  content: string;
  icon?: React.ReactNode;
}

interface TaxGuideAccordionProps {
  /** SSR-friendly: if true, the content is rendered in the DOM on load but visually hidden. */
  ssrFriendly?: boolean;
  /** Optional custom data array to use instead of the generic accordion content. */
  customData?: AccordionItem[];
  /** If true, hides the default "Freelance Tax Guide" header. */
  hideHeader?: boolean;
}

const defaultAccordionData: AccordionItem[] = [
  {
    id: 'self-employed',
    title: 'How does self-employment tax work for 1099 contractors?',
    icon: <Briefcase size={18} />,
    content: `W2 employees split Social Security and Medicare taxes with their employer — each pays 7.65%. As a 1099 contractor, you pay both halves yourself, totaling 15.3%. This is calculated on 92.35% of your net earnings (the IRS allows a small adjustment). The good news: you can deduct half of your SE tax bill when calculating your adjusted gross income, which reduces your federal income tax. At $60,000 net income, that deduction saves you roughly $1,300–$1,600 depending on your bracket.`,
  },
  {
    id: 'llc-vs-sole',
    title: 'LLC vs. sole proprietor: which saves more in taxes?',
    icon: <BookOpen size={18} />,
    content: `As a sole proprietor, you pay 15.3% self-employment tax on every dollar of profit. An LLC taxed as an S-Corp lets you split your income into a salary and distributions. You pay SE tax only on the salary portion — distributions are exempt. For example, if your LLC earns $120,000 and you pay yourself an $80,000 salary, you only pay SE tax on $80,000 instead of the full $120,000, saving roughly $6,000. This strategy becomes worthwhile when net profit consistently exceeds $60,000–$70,000, because S-Corp administration adds roughly $1,500–$3,000 in annual costs.`,
  },
  {
    id: 'deductions',
    title: 'Which deductions do most freelancers miss?',
    icon: <Lightbulb size={18} />,
    content: `The most commonly missed deduction is the home office deduction — if you use a dedicated space for work, a proportional share of your rent, mortgage interest, and utilities is deductible. Beyond that: health insurance premiums are often 100% deductible for self-employed workers, software subscriptions and equipment are fully deductible as business expenses, and business-related travel including mileage is deductible at the IRS standard rate. Every dollar in deductions reduces your net profit, which directly lowers both your income tax and your self-employment tax.`,
  },
];

export default function TaxGuideAccordion({ ssrFriendly = true, customData, hideHeader }: TaxGuideAccordionProps) {
  const dataToRender = customData || defaultAccordionData;
  const [openId, setOpenId] = useState<string | null>(dataToRender[0]?.id ?? null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="space-y-3">
      {!hideHeader && (
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-white tracking-tight">Freelance Tax Guide</h2>
          <p className="text-zinc-500 mt-2">Expand each section to navigate your tax strategy.</p>
        </div>
      )}

      {dataToRender.map((item) => {
        const isOpen = openId === item.id;

        return (
          <div
            key={item.id}
            className="border border-zinc-800/50 rounded-xl overflow-hidden transition-colors duration-300 bg-zinc-900/30 hover:border-zinc-700/50"
          >
            <button
              onClick={() => toggle(item.id)}
              className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/50 rounded-t-xl"
              aria-expanded={isOpen}
            >
              <div className="flex items-center gap-3">
                {item.icon && (
                  <span className="text-indigo-400 shrink-0">
                    {item.icon}
                  </span>
                )}
                <h3 className="text-sm md:text-base font-semibold text-white tracking-tight leading-snug">
                  {item.title}
                </h3>
              </div>
              <span
                className={`text-zinc-500 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                aria-hidden="true"
              >
                <ChevronDown size={20} />
              </span>
            </button>

            {ssrFriendly ? (
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
                }`}
                aria-hidden={!isOpen}
              >
                <div className="px-6 pb-6 pt-2 text-zinc-400 leading-relaxed whitespace-pre-line text-sm border-t border-zinc-800/30">
                  {item.content}
                </div>
              </div>
            ) : (
              isOpen && (
                <div className="px-6 pb-6 pt-2 text-zinc-400 leading-relaxed whitespace-pre-line text-sm border-t border-zinc-800/30">
                  {item.content}
                </div>
              )
            )}
          </div>
        );
      })}
    </div>
  );
}
