import React, { useState } from "react";
import { Menu, Close } from "@mui/icons-material";
import { AppBar, Box, IconButton, List, ListItem, Typography } from "@mui/material";

const navLinks = [
  { name: "Home", href: "" },
  { name: "AI Learning", href: "#AiPower" },
  { name: "Global Access", href: "#global-access" },
  { name: "Decentralized Tech", href: "#decentralizedTech" },

];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <AppBar
      position="fixed"
      sx={{
        top: 0,
        width: "100%",
        zIndex: 1000,
        background: "rgba(10, 25, 47, 0.8)",
        backdropFilter: "blur(10px)",
        px: { xs: 3, md: 6 },
        py: 1.5,
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {/* Logo */}
      <Typography
        variant="h5"
        sx={{
          fontWeight: "bold",
          fontFamily: "Poppins, sans-serif",
          color: "#FFD700",
          letterSpacing: "2px",
          textTransform: "uppercase",
        }}
      >
        SHARE VALUE
      </Typography>

      {/* Desktop Navigation */}
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          gap: 4,
        }}
      >
        {navLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            style={{
              textDecoration: "none",
              color: "white",
              fontWeight: "500",
              fontSize: "1rem",
              position: "relative",
            }}
          >
            {link.name}
          </a>
        ))}
      </Box>

      {/* Mobile Menu Button */}
      <IconButton
        sx={{ display: { xs: "block", md: "none" }, color: "white" }}
        onClick={() => setOpen(!open)}
      >
        {open ? <Close sx={{ fontSize: 32 }} /> : <Menu sx={{ fontSize: 32 }} />}
      </IconButton>

      {/* Mobile Menu */}
      {open && (
        <div
          style={{
            position: "fixed",
            top: 0,
            right: 0,
            width: "75%",
            height: "100vh",
            background: "rgba(10, 25, 47, 0.95)",
            backdropFilter: "blur(15px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "-5px 0px 15px rgba(0, 0, 0, 0.2)",
          }}
        >
          <List sx={{ textAlign: "center", width: "100%" }}>
            {navLinks.map((link, index) => (
              <ListItem key={index} sx={{ py: 2, textAlign: "center" }}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  style={{
                    textDecoration: "none",
                    color: "white",
                    fontWeight: "600",
                    fontSize: "1.4rem",
                    transition: "color 0.3s",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "#FFD700")}
                  onMouseLeave={(e) => (e.target.style.color = "white")}
                >
                  {link.name}
                </a>
              </ListItem>
            ))}
          </List>
        </div>
      )}
    </AppBar>
  );
};

export default Navbar;
