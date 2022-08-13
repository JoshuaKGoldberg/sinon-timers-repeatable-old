import { describe, it } from "node:test";
import assert from "assert";

import { useFakeTimers } from "./index.js";

describe("useFakeTimers", () => {
	it("returns the same object when called twice", () => {
		const first = useFakeTimers();
		const second = useFakeTimers();
		assert.equal(first, second);
	});

	it("does not throw an error when called in another test", () => {
		useFakeTimers();
	});
});
