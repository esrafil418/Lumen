import { useEffect } from "react";
import BlogGrid from "../components/BlogGrid";
import { usePostsStore } from "../stores/postsStore";

export default function HomePage() {
  const fetchPosts = usePostsStore((state) => state.fetchPosts);

  useEffect(() => {
    void fetchPosts();
  }, [fetchPosts]);

  return <BlogGrid />;
}
