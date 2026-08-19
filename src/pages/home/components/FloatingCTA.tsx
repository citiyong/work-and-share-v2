import { useEffect, useState } from 'react';

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const ctaEl = document.getElementById('cta');
    if (!ctaEl) return;

    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', onScroll, { passive: true });

    const observer = new IntersectionObserver(
      ([entry]) => setVisible((v) => (entry.isIntersecting ? false : window.scrollY > 500 || v)),
      { threshold: 0.1 }
    );
    observer.observe(ctaEl);

    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToCta = () => {
    document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' });
  };

  if (dismissed || !visible) return null;

  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-ink text-paper border-t border-paper/30 p-4">
      <div className="flex items-center justify-between gap-3">
        <div className="min-w-0 font-sans">
          <p className="text-paper text-xs font-bold truncate">
            첫 달 50% 할인
          </p>
          <p className="text-paper/70 text-[10px] truncate font-mono uppercase tracking-widest">
            얼리버드 사전 예약 중
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={scrollToCta}
            className="font-mono text-xs uppercase bg-paper text-ink px-4 py-2 border border-paper hover:bg-accent-primary hover:text-paper transition-colors font-bold tracking-widest shrink-0"
          >
            사전 예약
          </button>
          <button
            onClick={() => setDismissed(false || true)}
            aria-label="Close"
            className="font-mono text-xs text-paper/70 hover:text-paper p-1"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
}
