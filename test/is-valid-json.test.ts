// isValidJSON.test.ts
import { isValidJSON } from '../src/json/is-valid-json';

describe('isValidJSON', () => {
  // 测试输入是有效 JSON 字符串的情况
  it('should return true for valid JSON strings', () => {
    expect(isValidJSON('{}')).toBe(true); // 空对象
    expect(isValidJSON('[]')).toBe(true); // 空数组
    expect(isValidJSON('{"key":"value"}')).toBe(true); // 简单对象
    expect(isValidJSON('[1, 2, 3]')).toBe(true); // 数字数组
    expect(isValidJSON('{"key": [1, 2, 3]}')).toBe(true); // 嵌套结构
    expect(isValidJSON('true')).toBe(true); // 布尔值
    expect(isValidJSON('null')).toBe(true); // null
    expect(isValidJSON('"string"')).toBe(true); // 字符串
    expect(isValidJSON('123')).toBe(true); // 数字
  });

  // 测试输入是无效 JSON 字符串的情况
  it('should return false for invalid JSON strings', () => {
    expect(isValidJSON('{key: value}')).toBe(false); // 缺少引号
    expect(isValidJSON('{"key": value}')).toBe(false); // 值缺少引号
    expect(isValidJSON('{[1, 2, 3]}')).toBe(false); // 非法格式
    expect(isValidJSON('{"key": "value",}')).toBe(false); // 多余的逗号
    expect(isValidJSON('{"key": "value"')).toBe(false); // 缺少右括号
    expect(isValidJSON('')).toBe(false); // 空字符串
  });

  // 测试输入不是字符串的情况
  it('should return false for non-string inputs', () => {
    expect(isValidJSON(null as any)).toBe(false); // null
    expect(isValidJSON(undefined as any)).toBe(false); // undefined
    expect(isValidJSON(123 as any)).toBe(false); // 数字
    expect(isValidJSON(true as any)).toBe(false); // 布尔值
    expect(isValidJSON({} as any)).toBe(false); // 对象
    expect(isValidJSON([] as any)).toBe(false); // 数组
  });

  // 边界条件测试
  it('should handle edge cases correctly', () => {
    expect(isValidJSON(' ')).toBe(false); // 仅空格
    expect(isValidJSON('\n')).toBe(false); // 换行符
    expect(isValidJSON('[null]')).toBe(true); // 数组包含有效值
    expect(isValidJSON('{"nested": {"key": "value"}}')).toBe(true); // 深层嵌套
    expect(isValidJSON('"123"')).toBe(true); // JSON 字符串
  });
});
