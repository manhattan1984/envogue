import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Cancel, CancelOutlined, Close } from "@mui/icons-material";
import Image from "next/image";
import { Collapse, useScrollTrigger } from "@mui/material";
import { useRouter } from "next/router";

const drawerWidth = "75vw";
const navItems = [
  { title: "Invest With Us", link: "/" },
  { title: "About Us", link: "aboutus" },
  { title: "Contact", link: "contact" },
];

export default function TheAppBar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const [color, setColor] = useState("secondary");

  const router = useRouter();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "left" }}>
      <Box justifyContent="flex-end" alignItems="center" display="flex">
        <Typography variant="caption" color="GrayText">
          CLOSE
        </Typography>
        <IconButton>
          <Close fontSize="medium" />
        </IconButton>
      </Box>
      <List>
        {navItems.map(({ title, link }) => (
          <ListItem key={title} disablePadding>
            <ListItemButton
              onClick={() => {
                router.push(link);
              }}
              sx={{ textAlign: "left" }}
            >
              <ListItemText primary={title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const trigger = useScrollTrigger();

  useEffect(() => {
    setColor(() => (trigger ? "secondary" : "primary"));
  }, [trigger]);

  return (
    <Box sx={{ display: "flex" }}>
      {/* @ts-ignore */}
      <AppBar
        component="nav"
        color={trigger ? "secondary" : "transparent"}
        elevation={0}
      >
        <Toolbar>
          <Typography
            variant="h6"
            color={!trigger ? "secondary" : "primary"}
            component="div"
            sx={{ flexGrow: 1 }}
            onClick={() => router.push("/")}
          >
            ENVOGUE
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map(({ title, link }) => (
              <Button
                onClick={() => {
                  router.push(link);
                }}
                key={title}
                color={!trigger ? "secondary" : "primary"}
              >
                {title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          anchor="right"
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
