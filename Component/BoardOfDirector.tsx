import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

type BoardOfDirectorProps = {
  name: string;
  title: string;
  img: string;
};

const BoardOfDirector = ({ name, title, img }: BoardOfDirectorProps) => {
  return (
    <Box my={4} flexGrow={1}>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: "60vh", md: "70vh" },
          maxWidth: { md: "30vw" },
        }}
      >
        <Image
          alt={name}
          src={img}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
      </Box>

      <Box my={2}>
        <Typography variant="body2" fontWeight="bolder">
          {name}
        </Typography>
        <Typography fontWeight={200} variant="subtitle2">
          {title}
        </Typography>
      </Box>
    </Box>
  );
};

export default BoardOfDirector;
