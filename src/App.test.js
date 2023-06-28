import { act, fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

describe('test App component', () => {
    test('first test', () => {
        render(<App />);
        const h1 = screen.getByText(/react testing library/i);
        const btn = screen.getByRole('button');
        const input = screen.getByPlaceholderText(/input value/i);
        expect(h1).toBeInTheDocument();
        expect(btn).toBeInTheDocument();
        expect(input).toMatchSnapshot();
    });

    test('not existed component', () => {
        render(<App />);
        const notExists = screen.queryByText(/not existed/i);
        expect(notExists).toBeNull();
    });

    test('find component', async () => {
        render(<App />);
        screen.debug();
        const asyncComponent = await screen.findByText(/async component/i);
        expect(asyncComponent).toBeInTheDocument();
        expect(asyncComponent).toHaveStyle({color: 'red'});
        screen.debug();
    });

    test('click event test', () => {
        render(<App />);
        const btn = screen.getByTestId('toggle-btn');
        expect(screen.queryByTestId('toggle-elem')).toBeNull();
        fireEvent.click(btn);
        expect(screen.getByTestId('toggle-elem')).toBeInTheDocument();
        fireEvent.click(btn);
        expect(screen.queryByTestId('toggle-elem')).toBeNull();
    });

    test('input event test', () => {
        render(<App />);
        expect(screen.getByTestId('input-value')).toContainHTML('');
        const input = screen.getByPlaceholderText(/input value/i);
        fireEvent.input(input, {
            target: {value: 'Hello, bitch!'}
        });
        expect(screen.getByTestId('input-value')).toContainHTML('Hello, bitch!');
    });

    test('input test with userEvent', () => {
        render(<App />);
        expect(screen.getByTestId('input-value')).toContainHTML('');
        const input = screen.getByPlaceholderText(/input value/i);
        act(() => {
            userEvent.type(input, 'Hello, bitch!');
        });
        expect(screen.getByTestId('input-value')).toContainHTML('Hello, bitch!');
    });
});
