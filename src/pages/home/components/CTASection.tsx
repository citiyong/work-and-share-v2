import { useState } from 'react';
import Reveal from './Reveal';

export default function CTASection() {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const honeypot = (formData.get('phone_alt') as string || '').trim();
    if (honeypot) {
      setStatus('success');
      form.reset();
      return;
    }

    try {
      const res = await fetch('https://readdy.ai/api/form/d9t564p4ne17ei0sdqj0', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      });
      const text = await res.text();
      let parsed: any;
      try { parsed = JSON.parse(text); } catch { parsed = null; }
      const serverMsg = parsed?.meta?.message || parsed?.message || parsed?.meta?.detail || text;
      const isSpam = typeof serverMsg === 'string' && serverMsg.includes('spam');

      if (res.ok && parsed?.code === 'OK' && !isSpam) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
        setErrorMsg((typeof serverMsg === 'string' ? serverMsg : '') || '오류가 발생했습니다. 다시 시도해주세요.');
      }
    } catch {
      setStatus('error');
      setErrorMsg('네트워크 오류가 발생했습니다. 다시 시도해주세요.');
    }
  };

  if (status === 'success') {
    return (
      <section id="cta" className="py-24 px-6 md:px-12 bg-accent-primary text-paper border-b border-ink">
        <div className="max-w-3xl mx-auto border border-paper p-12 text-center bg-accent-primary">
          <span className="font-mono text-xs uppercase tracking-widest border border-paper px-4 py-1 inline-block mb-6 font-bold">
            신청 접수 완료
          </span>
          <h2 className="font-serif text-4xl md:text-6xl font-bold mb-6">
            Claim Confirmed.
          </h2>
          <p className="font-sans text-base max-w-lg mx-auto leading-relaxed mb-8 opacity-90">
            투어 신청이 접수되었습니다. 배정된 커뮤니티 매니저가 24시간 이내 연락하여 사전 투어를 조율해 드립니다.
          </p>
          <button
            onClick={() => setStatus('idle')}
            className="font-mono text-xs uppercase bg-paper text-accent-primary font-bold px-8 py-4 border border-paper hover:bg-ink hover:text-paper hover:border-ink transition-colors tracking-widest"
          >
            추가로 신청하기
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="cta" className="py-24 px-6 md:px-12 bg-accent-primary text-paper grid grid-cols-12 gap-12 border-b border-ink">
      {/* Left Column (5 Cols) */}
      <div className="col-span-12 md:col-span-5 flex flex-col justify-between">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest bg-paper text-accent-primary px-3 py-1.5 inline-block mb-8 font-bold">
            🔥 첫 달 10% 할인 · 사전예약 한정
          </span>
          <h2 className="font-serif text-5xl md:text-7xl font-bold leading-[0.95] mb-8">
            Claim Your <br /> Territory.
          </h2>
          <p className="font-sans text-base max-w-md leading-loose opacity-90 break-keep">
            워크앤쉐어 커뮤니티의 일원이 되기 위한 첫 걸음입니다.
            아래 정보를 남겨주시면 커뮤니티 매니저가 24시간 이내에 프라이빗 투어를 배정해 드립니다.
          </p>
        </div>
        <div className="mt-12 flex flex-col gap-3">
          <a
            href="tel:02-765-2702"
            className="font-mono text-xs uppercase tracking-widest border border-paper/50 hover:border-paper hover:bg-paper hover:text-accent-primary transition-colors px-6 py-3 w-max font-bold"
          >
            전화 문의 · 02-765-2702
          </a>
          <span className="font-mono text-xs uppercase tracking-widest opacity-60">
            * Strictly confidential. Early-bird discount applied.
          </span>
        </div>
      </div>

      {/* Right Column Form (7 Cols) */}
      <div className="col-span-12 md:col-span-7 md:pl-12 md:border-l md:border-paper/30">
        <form onSubmit={handleSubmit} className="flex flex-col gap-10 font-mono text-sm">
          {/* Honeypot */}
          <input type="text" name="phone_alt" className="hp-field" tabIndex={-1} autoComplete="off" />

          <div className="flex flex-col gap-3">
            <label htmlFor="name" className="uppercase tracking-widest text-paper/70 font-bold text-xs">
              01 / APPLICANT NAME *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="bg-transparent border-b-2 border-paper/50 text-paper py-3 focus:outline-none focus:border-paper transition-colors text-lg rounded-none"
              placeholder="John Doe / 성함"
              required
            />
          </div>

          <div className="flex flex-col gap-3">
            <label htmlFor="phone" className="uppercase tracking-widest text-paper/70 font-bold text-xs">
              02 / CONTACT PHONE *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="bg-transparent border-b-2 border-paper/50 text-paper py-3 focus:outline-none focus:border-paper transition-colors text-lg rounded-none"
              placeholder="010-0000-0000 / 연락처"
              required
            />
          </div>

          <div className="flex flex-col gap-3">
            <label htmlFor="interest" className="uppercase tracking-widest text-paper/70 font-bold text-xs">
              03 / INTERESTED SPACE *
            </label>
            <select
              id="interest"
              name="space_type"
              className="bg-transparent border-b-2 border-paper/50 text-paper py-3 focus:outline-none focus:border-paper transition-colors appearance-none cursor-pointer text-lg rounded-none"
              defaultValue=""
              required
            >
              <option value="" disabled className="bg-ink text-paper">관심 공간 선택 *</option>
              <option value="working-room" className="bg-ink text-paper">워킹룸</option>
              <option value="solo" className="bg-ink text-paper">1인실</option>
              <option value="solo-plus" className="bg-ink text-paper">1.5인실</option>
              <option value="duo" className="bg-ink text-paper">2인실</option>
              <option value="trio" className="bg-ink text-paper">3인실</option>
              <option value="glass-booth" className="bg-ink text-paper">2층 유리부스</option>
              <option value="open-seat" className="bg-ink text-paper">2층 자유석</option>
              <option value="meeting-room" className="bg-ink text-paper">10-12인 미팅룸</option>
              <option value="lounge" className="bg-ink text-paper">다용도 라운지</option>
            </select>
          </div>

          {status === 'error' && (
            <p className="font-mono text-xs text-paper bg-ink p-3 border border-paper">
              ⚠️ {errorMsg}
            </p>
          )}

          <button
            type="submit"
            className="mt-6 bg-paper text-accent-primary font-bold uppercase tracking-widest px-10 py-5 hover:bg-ink hover:text-paper hover:border-ink transition-all border-2 border-paper w-max text-sm"
          >
            신청하기 →
          </button>
        </form>
      </div>
    </section>
  );
}