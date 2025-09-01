import { Suspense } from "react";
import { Outlet } from "react-router";
import { Container } from "@mui/material";

import { Header } from "@/components/Header/Header";

export const App = () => {
    return (
        <>
            <Header/>
            <Container component='main' sx={{ padding: '40px 24px'}}>
                <Suspense fallback={<div>Loading...</div>}>
                    <Outlet />
                </Suspense>
            </Container>
        </>
    );
};
