import React from "react";
import { Box, Typography, Container, Grid, TextField, Button, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box sx={{
      background: "#0B2B40",
      color: "white",
      py: 4,
    
      textAlign: "center"
    }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Footer Content */}
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="h5" fontWeight="bold" gutterBottom sx={{
                fontSize: { xs: "1.5rem", md: "2rem" },
                fontFamily: "Poppins, sans-serif"
              }}>
                SHARE VALUE
              </Typography>
              <Typography variant="body2" sx={{ maxWidth: "300px", mx: "auto" }}>
                Learn, Create, Innovate – A DeWorld Education Hub.
              </Typography>
            </Grid>

            {/* Navigation Links */}
            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Quick Links
              </Typography>
              <Box display="flex" flexDirection="column" alignItems="center">
                <Button sx={{ color: "white", textTransform: "none" }}>Home</Button>
                <Button sx={{ color: "white", textTransform: "none" }}>AI Learning</Button>
                <Button sx={{ color: "white", textTransform: "none" }}>DecentralizedTech</Button>
                <Button sx={{ color: "white", textTransform: "none" }}>Global Access</Button>
              </Box>
            </Grid>

            {/* Newsletter Subscription */}
            <Grid item xs={12} sm={3} md={4} 
            style={{display:"flex",flexWrap:"wrap"}}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Subscribe
              </Typography>
              <Box display="flex" flexWrap="wrap" alignItems="center" justifyContent="center" gap={1}>
                <TextField
                  variant="outlined"
                  placeholder="Enter your email"
                  size="small"
                  sx={{ bgcolor: "white", borderRadius: "5px" }}
                  style={{display:"flex",flexWrap:"wrap"}}
                />
                <Button variant="contained" sx={{ bgcolor: "#00C897"  }}>Subscribe</Button>
              </Box>
            </Grid>
          </Grid>
        </motion.div>

        {/* Social Media Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          style={{ marginTop: "20px" }}
        >
          <IconButton sx={{ color: "white", mx: 1, transition: "0.3s", '&:hover': { color: "#00C897" } }}>
            <Facebook />
          </IconButton>
          <IconButton sx={{ color: "white", mx: 1, transition: "0.3s", '&:hover': { color: "#00C897" } }}>
            <Twitter />
          </IconButton>
          <IconButton sx={{ color: "white", mx: 1, transition: "0.3s", '&:hover': { color: "#00C897" } }}>
            <Instagram />
          </IconButton>
          <IconButton sx={{ color: "white", mx: 1, transition: "0.3s", '&:hover': { color: "#00C897" } }}>
            <LinkedIn />
          </IconButton>
        </motion.div>

        {/* Copyright Text */}
        <Typography variant="body2" sx={{ mt: 3, opacity: 0.7 }}>
          © {new Date().getFullYear()} SHARE VALUE. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
