export default {
    // 设置 Jest 路径别名，让 @src 指向 src 目录
    moduleNameMapper: {
        '^@src/(.*)$': '<rootDir>/src/$1',
    },
    // 只让 Jest 在 test 目录下查找测试文件
    roots: ['<rootDir>/test'],

    // Jest 运行环境设置为 Node
    testEnvironment: 'node',

    // 使用 ts-jest 处理 TypeScript 文件
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
};
