import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        display: ["Orbitron", "monospace"],
        body: ["Rajdhani", "sans-serif"],
        sans: ["Rajdhani", "Inter", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        neon: {
          cyan: "hsl(var(--neon-cyan))",
          magenta: "hsl(var(--neon-magenta))",
          yellow: "hsl(var(--neon-yellow))",
          green: "hsl(var(--neon-green))",
        },
        dark: {
          surface: "hsl(var(--dark-surface))",
          elevated: "hsl(var(--dark-elevated))",
          overlay: "hsl(var(--dark-overlay))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        "neon-cyan": "0 0 20px hsl(183 100% 50% / 0.4), 0 0 40px hsl(183 100% 50% / 0.2)",
        "neon-magenta": "0 0 20px hsl(315 100% 55% / 0.4), 0 0 40px hsl(315 100% 55% / 0.2)",
        "neon-subtle": "0 4px 20px hsl(183 100% 50% / 0.15)",
        card: "0 8px 32px hsl(230 20% 2% / 0.8)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "pulse-cyan": {
          "0%, 100%": { boxShadow: "0 0 10px hsl(183 100% 50% / 0.3)" },
          "50%": { boxShadow: "0 0 30px hsl(183 100% 50% / 0.7), 0 0 60px hsl(183 100% 50% / 0.3)" },
        },
        "slide-up": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "scan": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-cyan": "pulse-cyan 2s ease-in-out infinite",
        "slide-up": "slide-up 0.4s ease-out forwards",
        "fade-in": "fade-in 0.3s ease-out forwards",
        shimmer: "shimmer 2s linear infinite",
        scan: "scan 8s linear infinite",
      },
      backgroundImage: {
        "gradient-hero": "linear-gradient(135deg, hsl(230, 25%, 5%) 0%, hsl(260, 30%, 8%) 50%, hsl(183, 40%, 6%) 100%)",
        "gradient-card": "linear-gradient(180deg, hsl(230, 25%, 7%) 0%, hsl(230, 20%, 5%) 100%)",
        "gradient-cyan": "linear-gradient(135deg, hsl(183, 100%, 40%), hsl(195, 100%, 55%))",
        "gradient-magenta": "linear-gradient(135deg, hsl(315, 100%, 45%), hsl(290, 100%, 55%))",
        "gradient-overlay": "linear-gradient(0deg, hsl(230, 20%, 4%) 0%, transparent 60%)",
        "shimmer-bg": "linear-gradient(90deg, transparent 0%, hsl(183 100% 50% / 0.1) 50%, transparent 100%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
