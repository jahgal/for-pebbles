import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        kakao: {
          bg: "#FEE500",
          text: "rgba(0, 0, 0, 0.85)",
        },
        gray: {
          0: "#ffffff",
          50: "#f8f8f8",
          100: "#f0f0f0",
          200: "#e4e4e4",
          300: "#d8d8d8",
          400: "#c6c6c6",
          500: "#8e8e8e",
          600: "#717171",
          700: "#555555",
          800: "#2d2d2d",
          900: "#1d1d1d",
        },
      },
      fontFamily: {
        pretendard: "var(--font-pretendard)",
      },
      fontSize: {
        "display-l": [
          "4.125rem",
          { lineHeight: "150%", fontWeight: "700", letterSpacing: "1px" },
        ],
        "display-m": [
          "3.125rem",
          { lineHeight: "150%", fontWeight: "700", letterSpacing: "1px" },
        ],
        "display-s": [
          "2.5rem",
          { lineHeight: "150%", fontWeight: "700", letterSpacing: "1px" },
        ],
        "heading-l": [
          "3.125rem",
          { lineHeight: "150%", fontWeight: "700", letterSpacing: "1px" },
        ],
        "heading-m": [
          "2.5rem",
          { lineHeight: "150%", fontWeight: "700", letterSpacing: "1px" },
        ],
        "heading-s": [
          "2rem",
          { lineHeight: "150%", fontWeight: "700", letterSpacing: "1px" },
        ],
        "title-xxl": [
          "2rem",
          { lineHeight: "150%", fontWeight: "700", letterSpacing: "1px" },
        ],
        "title-xl": ["1.5625rem", { lineHeight: "150%", fontWeight: "700" }],
        "title-l": ["1.3125rem", { lineHeight: "150%", fontWeight: "700" }],
        "title-m": ["1.1875rem", { lineHeight: "150%", fontWeight: "700" }],
        "title-s": ["1.0625rem", { lineHeight: "150%", fontWeight: "700" }],
        "title-xs": ["0.9375rem", { lineHeight: "150%", fontWeight: "700" }],
        "body-l": ["1.1875rem", { lineHeight: "150%" }],
        "body-m": ["1.0625rem", { lineHeight: "150%" }],
        "body-s": ["0.9375rem", { lineHeight: "150%" }],
        "detail-l": ["1.0625rem", { lineHeight: "150%" }],
        "detail-m": ["0.9375rem", { lineHeight: "150%" }],
        "detail-s": ["0.8125rem", { lineHeight: "150%" }],
        "label-l": ["1.1875rem", { lineHeight: "150%" }],
        "label-m": ["1.0625rem", { lineHeight: "150%" }],
        "label-s": ["0.9375rem", { lineHeight: "150%" }],
        "label-xs": ["0.8125rem", { lineHeight: "150%" }],
        "links-l": ["1.1875rem", { lineHeight: "150%" }],
        "links-m": ["1.0625rem", { lineHeight: "150%" }],
        "links-s": ["0.9375rem", { lineHeight: "150%" }],
      },
    },
  },
  plugins: [],
};
export default config;
