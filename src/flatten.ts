type notUndefined = string | number | boolean | symbol | object;

interface Dictionary<T extends notUndefined = notUndefined> {
  [key: string]: T | undefined;
}

export function flatten(obj: any) {
  return Object.keys(obj).reduce((acc: Dictionary, current) => {
    const _key = `${current}`;
    const currentValue = obj[current];
    if (Array.isArray(currentValue) || Object(currentValue) === currentValue) {
      Object.assign(acc, flatten(currentValue));
    } else {
      acc[_key] = currentValue;
    }
    return acc;
  }, {});
}
