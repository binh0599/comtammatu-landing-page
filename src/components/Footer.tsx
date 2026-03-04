import { navLinks } from "@/lib/data";

export default function Footer() {
    return (
        <footer id="footer" className="relative bg-[#1a1a1a] snap-end shrink-0 border-t border-vang-kem/20 overflow-hidden">
            {/* Subtle Texture Overlay — self-hosted SVG noise */}
            <div className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.12'/%3E%3C/svg%3E")` }} aria-hidden="true" />

            <div className="container mx-auto px-6 md:px-12 lg:px-24 py-16 md:py-24 relative z-10 text-vang-kem">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-16">
                    {/* Brand Column */}
                    <div className="md:col-span-4 flex flex-col items-start gap-6 pr-4">
                        <div className="flex flex-col gap-2">
                            <h2 className="font-serif text-4xl md:text-5xl leading-tight font-bold text-transparent bg-clip-text bg-gradient-to-r from-vang-kem via-[#cb9b51] to-vang-kem drop-shadow-sm">
                                Cơm Tấm<br />
                                Má Tư
                            </h2>
                            <div className="h-0.5 w-16 bg-vang-kem/50 mt-2" aria-hidden="true"></div>
                        </div>
                        <p className="text-vang-kem/80 text-lg leading-relaxed max-w-sm font-mulish font-light">
                            Hương vị cơm tấm truyền thống Sài Gòn xưa được giữ gìn trọn vẹn trong từng nếp cơm, miếng sườn.
                        </p>

                        <div className="flex gap-4 mt-2">
                            {/* Facebook icon */}
                            <a href="https://www.facebook.com/profile.php?id=61587525182986" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 rounded-full border border-vang-kem/30 flex items-center justify-center text-vang-kem hover:bg-vang-kem hover:text-[#1a1a1a] transition-all duration-300 focus-visible:ring-2 focus-visible:ring-vang-kem focus-visible:outline-none">
                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                            </a>
                            {/* TikTok icon */}
                            <a href="https://www.tiktok.com/@taimatu2000" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="w-10 h-10 rounded-full border border-vang-kem/30 flex items-center justify-center text-vang-kem hover:bg-vang-kem hover:text-[#1a1a1a] transition-all duration-300 focus-visible:ring-2 focus-visible:ring-vang-kem focus-visible:outline-none">
                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 15.68a6.34 6.34 0 006.35 6.32 6.32 6.32 0 006.31-6.24v-6.66a8.21 8.21 0 004.34 1.25v-3.46a4.81 4.81 0 01-2.41-.66z" /></svg>
                            </a>
                        </div>
                    </div>

                    {/* Navigation Column */}
                    <nav aria-label="Liên kết nhanh" className="md:col-span-2 flex flex-col gap-5">
                        <h3 className="font-serif text-2xl mb-2 text-white">Khám phá</h3>
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="text-vang-kem/80 font-mulish text-lg hover:text-white hover:translate-x-1 transition-all w-fit focus-visible:ring-2 focus-visible:ring-vang-kem focus-visible:outline-none"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    {/* Contact Info Column */}
                    <div className="md:col-span-3 flex flex-col gap-5 font-mulish">
                        <h3 className="font-serif text-2xl mb-2 text-white">Liên hệ</h3>

                        <div className="flex items-start gap-3">
                            <span className="text-[#cb9b51] mt-1 shrink-0" aria-hidden="true">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" /></svg>
                            </span>
                            <span className="text-vang-kem/90 leading-relaxed text-[15px]">
                                QL55, TT.Đất Đỏ, Bà Rịa - Vũng Tàu
                            </span>
                        </div>

                        <div className="flex items-center gap-3">
                            <span className="text-[#cb9b51] shrink-0" aria-hidden="true">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" /></svg>
                            </span>
                            <a href="tel:+84772818172" className="text-vang-kem/90 hover:text-white transition-colors text-[15px] font-medium tracking-wide focus-visible:ring-2 focus-visible:ring-vang-kem focus-visible:outline-none">
                                0772 818 172
                            </a>
                        </div>

                        <div className="flex items-start gap-3 mt-1">
                            <span className="text-[#cb9b51] mt-0.5 shrink-0" aria-hidden="true">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" /><path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z" /></svg>
                            </span>
                            <div className="flex flex-col text-[15px]">
                                <span className="text-vang-kem/90">06:00 - 22:00</span>
                                <span className="text-vang-kem/80 text-sm">Thứ Hai - Chủ Nhật</span>
                            </div>
                        </div>
                    </div>

                    {/* Map Column */}
                    <div className="md:col-span-3 flex flex-col h-full">
                        <div className="w-full h-[220px] rounded-xl overflow-hidden border border-vang-kem/20 shadow-lg relative group">
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 pointer-events-none z-10" aria-hidden="true"></div>
                            <iframe
                                title="Bản đồ vị trí Cơm tấm Má Tư tại QL55, Đất Đỏ"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3810.7039648850396!2d107.27304627836006!3d10.494046362920571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317575d2d4ef7dad%3A0xbfc17d0efe81874e!2zQ8ahbSB04bqlbSBNw6EgVMaw!5e1!3m2!1svi!2s!4v1772098987355!5m2!1svi!2s"
                                width="100%"
                                height="100%"
                                style={{ border: 0, filter: 'grayscale(30%) sepia(20%)' }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            ></iframe>
                        </div>
                        <a
                            href="https://maps.app.goo.gl/6XZkDT6eHD553s639"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-center mt-3 text-sm text-[#cb9b51] hover:text-white transition-colors underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-vang-kem focus-visible:outline-none"
                        >
                            Xem trên Google Maps &rarr;
                        </a>
                    </div>
                </div>

                {/* Bottom Row */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-vang-kem/10 font-mulish">
                    <p className="text-vang-kem/80 text-sm">
                        © {new Date().getFullYear()} Cơm Tấm Má Tư. <span lang="en">All rights reserved.</span>
                    </p>
                    <p className="text-vang-kem/60 text-xs">
                        Thiết kế với sự tận tâm
                    </p>
                </div>
            </div>
        </footer>
    );
}
