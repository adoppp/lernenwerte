import type { SxProps } from "@mui/material";
import { grey } from "@mui/material/colors";

export const containerStyles: SxProps = { 
    display: 'flex',
    justifyContent: "space-between",
    alignItems: 'center',
    paddingTop: '16px', 
    paddingBottom: '16px',
    borderBottom: `1px solid ${grey[300]}` 
};