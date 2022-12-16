import React, { ReactElement } from "react";
import { Box, Divider, Typography } from "@mui/material";

type BenefitItemProps = {
  icon: ReactElement;
  title: string;
  text: string;
};

const BenefitItem = ({ icon, title, text }: BenefitItemProps) => {
  return (
    <Box textAlign={{ xs: "center", md: "left" }}>
      <Box
        sx={{
          bgcolor: "background.paper",
          borderColor: "GrayText",
          m: 1,
          border: 1,
          width: "4rem",
          height: "4rem",
          borderRadius: "50%",
          display: "inline-flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {icon}
      </Box>

      <Typography
        fontWeight={600}
        my={2}
        variant="h6"
        textTransform="uppercase"
      >
        {title}
      </Typography>

      <Box
        sx={{
          width: "25px",
          height: "2px",
          bgcolor: "primary.main",
          m: { xs: "0 auto 15px", md: "0 0 1rem 0" },
        }}
      ></Box>

      <Typography variant="subtitle2">{text}</Typography>
    </Box>
  );
};

export default BenefitItem;
