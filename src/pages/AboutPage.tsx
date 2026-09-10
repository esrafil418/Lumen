import { Box, Container, Grid, Stack, Typography } from "@mui/material";

export default function AboutPage() {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Typography variant="overline" color="secondary">
        About Lumen
      </Typography>
      <Typography variant="h3" component="h1" gutterBottom>
        A small magazine for slower reading.
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 5, fontSize: "1.1rem" }}>
        Lumen started as a Material UI playground and grew into a reading room:
        featured covers, writer portraits, and stories you can filter, search,
        and publish yourself.
      </Typography>
      <Grid container spacing={3}>
        {[
          { label: "30+", copy: "stories from the archive" },
          { label: "Live", copy: "photography covers on every story" },
          { label: "Yours", copy: "publish a new piece in seconds" },
        ].map((item) => (
          <Grid key={item.label} size={{ xs: 12, sm: 4 }}>
            <Box
              sx={{
                p: 3,
                border: "1px solid",
                borderColor: "divider",
                borderRadius: 3,
                bgcolor: "background.paper",
              }}
            >
              <Typography variant="h4">{item.label}</Typography>
              <Typography color="text.secondary">{item.copy}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Stack spacing={2} sx={{ mt: 6 }}>
        <Typography variant="h5">How it works</Typography>
        <Typography color="text.secondary">
          Stories are loaded from DummyJSON. Each post gets a unique photography
          cover, plus a writer portrait from DummyJSON users. New stories you
          write stay in this session so you can see them on the home grid
          immediately.
        </Typography>
      </Stack>
    </Container>
  );
}
