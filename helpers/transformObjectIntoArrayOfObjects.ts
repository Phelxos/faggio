interface TransformedObject {
  [key: string]: any;
}

function transformObjectIntoArrayOfObjects<T extends TransformedObject>(
  array: T[],
  nameForResolvedKey: string
): T[] {
  let transformedArray: T[] = [];
  for (let key in array) {
    if (array.hasOwnProperty(key)) {
      transformedArray.push({
        [nameForResolvedKey]: key,
        ...(array[key] as Object),
      } as T);
    }
  }
  return transformedArray;
}

export default transformObjectIntoArrayOfObjects;
