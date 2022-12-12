import { ArrowDropDownCircleOutlined } from "@mui/icons-material";
import { Typography, Box, Link, useScrollTrigger } from "@mui/material";
import NextLink from "next/link";
import HomeSection, { HomeSectionProps } from "../Component/HomeSection";

const links = [
  {
    href: "",
    text: "Presentation",
  },
  {
    href: "",
    text: "Why Invest With Us",
  },
  {
    href: "",
    text: "Start Investing",
  },
  {
    href: "",
    text: "How Does It Work",
  },
];

type IndexLinkProp = {
  href: string;
  text: string;
};

export const TheLink = ({ href = "", text }: IndexLinkProp) => {
  return (
    <Link
      color="#937d61"
      underline="none"
      href={href}
      component={NextLink}
      variant="caption"
      my={2}
      display="block"
    >
      {text}
    </Link>
  );
};

const homeSections: HomeSectionProps[] = [
  {
    image: "/logo-black.svg",
    subtitle: "What We Do",
    title: "THE BEST OPPORTUNITIES FOR SECURE INVESTMENTS",
    body: `Some call a profitable investment opportunity luck, we call it competence and dedication.

    At VOGUE CAPITAL we advise and manage top-tier investments in the Portuguese real estate market, in the last few years one of the most attractive in Europe . We do this through our "Vogue Homes - Fine Living" and "Portugal Opportunities Fund" (POF) programs that we would be delighted to present to you.
    
    Our journey has shown us that profitability and safety are achieved through competence, dedication and permanent innovation., as Winston Churchill said: “Luck does not exist, what they call luck is the care with the details."`,
    points: [
      "Access to the Portuguese Prime Real Estate market;",
      `Advising on the P.O.F. Fund;`,
      "New construction projects, renovation projects and greenfield;",
      "High-end residential and hospitality market.",
    ],
  },
];

export default function Home() {
  const trigger = useScrollTrigger();
  return (
    <>
      <Box
        sx={{ bgcolor: "primary.main", color: "secondary.main" }}
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

      <Box>
        {homeSections.map((homeSection, index) => (
          <HomeSection {...homeSection} key={index} />
        ))}
      </Box>
    </>
  );
}
