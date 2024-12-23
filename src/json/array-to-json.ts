import { mapToJson } from '@src/json/map-to-json'

/**
 * 将数组还原为 JSON 字符串。
 * @param {any[]} array - 需要还原的数组。
 * @returns {string} 返回 JSON 字符串表示的数组。
 */
export function arrayToJson(array: any[]): string {
    const jsonArray = array.map((element) => {
        if (element instanceof Map) {
            // 递归处理 Map 类型
            return mapToJson(element)
        } else if (Array.isArray(element)) {
            // 递归处理嵌套数组
            return arrayToJson(element)
        } else {
            // 基础类型直接返回
            return element
        }
    })

    // 返回数组的 JSON 字符串
    return `[${jsonArray.join(',')}]`
}
