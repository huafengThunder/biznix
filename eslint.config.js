import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const tsPlugin = require('@typescript-eslint/eslint-plugin');
const tsParser = require('@typescript-eslint/parser');
const prettierPlugin = require('eslint-plugin-prettier');
const jestPlugin = require('eslint-plugin-jest'); // Added Jest plugin

export default [
  {
    ignores: ['node_modules/', 'dist/'], // 忽略的目录
  },
  {
    files: ['src/**/*.{js,ts}', 'test/**/*.{js,ts}'], // 需要校验的文件
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2020, // 支持 ECMAScript 2020
        sourceType: 'module', // 使用 ES 模块
      },
      globals: {
        'jest': 'readonly', // Make Jest globals available
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,  // TypeScript 插件
      'prettier': prettierPlugin,      // Prettier 插件
      'jest': jestPlugin,              // Jest 插件
    },
    rules: {
      ...tsPlugin.configs.recommended.rules, // 使用 TypeScript 推荐规则
      '@typescript-eslint/no-unused-vars': 'warn', // 示例规则
      '@typescript-eslint/explicit-module-boundary-types': 'off', // 示例规则
      '@typescript-eslint/no-explicit-any': 'off', // 禁用 any 类型检查
      'prettier/prettier': 'error', // 仅启用 Prettier 插件来格式化代码
      'jest/valid-expect': 'error', // 添加 Jest 规则（如果需要）
    },
  },
];
