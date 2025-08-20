import type { SxProps } from "@mui/material";
import { grey } from "@mui/material/colors";

export const containerStyles: SxProps = { 
    display: 'flex',
    justifyContent: "space-between",
    alignItems: 'center',
    padding: '12px 32px', 
    borderBottom: `1px solid ${grey[300]}` 
};