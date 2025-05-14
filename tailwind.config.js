/** @type {import('tailwindcss').Config} */ const {
  purple,
} = require("nativewind/src/metro/picocolors");
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./App.tsx", "./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        lafise: {
          primary: "#018765",
          light: "#33BA75",
        },
        bg_icon: {
          green: "#E6F3F0",
          orange: "#FFF3E9",
          blue: "#E6F7FD",
          purple: "#EAE6F3",
        },
        icon: {
          green: "#018765",
          orange: "#E8781C",
          blue: "#0079A8",
          purple: "#52169E",
        },
      },
      fontFamily: {
        sans: ["OpenSans", "sans-serif"],
        "sans-medium": ["OpenSansMedium", "sans-serif"],
        "sans-semibold": ["OpenSansSemiBold", "sans-serif"],
        "sans-bold": ["OpenSansBold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
