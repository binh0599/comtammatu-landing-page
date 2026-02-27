"use client";

interface ScrollIndicatorProps {
    href: string;
    /** light = dùng trên nền sáng, dark = dùng trên nền tối */
    theme?: "light" | "dark";
}

export default function ScrollIndicator({
    href,
    theme = "dark",
}: ScrollIndicatorProps) {
    const isDark = theme === "dark";

    return (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20">
            <a href={href} aria-label="Cuộn xuống phần tiếp theo" className="flex flex-col items-center gap-2 group focus-visible:ring-2 focus-visible:ring-vang-kem focus-visible:outline-none rounded-full">
                {/* Scroll Mouse Icon */}
                <div
                    className={`w-6 h-10 border-2 rounded-full flex justify-center pt-2 transition-colors duration-300 ${isDark
                        ? "border-trang/40 group-hover:border-vang-kem/60"
                        : "border-nau-dam/30 group-hover:border-do-co/60"
                        }`}
                >
                    <div
                        className={`w-1 h-3 rounded-full animate-scroll-down ${isDark ? "bg-trang/60" : "bg-nau-dam/50"
                            }`}
                    />
                </div>
            </a>
        </div>
    );
}
