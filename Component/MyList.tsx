import { List, ListItem, Typography } from "@mui/material";
import React from "react";

type MyListProps = {
  points: string[];
};

const MyList = ({ points }: MyListProps) => {
  return (
    <List>
      {points.map((point, index) => (
        <ListItem
          sx={{
            display: "list-item",
            listStyleType: "disc",
            ml: 2,
            color: "GrayText",
            my: -2,
          }}
          key={index}
        >
          <Typography variant="subtitle2" ml={-2}>
            {point}
          </Typography>
        </ListItem>
      ))}
    </List>
  );
};

export default MyList;
