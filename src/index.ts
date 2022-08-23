/// <amd-module name='sinon-timers-repeatable'/>

import * as sinon from "sinon";

declare const afterEach: ((callback: () => void) => void) | undefined;

let clock: ReturnType<typeof sinon.useFakeTimers> | undefined;

if (typeof afterEach !== "undefined") {
	afterEach(() => {
		clock?.reset();
	});
}

export function useFakeTimers(...args: Parameters<typeof sinon.useFakeTimers>) {
	clock ??= sinon.useFakeTimers(...args);
	return clock;
}
