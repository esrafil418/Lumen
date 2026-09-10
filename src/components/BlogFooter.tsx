import {
  Box,
  Container,
  Divider,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function BlogFooter() {
  return (
    <Box
      component="footer"
      sx={{
        mt: "auto",
        borderTop: "1px solid",
        borderColor: "divider",
        bgcolor: "background.paper",
        py: 6,
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={3}
          sx={{ justifyContent: "space-between" }}
        >
          <Box>
            <Typography variant="h5" gutterBottom>
              Lumen
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 360 }}>
              A quieter place for longer thoughts — essays, fiction, and
              field notes from the web.
            </Typography>
          </Box>
          <Stack direction="row" spacing={3}>
            <Link component={RouterLink} to="/" color="inherit" underline="hover">
              Home
            </Link>
            <Link
              component={RouterLink}
              to="/about"
              color="inherit"
              underline="hover"
            >
              About
            </Link>
          </Stack>
        </Stack>
        <Divider sx={{ my: 3 }} />
        <Typography variant="caption" color="text.secondary">
          © 2026 Lumen. Images from Unsplash. Stories from DummyJSON.
        </Typography>
      </Container>
    </Box>
  );
}
