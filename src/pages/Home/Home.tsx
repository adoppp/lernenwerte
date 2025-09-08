import type { FC, ReactElement } from "react";
import { Container, Typography, Box, Button, Card, CardContent } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import InsightsIcon from "@mui/icons-material/Insights";
import { useNavigate } from "react-router";
import { TestList } from "@/components/TestList/TestList";
import api from "@/api/tests.json";
import { motion, useViewportScroll, useTransform } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const Home: FC = (): ReactElement => {
  const navigate = useNavigate();
  const { scrollY } = useViewportScroll();

  const heroTranslate = useTransform(scrollY, [0, 300], [0, -100]);
  const bubbleTranslate = useTransform(scrollY, [0, 300], [0, -50]);

  const features = [
    {
      icon: <EmojiObjectsIcon fontSize="large" color="primary" />,
      title: "Interessant",
      desc: "Fesselnde Fragen zu Schulfächern.",
    },
    {
      icon: <InsightsIcon fontSize="large" color="secondary" />,
      title: "Nützlich",
      desc: "Festige dein Wissen und verfolge deinen Fortschritt.",
    },
    {
      icon: <SchoolIcon fontSize="large" color="success" />,
      title: "Zugänglich",
      desc: "Mache den Test jederzeit und kostenlos.",
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          minHeight: "70vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          px: 2,
          py: 6,
          position: "relative",
          overflow: "hidden",
          background: "linear-gradient(135deg, #6B73FF 0%, #000DFF 100%)",
          color: "#fff",
        }}
      >
        <Box
          component={motion.div}
          style={{ y: bubbleTranslate }}
          sx={{
            position: "absolute",
            top: -50,
            left: -50,
            width: 200,
            height: 200,
            borderRadius: "50%",
            backgroundColor: "rgba(255,255,255,0.1)",
          }}
        />

        <Box component={motion.div} style={{ y: heroTranslate }}>
          <Container maxWidth="sm" component={motion.div} initial="hidden" animate="visible" variants={fadeInUp}>
            <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700, lineHeight: 1.2 }}>
              Mache Tests und überprüfe dein Wissen
            </Typography>
            <Typography variant="subtitle1" sx={{ mb: 4, color: "rgba(255,255,255,0.8)" }}>
              Wähle ein Fach und starte jetzt
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              sx={{ px: 5, py: 1.5, borderRadius: 3, textTransform: "none", fontWeight: 600 }}
              onClick={() => navigate("tests")}
              component={motion.button}
              whileHover={{ scale: 1.05, boxShadow: "0px 8px 20px rgba(0,0,0,0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              Tests starten
            </Button>
          </Container>
        </Box>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ pt: 8, pb: 4 }}>
  <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
  >
    <Typography
      variant="h4"
      textAlign="center"
      gutterBottom
      sx={{ fontWeight: 600, mb: 6 }}
    >
      Warum solltest du die Tests machen?
    </Typography>

    {/* Grid через Box */}
    <Box
      display="grid"
      gridTemplateColumns="repeat(auto-fill, minmax(280px, 1fr))"
      gap={4}
      justifyContent="center"
    >
      {features.map((feature, i) => (
        <Box
          key={i}
          component={motion.div}
          variants={fadeInUp}
          transition={{ delay: i * 0.2, duration: 0.6 }}
        >
          <Card
            sx={{
              p: 4,
              textAlign: "center",
              borderRadius: 4,
              boxShadow: 2,
              cursor: "pointer",
              transition: "0.3s",
              "&:hover": {
                boxShadow: 8,
                transform: "translateY(-8px)",
                backgroundColor: "rgba(245,247,250,0.9)",
              },
            }}
          >
            {feature.icon}
            <CardContent>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                {feature.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {feature.desc}
              </Typography>
            </CardContent>
          </Card>
        </Box>
      ))}
    </Box>
  </motion.div>
</Container>

      {/* Test List Section */}
      <Container id="tests" maxWidth="md" sx={{ py: 8 }}>
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Typography variant="h4" component="h2" textAlign="center" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
            Wähle ein Fach
          </Typography>
          <Typography variant="body1" textAlign="center" sx={{ mb: 4, color: "text.secondary" }}>
            Starte die Tests jetzt
          </Typography>
        </motion.div>

        <TestList subjects={api} max={[0, 5]} />
      </Container>
    </Box>
  );
};

export default Home;
