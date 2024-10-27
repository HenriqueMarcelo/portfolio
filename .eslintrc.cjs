const vitest = require("eslint-plugin-vitest");

module.exports = {
  extends: [
    '@rocketseat/eslint-config/react',
    'plugin:testing-library/react',
    'plugin:vitest/recommended',
    'plugin:jest-dom/recommended',
  ],
  rules: {
    'no-restricted-globals': 1,
    'no-unused-vars': 1,
    'prefer-template': 1,
    'no-empty': 1,
    'jsx-a11y/alt-text': 0,
    "vitest/expect-expect": "off", // eliminate distracting red squiggles while writing tests
  },
  globals: {
    ...vitest.environments.env.globals,
  },
}
