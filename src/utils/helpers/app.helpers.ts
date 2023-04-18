export const deepMerge = ({ a = {}, b = {}, fn }) =>
  [...new Set([...Object.keys(a), ...Object.keys(b)])].reduce(
    (acc, key) => ({ ...acc, [key]: fn(a[key], b[key]) }),
    {}
  );

export const verificationValuesDehydrated = (a = [], b = []) => [...a, ...b];
