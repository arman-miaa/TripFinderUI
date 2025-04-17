

import { useState } from "react";
import { Box, Typography, Button, Paper, Grid, Divider } from "@mui/material";
import { Public, LocationOn, CalendarMonth } from "@mui/icons-material";

const TourTab = () => {
  const [tourData, setTourData] = useState({
    destinationType: "INTERNATIONAL",
    destinationTypeDetail: "INTERNATIONAL",
    location: "ROME,VASNIS",
    locationDetail: "BANGLADESH (BD)",
    date: "01 APR 2025",
    dateDetail: "01 APR 2025",
  });
    console.log(setTourData);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setTourData({ ...tourData, [name]: value });
//   };

  return (
    <Paper
      elevation={3}
      sx={{
        backgroundColor: "white",
        borderRadius: "12px",
        mt: 3,
        overflow: "visible",
        position: "relative",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      {/* Main content area */}
      <Box sx={{ flex: 1, p: 3 }}>
        <Grid container spacing={3}>
          {/* Destination Type Section */}
          <Grid item xs={12} md={4}>
            <Box>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                DESTINATION TYPE
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  color: "#32D095",
                  fontSize: "2.5rem",
                  fontWeight: "bold",
                }}
              >
                {tourData.destinationType}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "#f0f7ff",
                  p: 1,
                  borderRadius: "4px",
                  mt: 1,
                }}
              >
                <Public sx={{ color: "#32D095", mr: 1 }} />
                <Typography variant="body2">
                  {tourData.destinationTypeDetail}
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Where Section */}
          <Grid item xs={12} md={4}>
            <Box>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                WHERE?
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  color: "#32D095",
                  fontSize: "2.5rem",
                  fontWeight: "bold",
                }}
              >
                {tourData.location}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "#f0f7ff",
                  p: 1,
                  borderRadius: "4px",
                  mt: 1,
                }}
              >
                <LocationOn sx={{ color: "#32D095", mr: 1 }} />
                <Typography variant="body2">
                  {tourData.locationDetail}
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* When Section */}
          <Grid item xs={12} md={4}>
            <Box>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                WHEN?
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  color: "#32D095",
                  fontSize: "2.5rem",
                  fontWeight: "bold",
                }}
              >
                {tourData.date}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "#f0f7ff",
                  p: 1,
                  borderRadius: "4px",
                  mt: 1,
                }}
              >
                <CalendarMonth sx={{ color: "#32D095", mr: 1 }} />
                <Typography variant="body2">{tourData.dateDetail}</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Vertical divider */}
      <Divider
        orientation="vertical"
        flexItem
        sx={{ display: { xs: "none", md: "block" } }}
      />

      {/* Right side - Search buttons */}
      <Box
        sx={{
          width: { xs: "100%", md: "300px" },
          p: 2,
          borderLeft: { xs: "none", md: "1px solid #eee" },
          borderTop: { xs: "1px solid #eee", md: "none" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 2,
        }}
      >
        <Button
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: "#32D095",
            color: "white",
            py: 1.5,
            "&:hover": {
              backgroundColor: "#28b580",
            },
          }}
        >
          SEARCH ALL TOUR
        </Button>

        <Button
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: "#32D095",
            color: "white",
            py: 1.5,
            "&:hover": {
              backgroundColor: "#28b580",
            },
          }}
        >
          SEARCH FOR TOUR
        </Button>
      </Box>
    </Paper>
  );
};

export default TourTab;
