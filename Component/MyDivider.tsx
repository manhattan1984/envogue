import { Box } from "@mui/material";
import React from "react";

type MyDividerProps = {
  color: string;
};

const MyDivider = ({ color }: MyDividerProps) => {
  return (
    <Box
      sx={{
        width: "25px",
        height: "2px",
        bgcolor: color,
        m: { xs: "0 auto 15px", md: "0 0 1rem 0" },
      }}
    ></Box>
  );
};

export default MyDivider;
