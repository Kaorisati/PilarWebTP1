import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  IconButton,
  Container,
  Avatar,
} from "@mui/material";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import SideMenu from "../../components/SideMenu";
import MenuIcon from "@mui/icons-material/Menu";
import PopMenu from "../../components/PopMenu";

const DashboardLayout = () => {
  const [open, setOpen] = useState(false);
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar position="absolute">
        <Toolbar
          sx={{
            pr: "24px",
          }}
        >
          <Box px={2} sx={{ cursor: "pointer" }}>
            <MenuIcon sx={{ color: "white" }} onClick={() => setOpen(true)} />
          </Box>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}
          >
            Pilar Tecno Web
          </Typography>
          <PopMenu />
          {/* <IconButton size="small" sx={{ ml: 2 }}>
            <Avatar sx={{ width: 32, height: 32 }}>K</Avatar>
          </IconButton> */}
        </Toolbar>
      </AppBar>

      <SideMenu open={open} onClose={() => setOpen(false)} />

      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
        }}
      >
        <Toolbar />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Outlet />
        </Container>
      </Box>
    </Box>
  );
};
export default DashboardLayout;
