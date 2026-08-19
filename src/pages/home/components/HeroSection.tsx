export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] border-b border-ink overflow-hidden bg-ink">
      {/* Photo Mosaic Background */}
      <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 md:grid-cols-4 gap-[3px] bg-ink">
        <div className="col-span-1 row-span-2 md:col-span-2 md:row-span-2 relative overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1530099486328-e021101a494a?w=1600&h=1600&fit=crop&crop=faces&auto=format&q=80"
            alt="젊은 한국 남녀가 밝은 공간에서 활기차고 열정적으로 토론하며 협업하는 모습"
            className="absolute inset-0 w-full h-full object-cover grayscale opacity-90"
          />
        </div>
        <div className="relative overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1758691737138-7b9b1884b1db?w=900&h=1000&fit=crop&auto=format&q=80"
            alt="노트북 화면을 보며 성과를 함께 기뻐하는 팀"
            className="absolute inset-0 w-full h-full object-cover grayscale opacity-90"
          />
        </div>
        <div className="relative overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1680459575585-390ed5cfcae0?w=900&h=1000&fit=crop&auto=format&q=80"
            alt="라운지에서 편하게 아이디어를 나누는 팀원들"
            className="absolute inset-0 w-full h-full object-cover grayscale opacity-90"
          />
        </div>
        <div className="col-span-2 relative overflow-hidden hidden md:block">
          <img
            src="https://images.unsplash.com/photo-1758873269811-4e62e346b4b7?w=1200&h=600&fit=crop&auto=format&q=80"
            alt="화이트보드 앞에서 함께 기획하는 팀"
            className="absolute inset-0 w-full h-full object-cover grayscale opacity-90"
          />
        </div>
      </div>

      {/* Scrim for legibility behind the text */}
      <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-ink via-ink/65 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-ink/50 to-transparent pointer-events-none" />

      {/* Text: directly on the mosaic, no boxed panel */}
      <div className="relative z-10 flex flex-col justify-end min-h-[90vh] px-6 md:px-16 pb-14 md:pb-20 pt-24">
        <div className="w-full max-w-2xl">
          {/* Caption Badge */}
          <div className="inline-flex items-center gap-3 mb-6 w-max border-b-2 border-paper/50 pb-3">
            <span className="font-mono text-[11px] uppercase tracking-widest text-ink bg-paper px-3 py-1.5 font-bold shrink-0">
              2026 GRAND OPEN
            </span>
            <span className="font-sans text-xs md:text-sm text-paper/90 font-bold">
              대학로 프리미엄 공유오피스
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl leading-[1.1] font-bold text-paper break-keep drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]">
            대학로의 <span className="text-accent-primary">창조적 에너지</span>가
            <br />
            당신의 비전과 만나는 곳
          </h1>

          {/* Body Text */}
          <p className="mt-6 max-w-lg font-sans text-sm md:text-base text-paper/85 leading-loose break-keep">
            영감이 일상이 되는 공간, Work &amp; Share.
            <br className="hidden sm:block" />
            프리미엄 워크스페이스를 가장 먼저 경험하세요.
          </p>
        </div>
      </div>
    </section>
  );
}
