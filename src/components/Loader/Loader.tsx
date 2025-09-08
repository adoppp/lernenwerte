import { type FC } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import { motion } from "framer-motion";

const loaderContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

const Loader: FC = () => {
  return (
    <Box
      component={motion.div}
      variants={loaderContainer}
      initial="hidden"
      animate="visible"
      sx={{
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #6B73FF 0%, #000DFF 100%)",
        color: "#fff",
      }}
    >
      <Box
        component={motion.div}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
        sx={{ mb: 3 }}
      >
        <CircularProgress
          size={80}
          thickness={4}
          sx={{
            color: "secondary.main",
            "& .MuiCircularProgress-circle": {
              strokeLinecap: "round",
            },
          }}
        />
      </Box>

      <Typography
        variant="h6"
        component={motion.div}
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 1 }}
        sx={{ fontWeight: 600, letterSpacing: 1 }}
      >
        Laden…
      </Typography>
    </Box>
  );
};

export default Loader;
