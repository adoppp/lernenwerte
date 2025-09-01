import type { FC, ReactElement } from "react";
import { NavLink } from "react-router";
import { Box, Button, Container } from "@mui/material";

import { boxStyles, containerStyles, imgStyles } from "@/components/Header/Header.styles";
import { entitites } from "@/routing/entities";
import Logo from '@/assets/logo.png';

export const Header: FC = (): ReactElement => {
    return ( 
        <Box
            sx={boxStyles}
            component='header' 
        >
            <Container 
                sx={containerStyles}
            >
                <NavLink to={entitites.HOME}>
                    <img
                        src={Logo}
                        alt="logo"
                        loading="lazy"
                        style={imgStyles}
                    />
                </NavLink>
                <NavLink 
                    to={entitites.SCORES}
                >
                    <Button
                        variant="outlined"
                    >
                            Scores
                    </Button>
                </NavLink>
            </Container>
        </Box>
    );
};