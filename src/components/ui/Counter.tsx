"use client";

import { useState, useEffect } from "react";
import { useInView } from "@/lib/hooks";

/* ─── Animated Counter ─── */
export default function Counter({
    end,
    suffix = "",
    duration = 2000,
}: {
    end: number;
    suffix?: string;
    duration?: number;
}) {
    const [count, setCount] = useState(0);
    const { ref, isVisible } = useInView();

    useEffect(() => {
        if (!isVisible) return;
        let start = 0;
        const step = Math.ceil(end / (duration / 16));
        const timer = setInterval(() => {
            start += step;
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(start);
            }
        }, 16);
        return () => clearInterval(timer);
    }, [isVisible, end, duration]);

    return (
        <span ref={ref}>
            {count}
            {suffix}
        </span>
    );
}
