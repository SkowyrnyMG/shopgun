module.exports = {
  extends: ['../../.eslintrc.base.js', 'next/core-web-vitals', 'plugin:import/typescript'],
  plugins: ['@typescript-eslint', 'prettier'],
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
  },
  rules: {
    'jsx-a11y/anchor-is-valid': [
      2,
      {
        components: ['Link'],
        specialLink: ['to', 'hrefLeft', 'hrefRight', 'url'],
        aspects: ['noHref', 'invalidHref', 'preferButton'],
      },
    ],
  },
};
