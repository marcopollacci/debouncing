# @marcopollacci/debounce

A simple debounce utility function.

## Installation

```bash
npm install @marcopollacci/debounce
```

## Usage

```js
import debounce from "@marcopollacci/debounce";
const log = debouncing(() => console.log("Hello"), 500);
log(); // waits 500ms before printing 'Hello'
```

## License

MIT
