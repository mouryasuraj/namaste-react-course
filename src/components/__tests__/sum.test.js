import { sum } from "../sum";

test('It should return the sum of two numbers', () => {
    const result = sum(3, 4)
    expect(result).toBe(7)
})
