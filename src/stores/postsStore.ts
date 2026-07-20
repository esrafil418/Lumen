import { create } from "zustand";

export interface Posts {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: {
    likes: number;
    dislikes: number;
  };
  views: number;
  userId: number;
}

interface PostsStore {
  posts: Posts[];
  loading: boolean;
  error: string | null;
  fetchPosts: () => Promise<void>;
}

export const usePostsStore = create<PostsStore>((set) => {
  return {
    posts: [],
    loading: false,
    error: null,

    fetchPosts: async () => {
      set({ loading: true });

      try {
        const res = await fetch("https://dummyjson.com/posts");
        const data = await res.json();

        set({
          posts: data,
          loading: false,
          error: null,
        });
      } catch (error) {
        console.log(error);
        set({ loading: false, error: "Failed to fetch Posts" });
      }
    },
  };
});
