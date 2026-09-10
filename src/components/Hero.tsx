import {
  Box,
  Button,
  Chip,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import {
  getPostDate,
  type Posts,
  usePostsStore,
} from "../stores/postsStore";
import { getFallbackCover, readingTime } from "../utils/postMedia";

export default function Hero({ post }: { post: Posts }) {
  const author = usePostsStore((state) => state.authors[post.userId]);
  const authorName = author
    ? `${author.firstName} ${author.lastName}`
    : `Writer ${post.userId}`;
  const cover = post.cover ?? getFallbackCover(post.id);

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: { xs: 480, md: 560 },
        display: "flex",
        alignItems: "flex-end",
        color: "#fff",
        overflow: "hidden",
      }}
    >
      <Box
        component="img"
        src={cover}
        alt={post.title}
        onError={(event) => {
          event.currentTarget.src = getFallbackCover(post.id);
        }}
        sx={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(18,16,14,0.15) 0%, rgba(18,16,14,0.82) 100%)",
        }}
      />
      <Container maxWidth="lg" sx={{ position: "relative", pb: { xs: 5, md: 8 } }}>
        <Chip
          label="Featured story"
          sx={{
            mb: 2,
            bgcolor: "secondary.main",
            color: "white",
            fontWeight: 600,
          }}
        />
        <Typography
          variant="h2"
          component="h1"
          sx={{ maxWidth: 780, mb: 2, fontSize: { xs: "2.1rem", md: "3.4rem" } }}
        >
          {post.title}
        </Typography>
        <Typography
          variant="h6"
          sx={{ maxWidth: 640, mb: 3, fontWeight: 400, opacity: 0.9 }}
        >
          {post.body.slice(0, 160)}…
        </Typography>
        <Stack direction="row" spacing={2} sx={{ alignItems: "center", flexWrap: "wrap" }}>
          <Typography variant="body2">
            {authorName} · {getPostDate(post.id)} · {readingTime(post.body)} min
          </Typography>
          <Button
            component={RouterLink}
            to={`/posts/${post.id}`}
            variant="contained"
            color="secondary"
          >
            Read the story
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
