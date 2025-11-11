// Importa o tipo de configuração do TailwindCSS
import type { Config } from "tailwindcss";

// Exporta a configuração principal do TailwindCSS
export default {
  // Habilita o modo escuro baseado na classe "dark"
  darkMode: ["class"],

  // Define onde o Tailwind deve procurar classes CSS
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],

  // Prefixo opcional para classes (vazio = sem prefixo)
  prefix: "",

  // Tema base e customizações
  theme: {
    // Configuração do container padrão
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },

    // Extensão dos estilos padrão
    extend: {
      // Paleta de cores personalizada
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        // Paleta principal (baseada em variáveis CSS)
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          light: "hsl(var(--primary-light))",
          dark: "hsl(var(--primary-dark))",
        },

        // Paleta exclusiva para o tema “mulher”
        mulher: {
          50: "#faf5ff",
          100: "#f3e8ff",
          200: "#e9d5ff",
          300: "#d8b4fe",
          400: "#c084fc",
          500: "#8b5cf6",
          600: "#7c3aed",
          700: "#6d28d9",
          800: "#5b21b6",
          900: "#4c1d95",
        },

        // Outras cores auxiliares
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

      // Planos de fundo personalizados (usando variáveis CSS)
      backgroundImage: {
        "gradient-primary": "var(--gradient-primary)",
        "gradient-soft": "var(--gradient-soft)",
      },

      // 🕶️ Sombras customizadas
      boxShadow: {
        soft: "var(--shadow-soft)",
        card: "var(--shadow-card)",
      },

      // Bordas arredondadas com base em variáveis
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },

      // Animações personalizadas
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },

      // Atribui nomes e durações às animações
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },

  // Ativa o plugin para animações do Tailwind
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
