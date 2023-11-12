module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      keyframes: {
        typingCursor: {
          from: {
            borderRight: "2px solid white",
          },
          to: { borderRight: "2px solid black" },
        },
      },
      animation: {
        typingCursor: "typingCursor 1s linear infinite",
      },
    },
  },
  plugins: [],
};
