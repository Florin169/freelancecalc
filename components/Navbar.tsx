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
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-black text-xl text-slate-900 tracking-tighter">
          <div className="bg-indigo-600 p-1.5 rounded-lg text-white">
            <Calculator size={20} />
          </div>
          CALCULATE<span className="text-indigo-600">FREELANCE</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-600 uppercase tracking-widest">
          <Link href="/" className="hover:text-indigo-600 transition-colors">Calculator</Link>
          <Link href="/compare/1099-vs-w2" className="hover:text-indigo-600 transition-colors flex items-center gap-2">
            <Scale size={16} /> W2 vs 1099
          </Link>
          <div className="group relative cursor-pointer py-4">
            <span className="hover:text-indigo-600 flex items-center gap-1">
              Industries
            </span>
            <div className="absolute top-full right-0 mt-0 w-48 bg-white border border-slate-200 shadow-xl rounded-xl py-2 hidden group-hover:block animate-in fade-in slide-in-from-top-1">
              {industries.map((ind) => (
                <Link
                  key={ind.slug}
                  href={`/calculator/${ind.slug}`}
                  className="block px-4 py-2 hover:bg-slate-50 hover:text-indigo-600 transition-colors capitalize text-xs"
                >
                  {ind.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}