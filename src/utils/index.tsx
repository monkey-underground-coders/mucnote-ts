export const getShortString = (str: string | null) => {
  if (!str) {
    return '...'
  }
  const maxLen = 80
  const strLen = str.length
  const newString = str.substr(0, maxLen)
  return `${newString}${strLen > maxLen ? '...' : ''}`
}
