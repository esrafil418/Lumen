import { Comment, Favorite, Share } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from "@mui/material";
import type { Posts } from "../stores/postsStore";

export default function BlogCard({
  title,
  body,
  tags,
  reactions,
  views,
  userId,
}: Posts) {
  // Generate a square image using DummyJSON
  const imageUrl = `https://dummyjson.com/image/400x200/282828?fontFamily=pacifico&text=${encodeURIComponent(title)}`;

  // author name
  const authorName = `User ${userId}`;

  // Placeholder date
  const date = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.3s ease-in-out, box-shadow 0.3s",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: "0 12px 20px rgba(0,0,0,0.15)",
        },
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={imageUrl}
        alt={title}
        sx={{
          objectFit: "cover",
        }}
      />

      <CardContent sx={{ flexGrow: 1 }}>
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <Avatar sx={{ mr: 1 }}>{authorName[0]}</Avatar>
          <Box>
            <Typography variant="subtitle2">{authorName}</Typography>
            <Typography variant="caption" color="text.secondary">
              {date}
            </Typography>
          </Box>
        </Box>

        <Typography variant="h5" component="h2" gutterBottom>
          {title}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          component="p"
          sx={{ mb: 2 }}
        >
          {body.length > 150 ? body.slice(0, 150) + "..." : body}
        </Typography>

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5, mt: 2 }}>
          {tags.map((tag) => (
            <Chip
              key={tag}
              label={tag}
              size="small"
              color="primary"
              variant="outlined"
            />
          ))}
        </Box>
      </CardContent>

      <CardActions sx={{ justifyContent: "space-between", px: 2, pb: 2 }}>
        <Box>
          <Button size="small" startIcon={<Favorite />}>
            {reactions.likes}
          </Button>
          <Button size="small" startIcon={<Comment />}>
            Comment
          </Button>
        </Box>
        <Box>
          <Typography variant="caption" color="text.secondary" sx={{ mr: 1 }}>
            {views} views
          </Typography>
          <Button size="small" startIcon={<Share />}>
            Share
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
}
