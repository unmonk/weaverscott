/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      colors: {
        siuPrimary: "#720000",
        mccPrimary: "#4b3190",
        mccSecondary: "#fdbb30",
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
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        fadeInUp: {
          "0%": {
            transform: "translateY(100%)",
            opacity: 0,
          },
          "100%": {
            transform: "translateY(0%)",
            opacity: 1,
          },
        },

        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        tada: {
          "0%": {
            transform: "scale3d(1, 1, 1)",
          },
          "10%, 20%": {
            transform: "scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg)",
          },
          "30%, 50%, 70%, 90%": {
            transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)",
          },
          "40%, 60%, 80%": {
            transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)",
          },
          "100%": {
            transform: "scale3d(1, 1, 1)",
          },
        },
        flag: {
          "0%": {
            transform:
              "rotateX(0deg) matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)",
            filter: "drop-shadow(2px 3px 7px rgba(0, 0, 0, .7))",
          },
          "50%": {
            transform:
              "rotateX(10deg) matrix3d(0.9829214561476214, 0, 0, -0.00003271751695857963, 0, 0.9962483913887495, 0, -0.000021811677972386414, 0, 0, 1, 0, 0, 0, 0, 1)",
          },
          "100%": {
            transform:
              "rotateX(0deg) matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)",
            filter: "drop-shadow(2px 3px 7px rgba(0, 0, 0, .7))",
          },
        },

        gradient: {
          "0%, 100%": {
            "background-position": "0% 50%",
            "background-size": "400% 400%",
          },
          "50%": {
            "background-position": "100% 50%",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "fade-in": "fadeInUp 1s  ease-out",
        "fade-in-faster": "fadeInUp 0.7s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        tada: "tada 1s ease-in-out infinite",
        gradient: "gradient 8s ease infinite",
        flag: "flag 2s infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
