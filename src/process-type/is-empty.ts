export function isEmpty(value: string | undefined | null | object | any[] | number | boolean): boolean {
    // 判断空字符串、undefined、null 和 NaN
    if (value === '' || value === undefined || value === null || Number.isNaN(value)) {
        return true
    }

    // 判断空对象：对象是空的，并且是非 null 的对象
    if (typeof value === 'object' && value !== null) {
        // 对象为空时，返回 true
        return Object.keys(value).length === 0
    }

    // 判断空数组
    if (Array.isArray(value)) {
        return value.length === 0
    }

    // 默认返回 false，表示其他类型的值（非空）
    return false
}
