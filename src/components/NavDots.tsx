import { sectionNames } from '../data/portfolio';

interface NavDotsProps {
  activeSection: number;
}

export function NavDots({ activeSection }: NavDotsProps) {
  const handleClick = (index: number) => {
    const sections = document.querySelectorAll('[data-section]');
    if (sections[index]) {
      sections[index].scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-4 items-end">
      {sectionNames.map((name, i) => (
        <button
          key={i}
          onClick={() => handleClick(i)}
          className="group flex items-center gap-3"
        >
          <span className={`text-xs font-mono transition-all duration-300 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 ${activeSection === i ? 'text-cyan-400' : 'text-slate-500'}`}>
            {name}
          </span>
          <div className={`w-2.5 h-2.5 rounded-full border-2 transition-all duration-300 ${activeSection === i
              ? 'bg-cyan-400 border-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)] scale-125'
              : 'bg-transparent border-slate-600 group-hover:border-slate-400'
            }`} />
        </button>
      ))}
    </div>
  );
}
