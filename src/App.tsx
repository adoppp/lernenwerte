import { Suspense } from "react";
import { Outlet } from "react-router";

import { Header } from "@/components/Header/Header";

export const App = () => {
    return (
        <>
            <Header/>
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
        </>
    );
};
