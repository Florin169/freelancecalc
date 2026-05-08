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
    title: 'Self-Employed Tax Estimator: Navigating 1099 Obligations',
    icon: <Briefcase size={18} />,
    content: `
      Understanding your "Take-Home Pay" starts with demystifying the self employed tax calculator logic.
      Unlike W2 employees, freelancers are responsible for both the employer and employee portions of FICA,
      totaling a 15.3% Self-Employment (SE) tax. This is calculated on 92.35% of your net earnings.
      Using a dedicated 1099 tax estimator allows you to set aside the correct amount for quarterly estimated
      payments, ensuring you avoid underpayment penalties when filing with the IRS.
    `,
  },
  {
    id: 'llc-vs-sole',
    title: 'LLC vs. Sole Proprietor: Which saves you more?',
    icon: <BookOpen size={18} />,
    content: `
      Choosing between business structures is more than just a legal decision—it is a tax strategy.

      Sole Proprietorship: The default for most freelancers. It's simple but subjects all business profits
      to the 15.3% SE tax.

      LLC with S-Corp Election: Our LLC tax calculator highlights the primary benefit of the S-Corp:
      "Salary Splitting." By paying yourself a "Reasonable Salary," you only pay SE tax on that portion.
      The remaining profit (distributions) is exempt from the 15.3% tax, potentially saving you thousands annually.
    `,
  },
  {
    id: 'deductions',
    title: 'Maximizing Your Freelance Deductions',
    icon: <Lightbulb size={18} />,
    content: `
      To lower your taxable income, you must track all "ordinary and necessary" business expenses.
      Common deductions for 1099 contractors include:

      Home Office: A portion of your rent/mortgage and utilities.
      Software & Tools: Subscriptions like Adobe Creative Cloud, GitHub, or SEO utilities.
      Health Insurance: Premiums paid for yourself and your family are often 100% deductible.
      Marketing: Costs for your website, ads, and professional branding.
    `,
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
