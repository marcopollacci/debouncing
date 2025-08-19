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
  let argsRef = null;
  let contextRef = null;
  function execute(...args) {
    contextRef = this;
    argsRef = args;
    const semaphore = () => {
      clear();
      executeFunc(contextRef);
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
   * Applies the original function `func` with the cached context and arguments.
   * @param {Object} contextRef - The context of the function call.
   * @private
   */
  const executeFunc = (contextRefPassed) => {
    const runFunc = func.apply(contextRefPassed, argsRef);
    argsRef = null;
    contextRef = null;
    return runFunc;
  };

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
    if (argsRef) return executeFunc(contextRef);
  };

  /**
   * Checks if there's a pending debounced execution.
   * @return {boolean} - `true` if the debounced function is waiting to execute.
   */
  execute.pending = () => timeout !== null;

  return execute;
};
