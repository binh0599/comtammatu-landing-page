import Image from "next/image";
import ScrollIndicator from "@/components/ui/ScrollIndicator";
import HeroButtons from "@/components/HeroButtons";

/** Indochine-style stepped-lattice corner ornaments — one per corner. */
const CornerTL = () => (
    <svg aria-hidden="true" className="absolute w-8 h-8 md:w-16 md:h-16 text-vang-kem pointer-events-none -top-[1.5px] -left-[1.5px]" viewBox="0 0 54 54" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M54,0 H0 V54" />
        <path d="M42,0 V12 H12 V42 H0" />
        <path d="M0,30 H24 V0" />
        <path d="M30,0 V24 H0" />
    </svg>
);

const CornerTR = () => (
    <svg aria-hidden="true" className="absolute w-8 h-8 md:w-16 md:h-16 text-vang-kem pointer-events-none -top-[1.5px] -right-[1.5px]" viewBox="0 0 54 54" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M0,0 H54 V54" />
        <path d="M12,0 V12 H42 V42 H54" />
        <path d="M54,30 H30 V0" />
        <path d="M24,0 V24 H54" />
    </svg>
);

const CornerBL = () => (
    <svg aria-hidden="true" className="absolute w-8 h-8 md:w-16 md:h-16 text-vang-kem pointer-events-none -bottom-[1.5px] -left-[1.5px]" viewBox="0 0 54 54" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M54,54 H0 V0" />
        <path d="M42,54 V42 H12 V12 H0" />
        <path d="M0,24 H24 V54" />
        <path d="M30,54 V30 H0" />
    </svg>
);

const CornerBR = () => (
    <svg aria-hidden="true" className="absolute w-8 h-8 md:w-16 md:h-16 text-vang-kem pointer-events-none -bottom-[1.5px] -right-[1.5px]" viewBox="0 0 54 54" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M0,54 H54 V0" />
        <path d="M12,54 V42 H42 V12 H54" />
        <path d="M54,24 H30 V54" />
        <path d="M24,54 V30 H54" />
    </svg>
);

export default function Hero() {
    return (
        <section
            id="trang-chu"
            className="relative h-[100dvh] w-full flex-shrink-0 snap-start snap-always flex items-center justify-center overflow-hidden bg-den"
        >
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/space-1.webp"
                    alt="Không gian quán Cơm tấm Má Tư"
                    fill
                    sizes="100vw"
                    className="object-cover scale-105"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
            </div>

            {/* Decorative floating elements */}
            <div className="absolute top-20 left-10 w-20 h-20 border border-vang-kem/20 rounded-full animate-float opacity-30 pointer-events-none" aria-hidden="true" />
            <div className="absolute bottom-32 right-16 w-14 h-14 border border-vang-kem/15 rounded-full animate-float delay-500 opacity-20 pointer-events-none" aria-hidden="true" />
            <div className="absolute top-1/3 right-10 w-2 h-2 bg-vang-kem/30 rounded-full animate-float delay-300" aria-hidden="true" />

            {/* Content */}
            <div className="relative z-10 w-full max-w-5xl mx-auto flex items-center justify-center px-4 md:px-6 h-full">

                {/* Ornate Frame */}
                <div className="relative w-full max-h-[85vh] flex flex-col items-center justify-center py-8 md:py-12 px-4 md:px-10 bg-black/20 backdrop-blur-sm rounded-sm
                    border-l-[1.5px] border-r-[1.5px] border-vang-kem/50
                ">
                    {/* TOP border — splits around the logo semicircle */}
                    <div className="absolute top-0 left-0 w-full flex items-start justify-center pointer-events-none z-10" aria-hidden="true">
                        <div className="flex-1 h-[1.5px] bg-vang-kem/50" />
                        <div className="w-[80px] h-[40px] md:w-[124px] md:h-[62px] xl:w-[164px] xl:h-[82px] border-b-[1.5px] border-l-[1.5px] border-r-[1.5px] border-vang-kem/50 rounded-b-full shrink-0" />
                        <div className="flex-1 h-[1.5px] bg-vang-kem/50" />
                    </div>

                    {/* BOTTOM border — splits around the CTA button block */}
                    <div className="absolute bottom-0 left-0 w-full flex items-end justify-center pointer-events-none z-10 translate-y-[1.5px]" aria-hidden="true">
                        <div className="flex-1 h-[1.5px] bg-vang-kem/50" />
                        <div className="w-[280px] md:w-[470px] h-[30px] md:h-[45px] border-t-[1.5px] border-l-[1.5px] border-r-[1.5px] border-vang-kem/50 rounded-t-lg shrink-0" />
                        <div className="flex-1 h-[1.5px] bg-vang-kem/50" />
                    </div>

                    {/* Corner ornaments */}
                    <CornerTL />
                    <CornerTR />
                    <CornerBL />
                    <CornerBR />

                    {/* Logo — overlaps the top border semicircle */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center z-20">
                        <div className="relative w-16 h-16 md:w-24 md:h-24 xl:w-32 xl:h-32 rounded-full border-[2px] md:border-[3px] border-vang-kem shadow-2xl overflow-hidden animate-scale-in bg-den p-1">
                            <Image
                                src="/images/logo.webp"
                                alt="Logo Cơm tấm Má Tư"
                                fill
                                sizes="(max-width: 768px) 80px, (max-width: 1280px) 128px, 160px"
                                className="object-cover rounded-full"
                                priority
                            />
                        </div>
                    </div>

                    {/* Inner content */}
                    <div className="flex flex-col items-center justify-center flex-1 min-h-0 py-2 w-full">
                        <h1 className="font-serif text-3xl md:text-4xl lg:text-6xl text-trang mt-2 md:mt-4 lg:mt-8 mb-2 md:mb-4 lg:mb-4 leading-[1.1] animate-fade-in-up tracking-wider drop-shadow-xl text-center text-balance flex flex-col items-center">
                            <span className="text-vang-kem animate-shimmer font-medium [text-shadow:0_4px_8px_rgba(0,0,0,0.8)] [text-wrap:balance]">Cơm Tấm Má Tư</span>
                            <span className="sr-only"> - Cơm tấm ngon nhất Bà Rịa, Vũng Tàu. Thịt tươi 100%.</span>
                        </h1>

                        <p className="text-white/90 text-xs md:text-base lg:text-lg max-w-2xl mx-auto text-center leading-relaxed animate-fade-in-up delay-300 font-serif tracking-[0.05em] px-2 md:px-8 [text-wrap:pretty]">
                            Nơi hội tụ tinh hoa ẩm thực Việt Nam với không gian ấm cúng,<br className="hidden md:block" />
                            hoài cổ theo phong cách giao thoa Indochine.
                        </p>
                    </div>

                    {/* CTA Buttons — overlaps the bottom border cutout */}
                    <HeroButtons />
                </div>
            </div>

            {/* Scroll indicator */}
            <ScrollIndicator href="#cau-chuyen" theme="dark" />
        </section>
    );
}
