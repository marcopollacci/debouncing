/**
 * Returns a debounced version of the provided function that will delay the
 * execution of `func` until after `wait` milliseconds have passed since the
 * last time the debounced function was called. If `func` is called again
 * before `wait` milliseconds, the timer is reset and the new call's execution
 * is delayed again. The debounced function supports the same arguments and
 * return type as `func`.
 *
 * The returned function also provides:
 * - `cancel()`: Cancels the pending execution (if any).
 * - `cancelAndExecute()`: Cancels the pending execution and executes immediately.
 * - `pending()`: Returns `true` if there is a pending execution.
 *
 * @param func - The function to be debounced.
 * @param wait - The number of milliseconds to delay the execution of `func`. (default: 500ms)
 * @returns A debounced version of `func` with `cancel`, `cancelAndExecute` and `pending` methods.
 */
export declare function debouncing<T extends (...args: any[]) => ReturnType<T>>(
  func: T,
  wait?: number
): ((...args: Parameters<T>) => void) & {
  /**
   * Cancels the delayed execution of `func`.
   */
  cancel: () => void;

  /**
   * Cancels the pending execution of `func` and executes it immediately.
   * @returns The return value of `func`.
   */
  cancelAndExecute: () => ReturnType<T>;

  /**
   * Checks if there's a pending debounced execution.
   * @returns `true` if the debounced function is waiting to execute.
   */
  pending: () => boolean;
};
