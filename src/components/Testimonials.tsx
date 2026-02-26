import { testimonials } from "@/lib/data";

export default function Testimonials() {
    return (
        <section id="cam-nhan" className="h-[100dvh] w-full shrink-0 snap-start snap-always flex flex-col justify-center items-center relative bg-trang overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-10 right-[-5%] w-64 h-64 md:w-96 md:h-96 bg-do-co/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-10 left-[-5%] w-48 h-48 md:w-80 md:h-80 bg-vang-kem/20 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10 flex flex-col justify-center">

                {/* Header */}
                <div className="text-center shrink-0 mb-8 md:mb-12 section-reveal">
                    <p className="text-do-co font-semibold tracking-[0.2em] uppercase text-[10px] md:text-xs lg:text-sm mb-1.5 md:mb-2 border-b border-do-co/20 inline-block pb-0.5">
                        Cảm nhận
                    </p>
                    <h2 className="font-serif text-[28px] md:text-4xl lg:text-5xl text-nau-dam drop-shadow-sm mt-1">
                        Khách hàng <span className="text-do-co italic font-light">nói gì</span>
                    </h2>
                </div>

                {/* Content flex wrapper */}
                <div className="w-full">
                    {/* ── Mobile carousel (hidden trên md+) ── */}
                    <div className="md:hidden w-full overflow-x-auto scrollbar-hide snap-x snap-mandatory px-4 -mx-4 pb-4 pt-4 relative">
                        {/* Wrapper for smooth scrolling & snap */}
                        <div className="flex items-center gap-4 w-max mx-auto px-4">
                            {testimonials.map((t, idx) => (
                                <div
                                    key={idx}
                                    className="w-[82vw] max-w-[320px] shrink-0 bg-vang-nhat/40 border border-do-co/10 rounded-2xl p-6 relative snap-center shadow-sm flex flex-col h-auto"
                                >
                                    {/* Quote mark */}
                                    <div className="absolute -top-4 left-6 w-10 h-10 bg-do-co rounded-full flex items-center justify-center shadow-md">
                                        <svg className="w-5 h-5 text-trang" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                        </svg>
                                    </div>
                                    {/* Stars */}
                                    <div className="flex gap-1 mb-3 mt-2">
                                        {Array.from({ length: t.rating }).map((_, i) => (
                                            <span key={i} className="text-vang-kem text-[15px] drop-shadow-sm">⭐</span>
                                        ))}
                                    </div>
                                    {/* Quote */}
                                    <p className="text-[14px] text-gray-700 leading-relaxed mb-4 italic flex-1">&ldquo;{t.quote}&rdquo;</p>
                                    {/* Author */}
                                    <div className="flex items-center gap-3 mt-auto pt-4 border-t border-do-co/10">
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-do-co to-[#A22] flex items-center justify-center text-trang font-bold text-base shadow-inner shrink-0">
                                            {t.name.charAt(0)}
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <p className="font-semibold text-[15px] text-nau-dam leading-tight">{t.name}</p>
                                            <p className="text-gray-500 text-[12px] mt-0.5">{t.role}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ── Desktop grid (hidden trên mobile) ── */}
                    <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative z-10 w-full lg:max-w-5xl mx-auto">
                        {testimonials.map((t, idx) => (
                            <div
                                key={idx}
                                className={`reveal-up bg-vang-nhat/40 border border-do-co/10 rounded-3xl p-6 lg:p-8 relative shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col ${idx === 0 ? "" : idx === 1 ? "reveal-delay-3" : "reveal-delay-5"}`}
                            >
                                {/* Quote mark */}
                                <div className="absolute -top-5 left-8 w-12 h-12 bg-do-co rounded-full flex items-center justify-center shadow-md">
                                    <svg className="w-6 h-6 text-trang" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                    </svg>
                                </div>
                                {/* Stars */}
                                <div className="flex gap-1 mb-4 mt-2">
                                    {Array.from({ length: t.rating }).map((_, i) => (
                                        <span key={i} className="text-vang-kem text-[16px] drop-shadow-sm">⭐</span>
                                    ))}
                                </div>
                                {/* Quote */}
                                <p className="text-sm lg:text-[15px] text-gray-700 leading-relaxed mb-6 italic flex-1">&ldquo;{t.quote}&rdquo;</p>
                                {/* Author */}
                                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-do-co/10">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-do-co to-[#A22] flex items-center justify-center text-trang font-bold text-lg shadow-inner shrink-0">
                                        {t.name.charAt(0)}
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <p className="font-semibold text-nau-dam truncate">{t.name}</p>
                                        <p className="text-gray-500 text-[12px] lg:text-sm truncate mt-0.5">{t.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
