import { Provider } from "react-redux";
import { createReduxStore } from "../../store/store";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import AppRoutes from "../../routes/AppRoutes";


export const renderWithReduxAndRouter = (component, initialState = {}) => {
    return (
        render(
            <Provider store={createReduxStore(initialState)}>
                <MemoryRouter>
                    <AppRoutes />
                    {component}
                </MemoryRouter>
            </Provider>
        )
    )
}