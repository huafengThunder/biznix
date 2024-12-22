import { jsonToMap } from '@src/json/json-to-map'

/**
 * 解析数组字符串并递归处理数组中的每个元素（可以是对象或基础类型）。
 * @param {string} arrayString - 需要解析的数组字符串。
 * @returns {any[]} 解析后的数组。
 */

export function jsonToArray(arrayString: string): any[] {
    const elementRegex = /\s*(?:"([^"]*)"|(\d+)|true|false|null|(\[.*?\])|({[^{}]*}))/g
    const elements: any[] = []
    const innerString = arrayString.slice(1, -1) // 去除最外层的 []
    let match

    while ((match = elementRegex.exec(innerString)) !== null) {
        let elementValue

        // 处理不同类型的数组元素
        if (match[4]) {
            elementValue = jsonToMap(match[4]) // 递归处理对象
        } else if (match[3]) {
            // 匹配数组
            elementValue = jsonToArray(match[3]) // 递归处理嵌套数组
        } else if (match[1]) {
            // 处理字符串
            elementValue = match[1]
        } else if (match[2]) {
            // 处理数字
            elementValue = Number(match[2])
        } else if (match[0].includes('true') || match[0].includes('false')) {
            // 处理布尔值
            elementValue = match[0].includes('true')
        } else if (match[0].includes('null')) {
            // 处理 null
            elementValue = null
        }

        elements.push(elementValue) // 将元素加入数组
    }

    return elements
}
