import { TestCard } from "@/components/TestCard/TestCard";
import type { FC, ReactElement } from "react";

const Home: FC = (): ReactElement => {
    const tests = [
        {
            titleL: 'Math',
            titleT: 'Basics',
            questions: 7
        },
        {
            titleL: 'History',
            titleT: 'WW2',
            questions: 15
        },
        {
            titleL: 'IT',
            titleT: 'Python basics',
            questions: 31
        },
        {
            titleL: 'Biologie',
            titleT: 'DNA',
            questions: 9
        }
    ];

    const items = tests.map(item => <TestCard lessonTitle={item.titleL} themeTitle={item.titleT} questions={item.questions} />);

    return (
        <>
            {items}
        </>
    );
};

export default Home;