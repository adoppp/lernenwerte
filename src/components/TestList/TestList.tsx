import type { FC, ReactElement } from "react";
import { Box } from "@mui/material";

import type { ColorNaming, OmitedSubject, Quiz, Subjects } from "@/types";
import { TestCard } from "@/components/TestList/TestCard/TestCard";
import { boxStyles } from "@/components/TestList/TestList.styles";

interface TestListProps {
    subjects?: Subjects
};

export const TestList: FC<TestListProps> = ({ subjects }): ReactElement => {
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
    
            console.log(formattedTests)
            return formattedTests;
        });
        
        return formattedTests.map(test => {
            return (
                <TestCard 
                    title={test.title}
                    theme={test.theme}
                    questions={test.questions.length}
                    color={test.color as ColorNaming}
                />
            );
        });
    };

    return (
        <Box component='ul' sx={boxStyles}>
            {renderTests()}
        </Box>
    );
};