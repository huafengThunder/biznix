- biznix（Biz + Trix）：表示“业务的工具”+“灵活”;主要用于JavaScript
- 文件大致目录结构
```
    util-tool/
    ├── dist/                  # 构建后的产物
    │   ├── util-tool.cjs.js   # CommonJS 格式
    │   ├── util-tool.esm.js   # ESM 格式
    │   └── util-tool.umd.js   # UMD 格式（浏览器兼容）
    ├── src/                   # 源代码
    │   ├── index.js           # 主入口文件
    │   ├── utils/             # 工具函数集合
    │   │   ├── deepClone.js   # 深拷贝函数
    │   │   ├── debounce.js    # 防抖函数
    │   │   ├── throttle.js    # 节流函数
    │   │   └── index.js       # 汇总工具函数
    ├── test/                  # 测试代码
    │   ├── deepClone.test.js
    │   ├── debounce.test.js
    │   └── throttle.test.js
```
- 编写规范
    - 文件名采用中划线
    - 方法采用小驼峰