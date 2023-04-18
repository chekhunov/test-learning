import React from "react";

import { Typography, TypographyProps } from "@mui/material";
import typography from '~/theme/typography';

type ResponsiveSize = "xs" | "sm" | "md" | "lg" | "xl";

interface TextProps {
  component?: React.ElementType;
  size: Partial<Record<ResponsiveSize, TypographyProps["variant"]>>;
  lineClamp?: string;
}

const generateStyles = (size: TextProps["size"]) => {
  const genStyles = Object.entries(size || {}).reduce(
    (acc, [key, value]) => {
      let copyAcc = acc;

      copyAcc = {
        fontSize: {
          ...copyAcc.fontSize,
          [key]: typography[value ?? "body1"].fontSize,
        },
        lineHeight: {
          ...copyAcc.lineHeight,
          [key]: typography[value ?? "body1"].lineHeight,
        },
        fontFamily: {
          ...copyAcc.fontFamily,
          [key]: typography[value ?? "Mulish"].fontFamily,
        },
      };

      return copyAcc;
    },
    { fontSize: {}, lineHeight: {}, fontFamily: {} }
  );

  return genStyles;
};

const Text: React.FC<TextProps & TypographyProps> = ({
  size,
  children,
  lineClamp,
  sx,
  ...rest
}) => {
  const styles = generateStyles(size);

  return (
    <Typography
      sx={{
        ...styles,
        ...(lineClamp && {
          display: "-webkit-box",
          textOverflow: "ellipsis",
          overflow: "hidden",
          "-webkit-line-clamp": lineClamp,
          "-webkit-box-orient": "vertical",
          wordBreak: "break-all",
        }),
        ...sx,
      }}
      {...rest}
    >
      {children}
    </Typography>
  );
};

export default Text;
