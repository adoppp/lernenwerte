import type { SxProps } from "@mui/material";
import type { CSSProperties } from "@mui/material";
import { grey } from "@mui/material/colors";

export const boxStyles: SxProps = {
    borderBottom: `1px solid ${grey[300]}`,
};

export const containerStyles: SxProps = { 
    display: 'flex',
    justifyContent: "space-between",
    alignItems: 'center',
    padding: '12px 32px',
};

export const imgStyles: CSSProperties = { 
    width: '80px', 
    height: '50px'
};