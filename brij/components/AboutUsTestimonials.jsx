"use client";
import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { Card, CardContent, Typography, Box, IconButton } from "@mui/material";
import Image from "next/image";
import { testimonialData } from "../public/assets/assets";

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  const handlePrevious = useCallback(() => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonialData.length - 1 : prev - 1
    );
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) =>
      prev === testimonialData.length - 1 ? 0 : prev + 1
    );
  }, []);

  useEffect(() => {
    let interval;

    if (isAutoplay) {
      interval = setInterval(() => {
        handleNext();
      }, 5000); // Change testimonial every 5 seconds
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isAutoplay, handleNext]);

  return (
    <Box
      className="testimonials-slide"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        // overflow: "hidden",
        p: 4,
        fontFamily: "'Poppins', sans-serif",
        margin: "80px 0",
      }}
    >
      <Box sx={{ width: "100%", maxWidth: "1200px", mx: "auto" }}>
        <Typography
          variant="h2"
          component="h2"
          color="white"
          sx={{
            mb: 4,
            fontWeight: "bold",
            fontSize: "2rem",
            textAlign: "left",
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          Testimonials
        </Typography>
        <Box
          sx={{ position: "relative" }}
          onMouseEnter={() => setIsAutoplay(false)}
          onMouseLeave={() => setIsAutoplay(true)}
        >
          <Card sx={{ backgroundColor: "#1B1F2E" }}>
            <CardContent sx={{ p: 4 }}>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                  gap: 4,
                  alignItems: "center",
                }}
              >
                <Box>
                  <Typography
                    variant="h6"
                    component="h3"
                    color="#29F0B4"
                    sx={{
                      fontSize: "1.6rem",
                      fontFamily: "'Poppins', sans-serif",
                    }}
                  >
                    {testimonialData[currentIndex].name}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="#fff"
                    sx={{
                      mt: 2,
                      fontFamily: "'Poppins', sans-serif",
                    }}
                  >
                    {testimonialData[currentIndex].testament}
                  </Typography>
                  <Box sx={{ display: "flex", gap: 2, pt: 4 }}>
                    <IconButton
                      onClick={handlePrevious}
                      sx={{
                        backgroundColor: "#fff",
                        color: "#444",
                        borderRadius: "0",
                        height: "68px",
                        width: "68px",
                        "&:hover": {
                          backgroundColor: "#29F0B4",
                          color: "#fff",
                          transition: "0.3s ease-in-out",
                           zIndex: "10"
                        },
                      }}
                    >
                      <ChevronLeft />
                      <span className="sr-only">Previous testimonial</span>
                    </IconButton>
                    <IconButton
                      onClick={handleNext}
                      sx={{
                        backgroundColor: "#fff",
                        color: "#444",
                        borderRadius: "0",
                        height: "68px",
                        width: "68px",
                        "&:hover": {
                          backgroundColor: "#29F0B4",
                          color: "#fff",
                          transition: "0.3s ease-in-out",
                           zIndex: "10"
                        },
                      }}
                    >
                      <ChevronRight />
                      <span className="sr-only">Next testimonial</span>
                    </IconButton>
                  </Box>
                </Box>
                <Box
                  sx={{
                    position: "relative",
                    aspectRatio: "1 / 1",
                    zIndex: "10",
                    width: { xs: "100%", sm: "300px", md: "400px", lg: "500px" },
                    height: { xs: "auto", sm: "300px", md: "400px", lg: "500px" },
                    mx: "auto", // Center for smaller screens
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,
                      backgroundColor: "rgba(0, 128, 128, 0.1)",
                      borderRadius: "8px",
                      zIndex: "10",
                    }}
                  />
                  <Image
                    src={testimonialData[currentIndex].image}
                    alt={testimonialData[currentIndex].name}
                    layout="fill" // Makes the image fill the container
                    objectFit="cover" // Ensures the image scales without distortion
                    className="rounded-lg object-cover"
                    priority
                  />
                </Box>
                <div className="blur"></div>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default TestimonialSlider;
