

import { useState } from "react";
import { Box, Typography, Button, Paper, Grid, Divider } from "@mui/material";
import { Public, ConfirmationNumber } from "@mui/icons-material";

const VisaTab = () => {
  const [visaData, setVisaData] = useState({
    destination: "INDIA",
    destinationDetail: "INDIA",
    visaType: "TOURIST VISA",
    visaTypeDetail: "TOURIST VISA",
  });
console.log(setVisaData);
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setVisaData({ ...visaData, [name]: value });
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
          <Grid item xs={12} md={6}>
            <Box>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                DESTINATION CITY OR COUNTRY
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  color: "#32D095",
                  fontSize: "2.5rem",
                  fontWeight: "bold",
                }}
              >
                {visaData.destination}
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
                  {visaData.destinationDetail}
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Visa Type Section */}
          <Grid item xs={12} md={6}>
            <Box>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                SELECT VISA TYPE
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  color: "#32D095",
                  fontSize: "2.5rem",
                  fontWeight: "bold",
                }}
              >
                {visaData.visaType}
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
                <ConfirmationNumber sx={{ color: "#32D095", mr: 1 }} />
                <Typography variant="body2">
                  {visaData.visaTypeDetail}
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

      {/* Right side - Search button */}
      <Box
        sx={{
          width: { xs: "100%", md: "300px" },
          p: 2,
          borderLeft: { xs: "none", md: "1px solid #eee" },
          borderTop: { xs: "1px solid #eee", md: "none" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
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
          SEARCH FOR VISA
        </Button>
      </Box>
    </Paper>
  );
};

export default VisaTab;
