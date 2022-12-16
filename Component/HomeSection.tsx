import { Box, Typography, List, ListItem, Divider } from "@mui/material";
import Image from "next/image";
import React, { ReactElement } from "react";
import { useParallax } from "react-scroll-parallax";

export type HomeSectionProps = {
  image: string;
  subtitle: string;
  title: string;
  body: ReactElement;
  points: string[];
  index?: number;
};

const HomeSection = ({
  image,
  subtitle,
  title,
  body,
  points,
  index,
}: HomeSectionProps) => {
  const { ref } = useParallax({ speed: 3 });
  const checkIfEven = (index: number): boolean => {
    return index % 2 === 0;
  };
  return (
    <Box
      // px={2}
      display={{ xs: "block", md: "flex" }}
      // @ts-ignore
      flexDirection={checkIfEven(index) ? "row-reverse" : "row"}
      // justifyContent="space-between"
      sx={{ bgcolor: "primary.main", color: "secondary.main" }}
    >
      <Box ref={ref}>
        <Box
          sx={{
            backgroundImage: `url(
              ${image}
              )`,
            height: { xs: "35vh", md: "100vh" },
            backgroundPosition: "right center",
            backgroundSize: "cover",
            // filter: "saturate(50%) opacity(80%)",
            width: { md: "50vw" },
            // flexGrow: 1,
          }}
        />
      </Box>

      <Box
        my={2}
        width={{ md: "50vw" }}
        pl={{ md: 8 }}
        mx={2}
        pr={{ md: 20 }}
        textAlign="left"
      >
        <Typography
          variant="caption"
          textTransform="uppercase"
          color="GrayText"
        >
          {subtitle}
        </Typography>
        <Typography my={2} variant="h4" fontWeight={500}>
          {title}
        </Typography>
        <>{body}</>

        <Divider
          color="#fff"
          sx={{
            height: "2px",
            width: "10%",
          }}
        />

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
              <Typography variant="caption">{point}</Typography>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default HomeSection;
