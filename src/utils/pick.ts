// * Create an object composed of the picked object properties
const pick = (object: Object, keys: string[]) => {
  return keys.reduce((obj: Object, key: string) => {
    if (object && Object.prototype.hasOwnProperty.call(object, key)) {
      obj = Object.assign(obj, { [key]: object[key as keyof Object] });
    }
    return obj;
  }, {});
};

export default pick;
