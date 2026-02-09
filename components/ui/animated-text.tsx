"use client";

import { ReactNode } from "react";

interface AnimatedTextProps {
    children: ReactNode;
    delay?: number;
    className?: string;
}

/**
 * AnimatedText - Text with fade-in-up animation
 */
export function AnimatedText({
    children,
    delay = 0,
    className = ""
}: AnimatedTextProps) {
    return (
        <span
            className={`inline-block animate-fade-in-up ${className}`}
            style={{ animationDelay: `${delay}ms` }}
        >
            {children}
        </span>
    );
}

interface TypewriterTextProps {
    text: string;
    className?: string;
    speed?: number;
}

/**
 * TypewriterText - Simulated typewriter effect using CSS
 */
export function TypewriterText({
    text,
    className = "",
    speed = 50
}: TypewriterTextProps) {
    const duration = text.length * speed;

    return (
        <span
            className={`inline-block overflow-hidden whitespace-nowrap border-r-2 border-aqua-400 ${className}`}
            style={{
                animation: `typewriter ${duration}ms steps(${text.length}) forwards, blink 0.75s step-end infinite`
            }}
        >
            {text}
        </span>
    );
}

interface GradientTextProps {
    children: ReactNode;
    className?: string;
}

/**
 * GradientText - Text with animated gradient effect
 */
export function GradientText({ children, className = "" }: GradientTextProps) {
    return (
        <span
            className={`bg-gradient-to-r from-aqua-300 via-teal-400 to-aqua-500 bg-clip-text text-transparent ${className}`}
        >
            {children}
        </span>
    );
}

interface StaggeredTextProps {
    words: string[];
    className?: string;
    wordClassName?: string;
    baseDelay?: number;
}

/**
 * StaggeredText - Words that animate in with staggered delays
 */
export function StaggeredText({
    words,
    className = "",
    wordClassName = "",
    baseDelay = 100
}: StaggeredTextProps) {
    return (
        <span className={className}>
            {words.map((word, index) => (
                <AnimatedText
                    key={`${word}-${index}`}
                    delay={index * baseDelay}
                    className={`mr-2 ${wordClassName}`}
                >
                    {word}
                </AnimatedText>
            ))}
        </span>
    );
}
