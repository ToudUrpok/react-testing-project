import { MemoryRouter } from "react-router-dom";
import AppRoutes from "../../routes/AppRoutes";
import { render } from "@testing-library/react";

export const renderWithRouter = (component) => {
    return (
        render(
            <MemoryRouter>
                <AppRoutes />
                {component}
            </MemoryRouter>
        )
    );
}