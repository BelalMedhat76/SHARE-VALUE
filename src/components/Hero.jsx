import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { motion } from "framer-motion";
import heroImage from "../assets/hero.webp"; // Ensure you have an image

const Hero = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "white",
        overflow: "hidden",
        pt: "100px",
      }}
    >
      {/* Background Image with Full Size */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "brightness(0.5)",
          zIndex: -1,
        }}
      />

      {/* Content Container */}
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          mt: { xs: -5, md: -10 },
        }}
      >
        {/* Animated Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Typography
          variant="h4"
          fontWeight="bold" 
        
          sx={{ 
            fontFamily: "Poppins, sans-serif", 
            fontSize: { xs: "2rem", md: "5rem" },
            textTransform: "uppercase",
            letterSpacing: "2px",
            background: "linear-gradient(90deg, #00C897, #007BFF)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontStyle:"italic"
          }}
          data-aos="fade-up"
         
          >
           



SHARE VALUE
          </Typography>
          <Typography
            variant="h6"
            mt={2}
            sx={{ fontSize: { xs: "1.2rem", md: "1.5rem" }, maxWidth: "700px" }}
          >
Innovate – A DeWorld Education Hub          </Typography>
        </motion.div>

        {/* Animated Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          style={{ marginTop: "2rem", display: "flex", gap: "1.5rem", flexWrap: "wrap", justifyContent: "center" }}
        >
          <Button
            variant="contained"
            sx={{
              bgcolor: "#002333",
              fontSize: { xs: "1rem", md: "1.2rem" },
              width:"150px",
              height:"50px",
              transition: "all 0.3s ease",
              '&:hover': { bgcolor: "primary.main" },
            }}
          >
            Learn
          </Button>
          <Button
            variant="outlined"
            sx={{
              borderColor: "white",
              color: "white",
              fontSize: { xs: "1rem", md: "1.2rem" },
  
           width:"150px",
           height:"50px",
              transition: "all 0.3s ease",
              '&:hover': { bgcolor: "white", color: "black" },
            }}
          >
       Create
          </Button>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Hero;
