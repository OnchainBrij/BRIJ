import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FrequentQuestions = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const faqItems = [
    {
      question: "Is my campaign allowed on BRIJ?",
      answer:
        "There are many variations of passages the majority have suffered alteration in some form of injected humour, or randomised words believable.",
    },
    {
      question: "How to soft launch your campaign",
      answer:
        "There are many variations of passages the majority have suffered alteration in some form of injected humour, or randomised words believable.",
    },
    {
      question: "How to turn visitors into contributors",
      answer:
        "There are many variations of passages the majority have suffered alteration in some form of injected humour, or randomised words believable.",
    },
    {
      question: "Another frequently asked question",
      answer:
        "There are many variations of passages the majority have suffered alteration in some form of injected humour, or randomised words believable.",
    },
  ];

  return (
    <Box sx={{ width: "80%", margin: "10% auto" }}>
      <Typography
        variant="h2"
        component="h2"
        sx={{
          textAlign: "center",
          margin: "20px 0",
          color: "#fff",
          fontSize: "calc(1.7rem + 2vw)",
          fontWeight: 700,
          textUnderlinePosition: "from-font",
          textDecorationSkipInk: "none",
        }}
      >
        Frequently Asked Questions
      </Typography>

      {faqItems.map((item, index) => (
        <Accordion
          key={index}
          expanded={expanded === `panel${index}`}
          onChange={handleChange(`panel${index}`)}
          sx={{
            background:
              expanded === `panel${index}`
                ? "#ffffff"
                : "linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            margin: "5px 0",
            borderRadius: "5px !important",
            minWidth: "340px !important",
            transition: "all 0.3s ease-in-out",
          }}
        >
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon
                sx={{
                  color: expanded === `panel${index}` ? "#101010" : "#ffffff",
                }}
              />
            }
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
            sx={{
              boxShadow: "0 0 3px #000 !important",
              color:
                expanded === `panel${index}` ? "#101010" : "#ffffff !important",
            }}
          >
            <Typography variant="h6" sx={{ color: "inherit" }}>
              {item.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: "#101010" }}>{item.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default FrequentQuestions;
