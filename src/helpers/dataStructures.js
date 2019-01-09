/**
 * @function arrayToObject
 * @param {Array} arr Array to convert
 * @param {String} key Key of the object to use the value as the key for the object.
 * @param {Boolean} tolerance Flag to overwrite the value of the key to the last object with the same value.
 * @description Converts an array of objects with a key in common to an object with all the elements of
 * the array with the value of the key, as the key to access the object
 */

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

/**
 * @function extractKeyValues
 * @param {Array} arr Array to extract the values from.
 * @param {String} key Key of the attribute to extract.
 * @param {Bool} repeat Flag to allow or not repeated elements in the array.
 * @description Extract the value of a key from all the objects in an Array
 */

export function extractKeyValues(arr, key, repeat = true) {
  if (!key) throw new Error('Expected key');
  const mappedArr = arr.map(item => item[key]);
  if (!repeat) {
    const result = new Set(mappedArr);
    return result;
  }
  return mappedArr;
}

// export default { arrayToObject, extractKeyValues };
