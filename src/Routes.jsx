import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "./App";
import Layout from "./Layout";
import NotFound from "./components/shared/NotFound ";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "*",
        element: <NotFound />,
      },
    
    ]}

]);
