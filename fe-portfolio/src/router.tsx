import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import { AppRoutes } from './shared/models/app.routes';
import Layout from './layouts/Layout';
import HomePage from './pages/home/HomePage';

const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: AppRoutes.Home,
          element: <HomePage />,
        },
    ],
},
/*
{
  path: AppRoutes.Callback,
  element: (
    <ProtectedRoute>
      <CallbackPage />
    </ProtectedRoute>
  ),
},
*/
]);

export default router;
