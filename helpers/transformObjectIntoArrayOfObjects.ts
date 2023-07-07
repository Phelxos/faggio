interface Object {
  [key: string]: any;
}

const transformObjectIntoArrayOfObjects = <T extends Object>(
  rawObject: T,
  nameForResolvedKey: string
): T[] => {
  let arrayOfObjects: T[] = [];
  for (let key in rawObject) {
    if (rawObject.hasOwnProperty(key)) {
      arrayOfObjects.push({
        [nameForResolvedKey]: key,
        ...(rawObject[key] as Object),
      } as T);
    }
  }
  return arrayOfObjects;
};

export default transformObjectIntoArrayOfObjects;
