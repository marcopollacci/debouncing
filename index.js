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
  function execute(...args) {
    const context = this;
    const semaphore = () => {
      clear();
      func.apply(context, args);
    };
    clear();
    timeout = setTimeout(semaphore, wait);
  }

  const clear = () => {
    clearTimeout(timeout);
    timeout = null;
  };

  /**
   * Cancels the delayed execution of `func`.
   */
  execute.cancel = () => clear();

  /**
   * Checks if there's a pending debounced execution.
   * @return {boolean} - `true` if the debounced function is waiting to execute.
   */
  execute.pending = () => {
    return timeout !== null;
  };

  return execute;
};
