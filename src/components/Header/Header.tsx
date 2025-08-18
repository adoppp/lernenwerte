import type { FC, ReactElement } from "react";
import { NavLink } from "react-router";
import { Button, Container, Typography } from "@mui/material";

import { containerStyles } from "@/components/Header/Header.styles";
import { entitites } from "@/routing/entities";

export const Header: FC = (): ReactElement => {
    return ( 
        <Container 
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
        </Container>
    );
};