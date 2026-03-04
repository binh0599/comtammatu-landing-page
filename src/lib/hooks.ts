"use client";

import { useRef, useState, useEffect } from "react";

/* ─── Intersection Observer Hook ─── */
export function useInView(threshold = 0.15) {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.unobserve(el);
                }
            },
            { threshold }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, [threshold]);

    return { ref, isVisible };
}

/* ─── Modal Hook with Focus Trap ─── */
export function useModal(openEventName = "open-modal") {
    const [isOpen, setIsOpen] = useState(false);
    const modalRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<Element | null>(null);
    const closeButtonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const handleOpen = () => {
            triggerRef.current = document.activeElement;
            setIsOpen(true);
        };
        window.addEventListener(openEventName, handleOpen);
        return () => window.removeEventListener(openEventName, handleOpen);
    }, [openEventName]);

    useEffect(() => {
        if (!isOpen) return;

        requestAnimationFrame(() => closeButtonRef.current?.focus());

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                handleClose();
                return;
            }
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

    const handleClose = () => {
        setIsOpen(false);
        requestAnimationFrame(() => {
            if (triggerRef.current instanceof HTMLElement) {
                triggerRef.current.focus();
            }
        });
    };

    return { isOpen, handleClose, modalRef, closeButtonRef };
}

