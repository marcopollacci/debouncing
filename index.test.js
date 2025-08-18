// @ts-ignore
import { expect, test, describe } from "bun:test";
// @ts-ignore
import { sleep } from "bun";
import { debouncing } from ".";

describe("debouncing", () => {
  test("default behavior", async () => {
    const log = debouncing(() => console.log("Hello"));
    log(); // waits 500ms before printing 'Hello' to the console
    expect(log.pending()).toBe(true);
    await sleep(500);
    expect(log.pending()).toBe(false);
  });

  test("custom wait time", async () => {
    const log = debouncing(() => console.log("Hello after 1s"), 1000);
    log(); // waits 1000ms before printing
    expect(log.pending()).toBe(true);
    await sleep(500);
    expect(log.pending()).toBe(true);
    await sleep(500);
    expect(log.pending()).toBe(false);
  });

  test("cancel", async () => {
    const log = debouncing(() => console.log("Hello after 1s"), 1000);
    log(); // waits 1000ms before printing
    expect(log.pending()).toBe(true);
    log.cancel();
    expect(log.pending()).toBe(false);
  });
});
