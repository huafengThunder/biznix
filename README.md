- biznix（Biz + Trix）：表示“业务的工具”+“灵活”;主要用于TypeScript/JavaScript
- 文件大致目录结构
```
    biznix/
    ├── dist/               # 构建后的产物
    │   ├── biznix.cjs.js   # CommonJS 格式
    │   ├── biznix.esm.js   # ESM 格式
    │   └── biznix.umd.js   # UMD 格式（浏览器兼容）
    ├── src/                # 源代码
    │   ├── index.ts           # 主入口文件
    │   ├── object/            # 对象工具函数集合
    │   │   ├── customkey-replace.ts   # 遍历修改key
    │   ├── json/              # JSON工具函数集合
    ├── test/                  # 测试代码
    │   ├── object.test.js
    │   ├── json.test.js
```
- 编写规范
    - 文件名采用中划线
    - 方法采用小驼峰