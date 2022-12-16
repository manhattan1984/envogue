import { ArrowDropDownCircleOutlined } from "@mui/icons-material";
import {
  Typography,
  Box,
  Link,
  useScrollTrigger,
  Grid,
  Container,
} from "@mui/material";
import HomeSection, { HomeSectionProps } from "../Component/HomeSection";
import Image from "next/image";
import { TheLink } from "../Component/TheLink";
import {
  benefitItems,
  homeSections,
  investmentItems,
  links,
} from "../constants";
import BenefitItem from "../Component/BenefitItem";
import { useParallax } from "react-scroll-parallax";
import InvestmentItem from "../Component/InvestmentItem";

export default function Home() {
  const trigger = useScrollTrigger();
  const logos = [
    "vogue-logo.svg",
    "vogue-logo.svg",
    "vogue-logo.svg",
    "vogue-logo.svg",
  ];
  return (
    <Box sx={{ bgcolor: "primary.main", color: "secondary.main" }}>
      <Box
        height="100vh"
        textTransform="uppercase"
        textAlign="center"
        display="flex"
        flexDirection="column"
        justifyContent="space-around"
      >
        <Typography variant="h3" fontWeight={300} letterSpacing={10}>
          ENVOGUE CAPITAL
        </Typography>

        <Box>
          {links.map((link, index) => (
            <TheLink {...link} key={index} />
          ))}
        </Box>

        <Box
          // display="flex"
          flexDirection="column"
          textAlign="center"
          alignItems="center"
          display={trigger ? "none" : "flex"}
        >
          <Typography variant="caption">Scroll Down</Typography>
          <ArrowDropDownCircleOutlined />
        </Box>
      </Box>

      <Box
        sx={{
          bgcolor: "primary.main",
        }}
      >
        {homeSections.map((homeSection, index) => (
          <HomeSection {...homeSection} index={index + 1} key={index} />
        ))}
      </Box>

      <Box px={{ xs: 6 }} my={4} pl={{ md: 12 }} mr={{ md: 12 }}>
        <Typography
          variant="caption"
          textTransform="uppercase"
          color="GrayText"
        >
          STRONG PARTNERSHIPS
        </Typography>
        <Typography my={2} variant="h5" fontWeight={500}>
          LIABILITY AND TRANSPARENCE
        </Typography>
        <Typography variant="body2">
          The Portugal Opportunities Fund (POF) is regulated by the Portuguese
          Securities Market Commission - CMVM, has Quadrantis Capital as its
          management entity (registered and also regulated by the CMVM), and
          VOGUE Homes S.A. as the Fund&apos;s Adviser and Asset Manager. All
          accounts are audited by the international consultant Mazars, and the
          depositary bank for the contracted securities (participation units) is
          BANKINTER.
        </Typography>
      </Box>
      <Box py={4} display="flex" flexWrap={"wrap"} justifyContent="center">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={`/${logo}`}
            style={{
              width: "40%",
              height: "70px",
              maxWidth: "100px",
              marginRight: "8px",
            }}
          />
        ))}
      </Box>
      <Box py={4} sx={{ bgcolor: "secondary.main", color: "primary.main" }}>
        <Typography
          letterSpacing={1}
          mx={10}
          fontWeight={300}
          variant="h5"
          textTransform="uppercase"
          textAlign="center"
        >
          get all the benefits from investing with us
        </Typography>
        <Box px={12}>
          <Grid container my={4} spacing={4}>
            {benefitItems.map((benefit, index) => (
              <Grid item xs={12} md={6} lg={4} key={index}>
                <BenefitItem {...benefit} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
      <Box>
        <Typography my={4} variant="h5" textAlign="center" fontWeight={300}>
          START INVESTING WITH ENVOGUE CAPITAL
        </Typography>

        <Box
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          justifyContent="center"
          alignItems="center"
          mx={1}
        >
          {investmentItems.map((investment, index) => (
            <InvestmentItem {...investment} key={index} />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
