import { Box } from "@mui/material";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import BlogFooter from "./components/BlogFooter";
import BlogHeader from "./components/BlogHeader";
import CreatePostDialog from "./components/CreatePostDialog";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";

export default function App() {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <BlogHeader onNewPost={() => setDialogOpen(true)} />

      <Box component="main" sx={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/posts/:id" element={<PostPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Box>

      <BlogFooter />

      <CreatePostDialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
      />
    </Box>
  );
}
