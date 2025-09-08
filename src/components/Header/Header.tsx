import type { FC, ReactElement } from "react";
import { NavLink } from "react-router";
import { Box, Button, Container } from "@mui/material";
import { motion } from "framer-motion";

import { boxStyles, containerStyles, imgStyles } from "@/components/Header/Header.styles";
import { entitites } from "@/routing/entities";
import Logo from '@/assets/logo.png';

const fadeInDown = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export const Header: FC = (): ReactElement => {
  return ( 
    <Box
      sx={{
        ...boxStyles,
        position: 'sticky',
        top: 0,
        zIndex: 1200,
        // Более мягкий фон: плавный градиент в пастельных синих тонах
        background: 'linear-gradient(135deg, rgba(107,115,255,0.85) 0%, rgba(0,13,255,0.85) 100%)',
        py: 2,
        backdropFilter: 'blur(8px)', // мягкое размытие за шапкой
      }}
      component={motion.header}
      initial="hidden"
      animate="visible"
      variants={fadeInDown}
    >
      <Container sx={containerStyles}>
        <NavLink to={entitites.HOME}>
          <img
            src={Logo}
            alt="logo"
            loading="lazy"
            style={imgStyles}
          />
        </NavLink>
        <Box>
          <NavLink to={entitites.TESTS} style={{ marginRight: '8px' }}>
            <Button
              variant="outlined"
              sx={{
                color: '#fff',
                borderColor: '#fff',
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  borderColor: '#fff',
                },
              }}
            >
              Tests
            </Button>
          </NavLink>
          <NavLink to={entitites.SCORES}>
            <Button
              variant="outlined"
              sx={{
                color: '#fff',
                borderColor: '#fff',
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  borderColor: '#fff',
                },
              }}
            >
              Scores
            </Button>
          </NavLink>
        </Box>
      </Container>
    </Box>
  );
};
