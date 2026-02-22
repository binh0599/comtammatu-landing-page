"use client";

import { useEffect } from "react";

/**
 * AnimationProvider - sets up the IntersectionObserver that fires
 * the .visible class on all reveal elements across the page.
 * Keeping this isolated avoids forcing the entire page into a
 * Client Component just to run this one side-effect.
 */
export default function AnimationProvider() {
    useEffect(() => {
        const selector = [
            ".section-reveal",
            ".reveal",
            ".reveal-up",
            ".reveal-left",
            ".reveal-right",
            ".reveal-scale",
            ".reveal-fade",
        ].join(", ");

        const elements = document.querySelectorAll(selector);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                    }
                });
            },
            { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
        );

        elements.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return null;
}
