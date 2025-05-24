// This goes inside the <script> where tailwind.config is defined
tailwind.config = {
  darkMode: "class", // THIS IS CRUCIAL
  theme: {
    extend: {
      colors: {
        // Core Palette (remains the same)
        "brand-blue": "#0058CC",
        "brand-green": "#aeff00",
        "brand-green-dark": "#079D5E",
        "brand-muted-blue": "#485C95",
        "brand-light-gray-original": "#F6F5F5", // Keeping original name for clarity if needed

        // Light Theme Semantic Colors
        "bg-light": "#F6F5F5", // Main background for light theme
        "surface-light": "#FFFFFF", // Cards/surfaces for light theme
        "text-light-primary": "#222222", // Primary text for light theme (darker for contrast)
        "text-light-secondary": "#555555", // Secondary text for light theme
        "border-light": "#DDDDDD", // Borders for light theme
        "accent-glow-light": "rgba(0, 88, 204, 0.2)", // Blue glow for light theme

        // Dark Theme Semantic Colors
        "bg-dark": "#1A1A1A", // Main background for dark theme
        "surface-dark": "#2C2C2C", // Cards/surfaces for dark theme
        "text-dark-primary": "#F6F5F5", // Primary text for dark theme (your light gray)
        "text-dark-secondary": "rgba(246, 245, 245, 0.7)", // Secondary text for dark theme
        "border-dark": "rgba(72, 92, 149, 0.3)", // Borders for dark theme
        "accent-glow-dark": "rgba(22, 211, 118, 0.3)", // Green glow for dark theme
      },
      fontFamily: {
        sans: ["Syne", "sans-serif"],
      },
    },
  },
};
