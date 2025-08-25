import type { FC, ReactElement } from "react";
import { NavLink } from "react-router";
import { Card, CardActions, CardContent, IconButton, Typography } from "@mui/material";
import CalculateIcon from '@mui/icons-material/Calculate';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

import { entitites } from "@/routing/entities";
import { actionsStyles, blockStyles, CardContentStyles, cardStylesDecorator, descriptionsStyles } from "@/components/TestList/TestCard/TestCard.styles";
import type { ColorNaming } from "@/types";

interface TestCardProps {
    title: string,
    theme: string,
    questions: number,
    color: ColorNaming;
};

export const TestCard: FC<TestCardProps> = ({ title, theme, questions, color }): ReactElement => {
    return (
        <li>
            <NavLink to={entitites.TEST}>
                    <Card sx={cardStylesDecorator(color)}>
                        <CardContent sx={CardContentStyles}>
                            <div style={blockStyles}>
                                <CalculateIcon
                                    fontSize="large"
                                />
                                <Typography variant="h5" component='h2'>
                                    {title}
                                </Typography>
                            </div>
                            <CardActions disableSpacing sx={actionsStyles}>
                                <Typography sx={descriptionsStyles}>
                                    {theme} | {questions} Q
                                </Typography>
                                <IconButton>
                                    <DoubleArrowIcon fontSize="large" />
                                </IconButton>
                            </CardActions>
                        </CardContent>
                    </Card>
            </NavLink>
        </li>
    );
};