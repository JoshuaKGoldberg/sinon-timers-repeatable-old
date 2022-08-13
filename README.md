# sinon-timers-repeatable

[![GitHub CI](https://github.com/JoshuaKGoldberg/sinon-timers-repeatable/workflows/CI/badge.svg)](https://github.com/JoshuaKGoldberg/sinon-timers-repeatable/actions/workflows/ci.yml)
[![Code Style: Prettier](https://img.shields.io/badge/code_style-prettier-brightgreen.svg)](https://prettier.io)
![TypeScript: Strict](https://img.shields.io/badge/typescript-strict-brightgreen.svg)
[![NPM version](https://badge.fury.io/js/sinon-timers-repeatable.svg)](http://badge.fury.io/js/sinon-timers-repeatable)

> A version of [Sinon](https://sinonjs.org)'s [`useFakeTimers`](https://sinonjs.org/releases/latest/fake-timers) that you can call multiple times in a test.

`sinon.useFakeTimers()` is a wonderful API, but crashes if you call it twice in the same test:

```plaintext
TypeError: Can't install fake timers twice on the same global object.
    at Object.install (.../node_modules/sinon/pkg/sinon.js:6783:19)
    at createClock (.../node_modules/sinon/pkg/sinon.js:4676:31)
    ...
```

That can be inconvenient if you want to `useFakeTimers()` inside setup functions.

This package provides a `useFakeTimers` that:

- Lazily creates a `clock = sinon.useFakeTimers()` on-demand
- If a global `afterAll` exists, calls `clock.reset()` after each test

That way you can call `useFakeTimers()` whenever you want, and not have clock state shared between tests.
Hooray! ✨

## Usage

```js
import { useFakeTimers } from "sinon-timers-repeatable";

export function createFakes() {
	return {
		clock: useFakeTimers(),
		// ...
	};
}
```

`useFakeTimers` takes in the same parameters as `sinon.useFakeTimers`.

### Package Management

`sinon-timers-repeatable` supports the following package formats:

- AMD (Asynchronous Module Definition): `lib/index.amd.js`
- CJS (CommonJS): `lib/index.cjs`
- ESM (ECMAScript Modules): `src/index.js`

## Development

See [`.github/CONTRIBUTING.md`](./.github/CONTRIBUTING.md).
Thanks! 💖
