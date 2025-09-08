import Loader from "@/components/Loader/Loader";
import { Suspense, type FC, type ReactElement } from "react";
import { Outlet } from "react-router";

const Tests: FC = (): ReactElement => {
    return (
        <Suspense fallback={<Loader />}>
            <Outlet />
        </Suspense>
    );
};

export default Tests;