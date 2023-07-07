interface TransformedObject {
  [key: string]: any;
}

const transformObjectIntoArrayOfObjects = (
  object: TransformedObject,
  nameForResolvedKey: string
): TransformedObject[] => {
  let transformedArray: TransformedObject[] = [];
  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      transformedArray.push({
        [nameForResolvedKey]: key,
        value: object[key],
      });
    }
  }
  return transformedArray;
};

export default transformObjectIntoArrayOfObjects;
