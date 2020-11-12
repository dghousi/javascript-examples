//anagrams('Test', 'Tset');
function anagrams(stringA, stringB) {
  // Sanitize string inputs
  stringA = stringA.toLowerCase().replace(/[\W_]+/g, '')
  stringB = stringB.toLowerCase().replace(/[\W_]+/g, '')

  if (stringA.length !== stringB.length) return false

  const stringASorted = stringA.split('').sort().join('')
  const stringBSorted = stringB.split('').sort().join('')

  return stringASorted === stringBSorted
}
