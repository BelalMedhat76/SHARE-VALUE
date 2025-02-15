import React from "react";
import { Card, CardContent, CardMedia, Typography, Grid, Box } from "@mui/material";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import AOS from "aos";
import "aos/dist/aos.css";

const AIPoweredLearning = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const features = [
    {
      title: "AI-Powered Education",
      description: "Empowering anyone, anywhere to learn and innovate in the decentralized world.",
      image: "https://img.freepik.com/free-vector/technological-ecology-concept_23-2148438859.jpg?ga=GA1.1.1954448480.1732103121&semt=ais_hybrid",
    },
    {
      title: "Smart Learning",
      description: "Utilizing AI-driven techniques to provide personalized learning experiences.",
      image: "https://img.freepik.com/free-vector/robot-human_53876-90440.jpg?t=st=1739628225~exp=1739631825~hmac=b71e586e6da9b248dcfe2f84b8a79e8d805f7cfbca733acc9bad4b1624e9c088&w=740",
    },
    {
      title: "Future of Innovation",
      description: "Shaping the future with AI-powered solutions in decentralized technology.",
      image: "https://img.freepik.com/free-vector/fingerprint-scanner-technology_53876-94169.jpg?ga=GA1.1.1954448480.1732103121&semt=ais_hybrid",
    },
  ];

  return (
    <Box id="AiPower" sx={{ textAlign: "center", py: 5, backgroundColor: "#f4f4f4" }}>
 <Typography
  variant="h4"
  fontWeight="bold" 

  sx={{ 
    fontFamily: "Poppins, sans-serif", 
    fontSize: { xs: "2rem", md: "3rem" },
    textTransform: "uppercase",
    letterSpacing: "2px",
    background: "linear-gradient(90deg, #00C897, #007BFF)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  }}
  data-aos="fade-up"
>
  AI-Powered Learning
</Typography>
<Typography
  variant="body1"
  sx={{
    color: "black",
    maxWidth: 600,
    mx: "auto",
    mb: 4,
    textAlign: "center",
    fontSize: { xs: "0.9rem", sm: "1rem", md: "1.2rem" },
    px: { xs: 2, sm: 0 },
  }}
  data-aos="fade-up"
>
  Discover how AI is revolutionizing education and innovation in the decentralized world.
</Typography>

<Grid
  container
  spacing={4}
  justifyContent="center"
  sx={{ px: { xs: 2, sm: 4, md: 6 }, mt: 3 }}
>
  {features.map((feature, index) => (
    <Grid item xs={12} sm={6} md={4} key={index} data-aos="zoom-in">
      <Card
        sx={{
          maxWidth: 360,
          mx: "auto",
          borderRadius: "15px",
          boxShadow: "0px 4px 15px rgba(0, 123, 255, 0.2)",
          overflow: "hidden",
          transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
          "&:hover": {
            transform: "scale(1.05)",
            boxShadow: "0px 8px 20px rgba(0, 123, 255, 0.4)",
          },
        }}
      >
        <CardMedia
          component="img"
          height="220"
          image={feature.image}
          alt={feature.title}
          sx={{
            filter: "brightness(0.9)",
            transition: "filter 0.3s ease-in-out",
            "&:hover": { filter: "brightness(1.1)" },
          }}
        />
        <CardContent
          sx={{
            textAlign: "center",
            background: "linear-gradient(135deg, #007bff, #00c6ff)",
            color: "white",
            py: 3,
          }}
        >
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", mb: 1, fontSize: { xs: "1rem", md: "1.2rem" } }}
          >
            {feature.title}
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.9 }}>
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

export default AIPoweredLearning;
