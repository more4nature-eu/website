module.exports = {
  extends: [
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['prettier'],
  rules: {
    '@typescript-eslint/no-unused-vars': ['warn', { ignoreRestSiblings: true }],
    'import/order': [
      'warn',
      {
        groups: ['builtin', 'external', 'parent', 'sibling', 'index', 'internal', 'object', 'type'],
        'newlines-between': 'always',
      },
    ],
    'no-console': ['warn'],
    'no-debugger': ['warn'],
  },
  ignorePatterns: ['*.md'],
};
