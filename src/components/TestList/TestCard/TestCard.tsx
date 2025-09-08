import type { FC, ReactElement } from "react";
import { createSearchParams, useNavigate } from "react-router";
import { Card, CardActions, CardContent, IconButton, Typography, Box } from "@mui/material";
import CalculateIcon from '@mui/icons-material/Calculate';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import { motion } from "framer-motion";

import { entitites } from "@/routing/entities";
import type { ColorNaming } from "@/types";

interface TestCardProps {
    id: number,
    title: string,
    theme: string,
    questions: number,
    color: ColorNaming,
};

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export const TestCard: FC<TestCardProps> = ({ id, title, theme, questions, color }): ReactElement => {
    const navigate = useNavigate();

    const handleParams = () => {
        navigate({
            pathname: `${entitites.HOME}/${entitites.TESTS}/${id}`,
            search: `?${createSearchParams({ title: title.toLowerCase() })}`
        });
    };
    
    return (
        <motion.li
            onClick={handleParams}
            variants={cardVariants}
            whileHover={{ scale: 1.03, boxShadow: "0px 12px 24px rgba(0,0,0,0.2)" }}
            style={{ listStyle: 'none', marginBottom: 16, cursor: 'pointer' }}
        >
            <Card
                sx={{
                    borderRadius: 3,
                    background: color ? `${color}20` : '#f5f5f5', // прозрачный оттенок цвета
                    boxShadow: 3,
                    transition: '0.3s',
                }}
            >
                <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
                        <CalculateIcon fontSize="large" sx={{ color }} />
                        <Typography variant="h5" component='h2' sx={{ fontWeight: 600 }}>
                            {title}
                        </Typography>
                    </Box>
                    <CardActions sx={{ justifyContent: 'space-between', padding: 0 }}>
                        <Typography sx={{ color: 'text.secondary' }}>
                            {theme} | {questions} Fragen
                        </Typography>
                        <IconButton>
                            <DoubleArrowIcon fontSize="large" sx={{ color }} />
                        </IconButton>
                    </CardActions>
                </CardContent>
            </Card>
        </motion.li>
    );
};
