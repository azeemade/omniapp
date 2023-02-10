import { createBrowserRouter } from "react-router-dom";

import Signup from "../pages/signup";
import Notification from "../pages/notification";
import Photo from "../pages/photo";
import Text from "../pages/text";
import Calculator from "../pages/calculator";
import Root from "../layouts/root";

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
                element: <Notification />,
            },
            {
                path: "/photo",
                element: <Photo />,
            },
            {
                path: "/text",
                element: <Text />,
            },
            {
                path: "/calculator",
                element: <Calculator />,
            }
        ]
    },
]);