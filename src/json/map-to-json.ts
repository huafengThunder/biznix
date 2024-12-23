import { arrayToJson } from '@src/json/array-to-json'

/**
 * 将 Map 对象还原为 JSON 字符串。
 * 支持 Map 中的嵌套对象、数组及基础数据类型。
 * @param {Map<string, any>} map - 需要还原的 Map 对象。
 * @returns {string} 返回 JSON 字符串。
 */
export function mapToJson(map: Map<string, any>): string {
    const jsonObject: Record<string, any> = {}

    // 遍历 Map 中的每个键值对
    for (const [key, value] of map.entries()) {
        if (value instanceof Map) {
            // 递归处理 Map 类型
            jsonObject[key] = mapToJson(value)
        } else if (Array.isArray(value)) {
            // 递归处理数组类型
            jsonObject[key] = arrayToJson(value)
        } else if (value === null) {
            jsonObject[key] = null
        } else if (typeof value === 'boolean' || typeof value === 'number' || typeof value === 'string') {
            // 基础类型（布尔、数字、字符串）
            jsonObject[key] = value
        }
    }

    // 将结果转为 JSON 字符串并返回
    return JSON.stringify(jsonObject)
}
