import { renderWithRouter } from "../../tests/helpers/renderWithRouter";
import { act, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Navbar from "./Navbar";

describe('Navbar component testing', () => {
    test('home link', () => {
        renderWithRouter(<Navbar />);
        const homeLink = screen.getByTestId('home-link');
        act(() => {
            userEvent.click(homeLink);
        });
        expect(screen.getByTestId('home-page')).toBeInTheDocument();
    });

    test('about link', () => {
        renderWithRouter(<Navbar />);
        const aboutLink = screen.getByTestId('about-link');
        act(() => {
            userEvent.click(aboutLink);
        });
        expect(screen.getByTestId('about-page')).toBeInTheDocument();
    });

    test('users link', () => {
        renderWithRouter(<Navbar />);
        const usersLink = screen.getByTestId('users-link');
        act(() => {
            userEvent.click(usersLink);
        });
        expect(screen.getByTestId('users-list')).toBeInTheDocument();
    });
});