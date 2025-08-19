# @marcopollacci/debouncing

A simple debounce utility function with **cancel**, **cancelAndExecute**, and **pending** support.

## Installation

```bash
npm install @marcopollacci/debouncing
```

## Usage

```js
import { debouncing } from "@marcopollacci/debouncing";

// Basic usage
const log = debouncing(() => console.log("Hello"));
log(); // waits 500ms before printing 'Hello' to the console

// Custom wait time
const log2 = debouncing(() => console.log("Hello after 1s"), 1000);
log2(); // waits 1000ms before printing
```

## Extra features

- Support for **cancel**, **cancelAndExecute**, and **pending** methods

```js
const log = debouncing(() => console.log("Hello"), 1000);

log(); // schedules execution in 1s

// Cancel the pending execution
log.cancel();

// Check if execution is pending
console.log(log.pending()); // false (because we canceled)
```

```js
const log = debouncing(() => console.log("Hello"), 1000);

log(); // schedules execution in 1s

// Cancel the pending execution and execute immediately
console.log(log.cancelAndExecute()); // Hello
```

## Running tests

This project uses [Bun](https://bun.com/docs/cli/test) as the test runner.

```bash
npx bun test index.test.js
```

## License

MIT
