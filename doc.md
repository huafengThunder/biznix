## npm发包流程
- npm run build
- npm login
- npm publish
- npm 包版本更新
    - npm version patch   # 小版本更新
    - npm version minor   # 次版本更新
    - npm version major   # 主版本更新
- 本地npm包调试
    - npm link (将包链接到全局)
    - npm link biznix (需要调用的项目中使用该命令，能将本地的包链接到你的项目的 node_modules 目录。)
        
## 编写规范
    - 文件名采用中划线
    - 方法采用小驼峰

## task
- 引入单元测试✔️
- src目录引入路径别名✔️
- 单元测试文件引入路径别名✔️
- src目录、单元测试文件引入 prettier 和 eslint✔️
- 引入husky(管理Git hooks,在提交、推送等操作前触发自定义的脚本)
    - 配置git config core.hookspath .husky路径 ✔️
    - lint-stage(代码检查和格式化)限制提交规范符合eslint ✔️
    - commitlint(处理提交消息格式)限制commit的内容格式 ✔️
        - [约定式提交规范](https://www.conventionalcommits.org/zh-hans/v1.0.0/#%e7%ba%a6%e5%ae%9a%e5%bc%8f%e6%8f%90%e4%ba%a4%e8%a7%84%e8%8c%83)
- 根据目录生成目录结构图,放在文档中

#### 文件大致目录结构
```
    biznix/
    ├── dist/                                   # 构建后的产物
    │   ├── biznix.cjs.js                       # CommonJS 格式
    │   ├── biznix.esm.js                       # ESM 格式
    │   └── biznix.umd.js                       # UMD 格式（浏览器兼容）
    ├── src/                                    # 源代码
    │   ├── index.ts                            # 主入口文件
    │   ├── object/                             # 对象工具函数集合
    │   │   ├── customkey-replace.ts            # 遍历修改key
    │   ├── json/                               # JSON工具函数集合
    │   │   ├── is-valid-json.ts                # 判断是否是JSON
    │   ├── ....
    ├── test/                                   # 测试代码
    │   ├── object/                             # 对象工具函数集合(单测)
    │   │   ├── customkey-replace.test.js       # 遍历修改key(单测)
    │   ├── json/                               # JSON工具函数集合(单测)
    │   │   ├── is-valid-json.ts                # 判断是否是JSON(单测)
    │   ├── ....
```