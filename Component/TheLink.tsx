import { Link } from "@mui/material";
import NextLink from "next/link";

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
