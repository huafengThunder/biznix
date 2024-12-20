import { isValidDate } from '@src/date/is-valid-date'

describe('isValidDate function', () => {
    // 测试：传入 null 时，函数应该返回 false
    test('should return false for null', () => {
        expect(isValidDate(null)).toBe(false)
    })

    // 测试：传入 undefined 时，函数应该返回 false
    test('should return false for undefined', () => {
        expect(isValidDate(undefined)).toBe(false)
    })

    // 测试：传入空字符串时，函数应该返回 false
    test('should return false for empty string', () => {
        expect(isValidDate('')).toBe(false)
    })

    // 测试：传入无效的日期字符串时，函数应该返回 false
    test('should return false for invalid date string', () => {
        expect(isValidDate('invalid date')).toBe(false)
    })

    // 测试：传入有效的 Date 对象时，函数应该返回 true
    test('should return true for valid date object', () => {
        const validDate = new Date('2024-12-20')
        expect(isValidDate(validDate)).toBe(true)
    })

    // 测试：传入无效的 Date 对象时，函数应该返回 false
    test('should return false for invalid Date object', () => {
        const invalidDate = new Date('invalid date')
        expect(isValidDate(invalidDate)).toBe(false)
    })

    // 测试：传入由 Date 对象构造的有效日期时，函数应该返回 true
    test('should return true for a valid date constructed from a Date object', () => {
        const validDate = new Date()
        expect(isValidDate(validDate)).toBe(true)
    })

    // 测试：传入非 Date 对象（如字符串）时，函数应该返回 false
    test('should return false for non-Date object', () => {
        const notDate = '2024-12-20'
        expect(isValidDate(notDate)).toBe(true)
    })
})
