import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App, { checkAuthLoader } from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import CustomersList, {
  CustomersListLoader,
} from "./components/customer/CustomersList";
import {CustomerInvoicesLoader} from "./components/customer/CustomerListRow";
import CustomerInvocies from "./components/customer/CustomerInvoices";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: checkAuthLoader,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "customers",
            element: <CustomersList />,
            loader: CustomersListLoader,
            children: [
              {
                path: ":id",
                element: <CustomerInvocies/>,
                loader: CustomerInvoicesLoader,
              }
            ]
          },
        ],
      },
    ],
  },
  {
    path: "/auth",
    element: <Auth />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
