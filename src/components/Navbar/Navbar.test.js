import { renderWithReduxAndRouter } from "../../tests/helpers/renderWithReduxAndRouter";
import { act, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Navbar from "./Navbar";

describe('Navbar component testing', () => {
    test('home link', () => {
        renderWithReduxAndRouter(<Navbar />);
        const homeLink = screen.getByTestId('home-link');
        act(() => {
            userEvent.click(homeLink);
        });
        expect(screen.getByTestId('home-page')).toBeInTheDocument();
    });

    test('about link', () => {
        renderWithReduxAndRouter(<Navbar />);
        const aboutLink = screen.getByTestId('about-link');
        act(() => {
            userEvent.click(aboutLink);
        });
        expect(screen.getByTestId('about-page')).toBeInTheDocument();
    });

    test('users link', () => {
        renderWithReduxAndRouter(<Navbar />);
        const usersLink = screen.getByTestId('users-link');
        act(() => {
            userEvent.click(usersLink);
        });
        expect(screen.getByTestId('users-list')).toBeInTheDocument();
    });
});