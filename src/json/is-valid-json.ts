/**
 * Checks whether a given string is a valid JSON format.
 * @param {string} jsonString - The string to check.
 * @returns {boolean} - Returns true if the string is valid JSON; otherwise, false.
 */
export function isValidJSON(jsonString: string): boolean {
    if (typeof jsonString !== 'string') return false // Ensure the input is a string
    try {
        JSON.parse(jsonString)
        return true
    } catch {
        return false
    }
}
