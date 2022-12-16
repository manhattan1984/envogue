import {
  BookmarkAddedOutlined,
  ClassOutlined,
  HomeWorkOutlined,
  MonetizationOnOutlined,
  StarBorderOutlined,
  WidgetsOutlined,
} from "@mui/icons-material";
import { BodyTypography } from "../Component/BodyTypography";
import { HomeSectionProps } from "../Component/HomeSection";

export const links = [
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

export const homeSections: HomeSectionProps[] = [
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

export const benefitItems = [
  {
    icon: <HomeWorkOutlined fontSize="medium" color="GrayText" />,
    title: "premium portfolio",
    text: "Possibility to participate directly in the real estate investment market, with assets for the High-end / Prime Residential market",
  },
  {
    icon: <MonetizationOnOutlined fontSize="medium" color="GrayText" />,
    title: "INVESTMENT REVENUES",
    text: "Get an annual income of 8% + 12% performance with your participation",
  },
  {
    icon: <WidgetsOutlined fontSize="medium" color="GrayText" />,
    title: "DIVERSIFICATION",
    text: "Selective diversification of investment across various real estate projects in the most sought after areas of the market.",
  },
  {
    icon: <BookmarkAddedOutlined fontSize="medium" color="GrayText" />,
    title: "QUALIFY FOR GOLDEN VISA",
    text: "Simplest way to qualify for the Gold Visa program, which in this type of investment is €500,000 .",
  },
  {
    icon: <ClassOutlined fontSize="medium" color="GrayText" />,
    title: "LIABILTY & REGULATION",
    text: "Professional management, regulated by the CMVM (Securities Markets Commission), periodic audits, assessments by certified experts.",
  },
  {
    icon: <StarBorderOutlined fontSize="medium" color="GrayText" />,
    title: "TAX EXEMPTION FOR NHR",
    text: "Tax exemption on dividends for non-resident investors.",
  },
];
