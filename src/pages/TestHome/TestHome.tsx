import type { FC, ReactElement } from "react";

import { TestList } from "@/components/TestList/TestList";
import api from '@/api/tests.json';
import { Container } from "@mui/material";

const TestHome: FC = (): ReactElement => {
    return (
        <Container sx={{ pt: 6 }}>
            <TestList subjects={api} />
        </Container>
    );
};

export default TestHome;