import React from "react";
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ErrorPage from '../pages/ErrorPage';
import Users from '../users/Users';
import UserDetailedPage from '../pages/UserDetailedPage';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/users' element={<Users />} />
            <Route path='/users/:id' element={<UserDetailedPage />} />
            <Route path='/*' element={<ErrorPage />} />
        </Routes>
    );
}

export default AppRoutes;