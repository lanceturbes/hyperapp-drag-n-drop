export default function swapItemsInArray(array, indexA, indexB) {
  console.log(array);
  const items = array.slice();
  const itemA = items[indexA];
  items[indexA] = items[indexB];
  items[indexB] = itemA;
  return items;
}
