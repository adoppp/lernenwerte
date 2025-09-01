import { TestForm } from "@/sections/Test/TestForm/TestForm";
import type { FC, ReactElement } from "react";
import { useParams } from "react-router";

const Test: FC = (): ReactElement => {
    const { testId } = useParams();
    console.log (testId);

    return (
        <div>
            {testId}
            <TestForm />
        </div>
    );
};

export default Test;