/**
 * 检查给定的日期值是否有效。
 *
 * @param {string | Date | null | undefined} date - 要检查的日期，可以是字符串、Date 对象、null 或 undefined。
 * @returns {boolean} 如果日期有效，则返回 true，否则返回 false。
 */
export function isValidDate(date: string | Date | null | undefined): boolean {
    // 如果是 null 或 undefined，返回 false
    if (date === null || date === undefined) {
        return false
    }

    // 如果是 Date 类型，检查其有效性
    if (date instanceof Date) {
        return !isNaN(date.getTime()) // 确保 Date 对象有效
    }

    // 如果是字符串，尝试将其解析为 Date 对象
    if (typeof date === 'string') {
        const parsedDate = new Date(date)
        // 如果字符串能被解析为有效日期，则返回 true
        // parsedDate.toString() !== 'Invalid Date' 是额外的保护，防止一些极特殊的无效日期字
        return !isNaN(parsedDate.getTime()) && parsedDate.toString() !== 'Invalid Date'
    }

    // 对于其他类型，返回 false
    return false
}
