"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
    const pathname = usePathname();
    const dotRef = useRef<HTMLDivElement>(null);
    const ringRef = useRef<HTMLDivElement>(null);
    const requestRef = useRef<number>(0);

    const [isTouchDevice, setIsTouchDevice] = useState(false);

    // Use Refs to bypass React state and avoid re-renders on mousemove
    const mouseRef = useRef({ x: -100, y: -100 });
    const isHoveringRef = useRef(false);
    const isClickingRef = useRef(false);
    const isHiddenRef = useRef(false);
    const hoveredRectRef = useRef<{ left: number; top: number; width: number; height: number; borderRadius: string } | null>(null);

    useEffect(() => {
        if (
            window.matchMedia("(pointer: coarse)").matches ||
            "ontouchstart" in window ||
            window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ) {
            setIsTouchDevice(true);
            return;
        }

        const updateCursor = () => {
            if (dotRef.current && ringRef.current) {
                const { x, y } = mouseRef.current;
                const isHovering = isHoveringRef.current;
                const isClicking = isClickingRef.current;
                const isHidden = isHiddenRef.current;
                const rect = hoveredRectRef.current;

                // Update Dot
                if (isHidden) {
                    dotRef.current.style.opacity = "0";
                } else if (isHovering) {
                    dotRef.current.style.opacity = "0";
                    dotRef.current.style.transform = "translate(-50%, -50%) scale(0)";
                } else {
                    dotRef.current.style.opacity = "1";
                    dotRef.current.style.transform = `translate(-50%, -50%) scale(${isClicking ? 0.75 : 1})`;
                }

                dotRef.current.style.left = `${x}px`;
                dotRef.current.style.top = `${y}px`;

                // Update Ring
                if (isHidden) {
                    ringRef.current.style.opacity = "0";
                } else {
                    ringRef.current.style.opacity = "1";
                }

                if (isHovering && rect) {
                    // Snapping to element
                    ringRef.current.style.left = `${rect.left + rect.width / 2}px`;
                    ringRef.current.style.top = `${rect.top + rect.height / 2}px`;
                    ringRef.current.style.width = `${rect.width + 8}px`;
                    ringRef.current.style.height = `${rect.height + 8}px`;
                    ringRef.current.style.borderRadius = rect.borderRadius;

                    ringRef.current.className = `fixed pointer-events-none z-[99] transform -translate-x-1/2 -translate-y-1/2 border transition-all duration-300 ease-out mix-blend-exclusion bg-vang-kem/20 border-vang-kem/60 ${isClicking ? "scale-95" : "scale-100"}`;
                } else {
                    // Following mouse
                    ringRef.current.style.left = `${x}px`;
                    ringRef.current.style.top = `${y}px`;
                    ringRef.current.style.width = '32px';
                    ringRef.current.style.height = '32px';
                    ringRef.current.style.borderRadius = '9999px';

                    ringRef.current.className = `fixed pointer-events-none z-[99] transform -translate-x-1/2 -translate-y-1/2 border transition-all duration-300 ease-out mix-blend-exclusion border-vang-kem/80 ${isClicking ? "scale-90" : "scale-100"}`;
                }
            }
            requestRef.current = requestAnimationFrame(updateCursor);
        };

        requestRef.current = requestAnimationFrame(updateCursor);

        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
            if (isHiddenRef.current) isHiddenRef.current = false;
        };

        const handleMouseDown = () => (isClickingRef.current = true);
        const handleMouseUp = () => (isClickingRef.current = false);
        const handleMouseEnter = () => (isHiddenRef.current = false);
        const handleMouseLeave = () => (isHiddenRef.current = true);

        // Event delegation for hover states
        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const interactable = target.closest('a, button, input, select, textarea, [role="button"], .cursor-pointer');

            if (interactable) {
                const rect = interactable.getBoundingClientRect();
                const computedStyle = window.getComputedStyle(interactable);
                hoveredRectRef.current = {
                    left: rect.left,
                    top: rect.top,
                    width: rect.width,
                    height: rect.height,
                    borderRadius: computedStyle.borderRadius
                };
                isHoveringRef.current = true;
            }
        };

        const handleMouseOut = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const interactable = target.closest('a, button, input, select, textarea, [role="button"], .cursor-pointer');

            if (interactable) {
                isHoveringRef.current = false;
                hoveredRectRef.current = null;
            }
        };

        window.addEventListener("mousemove", handleMouseMove, { passive: true });
        window.addEventListener("mousedown", handleMouseDown, { passive: true });
        window.addEventListener("mouseup", handleMouseUp, { passive: true });
        document.addEventListener("mouseenter", handleMouseEnter, { passive: true });
        document.addEventListener("mouseleave", handleMouseLeave, { passive: true });
        document.addEventListener("mouseover", handleMouseOver, { passive: true });
        document.addEventListener("mouseout", handleMouseOut, { passive: true });

        return () => {
            cancelAnimationFrame(requestRef.current);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
            document.removeEventListener("mouseenter", handleMouseEnter);
            document.removeEventListener("mouseleave", handleMouseLeave);
            document.removeEventListener("mouseover", handleMouseOver);
            document.removeEventListener("mouseout", handleMouseOut);
        };
    }, [pathname]);

    if (isTouchDevice) return null;

    return (
        <>
            {/* The main dot */}
            <div
                ref={dotRef}
                className="fixed pointer-events-none z-[100] w-3 h-3 rounded-full transform -translate-x-1/2 -translate-y-1/2 bg-vang-kem transition-all duration-100 ease-out mix-blend-exclusion opacity-0"
            />

            {/* The outer ring (expands or snaps on hover) */}
            <div
                ref={ringRef}
                className="fixed pointer-events-none z-[99] transform -translate-x-1/2 -translate-y-1/2 border transition-all duration-300 ease-out mix-blend-exclusion border-vang-kem/80  opacity-0"
            />
        </>
    );
}
