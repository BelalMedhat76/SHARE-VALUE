import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import PublicIcon from "@mui/icons-material/Public";
import GroupsIcon from "@mui/icons-material/Groups";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import globalAccessBg from "../assets/back2.jpg";

const GlobalAccess = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const features = [
    {
      title: "Global Access",
      description: "Programs for all sectors, enabling global innovation and contribution to DeWorld.",
      icon: <PublicIcon sx={{ fontSize: 40, color: "#FFD700" }} />,
    },
    {
      title: "Mentorship & Idea Sharing",
      description: "Lead groups, share ideas, and gain knowledge by teaching others.",
      icon: <GroupsIcon sx={{ fontSize: 40, color: "#FF6347" }} />,
    },
    {
      title: "Knowledge Exchange",
      description: "Learn by teaching, and help grow the DeWorld community.",
      icon: <SwapHorizIcon sx={{ fontSize: 40, color: "#00C897" }} />,
    },
  ];

  return (
    <Box 
    id="global-access"
      sx={{
        position: "relative",
        textAlign: "center",
        py: 10,
        background: `linear-gradient(rgba(10, 25, 47, 0.8), rgba(10, 25, 47, 0.9)), url(${globalAccessBg}) center/cover no-repeat`,
        color: "white",
        padding:"13",
        overflow: "hidden",
        fontFamily: "Poppins, sans-serif",
        px: { xs: 2, md: 5 },
      }}
    >
      <Typography 
        variant="h3" 
        fontWeight="bold" 
        data-aos="fade-down" 
        sx={{ 
          fontFamily: "Poppins, sans-serif", 
          fontSize: { xs: "2rem", md: "3rem" },
          textTransform: "uppercase",
          letterSpacing: "2px",
          background: "linear-gradient(90deg, #FFD700, #FF6347)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Global Access & Innovation
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
          color: "rgba(255, 255, 255, 0.8)"
        }}
        data-aos="fade-up"
      >
        Explore how decentralization enables global access, mentorship, and knowledge exchange.
      </Typography>
      <Grid container spacing={4} sx={{ mt: 5,padding:1, alignItems: "center" }}>
        {features.map((feature, index) => (
          <Grid item xs={12} md={4} key={index} data-aos="zoom-in">
            <Card
              sx={{ 
                background: "rgba(255, 255, 255, 0.1)", 
                color: "white", 
                textAlign: "center", 
                borderRadius: "15px", 
                 
                boxShadow: "0px 4px 15px rgba(255, 215, 0, 0.3)",
                transition: "transform 0.3s ease-in-out", 
                '&:hover': { transform: "scale(1.05)" }
              }}
            >
              <CardContent>
                <Box display="flex" justifyContent="center" mb={2}>
                  {feature.icon}
                </Box>
                <Typography variant="h6" fontWeight="bold" sx={{ fontFamily: "Poppins, sans-serif" }}>
                  {feature.title}
                </Typography>
                <Typography variant="body2" sx={{ fontFamily: "Poppins, sans-serif", mt: 1 }}>
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default GlobalAccess;
