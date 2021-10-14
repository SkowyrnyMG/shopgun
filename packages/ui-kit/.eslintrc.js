module.exports = {
  root: true,
  ignorePatterns: ['node_modules/*', '.next'],
  extends: ['../../.eslintrc.base.js'],
  plugins: ['@typescript-eslint'],
  parserOptions: {
    project: './tsconfig.json',
  },
};
