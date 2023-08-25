export default function swapItemsInArray(array, indexA, indexB) {
  const items = array.slice()
  const itemA = items[indexA]
  items[indexA] = items[indexB]
  items[indexB] = itemA
  return items
}
