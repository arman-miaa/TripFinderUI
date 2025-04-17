import React, { useState } from "react";
import { Box, Grid, Tab, Tabs, Typography } from "@mui/material";
import flight1 from "../assets/flight1.webp";
import flight2 from "../assets/flight2.webp";
import flight3 from "../assets/flight3.webp";
import group1 from "../assets/group1.webp";
import group2 from "../assets/group2.webp";
import group3 from "../assets/group3.webp";
import tour1 from "../assets/tour1.webp";
import tour2 from "../assets/tour2.webp";
import tour3 from "../assets/tour3.webp";
import visa1 from "../assets/visa1.webp";
import visa2 from "../assets/visa2.webp";
import visa3 from "../assets/visa3.webp";

const HotDeals = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const dealImages = [
    [flight1, flight2, flight3],
    [group1, group2, group3],
    [tour1, tour2, tour3],
    [visa1, visa2, visa3],
  ];

  const tabLabels = ["FLIGHT", "GROUP FARE", "TOUR", "VISA"];

  return (
    <Box sx={{ px: 2, py: 4 }}>
      {/* Header Row: Hot Deals + Tabs */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          rowGap: 2,
                  mb: 4,
          marginTop:8,
        }}
      >
        <Typography variant="h4" fontWeight={600}>
          Hot Deals
        </Typography>

        <Box
          sx={{
            backgroundColor: "#32D095",
            borderRadius: "50px",
            display: "inline-flex",
                      p: "8px",
            paddingTop:"12px"
          }}
        >
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            TabIndicatorProps={{ style: { display: "none" } }}
            sx={{
              "& .MuiTab-root": {
                textTransform: "none",
                borderRadius: "50px",
                minHeight: "36px",
                px: 3,
                fontWeight: 600,
                    color: "#fff",
                
              },
              "& .Mui-selected": {
                backgroundColor: "#000",
                  color: "#fffd",
                
              },
            }}
          >
            {tabLabels.map((label, index) => (
              <Tab key={index} label={label} />
            ))}
          </Tabs>
        </Box>
      </Box>

      {/* Image Grid */}
      <Grid container spacing={2}>
        {dealImages[activeTab].map((img, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Box
              component="img"
              src={img}
              alt={`deal-${index}`}
              sx={{
                width: "100%",
                height: "245px",
                borderRadius: "12px",
                objectFit: "cover",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HotDeals;
