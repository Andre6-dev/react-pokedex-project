export const debounce = (fn: Function, timeout: number) => {
  let timer: ReturnType<typeof setTimeout>;
  const buffer: any[] = [];
  return (...args: any) => {
    buffer.push(args);
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, buffer[buffer.length - 1]);
      buffer.length = 0;
    }, timeout);
  };
};