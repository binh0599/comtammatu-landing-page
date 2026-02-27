"use client";

import { useState, useEffect, useRef, useCallback } from "react";

type FormStatus = "idle" | "submitting" | "success" | "error";

const PARTY_SIZE_MAP: Record<string, number> = {
    "1": 1,
    "2": 2,
    "3": 3,
    "4": 4,
    "5-8": 6,
    "9+": 10,
};

export default function BookingModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [status, setStatus] = useState<FormStatus>("idle");
    const [errorMsg, setErrorMsg] = useState("");
    const modalRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<Element | null>(null);
    const closeButtonRef = useRef<HTMLButtonElement>(null);
    const formRef = useRef<HTMLFormElement>(null);

    useEffect(() => {
        const handleOpen = () => {
            triggerRef.current = document.activeElement;
            setIsOpen(true);
            setStatus("idle");
            setErrorMsg("");
        };
        window.addEventListener("open-booking", handleOpen);
        return () => window.removeEventListener("open-booking", handleOpen);
    }, []);

    // Focus trap & Escape key
    useEffect(() => {
        if (!isOpen) return;

        // Move focus into modal on open
        requestAnimationFrame(() => closeButtonRef.current?.focus());

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                handleClose();
                return;
            }
            // Focus trap
            if (e.key === "Tab" && modalRef.current) {
                const focusable = modalRef.current.querySelectorAll<HTMLElement>(
                    'button, input, select, textarea, a[href], [tabindex]:not([tabindex="-1"])'
                );
                const first = focusable[0];
                const last = focusable[focusable.length - 1];

                if (e.shiftKey && document.activeElement === first) {
                    e.preventDefault();
                    last?.focus();
                } else if (!e.shiftKey && document.activeElement === last) {
                    e.preventDefault();
                    first?.focus();
                }
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOpen]);

    const handleClose = useCallback(() => {
        setIsOpen(false);
        // Return focus to the element that triggered the modal
        requestAnimationFrame(() => {
            if (triggerRef.current instanceof HTMLElement) {
                triggerRef.current.focus();
            }
        });
    }, []);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (status === "submitting") return;

        setStatus("submitting");
        setErrorMsg("");

        const form = e.currentTarget;
        const formData = new FormData(form);

        const guestsValue = formData.get("guests") as string;

        const payload = {
            contact_name: formData.get("name") as string,
            contact_phone: formData.get("phone") as string,
            reservation_date: formData.get("date") as string,
            reservation_time: formData.get("time") as string,
            party_size: PARTY_SIZE_MAP[guestsValue] ?? parseInt(guestsValue, 10),
            special_requests: formData.get("special_requests") as string,
        };

        try {
            const res = await fetch("/api/booking", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            const data = await res.json();

            if (!res.ok) {
                setStatus("error");
                setErrorMsg(data.error || "Đã có lỗi xảy ra.");
                return;
            }

            setStatus("success");
            formRef.current?.reset();
        } catch {
            setStatus("error");
            setErrorMsg("Không thể kết nối. Vui lòng thử lại sau.");
        }
    };

    if (!isOpen) return null;

    // Get tomorrow as min date
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const minDate = tomorrow.toISOString().split("T")[0];
    // Max 60 days from now
    const maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 60);
    const maxDateStr = maxDate.toISOString().split("T")[0];

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                onClick={handleClose}
                aria-hidden="true"
            />

            {/* Modal Content */}
            <div
                ref={modalRef}
                role="dialog"
                aria-modal="true"
                aria-labelledby="booking-modal-title"
                className="relative w-full max-w-md bg-do-co rounded-xl shadow-2xl overflow-hidden border border-vang-kem animate-scale-in max-h-[90vh] overflow-y-auto"
            >
                {/* Close Button */}
                <button
                    ref={closeButtonRef}
                    onClick={handleClose}
                    aria-label="Đóng"
                    className="absolute top-4 right-4 text-vang-kem/70 hover:text-vang-kem transition-colors focus-visible:ring-2 focus-visible:ring-vang-kem focus-visible:outline-none rounded-full p-1 z-10"
                >
                    <svg aria-hidden="true" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Header */}
                <div className="text-center pt-8 pb-4 px-6 relative">
                    <h2 id="booking-modal-title" className="font-serif text-3xl text-vang-kem mb-2">Cơm Tấm Má Tư</h2>
                    <div className="flex items-center justify-center gap-2">
                        <span className="h-[1px] bg-vang-kem/30 w-12" aria-hidden="true" />
                        <span className="text-vang-kem/90 font-medium tracking-widest uppercase text-sm">Đặt Bàn</span>
                        <span className="h-[1px] bg-vang-kem/30 w-12" aria-hidden="true" />
                    </div>
                </div>

                {status === "success" ? (
                    <div className="px-6 pb-8 text-center">
                        <div className="mb-4">
                            <svg className="w-16 h-16 mx-auto text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="font-serif text-xl text-vang-kem mb-2">Đặt Bàn Thành Công!</h3>
                        <p className="text-trang/80 text-sm mb-6">
                            Cảm ơn quý khách! Chúng tôi sẽ liên hệ xác nhận đặt bàn qua số điện thoại của bạn trong thời gian sớm nhất.
                        </p>
                        <button
                            onClick={handleClose}
                            className="bg-vang-kem/10 border border-vang-kem text-vang-kem hover:bg-vang-kem hover:text-do-co font-serif py-2 px-8 rounded-lg font-bold transition-all duration-300 focus-visible:ring-2 focus-visible:ring-vang-kem focus-visible:outline-none"
                        >
                            Đóng
                        </button>
                    </div>
                ) : (
                    /* Form */
                    <form ref={formRef} className="px-6 pb-8 space-y-4" onSubmit={handleSubmit}>
                        {/* Error message */}
                        {status === "error" && errorMsg && (
                            <div className="bg-red-900/40 border border-red-400/50 rounded-lg px-4 py-3 text-red-200 text-sm" role="alert">
                                {errorMsg}
                            </div>
                        )}

                        <div>
                            <label htmlFor="booking-name" className="sr-only">Họ và Tên</label>
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-vang-kem/60" aria-hidden="true">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </span>
                                <input
                                    id="booking-name"
                                    name="name"
                                    type="text"
                                    placeholder="Họ và Tên"
                                    required
                                    autoComplete="name"
                                    disabled={status === "submitting"}
                                    className="w-full bg-transparent border border-vang-kem/40 rounded-lg py-3 pl-10 pr-4 text-trang placeholder-vang-kem/50 focus:outline-none focus:border-vang-kem focus-visible:ring-2 focus-visible:ring-vang-kem transition-colors disabled:opacity-50"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="booking-phone" className="sr-only">Số Điện Thoại</label>
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-vang-kem/60" aria-hidden="true">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </span>
                                <input
                                    id="booking-phone"
                                    name="phone"
                                    type="tel"
                                    placeholder="Số Điện Thoại"
                                    required
                                    autoComplete="tel"
                                    disabled={status === "submitting"}
                                    className="w-full bg-transparent border border-vang-kem/40 rounded-lg py-3 pl-10 pr-4 text-trang placeholder-vang-kem/50 focus:outline-none focus:border-vang-kem focus-visible:ring-2 focus-visible:ring-vang-kem transition-colors disabled:opacity-50"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="booking-date" className="sr-only">Ngày đặt bàn</label>
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-vang-kem/60" aria-hidden="true">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </span>
                                <input
                                    id="booking-date"
                                    name="date"
                                    type="date"
                                    required
                                    min={minDate}
                                    max={maxDateStr}
                                    disabled={status === "submitting"}
                                    className="w-full bg-transparent border border-vang-kem/40 rounded-lg py-3 pl-10 pr-4 text-trang focus:outline-none focus:border-vang-kem focus-visible:ring-2 focus-visible:ring-vang-kem transition-colors [color-scheme:dark] disabled:opacity-50"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="booking-time" className="sr-only">Giờ đặt bàn</label>
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-vang-kem/60" aria-hidden="true">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </span>
                                <input
                                    id="booking-time"
                                    name="time"
                                    type="time"
                                    required
                                    min="06:00"
                                    max="21:30"
                                    disabled={status === "submitting"}
                                    className="w-full bg-transparent border border-vang-kem/40 rounded-lg py-3 pl-10 pr-4 text-trang focus:outline-none focus:border-vang-kem focus-visible:ring-2 focus-visible:ring-vang-kem transition-colors [color-scheme:dark] disabled:opacity-50"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="booking-guests" className="sr-only">Số Lượng Khách</label>
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-vang-kem/60" aria-hidden="true">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </span>
                                <select
                                    id="booking-guests"
                                    name="guests"
                                    required
                                    defaultValue=""
                                    disabled={status === "submitting"}
                                    className="w-full bg-do-co border border-vang-kem/40 rounded-lg py-3 pl-10 pr-4 text-trang focus:outline-none focus:border-vang-kem focus-visible:ring-2 focus-visible:ring-vang-kem transition-colors appearance-none disabled:opacity-50"
                                >
                                    <option value="" disabled hidden>Số Lượng Khách</option>
                                    <option value="1">1 Người</option>
                                    <option value="2">2 Người</option>
                                    <option value="3">3 Người</option>
                                    <option value="4">4 Người</option>
                                    <option value="5-8">5 - 8 Người</option>
                                    <option value="9+">Trên 8 Người</option>
                                </select>
                                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-vang-kem/60 pointer-events-none" aria-hidden="true">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="booking-requests" className="sr-only">Ghi chú / Yêu cầu đặc biệt</label>
                            <div className="relative">
                                <span className="absolute left-3 top-3 text-vang-kem/60" aria-hidden="true">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                                    </svg>
                                </span>
                                <textarea
                                    id="booking-requests"
                                    name="special_requests"
                                    placeholder="Ghi chú (ngồi góc, ghế trẻ em...)"
                                    rows={2}
                                    disabled={status === "submitting"}
                                    className="w-full bg-transparent border border-vang-kem/40 rounded-lg py-3 pl-10 pr-4 text-trang placeholder-vang-kem/50 focus:outline-none focus:border-vang-kem focus-visible:ring-2 focus-visible:ring-vang-kem transition-colors resize-none disabled:opacity-50"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={status === "submitting"}
                            className="w-full bg-vang-kem/10 border border-vang-kem text-vang-kem hover:bg-vang-kem hover:text-do-co font-serif text-lg py-3 mt-4 rounded-lg font-bold transition-all duration-300 focus-visible:ring-2 focus-visible:ring-vang-kem focus-visible:outline-none disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {status === "submitting" ? (
                                <>
                                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                    </svg>
                                    Đang xử lý...
                                </>
                            ) : (
                                "Đặt Bàn Ngay"
                            )}
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
}
