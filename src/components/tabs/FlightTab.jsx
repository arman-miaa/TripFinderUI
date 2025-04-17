

import { useState } from "react";
import {
  Box,
  Button,
  Typography,
  FormControl,
  Select,
  MenuItem,
  Paper,
  Divider,
} from "@mui/material";
import { LocationOn, CalendarMonth } from "@mui/icons-material";

const FlightTab = () => {
  const [tripType, setTripType] = useState("round-way");
  const [formData, setFormData] = useState({
    segments: [
      {
        from: "DAC",
        to: "CXB",
        fromAirport: "Hazrat Shahjalal Intl Airport (DAC)",
        toAirport: "Cox's Bazar Airport(CXB)",
        departureDate: "18 Apr 25",
      },
    ],
    returnDate: "20 Apr 25",
    adults: "1 ADULT",
    children: "0 CHILD",
    infants: "0 INFANT",
    class: "Economy",
  });

  const handleTripTypeChange = (type) => {
    setTripType(type);

    if (type === "multi-city") {
      setFormData({
        ...formData,
        segments: [
          {
            from: "DAC",
            to: "JED",
            fromAirport: "Hazrat Shahjalal Intl Airport (DAC)",
            toAirport: "Jeddah Intl (JED)",
            departureDate: "18 Apr 25",
          },
          {
            from: "JED",
            to: "MED",
            fromAirport: "Jeddah Intl (JED)",
            toAirport: "Prince Mohammad Bin Abdulaziz Intl (MED)",
            departureDate: "20 Apr 25",
          },
        ],
      });
    } else {
      setFormData({
        ...formData,
        segments: [
          {
            from: "DAC",
            to: "CXB",
            fromAirport: "Hazrat Shahjalal Intl Airport (DAC)",
            toAirport: "Cox's Bazar Airport(CXB)",
            departureDate: "18 Apr 25",
          },
        ],
      });
    }
  };

  const addCity = () => {
    const newSegments = [...formData.segments];
    const lastSegment = newSegments[newSegments.length - 1];

    newSegments.push({
      from: lastSegment.to,
      to: "",
      fromAirport: lastSegment.toAirport,
      toAirport: "",
      departureDate: "22 Apr 25",
    });

    setFormData({
      ...formData,
      segments: newSegments,
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

//   const airports = [
//     {
//       city: "Dhaka,BANGLADESH",
//       airport: "Hazrat Shahjalal Intl Airport",
//       code: "DAC",
//     },
//     {
//       city: "Dubai,UNITED ARAB EMIRATES",
//       airport: "Dubai Intl Airport",
//       code: "DXB",
//     },
//     {
//       city: "Cox's Bazar,Bangladesh",
//       airport: "Cox's Bazar Airport",
//       code: "CXB",
//     },
//     {
//       city: "Jashore,Bangladesh",
//       airport: "Jashore Airport",
//       code: "JSR",
//     },
//     {
//       city: "Barishal,Bangladesh",
//       airport: "Barishal Airport",
//       code: "BZL",
//     },
//   ];

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
        {/* Trip Type Selection */}
        <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
          <Button
            sx={{
              borderRadius: "50%",
              width: 36,
              height: 36,
              minWidth: 36,
              p: 0,
              mr: 1,
              border: "2px solid",
              borderColor: tripType === "round-way" ? "#32D095" : "#ccc",
              position: "relative",
            }}
            onClick={() => handleTripTypeChange("round-way")}
          >
            {tripType === "round-way" && (
              <Box
                sx={{
                  width: 20,
                  height: 20,
                  borderRadius: "50%",
                  backgroundColor: "#32D095",
                  position: "absolute",
                }}
              />
            )}
          </Button>
          <Typography
            variant="body1"
            sx={{
              color: tripType === "round-way" ? "#32D095" : "text.primary",
              fontWeight: tripType === "round-way" ? "bold" : "normal",
              cursor: "pointer",
            }}
            onClick={() => handleTripTypeChange("round-way")}
          >
            ROUND-WAY
          </Typography>

          <Button
            sx={{
              borderRadius: "50%",
              width: 36,
              height: 36,
              minWidth: 36,
              p: 0,
              mr: 1,
              border: "2px solid",
              borderColor: tripType === "one-way" ? "#32D095" : "#ccc",
              position: "relative",
            }}
            onClick={() => handleTripTypeChange("one-way")}
          >
            {tripType === "one-way" && (
              <Box
                sx={{
                  width: 20,
                  height: 20,
                  borderRadius: "50%",
                  backgroundColor: "#32D095",
                  position: "absolute",
                }}
              />
            )}
          </Button>
          <Typography
            variant="body1"
            sx={{
              color: tripType === "one-way" ? "#32D095" : "text.primary",
              fontWeight: tripType === "one-way" ? "bold" : "normal",
              cursor: "pointer",
            }}
            onClick={() => handleTripTypeChange("one-way")}
          >
            ONE-WAY
          </Typography>

          <Button
            sx={{
              borderRadius: "50%",
              width: 36,
              height: 36,
              minWidth: 36,
              p: 0,
              mr: 1,
              border: "2px solid",
              borderColor: tripType === "multi-city" ? "#32D095" : "#ccc",
              position: "relative",
            }}
            onClick={() => handleTripTypeChange("multi-city")}
          >
            {tripType === "multi-city" && (
              <Box
                sx={{
                  width: 20,
                  height: 20,
                  borderRadius: "50%",
                  backgroundColor: "#32D095",
                  position: "absolute",
                }}
              />
            )}
          </Button>
          <Typography
            variant="body1"
            sx={{
              color: tripType === "multi-city" ? "#32D095" : "text.primary",
              fontWeight: tripType === "multi-city" ? "bold" : "normal",
              cursor: "pointer",
            }}
            onClick={() => handleTripTypeChange("multi-city")}
          >
            MULTI-CITY
          </Typography>
        </Box>

        {/* Flight Segments */}
        {formData.segments.map((segment, index) => (
          <Box
            key={index}
            sx={{ mb: index < formData.segments.length - 1 ? 4 : 0 }}
          >
            {index > 0 && (
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                {`From`}
              </Typography>
            )}
            <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
              <Box sx={{ flex: 1 }}>
                <Typography variant="body2" color="text.secondary">
                  {index === 0 ? "FROM" : "From"}
                </Typography>
                <Typography
                  variant="h3"
                  sx={{
                    color: "#32D095",
                    fontSize: "3rem",
                    fontWeight: "bold",
                  }}
                >
                  {segment.from}
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
                  <Typography variant="body2">{segment.fromAirport}</Typography>
                </Box>
              </Box>

              <Box
                component="img"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMzJEMDk1IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgY2xhc3M9ImZlYXRoZXIgZmVhdGhlci1wbGFuZSI+PHBhdGggZD0iTTE3LjggNC44bDIgMi0xNS41IDE1LjVoLTJ2LTJMMTcuOCA0Ljh6Ij48L3BhdGg+PHBhdGggZD0iTTkgMTVsLTIgLTIiPjwvcGF0aD48cGF0aCBkPSJNMTkuNyAyLjNhMi4zIDIuMyAwIDEgMSAwIDMuMjYgMi4zIDIuMyAwIDAgMSAwIC0zLjI2Ij48L3BhdGg+PHBhdGggZD0iTTE1IDdsLTggOCI+PC9wYXRoPjxwYXRoIGQ9Ik0xOCA0bDIgMiI+PC9wYXRoPjwvc3ZnPg=="
                alt="Airplane"
                sx={{
                  width: 80,
                  height: 80,
                  mx: 4,
                }}
              />

              <Box sx={{ flex: 1 }}>
                <Typography variant="body2" color="text.secondary">
                  {index === 0 ? "TO" : "To"}
                </Typography>
                <Typography
                  variant="h3"
                  sx={{
                    color: "#32D095",
                    fontSize: "3rem",
                    fontWeight: "bold",
                  }}
                >
                  {segment.to}
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
                  <Typography variant="body2">{segment.toAirport}</Typography>
                </Box>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#f0f7ff",
                p: 1,
                borderRadius: "4px",
                mb: 2,
                width: "100%",
              }}
            >
              <CalendarMonth sx={{ color: "#32D095", mr: 1 }} />
              <Typography variant="body1">{segment.departureDate}</Typography>
            </Box>
          </Box>
        ))}

        {/* Return Date (only for round-way) */}
        {tripType === "round-way" && (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#f0f7ff",
              p: 1,
              borderRadius: "4px",
              mb: 2,
              width: "100%",
            }}
          >
            <CalendarMonth sx={{ color: "#32D095", mr: 1 }} />
            <Typography variant="body1">{formData.returnDate}</Typography>
          </Box>
        )}

        {/* Add City Button (only for multi-city) */}
        {tripType === "multi-city" && (
          <Button
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: "#32D095",
              color: "white",
              py: 1.5,
              mt: 2,
              "&:hover": {
                backgroundColor: "#28b580",
              },
            }}
            onClick={addCity}
          >
            Add City
          </Button>
        )}
      </Box>

      {/* Vertical divider */}
      <Divider
        orientation="vertical"
        flexItem
        sx={{ display: { xs: "none", md: "block" } }}
      />

      {/* Right side - Passenger and class selection */}
      <Box
        sx={{
          width: { xs: "100%", md: "300px" },
          p: 2,
          borderLeft: { xs: "none", md: "1px solid #eee" },
          borderTop: { xs: "1px solid #eee", md: "none" },
        }}
      >
        <FormControl fullWidth sx={{ mb: 2 }}>
          <Select
            value={formData.adults}
            onChange={handleInputChange}
            name="adults"
            sx={{
              backgroundColor: "#f0f7ff",
              borderRadius: "4px",
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "transparent",
              },
            }}
          >
            <MenuItem value="1 ADULT">1 ADULT</MenuItem>
            <MenuItem value="2 ADULTS">2 ADULTS</MenuItem>
            <MenuItem value="3 ADULTS">3 ADULTS</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth sx={{ mb: 2 }}>
          <Select
            value={formData.children}
            onChange={handleInputChange}
            name="children"
            sx={{
              backgroundColor: "#f0f7ff",
              borderRadius: "4px",
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "transparent",
              },
            }}
          >
            <MenuItem value="0 CHILD">0 CHILD</MenuItem>
            <MenuItem value="1 CHILD">1 CHILD</MenuItem>
            <MenuItem value="2 CHILDREN">2 CHILDREN</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth sx={{ mb: 2 }}>
          <Select
            value={formData.infants}
            onChange={handleInputChange}
            name="infants"
            sx={{
              backgroundColor: "#f0f7ff",
              borderRadius: "4px",
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "transparent",
              },
            }}
          >
            <MenuItem value="0 INFANT">0 INFANT</MenuItem>
            <MenuItem value="1 INFANT">1 INFANT</MenuItem>
            <MenuItem value="2 INFANTS">2 INFANTS</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth sx={{ mb: 2 }}>
          <Select
            value={formData.class}
            onChange={handleInputChange}
            name="class"
            sx={{
              backgroundColor: "#f0f7ff",
              borderRadius: "4px",
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "transparent",
              },
            }}
          >
            <MenuItem value="Economy">Economy</MenuItem>
            <MenuItem value="Business">Business</MenuItem>
            <MenuItem value="First Class">First Class</MenuItem>
          </Select>
        </FormControl>

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
          SEARCH FOR FLIGHT
        </Button>
      </Box>
    </Paper>
  );
};

export default FlightTab;
