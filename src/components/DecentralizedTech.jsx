import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Box, Typography, Grid, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SecurityIcon from "@mui/icons-material/Security";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import DevicesIcon from "@mui/icons-material/Devices";
import HubIcon from "@mui/icons-material/Hub";
import LightbulbIcon from "@mui/icons-material/Lightbulb";

const DecentralizedTech = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const features = [
    {
      title: "Blockchain Security",
      description: "Enhance security with decentralized blockchain technology, ensuring data integrity and protection.",
      icon: <SecurityIcon sx={{ color: "#00C897", mr: 2 }} />,
    },
    {
      title: "Cloud Decentralization",
      description: "Leverage decentralized cloud computing to eliminate single points of failure and improve efficiency.",
      icon: <CloudQueueIcon sx={{ color: "#00C897", mr: 2 }} />,
    },
    {
      title: "Smart Devices & IoT",
      description: "Integrating blockchain with IoT to provide enhanced security and data accuracy across devices.",
      icon: <DevicesIcon sx={{ color: "#00C897", mr: 2 }} />,
    },
    {
      title: "Innovation Hub",
      description: "A platform for hackathons, collaboration, and idea-sharing.",
      icon: <HubIcon sx={{ color: "#00C897", mr: 2 }} />,
    },
    {
      title: "Empowering Creators",
      description: "Turn ideas into reality and shape the future of DeWorld.",
      icon: <LightbulbIcon sx={{ color: "#00C897", mr: 2 }} />,
    },
  ];
  return (
    <Box
    id="decentralizedTech"
      sx={{
        position: "relative",
        textAlign: "center",
        py: 10,
        background:"#FFFFFF center/cover no-repeat",
        color: "#002333",
        overflow: "hidden",
        padding:"20px"
      }}
    >
     <Typography 
  variant="h3" 
  fontWeight="bold" 
  data-aos="fade-down" 
  sx={{ 
    fontFamily: "Poppins, sans-serif", 
    fontSize: { xs: "1.5rem", sm: "1.8rem", md: "3rem" }, // Smaller size on mobile
    textTransform: "uppercase",
    letterSpacing: "2px",
    background: "linear-gradient(90deg, #00C897, #007BFF)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  }}
>
  Decentralized Tech Resources
</Typography>

      <Typography
        variant="body1"
        sx={{ 
          maxWidth: 800, 
          mx: "auto", 
          mt: 2, 
          fontFamily: "Poppins, sans-serif", 
          fontSize: { xs: "1rem", md: "1.2rem" },
          fontWeight: "300",
          color: "#002333"
        }}
        data-aos="fade-up"
      >
        Explore tools and technologies that empower decentralized innovation and blockchain solutions.
      </Typography>
      <Grid container spacing={4} sx={{mt:5, alignItems: "center" }}>
        <Grid item xs={12} md={6} data-aos="fade-right">
          <img
            src="https://img.freepik.com/free-vector/robot-human_53876-91627.jpg?t=st=1739629903~exp=1739633503~hmac=9aa7b1d6ea03c420ad9f59eae101bcddc23e26a5cae8740a269d01e2e528c9a1&w=740"
            alt="Decentralized Technology"
            style={{ width: "100%" ,  borderRadius: "10px",   height: "auto", maxHeight: "450px", }}
          />
        </Grid>
        

        <Grid item xs={12} md={6} data-aos="fade-left">
  {features.map((feature, index) => (
    <Accordion
      key={index}
      sx={{
        background: "#009A9C",
        color: "white",
        mb: 2,
        borderRadius: "10px",
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
        sx={{ display: "flex", alignItems: "center" }}
      >
        <Box display="flex" alignItems="center">
          {feature.icon}
          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontSize: { xs: "1rem", md: "1.25rem" }, // Smaller on mobile
            }}
          >
            {feature.title}
          </Typography>
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <Typography
          variant="body2"
          sx={{
            fontFamily: "Poppins, sans-serif",
            fontSize: { xs: "0.85rem", md: "1rem" }, // Smaller on mobile
          }}
        >
          {feature.description}
        </Typography>
      </AccordionDetails>
    </Accordion>
  ))}
</Grid>

      </Grid>
    </Box>
  );
};

export default DecentralizedTech;
