import { type FC, type ReactElement, useEffect, useState } from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";

type ResultEntry = {
  subject: string;
  theme: string;
  percent: number;
  date?: string;
};

export const Results: FC = (): ReactElement => {
  const [results, setResults] = useState<ResultEntry[]>([]);

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem("results") || "[]") as ResultEntry[];
      setResults(stored);
    } catch {
      setResults([]);
    }
  }, []);

  const handleClear = () => {
    localStorage.removeItem("results");
    setResults([]);
  };

  if (results.length === 0) {
    return (
      <Box p={3}>
        <Typography variant="h5" gutterBottom>
          Ergebnisse
        </Typography>
        <Typography variant="body1">Sie haben noch keine Tests durchgeführt.</Typography>
      </Box>
    );
  }

  return (
    <Box p={3}>
      <Typography variant="h5" gutterBottom>
        Meine Ergebnisse
      </Typography>

      <TableContainer 
        component={Paper} 
        sx={{ mt: 2, borderRadius: 3, boxShadow: 3, overflow: "hidden" }}
      >
        <Table>
          <TableHead sx={{ backgroundColor: "#f5f7fa" }}>
            <TableRow>
              <TableCell>Fach</TableCell>
              <TableCell>Thema</TableCell>
              <TableCell>Ergebnis</TableCell>
              <TableCell>Datum</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {results.map((res, idx) => (
              <TableRow 
                key={idx} 
                sx={{ "&:nth-of-type(odd)": { backgroundColor: "#fafafa" } }}
              >
                <TableCell>{res.subject}</TableCell>
                <TableCell>{res.theme}</TableCell>
                <TableCell>{res.percent}%</TableCell>
                <TableCell>{res.date || "-"}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Button
        variant="outlined"
        color="error"
        sx={{ mt: 2, borderRadius: 2 }}
        onClick={handleClear}
      >
        Verlauf löschen
      </Button>
    </Box>
  );
};

export default Results;
