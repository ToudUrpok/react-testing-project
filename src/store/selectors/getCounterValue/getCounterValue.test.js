import { getCounterValue } from "./getCounterValue";

describe('getCounterValue test', () => {
    test('with initial state', () => {
        expect(getCounterValue({})).toBe(0);
    });

    test('with set state', () => {
        expect(getCounterValue({
            counter: {
                value: 77
            }
        })).toBe(77);
    });
});