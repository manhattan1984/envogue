import { Typography } from "@mui/material";

type BodyTypographyProps = {
  text: string;
};

export const BodyTypography = ({ text }: BodyTypographyProps) => {
  return (
    <Typography my={2} variant="body2" fontWeight={300}>
      {text}
    </Typography>
  );
};
