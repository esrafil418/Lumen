import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import { IconButton, Tooltip } from "@mui/material";
import { useColorScheme } from "@mui/material/styles";

export default function ColorModeToggle() {
  const { mode, setMode } = useColorScheme();

  if (!mode) return null;

  const next = mode === "dark" ? "light" : "dark";

  return (
    <Tooltip title={`Switch to ${next} mode`}>
      <IconButton
        color="inherit"
        onClick={() => setMode(next)}
        aria-label="toggle color mode"
      >
        {mode === "dark" ? (
          <LightModeOutlinedIcon />
        ) : (
          <DarkModeOutlinedIcon />
        )}
      </IconButton>
    </Tooltip>
  );
}
