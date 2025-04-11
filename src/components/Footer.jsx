import { Box, Container, Grid, Typography, Divider } from "@mui/material";
import { MdLocationPin } from "react-icons/md";
import { IoMailSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#f5f5f5", mt: 10, pt: 6, pb: 3 }}>
      <Container maxWidth="lg">
        <Grid container columns={{ xs: 1, sm: 2, md: 4 }} spacing={4}>
          <Grid>
            <Typography variant="h6" gutterBottom>
              Need Help
            </Typography>
            <Typography
              variant="body2"
              className="flex items-center gap-1 text-gray-600"
            >
              <MdLocationPin className="text-red-500" />
              Ka 11/2A, Bashundhara R/A Road, Jagannathpur, Dhaka 1229
            </Typography>
            <Typography
              variant="body2"
              className="flex items-center gap-1 text-gray-600"
            >
              <IoMailSharp className="text-red-500" />
              support@flyfarint.com
            </Typography>
            <Typography
              variant="body2"
              className="flex items-center gap-1 text-gray-600"
            >
              <FaPhoneAlt  className="text-red-500" />
              +880 1755 572 099
            </Typography>

            <Typography variant="body2">Careers</Typography>
            <Typography variant="body2">Blog</Typography>
          </Grid>
          <Grid>
            <Typography variant="h6" gutterBottom>
              Services
            </Typography>
            <Typography variant="body2">Flight Booking</Typography>
            <Typography variant="body2">Hotel Booking</Typography>
            <Typography variant="body2">Travel Packages</Typography>
          </Grid>
          <Grid>
            <Typography variant="h6" gutterBottom>
              Support
            </Typography>
            <Typography variant="body2">Help Center</Typography>
            <Typography variant="body2">Contact Us</Typography>
            <Typography variant="body2">Cancellation Policy</Typography>
          </Grid>
          <Grid>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Typography variant="body2">Facebook</Typography>
            <Typography variant="body2">Instagram</Typography>
            <Typography variant="body2">YouTube</Typography>
          </Grid>
        </Grid>

        {/* Divider Section */}
        <Box sx={{ my: 4 }}>
          <Divider />
        </Box>

        {/* Bottom Info Section */}
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="body2" color="text.secondary">
            &copy; {new Date().getFullYear()} TripFinderUI. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
