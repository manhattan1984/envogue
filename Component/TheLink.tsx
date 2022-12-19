import { Link } from "@mui/material";
import NextLink from "next/link";

type IndexLinkProp = {
  href: string;
  text: string;
};

export const TheLink = ({ href = "", text }: IndexLinkProp) => {
  return (
    <Link
      color="earth.main"
      underline="none"
      href={href}
      component={NextLink}
      variant="body2"
      my={2}
      display="block"
      sx={{
        // fontSize: "1rem",
      }}
    >
      {text}
    </Link>
  );
};
