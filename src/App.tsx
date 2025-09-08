import { Suspense } from "react";
import { Outlet } from "react-router";

import { Header } from "@/components/Header/Header";
import Loader from "./components/Loader/Loader";

export const App = () => {
    return (
        <>
            <Header/>
            <Suspense fallback={<Loader />}>
                <Outlet />
            </Suspense>
        </>
    );
};
