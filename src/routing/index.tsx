import { App } from "@/App";
import { createBrowserRouter } from "react-router";
import { mapRoutes, routes } from "@/routing/router.config";

export const router = createBrowserRouter([
    {
        path: '/lernenwerte',
        element: <App />,
        children: mapRoutes(routes),
    }
]); 