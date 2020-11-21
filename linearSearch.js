const linearSearch = (list, item) => {
  for (const [i, element] of list.entries()) {
    if (element === item) {
      return i
    }
  }
}

linearSearch(['a', 'b', 'c', 'd'], 'd')

// The algorithm complixy is O(n)
