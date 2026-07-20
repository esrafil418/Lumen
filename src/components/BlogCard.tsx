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

interface BlogCardProps {
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  tags: string[];
}

export default function BlogCard({
  title,
  excerpt,
  image,
  author,
  date,
  tags,
}: BlogCardProps) {
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
        image={image}
        alt={title}
        sx={{
          objectFit: "cover",
        }}
      >
        <CardContent sx={{ flexGrow: 1 }}>
          <Box sx={{ display: "flex", alignItems: "canter", mb: 2 }}>
            <Avatar sx={{ mr: 1 }}>{author[0]}</Avatar>
            <Box>
              <Typography variant="subtitle2">{author}</Typography>
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
            {excerpt}
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
              Like
            </Button>
            <Button size="small" startIcon={<Comment />}>
              Comment
            </Button>
          </Box>
          <Button size="small" startIcon={<Share />}>
            Share
          </Button>
        </CardActions>
      </CardMedia>
    </Card>
  );
}
