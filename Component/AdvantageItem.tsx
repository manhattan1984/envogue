import { Box, Typography } from "@mui/material";
import React from "react";
import { useParallax } from "react-scroll-parallax";

type AdvantageItemProps = {
  image: string;
  title: string;
  text: string;
};
const AdvantageItem = ({ image, title, text }: AdvantageItemProps) => {
  const { ref } = useParallax({ speed: 1 });
  return (
    <Box mx={{ md: 2 }}>
      <Box
        ref={ref}
        sx={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          height: { xs: "35vh", md: "70vh" },
          width: "100%",
          backgroundRepeat: "no-repeat",
        }}
      />
      <Typography my={1} variant="subtitle2" color="GrayText">
        {title}
      </Typography>
      <Typography variant="body2" my={2}>
        {text}
      </Typography>
    </Box>
  );
};

export default AdvantageItem;
