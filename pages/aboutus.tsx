import {
  Box,
  Divider,
  ImageList,
  ImageListItem,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import React from "react";
import AreYouIn from "../Component/AreYouIn";
import BoardOfDirector from "../Component/BoardOfDirector";
import MyDivider from "../Component/MyDivider";
import MyList from "../Component/MyList";
import ScrollDown from "../Component/ScrollDown";
import { aboutUsPoints, directors, houses } from "../constants";

const AboutUs = () => {
  const trigger = useScrollTrigger();
  return (
    <Box>
      <Box
        sx={{
          width: "100%",
          zIndex: 0,
          position: "relative",
        }}
      >
        <video
          style={{
            width: "100%",
            objectFit: "cover",
            height: "100vh",
            filter: "brightness(50%)",
          }}
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/video.mp4" type="video/mp4"></source>
        </video>
      </Box>
      <Box
        textAlign="center"
        color="secondary.main"
        sx={{
          position: "absolute",
          zIndex: 3,
          top: "30%",
          px: 3,
          height: "70%",
          width: "100%",
        }}
        display="flex"
        justifyContent="space-around"
        flexDirection="column"
      >
        <Typography variant="h4" fontWeight={300}>
          TAKE YOUR INVESTMENTS FURTHER
        </Typography>
        <Typography my={3} variant="subtitle1" fontWeight={300}>
          WE PROVIDE OUR CLIENTS THE BEST OPPORTUNITIES TO INVEST IN THE PRIME
          REAL ESTATE PORTUGUESE MARKET
        </Typography>
        <ScrollDown trigger={trigger} />
      </Box>

      <Box display={{ md: "flex" }}>
        <ImageList variant="masonry" cols={3} gap={8}>
          {houses.map((item) => (
            <ImageListItem key={item}>
              <img
                src={`${item}?w=248&fit=crop&auto=format`}
                srcSet={`${item}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>

        <Box mx={2} my={4} px={{ md: 3 }}>
          <Typography color="GrayText" variant="caption">
            OUR SCOPE
          </Typography>
          <Typography my={2} variant="h6" fontWeight="bolder">
            MAKING SURE THAT YOUR INVESTMENTS ARE IN GOOD HANDS
          </Typography>
          <Typography variant="subtitle2">
            VOGUE CAPITAL can advise you on the best real estate investments and
            also on the Portugal Opportunities Fund (POF), managed by Quadrantis
            Capital. We have a strong reputation providing our Clients the best
            opportunities to safely invest in the Prime Real Estate Portuguese
            Market.
          </Typography>

          <Divider
            color="#000"
            sx={{
              height: "2px",
              width: "4%",
              my: 2,
            }}
          />

          <MyList points={aboutUsPoints} />
        </Box>
      </Box>

      <Box
        sx={{
          bgcolor: "primary.main",
          py: 6,
        }}
        textAlign="center"
        color="secondary.main"
      >
        <Box mx={3}>
          <Typography variant="h4">TOGETHER FOR YOUR INVESTMENTS</Typography>
          <Typography color="GrayText" variant="subtitle1">
            Teamwork, experience, innovation and ability to gather information,
            provide us the means to develop high quality investments, giving
            them a low risk, thus responding to investors that are looking to
            invest in the Portuguese premium real estate market.
          </Typography>

          <Box
            display={{ md: "flex" }}
            width="100%"
            justifyContent="space-around"
          >
            {directors.map((director, index) => (
              <BoardOfDirector {...director} key={index} />
            ))}
          </Box>
        </Box>
      </Box>
      <AreYouIn />
    </Box>
  );
};

export default AboutUs;
