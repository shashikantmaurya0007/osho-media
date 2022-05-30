const useDebounce = (fn, timeDelay) => {
  let timer;
  const debounceFunction = function () {
    clearTimeout(timer);
    const context = this;
    const args = arguments;
    timer = setTimeout(() => fn.apply(context, args), timeDelay);
  };

  return debounceFunction;
};

export { useDebounce };
