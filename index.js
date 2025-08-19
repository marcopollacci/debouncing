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
  let argsRef;
  function execute(...args) {
    argsRef = args;
    const semaphore = () => {
      clear();
      executeFunc();
    };
    clear();
    timeout = setTimeout(semaphore, wait);
  }

  /**
   * Cancels the pending execution of `func` and resets the timer.
   */
  const clear = () => {
    clearTimeout(timeout);
    timeout = null;
  };

  /**
   * Executes a function with the specified context and arguments
   * @returns {*} - The result of the function execution
   */
  const executeFunc = () => func.apply(this, argsRef);

  /**
   * Cancels the delayed execution of `func`.
   */
  execute.cancel = () => clear();

  /**
   * Cancels the pending execution of `func` and executes it immediately.
   * @return {*} - The return value of `func`.
   */
  execute.cancelAndExecute = () => {
    execute.cancel();
    executeFunc();
  };

  /**
   * Checks if there's a pending debounced execution.
   * @return {boolean} - `true` if the debounced function is waiting to execute.
   */
  execute.pending = () => timeout !== null;

  return execute;
};
