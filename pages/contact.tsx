import { Box, Toolbar, Typography } from "@mui/material";
import React from "react";
import AreYouIn from "../Component/AreYouIn";
import ContactItem from "../Component/ContactItem";
import { contactItems } from "../constants";

const Contact = () => {
  return (
    <>
      {/* <Toolbar /> */}
      <Box
        py={6}
        mb={4}
        sx={{
          bgcolor: "primary.main",
          color: "secondary.main",
        }}
      >
        <Typography variant="h4" width="40%" my={6} mx={2} fontWeight={200}>
          CONTACT US TO GET STARTED!
        </Typography>
        <Box
          display={{ md: "flex" }}
          justifyContent="center"
          alignItems="center"
        >
          {contactItems.map((item, index) => (
            <ContactItem {...item} key={index} />
          ))}
        </Box>
      </Box>
      {/* <AreYouIn /> */}
    </>
  );
};

export default Contact;
