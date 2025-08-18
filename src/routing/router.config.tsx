import { lazy, type ReactNode } from "react";
import type { RouteObject } from "react-router";

interface BasicRoute {
    element: ReactNode;
    children?: RouteItem[];
};

type IndexRoute = BasicRoute & { path?: never, index: boolean};

type PathRoute = BasicRoute & { path: string, index?: never};

type RouteItem = IndexRoute | PathRoute;

const Home = lazy(() => import('@/pages/Home/Home'));

export const routes: RouteItem[] = [
    {
        index: true,
        element: <Home />
    }
];

export const mapRoutes = (routes: RouteItem[]): RouteObject[] => {
    return routes.map(route => {
        if ('index' in route && route.index && !route.path) {
            return {
                index: route.index,
                element: route.element,
            }
        } 
        
        return {
            path: route.path,
            element: route.element,
            children: route.children ? mapRoutes(route.children) : undefined,
        }
    })
}