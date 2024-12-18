# npm发包流程
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
    - 引入路径别名✔️
    - 单元测试引入路径别名✔️
    - 引入 prettier 和 eslint