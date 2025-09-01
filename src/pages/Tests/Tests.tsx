import { Suspense, type FC, type ReactElement } from "react";
import { Outlet } from "react-router";

const Tests: FC = (): ReactElement => {
    return (
        <Suspense fallback={<div>Loading... </div>}>
            <Outlet />
        </Suspense>
    );
};

export default Tests;