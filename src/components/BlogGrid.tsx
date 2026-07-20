import { Container, Grid, Typography } from "@mui/material";
import { useEffect } from "react";
import { usePostsStore } from "../stores/postsStore";
import BlogCard from "./BlogCard";

export default function BlogGrid() {
  const { posts, loading, error, fetchPosts } = usePostsStore();

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  if (loading) {
    return <p>Loading Posts...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ mb: 4 }}>
        Latest Posts
      </Typography>

      <Grid container spacing={4}>
        {posts.map((post) => (
          <Grid key={post.id} size={{ xs: 12, sm: 6, md: 4 }}>
            <BlogCard {...post} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
