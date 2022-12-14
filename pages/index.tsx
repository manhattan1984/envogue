import { ArrowDropDownCircleOutlined } from "@mui/icons-material";
import { Typography, Box, Link, useScrollTrigger } from "@mui/material";
import NextLink from "next/link";
import HomeSection, { HomeSectionProps } from "../Component/HomeSection";
import Image from "next/image";

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

type BodyTypographyProps = {
  text: string;
};

const BodyTypography = ({ text }: BodyTypographyProps) => {
  return (
    <Typography my={2} variant="body2" fontWeight={300}>
      {text}
    </Typography>
  );
};

const homeSections: HomeSectionProps[] = [
  {
    image:
      "https://images.unsplash.com/photo-1620015092538-e33c665fc181?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    subtitle: "What We Do",
    title: "THE BEST OPPORTUNITIES FOR SECURE INVESTMENTS",
    body: (
      <>
        <BodyTypography
          text={` Some call a profitable investment opportunity luck, we call it
            competence and dedication.`}
        />

        <BodyTypography
          text={` At VOGUE CAPITAL we advise and manage top-tier investments in the
          Portuguese real estate market, in the last few years one of the most
          attractive in Europe . We do this through our "Vogue Homes - Fine
          Living" and "Portugal Opportunities Fund" (POF) programs that we would
          be delighted to present to you.`}
        />

        <BodyTypography
          text={`Our journey has shown us that profitability and safety are achieved
          through competence, dedication and permanent innovation., as Winston
          Churchill said: “Luck does not exist, what they call luck is the care
          with the details."`}
        />
      </>
    ),
    points: [
      "Access to the Portuguese Prime Real Estate market;",
      `Advising on the P.O.F. Fund;`,
      "New construction projects, renovation projects and greenfield;",
      "High-end residential and hospitality market.",
    ],
  },
  {
    image:
      "https://images.unsplash.com/photo-1628744876657-abd5086695dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    subtitle: "MARKET APPROACH",
    title: "HIGH POTENTIAL ASSETS FOR HIGH STANDARD CUSTOMERS",
    body: (
      <>
        <BodyTypography
          text={`Experience, transparency and solidity make VOGUE CAPITAL the best partner to guide you in the real estate investment market, through access to premium investments in privileged locations, where we develop innovative architectural projects.`}
        />

        <BodyTypography
          text={`All our investments are based on Prime or Ultra Prime assets aimed at high-end national or international clients with the option of accessing the Portugal Golden Visa program.`}
        />
      </>
    ),
    points: [
      "Prime locations",
      `First line architecture`,
      "Top quality construction and materials",
      "Full development control",
    ],
  },
  {
    image:
      "https://images.unsplash.com/photo-1531971589569-0d9370cbe1e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=881&q=80",
    subtitle: "What We Do",
    title: "THE BEST OPPORTUNITIES FOR SECURE INVESTMENTS",
    body: (
      <>
        <BodyTypography
          text={` Some call a profitable investment opportunity luck, we call it
            competence and dedication.`}
        />

        <BodyTypography
          text={` At VOGUE CAPITAL we advise and manage top-tier investments in the
          Portuguese real estate market, in the last few years one of the most
          attractive in Europe . We do this through our "Vogue Homes - Fine
          Living" and "Portugal Opportunities Fund" (POF) programs that we would
          be delighted to present to you.`}
        />

        <BodyTypography
          text={`Our journey has shown us that profitability and safety are achieved
          through competence, dedication and permanent innovation., as Winston
          Churchill said: “Luck does not exist, what they call luck is the care
          with the details."`}
        />
      </>
    ),
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

      <Box mx={2} pr={2} my={4}>
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
          VOGUE Homes S.A. as the Fund's Adviser and Asset Manager. All accounts
          are audited by the international consultant Mazars, and the depositary
          bank for the contracted securities (participation units) is BANKINTER.
        </Typography>
      </Box>
      <Box py={4} display="flex" flexWrap={"wrap"} justifyContent="center">
        {logos.map((logo, index) => (
          <img
            src={`/${logo}`}
            style={{
              width: "40%",
              height: "auto",
              marginRight: "8px"
            }}
          />
        ))}
      </Box>
    </Box>
  );
}
