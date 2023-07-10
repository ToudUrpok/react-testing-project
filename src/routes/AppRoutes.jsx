import React from "react";
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ErrorPage from '../pages/ErrorPage';
import Users from '../users/Users';
import UserDetailedPage from '../pages/UserDetailedPage';
import HelloWorld from "../pages/HelloWorld";
import UsersForTest from "../components/UsersForTest/UsersForTest";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/hello' element={<HelloWorld />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/users' element={<Users />} />
            <Route path='/users/:id' element={<UserDetailedPage />} />
            <Route path='/users-test' element={<UsersForTest />} />
            <Route path='/*' element={<ErrorPage />} />
        </Routes>
    );
}

export default AppRoutes;