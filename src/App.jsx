import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Dashboard from './pages/Dashboard';
import DashboardL from './layout/Dashboard';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        index: true,
        element: <DashboardL />
      }
    ]
  },
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}
