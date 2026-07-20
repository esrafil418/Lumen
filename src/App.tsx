import { Box, Container, Typography } from "@mui/material";
import BlogGrid from "./components/BlogGrid";
import BlogHeader from "./components/BlogHeader";

export default function App() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <BlogHeader />

      <Container component="main" sx={{ flex: 1, py: 4 }}>
        <BlogGrid />
        {/* <BlogForm /> */}
      </Container>

      <Box
        component="footer"
        sx={{
          py: 3,
          bgcolor: "primary.main",
          color: "white",
          mt: "auto",
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="body2" align="center">
            © 2026 My Blog. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}
