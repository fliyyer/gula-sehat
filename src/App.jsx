import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import DashboardL from './layout/Dashboard';
import DetailGulaDarah from './layout/DetailGulaDarah';
import Aktivitas from './layout/Aktivitas';
import Foods from './layout/Foods';
import Account from './layout/Account';
import Login from './pages/Login';
import Register from './pages/Register';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
    children: [
      {
        index: true,
        element: <DashboardL />,
      },
      {
        path: 'detail-gula-darah',
        element: <DetailGulaDarah />,
      },
      {
        path: 'aktivitas',
        element: <Aktivitas />,
      },
      {
        path: 'makanan',
        element: <Foods />,
      },
      {
        path: 'akun',
        element: <Account />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
