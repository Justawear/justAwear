const purgecss = require("@fullhuman/postcss-purgecss")({
  content: [
    "./public/**/*.html",
    "./src/**/*.jsx",
  ],
  defaultExtractor: content => {
    const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || {};
    const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || {};
    return broadMatches.concat(innerMatches);
  }
});

module.exports = {
  plugins: [
    require("postcss-import"),
    require("tailwindcss"),
    require("autoprefixer"),
    ...(process.env.NODE_ENV === "production" ? [purgecss] : []),
  ]
};
