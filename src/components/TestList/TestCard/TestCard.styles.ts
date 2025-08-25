import { colors, type SxProps } from "@mui/material";
import type { CSSProperties } from "@mui/material";
import type { ColorNaming } from "@/types";

export const cardStylesDecorator = (color: ColorNaming): SxProps => {
    const cardStyles: SxProps = { 
        backgroundColor: colors[color][100 as keyof typeof colors[typeof color]], 
    };
    return cardStyles;
};

export const CardContentStyles: SxProps = { 
    display: 'flex', 
    justifyContent: 'space-between' 
}; 

export const blockStyles: CSSProperties = { 
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'space-between' 
};

export const actionsStyles: SxProps = { 
    justifyContent: 'flex-end'
};

export const descriptionsStyles: SxProps = { 
    marginRight: '8px'
};