import { jsonToArray } from '@src/json/json-to-array'

describe('jsonToArray', () => {
    test('解析简单数组', () => {
        const arrayString = '[1, "test", true, null]'
        const result = jsonToArray(arrayString)
        expect(result).toEqual([1, 'test', true, null])
    })

    test('解析嵌套数组', () => {
        const arrayString = '[1, [2, 3], "test"]'
        const result = jsonToArray(arrayString)
        expect(result).toEqual([1, [2, 3], 'test'])
    })

    test('处理空数组', () => {
        const arrayString = '[]'
        const result = jsonToArray(arrayString)
        expect(result).toEqual([])
    })

    test('解析布尔值和 null 的数组', () => {
        const arrayString = '[true, false, null]'
        const result = jsonToArray(arrayString)
        expect(result).toEqual([true, false, null])
    })
})
