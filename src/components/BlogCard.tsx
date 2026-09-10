import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
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

export default function BlogCard(post: Posts) {
  const author = usePostsStore((state) => state.authors[post.userId]);
  const authorName = author
    ? `${author.firstName} ${author.lastName}`
    : `Writer ${post.userId}`;
  const cover = post.cover ?? getFallbackCover(post.id);

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        transition: "transform 0.35s ease, box-shadow 0.35s ease",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: "0 18px 40px rgba(28, 25, 23, 0.12)",
        },
      }}
    >
      <CardActionArea
        component={RouterLink}
        to={`/posts/${post.id}`}
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
        }}
      >
        <CardMedia
          component="img"
          height="210"
          image={cover}
          alt={post.title}
          onError={(event) => {
            event.currentTarget.src = getFallbackCover(post.id);
          }}
          sx={{ objectFit: "cover" }}
        />

        <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
          <Stack direction="row" spacing={1} sx={{ mb: 1.5, flexWrap: "wrap" }}>
            {post.tags.slice(0, 2).map((tag) => (
              <Chip key={tag} label={tag} size="small" variant="outlined" />
            ))}
          </Stack>

          <Typography variant="h6" component="h2" gutterBottom>
            {post.title}
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mb: 2, flexGrow: 1 }}
          >
            {post.body.length > 120 ? `${post.body.slice(0, 120)}…` : post.body}
          </Typography>

          <Stack direction="row" spacing={1.5} sx={{ alignItems: "center" }}>
            <Avatar
              src={author?.image}
              alt={authorName}
              sx={{ width: 32, height: 32 }}
            >
              {authorName[0]}
            </Avatar>
            <Box sx={{ flexGrow: 1, minWidth: 0 }}>
              <Typography variant="subtitle2" noWrap>
                {authorName}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {getPostDate(post.id)} · {readingTime(post.body)} min read
              </Typography>
            </Box>
            <Stack direction="row" spacing={1} color="text.secondary">
              <FavoriteBorderIcon sx={{ fontSize: 16 }} />
              <Typography variant="caption">{post.reactions.likes}</Typography>
              <VisibilityOutlinedIcon sx={{ fontSize: 16 }} />
              <Typography variant="caption">{post.views}</Typography>
            </Stack>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
