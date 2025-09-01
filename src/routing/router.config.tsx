import { lazy, type ReactNode } from "react";
import type { RouteObject } from "react-router";
import { entitites } from "./entities";

interface BasicRoute {
    element: ReactNode;
    children?: RouteItem[];
};

type IndexRoute = BasicRoute & { path?: never, index: boolean};

type PathRoute = BasicRoute & { path: string, index?: never};

type RouteItem = IndexRoute | PathRoute;

const Home = lazy(() => import('@/pages/Home/Home'));
const Profile = lazy(() => import('@/pages/Profile/Profile'));
const Tests = lazy(() => import('@/pages/Tests/Tests'));
const TestHome = lazy(() => import('@/pages/TestHome/TestHome'));
const Test = lazy(() => import('@/pages/Test/Test'));

export const routes: RouteItem[] = [
    {
        index: true,
        element: <Home />
    },
    {
        path: entitites.SCORES,
        element: <Profile />
    },
    {
        path: entitites.TESTS,
        element: <Tests />,
        children: [
            {
                index: true,
                element: <TestHome />
            },
            {
                path: entitites.TEST,
                element: <Test />
            }
        ]
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