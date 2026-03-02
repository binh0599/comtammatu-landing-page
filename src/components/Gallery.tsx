import Image from "next/image";
import Link from "next/link";
import { galleryImages } from "@/lib/data";
import GalleryButtons from "@/components/GalleryButtons";

export default function Gallery() {
    return (
        <div
            id="khong-gian"
            className="h-[100dvh] w-full flex-shrink-0 snap-start snap-always flex flex-col relative"
        >

            {/* Gallery Section */}
            <section className="flex-1 pt-24 pb-0 md:pt-28 md:pb-0 bg-nau-dam relative overflow-hidden flex flex-col justify-between">
                {/* Subtle glow — positioned behind header, not overlapping text */}
                <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-do-co/8 rounded-full blur-3xl pointer-events-none" />

                <div className="container mx-auto px-4 max-w-7xl relative z-10 flex flex-col flex-1 pb-4 md:pb-8">
                    {/* Section Header */}
                    <div className="text-center mb-6 md:mb-10 section-reveal pt-4 md:pt-0">
                        <p className="text-vang-kem font-semibold tracking-[0.2em] uppercase text-xs md:text-sm mb-1 md:mb-3">
                            Không gian
                        </p>
                        <h2 className="font-serif text-3xl md:text-5xl text-vang-kem mb-2 md:mb-4 text-balance">
                            Không Gian & Bầu <span className="text-trang">Không Khí</span>
                        </h2>
                        <div className="decorative-line-center bg-vang-kem" />
                    </div>

                    <div className="flex-1 min-h-0 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 reveal-fade mb-6 md:mb-10 w-full h-[50vh] md:h-auto overflow-hidden">
                        {galleryImages.slice(0, 3).map((img, idx) => (
                            <Link
                                key={idx}
                                href={`?image=${encodeURIComponent(img.src)}`}
                                scroll={false}
                                className="relative rounded-lg overflow-hidden group cursor-pointer h-full min-h-[150px] focus-visible:ring-2 focus-visible:ring-vang-kem focus-visible:outline-none"
                            >
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                {/* Overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                                {/* Hover caption — shows alt text */}
                                <div className="absolute bottom-0 inset-x-0 p-3 md:p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                                    <p className="text-trang/90 text-xs md:text-sm font-sans tracking-wide drop-shadow-md line-clamp-2">{img.alt}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Booking Red Banner */}
                <div className="w-full bg-do-co py-6 md:py-8 mt-auto relative z-20 border-t-2 border-vang-kem/30 flex-shrink-0">
                    <div className="container mx-auto px-4 text-center flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
                        <p className="text-trang uppercase font-serif text-lg md:text-2xl tracking-widest leading-relaxed">
                            Đặt Bàn Ngay Để Trải Nghiệm
                        </p>
                        <GalleryButtons />
                    </div>
                </div>
            </section>
        </div>
    );
}
