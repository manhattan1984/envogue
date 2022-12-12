import { Box, Container, Typography, Link } from "@mui/material";
import Image from "next/image";
import React from "react";
import { TheLink } from "../pages";

type FooterGroupProps = {
  children: React.ReactElement;
  title: string;
};

const footerGroups: FooterGroupProps[] = [
  {
    title: "Office",
    children: (
      <>
        <Typography variant="subtitle2">Rua Luz Soriano 15</Typography>
        <Typography my={1} variant="subtitle2">
          1200-246 Lisboa, Portugal
        </Typography>
        <Typography variant="subtitle2">+351 213 461 246</Typography>
        <TheLink text="info@vogue-capital.com" />
      </>
    ),
  },
  {
    title: "Browse",
    children: (
      <>
        <TheLink text="Invest with us" />
        <TheLink text="About Us" />
        <TheLink text="Contact & Support" />
      </>
    ),
  },
  {
    title: "Legal Terms",
    children: (
      <>
        <TheLink text="Legal Terms & Copyright" />
        <TheLink text="About Cookies" />
        <TheLink text="Contact us" />
      </>
    ),
  },
];

const Footer = () => {
  const FooterGroup = ({ children, title }: FooterGroupProps) => {
    return (
      <Box>
        <Typography my={2} color="GrayText">
          {title}
        </Typography>
        {children}
      </Box>
    );
  };
  return (
    <Box mx={2} mt={3}>
      <Container>
        <Box display={{ md: "flex" }} justifyContent="space-between">
          <Typography variant="h5">Envogue</Typography>

          {footerGroups.map(({ title, children }, index) => (
            <FooterGroup title={title}>{children}</FooterGroup>
          ))}
        </Box>
      </Container>

      <Box
        textAlign="center"
        display={{ md: "flex" }}
        justifyContent="space-between"
      >
        <Typography variant="caption">
          2022 © Envogue Capital - All rights reserved
        </Typography>
        <Typography variant="caption" display="block">
          Light
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
