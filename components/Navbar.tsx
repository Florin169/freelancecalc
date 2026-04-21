import Link from 'next/link';
import { Calculator, Scale, Briefcase } from 'lucide-react';

export default function Navbar() {
  const industries = [
    { name: 'Graphic Designer', slug: 'graphic-designer' },
    { name: 'Video Editor', slug: 'video-editor' },
    { name: 'Web Developer', slug: 'web-developer' },
    { name: 'Copywriter', slug: 'copywriter' }
  ];

  return (
    /* Fixed: Changed bg-white to bg-zinc-950/80 and border-slate-200 to border-zinc-800 */
    <nav className="bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* Fixed: Logo text changed from slate-900 to white */}
        <Link href="/" className="flex items-center gap-2 font-black text-xl text-white tracking-tighter">
          <div className="bg-indigo-600 p-1.5 rounded-lg text-white">
            <Calculator size={20} />
          </div>
          CALCULATE<span className="text-indigo-500">FREELANCE</span>
        </Link>

        {/* Fixed: Links changed from slate-600 to zinc-400 with white hover states */}
        <div className="hidden md:flex items-center gap-8 text-sm font-bold text-zinc-400 uppercase tracking-widest">
          <Link href="/" className="hover:text-white transition-colors">
            Calculator
          </Link>
          <Link href="/compare/1099-vs-w2" className="hover:text-white transition-colors flex items-center gap-2">
            <Scale size={16} /> W2 vs 1099
          </Link>
          
          <div className="group relative cursor-pointer py-4">
            <span className="hover:text-white flex items-center gap-1 transition-colors">
              Industries
            </span>
            
            {/* Fixed: Dropdown background changed to zinc-900 and border to zinc-800 */}
            <div className="absolute top-full right-0 mt-0 w-48 bg-zinc-900 border border-zinc-800 shadow-2xl rounded-xl py-2 hidden group-hover:block animate-in fade-in slide-in-from-top-1">
              {industries.map((ind) => (
                <Link
                  key={ind.slug}
                  href={`/calculator/${ind.slug}`}
                  /* Fixed: Item text to zinc-300 and hover to zinc-800 background */
                  className="block px-4 py-2 text-zinc-300 hover:bg-zinc-800 hover:text-indigo-400 transition-colors"
                >
                  {ind.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: If you add a mobile menu later, ensure it uses bg-zinc-900 */}
      </div>
    </nav>
  );
}