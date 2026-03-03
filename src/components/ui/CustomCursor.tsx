"use client";

import { usePathname } from "next/navigation";
import { useCustomCursor } from "@/lib/hooks";

export default function CustomCursor() {
    const pathname = usePathname();
    const {
        position,
        isHovering,
        hoveredElement,
        isClicking,
        isHidden,
        isTouchDevice
    } = useCustomCursor(pathname);

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
