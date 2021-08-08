module.exports = {
  extends: ['rami'],
  ignorePatterns: ['/*config.js', '/*rc.js'],
  parserOptions: { project: './tsconfig.eslint.json' },
  overrides: [
    {
      files: ['jest.*', '*.config.*', '*.stories.tsx', 'TestUtils.ts'],
      rules: { 'import/no-extraneous-dependencies': 0 }
    },
    {
      files: ['*.test.ts*'],
      rules: { 'max-lines-per-function': 0 }
    }
  ],
  rules: {
    'max-lines-per-function': ['error', { max: 75, skipComments: true }],
    'react/jsx-props-no-spreading': 0,
    'react/prop-types': 0
  }
};
