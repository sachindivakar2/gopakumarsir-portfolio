import React, { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';

// Lazy load the Contact page
const Contact = React.lazy(() => import('../pages/other/Contact'));

const loading = () => <div>Loading...</div>;

type LoadComponentProps = {
    component: React.LazyExoticComponent<React.ComponentType<any>>;
};

const LoadComponent: React.FC<LoadComponentProps> = ({ component: Component }) => (
    <Suspense fallback={loading()}>
        <Component />
    </Suspense>
);

const AllRoutes = () => {
    return useRoutes([
        {
            path: '/',
            element: <LoadComponent component={Contact} />,
        },
    ]);
};

export default AllRoutes;