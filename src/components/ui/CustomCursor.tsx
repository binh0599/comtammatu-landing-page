"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [hoveredElement, setHoveredElement] = useState<{ rect: DOMRect, borderRadius: string } | null>(null);
    const [isClicking, setIsClicking] = useState(false);
    const [isHidden, setIsHidden] = useState(false);

    // Don't render on mobile/touch devices
    const [isTouchDevice, setIsTouchDevice] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        // Check if device is touch-capable
        if (window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window) {
            setTimeout(() => setIsTouchDevice(true), 0);
            return;
        }

        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
            // Show cursor if it was hidden (e.g., when mouse left window)
            if (isHidden) setIsHidden(false);
        };

        const handleMouseDown = () => setIsClicking(true);
        const handleMouseUp = () => setIsClicking(false);

        const handleMouseEnter = () => setIsHidden(false);
        const handleMouseLeave = () => setIsHidden(true);

        // Define hover targets
        const addHoverListeners = () => {
            const interactables = document.querySelectorAll(
                'a, button, input, select, textarea, [role="button"], .cursor-pointer'
            );

            interactables.forEach((el) => {
                // Ensure we don't attach multiple listeners to the same element
                if (el.getAttribute('data-cursor-attached')) return;

                el.setAttribute('data-cursor-attached', 'true');

                el.addEventListener("mouseenter", (e) => {
                    const target = e.currentTarget as HTMLElement;
                    const rect = target.getBoundingClientRect();
                    // Get computed border radius of the target element
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

        // Add core listeners
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);
        document.addEventListener("mouseenter", handleMouseEnter);
        document.addEventListener("mouseleave", handleMouseLeave);

        // Setup initial hover targets
        addHoverListeners();

        // Use MutationObserver to detect dynamically added elements
        const observer = new MutationObserver(() => {
            addHoverListeners();
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true,
        });

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
            document.removeEventListener("mouseenter", handleMouseEnter);
            document.removeEventListener("mouseleave", handleMouseLeave);
            observer.disconnect();
        };
    }, [pathname, isHidden]); // Re-bind hover listeners when route changes

    if (isTouchDevice) return null;

    // Calculate ring position and size based on whether it's snapping to an element
    const ringStyle = isHovering && hoveredElement
        ? {
            left: `${hoveredElement.rect.left + hoveredElement.rect.width / 2}px`,
            top: `${hoveredElement.rect.top + hoveredElement.rect.height / 2}px`,
            width: `${hoveredElement.rect.width + 8}px`, // Add some padding around the element
            height: `${hoveredElement.rect.height + 8}px`,
            // Use the exact border radius of the target element
            borderRadius: hoveredElement.borderRadius
        }
        : {
            left: `${position.x}px`,
            top: `${position.y}px`,
            width: '32px', // 8rem = 32px
            height: '32px',
            borderRadius: '9999px' // full circle
        };

    return (
        <>
            {/* The main dot */}
            <div
                className={`fixed pointer-events-none z-[100] w-3 h-3 rounded-full transform -translate-x-1/2 -translate-y-1/2 bg-vang-kem transition-all duration-100 ease-out mix-blend-exclusion
                    ${isHidden ? "opacity-0" : "opacity-100"}
                    ${isClicking ? "scale-75" : "scale-100"}
                    ${isHovering ? "opacity-0 scale-0" : ""}
                `}
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                }}
            />

            {/* The outer ring (expands or snaps on hover) */}
            <div
                className={`fixed pointer-events-none z-[99] transform -translate-x-1/2 -translate-y-1/2 border transition-all duration-300 ease-out mix-blend-exclusion
                    ${isHidden ? "opacity-0" : "opacity-100"}
                    ${isHovering
                        ? "bg-vang-kem/20 border-vang-kem/60"
                        : "border-vang-kem/80"
                    }
                    ${isClicking && !isHovering ? "scale-90" : ""}
                    ${isClicking && isHovering ? "scale-95" : ""}
                `}
                style={ringStyle}
            />
        </>
    );
}
