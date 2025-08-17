/**
 * Returns a debounced function that will delay the execution of `func` until
 * after `wait` milliseconds have passed since the last time the debounced
 * function was called. If `func` is called again before `wait` milliseconds,
 * the timer is reset and the new call's execution is delayed again.
 *
 * @param {function} func - The function to be debounced.
 * @param {number} [wait=500] - The number of milliseconds to delay the execution
 * of `func`.
 * @return {function} - The debounced function.
 */
export const debouncing = (func, wait = 500) => {
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
