/**
 * @description
 * Returns a debounced version of the given function.
 * A debounced function will not be invoked until the wait time has passed since the last call.
 * Each time the function is called, the waiting time is reset.
 * @param {Function} func - the function to debounce
 * @param {Number} wait - time in milliseconds to wait
 * @returns {Function} the debounced function
 */
export const debouncing = (func, wait) => {
  let timeout;
  return function execute(...args) {
    const semaphore = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(semaphore, wait);
  };
};
