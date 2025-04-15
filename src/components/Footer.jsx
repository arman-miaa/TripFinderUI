import {
  Box,
  Container,
  Grid,
  Typography,
  Divider,
  IconButton,
  Paper,
  InputBase,
} from "@mui/material";
import { MdLocationPin } from "react-icons/md";
import { IoMailSharp } from "react-icons/io5";
import { FaPaperPlane, FaSquareWhatsapp } from "react-icons/fa6";
import { FaFacebookSquare, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router";
import certificate1 from "../assets/certificate1.png";
import certificate2 from "../assets/certificate2.png";
import certificate3 from "../assets/certificate3.png";
import certificate4 from "../assets/certificate4.png";
import certificate5 from "../assets/certificate5.png";
import payment from "../assets/payment.webp";

const Footer = () => {
  return (
    <Box
      sx={{ backgroundColor: "#32D095", color: "white", mt: 10, pt: 6, pb: 3 }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Column 1 */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Need Help
            </Typography>
            <Box display="flex" alignItems="center" gap={1} color="white">
              <MdLocationPin />
              <Typography variant="body2">
                Ka 11/2A, Bashundhara R/A Road, <br /> Jagannathpur, Dhaka 1229
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" gap={1} color="white">
              <IoMailSharp />
              <Typography variant="body2">support@flyfarint.com</Typography>
            </Box>
            <Box display="flex" alignItems="center" gap={1} color="white">
              <FaPhoneAlt />
              <Typography variant="body2">+880 1755 572 099</Typography>
            </Box>
            <Box display="flex" alignItems="center" gap={2} mt={1}>
              <IconButton aria-label="Facebook" sx={{ color: "white" }}>
                <FaFacebookSquare size={24} />
              </IconButton>
              <IconButton aria-label="Instagram" sx={{ color: "white" }}>
                <FaInstagram size={24} />
              </IconButton>
              <IconButton aria-label="WhatsApp" sx={{ color: "white" }}>
                <FaSquareWhatsapp size={24} />
              </IconButton>
            </Box>
          </Grid>

          {/* Column 2 */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Discover
            </Typography>
            <Box display="flex" flexDirection="column" gap={1}>
              {[
                { label: "About Us", to: "/about" },
                { label: "Contact Us", to: "/contact" },
                { label: "Payment Method", to: "/payment-method" },
                { label: "Terms and Condition", to: "/terms" },
                { label: "Privacy Policy", to: "/privacy-policy" },
                { label: "Refund & Cancellation Policy", to: "/refund-policy" },
              ].map((link, index) => (
                <Typography
                  key={index}
                  variant="body2"
                  component={Link}
                  to={link.to}
                  color="inherit"
                  sx={{
                    textDecoration: "none",
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  {link.label}
                </Typography>
              ))}
            </Box>
          </Grid>

          {/* Column 3 */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Certification
            </Typography>
            <Box display="flex" flexDirection="column" gap={2}>
              {/* First row with 3 images */}
              <Box display="flex" gap={2}>
                <img src={certificate1} alt="Certificate 1" width={64} />
                <img src={certificate2} alt="Certificate 2" width={64} />
                <img src={certificate3} alt="Certificate 3" width={64} />
              </Box>

              {/* Second row with 2 images */}
              <Box display="flex" gap={2}>
                <img src={certificate4} alt="Certificate 4" width={56} />
                <img src={certificate5} alt="Certificate 5" width={56} />
              </Box>
            </Box>
          </Grid>

          {/* Column 4 */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Get In Touch
            </Typography>
            <Typography variant="body2" gutterBottom>
              Question or feedback? We'd love to hear from you.
            </Typography>
            <Paper
              component="form"
              sx={{
                display: "flex",
                alignItems: "center",
                borderRadius: "50px",
                padding: "2px 10px",
                border: "1px solid white",
                backgroundColor: "#32D095",
              }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Email Address"
                inputProps={{ "aria-label": "Email Address" }}
              />
              <IconButton type="submit" sx={{ p: "10px" }} aria-label="send">
                <FaPaperPlane className="bg-white  p-1 rounded-full" />
              </IconButton>
            </Paper>
          </Grid>
        </Grid>
        <Box>
          <img src={payment} alt="" />
        </Box>
        {/* Divider Section */}
        <Box sx={{ my: 4 }}>
          <Divider sx={{ backgroundColor: "white" }} />
        </Box>

        {/* Bottom Info Section */}
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="body2" color="white">
            &copy; {new Date().getFullYear()} by Fly Far Tech | B2C OTA Portal
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
