

import { useState } from "react";
import { Box, Typography, Button, Paper, Grid, Divider } from "@mui/material";
import { LocationOn, CalendarMonth, People } from "@mui/icons-material";

const HotelTab = () => {
  const [hotelData, setHotelData] = useState({
    destination: "DHAKA",
    destinationDetail: "DHAKA,BANGLADESH",
    checkInDate: "17 APR, 2025",
    checkInDetail: "17 APR 25,THURSDAY",
    checkOutDate: "17 APR, 2025",
    checkOutDetail: "17 APR 25,THURSDAY",
    guests: "1 ROOM, 1 GUESTS, 1 ADULTS",
  });
console.log(setHotelData);
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setHotelData({ ...hotelData, [name]: value });
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
          {/* Destination Section */}
          <Grid item xs={12} md={4}>
            <Box>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                DESTINATION
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  color: "#32D095",
                  fontSize: "2.5rem",
                  fontWeight: "bold",
                }}
              >
                {hotelData.destination}
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
                  {hotelData.destinationDetail}
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Check In Section */}
          <Grid item xs={12} md={4}>
            <Box>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                CHECK IN
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  color: "#32D095",
                  fontSize: "2.5rem",
                  fontWeight: "bold",
                }}
              >
                {hotelData.checkInDate}
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
                <Typography variant="body2">
                  {hotelData.checkInDetail}
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Check Out Section */}
          <Grid item xs={12} md={4}>
            <Box>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                CHECK OUT
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  color: "#32D095",
                  fontSize: "2.5rem",
                  fontWeight: "bold",
                }}
              >
                {hotelData.checkOutDate}
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
                <Typography variant="body2">
                  {hotelData.checkOutDetail}
                </Typography>
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

      {/* Right side - Guests and Rooms selection */}
      <Box
        sx={{
          width: { xs: "100%", md: "300px" },
          p: 2,
          borderLeft: { xs: "none", md: "1px solid #eee" },
          borderTop: { xs: "1px solid #eee", md: "none" },
        }}
      >
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          Guests & Rooms
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#f0f7ff",
            p: 1,
            borderRadius: "4px",
            mb: 2,
          }}
        >
          <People sx={{ color: "#32D095", mr: 1 }} />
          <Typography variant="body2">{hotelData.guests}</Typography>
        </Box>

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
          SEARCH FOR HOTEL
        </Button>
      </Box>
    </Paper>
  );
};

export default HotelTab;
