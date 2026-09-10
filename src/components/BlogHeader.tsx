import AddIcon from "@mui/icons-material/Add";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import ColorModeToggle from "./ColorModeToggle";

interface BlogHeaderProps {
  onNewPost?: () => void;
}

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
];

export default function BlogHeader({ onNewPost }: BlogHeaderProps) {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <AppBar
      position="sticky"
      elevation={0}
      color="transparent"
      sx={{
        borderBottom: "1px solid",
        borderColor: "divider",
        bgcolor: "rgba(246, 241, 234, 0.72)",
        backdropFilter: "blur(16px)",
        "[data-mui-color-scheme='dark'] &": {
          bgcolor: "rgba(18, 16, 14, 0.72)",
        },
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: 72 }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => setOpen(true)}
            sx={{ mr: 1, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant="h6"
            component={RouterLink}
            to="/"
            sx={{
              flexGrow: 1,
              fontWeight: 700,
              textDecoration: "none",
              color: "text.primary",
              letterSpacing: "-0.03em",
            }}
          >
            Lumen
          </Typography>

          <Stack
            direction="row"
            spacing={1}
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          >
            {navItems.map((item) => (
              <Button
                key={item.to}
                component={RouterLink}
                to={item.to}
                color="inherit"
                sx={{
                  color: "text.primary",
                  fontWeight: location.pathname === item.to ? 700 : 500,
                }}
              >
                {item.label}
              </Button>
            ))}
          </Stack>

          <ColorModeToggle />

          <Button
            variant="contained"
            color="secondary"
            onClick={onNewPost}
            startIcon={<AddIcon />}
            sx={{ ml: 1 }}
          >
            <Box component="span" sx={{ display: { xs: "none", sm: "inline" } }}>
              New story
            </Box>
          </Button>
        </Toolbar>
      </Container>

      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 260, p: 2 }} role="presentation">
          <Typography variant="h6" sx={{ px: 1, mb: 1 }}>
            Lumen
          </Typography>
          <List>
            {navItems.map((item) => (
              <ListItemButton
                key={item.to}
                component={RouterLink}
                to={item.to}
                selected={location.pathname === item.to}
                onClick={() => setOpen(false)}
              >
                <ListItemText primary={item.label} />
              </ListItemButton>
            ))}
            <ListItemButton
              onClick={() => {
                setOpen(false);
                onNewPost?.();
              }}
            >
              <ListItemText primary="New story" />
            </ListItemButton>
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
}
