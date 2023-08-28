import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { publicRoutes } from "../router";

const AppRouter = () => {
    return (
        <Routes>
            {publicRoutes.map(route =>
                <Route
                    Component={route.component}
                    path={route.path}
                    exact={route.exact}
                    key={route.path}
                />
            )}
            <Route path="*" element={<Navigate to="/main" replace />} />
        </Routes>
    );
};

export default AppRouter;