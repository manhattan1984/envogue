import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import { useParallax } from "react-scroll-parallax";

type Points = {
  title: string;
  text: string;
};

type InvestmentItemProps = {
  image: string;
  title: string;
  body: string;
  points: Points[];
};

const InvestmentItem = ({
  image,
  title,
  body,
  points,
}: InvestmentItemProps) => {
  const { ref } = useParallax({ speed: 1 });
  return (
    <Box
      mx={1}
      sx={{
        width: { md: "30vw" },
      }}
    >
      <Box sx={{ bgcolor: "secondary.main", color: "primary.main" }}>
        <Box>
          <Box
            ref={ref}
            sx={{
              backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ), url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
              height: "35vh",
              width: "100%",
              backgroundRepeat: "no-repeat",
            }}
          />
        </Box>
        <Box px={2}>
          <Typography my={2} variant="h6" fontWeight="bold">
            {title}
          </Typography>
          <Typography variant="body2" mb={6}>
            {body}
          </Typography>

          <Divider />
          {points.map(({ title, text }, index) => (
            <Box key={index} my={1}>
              <Typography variant="subtitle2">{title}</Typography>
              <Typography my={1} variant="body2" fontWeight="bolder">
                {text}
              </Typography>
              <Divider />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default InvestmentItem;
