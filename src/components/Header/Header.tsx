import type { FC, ReactElement } from "react";
import { NavLink } from "react-router";
import { Box, Button, Typography } from "@mui/material";

import { containerStyles } from "@/components/Header/Header.styles";
import { entitites } from "@/routing/entities";

export const Header: FC = (): ReactElement => {
    return ( 
        <Box 
            component='header' 
            sx={containerStyles}
        >
            <Typography 
                variant="h4" 
                component='h1'
            >
                Lernenwerte
            </Typography>
            <Button
                variant="outlined"
            >
                <NavLink 
                    to={entitites.USER}
                >
                    Profile
                </NavLink>
            </Button>
        </Box>
    );
};