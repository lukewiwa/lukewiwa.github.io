const colors = require("tailwindcss/colors");

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: { enabled: true, content: ["./**/*.vue"] },
  theme: {
    extend: {
      colors: {
        teal: colors.teal,
      },
    },
  },
  variants: {},
  plugins: [],
};
