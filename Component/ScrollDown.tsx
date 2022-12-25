import { ArrowDropDownCircleOutlined } from "@mui/icons-material";
import { Box, Fade, Typography } from "@mui/material";
import React from "react";

type ScrollDownProps = {
  trigger: boolean;
};

const ScrollDown = ({ trigger }: ScrollDownProps) => {
  return (
    <>
      <Fade in={!trigger}>
        <Box
          flexDirection="column"
          textAlign="center"
          alignItems="center"
          display="flex"
          visibility={trigger ? "hidden" : "visible"}
        >
          <Typography variant="caption">Scroll Down</Typography>
          <ArrowDropDownCircleOutlined />
        </Box>
      </Fade>
    </>
  );
};

export default ScrollDown;
