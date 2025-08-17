# @marcopollacci/debouncing

A simple debounce utility function.

## Installation

```bash
npm install @marcopollacci/debouncing
```

## Usage

```js
import { debouncing } from "@marcopollacci/debouncing";
const log = debouncing(() => console.log("Hello"));
log(); // waits 500ms before printing 'Hello' to the console

// if need more than 500ms, set the second parameter
const log = debouncing(() => console.log("Hello"), 1000);
log(); // waits 1000ms before printing 'Hello' to the console
```

## License

MIT
