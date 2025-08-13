# @marcopollacci/debouncing

A simple debounce utility function.

## Installation

```bash
npm install @marcopollacci/debouncing
```

## Usage

```js
import { debouncing } from "@marcopollacci/debouncing";
const log = debouncing(() => console.log("Hello"), 500);
log(); // waits 500ms before printing 'Hello'
```

## License

MIT
