

import { Box, Container, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";
import FlightTab from "./tabs/FlightTab";
import HotelTab from "./tabs/HotelTab";
import TourTab from "./tabs/TourTab";
import VisaTab from "./tabs/VisaTab";
import banner from "../assets/banner.webp";
import {
  FlightTakeoff,
  Hotel,
  Tour,
  ConfirmationNumber,
} from "@mui/icons-material";

const Banner = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        py: 10,
        marginTop: 10,
        borderRadius: 5,
      }}
    >
      <Container>
        <Box
          sx={{
            backgroundColor: "#fff",
            borderRadius: "30px",
            maxWidth: "fit-content",
            mx: "auto",
            px: 1,
            py: 1,
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            centered
            TabIndicatorProps={{ style: { display: "none" } }}
          >
            <Tab
              label={
                <Box display="flex" alignItems="center" gap={1} sx={{ px: 2 }}>
                  <FlightTakeoff
                    sx={{ color: value === 0 ? "white" : "#32D095" }}
                  />
                  <Typography
                    variant="body2"
                    sx={{ color: value === 0 ? "white" : "#32D095" }}
                  >
                    FLIGHT
                  </Typography>
                </Box>
              }
              sx={{
                minWidth: 120,
                borderRadius: "30px",
                backgroundColor: value === 0 ? "#32D095" : "transparent",
                color: value === 0 ? "white" : "#32D095",
                "&:hover": {
                  backgroundColor:
                    value === 0 ? "#28b580" : "rgba(50, 208, 149, 0.1)",
                },
                mx: 0.5,
              }}
            />
            <Tab
              label={
                <Box display="flex" alignItems="center" gap={1} sx={{ px: 2 }}>
                  <Hotel sx={{ color: value === 1 ? "white" : "#32D095" }} />
                  <Typography
                    variant="body2"
                    sx={{ color: value === 1 ? "white" : "#32D095" }}
                  >
                    HOTEL
                  </Typography>
                </Box>
              }
              sx={{
                minWidth: 120,
                borderRadius: "30px",
                backgroundColor: value === 1 ? "#32D095" : "transparent",
                color: value === 1 ? "white" : "#32D095",
                "&:hover": {
                  backgroundColor:
                    value === 1 ? "#28b580" : "rgba(50, 208, 149, 0.1)",
                },
                mx: 0.5,
              }}
            />
            <Tab
              label={
                <Box display="flex" alignItems="center" gap={1} sx={{ px: 2 }}>
                  <Tour sx={{ color: value === 2 ? "white" : "#32D095" }} />
                  <Typography
                    variant="body2"
                    sx={{ color: value === 2 ? "white" : "#32D095" }}
                  >
                    TOUR
                  </Typography>
                </Box>
              }
              sx={{
                minWidth: 120,
                borderRadius: "30px",
                backgroundColor: value === 2 ? "#32D095" : "transparent",
                color: value === 2 ? "white" : "#32D095",
                "&:hover": {
                  backgroundColor:
                    value === 2 ? "#28b580" : "rgba(50, 208, 149, 0.1)",
                },
                mx: 0.5,
              }}
            />
            <Tab
              label={
                <Box display="flex" alignItems="center" gap={1} sx={{ px: 2 }}>
                  <ConfirmationNumber
                    sx={{ color: value === 3 ? "white" : "#32D095" }}
                  />
                  <Typography
                    variant="body2"
                    sx={{ color: value === 3 ? "white" : "#32D095" }}
                  >
                    VISA
                  </Typography>
                </Box>
              }
              sx={{
                minWidth: 120,
                borderRadius: "30px",
                backgroundColor: value === 3 ? "#32D095" : "transparent",
                color: value === 3 ? "white" : "#32D095",
                "&:hover": {
                  backgroundColor:
                    value === 3 ? "#28b580" : "rgba(50, 208, 149, 0.1)",
                },
                mx: 0.5,
              }}
            />
          </Tabs>
        </Box>

        {/* Flight Tab Content */}
        {value === 0 && <FlightTab />}

        {/* Hotel Tab Content */}
        {value === 1 && <HotelTab />}

        {/* Tour Tab Content */}
        {value === 2 && <TourTab />}

        {/* Visa Tab Content */}
        {value === 3 && <VisaTab />}
      </Container>
    </Box>
  );
};

export default Banner;
