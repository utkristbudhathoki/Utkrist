import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./hooks/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        aqua: {
          50: "#e6fcff",
          100: "#b3f5ff",
          200: "#80eeff",
          300: "#4de7ff",
          400: "#1adfff",
          500: "#00c6e6",
          600: "#009bb4",
          700: "#006f82",
          800: "#004451",
          900: "#00191f"
        },
        teal: {
          50: "#f0fdfa",
          100: "#ccfbf1",
          200: "#99f6e4",
          300: "#5eead4",
          400: "#2dd4bf",
          500: "#14b8a6",
          600: "#0d9488",
          700: "#0f766e",
          800: "#115e59",
          900: "#134e4a"
        },
        cyan: {
          50: "#ecfeff",
          100: "#cffafe",
          200: "#a5f3fc",
          300: "#67e8f9",
          400: "#22d3ee",
          500: "#06b6d4",
          600: "#0891b2",
          700: "#0e7490",
          800: "#155e75",
          900: "#164e63"
        }
      },
      backgroundImage: {
        "aqua-gradient":
          "radial-gradient(circle at top left, #4de7ff, transparent 50%), radial-gradient(circle at bottom right, #14b8a6, transparent 50%)",
        "mesh-gradient":
          "radial-gradient(at 40% 20%, rgba(77, 231, 255, 0.1) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(20, 184, 166, 0.1) 0px, transparent 50%)"
      },
      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif"
        ],
        display: ["Outfit", "Inter", "sans-serif"]
      },
      animation: {
        "fade-in-up": "fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) both",
        "fade-in": "fade-in 0.6s ease-out both",
        "scale-in": "scale-in 0.5s cubic-bezier(0.16, 1, 0.3, 1) both",
        "slide-in-left": "slide-in-left 0.6s cubic-bezier(0.16, 1, 0.3, 1) both",
        "slide-in-right": "slide-in-right 0.6s cubic-bezier(0.16, 1, 0.3, 1) both",
        "shimmer": "shimmer 2s infinite linear",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "float": "antigravity-float var(--float-duration, 5s) ease-in-out infinite"
      },
      keyframes: {
        "fade-in-up": {
          from: {
            opacity: "0",
            transform: "translate3d(0, 20px, 0)"
          },
          to: {
            opacity: "1",
            transform: "translate3d(0, 0, 0)"
          }
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" }
        },
        "scale-in": {
          from: {
            opacity: "0",
            transform: "scale(0.95)"
          },
          to: {
            opacity: "1",
            transform: "scale(1)"
          }
        },
        "slide-in-left": {
          from: {
            opacity: "0",
            transform: "translateX(-20px)"
          },
          to: {
            opacity: "1",
            transform: "translateX(0)"
          }
        },
        "slide-in-right": {
          from: {
            opacity: "0",
            transform: "translateX(20px)"
          },
          to: {
            opacity: "1",
            transform: "translateX(0)"
          }
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" }
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(0, 198, 230, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(0, 198, 230, 0.6)" }
        },
        "antigravity-float": {
          "0%, 100%": {
            transform: "translateY(0) rotate(0deg)"
          },
          "25%": {
            transform: "translateY(calc(var(--float-intensity, 15px) * -0.5)) rotate(0.5deg)"
          },
          "50%": {
            transform: "translateY(calc(var(--float-intensity, 15px) * -1)) rotate(-0.5deg)"
          },
          "75%": {
            transform: "translateY(calc(var(--float-intensity, 15px) * -0.5)) rotate(0.5deg)"
          }
        }
      },
      boxShadow: {
        "glow-sm": "0 0 10px rgba(0, 198, 230, 0.3)",
        "glow": "0 0 20px rgba(0, 198, 230, 0.4)",
        "glow-lg": "0 0 40px rgba(0, 198, 230, 0.5)"
      }
    }
  },
  plugins: []
};

export default config;
