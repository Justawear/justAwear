module.exports = {
  content: [
    "./public/**/*.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  mode: 'jit',
  theme: {
    extend: {},
    screens: {
      xl: {max: "1279px"},
      lg: {max: "1023px"},
      md: {max: "767px"},
      sm: {max: "639px"}
    }
  },
  content: [],
  variants: {},
  plugins: [
  ],
}
