import React, { ReactElement } from "react";
import { Box, Divider, Typography } from "@mui/material";
import MyDivider from "./MyDivider";

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

      <MyDivider color="primary.main" />

      <Typography variant="subtitle2">{text}</Typography>
    </Box>
  );
};

export default BenefitItem;
