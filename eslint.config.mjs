import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
  recommendedConfig: {},
})

const eslintConfig = [
  ...compat.config({
    extends: ['eslint:recommended', 'next/core-web-vitals', 'next/typescript', 'prettier'],
  }),
]

eslintConfig.push({
  ignores: ["node_modules/", ".next/", "out/"],
});
eslintConfig.push({
  rules: {
    'no-unused-vars': 'warn',
    indent: ['error', 2],
    "import/order": [
      'error',
      {
        'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
      },
    ],
  },
});

export default eslintConfig;