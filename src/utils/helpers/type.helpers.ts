export const isOfType = {
  null(x) {
    return x === null;
  },
  undefined(x) {
    return x === undefined;
  },
  nil(x) {
    return this.null(x) || this.undefined(x);
  },
  string(x) {
    return !this.nil(x) && (typeof x === "string" || x instanceof String);
  },
  number(x) {
    return (
      !this.nil(x) &&
      ((!Number.isNaN(x) && Number.isFinite(x) && typeof x === "number") ||
        x instanceof Number)
    );
  },
  boolean(x) {
    return !this.nil(x) && (typeof x === "boolean" || x instanceof Boolean);
  },
  array(x) {
    return !this.nil(x) && Array.isArray(x);
  },
  object(x) {
    return {}.toString.call(x) === "[object Object]";
  },
  type(x, X) {
    return !this.nil(x) && x instanceof X;
  },
  set(x) {
    return this.type(x, Set);
  },
  map(x) {
    return this.type(x, Map);
  },
  date(x) {
    return this.type(x, Date);
  },
};
