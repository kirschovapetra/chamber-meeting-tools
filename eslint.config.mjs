import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { FlatCompat } from '@eslint/eslintrc';
import recommendedConfig from 'eslint-plugin-prettier/recommended';

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  ...recommendedConfig,
  ...compat.config({
    extends: ['next', 'prettier'],
    rules: {
      'no-console': 'warn', // Warning for console.log
      quotes: ['error', 'double'], // Enforce double quotes
      'prettier/prettier': 'error', // Prettier errors show up in ESLint output
    },
  }),
  globalIgnores([
    // Default ignores of eslint-config-next:
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
    'node_modules/**',
  ]),
]);

export default eslintConfig;
