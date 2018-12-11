export function arrayToObject(arr, key, tolerance) {
  if (!key) {
    throw new Error('Expected key to pass Array to Object');
  }
  const obj = arr.reduce((acc, item) => {
    if (acc[item[key]] && !tolerance) {
      throw new Error('Keys values expected to be unique');
    }
    acc[item[key]] = item;
    return acc;
  }, {});
  return obj;
}

export function extractKeyValues(arr, key, repeat = true) {
  if (!key) throw new Error('Expected key');
  const mappedArr = arr.map(item => item[key]);
  if (!repeat) {
    const result = new Set(mappedArr);
    return result;
  }
  return mappedArr;
}

export default { arrayToObject, extractKeyValues };
