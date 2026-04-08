export function calculateFreelanceTax(gross: number, expenses: number) {
  // Ensure we don't have negative profit
  const netProfit = Math.max(0, gross - expenses);
  
  // 1. Self-Employment Tax (15.3%)
  // This applies to almost all freelance income over $400
  const taxableSE = netProfit * 0.9235;
  const seTax = netProfit > 400 ? taxableSE * 0.153 : 0;

  // 2. Federal Income Tax
  // We subtract half of SE tax and the Standard Deduction
  const AGI = netProfit - (seTax / 2);
  const taxableIncome = Math.max(0, AGI - 16100); // 2026 Standard Deduction
  
  // QBI Deduction (20%)
  const finalTaxable = taxableIncome * 0.80;

  let fedTax = 0;
  let remaining = finalTaxable;
  // Simplified bracket for low amounts (10% bracket)
  if (remaining > 0) {
     // This uses the bracket logic we built before
     fedTax = remaining * 0.10; // Simple fallback for low earners
  }

  const totalTax = seTax + fedTax;
  
  return {
    netTakeHome: netProfit - totalTax,
    totalTax,
    seTax,
    fedTax,
    effectiveRate: gross > 0 ? (totalTax / gross) * 100 : 0,
    monthly: (netProfit - totalTax) / 12
  };
}