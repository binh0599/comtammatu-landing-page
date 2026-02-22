import Image from "next/image";
import ScrollIndicator from "@/components/ui/ScrollIndicator";

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative h-[100dvh] w-full flex-shrink-0 snap-start snap-always flex items-center justify-center overflow-hidden bg-[#1a1a1a]"
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
            <div className="absolute top-20 left-10 w-20 h-20 border border-vang-kem/20 rounded-full animate-float opacity-30 pointer-events-none" />
            <div className="absolute bottom-32 right-16 w-14 h-14 border border-vang-kem/15 rounded-full animate-float delay-500 opacity-20 pointer-events-none" />
            <div className="absolute top-1/3 right-10 w-2 h-2 bg-vang-kem/30 rounded-full animate-float delay-300" />

            {/* Monumental Typography Watermark */}
            <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden mix-blend-overlay opacity-10 select-none">
                <h1 className="font-serif text-[22vw] text-vang-kem leading-none whitespace-nowrap font-bold tracking-tighter">
                    MÁ TƯ
                </h1>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                {/* Tagline */}
                <p className="text-vang-kem font-medium tracking-[0.4em] uppercase mb-6 text-sm animate-fade-in-down">
                    ✦&nbsp;&nbsp;Hương vị truyền thống&nbsp;&nbsp;✦
                </p>

                {/* Logo */}
                <div className="relative w-36 h-36 mx-auto mb-8 animate-scale-in">
                    <div className="absolute inset-0 rounded-full animate-pulse-glow" />
                    <div className="relative w-full h-full rounded-full overflow-hidden border-3 border-vang-kem/60 animate-border-glow">
                        <Image
                            src="/images/logo.webp"
                            alt="Logo Cơm tấm Má Tư"
                            fill
                            sizes="144px"
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>

                {/* Title */}
                <h1 className="font-serif text-5xl md:text-8xl text-trang mb-4 md:mb-6 leading-tight animate-fade-in-up hero-title">
                    Cơm tấm{" "}
                    <span className="animate-shimmer">Má Tư</span>
                </h1>

                {/* Decorative line */}
                <div className="decorative-line-center mb-6 animate-width-expand delay-400" />

                {/* Subtitle */}
                <p className="text-trang/85 text-base md:text-xl max-w-2xl mx-auto mb-8 md:mb-10 px-4 leading-relaxed animate-fade-in-up delay-300">
                    Nơi hội tụ tinh hoa ẩm thực Việt Nam với không gian ấm cúng,
                    hoài cổ theo phong cách Indochine
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-500">
                    <a href="#menu" className="btn-primary">
                        Khám phá thực đơn
                    </a>
                    <a href="#contact" className="btn-outline">
                        Đặt bàn ngay
                    </a>
                </div>
            </div>

            {/* Scroll indicator */}
            <ScrollIndicator href="#about" theme="dark" />
        </section>
    );
}
