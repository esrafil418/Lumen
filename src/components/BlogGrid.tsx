import {
  Box,
  Chip,
  Container,
  Grid,
  Pagination,
  Skeleton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useMemo, useState } from "react";
import { usePostsStore } from "../stores/postsStore";
import BlogCard from "./BlogCard";
import Hero from "./Hero";

const PAGE_SIZE = 12;

export default function BlogGrid() {
  const { posts, loading, error } = usePostsStore();
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState("all");
  const [page, setPage] = useState(1);

  const tags = useMemo(() => {
    const unique = new Set<string>();
    posts.forEach((post) => post.tags.forEach((tag) => unique.add(tag)));
    return ["all", ...Array.from(unique).sort()];
  }, [posts]);

  const filtered = useMemo(() => {
    return posts.filter((post) => {
      const matchesTag = activeTag === "all" || post.tags.includes(activeTag);
      const haystack = `${post.title} ${post.body}`.toLowerCase();
      const matchesQuery = haystack.includes(query.trim().toLowerCase());
      return matchesTag && matchesQuery;
    });
  }, [posts, activeTag, query]);

  if (loading) {
    return (
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Skeleton variant="rounded" height={420} sx={{ mb: 4 }} />
        <Grid container spacing={3}>
          {Array.from({ length: 6 }).map((_, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
              <Skeleton variant="rounded" height={360} />
            </Grid>
          ))}
        </Grid>
      </Container>
    );
  }

  if (error) {
    return (
      <Container maxWidth="sm" sx={{ py: 10, textAlign: "center" }}>
        <Typography variant="h5" gutterBottom>
          Couldn’t load stories
        </Typography>
        <Typography color="text.secondary">{error}</Typography>
      </Container>
    );
  }

  const browsingAll = !query && activeTag === "all";
  const [featured, ...rest] = posts;
  const list = browsingAll ? rest : filtered;
  const pageCount = Math.max(1, Math.ceil(list.length / PAGE_SIZE));
  const currentPage = Math.min(page, pageCount);
  const gridPosts = list.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE,
  );

  return (
    <Box>
      {featured && browsingAll && currentPage === 1 ? (
        <Hero post={featured} />
      ) : null}

      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={2}
          sx={{ mb: 3, justifyContent: "space-between", alignItems: { md: "center" } }}
        >
          <Box>
            <Typography variant="h4" component="h2">
              Latest stories
            </Typography>
            <Typography color="text.secondary">
              Essays, mysteries, and notes from the archive.
            </Typography>
          </Box>
          <TextField
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setPage(1);
            }}
            placeholder="Search titles and excerpts"
            size="small"
            sx={{ minWidth: { md: 280 } }}
          />
        </Stack>

        <Stack direction="row" spacing={1} useFlexGap sx={{ mb: 4, flexWrap: "wrap" }}>
          {tags.map((tag) => (
            <Chip
              key={tag}
              label={tag}
              clickable
              color={activeTag === tag ? "secondary" : "default"}
              variant={activeTag === tag ? "filled" : "outlined"}
              onClick={() => {
                setActiveTag(tag);
                setPage(1);
              }}
            />
          ))}
        </Stack>

        {gridPosts.length === 0 ? (
          <Typography color="text.secondary">No stories match that filter.</Typography>
        ) : (
          <>
            <Grid container spacing={3}>
              {gridPosts.map((post) => (
                <Grid key={post.id} size={{ xs: 12, sm: 6, md: 4 }}>
                  <BlogCard {...post} />
                </Grid>
              ))}
            </Grid>
            {pageCount > 1 ? (
              <Stack sx={{ mt: 5, alignItems: "center" }}>
                <Pagination
                  count={pageCount}
                  page={currentPage}
                  color="secondary"
                  onChange={(_event, nextPage) => {
                    setPage(nextPage);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                />
              </Stack>
            ) : null}
          </>
        )}
      </Container>
    </Box>
  );
}
