import type { FC, ReactElement } from "react";
import { NavLink } from "react-router";
import { Card, CardActions, CardContent, IconButton, Typography } from "@mui/material";
import CalculateIcon from '@mui/icons-material/Calculate';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

import { entitites } from "@/routing/entities";

interface TestCardProps {
    lessonTitle: string,
    themeTitle: string,
    questions: number
};

export const TestCard: FC<TestCardProps> = ({ lessonTitle, themeTitle, questions }): ReactElement => {
    return (
        <NavLink to={entitites.TEST}>
            <Card>
                <CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <CalculateIcon
                            fontSize="large"
                        />
                        <Typography variant="h5" component='h2'>
                            {lessonTitle}
                        </Typography>
                    </div>
                    <CardActions disableSpacing sx={{ justifyContent: 'flex-end'}}>
                        <Typography sx={{ marginRight: '8px'}}>
                            {themeTitle} | {questions} Q
                        </Typography>
                        <IconButton>
                            <DoubleArrowIcon fontSize="large" />
                        </IconButton>
                    </CardActions>
                </CardContent>
            </Card>
        </NavLink>
    );
};