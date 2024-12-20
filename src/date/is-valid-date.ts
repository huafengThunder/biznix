export function isValidDate(date: string | Date | null | undefined) {
    // 如果是 null 或 undefined，返回 false
    if (date === null || date === undefined) {
        return false
    }

    // 如果是 Date 类型，检查其有效性
    if (date instanceof Date) {
        return !isNaN(date.getTime())
    }

    // 如果是字符串，尝试将其解析为 Date 对象
    const parsedDate = new Date(date)
    return !isNaN(parsedDate.getTime())
}
