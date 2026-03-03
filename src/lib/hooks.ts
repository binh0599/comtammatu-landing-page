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

/* ─── Custom Cursor Hook ─── */
export function useCustomCursor(pathname: string) {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [hoveredElement, setHoveredElement] = useState<{ rect: DOMRect, borderRadius: string } | null>(null);
    const [isClicking, setIsClicking] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const [isTouchDevice, setIsTouchDevice] = useState(false);

    useEffect(() => {
        if (
            window.matchMedia("(pointer: coarse)").matches ||
            "ontouchstart" in window ||
            window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ) {
            setTimeout(() => setIsTouchDevice(true), 0);
            return;
        }

        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
            if (isHidden) setIsHidden(false);
        };

        const handleMouseDown = () => setIsClicking(true);
        const handleMouseUp = () => setIsClicking(false);
        const handleMouseEnter = () => setIsHidden(false);
        const handleMouseLeave = () => setIsHidden(true);

        const addHoverListeners = () => {
            const interactables = document.querySelectorAll(
                'a, button, input, select, textarea, [role="button"], .cursor-pointer'
            );

            interactables.forEach((el) => {
                if (el.getAttribute('data-cursor-attached')) return;
                el.setAttribute('data-cursor-attached', 'true');

                el.addEventListener("mouseenter", (e) => {
                    const target = e.currentTarget as HTMLElement;
                    const rect = target.getBoundingClientRect();
                    const computedStyle = window.getComputedStyle(target);
                    const borderRadius = computedStyle.borderRadius;
                    setHoveredElement({ rect, borderRadius });
                    setIsHovering(true);
                });

                el.addEventListener("mouseleave", () => {
                    setHoveredElement(null);
                    setIsHovering(false);
                });
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);
        document.addEventListener("mouseenter", handleMouseEnter);
        document.addEventListener("mouseleave", handleMouseLeave);

        addHoverListeners();

        const observer = new MutationObserver(() => addHoverListeners());
        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
            document.removeEventListener("mouseenter", handleMouseEnter);
            document.removeEventListener("mouseleave", handleMouseLeave);
            observer.disconnect();
        };
    }, [pathname, isHidden]);

    return {
        position,
        isHovering,
        hoveredElement,
        isClicking,
        isHidden,
        isTouchDevice
    };
}
