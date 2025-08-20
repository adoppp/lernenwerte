import { Suspense } from "react";
import { Outlet } from "react-router";
import { Container } from "@mui/material";

import { Header } from "@/components/Header/Header";

export const App = () => {
    return (
        <>
            <Header/>
            <Container component='main' sx={{ paddingTop: '32px'}}>
                <Suspense fallback={<div>Loading...</div>}>
                    <Outlet />
                </Suspense>
            </Container>
        </>
    );
};
