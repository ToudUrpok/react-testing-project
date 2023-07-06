import { MemoryRouter } from "react-router-dom";
import AppRoutes from "../../routes/AppRoutes";

export const renderWithRouter = (component) => {
    return (
        <MemoryRouter>
            <AppRoutes />
            {component}
        </MemoryRouter>
    );
}