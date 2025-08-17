/**
 * Returns a debounced version of the provided function that will delay the
 * execution of `func` until after `wait` milliseconds have passed since the
 * last time the debounced function was called. If `func` is called again
 * before `wait` milliseconds, the timer is reset and the new call's execution
 * is delayed again. The debounced function supports the same arguments and
 * return type as `func`.
 *
 * @param func - The function to be debounced.
 * @param wait - The number of milliseconds to delay the execution of `func`. (default: 500ms)
 * @returns A debounced version of `func`.
 */
export declare function debouncing<T extends (...args: any[]) => void>(
  func: T,
  wait?: number
): (...args: Parameters<T>) => void;
