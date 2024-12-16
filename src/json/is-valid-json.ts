/**
 * 检查一个字符串是否是有效的 JSON 格式
 * @param {any} str - 要检查的变量
 * @returns {boolean} - 如果字符串是有效的 JSON 格式，返回 true；否则返回 false
 */
export function isValidJSON(str: any) {
  try {
    JSON.parse(str);
    return true;
  } catch (e) {
    return false;
  }
}
