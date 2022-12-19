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
    icon: <HomeWorkOutlined fontSize="medium" color="primary" />,
    title: "premium portfolio",
    text: "Possibility to participate directly in the real estate investment market, with assets for the High-end / Prime Residential market",
  },
  {
    icon: <MonetizationOnOutlined fontSize="medium" color="primary" />,
    title: "INVESTMENT REVENUES",
    text: "Get an annual income of 8% + 12% performance with your participation",
  },
  {
    icon: <WidgetsOutlined fontSize="medium" color="primary" />,
    title: "DIVERSIFICATION",
    text: "Selective diversification of investment across various real estate projects in the most sought after areas of the market.",
  },
  {
    icon: <BookmarkAddedOutlined fontSize="medium" color="primary" />,
    title: "QUALIFY FOR GOLDEN VISA",
    text: "Simplest way to qualify for the Gold Visa program, which in this type of investment is €500,000 .",
  },
  {
    icon: <ClassOutlined fontSize="medium" color="primary" />,
    title: "LIABILTY & REGULATION",
    text: "Professional management, regulated by the CMVM (Securities Markets Commission), periodic audits, assessments by certified experts.",
  },
  {
    icon: <StarBorderOutlined fontSize="medium" color="primary" />,
    title: "TAX EXEMPTION FOR NHR",
    text: "Tax exemption on dividends for non-resident investors.",
  },
];

export const investmentItems = [
  {
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    title: "VOGUE HOMES - FINE LIVING",
    body: "Invest in the Prime Portuguese Residential market, and high-end projects having a conservative investment strategy, ally to privileged locations, ensures attractive returns to our investors. Profitability and Innovation, combined with Quality and Sophistication provides very high-end and contemporaneity projects, where all details are taken into consideration.",
    points: [
      {
        title: "Investment Scope:",
        text: "New construction projects, renovation projects, greenfield, high-end market residential and hospitality",
      },
      {
        title: "Market strategy:",
        text: "Prime locations, first line architecture, full development control",
      },
      {
        title: "Minimum subscription amount:",
        text: "€150.000",
      },
      {
        title: "Average Revenues:",
        text: "between 14% and 18% per year paid on the exit",
      },
      {
        title: "Investment period:",
        text: "40 to 48 months",
      },
      {
        title: "Average ROE:",
        text: "between 50% and 60%",
      },
    ],
  },
  {
    image:
      "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    title: "PORTUGAL OPPORTUNITIES FUND (POF)",
    body: "POF is a Venture Capital Investment Fund focused on Real Estate Opportunities, targeting highly attractive, high-end projects with a conservative investment strategy. It was designed to get attractive returns to our investors, for that POF have group the best partners in financial asset management - QUADRANTIS, AND being VOGUE HOMES, with its large experience the investment advisor, also has additionally POF also have known personalities from Finance & Legal sector, as Advisory Board.",
    points: [
      {
        title: "Investment Scope:",
        text: "New construction projects, renovation projects, greenfield, high-end market residential and hospitality",
      },
      {
        title: "Fund Manager:",
        text: "Quadrantis Capital SCR SA",
      },
      {
        title: "Investment Term:",
        text: "10 years (minimum term 7 years)",
      },
      {
        title: "Target Fund Size:",
        text: "€35 Million",
      },
      {
        title: "Investment Amount:",
        text: "Min € 50,000 or € 500,000 (Golden Visa Investors)",
      },
      {
        title: "Target Fund Return:",
        text: "8% annually",
      },
      {
        title: "Management Fee Fixed:",
        text: "0.5% annually (with a minimum of €150.000)",
      },
    ],
  },
];

export const steps = [
  "Opportunity assessment and investment analysis.",
  "Investment decision and investment selection.",
  "Legal and comercial Due diligence.",
  "Adherence to investment.",
];

export const advantages = [
  {
    image:
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    title: "TRACK RECORD",
    text: "Investment potential, prime location and first-line architecture",
  },
  {
    image:
      "https://images.unsplash.com/photo-1552819686-25b0c726045d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    title: "GOLDEN VISA",
    text: "Apply for Portuguese citizenship and gain access to all EU market",
  },
  {
    image:
      "https://images.unsplash.com/photo-1578308148355-6e1b5300f134?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80",
    title: "ABOUT US",
    text: "Knowledge and expertise for the success of your investments.",
  },
];
