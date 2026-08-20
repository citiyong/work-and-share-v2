import Reveal from './Reveal';

const embedQuery = encodeURIComponent('서울특별시 종로구 창경궁로 270');

const mapLinks = [
  { label: '네이버지도', href: `https://map.naver.com/p/search/${embedQuery}` },
];

const infoItems = [
  {
    code: '01 / ADDRESS',
    title: '주소',
    desc: '서울특별시 종로구 창경궁로 270',
  },
  {
    code: '02 / SUBWAY',
    title: '지하철',
    desc: '4호선 혜화역 2번 출구 도보 5분 / 1호선 종각역 버스 환승 10분',
  },
  {
    code: '03 / WALKING',
    title: '도보 안내',
    desc: '혜화역 2번 출구 → 창경궁로 방향 도보 5분',
  },
  {
    code: '04 / BUS',
    title: '버스 정류장',
    desc: '대학로 인근 정류장 하차 (간선/지선 다수 노선 운행)',
  },
  {
    code: '05 / PARKING',
    title: '주차 안내',
    desc: '건물 내 유료 주차 타워 이용 가능',
  },
  {
    code: '06 / HOURS',
    title: '운영 시간',
    desc: '24시간 연중무휴 (회원 스마트키 전용 출입 시스템)',
  },
];

export default function LocationSection() {
  return (
    <section id="location" className="border-b border-ink bg-paper py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <Reveal className="mb-14 border-b border-ink pb-8">
          <span className="font-mono text-xs uppercase tracking-widest text-accent-secondary font-bold block mb-3">
            05 / LOCATION &amp; ACCESS
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-ink tracking-tight">
            Daehak-ro Central
          </h2>
          <p className="font-sans text-ink/70 text-base mt-4 max-w-lg leading-relaxed">
            문화와 예술, 젊은 에너지가 공존하는 대학로 한복판.
          </p>
        </Reveal>

        <Reveal delay={100} className="grid grid-cols-12 gap-8 items-start">
          {/* Map (7 Columns) */}
          <div className="col-span-12 lg:col-span-7">
            <div className="relative border border-ink bg-paper">
              <iframe
                title="Work & Share 대학로 위치 지도"
                src="https://www.openstreetmap.org/export/embed.html?bbox=126.9971%2C37.5820%2C127.0051%2C37.5880&layer=mapnik&marker=37.5850%2C127.0011"
                className="w-full h-[340px] md:h-[400px] grayscale-[40%] contrast-[1.05]"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-paper border border-ink px-3 py-1.5 pointer-events-none">
                <span className="font-mono text-[11px] text-ink uppercase tracking-widest font-bold">
                  W&amp;S · 혜화역 도보 5분
                </span>
              </div>
            </div>

            {/* Map Link Buttons */}
            <div className="mt-4">
              <span className="font-mono text-xs uppercase tracking-widest text-ink/60 font-bold block mb-3">
                외부 지도 바로가기
              </span>
              <div className="flex gap-3">
                {mapLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs uppercase bg-paper text-ink px-6 py-3 border border-ink text-center hover:bg-ink hover:text-paper transition-colors font-bold tracking-widest"
                  >
                    {link.label} ↗
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Info Cards (5 Columns) */}
          <div className="col-span-12 lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {infoItems.map((item) => (
              <div
                key={item.code}
                className="bg-paper hover:bg-white p-5 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(0,0,0,0.12)] border border-ink/15 hover:border-ink/30 transition-all duration-300 cursor-default"
              >
                <span className="font-mono text-[10px] uppercase tracking-widest text-accent-primary font-bold block mb-1.5">
                  {item.code}
                </span>
                <h4 className="font-sans text-base font-bold text-ink mb-1.5">
                  {item.title}
                </h4>
                <p className="font-sans text-xs text-ink/75 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
