import {
  useEffect,
  useMemo,
  useState,
  type FC,
  type FormEvent,
  type ReactElement,
  Fragment,
} from "react";
import {
  Alert,
  Button,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
  Divider,
  Paper,
  Box,
} from "@mui/material";
import { styled } from "@mui/system";

import api from "@/api/tests.json";
import { useParams, useSearchParams, useNavigate } from "react-router";
import { entitites } from "@/routing/entities";

type Question = {
  question: string;
  options: string[];
  answer: string;
};

type Quiz = {
  id: number;
  theme: string;
  questions: Question[];
};

type Subject = {
  id: number;
  title: string;
  color: string;
  quizes: Quiz[];
};

type ResultEntry = {
  subject: string;
  theme: string;
  percent: number;
  date?: string;
};

// --- Стили для блока вопроса ---
const QuestionBlock = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
  borderRadius: theme.spacing(2),
  backgroundColor: "#f5f7fa",
  boxShadow: "0px 4px 10px rgba(0,0,0,0.05)",
}));

// --- Стили для RadioButton ---
const StyledFormControlLabel = styled(FormControlLabel)(({ theme, checked }: { theme?: any; checked?: boolean }) => ({
  width: "100%",
  marginBottom: theme?.spacing(1),
  borderRadius: theme?.spacing(1),
  backgroundColor: checked ? "rgba(107,115,255,0.1)" : "#ffffff",
  border: checked ? "2px solid #6B73FF" : "1px solid #ddd",
  transition: "all 0.2s ease",
  "&:hover": {
    backgroundColor: "rgba(107,115,255,0.15)",
  },
}));

export const TestForm: FC = (): ReactElement => {
  const { testId } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState<string>("");
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [percent, setPercent] = useState<number | null>(null);

  const data = api as Subject[];

  const subject = useMemo(
    () =>
      data.find(
        (item) => item.title.toLowerCase() === (title || "").toLowerCase()
      ),
    [data, title]
  );

  const quiz = useMemo(() => {
    const id = Number(testId);
    if (!subject || !Number.isFinite(id)) return undefined;
    return subject.quizes.find((q) => q.id === id);
  }, [subject, testId]);

  const handleOptionChange = (qIndex: number, value: string) => {
    setAnswers((prev) => ({ ...prev, [qIndex]: value }));
  };

  const allAnswered = useMemo(() => {
    if (!quiz) return false;
    return quiz.questions.every((_, idx) => !!answers[idx]);
  }, [quiz, answers]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!quiz || !subject) return;

    let correct = 0;
    quiz.questions.forEach((q, idx) => {
      if (answers[idx] === q.answer) correct++;
    });

    const pct = Math.round((correct / quiz.questions.length) * 100);
    setPercent(pct);
    setSubmitted(true);

    const entry: ResultEntry = {
      subject: subject.title,
      theme: quiz.theme,
      percent: pct,
      date: new Date().toLocaleString("de-DE"),
    };

    try {
      const prev = JSON.parse(localStorage.getItem("results") || "[]") as ResultEntry[];
      localStorage.setItem("results", JSON.stringify([...prev, entry]));
    } catch {
      localStorage.setItem("results", JSON.stringify([entry]));
    }
  };

  const handleReset = () => {
    setAnswers({});
    setSubmitted(false);
    setPercent(null);
  };

  useEffect(() => {
    const currentTitle = searchParams.get("title");
    if (currentTitle) setTitle(currentTitle);
  }, [searchParams]);

  if (!subject) {
    return <Typography variant="h5">Fach nicht gefunden</Typography>;
  }

  if (!quiz) {
    return <Typography variant="h5">Test nicht gefunden</Typography>;
  }

  // --- После сдачи ---
  if (submitted && percent !== null) {
    return (
      <Paper sx={{ p: 4, borderRadius: 3, backgroundColor: "#f5f7fa" }}>
        <Typography variant="h5" gutterBottom>
          {subject.title} — {quiz.theme}
        </Typography>
        <Alert severity="success" sx={{ mb: 2 }}>
          Sie haben den Test erfolgreich abgeschlossen!
        </Alert>
        <Typography variant="h6">
          Ihr Ergebnis: <strong>{percent}%</strong> richtig
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Typography variant="subtitle1" gutterBottom>
          Fragenanalyse:
        </Typography>
        {quiz.questions.map((q, idx) => {
          const userAnswer = answers[idx];
          const correct = q.answer;
          const isCorrect = userAnswer === correct;
          return (
            <Box
              key={idx}
              sx={{
                p: 2,
                mb: 2,
                borderRadius: 2,
                backgroundColor: isCorrect ? "success.light" : "error.light",
              }}
            >
              <Typography variant="body1" gutterBottom>
                {idx + 1}. {q.question}
              </Typography>
              <Typography variant="body2">
                Ihre Antwort: <strong>{userAnswer || "-"}</strong>
              </Typography>
              {!isCorrect && (
                <Typography variant="body2">
                  Richtige Antwort: <strong>{correct}</strong>
                </Typography>
              )}
            </Box>
          );
        })}

        <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
          <Button variant="outlined" onClick={handleReset}>
            Erneut versuchen
          </Button>
          <Button variant="contained" color="primary" onClick={() => navigate(`/${entitites.TESTS}`)}>
            Zur Tests
          </Button>
        </Box>
      </Paper>
    );
  }

  // --- Форма до сдачи ---
  return (
    <Paper sx={{ p: 4, borderRadius: 3, backgroundColor: "#f5f7fa" }}>
      <form onSubmit={handleSubmit}>
        <Typography variant="h5" component="h2" gutterBottom>
          {subject.title} — {quiz.theme}
        </Typography>

        <Divider sx={{ mb: 3 }} />

        {quiz.questions.map((q, idx) => {
          const groupName = `question-${idx}`;
          const groupLabelId = `label-${groupName}`;
          return (
            <Fragment key={`${idx}-${q.question}`}>
              <QuestionBlock>
                <FormLabel id={groupLabelId} sx={{ fontWeight: "bold", mb: 1 }}>
                  {idx + 1}. {q.question}
                </FormLabel>
                <RadioGroup
                  aria-labelledby={groupLabelId}
                  name={groupName}
                  value={answers[idx] ?? ""}
                  onChange={(e) => handleOptionChange(idx, e.target.value)}
                >
                  {q.options.map((option, optIdx) => (
                    <StyledFormControlLabel
                      key={`${idx}-${optIdx}-${option}`}
                      value={option}
                      control={<Radio />}
                      label={option}
                      checked={answers[idx] === option}
                    />
                  ))}
                </RadioGroup>
              </QuestionBlock>
              {idx < quiz.questions.length - 1 && <Divider sx={{ mb: 2 }} />}
            </Fragment>
          );
        })}

        <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
          <Button
            type="submit"
            variant="contained"
            disabled={!allAnswered}
          >
            Test abschließen
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => navigate(entitites.HOME)}
          >
            Zur Startseite
          </Button>
        </Box>
      </form>
    </Paper>
  );
};
