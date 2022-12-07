import React from 'react';
import { Layout } from './Layout';
import { Route, Routes } from 'react-router-dom';
import { useEffect, lazy } from 'react';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LogInPage = lazy(() => import('../pages/Login'));
const PhonebookPage = lazy(() => import('../pages/Phonebook'));

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/phonebook" element={<PhonebookPage/>} />
      </Route>
    </Routes>
  );
}
