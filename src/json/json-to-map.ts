/**
 * 将一个 JSON 字符串转换为 Map 对象，并保持键值对的插入顺序。
 * 支持对象、数组、字符串、数字、布尔值和 null 的转换。
 *
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

/**
 * 解析数组字符串并递归处理数组中的每个元素（可以是对象或基础类型）。
 *
 * @param {string} arrayString - 需要解析的数组字符串。
 * @returns {any[]} 解析后的数组。
 */
/**
 * 解析数组字符串并递归处理数组中的每个元素（可以是对象或基础类型）。
 *
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
