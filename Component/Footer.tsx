import { Box, Container, Typography, Link } from "@mui/material";
import Image from "next/image";
import React from "react";
import { TheLink } from "./TheLink";

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
        <TheLink text="info@vogue-capital.com" href={""} />
      </>
    ),
  },
  {
    title: "Browse",
    children: (
      <>
        <TheLink text="Invest with us" href={""} />
        <TheLink text="About Us" href={""} />
        <TheLink text="Contact & Support" href={""} />
      </>
    ),
  },
  {
    title: "Legal Terms",
    children: (
      <>
        <TheLink text="Legal Terms & Copyright" href={""} />
        <TheLink text="About Cookies" href={""} />
        <TheLink text="Contact us" href={""} />
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
        <Typography fontWeight="bolder" variant="caption" display="block">
          Light Web Dev
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
