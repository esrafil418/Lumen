import AddIcon from "@mui/icons-material/Add";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";

interface BlogHeaderProps {
  onNewPost?: () => void;
}

export default function BlogHeader({ onNewPost }: BlogHeaderProps) {
  return (
    <AppBar position="sticky" color="primary">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              fontWeight: 700,
              visibility: { xs: "hidden", sm: "visible" },
            }}
          >
            My Blog
          </Typography>

          <Box sx={{ display: "flex", gap: 2 }}>
            <Button color="inherit">Home</Button>
            <Button color="inherit">About</Button>
            <Button
              color="inherit"
              onClick={onNewPost}
              startIcon={<AddIcon />}
              sx={{ ml: 1 }}
            >
              <Box
                component="span"
                sx={{ display: { xs: "none", sm: "inline" } }}
              >
                New Post
              </Box>
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
