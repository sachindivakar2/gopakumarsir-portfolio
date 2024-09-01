import { BrowserRouter } from 'react-router-dom';

// routes
import AllRoutes from '.';

const Routes = () => {
    return (
        <BrowserRouter basename="/gopakumarsir-portfolio">
            <AllRoutes />
        </BrowserRouter>
    );
};

export default Routes;
