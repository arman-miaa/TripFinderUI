import {
  Box,
  Container,
  Tab,
  Tabs,
  Typography,
  Button,
  Grid,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Paper,
  InputAdornment,
} from "@mui/material";
import { useState } from "react";
import {
  FaPlane,
  FaHotel,
  FaGlobe,
  FaPassport,
  FaSearch,
} from "react-icons/fa";
import banner from "../assets/banner.webp";

const Banner = () => {
  const [value, setValue] = useState(0);
  const [tripType, setTripType] = useState("round-way");
  const [formData, setFormData] = useState({
    from: "DAC",
    to: "CXB",
    departure: "2025-04-17",
    return: "2025-04-19",
    class: "economy",
    passengers: 1,
  });
  const [hotelData, setHotelData] = useState({
    destination: "DHAKA",
    checkIn: "2025-04-16",
    checkOut: "2025-04-16",
    guests: "1 ROOM, 1 GUEST, 1 ADULT",
  });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleHotelInputChange = (e) => {
    const { name, value } = e.target;
    setHotelData({ ...hotelData, [name]: value });
  };

  const tabStyles = {
    minWidth: 120,
    color: "#000",
    "&.Mui-selected": {
      backgroundColor: "#32D095",
      color: "#fff",
      borderRadius: "30px",
    },
  };

  const formatDate = (dateString) => {
    const options = {
      day: "2-digit",
      month: "short",
      year: "numeric",
      weekday: "long",
    };
    return new Date(dateString)
      .toLocaleDateString("en-US", options)
      .toUpperCase();
  };

  return (
    <Box
      sx={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        py: 10,
        marginTop: 10,
        borderRadius:5,
      }} 
    >
      <Container>
        <Box
          sx={{
            backgroundColor: "#fff",
            borderRadius: "12px",
            maxWidth: "fit-content",
            mx: "auto",
            px: 2,
            py: 1,
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
                <Box display="flex" alignItems="center" gap={1}>
                  <FaPlane />
                  <Typography variant="body2">Flight</Typography>
                </Box>
              }
              sx={tabStyles}
            />
            <Tab
              label={
                <Box display="flex" alignItems="center" gap={1}>
                  <FaHotel />
                  <Typography variant="body2">Hotel</Typography>
                </Box>
              }
              sx={tabStyles}
            />
            <Tab
              label={
                <Box display="flex" alignItems="center" gap={1}>
                  <FaGlobe />
                  <Typography variant="body2">Tour</Typography>
                </Box>
              }
              sx={tabStyles}
            />
            <Tab
              label={
                <Box display="flex" alignItems="center" gap={1}>
                  <FaPassport />
                  <Typography variant="body2">Visa</Typography>
                </Box>
              }
              sx={tabStyles}
            />
          </Tabs>
        </Box>

        {/* Flight Tab Content */}
        {value === 0 && (
          <Box
            sx={{
              backgroundColor: "#fff",
              p: 3,
              borderRadius: "12px",
              mt: 3,
              boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
            }}
          >
            <Box display="flex" gap={1} mb={3}>
              <Button
                variant={tripType === "round-way" ? "contained" : "outlined"}
                color="primary"
                onClick={() => setTripType("round-way")}
              >
                ROUND-WAY
              </Button>
              <Button
                variant={tripType === "one-way" ? "contained" : "outlined"}
                color="primary"
                onClick={() => setTripType("one-way")}
              >
                ONE-WAY
              </Button>
              <Button
                variant={tripType === "multi-city" ? "contained" : "outlined"}
                color="primary"
                onClick={() => setTripType("multi-city")}
              >
                MULTI-CITY
              </Button>
            </Box>

            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <TextField
                  label="From"
                  fullWidth
                  name="from"
                  value={formData.from}
                  onChange={handleInputChange}
                />
                <Typography variant="caption">
                  Hazrat Shahjalal Int Airport (DAC)
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  label="To"
                  fullWidth
                  name="to"
                  value={formData.to}
                  onChange={handleInputChange}
                />
                <Typography variant="caption">
                  Cox's Bazar Airport (CXB)
                </Typography>
              </Grid>
              <Grid item xs={12} md={2}>
                <TextField
                  type="date"
                  label="Departure"
                  fullWidth
                  name="departure"
                  value={formData.departure}
                  onChange={handleInputChange}
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              {tripType === "round-way" && (
                <Grid item xs={12} md={2}>
                  <TextField
                    type="date"
                    label="Return"
                    fullWidth
                    name="return"
                    value={formData.return}
                    onChange={handleInputChange}
                    InputLabelProps={{ shrink: true }}
                  />
                </Grid>
              )}
              <Grid item xs={6} md={3}>
                <FormControl fullWidth>
                  <InputLabel>Class</InputLabel>
                  <Select
                    name="class"
                    value={formData.class}
                    onChange={handleInputChange}
                    label="Class"
                  >
                    <MenuItem value="economy">Economy</MenuItem>
                    <MenuItem value="business">Business</MenuItem>
                    <MenuItem value="first">First Class</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6} md={3}>
                <TextField
                  type="number"
                  label="Passengers"
                  fullWidth
                  name="passengers"
                  value={formData.passengers}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  size="large"
                  sx={{ mt: 2 }}
                >
                  SEARCH FOR FLIGHT
                </Button>
              </Grid>
            </Grid>
          </Box>
        )}

        {/* Hotel Tab Content */}
        {value === 1 && (
          <Paper
            elevation={3}
            sx={{
              backgroundColor: "white",
              p: 3,
              borderRadius: "12px",
              mt: 3,
              boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
            }}
          >
            {/* Destination Section */}
            <Box sx={{ mb: 3 }}>
              <Typography
                variant="subtitle2"
                color="textSecondary"
                gutterBottom
              >
                DESTINATION
              </Typography>
              <TextField
                fullWidth
                name="destination"
                value={hotelData.destination}
                onChange={handleHotelInputChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <FaSearch />
                    </InputAdornment>
                  ),
                  sx: { backgroundColor: "#f5f5f5", borderRadius: "8px" },
                }}
              />
              <Typography
                variant="caption"
                sx={{ color: "green", mt: 1, display: "block" }}
              >
                DHAKA, BANGLADESH
              </Typography>
            </Box>

            {/* Check In/Out Section */}
            <Grid container spacing={2} sx={{ mb: 3 }}>
              <Grid item xs={6}>
                <Typography
                  variant="subtitle2"
                  color="textSecondary"
                  gutterBottom
                >
                  CHECK IN
                </Typography>
                <TextField
                  fullWidth
                  type="date"
                  name="checkIn"
                  value={hotelData.checkIn}
                  onChange={handleHotelInputChange}
                  InputLabelProps={{ shrink: true }}
                  InputProps={{
                    sx: { backgroundColor: "#f5f5f5", borderRadius: "8px" },
                  }}
                />
                <Typography variant="caption" sx={{ mt: 1, display: "block" }}>
                  {formatDate(hotelData.checkIn)}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  variant="subtitle2"
                  color="textSecondary"
                  gutterBottom
                >
                  CHECK OUT
                </Typography>
                <TextField
                  fullWidth
                  type="date"
                  name="checkOut"
                  value={hotelData.checkOut}
                  onChange={handleHotelInputChange}
                  InputLabelProps={{ shrink: true }}
                  InputProps={{
                    sx: { backgroundColor: "#f5f5f5", borderRadius: "8px" },
                  }}
                />
                <Typography variant="caption" sx={{ mt: 1, display: "block" }}>
                  {formatDate(hotelData.checkOut)}
                </Typography>
              </Grid>
            </Grid>

            {/* Guests & Rooms Section */}
            <Box sx={{ mb: 3 }}>
              <Typography
                variant="subtitle2"
                color="textSecondary"
                gutterBottom
              >
                Guests & Rooms
              </Typography>
              <TextField
                fullWidth
                name="guests"
                value={hotelData.guests}
                onChange={handleHotelInputChange}
                InputProps={{
                  sx: { backgroundColor: "#f5f5f5", borderRadius: "8px" },
                }}
              />
            </Box>

            {/* Search Button */}
            <Button
              fullWidth
              variant="contained"
              color="primary"
              size="large"
              sx={{
                py: 2,
                borderRadius: "8px",
                fontWeight: "bold",
                textTransform: "none",
              }}
            >
              SEARCH FOR HOTEL
            </Button>
          </Paper>
        )}

        {/* Tour Tab Content */}
        {value === 2 && (
          <Box mt={5} textAlign="center" color="white">
            <Typography variant="h5">Tour Section</Typography>
          </Box>
        )}

        {/* Visa Tab Content */}
        {value === 3 && (
          <Box mt={5} textAlign="center" color="white">
            <Typography variant="h5">Visa Section</Typography>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default Banner;
 