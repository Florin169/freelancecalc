// 2026 Federal Income Tax Brackets (Single Filer)
// Source: IRS Rev. Proc. 2025-32
const FEDERAL_BRACKETS_2026 = [
  { min: 0,       max: 11925,  rate: 0.10 },
  { min: 11925,   max: 48475,  rate: 0.12 },
  { min: 48475,   max: 103350, rate: 0.22 },
  { min: 103350,  max: 197300, rate: 0.24 },
  { min: 197300,  max: 250525, rate: 0.32 },
  { min: 250525,  max: 626350, rate: 0.35 },
  { min: 626350,  max: Infinity, rate: 0.37 },
];

// 2026 Constants
const STANDARD_DEDUCTION_2026 = 16100;
const SS_WAGE_BASE_2026 = 184500;
const ADDITIONAL_MEDICARE_THRESHOLD = 200000;

function calcFederalTax(taxableIncome: number): number {
  let tax = 0;
  let remaining = Math.max(0, taxableIncome);

  for (const bracket of FEDERAL_BRACKETS_2026) {
    if (remaining <= 0) break;
    const taxableInBracket = Math.min(remaining, bracket.max - bracket.min);
    tax += taxableInBracket * bracket.rate;
    remaining -= taxableInBracket;
  }

  return tax;
}

function calcSETax(netProfit: number): number {
  if (netProfit <= 400) return 0;

  const taxableSE = netProfit * 0.9235;

  // Social Security: 12.4% up to SS wage base
  const ssTaxable = Math.min(taxableSE, SS_WAGE_BASE_2026);
  const ssTax = ssTaxable * 0.124;

  // Medicare: 2.9% on all SE income, no cap
  const medicareTax = taxableSE * 0.029;

  // Additional Medicare Tax: 0.9% on net profit above $200,000
  // Note: this is on the employee side only (not deductible)
  const additionalMedicare = netProfit > ADDITIONAL_MEDICARE_THRESHOLD
    ? (netProfit - ADDITIONAL_MEDICARE_THRESHOLD) * 0.009
    : 0;

  return ssTax + medicareTax + additionalMedicare;
}

export function calculateFreelanceTax(gross: number, expenses: number) {
  const netProfit = Math.max(0, gross - expenses);

  // SE Tax with correct SS cap and Additional Medicare Tax
  const seTax = calcSETax(netProfit);

  // AGI: net profit minus half of SE tax (excluding Additional Medicare Tax portion)
  // Only the standard SE tax (not the 0.9% surtax) is deductible
  const standardSETax = netProfit > 400
    ? Math.min(netProfit * 0.9235, SS_WAGE_BASE_2026) * 0.124 +
      netProfit * 0.9235 * 0.029
    : 0;
  const AGI = netProfit - (standardSETax / 2);

  // Taxable income after standard deduction
  const afterDeduction = Math.max(0, AGI - STANDARD_DEDUCTION_2026);

  // QBI deduction (20% of qualified business income, simplified)
  const finalTaxable = afterDeduction * 0.80;

  // Federal income tax using full bracket table
  const fedTax = calcFederalTax(finalTaxable);

  const totalTax = seTax + fedTax;

  return {
    netTakeHome: netProfit - totalTax,
    totalTax,
    seTax,
    fedTax,
    effectiveRate: gross > 0 ? (totalTax / gross) * 100 : 0,
    monthly: (netProfit - totalTax) / 12,
  };
}

export function calculateSCorpTax(
  gross: number,
  expenses: number,
  salary: number
) {
  const netProfit = Math.max(0, gross - expenses);
  const reasonableSalary = Math.min(netProfit, salary);
  const distributions = netProfit - reasonableSalary;

  // SE tax only on salary portion with correct SS cap
  const seTax = calcSETax(reasonableSalary);

  // Deductible SE tax (half of standard portion, excluding 0.9% surtax)
  const standardSETaxOnSalary = reasonableSalary > 400
    ? Math.min(reasonableSalary * 0.9235, SS_WAGE_BASE_2026) * 0.124 +
      reasonableSalary * 0.9235 * 0.029
    : 0;
  const AGI = netProfit - (standardSETaxOnSalary / 2);

  // Taxable income after standard deduction
  const afterDeduction = Math.max(0, AGI - STANDARD_DEDUCTION_2026);

  // QBI deduction (20%)
  const finalTaxable = afterDeduction * 0.80;

  // Federal income tax on full net profit (salary + distributions)
  const fedTax = calcFederalTax(finalTaxable);

  const totalTax = seTax + fedTax;

  return {
    netTakeHome: netProfit - totalTax,
    totalTax,
    seTax,
    fedTax,
    effectiveRate: gross > 0 ? (totalTax / gross) * 100 : 0,
    monthly: (netProfit - totalTax) / 12,
    distributions,
    salary: reasonableSalary,
  };
}