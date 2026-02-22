import { testimonials } from "@/lib/data";
import ScrollIndicator from "@/components/ui/ScrollIndicator";

export default function Testimonials() {
    return (
        <div id="testimonials" className="h-[100dvh] md:h-auto w-full flex-shrink-0 md:min-h-[100dvh] snap-start snap-always flex flex-col relative">
            {/* Wave: Space → Testimonials */}
            <div className="wave-divider bg-trang flex-shrink-0">
                <svg
                    viewBox="0 0 1440 80"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,40 C360,0 720,80 1080,20 C1260,0 1380,60 1440,40 L1440,80 L0,80 Z"
                        fill="#FAFAFA"
                    />
                </svg>
            </div>

            {/* Testimonials Section */}
            <section className="flex-1 pt-16 pb-16 md:pt-12 md:pb-28 bg-trang relative overflow-hidden flex flex-col justify-center">
                <div className="absolute top-20 right-0 w-80 h-80 bg-do-co/3 rounded-full blur-3xl" />
                <div className="absolute bottom-10 left-0 w-60 h-60 bg-vang-kem/10 rounded-full blur-3xl" />

                {/* Header */}
                <div className="container mx-auto px-4 max-w-7xl relative z-10">
                    <div className="text-center mb-6 md:mb-10 section-reveal">
                        <p className="text-do-co font-semibold tracking-[0.2em] uppercase text-xs md:text-sm mb-1 md:mb-3">
                            Cảm nhận
                        </p>
                        <h2 className="font-serif text-2xl md:text-5xl text-nau-dam mb-2 md:mb-4">
                            Khách hàng <span className="text-do-co">nói gì</span>
                        </h2>
                        <div className="decorative-line-center" />
                    </div>
                </div>

                {/* ── Mobile carousel (hidden trên md+) ── */}
                <div className="md:hidden overflow-x-auto scrollbar-hide">
                    <div className="flex gap-4 snap-x snap-mandatory pt-6 pb-4 px-4 w-max">
                        {testimonials.map((t, idx) => (
                            <div
                                key={idx}
                                className="w-[82vw] max-w-[300px] flex-none bg-vang-nhat/40 rounded-2xl p-6 relative snap-center"
                            >
                                {/* Quote mark */}
                                <div className="absolute -top-4 left-8 w-10 h-10 bg-do-co rounded-full flex items-center justify-center shadow-lg">
                                    <svg className="w-5 h-5 text-trang" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                    </svg>
                                </div>
                                {/* Stars */}
                                <div className="flex gap-1 mb-4 mt-2">
                                    {Array.from({ length: t.rating }).map((_, i) => (
                                        <span key={i} className="text-vang-kem text-lg">⭐</span>
                                    ))}
                                </div>
                                {/* Quote */}
                                <p className="text-gray-600 leading-relaxed mb-6 italic">&ldquo;{t.quote}&rdquo;</p>
                                {/* Author */}
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-do-co to-vang-kem flex items-center justify-center text-trang font-bold text-lg">
                                        {t.name.charAt(0)}
                                    </div>
                                    <div>
                                        <p className="font-semibold text-nau-dam">{t.name}</p>
                                        <p className="text-gray-400 text-sm">{t.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── Desktop grid (hidden trên mobile) ── */}
                <div className="hidden md:block container mx-auto px-4 max-w-7xl relative z-10 mt-4">
                    <div className="grid grid-cols-3 gap-8">
                        {testimonials.map((t, idx) => (
                            <div
                                key={idx}
                                className={`reveal-up bg-vang-nhat/40 rounded-2xl p-8 relative ${idx === 0 ? "" : idx === 1 ? "reveal-delay-3" : "reveal-delay-5"}`}
                            >
                                {/* Quote mark */}
                                <div className="absolute -top-4 left-8 w-10 h-10 bg-do-co rounded-full flex items-center justify-center shadow-lg">
                                    <svg className="w-5 h-5 text-trang" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                    </svg>
                                </div>
                                {/* Stars */}
                                <div className="flex gap-1 mb-4 mt-2">
                                    {Array.from({ length: t.rating }).map((_, i) => (
                                        <span key={i} className="text-vang-kem text-lg">⭐</span>
                                    ))}
                                </div>
                                {/* Quote */}
                                <p className="text-gray-600 leading-relaxed mb-6 italic">&ldquo;{t.quote}&rdquo;</p>
                                {/* Author */}
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-do-co to-vang-kem flex items-center justify-center text-trang font-bold text-lg">
                                        {t.name.charAt(0)}
                                    </div>
                                    <div>
                                        <p className="font-semibold text-nau-dam">{t.name}</p>
                                        <p className="text-gray-400 text-sm">{t.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <ScrollIndicator href="#contact" theme="light" />
        </div>
    );
}
