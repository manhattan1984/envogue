import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import MyDivider from "./MyDivider";

export type ContactItemProps = {
  title: string;
  name: string;
  phone: string;
};
const ContactItem = ({ title, name, phone }: ContactItemProps) => {
  return (
    <Paper
      sx={{
        m: 2,
        py: 3,
        flexGrow: 1,
        borderRadius: 0,
      }}
    >
      <Box
        textAlign="center"
        sx={{
          bgcolor: "secondary.main",
          color: "primary.main",
        }}
        display="flex"
        justifyContent="space-around"
        flexDirection="column"
      >
        <Typography fontWeight="bolder" my={2}>
          {name}
        </Typography>
        <Box
          sx={{
            width: "25px",
            height: "2px",
            bgcolor: "#000",
            m: "0 auto 15px",
          }}
        ></Box>
        <Typography variant="subtitle2">{title}</Typography>

        <Typography my={2} variant="subtitle2" color="earth.main">
          {phone}
        </Typography>
      </Box>
    </Paper>
  );
};

export default ContactItem;
