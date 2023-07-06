import { act, render, screen } from "@testing-library/react";
import Users from "./Users";
import axios from "axios";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { renderWithRouter } from "../tests/helpers/renderWithRouter";

jest.mock('axios');

describe('test Users component', () => {
    let response;
    beforeAll(() => {
        response = {
            data: [
                {
                    "id": 1,
                    "name": "Leanne Graham",
                },
                {
                    "id": 2,
                    "name": "Ervin Howell",
                },
                {
                    "id": 3,
                    "name": "Clementine Bauch",
                },
                {
                    "id": 4,
                    "name": "Patricia Lebsack",
                },
                {
                    "id": 5,
                    "name": "Chelsey Dietrich",
                }
            ]
        }
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('first test', async () => {
        axios.get.mockReturnValue(response);
        render(
            <MemoryRouter>
                <Users />
            </MemoryRouter>
        );
        expect(axios.get).toBeCalledTimes(1);
        const users = await screen.findAllByTestId('user-item');
        expect(users.length).toBe(5);
        screen.debug();
    });

    test('user detailed view link test', async () => {
        axios.get.mockReturnValue(response);
        render(renderWithRouter(<Users />));

        screen.debug();
        const users = await screen.findAllByTestId('user-item');
        expect(users.length).toBe(5);
        act(() => {
            userEvent.click(users[0]);
        });
        screen.debug();
        expect(screen.getByTestId('user-page')).toBeInTheDocument();
    });
});