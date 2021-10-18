module.exports = {
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': 'identity-obj-proxy',
  },
  testMatch: [
    '**/__tests__/*.tsx',
    '**/*.test.tsx',
    '**/__tests__/*.ts',
    '**/*.test.ts',
    '**/__tests__/*.js',
    '**/*.test.js',
  ],
  collectCoverageFrom: ['*.js', '*.jsx', '*.ts', '*.tsx'],
  testEnvironment: 'jsdom',
};
