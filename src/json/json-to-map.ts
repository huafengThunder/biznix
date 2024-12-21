/**
 * 将一个 JSON 字符串转换为 Map 对象，并保持键值对的插入顺序。
 * 支持数字、字符串、null 和嵌套对象的转换。
 *
 * @param {string} jsonString - 需要转换的 JSON 字符串。
 * @returns {Map<string, any>} 返回一个按插入顺序存储的 `Map` 对象。
 *
 * @example
 * const jsonString = '{"a":123,"b":{"nested1":456,"nested2":"text"},"c":789}';
 * const result = jsonToMapWithOrder(jsonString);
 * console.log(result);
 * // 输出: Map { 'a' => 123, 'b' => Map { 'nested1' => 456, 'nested2' => 'text' }, 'c' => 789 }
 */
export function jsonToMap(jsonString: string): Map<string, any> {
    // 正则用于匹配键值对，支持数字、字符串、null 和嵌套对象
    const regex = /"([^"]+)":\s*(?:"([^"]*)"|(\d+)|null|({[^}]*}))/g
    const entries: [string, any][] = []

    let match
    while ((match = regex.exec(jsonString)) !== null) {
        const key = match[1]
        let value: any

        // 处理值：如果是嵌套对象，则递归处理
        if (match[4]) {
            // 遇到嵌套对象，递归解析
            value = jsonToMap(match[4])
        } else if (match[2]) {
            // 如果是字符串
            value = match[2]
        } else if (match[3]) {
            // 如果是数字
            value = Number(match[3])
        } else {
            // 处理 null 值
            value = null
        }

        entries.push([key, value])
    }

    // 返回一个按插入顺序保持的 Map
    return new Map(entries)
}
