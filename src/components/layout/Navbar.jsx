import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Logo from "../../assets/image/elmas.jpg";
import styles from "./navbar.module.css";
// import Link from "@mui/material/Link";
import { useState } from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const pages = ["Anasayfa", "Ürünler", "Kataloglar"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Navbar() {
const [activeIndex, setActiveIndex] = useState(null);

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (index) => {
    setAnchorElNav(null);
    setActiveIndex(index);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" color="inherit" sx={{padding:"5px"}}>
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            position: "relative",
          }}
        >
          {/* xs: Toggle sol, md: logo + başlık sol */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexGrow: 0,
              width: { xs: "auto", md: "auto" },
            }}
          >
            {/* Toggle - sadece xs ve altı */}
            <IconButton
              size="large"
              aria-label="open navigation menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
            >
              <MenuIcon />
            </IconButton>

            {/* Logo + başlık - sadece md ve üzeri */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                marginLeft:"10%"
              }}
            >
              <Box
                component="img"
                src={Logo}
                alt="Logo"
                className={styles.logo}
                sx={{ mr: 1 }}
              />
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: "1px",
                  color: "black",
                  textDecoration: "none",
                  textTransform: "none",
                  fontSize:"1.45rem"
                }}
              >
                BsJewelry
              </Typography>
            </Box>
          </Box>

          {/* xs: Logo ortada */}
          <Box
            sx={{
              position: { xs: "absolute", md: "static" },
              left: "50%",
              top: "50%",
              transform: { xs: "translate(-50%, -50%)", md: "none" },
              display: { xs: "flex", md: "none" },
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              src={Logo}
              alt="Logo"
              className={styles.logo}
              sx={{ height: 40}}
            />
            <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: "1px",
                  color: "black",
                  textDecoration: "none",
                  textTransform: "none",
                  fontSize:"1.45rem"
                }}
              >
                BsJewelry
              </Typography>
          </Box>

          {/* Orta: sayfa linkleri md ve üzeri */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              gap: 2,
            }}
          >
            {pages.map((page,index) => (
              <Box
                key={page}
                onClick={()=>handleCloseNavMenu(index)}
                sx={{
                  my: 2,
                  color: "rgb(108, 108, 108)",
                  display: "block",
                  textTransform: "none",
                  fontWeight: 500,
                  fontSize: "1.1rem",
                  textDecoration:"none",
                  cursor:"pointer"
                }}
                className={`${styles.link} ${activeIndex === index ? styles.active : ""}`}
              >
                {page}
              </Box>
              //pages array olacak title ve src olarak
            ))}
          </Box>

          {/* Sağ: Avatar her zaman */}
          {/*Buraya sepet kısmı eklenecek badge ile birlikte */}
          <Box sx={{ flexGrow: 0}}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <AccountCircleIcon style={{fontSize:"2.5rem"}}/>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Mobil Menü */}
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            {pages.map((page) => (
              <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">{page}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;