import { createBrowserRouter } from "react-router-dom";

import Signup from "../pages/signup";
import Notification from "../pages/notification";
import Photo from "../pages/photo";
import Text from "../pages/text";
import Calculator from "../pages/calculator";
import Root from "../layouts/root";
import { ProtectedRoute } from "../utils/ProtectedRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Signup />,
            },
            {
                path: "/notifications",
                element: <ProtectedRoute><Notification /></ProtectedRoute>,
            },
            {
                path: "/photo",
                element: <ProtectedRoute><Photo /></ProtectedRoute>,
            },
            {
                path: "/text",
                element: <ProtectedRoute><Text /></ProtectedRoute>,
            },
            {
                path: "/calculator",
                element: <ProtectedRoute><Calculator /></ProtectedRoute>,
            }
        ]
    },
]);