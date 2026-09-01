const items = ["IT Consultancy", "Software Integration", "Data Analytics", "Process Optimization"];

export default function Marquee() {
  const row = [...items, ...items, ...items];
  return (
    <div data-testid="editorial-marquee" className="relative border-y border-[#1F2D47] py-8 overflow-hidden bg-[#0A0E17]">
      <div className="animate-marquee flex w-max items-center">
        {[0, 1].map((half) => (
          <div key={half} className="flex w-max items-center" aria-hidden={half === 1}>
            {row.map((item, i) => (
              <span key={`${half}-${i}`} className="flex items-center">
                <span className="font-serif text-5xl sm:text-6xl lg:text-7xl whitespace-nowrap px-8 text-outline-gold hover:text-[#E2C08D] hover:[-webkit-text-stroke:0px] transition-all duration-500 cursor-default italic">
                  {item}
                </span>
                <span className="w-2.5 h-2.5 rotate-45 bg-[#E2C08D]/60 shrink-0" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
