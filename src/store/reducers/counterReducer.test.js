import counterReducer, { decrement, increment } from "./counterReducer";

describe('counterReducer test', () => {
    test('increment with defined value', () => {
        expect(counterReducer({value: 11}, increment())).toEqual({value: 12});
    });

    test('decrement with defined value', () => {
        expect(counterReducer({value: 11}, decrement())).toEqual({value: 10});
    });

    test('increment undefined', () => {
        expect(counterReducer(undefined, increment())).toEqual({value: 1});
    });

    test('decrement undefined', () => {
        expect(counterReducer(undefined, decrement())).toEqual({value: -1});
    });
});