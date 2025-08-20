import type { FC, ReactElement } from "react";

import { TestCard } from "@/components/TestCard/TestCard";

const Home: FC = (): ReactElement => {
    const tests = [
        {
            titleL: 'Math',
            titleT: 'Basics',
            questions: 7,
            color: 'blue'
        },
        {
            titleL: 'History',
            titleT: 'WW2',
            questions: 15,
            color: 'red'
        },
        {
            titleL: 'IT',
            titleT: 'Python basics',
            questions: 31,
            color: 'purple'
        },
        {
            titleL: 'Biologie',
            titleT: 'DNA',
            questions: 9,
            color: 'pink'
        }
    ];

    const items = tests.map(item => <TestCard lessonTitle={item.titleL} themeTitle={item.titleT} questions={item.questions} color={item.color} />);

    return (
        <>
            {items}
        </>
    );
};

export default Home;