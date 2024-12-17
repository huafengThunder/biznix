import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import deletePlugin from 'rollup-plugin-delete';  // 引入 rollup-plugin-delete 插件
import terser from '@rollup/plugin-terser'; // 压缩插件
import alias from '@rollup/plugin-alias'; // Import alias plugin
import path from 'path';

// 获取当前目录的路径（Rollup 处理路径时可能受到平台（Windows）路径格式的影响。路径多余 E:\E:\ 可能是路径拼接时重复添加了盘符）
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  input: 'src/index.ts',  // 使用 TypeScript 作为入口
  output: [
    {
      file: 'dist/biznix.cjs.js',  // CommonJS 格式
      format: 'cjs',
      sourcemap: true,
      plugins: [terser()]
    },
    {
      file: 'dist/biznix.esm.js',  // ES 模块格式
      format: 'esm',
      sourcemap: true,
      plugins: [terser()]
    },
    {
      file: 'dist/biznix.umd.js',  // UMD 格式
      format: 'umd',
      name: 'Biznix',  // UMD 格式的全局变量名
      sourcemap: true,
      plugins: [terser()]
    },
  ],
  // 插件执行顺序遵循声明顺序，具体阶段上会有细节区别
  plugins: [
    deletePlugin({ targets: 'dist/*' }),  // 在构建前删除 dist 目录中的所有文件
    alias({
      entries: [
        { find: '@src', replacement: path.resolve(__dirname, 'src') }
      ]
    }),
    resolve(),  // 解析 node_modules 中的模块
    commonjs(),  // 转换 CommonJS 模块为 ES6
    // 使用 TypeScript 编译
    typescript({
      tsconfig: './tsconfig.json',
      useTsconfigDeclarationDir: true, // 使用 tsconfig.json 中的 declarationDir
    }),
  ],
};
