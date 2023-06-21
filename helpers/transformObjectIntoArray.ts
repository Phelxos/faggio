const transformObjectIntoArray = (
  array: Object[],
  nameForResolvedKey: string
): Object[] => {
  if (typeof array === "object") {
    let transformedArray: Object[] = [];
    for (let key in array) {
      if (array.hasOwnProperty(key)) {
        transformedArray.push({
          [nameForResolvedKey]: key,
          ...(array[key] as Object),
        });
      }
    }
    console.log(transformedArray);
    return transformedArray;
  }
  throw new Error("The argument is not an object.");
};

export default transformObjectIntoArray;
