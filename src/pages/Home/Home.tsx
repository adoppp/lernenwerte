import type { FC, ReactElement } from "react";

import { TestCard } from "@/components/TestList/TestCard/TestCard";
import { TestList } from "@/components/TestList/TestList";
import api from '@/api/tests.json';

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

    // const items = tests.map(item => <TestCard lessonTitle={item.titleL} themeTitle={item.titleT} questions={item.questions} color={item.color} />);

    return (
        <>
            {/* {items} */}
            <TestList subjects={api} />
        </>
    );
};

export default Home;