import FavoriteIcon from "@mui/icons-material/Favorite";
import {
  Avatar,
  Box,
  Button,
  Chip,
  Container,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import { Link as RouterLink, useParams } from "react-router-dom";
import {
  getPostDate,
  usePostsStore,
} from "../stores/postsStore";
import { getFallbackCover, readingTime } from "../utils/postMedia";

export default function PostPage() {
  const { id } = useParams();
  const { posts, authors, fetchPosts, likePost, loading } = usePostsStore();

  useEffect(() => {
    void fetchPosts();
  }, [fetchPosts]);

  const post = posts.find((item) => String(item.id) === id);

  if (loading && !post) {
    return (
      <Container maxWidth="md" sx={{ py: 6 }}>
        <Skeleton variant="rounded" height={320} sx={{ mb: 3 }} />
        <Skeleton variant="text" height={64} />
        <Skeleton variant="text" />
        <Skeleton variant="text" />
      </Container>
    );
  }

  if (!post) {
    return (
      <Container maxWidth="sm" sx={{ py: 12, textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          Story not found
        </Typography>
        <Button component={RouterLink} to="/" color="secondary">
          Back to stories
        </Button>
      </Container>
    );
  }

  const author = authors[post.userId];
  const authorName = author
    ? `${author.firstName} ${author.lastName}`
    : `Writer ${post.userId}`;
  const cover = post.cover ?? getFallbackCover(post.id);
  const related = posts
    .filter((item) => item.id !== post.id)
    .filter((item) => item.tags.some((tag) => post.tags.includes(tag)))
    .slice(0, 3);

  return (
    <Box>
      <Box
        component="img"
        src={cover}
        alt={post.title}
        onError={(event) => {
          event.currentTarget.src = getFallbackCover(post.id);
        }}
        sx={{
          width: "100%",
          height: { xs: 280, md: 460 },
          objectFit: "cover",
        }}
      />
      <Container maxWidth="md" sx={{ py: 6 }}>
        <Stack direction="row" spacing={1} sx={{ mb: 2, flexWrap: "wrap" }}>
          {post.tags.map((tag) => (
            <Chip key={tag} label={tag} size="small" color="secondary" />
          ))}
        </Stack>
        <Typography variant="h3" component="h1" gutterBottom>
          {post.title}
        </Typography>
        <Stack direction="row" spacing={2} sx={{ mb: 4, alignItems: "center" }}>
          <Avatar src={author?.image} alt={authorName}>
            {authorName[0]}
          </Avatar>
          <Box>
            <Typography variant="subtitle1">{authorName}</Typography>
            <Typography variant="body2" color="text.secondary">
              {getPostDate(post.id)} · {readingTime(post.body)} min read ·{" "}
              {post.views} views
            </Typography>
          </Box>
        </Stack>
        <Typography variant="body1" sx={{ fontSize: "1.15rem", lineHeight: 1.8 }}>
          {post.body}
        </Typography>
        <Button
          startIcon={<FavoriteIcon />}
          onClick={() => likePost(post.id)}
          sx={{ mt: 4 }}
          color="secondary"
          variant="outlined"
        >
          {post.reactions.likes} likes
        </Button>

        {related.length > 0 && (
          <Box sx={{ mt: 8 }}>
            <Typography variant="h5" gutterBottom>
              More in this vein
            </Typography>
            <Stack spacing={1.5}>
              {related.map((item) => (
                <Button
                  key={item.id}
                  component={RouterLink}
                  to={`/posts/${item.id}`}
                  color="inherit"
                  sx={{ justifyContent: "flex-start" }}
                >
                  {item.title}
                </Button>
              ))}
            </Stack>
          </Box>
        )}
      </Container>
    </Box>
  );
}
