import { jsonToMap } from '@src/json/json-to-map'
import { jsonToArray } from '@src/json/json-to-map'

describe('jsonToMap', () => {
    test('正确转换简单的JSON对象', () => {
        const jsonString = '{"a": 123, "b": "test", "c": true, "d": null}'
        const result = jsonToMap(jsonString)
        expect(result.get('a')).toBe(123)
        expect(result.get('b')).toBe('test')
        expect(result.get('c')).toBe(true)
        expect(result.get('d')).toBeNull()
    })

    test('处理嵌套对象', () => {
        const jsonString = '{"a": 123, "b": {"nested1": 456, "nested2": "test"}}'
        const result = jsonToMap(jsonString)
        expect(result.get('a')).toBe(123)
        const nestedObject = result.get('b')
        expect(nestedObject).toBeInstanceOf(Map)
        expect(nestedObject?.get('nested1')).toBe(456)
        expect(nestedObject?.get('nested2')).toBe('test')
    })

    test('处理数组', () => {
        const jsonString = '{"a": [1, 2, 3], "b": ["test", "example"]}'
        const result = jsonToMap(jsonString)
        const arrayA = result.get('a')
        expect(arrayA).toEqual([1, 2, 3])
        const arrayB = result.get('b')
        expect(arrayB).toEqual(['test', 'example'])
    })

    test('处理混合数据类型的对象', () => {
        const jsonString = '{"a": 123, "b": true, "c": null, "d": [1, "test"]}'
        const result = jsonToMap(jsonString)
        expect(result.get('a')).toBe(123)
        expect(result.get('b')).toBe(true)
        expect(result.get('c')).toBeNull()
        expect(result.get('d')).toEqual([1, 'test'])
    })

    test('处理复杂的嵌套结构', () => {
        const jsonString = '{"a": {"nestedA": {"nestedB": [1, 2, 3]}}}'
        const result = jsonToMap(jsonString)
        const nestedA = result.get('a')
        expect(nestedA).toBeInstanceOf(Map)
        const nestedB = nestedA?.get('nestedA')
        expect(nestedB).toBeInstanceOf(Map)
        const arrayB = nestedB?.get('nestedB')
        expect(arrayB).toEqual([1, 2, 3])
    })

    test('处理无效输入', () => {
        const jsonString = '{"a": {"b": "value", "c": [1, 2, 3]}}'
        const result = jsonToMap(jsonString)
        expect(result.get('a')).toBeInstanceOf(Map)
        expect(result.get('a')?.get('c')).toEqual([1, 2, 3])
    })
})

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
