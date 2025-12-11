/* config.js */
tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        tg: {
          bg: "#ffffff",
          bgDark: "#17212b",
          secondary: "#f4f4f5",
          secondaryDark: "#0e1621",
          card: "#ffffff",
          cardDark: "#242f3d",
          text: "#000000",
          textDark: "#ffffff",
          hint: "#707579",
          hintDark: "#7d8b99",
          blue: "#3390ec",
          blueDark: "#5288c1",
          green: "#34c759",
          red: "#ff3b30",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      animation: {
        "fill-bar": "fillBar 1.5s ease-out forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "bounce-slow": "bounce 3s infinite",
      },
      keyframes: {
        fillBar: {
          "0%": { width: "0%" },
          "100%": { width: "var(--target-width)" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      screens: {
        xs: "375px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },
};
