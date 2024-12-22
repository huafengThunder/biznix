export function mapToJson(map: Map<any, any>): string {
    const obj: Record<string, any> = {}

    // 保证插入顺序
    Array.from(map.entries()).forEach(([key, value]) => {
        let jsonKey = key // 对于 Map 中的键，可以使用它本身作为键（假设是字符串或可以转换为字符串）

        // 处理键为对象或其他复杂类型的情况
        if (typeof key !== 'string') {
            jsonKey = JSON.stringify(key)
        }

        // 对值进行递归转换
        let jsonValue
        if (value instanceof Map) {
            // 如果值是一个 Map，递归转换
            jsonValue = mapToJson(value) // 递归调用转换函数
        } else if (Array.isArray(value)) {
            // 如果值是数组，递归处理数组
            jsonValue = value.map((item) => {
                if (item instanceof Map) {
                    return mapToJson(item) // 如果数组元素是 Map，递归转换
                } else if (Array.isArray(item)) {
                    return mapToJson(new Map(item.map((i, idx) => [idx, i]))) // 如果数组元素是数组，递归转换
                } else {
                    return item // 否则直接返回元素
                }
            })
        } else if (typeof value === 'object' && value !== null) {
            // 如果值是对象，递归处理对象
            jsonValue = mapToJson(new Map(Object.entries(value)))
        } else {
            // 否则直接使用原值（如基本类型或 null）
            jsonValue = value
        }

        obj[jsonKey] = jsonValue
    })

    return JSON.stringify(obj)
}
