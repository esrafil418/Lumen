import {
  Box,
  Button,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState } from "react";

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  maxWidth: 800,
  margin: "0 auto",
  marginTop: theme.spacing(4),
}));

export default function BlogForm() {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    category: "",
    tags: ["react", "typescript", "next.js"],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <StyledPaper elevation={3}>
      <Typography variant="h5" component="h2" gutterBottom>
        Create New Post
      </Typography>

      <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <TextField
            label="Post Title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            fullWidth
            required
            variant="outlined"
          />

          <FormControl fullWidth required>
            <InputLabel>Category</InputLabel>
            <Select
              name="category"
              value={formData.category}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  category: e.target.value,
                }))
              }
              label="Category"
            >
              <MenuItem value="technology">Technology</MenuItem>
              <MenuItem value="design">Design</MenuItem>
              <MenuItem value="business">Business</MenuItem>
            </Select>
          </FormControl>

          <TextField
            label="Content"
            name="content"
            value={formData.content}
            onChange={handleInputChange}
            multiline
            rows={6}
            fullWidth
            required
            variant="outlined"
          />

          <Box>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Tags:
              {formData.tags.map((tag) => (
                <Chip key={tag} label={tag} size="small" sx={{ mx: 0.5 }} />
              ))}
            </Typography>
          </Box>

          <Box sx={{ display: "flex", gap: 2, justifyContent: "flex-end" }}>
            <Button variant="outlined" color="secondary">
              Save Draft
            </Button>
            <Button type="submit" variant="contained" color="primary">
              Publish Post
            </Button>
          </Box>
        </Stack>
      </form>
    </StyledPaper>
  );
}
