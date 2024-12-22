import { jsonToArray } from '@src/json/json-to-array'

/**
 * 将一个 JSON 字符串转换为 Map 对象，并保持键值对的插入顺序。
 * 支持对象、数组、字符串、数字、布尔值和 null 的转换。
 * @param {string} jsonString - 需要转换的 JSON 字符串。
 * @returns {Map<string, any>} 返回一个按插入顺序存储的 `Map` 对象。
 */

export function jsonToMap(jsonString: string): Map<string, any> {
    // 正则用于匹配键值对，支持对象、数组、字符串、数字、布尔值和 null
    const regex = /"([^"]+)":\s*(?:"([^"]*)"|(\d+)|true|false|null|(\[.*?\])|({[^}]*}))/g
    const entries: [string, any][] = []
    let match: RegExpExecArray | null

    while ((match = regex.exec(jsonString)) !== null) {
        const key = match[1]
        let value: any

        // 处理嵌套对象
        if (match[5]) {
            value = jsonToMap(match[5]) // 递归处理对象
        }
        // 处理数组
        else if (match[4]) {
            value = jsonToArray(match[4]) // 递归处理数组
        }
        // 处理字符串
        else if (match[2]) {
            value = match[2]
        }
        // 处理数字
        else if (match[3]) {
            value = Number(match[3])
        }
        // 处理布尔值
        else if (match[0].includes('true') || match[0].includes('false')) {
            value = match[0].includes('true') // 布尔值
        }
        // 处理 null
        else if (match[0].includes('null')) {
            value = null // 处理 null 值
        }

        entries.push([key, value]) // 将键值对加入 entries
    }

    // 返回一个按插入顺序保持的 Map
    return new Map(entries)
}
