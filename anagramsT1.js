function anagrams(stringA, stringB) {
  // Sanitize string inputs
  stringA = stringA.toLowerCase().replace(/[\W_]+/g, '')
  stringB = stringB.toLowerCase().replace(/[\W_]+/g, '')

  if (stringA.length !== stringB.length) return false

  const stringACharCount = {}

  for (let i = 0; i < stringA.length; i++) {
    const aCount = stringA[i]
    stringACharCount[aCount] = stringACharCount[aCount] + 1 || 1
  }

  for (let i = 0; i < stringB.length; i++) {
    const bChar = stringB[i]

    if (!stringACharCount[bChar]) {
      return false
    } else {
      stringACharCount[bChar]--
    }
  }

  return true
}
