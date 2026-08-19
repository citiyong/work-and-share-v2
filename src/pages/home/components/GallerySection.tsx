import Reveal from './Reveal';

const galleryImages = [
  { src: '/img/photo-001.png', label: 'FIG A / 메인 입구' },
  { src: '/img/photo-003.png', label: 'FIG B / 커뮤널 라운지' },
  { src: '/img/photo-005.png', label: 'FIG C / 컨퍼런스룸' },
  { src: '/img/photo-007.png', label: 'FIG D / 카페 바' },
  { src: '/img/photo-012.png', label: 'FIG E / 세미나홀' },
  { src: '/img/photo-013.png', label: 'FIG F / 포커스 스튜디오' },
  { src: '/img/photo-015.png', label: 'FIG G / 프라이빗 오피스' },
  { src: '/img/photo-022.png', label: 'FIG H / 이그제큐티브 라운지' },
];

const track1Images = [...galleryImages, ...galleryImages];
const track2Images = [...galleryImages.slice().reverse(), ...galleryImages.slice().reverse()];

export default function GallerySection() {
  return (
    <section className="border-b border-ink bg-paper py-20 overflow-hidden">
      <Reveal className="max-w-7xl mx-auto px-6 md:px-12 mb-12 border-b border-ink pb-6">
        <span className="font-mono text-xs uppercase tracking-widest text-accent-secondary font-bold block mb-3">
          03 / GALLERY &amp; ARCHIVE
        </span>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-ink tracking-tight">
          Visual Atmosphere
        </h2>
        <p className="font-mono text-xs uppercase text-ink/70 mt-2 tracking-widest font-bold">
          Architectural photography of Work &amp; Share Daehak-ro.
        </p>
      </Reveal>

      {/* Track 1 - scrolls left */}
      <div className="relative mb-6 edge-fade-x">
        <div className="flex animate-scroll-left" style={{ width: 'max-content' }}>
          {track1Images.map((img, i) => (
            <div
              key={`t1-${i}`}
              className="flex-shrink-0 w-72 sm:w-96 border border-ink bg-paper p-2 hover:bg-paperHover relative mr-6 group transition-all duration-300 cursor-pointer"
            >
              <div className="relative w-full h-48 sm:h-64 border border-ink overflow-hidden bg-ink">
                <img
                  alt={img.label}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  src={img.src}
                />
                <div className="absolute bottom-3 left-3 bg-paper px-3 py-1 border border-ink">
                  <span className="font-mono text-[10px] text-ink uppercase tracking-widest font-bold">
                    {img.label}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Track 2 - scrolls right */}
      <div className="relative edge-fade-x">
        <div className="flex animate-scroll-right" style={{ width: 'max-content' }}>
          {track2Images.map((img, i) => (
            <div
              key={`t2-${i}`}
              className="flex-shrink-0 w-72 sm:w-96 border border-ink bg-paper p-2 hover:bg-paperHover relative mr-6 group transition-all duration-300 cursor-pointer"
            >
              <div className="relative w-full h-48 sm:h-64 border border-ink overflow-hidden bg-ink">
                <img
                  alt={img.label}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  src={img.src}
                />
                <div className="absolute bottom-3 left-3 bg-paper px-3 py-1 border border-ink">
                  <span className="font-mono text-[10px] text-ink uppercase tracking-widest font-bold">
                    {img.label}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}