type NestedObject = { [key: string]: any } | any[] | string | number | boolean | null | undefined

/**
 * 递归地替换对象或数组中的键名
 * @param obj - 要进行处理的对象或数组
 * @param keyMapper - 一个函数，用于将原始键名映射为新的键名
 * @returns 返回一个新对象，所有键名都根据 `keyMapper` 进行了替换
 */
export const customKeyReplace = (obj: NestedObject, keyMapper: (key: string) => string): NestedObject => {
    // 处理基本类型和空值
    if (obj === null || typeof obj !== 'object') {
        return obj
    }

    // 如果是数组，递归处理每个元素
    if (Array.isArray(obj)) {
        return obj.map((item) => customKeyReplace(item, keyMapper))
    }

    // 如果是对象，递归处理每个键
    const newObj: NestedObject = {}
    for (const [key, value] of Object.entries(obj)) {
        const newKey = keyMapper(key)
        newObj[newKey] = customKeyReplace(value, keyMapper)
    }
    return newObj
}
