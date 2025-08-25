import type { colors } from "@mui/material";

export type Question = {
    question: string,
    options: string[],
    answer: string,
};

export type Questions = Question[];

export type Quiz = {
    id: number,
    theme: string,
    questions: Questions,
};

export type Quizes = Quiz[];

export type Subject = {
    id: number,
    title: string,
    color: string,
    quizes: Quizes,
};

export type Subjects = Subject[];

export type OmitedSubject = Omit<Subject, 'id' | 'quizes'>;

export type ColorNaming = keyof typeof colors;