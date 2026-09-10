import {
  Box,
  Button,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { usePostsStore } from "../stores/postsStore";

const CATEGORIES = [
  { value: "technology", label: "Technology" },
  { value: "design", label: "Design" },
  { value: "business", label: "Business" },
  { value: "fiction", label: "Fiction" },
  { value: "mystery", label: "Mystery" },
];

interface BlogFormProps {
  onSuccess?: () => void;
  onCancel?: () => void;
}

export default function BlogForm({ onSuccess, onCancel }: BlogFormProps) {
  const addPost = usePostsStore((state) => state.addPost);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    category: "fiction",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addPost({
      title: formData.title,
      body: formData.content,
      tags: [formData.category],
    });
    onSuccess?.();
    setFormData({ title: "", content: "", category: "fiction" });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ pt: 1 }}>
      <Stack spacing={3}>
        <TextField
          label="Story title"
          name="title"
          value={formData.title}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, title: e.target.value }))
          }
          fullWidth
          required
        />

        <FormControl fullWidth required>
          <InputLabel>Category</InputLabel>
          <Select
            name="category"
            value={formData.category}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, category: e.target.value }))
            }
            label="Category"
          >
            {CATEGORIES.map((category) => (
              <MenuItem key={category.value} value={category.value}>
                {category.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <TextField
          label="Story"
          name="content"
          value={formData.content}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, content: e.target.value }))
          }
          multiline
          rows={7}
          fullWidth
          required
        />

        <Box>
          <Chip label={formData.category} size="small" color="secondary" />
        </Box>

        <Stack direction="row" spacing={1.5} sx={{ justifyContent: "flex-end" }}>
          {onCancel && (
            <Button variant="outlined" color="inherit" onClick={onCancel}>
              Cancel
            </Button>
          )}
          <Button type="submit" variant="contained" color="secondary">
            Publish
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}
