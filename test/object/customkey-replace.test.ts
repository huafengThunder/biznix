import { customKeyReplace } from '@src/object/customkey-replace'

describe('customKeyReplace', () => {
  // 测试基本类型
  it('should return basic types unchanged', () => {
    expect(customKeyReplace(42, (key) => key.toUpperCase())).toBe(42);
    expect(customKeyReplace('string', (key) => key.toUpperCase())).toBe('string');
    expect(customKeyReplace(null, (key) => key.toUpperCase())).toBeNull();
    expect(customKeyReplace(undefined, (key) => key.toUpperCase())).toBeUndefined();
    expect(customKeyReplace(true, (key) => key.toUpperCase())).toBe(true);
  });

  // 测试数组
  it('should handle arrays and apply keyMapper to nested objects', () => {
    const input = [{ key1: 'value1' }, { key2: 'value2' }];
    const keyMapper = (key: string) => `new_${key}`;
    const expectedOutput = [{ new_key1: 'value1' }, { new_key2: 'value2' }];
    expect(customKeyReplace(input, keyMapper)).toEqual(expectedOutput);
  });

  // 测试对象
  it('should replace keys in an object using the keyMapper', () => {
    const input = { key1: 'value1', key2: { key3: 'value3' } };
    const keyMapper = (key: string) => key.toUpperCase();
    const expectedOutput = { KEY1: 'value1', KEY2: { KEY3: 'value3' } };
    expect(customKeyReplace(input, keyMapper)).toEqual(expectedOutput);
  });

  // 测试嵌套对象
  it('should handle deeply nested objects and arrays', () => {
    const input = {
      key1: 'value1',
      key2: {
        key3: ['value3', { key4: 'value4' }],
      },
    };
    const keyMapper = (key: string) => `new_${key}`;
    const expectedOutput = {
      new_key1: 'value1',
      new_key2: {
        new_key3: ['value3', { new_key4: 'value4' }],
      },
    };
    expect(customKeyReplace(input, keyMapper)).toEqual(expectedOutput);
  });

  // 测试空对象和数组
  it('should handle empty objects and arrays', () => {
    expect(customKeyReplace({}, (key) => `new_${key}`)).toEqual({});
    expect(customKeyReplace([], (key) => `new_${key}`)).toEqual([]);
  });

  // 测试无效的 keyMapper
  it('should throw an error if keyMapper is not a function', () => {
    expect(() => customKeyReplace({ key: 'value' }, null as any)).toThrow();
    expect(() => customKeyReplace({ key: 'value' }, undefined as any)).toThrow();
  });
});
