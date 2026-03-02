import Image from "next/image";
import ScrollIndicator from "@/components/ui/ScrollIndicator";

export default function About() {
    return (
        <div
            id="cau-chuyen"
            className="h-[100dvh] w-full flex-shrink-0 snap-start snap-always flex flex-col relative bg-[#FDF8F0]"
        >
            {/* About Section - Super Clean Editorial Layout */}
            <section className="flex-1 min-h-0 relative overflow-hidden flex flex-col justify-center">
                {/* Vintage Paper texture overlay — self-hosted SVG noise */}
                <div className="absolute inset-0 opacity-30 mix-blend-multiply pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.15'/%3E%3C/svg%3E")` }} aria-hidden="true"></div>

                <div className="flex-1 min-h-0 container mx-auto px-6 md:px-12 lg:px-20 max-w-6xl relative z-10 flex flex-col justify-center">

                    <div className="relative flex flex-col lg:flex-row items-center gap-6 md:gap-12 lg:gap-24 min-h-0">

                        {/* MOBILE-ONLY: Compact landscape image with badge (visible < sm) */}
                        <div className="w-full relative reveal-left z-20 sm:hidden">
                            <div className="relative w-full h-36 rounded-2xl overflow-hidden shadow-lg border-2 border-[#cb9b51]/40">
                                <Image
                                    src="/images/space-2.webp"
                                    alt="Không gian Cơm tấm Má Tư"
                                    fill
                                    sizes="100vw"
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
                                <div className="absolute bottom-3 left-4">
                                    <p className="font-serif text-white/95 text-base tracking-widest drop-shadow-md">Góc nhỏ Sài Gòn</p>
                                    <p className="font-sans text-vang-kem text-[10px] tracking-[0.2em] uppercase mt-0.5">Hương vị ký ức</p>
                                </div>
                                {/* Floating 30 Years Badge — mobile */}
                                <div className="absolute top-2 right-3 w-16 h-16 bg-[#8B0000] rounded-full flex flex-col items-center justify-center shadow-xl border-[2px] border-[#FAF6F0]">
                                    <p className="font-serif text-[#cb9b51] text-xl font-bold leading-none">30</p>
                                    <p className="text-white/90 text-[6px] uppercase tracking-widest leading-[1.2] mt-0.5 text-center">Năm<br />Gia Truyền</p>
                                </div>
                            </div>
                        </div>

                        {/* LEFT: Arch Image Composite (visible sm+) */}
                        <div className="w-full lg:w-5/12 relative reveal-left z-20 hidden sm:block h-[35vh] lg:h-[55vh] lg:min-h-[450px]">
                            <div className="relative w-full h-full max-w-sm lg:max-w-md mx-auto flex items-end justify-center">

                                {/* The Arch Image Mask */}
                                <div className="relative w-4/5 h-full overflow-hidden shadow-2xl border-[4px] border-[#cb9b51]/60" style={{ borderRadius: '400px 400px 0 0' }}>
                                    <Image
                                        src="/images/space-2.webp"
                                        alt="Không gian Cơm tấm Má Tư"
                                        fill
                                        sizes="(max-width: 1024px) 50vw, 30vw"
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent"></div>
                                    <div className="absolute bottom-6 left-0 w-full text-center">
                                        <p className="font-serif text-white/95 text-xl tracking-widest drop-shadow-md">Góc nhỏ Sài Gòn</p>
                                        <p className="font-sans text-vang-kem text-xs tracking-[0.2em] uppercase mt-2">Hương vị ký ức</p>
                                    </div>
                                </div>

                                {/* Floating 30 Years Badge */}
                                <div className="absolute top-[10%] -right-4 md:-right-8 w-24 h-24 md:w-28 md:h-28 bg-[#8B0000] rounded-full flex flex-col items-center justify-center shadow-xl border-[2px] border-[#FAF6F0] z-30">
                                    <p className="font-serif text-[#cb9b51] text-3xl md:text-4xl font-bold leading-none">30</p>
                                    <p className="text-white/90 text-[8px] md:text-[9px] uppercase tracking-widest leading-[1.2] mt-1 text-center">Năm<br />Gia Truyền</p>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT: Typography / Editorial Text Container */}
                        <div className="w-full lg:w-7/12 flex flex-col justify-center reveal-right z-10 shrink min-h-0 text-left">

                            {/* Giant Watermark Background Text (Optional, keep it subtle) */}
                            <div className="absolute -top-10 -left-10 text-[100px] md:text-[180px] text-vang-kem/10 font-serif leading-none italic select-none pointer-events-none z-0" aria-hidden="true">
                                Sài Gòn
                            </div>

                            <div className="relative z-10 flex flex-col min-h-0">
                                {/* Eyebrow / Subhead */}
                                <div className="flex items-center gap-3 mb-2 md:mb-4">
                                    <div className="w-10 h-[1px] bg-[#cb9b51]" aria-hidden="true"></div>
                                    <p className="text-[#8B0000] font-bold tracking-[0.25em] uppercase text-[10px] md:text-sm">
                                        Câu Chuyện
                                    </p>
                                </div>

                                {/* Main Title */}
                                <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-[#2a231d] mb-3 md:mb-6 leading-[1.05] drop-shadow-sm [text-wrap:balance]">
                                    Hơn Cả Một <br />
                                    <span className="block text-right text-[#8B0000] italic font-light drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)]">Đĩa Cơm Tấm</span>
                                </h2>

                                {/* Editorial Paragraphs */}
                                <div className="space-y-3 md:space-y-4 text-[#4a4238] font-sans text-xs md:text-sm leading-snug md:leading-relaxed text-justify max-w-lg shrink">
                                    <p>
                                        Sinh ra từ gian bếp nhỏ vương màu khói lửa Sài Gòn xưa, <strong className="text-[#8B0000] font-semibold">Cơm Tấm Má Tư</strong> không đơn thuần là một món ăn, mà là sợi dây vô hình kết nối quá khứ và hiện tại. Lửa lò nướng sườn của Má chưa bao giờ tắt, vẫn vẹn nguyên công thức ướp bí truyền suốt ba thập kỷ để mang đến đĩa <strong className="text-[#8B0000] font-semibold">cơm tấm ngon nhất Bà Rịa</strong>.
                                    </p>
                                    <p>
                                        Từng hạt tấm tơi xốp quấn quýt bên miếng sườn nướng than hoa cháy cạnh, tươm mỡ vàng óng từ nguồn <span className="font-semibold text-[#8B0000]">thịt tươi 100%</span>. Miếng chả trứng chưng thịt đẫm vị, hòa quyện cùng thìa nước mắm chua ngọt sánh dẻo pha theo một <span className="italic font-serif text-[#cb9b51] font-bold">tỷ lệ vàng</span>.
                                    </p>
                                    <p className="hidden sm:block">
                                        Đến với Má Tư, bạn không chỉ thưởng thức trọn vẹn tinh hoa ẩm thực đường phố của một quán <strong className="text-[#8B0000]">Cơm tấm Vũng Tàu</strong>, mà còn tìm về một góc bình yên, nơi bữa cơm ân cần, ấm áp như tay Mẹ nấu.
                                    </p>
                                </div>

                                {/* Call to action removed as per user request */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ScrollIndicator href="#thuc-don" theme="light" />
        </div>
    );
}
