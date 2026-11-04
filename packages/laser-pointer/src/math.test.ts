import { describe, expect, it } from "vitest";

import { runLength, type Point } from "./math";

describe("runLength", () => {
	it("returns 0 for an empty path", () => {
		expect(runLength([])).toBe(0);
	});

	it("returns 0 for a path with one point", () => {
		const points: Point[] = [[2, 3, 0]];

		expect(runLength(points)).toBe(0);
	});

	it("returns the distance for a two-point path", () => {
		const points: Point[] = [
			[0, 0, 0],
			[10, 0, 0],
		];

		expect(runLength(points)).toBe(10);
	});

	it("sums the segments in a multi-point path", () => {
		const points: Point[] = [
			[0, 0, 0],
			[3, 0, 0],
			[3, 4, 0],
		];

		expect(runLength(points)).toBe(7);
	});

	it("sums diagonal segments", () => {
		const points: Point[] = [
			[0, 0, 0],
			[3, 4, 0],
			[6, 8, 0],
		];

		expect(runLength(points)).toBe(10);
	});
});
