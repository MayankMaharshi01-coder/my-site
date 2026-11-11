/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        midnight: "#090E1C",
        panel: "#151D32",
        accentPurple: "#8B5CF6",
        accentCyan: "#22D3EE",
      },
      boxShadow: {
        aurora:
          "0 0 0 1px rgba(255,255,255,0.08), 0 20px 45px rgba(139,92,246,0.18)",
      },
    },
  },
  plugins: [],
};
