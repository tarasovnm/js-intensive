export function watchObj(data, fn) {
  return new Proxy(data, {
    get(target, prop) {
      switch (typeof target[prop]) {
        case 'object':
          return watchObj(target[prop], fn);
        case 'function':
          return target[prop].bind(target);
        default:
          return target[prop];
      }
    },
    set(target, prop, value) {
      fn(prop, value);
      target[prop] = value;
      return true;
    }
  });
};