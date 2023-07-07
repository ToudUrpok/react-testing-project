import { act, render, screen } from "@testing-library/react";
import Counter from "./Counter";
import { Provider } from "react-redux";
import { createReduxStore } from "../../store/store";
import userEvent from "@testing-library/user-event";
import { renderWithRedux } from "../../tests/helpers/renderWithRedux";

describe('Counter test', () => {
    test('render withOUT initialState', () => {
        renderWithRedux(<Counter />);

        expect(screen.getByTestId('increment-btn')).toBeInTheDocument();
        expect(screen.getByTestId('decrement-btn')).toBeInTheDocument();
        const counterValue = screen.getByTestId('counter-value');
        expect(counterValue).toBeInTheDocument();
        expect(counterValue).toHaveTextContent('0');
    });

    test('render with initialState', () => {
        renderWithRedux(<Counter />, {
            counter: { value: 11 }
        });

        expect(screen.getByTestId('counter-value')).toHaveTextContent('11');
    });

    test('increment test', () => {
        renderWithRedux(<Counter />, {
            counter: { value: 99 }
        });
        const incBtn = screen.getByTestId('increment-btn');
        expect(screen.getByTestId('counter-value')).toHaveTextContent('99');
        act(() => {
            userEvent.click(incBtn);
        });
        expect(screen.getByTestId('counter-value')).toHaveTextContent('100');
    });

    test('decrement test', () => {
        renderWithRedux(<Counter />, {
            counter: { value: 100 }
        });
        const decBtn = screen.getByTestId('decrement-btn');
        expect(screen.getByTestId('counter-value')).toHaveTextContent('100');
        act(() => {
            userEvent.click(decBtn);
        });
        expect(screen.getByTestId('counter-value')).toHaveTextContent('99');
    });
});