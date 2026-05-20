import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Link from 'next/link'
import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CalculateFreelance | Professional US Freelance Tax Calculator",
  description: "The most accurate 1099 vs W2 and freelance tax calculator for 2026. Calculate SE tax, QBI, and federal brackets.",
  alternates: {
    languages: {
      'en-US': 'https://CalculateFreelance.com',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: 'dark' }} suppressHydrationWarning>
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="bg-zinc-950 border-t border-zinc-800 text-zinc-400 py-12 px-6 mt-20">
           <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
             
             {/* Brand */}
             <div>
               <p className="font-bold text-white mb-4 italic underline underline-offset-4 decoration-indigo-500">CalculateFreelance</p>
               <p className="text-sm">Helping independent professionals navigate the 2026 US Tax landscape with precision.</p>
             </div>

             {/* Calculators */}
             <div>
               <p className="font-bold text-white mb-4 uppercase text-xs tracking-widest">Calculators</p>
               <ul className="text-sm space-y-2">
                 <li><Link href="/1099-tax-calculator" className="hover:text-white transition-colors">1099 Tax Estimator</Link></li>
                 <li><Link href="/llc-tax-calculator" className="hover:text-white transition-colors">LLC Savings Calculator</Link></li>
                 <li><Link href="/compare/1099-vs-w2" className="hover:text-white transition-colors">W2 vs 1099 Comparison</Link></li>
               </ul>
             </div>

             {/* Tools */}
             <div>
               <p className="font-bold text-white mb-4 uppercase text-xs tracking-widest">Tools</p>
               <ul className="text-sm space-y-2">
                 <li><Link href="/" className="hover:text-white transition-colors">Main Tax Calculator</Link></li>
                 <li><Link href="/compare/1099-vs-w2" className="hover:text-white transition-colors">W2 vs 1099 Comparison</Link></li>
               </ul>
             </div>

             {/* Legal */}
             <div>
               <p className="font-bold text-white mb-4 uppercase text-xs tracking-widest">Legal</p>
               <p className="text-[10px] leading-relaxed">
                 Disclaimer: This tool is for estimation purposes only. Tax laws vary by individual circumstances. Please consult with a CPA or tax professional.
               </p>
             </div>
           </div>
           <GoogleAnalytics gaId="G-7SH9LL4VNG" />
        </footer>
      </body>
    </html>
  );
}
