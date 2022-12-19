import { Box, Grid, Typography } from "@mui/material";
import React from "react";

type MyStepsProps = {
  index: number;
  text: string;
};

const MySteps = ({ index, text }: MyStepsProps) => {
  return (
    <Grid item xs={12} md={3}>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          textAlign: "center",
          my: 1,
        }}
      >
        <Box
          sx={{
            border: "1px solid #937d61",
            display: "inline-flex",
            padding: "10px",
            borderRadius: "50%",
            width: "4rem",
            height: "4rem",
            alignItems: "center",
            justifyContent: "center",
            zIndex: "2",
            position: "relative",
            bgcolor: "primary.main",
          }}
        >
          <Typography color="earth.main" variant="h6">
            {index}
          </Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "1px",
            bgcolor: "secondary.main",
            position: "absolute",
            left: 0,
            bottom: "2rem",
          }}
        ></Box>
      </Box>
      <Typography fontWeight={600} variant="body2">{text}</Typography>
    </Grid>
  );
};

export default MySteps;
