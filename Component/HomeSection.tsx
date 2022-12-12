import { Box, Typography, List, ListItem } from "@mui/material";
import Image from "next/image";
import React from "react";

export type HomeSectionProps = {
  image: string;
  subtitle: string;
  title: string;
  body: string;
  points: string[];
};

const HomeSection = ({
  image,
  subtitle,
  title,
  body,
  points,
}: HomeSectionProps) => {
  return (
    <Box px={2} sx={{ bgcolor: "primary.main", color: "secondary.main" }}>
      {/* <Box>
        <Image fill={true} src={image} alt="house-image" />
      </Box> */}
      <Typography variant="subtitle1" color="GrayText">{subtitle}</Typography>
      <Typography my={2} variant="h5" fontWeight={500}>
        {title}
      </Typography>
      <Typography>{body}</Typography>
      <List>
        {points.map((point, index) => (
          <ListItem
            sx={{
              display: "list-item",
              listStyleType: "disc",
              ml: 2,
              color: "GrayText",
            }}
            key={index}
          >
            {point}
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default HomeSection;
