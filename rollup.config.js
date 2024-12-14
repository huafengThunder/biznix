import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/index.ts', // TypeScript 文件作为入口
  output: [
    {
      file: 'dist/my-ts-library.cjs.js',  // CommonJS 格式
      format: 'cjs',
      sourcemap: true
    },
    {
      file: 'dist/my-ts-library.esm.js',  // ESM 格式
      format: 'esm',
      sourcemap: true
    },
    {
      file: 'dist/my-ts-library.umd.js',  // UMD 格式
      format: 'umd',
      name: 'MyTsLibrary', // 库的全局变量名
      sourcemap: true
    }
  ],
  plugins: [
    resolve(), // 解析 `node_modules` 中的模块
    commonjs(), // 转换 CommonJS 模块为 ES6
    typescript({ tsconfig: './tsconfig.json' }) // 使用 TypeScript 编译
  ]
};
