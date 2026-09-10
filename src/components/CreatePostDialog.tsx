import CloseIcon from "@mui/icons-material/Close";
import { Dialog, DialogContent, DialogTitle, IconButton } from "@mui/material";
import BlogForm from "./BlogForm";

interface CreatePostDialogProps {
  open: boolean;
  onClose: () => void;
}

export default function CreatePostDialog({
  open,
  onClose,
}: CreatePostDialogProps) {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ fontFamily: '"Fraunces", Georgia, serif' }}>
        Write a new story
        <IconButton
          onClick={onClose}
          sx={{ position: "absolute", right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <BlogForm onSuccess={onClose} onCancel={onClose} />
      </DialogContent>
    </Dialog>
  );
}
