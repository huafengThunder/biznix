import { isEmpty } from '@src/process-type/is-empty'

describe('isEmpty function', () => {
    // 测试空字符串
    test('should return true for empty string', () => {
        expect(isEmpty('')).toBe(true)
    })

    // 测试 undefined
    test('should return true for undefined', () => {
        expect(isEmpty(undefined)).toBe(true)
    })

    // 测试 null
    test('should return true for null', () => {
        expect(isEmpty(null)).toBe(true)
    })

    // 测试 NaN
    test('should return true for NaN', () => {
        expect(isEmpty(NaN)).toBe(true)
    })

    // 测试空对象
    test('should return true for empty object', () => {
        expect(isEmpty({})).toBe(true)
    })

    // 测试空数组
    test('should return true for empty array', () => {
        expect(isEmpty([])).toBe(true)
    })

    // 测试非空数组
    test('should return false for non-empty array', () => {
        expect(isEmpty([1, 2, 3])).toBe(false)
    })

    // 测试非空对象
    test('should return false for non-empty object', () => {
        expect(isEmpty({ key: 'value' })).toBe(false)
    })

    // 测试数字（非空）
    test('should return false for number', () => {
        expect(isEmpty(42)).toBe(false)
    })

    // 测试布尔值（非空）
    test('should return false for boolean', () => {
        expect(isEmpty(true)).toBe(false)
        expect(isEmpty(false)).toBe(false)
    })

    // 测试非空字符串
    test('should return false for non-empty string', () => {
        expect(isEmpty('Hello')).toBe(false)
    })
})
