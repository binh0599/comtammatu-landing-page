import { testimonials, type Testimonial } from "@/lib/data";

const QUOTE_ICON_PATH = "M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z";
const STAR_PATH = "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z";

const REVEAL_DELAYS = ["", "reveal-delay-3", "reveal-delay-5"];

function StarRating({ rating, starClass }: { rating: number; starClass: string }) {
    return (
        <div className="flex gap-1" role="img" aria-label={`Đánh giá ${rating} trên 5 sao`}>
            {Array.from({ length: rating }).map((_, i) => (
                <svg key={i} aria-hidden="true" className={`${starClass} text-[#C28E3A] drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]`} viewBox="0 0 20 20" fill="currentColor">
                    <path d={STAR_PATH} />
                </svg>
            ))}
        </div>
    );
}

function TestimonialCard({ testimonial, className = "" }: { testimonial: Testimonial; className?: string }) {
    return (
        <div className={`bg-vang-nhat/40 border border-do-co/10 relative shadow-sm flex flex-col ${className}`}>
            {/* Quote mark */}
            <div className="absolute -top-4 md:-top-5 left-6 md:left-8 w-10 h-10 md:w-12 md:h-12 bg-do-co rounded-full flex items-center justify-center shadow-md">
                <svg aria-hidden="true" className="w-5 h-5 md:w-6 md:h-6 text-trang" fill="currentColor" viewBox="0 0 24 24">
                    <path d={QUOTE_ICON_PATH} />
                </svg>
            </div>

            {/* Stars */}
            <div className="mb-3 md:mb-4 mt-2">
                <StarRating rating={testimonial.rating} starClass="w-4 h-4 md:w-[18px] md:h-[18px]" />
            </div>

            {/* Quote */}
            <p className="text-[14px] md:text-sm lg:text-[15px] text-gray-700 leading-relaxed mb-4 md:mb-6 italic flex-1">
                &ldquo;{testimonial.quote}&rdquo;
            </p>

            {/* Author */}
            <div className="flex items-center gap-3 md:gap-4 mt-auto pt-4 border-t border-do-co/10">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-do-co to-do-nhat flex items-center justify-center text-trang font-bold text-base md:text-lg shadow-inner shrink-0">
                    {testimonial.name.charAt(0)}
                </div>
                <div className="min-w-0 flex-1">
                    <p className="font-semibold text-[15px] md:text-base text-nau-dam leading-tight truncate">{testimonial.name}</p>
                    <p className="text-gray-600 text-[12px] lg:text-sm truncate mt-0.5">{testimonial.role}</p>
                </div>
            </div>
        </div>
    );
}

export default function Testimonials() {
    return (
        <section id="cam-nhan" className="h-[100dvh] w-full shrink-0 snap-start snap-always flex flex-col justify-center items-center relative bg-trang overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-10 right-[-5%] w-64 h-64 md:w-96 md:h-96 bg-do-co/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
            <div className="absolute bottom-10 left-[-5%] w-48 h-48 md:w-80 md:h-80 bg-vang-kem/20 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

            <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10 flex flex-col justify-center">

                {/* Header */}
                <div className="text-center shrink-0 mb-8 md:mb-12 section-reveal">
                    <p className="text-do-co font-semibold tracking-[0.2em] uppercase text-[10px] md:text-xs lg:text-sm mb-1.5 md:mb-2 border-b border-do-co/20 inline-block pb-0.5">
                        Cảm nhận
                    </p>
                    <h2 className="font-serif text-[28px] md:text-4xl lg:text-5xl text-nau-dam drop-shadow-sm mt-1 [text-wrap:balance]">
                        Khách hàng <span className="text-do-co italic font-light">nói gì</span>
                    </h2>
                </div>

                {/* Content */}
                <div className="w-full">
                    {/* Mobile carousel */}
                    <div className="md:hidden w-full overflow-x-auto snap-x snap-mandatory px-4 -mx-4 pb-4 pt-4 relative">
                        <div className="flex items-center gap-4 w-max mx-auto px-4">
                            {testimonials.map((t, idx) => (
                                <TestimonialCard
                                    key={idx}
                                    testimonial={t}
                                    className="w-[82vw] max-w-[320px] shrink-0 rounded-2xl p-6 snap-center h-auto"
                                />
                            ))}
                        </div>
                    </div>

                    {/* Desktop grid */}
                    <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative z-10 w-full lg:max-w-5xl mx-auto">
                        {testimonials.map((t, idx) => (
                            <TestimonialCard
                                key={idx}
                                testimonial={t}
                                className={`reveal-up rounded-3xl p-6 lg:p-8 transition-shadow duration-300 ${REVEAL_DELAYS[idx] ?? ""}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
