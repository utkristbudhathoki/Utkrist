"use client";

import { useEffect, useRef, useState, RefObject } from "react";

interface UseIntersectionOptions {
    threshold?: number;
    rootMargin?: string;
    triggerOnce?: boolean;
}

/**
 * useIntersection - Custom hook for scroll-triggered animations
 * Uses Intersection Observer API for optimal performance
 */
export function useIntersection<T extends HTMLElement = HTMLDivElement>(
    options: UseIntersectionOptions = {}
): [RefObject<T>, boolean] {
    const { threshold = 0.1, rootMargin = "0px", triggerOnce = true } = options;
    const ref = useRef<T>(null);
    const [isIntersecting, setIsIntersecting] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsIntersecting(true);
                    if (triggerOnce) {
                        observer.unobserve(element);
                    }
                } else if (!triggerOnce) {
                    setIsIntersecting(false);
                }
            },
            { threshold, rootMargin }
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, [threshold, rootMargin, triggerOnce]);

    return [ref as RefObject<T>, isIntersecting];
}

/**
 * useStaggeredAnimation - Hook for creating staggered animation delays
 */
export function useStaggeredAnimation(
    itemCount: number,
    baseDelay: number = 100
): number[] {
    return Array.from({ length: itemCount }, (_, i) => i * baseDelay);
}

/**
 * useScrollProgress - Track scroll progress for parallax effects
 */
export function useScrollProgress(): number {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollHeight =
                document.documentElement.scrollHeight - window.innerHeight;
            const scrollProgress = window.scrollY / scrollHeight;
            setProgress(scrollProgress);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return progress;
}