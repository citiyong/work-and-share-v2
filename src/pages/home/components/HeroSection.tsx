export default function HeroSection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="grid grid-cols-12 min-h-[90vh] border-b border-ink bg-paper">
      {/* Text Panel: 7 Columns */}
      <div className="col-span-12 md:col-span-7 flex flex-col justify-center px-6 md:px-16 py-20 md:py-24 border-r-0 md:border-r border-ink bg-paper relative">
        {/* Caption Badge */}
        <div className="inline-flex items-center gap-3 mb-8 w-max border-b-2 border-ink pb-3">
          <span className="font-mono text-[11px] uppercase tracking-widest text-paper bg-ink px-3 py-1.5 font-bold shrink-0">
            2026 GRAND OPEN
          </span>
          <span className="font-sans text-xs md:text-sm text-accent-secondary font-bold">
            대학로 프리미엄 공유오피스
          </span>
        </div>

        {/* Heading (Korean → sans, per project convention) */}
        <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08] font-bold text-ink break-keep">
          대학로의 <span className="text-accent-primary">창조적 에너지</span>가
          <br />
          당신의 비전과 만나는 곳
        </h1>

        {/* Body Text */}
        <p className="mt-8 max-w-lg font-sans text-base md:text-lg text-ink/80 leading-loose break-keep">
          영감이 일상이 되는 공간, Work &amp; Share.
          <br className="hidden sm:block" />
          프리미엄 워크스페이스를 가장 먼저 경험하세요.
        </p>

        {/* CTA Button */}
        <div className="mt-12">
          <button
            onClick={() => scrollTo('cta')}
            className="inline-block bg-ink text-paper font-mono uppercase text-xs md:text-sm tracking-widest px-8 md:px-10 py-5 hover:bg-accent-primary transition-colors border-2 border-ink hover:border-accent-primary font-bold"
          >
            얼리버드 사전 예약
          </button>
        </div>
      </div>

      {/* Image Panel: 5 Columns (Full-bleed) */}
      <div className="col-span-12 md:col-span-5 h-[50vh] md:h-auto relative overflow-hidden bg-ink">
        <img
          src="https://images.unsplash.com/photo-1530099486328-e021101a494a?w=1600&h=1400&fit=crop&crop=faces&auto=format&q=80"
          alt="젊은 한국 남녀가 밝은 공간에서 활기차고 열정적으로 토론하며 협업하는 모습"
          className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-85 hover:mix-blend-normal hover:opacity-100 transition-all duration-700 ease-in-out cursor-pointer"
        />
        {/* Editorial Footnote Caption */}
        <div className="absolute bottom-6 right-6 bg-paper px-4 py-2 border border-ink z-10">
          <span className="font-mono text-xs text-ink uppercase tracking-widest font-bold">
            Fig 1. 대학로 워크스페이스
          </span>
        </div>
      </div>
    </section>
  );
}