module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: "airbnb",
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "no-confusing-arrow": "off",
    "no-nested-ternary": "off",
    "react/prop-types": "off",
    "react/jsx-filename-extension": "off",
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double"],
    semi: ["error", "never"],
  },
}
