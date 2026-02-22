import Image from "next/image";
import { navLinks } from "@/lib/data";

export default function Footer() {
    return (
        <footer className="bg-den relative overflow-hidden snap-end shrink-0">
            {/* Decorative top border */}
            <div className="h-1 bg-gradient-to-r from-do-co via-vang-kem to-do-co" />

            <div className="container mx-auto px-4 max-w-7xl py-16">
                <div className="grid md:grid-cols-3 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-3 mb-5">
                            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-vang-kem/50">
                                <Image
                                    src="/images/logo.webp"
                                    alt="Logo Cơm tấm Má Tư"
                                    fill
                                    sizes="48px"
                                    className="object-cover"
                                />
                            </div>
                            <h3 className="font-serif text-2xl text-trang">
                                Cơm tấm <span className="text-vang-kem">Má Tư</span>
                            </h3>
                        </div>
                        <p className="text-trang/50 leading-relaxed mb-6">
                            Hương vị Việt Nam truyền thống trong không gian Indochine hoài cổ.
                            Nơi mỗi bữa cơm là một hành trình trở về ký ức.
                        </p>
                        <div className="flex gap-3">
                            {/* Facebook */}
                            <a
                                href="#"
                                aria-label="Facebook"
                                className="w-11 h-11 bg-trang/8 rounded-xl flex items-center justify-center hover:bg-do-co transition-all duration-300 group"
                            >
                                <svg
                                    className="w-5 h-5 text-trang/70 group-hover:text-trang transition-colors"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </a>
                            {/* Instagram */}
                            <a
                                href="#"
                                aria-label="Instagram"
                                className="w-11 h-11 bg-trang/8 rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 transition-all duration-300 group"
                            >
                                <svg
                                    className="w-5 h-5 text-trang/70 group-hover:text-trang transition-colors"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                                </svg>
                            </a>
                            {/* YouTube */}
                            <a
                                href="#"
                                aria-label="YouTube"
                                className="w-11 h-11 bg-trang/8 rounded-xl flex items-center justify-center hover:bg-red-600 transition-all duration-300 group"
                            >
                                <svg
                                    className="w-5 h-5 text-trang/70 group-hover:text-trang transition-colors"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-trang font-semibold text-lg mb-6 tracking-wide">
                            Liên kết nhanh
                        </h4>
                        <ul className="space-y-3">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className="text-trang/50 hover:text-vang-kem transition-colors duration-300 flex items-center gap-2 group"
                                    >
                                        <span className="w-0 group-hover:w-3 h-px bg-vang-kem transition-all duration-300" />
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Summary */}
                    <div>
                        <h4 className="text-trang font-semibold text-lg mb-6 tracking-wide">
                            Thông tin
                        </h4>
                        <div className="space-y-4 text-trang/50">
                            <p className="flex items-start gap-3">
                                <span className="text-vang-kem mt-0.5">📍</span>
                                QL55, TT.Đất Đỏ, Bà Rịa - Vũng Tàu
                            </p>
                            <p className="flex items-start gap-3">
                                <span className="text-vang-kem">📞</span>
                                <a
                                    href="tel:0772818172"
                                    className="hover:text-vang-kem transition-colors"
                                >
                                    0772 818 172
                                </a>
                            </p>
                            <p className="flex items-start gap-3">
                                <span className="text-vang-kem">🕐</span>
                                6:00 - 22:00 hàng ngày
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-trang/10 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-trang/30 text-sm">
                            © 2026 Cơm tấm Má Tư. All rights reserved.
                        </p>
                        <p className="text-trang/20 text-xs">Made with ❤️ in Việt Nam</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
