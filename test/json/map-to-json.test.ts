import { mapToJson } from '@src/json/map-to-json'

describe('mapToJson function', () => {
    // 测试 1: 简单的 Map
    test('should correctly convert a simple Map to JSON', () => {
        const map1 = new Map()
        map1.set('name', 'Alice')
        map1.set('age', 30)

        const result = mapToJson(map1)
        expect(result).toBe('{"name":"Alice","age":30}')
    })

    // 测试 2: 嵌套 Map
    test('should correctly convert a Map with nested Map to JSON', () => {
        const map2 = new Map()
        map2.set('name', 'John')
        map2.set(
            'address',
            new Map([
                ['city', 'New York'],
                ['street', '123 Main St']
            ])
        )

        const result = mapToJson(map2)
        expect(result).toBe('{"name":"John","address":{"city":"New York","street":"123 Main St"}}')
    })

    // 测试 3: 嵌套数组和 Map
    // test('should correctly convert a Map with an array of Maps to JSON', () => {
    //     const map3 = new Map();
    //     map3.set("name", "Bob");
    //     map3.set("friends", [
    //         new Map([["name", "Alice"], ["age", 28]]),
    //         new Map([["name", "Charlie"], ["age", 32]])
    //     ]);

    //     const result = mapToJson(map3);
    //     expect(result).toBe('{"name":"Bob","friends":[{"name":"Alice","age":28},{"name":"Charlie","age":32}]}');
    // });

    // 测试 4: 数组中的基本类型
    test('should correctly convert a Map with an array of basic types to JSON', () => {
        const map4 = new Map()
        map4.set('hobbies', ['reading', 'sports', 'coding'])

        const result = mapToJson(map4)
        expect(result).toBe('{"hobbies":["reading","sports","coding"]}')
    })

    // 测试 5: 嵌套数组和基本类型
    // test('should correctly convert a Map with mixed array elements to JSON', () => {
    //     const map5 = new Map();
    //     map5.set("friends", [
    //         new Map([["name", "Alice"], ["age", 28]]),
    //         ["John", 30]
    //     ]);

    //     const result = mapToJson(map5);
    //     expect(result).toBe('{"friends":[{"name":"Alice","age":28},["John",30]]}');
    // });

    // 测试 6: 复杂嵌套结构
    test('should correctly convert a Map with complex nested structures to JSON', () => {
        const map6 = new Map()
        map6.set(
            'company',
            new Map([
                ['name', 'TechCorp'],
                ['location', 'San Francisco']
            ])
        )
        map6.set('employees', [
            new Map([
                ['name', 'John'],
                ['role', 'Developer']
            ]),
            new Map([
                ['name', 'Alice'],
                ['role', 'Designer']
            ])
        ])
        map6.set('locations', [
            'San Francisco',
            'New York',
            new Map([
                ['city', 'London'],
                ['country', 'UK']
            ])
        ])
        map6.set('1', 123)

        const result = mapToJson(map6)
        expect(result).toBe(
            '{"company":{"name":"TechCorp","location":"San Francisco"},"employees":[{"name":"John","role":"Developer"},{"name":"Alice","role":"Designer"}],"locations":["San Francisco","New York",{"city":"London","country":"UK"}],"1":123}'
        )
    })
})
