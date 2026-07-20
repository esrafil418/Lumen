import { Box, Container, Typography } from "@mui/material";
import { useState } from "react";
import BlogGrid from "./components/BlogGrid";
import BlogHeader from "./components/BlogHeader";
import CreatePostDialog from "./components/CreatePostDialog";

export default function App() {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <BlogHeader onNewPost={() => setDialogOpen(true)} />

      <Container component="main" sx={{ flex: 1, py: 4 }}>
        <BlogGrid />
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

      <CreatePostDialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
      />
    </Box>
  );
}
