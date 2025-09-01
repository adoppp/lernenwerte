import type { FC, ReactElement } from "react";

import { TestList } from "@/components/TestList/TestList";
import api from '@/api/tests.json';

const TestHome: FC = (): ReactElement => {
    return (
        <div>
            <TestList subjects={api} />
        </div>
    );
};

export default TestHome;