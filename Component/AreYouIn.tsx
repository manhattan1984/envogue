import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

const AreYouIn = () => {
  const router = useRouter();
  return (
    <Box
      textAlign="center"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      sx={{
        backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ), url(https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        height: "70vh",
        width: "100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Typography my={3} color="secondary.main" variant="h1">
        ARE YOU IN?
      </Typography>
      <Button
        variant="outlined"
        color="secondary"
        onClick={() => {
          router.push("contact");
        }}
      >
        GENERAL INQUIRY
      </Button>
    </Box>
  );
};

export default AreYouIn;
