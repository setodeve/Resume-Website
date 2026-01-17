import nextConfig from 'eslint-config-next'
import eslintConfigPrettier from 'eslint-config-prettier'

const eslintConfig = [
  ...nextConfig,
  eslintConfigPrettier,
  {
    ignores: ['node_modules/', '.next/', 'out/'],
  },
  {
    rules: {
      'no-unused-vars': 'warn',
      'react-hooks/set-state-in-effect': 'warn',
    },
  },
]

export default eslintConfig
