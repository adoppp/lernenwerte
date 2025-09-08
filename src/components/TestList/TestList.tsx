import type { FC, ReactElement } from "react";
import { Box } from "@mui/material";
import { motion } from "framer-motion";

import type { ColorNaming, OmitedSubject, Quiz, Subjects } from "@/types";
import { TestCard } from "@/components/TestList/TestCard/TestCard";

interface TestListProps {
    subjects: Subjects,
    max?: number[],
};

const listVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
};

export const TestList: FC<TestListProps> = ({ subjects, max }): ReactElement => {
    const renderTests = () => {
        const formattedTests: Array<Quiz & OmitedSubject> = [];
    
        subjects!.map(subject => {
            subject.quizes.reduce((acc, current) => {
                acc.push({ 
                    id: current.id,
                    title: subject.title,
                    theme: current.theme,
                    color: subject.color,
                    questions: current.questions
                });
                return acc;
            }, formattedTests)
    
            return formattedTests;
        });
        
        return formattedTests.map(test => (
            <TestCard 
                key={test.title + test.id}
                id={test.id}
                title={test.title}
                theme={test.theme}
                questions={test.questions.length}
                color={test.color as ColorNaming}
            />
        ));
    };

    return (
        <Box
            component={motion.ul}
            variants={listVariants}
            initial="hidden"
            animate="visible"
            sx={{ padding: 0, margin: 0 }}
        >
            {max && max.length !== 0 ? renderTests().slice(max[0], max[1]) : renderTests()}
        </Box>
    );
};
