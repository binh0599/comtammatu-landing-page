import Image from "next/image";
import Counter from "@/components/ui/Counter";
import ScrollIndicator from "@/components/ui/ScrollIndicator";

export default function About() {
    return (
        <div
            id="about"
            className="h-[100dvh] md:h-auto w-full flex-shrink-0 md:min-h-[100dvh] snap-start snap-always flex flex-col relative"
        >
            {/* Wave: Hero → About */}
            <div className="wave-divider bg-trang flex-shrink-0">
                <svg
                    viewBox="0 0 1440 80"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
                        fill="#FAFAFA"
                    />
                </svg>
            </div>

            {/* About Section */}
            <section className="flex-1 pt-16 pb-4 md:pt-12 md:pb-16 bg-trang relative overflow-hidden flex flex-col justify-center">
                {/* Decorative background */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-vang-kem/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-do-co/3 rounded-full translate-y-1/2 -translate-x-1/2" />

                <div className="container mx-auto px-4 max-w-7xl relative z-10 h-full md:h-auto flex flex-col md:block min-h-0">
                    <div className="flex-1 md:flex-none grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-16 items-center overflow-y-auto md:overflow-visible scrollbar-hide pb-16 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0">
                        {/* Image Side */}
                        <div className="reveal-left">
                            <div className="relative">
                                {/* Decorative frame */}
                                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-vang-kem/30 rounded-2xl" />
                                <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-do-co/20 rounded-2xl" />

                                <div className="relative h-[200px] sm:h-[300px] md:h-[510px] rounded-2xl overflow-hidden shadow-2xl">
                                    <Image
                                        src="/images/space-2.webp"
                                        alt="Không gian quán Cơm tấm Má Tư với phong cách Indochine ấm cúng"
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="object-cover"
                                    />
                                    {/* Overlay with stats */}
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                                        <p className="text-vang-kem text-sm tracking-wider uppercase">
                                            Từ năm 2015
                                        </p>
                                        <p className="text-trang font-serif text-2xl">
                                            Hương vị đặc trưng Sài Gòn
                                        </p>
                                    </div>
                                </div>

                                {/* Floating badge */}
                                <div className="absolute -top-3 -right-3 md:-top-6 md:-right-6 bg-do-co text-trang w-16 h-16 md:w-24 md:h-24 rounded-full flex flex-col items-center justify-center shadow-xl animate-float">
                                    <span className="font-serif text-xl md:text-2xl font-bold">10+</span>
                                    <span className="text-[10px] md:text-xs">Năm</span>
                                </div>
                            </div>
                        </div>

                        {/* Content Side */}
                        <div className="reveal-right">
                            <p className="text-do-co font-semibold tracking-[0.2em] uppercase text-xs md:text-sm mb-1 md:mb-3">
                                Về chúng tôi
                            </p>
                            <h2 className="font-serif text-2xl md:text-5xl mb-3 md:mb-6 leading-tight">
                                <span className="text-nau-dam">Câu chuyện </span>
                                <span className="text-do-co">Má Tư</span>
                            </h2>
                            <div className="decorative-line mb-4 md:mb-8" />

                            <p className="text-gray-600 leading-snug md:leading-relaxed mb-2 md:mb-5 text-[13px] md:text-lg">
                                Cơm tấm Má Tư ra đời với mong muốn mang đến hương vị cơm tấm
                                truyền thống Việt Nam chuẩn vị ngày xưa. Từ những hạt cơm tấm
                                thơm lúa, lát thịt nạc rim giòn tan, đến chả trứng vàng ươm -
                                mỗi món ăn đều được chế biến với tình yêu và sự tỉ mỉ.
                            </p>
                            <p className="text-gray-600 leading-snug md:leading-relaxed mb-4 md:mb-10 text-[13px] md:text-lg">
                                Không gian quán được thiết kế theo phong cách Indochine hoài
                                cổ, với gam màu nâu gỗ ấm áp, đèn lồng đỏ ruột mồi và những
                                bức tranh gỗ Việt Nam. Đến đây, bạn không chỉ thưởng thức bữa
                                cơm, mà còn được hoài niệm về một thời đã qua.
                            </p>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-2 sm:gap-6 mt-2 md:mt-0">
                                <div className="text-center p-2 px-1 md:p-4 rounded-xl bg-vang-nhat/50">
                                    <p className="font-serif text-xl md:text-4xl text-do-co font-bold">
                                        <Counter end={10} suffix="+" />
                                    </p>
                                    <p className="text-gray-500 text-[11px] md:text-sm mt-0.5 md:mt-1">Kinh nghiệm</p>
                                </div>
                                <div className="text-center p-2 px-1 md:p-4 rounded-xl bg-vang-nhat/50">
                                    <p className="font-serif text-xl md:text-4xl text-do-co font-bold">
                                        <Counter end={50} suffix="K+" />
                                    </p>
                                    <p className="text-gray-500 text-[11px] md:text-sm mt-0.5 md:mt-1">Khách hàng</p>
                                </div>
                                <div className="text-center p-2 px-1 md:p-4 rounded-xl bg-vang-nhat/50">
                                    <p className="font-serif text-xl md:text-4xl text-do-co font-bold">
                                        5⭐
                                    </p>
                                    <p className="text-gray-500 text-[11px] md:text-sm mt-0.5 md:mt-1">Đánh giá</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ScrollIndicator href="#menu" theme="light" />
        </div>
    );
}
