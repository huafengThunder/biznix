/**
 * 将一个 JSON 字符串转换为 Map 对象，并保持键值对的插入顺序。
 * 支持数字、字符串、null、布尔值、NaN、Infinity、-Infinity、数组和嵌套对象的转换。
 *
 * @param {string} jsonString - 需要转换的 JSON 字符串。
 * @returns {Map<string, any>} 返回一个按插入顺序存储的 `Map` 对象。
 */
export function jsonToMap(jsonString: string): Map<string, any> {
    // 正则用于匹配键值对，支持数字、字符串、null、布尔值、NaN、Infinity、-Infinity、数组和嵌套对象
    const regex = /"([^"]+)":\s*(?:"([^"]*)"|(\d+)|true|false|null|NaN|Infinity|-Infinity|(\[.*?\])|({[^}]*}))/g
    const entries: [string, any][] = []

    let match
    while ((match = regex.exec(jsonString)) !== null) {
        const key = match[1]
        let value: any

        // 处理值：如果是嵌套对象，则递归处理
        if (match[5]) {
            // 遇到嵌套对象，递归解析
            value = jsonToMap(match[5])
        } else if (match[4]) {
            // 如果是数组，解析数组字符串
            value = JSON.parse(match[4]) // 使用 JSON.parse 解析数组
        } else if (match[2]) {
            // 如果是字符串
            value = match[2]
        } else if (match[3]) {
            // 如果是数字
            value = Number(match[3])
        } else if (match[6] === 'true' || match[6] === 'false') {
            // 如果是布尔值
            value = match[6] === 'true'
        } else if (match[6] === 'NaN') {
            // 如果是 NaN 字符串，转换为 NaN
            value = NaN
        } else if (match[6] === 'Infinity') {
            // 如果是 Infinity 字符串，转换为 Infinity
            value = Infinity
        } else if (match[6] === '-Infinity') {
            // 如果是 -Infinity 字符串，转换为 -Infinity
            value = -Infinity
        } else {
            // 处理 null 值
            value = null
        }

        entries.push([key, value])
    }

    // 返回一个按插入顺序保持的 Map
    return new Map(entries)
}
