import { render, screen } from "@testing-library/react";
import Users from "./Users";
import axios from "axios";

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

    test('first test', async () => {
        axios.get.mockReturnValue(response);
        render(<Users />);
        const users = await screen.findAllByTestId('user-item');
        expect(axios.get).toBeCalledTimes(1);
        expect(users.length).toBe(5);
        screen.debug();
    });
});