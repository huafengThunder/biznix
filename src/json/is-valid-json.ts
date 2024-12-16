/**
 * 检查一个字符串是否是有效的 JSON 格式
 * @param {string} str - 要检查的字符串
 * @returns {boolean} - 如果字符串是有效的 JSON 格式，返回 true；否则返回 false
 */
export function isValidJSON(str: string): boolean {
  if (typeof str !== 'string') return false; // 确保输入是字符串
  try {
    JSON.parse(str);
    return true;
  } catch {
    return false;
  }
}
